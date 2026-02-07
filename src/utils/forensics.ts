/**
 * Forensics utility for visitor fingerprinting and IP detection
 */

// Jeffrey's known IP prefix (Verizon Wireless)
export const BLOCKED_IP_PREFIXES = [
  '2600:1004:b065:52b3:'
];

// Known harassment patterns (links, phrases, etc.)
export const BLOCKED_PATTERNS = [
  'tumblr.com/buttcheekbitch',
  'buttcheekbitch'
];

export interface ForensicData {
  ip: string;
  fingerprint: string;
  screenResolution: string;
  colorDepth: number;
  pixelRatio: number;
  timezone: string;
  timezoneOffset: number;
  language: string;
  platform: string;
  hardwareConcurrency: number;
  deviceMemory: number | undefined;
  touchPoints: number;
  webglVendor: string | null;
  webglRenderer: string | null;
  canvasHash: string;
  timestamp: string;
  // Extra sneaky stuff
  batteryLevel: number | null;
  batteryCharging: boolean | null;
  connectionType: string | null;
  downlinkSpeed: number | null;
  doNotTrack: string | null;
  cookiesEnabled: boolean;
  localIP: string | null;
  historyLength: number;
  referrer: string;
  incognito: boolean | null;
}

/**
 * Get visitor's public IP address
 */
export async function getVisitorIP(): Promise<string> {
  try {
    // Try IPv6 first
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    return data.ip || '';
  } catch (error) {
    try {
      // Fallback to IPv4
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip || '';
    } catch {
      return '';
    }
  }
}

/**
 * Generate canvas fingerprint
 */
function getCanvasFingerprint(): string {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    canvas.width = 200;
    canvas.height = 50;

    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText('fingerprint', 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText('fingerprint', 4, 17);

    return canvas.toDataURL().slice(-100);
  } catch {
    return '';
  }
}

/**
 * Get WebGL renderer info
 */
function getWebGLInfo(): { vendor: string | null; renderer: string | null } {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return { vendor: null, renderer: null };

    const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) return { vendor: null, renderer: null };

    return {
      vendor: (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer: (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    };
  } catch {
    return { vendor: null, renderer: null };
  }
}

/**
 * Generate a unique fingerprint hash from device characteristics
 */
function generateFingerprintHash(data: Partial<ForensicData>): string {
  const str = [
    data.screenResolution,
    data.colorDepth,
    data.pixelRatio,
    data.timezone,
    data.platform,
    data.hardwareConcurrency,
    data.deviceMemory,
    data.touchPoints,
    data.webglRenderer,
    data.canvasHash
  ].join('|');

  // Simple hash function
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

/**
 * Get battery info
 */
async function getBatteryInfo(): Promise<{ level: number | null; charging: boolean | null }> {
  try {
    const battery = await (navigator as any).getBattery();
    return {
      level: Math.round(battery.level * 100),
      charging: battery.charging
    };
  } catch {
    return { level: null, charging: null };
  }
}

/**
 * Get network connection info
 */
function getConnectionInfo(): { type: string | null; downlink: number | null } {
  try {
    const conn = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (conn) {
      return {
        type: conn.effectiveType || conn.type || null,
        downlink: conn.downlink || null
      };
    }
  } catch {}
  return { type: null, downlink: null };
}

/**
 * Try to get local IP via WebRTC
 */
async function getLocalIP(): Promise<string | null> {
  return new Promise((resolve) => {
    try {
      const pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel('');
      pc.createOffer().then(offer => pc.setLocalDescription(offer));

      const timeout = setTimeout(() => {
        pc.close();
        resolve(null);
      }, 1000);

      pc.onicecandidate = (ice) => {
        if (ice.candidate) {
          const parts = ice.candidate.candidate.split(' ');
          const ip = parts[4];
          if (ip && ip.match(/^(192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.)/)) {
            clearTimeout(timeout);
            pc.close();
            resolve(ip);
          }
        }
      };
    } catch {
      resolve(null);
    }
  });
}

/**
 * Detect incognito/private mode
 */
async function detectIncognito(): Promise<boolean | null> {
  try {
    const fs = (navigator as any).webkitTemporaryStorage;
    if (fs) {
      return new Promise((resolve) => {
        fs.queryUsageAndQuota((used: number, quota: number) => {
          // In incognito, quota is usually limited to ~120MB
          resolve(quota < 120000000);
        }, () => resolve(null));
      });
    }

    // Firefox detection
    const db = indexedDB.open('test');
    db.onerror = () => true;

    return null;
  } catch {
    return null;
  }
}

/**
 * Collect comprehensive forensic data from visitor
 */
export async function collectForensicData(): Promise<ForensicData> {
  const webglInfo = getWebGLInfo();
  const canvasHash = getCanvasFingerprint();
  const batteryInfo = await getBatteryInfo();
  const connectionInfo = getConnectionInfo();
  const localIP = await getLocalIP();
  const incognito = await detectIncognito();

  const data: Partial<ForensicData> = {
    screenResolution: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    pixelRatio: window.devicePixelRatio,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    language: navigator.language,
    platform: navigator.platform,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: (navigator as any).deviceMemory,
    touchPoints: navigator.maxTouchPoints,
    webglVendor: webglInfo.vendor,
    webglRenderer: webglInfo.renderer,
    canvasHash: canvasHash,
    timestamp: new Date().toISOString(),
    // Extra sneaky stuff
    batteryLevel: batteryInfo.level,
    batteryCharging: batteryInfo.charging,
    connectionType: connectionInfo.type,
    downlinkSpeed: connectionInfo.downlink,
    doNotTrack: navigator.doNotTrack,
    cookiesEnabled: navigator.cookieEnabled,
    localIP: localIP,
    historyLength: window.history.length,
    referrer: document.referrer || 'direct',
    incognito: incognito
  };

  // Get IP address
  const ip = await getVisitorIP();

  // Generate fingerprint hash
  const fingerprint = generateFingerprintHash(data);

  return {
    ...data,
    ip,
    fingerprint
  } as ForensicData;
}

/**
 * Check if visitor IP matches blocked prefixes
 */
export function isBlockedIP(ip: string): boolean {
  return BLOCKED_IP_PREFIXES.some(prefix => ip.startsWith(prefix));
}

/**
 * Check if form data contains blocked patterns (harassment indicators)
 */
export function containsBlockedPattern(formData: Record<string, string>): boolean {
  const allText = Object.values(formData).join(' ').toLowerCase();
  return BLOCKED_PATTERNS.some(pattern => allText.toLowerCase().includes(pattern.toLowerCase()));
}

/**
 * Check if this is Jeffrey based on IP
 */
export function isJeffrey(ip: string): boolean {
  return isBlockedIP(ip);
}

/**
 * Check if this is Jeffrey based on IP OR form content
 */
export function isJeffreyByAnyMethod(ip: string, formData: Record<string, string>): boolean {
  return isBlockedIP(ip) || containsBlockedPattern(formData);
}
