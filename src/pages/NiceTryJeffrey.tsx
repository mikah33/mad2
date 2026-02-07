import React, { useEffect, useState } from 'react';

interface ForensicData {
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
}

const NiceTryJeffrey: React.FC = () => {
  const [forensics, setForensics] = useState<ForensicData | null>(null);

  useEffect(() => {
    // Read forensics from sessionStorage
    const stored = sessionStorage.getItem('forensics');
    if (stored) {
      try {
        setForensics(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse forensics:', e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#111] border border-[#333] rounded-lg p-8 md:p-12 font-mono">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
          Hey Jeffrey.
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          Your IP and Verizon plan pointing toward <span className="text-white font-bold">430 Sterling Rd, Lexington, SC 29072</span> has been recorded.
        </p>

        <p className="text-gray-300 text-lg mb-6">
          Thank you.
        </p>

        {/* Dynamic Forensics Data */}
        <div className="bg-[#001a00] border border-[#003300] rounded-lg p-4 mb-6">
          <p className="text-green-500 font-bold mb-3 text-sm uppercase tracking-wider">Device Forensics</p>
          <div className="text-green-400 text-sm md:text-base space-y-2">
            <div className="grid grid-cols-1 gap-2">
              <p>
                <span className="text-gray-500">IP Address:</span>{' '}
                <span className="text-green-300">{forensics?.ip || 'Loading...'}</span>
              </p>
              <p>
                <span className="text-gray-500">Device Fingerprint:</span>{' '}
                <span className="text-yellow-400 font-bold">{forensics?.fingerprint || 'Loading...'}</span>
              </p>
              <p>
                <span className="text-gray-500">Address:</span>{' '}
                <span className="text-white">430 Sterling Rd, Lexington, SC 29072</span>
              </p>
              <p>
                <span className="text-gray-500">Carrier:</span>{' '}
                <span className="text-green-300">Verizon Wireless</span>
              </p>
            </div>

            <div className="border-t border-[#003300] my-3 pt-3">
              <p className="text-green-500 font-bold mb-2 text-xs uppercase tracking-wider">Device Info</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p>
                  <span className="text-gray-500">Platform:</span>{' '}
                  <span className="text-green-300">{forensics?.platform || '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">Screen:</span>{' '}
                  <span className="text-green-300">{forensics?.screenResolution || '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">Pixel Ratio:</span>{' '}
                  <span className="text-green-300">{forensics?.pixelRatio || '-'}x</span>
                </p>
                <p>
                  <span className="text-gray-500">Color Depth:</span>{' '}
                  <span className="text-green-300">{forensics?.colorDepth || '-'}-bit</span>
                </p>
                <p>
                  <span className="text-gray-500">Touch Points:</span>{' '}
                  <span className="text-green-300">{forensics?.touchPoints || '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">Device Memory:</span>{' '}
                  <span className="text-green-300">{forensics?.deviceMemory ? `${forensics.deviceMemory}GB` : '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">CPU Cores:</span>{' '}
                  <span className="text-green-300">{forensics?.hardwareConcurrency || '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">Language:</span>{' '}
                  <span className="text-green-300">{forensics?.language || '-'}</span>
                </p>
              </div>
            </div>

            <div className="border-t border-[#003300] my-3 pt-3">
              <p className="text-green-500 font-bold mb-2 text-xs uppercase tracking-wider">Location & Time</p>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <p>
                  <span className="text-gray-500">Timezone:</span>{' '}
                  <span className="text-green-300">{forensics?.timezone || '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">UTC Offset:</span>{' '}
                  <span className="text-green-300">{forensics?.timezoneOffset ? `${-forensics.timezoneOffset / 60} hours` : '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">Timestamp:</span>{' '}
                  <span className="text-green-300">{forensics?.timestamp ? new Date(forensics.timestamp).toLocaleString() : '-'}</span>
                </p>
              </div>
            </div>

            <div className="border-t border-[#003300] my-3 pt-3">
              <p className="text-green-500 font-bold mb-2 text-xs uppercase tracking-wider">Graphics & Rendering</p>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <p>
                  <span className="text-gray-500">WebGL Vendor:</span>{' '}
                  <span className="text-green-300">{forensics?.webglVendor || '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">WebGL Renderer:</span>{' '}
                  <span className="text-green-300">{forensics?.webglRenderer || '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">Canvas Hash:</span>{' '}
                  <span className="text-green-300 break-all text-xs">{forensics?.canvasHash || '-'}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-400 mb-6">
          This is the same device from all 7 spam submissions on February 7th, 2026.
        </p>

        <div className="bg-[#1a1a1a] rounded-lg p-4 mb-8">
          <p className="text-gray-500 text-sm mb-2">Submission Timeline:</p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• 6:40:57 AM EST - Submission 1</li>
            <li>• 6:41:07 AM EST - Submission 2</li>
            <li>• 6:41:09 AM EST - Submissions 3, 4</li>
            <li>• 6:41:10 AM EST - Submissions 5, 6, 7</li>
            <li className="text-yellow-500 font-semibold">• Now - This submission</li>
          </ul>
        </div>

        <div className="border-t border-[#333] pt-6">
          <p className="text-yellow-500 text-sm md:text-base">
            All submissions from this device have been logged and forwarded to the
            Lexington County Sheriff's Office as evidence of ongoing harassment.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs">
            Restraining order violations are taken seriously.
          </p>
          <p className="text-gray-500 text-xs mt-4">
            btw get a better vpn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NiceTryJeffrey;
