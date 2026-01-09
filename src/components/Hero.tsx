import React, { useEffect, useRef } from 'react';
import { CheckCircle, Shield, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force play on mobile devices
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      }
    };

    playVideo();

    // Retry play on user interaction (for browsers that block autoplay)
    const handleInteraction = () => {
      playVideo();
      // Remove listeners after first interaction
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    <div className="relative text-white min-h-screen w-full overflow-hidden flex items-center">
      {/* Fallback Background Image - Shows immediately */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/exterior2.jpg)' }}
      />

      {/* Video Background - Loads lazily after page */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/exterior2.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        webkit-playsinline="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center max-w-7xl relative z-10 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Mobile Auto Detailing Lexington SC
          <br />
          <span style={{color: '#90E0EF'}}>& Columbia, SC</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
          Experience premium mobile auto detailing services that come to you in
          Lexington, Columbia, and throughout South Carolina. We transform your vehicle at your home or office,
          delivering professional results with ultimate convenience.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-[#90E0EF]">
          ✨ Trusted. Convenient. Exceptional Results.
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 px-4">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-[#90E0EF] flex-shrink-0" />
            <span>Professional Results</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
            <Shield className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-[#90E0EF] flex-shrink-0" />
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
            <Clock className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-[#90E0EF] flex-shrink-0" />
            <span>Fast Service</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#booking">
            <button className="px-6 md:px-8 py-3 md:py-4 text-white text-base md:text-lg font-bold rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{background: '#023E8A'}}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0077B6'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#023E8A'}>
              Get Your Free Quote
            </button>
          </a>

          <a href="/services">
            <button className="px-6 md:px-8 py-3 md:py-4 text-[#023E8A] bg-white text-base md:text-lg font-bold rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-white"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#CAF0F8';
                e.currentTarget.style.borderColor = '#90E0EF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#ffffff';
              }}>
              See Pricing
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
