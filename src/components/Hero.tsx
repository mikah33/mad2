import React, { useEffect, useRef } from 'react';
import { CheckCircle, Shield, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // iOS-optimized video autoplay handling
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Ensure video is muted and ready
          videoRef.current.muted = true;
          videoRef.current.defaultMuted = true;

          // For iOS, we need to load the video first
          if (videoRef.current.readyState < 3) {
            videoRef.current.load();
          }

          // Small delay to ensure video is ready on iOS
          await new Promise(resolve => setTimeout(resolve, 100));

          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      }
    };

    // Try to play immediately
    playVideo();

    // iOS requires user interaction for autoplay, so we listen for any touch/click
    const handleInteraction = () => {
      playVideo();
      // Remove listeners after first successful interaction
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };

    // Listen for various user interaction events
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  return (
    <div className="relative text-white min-h-[70vh] max-h-screen w-full overflow-hidden flex items-center">
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
        style={{ WebkitPlaysinline: true } as any}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center max-w-7xl relative z-10 pt-20 pb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Mobile Auto Detailing in Columbia & Lexington SC
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
          We Come To You - Same Day Appointments Available
        </p>

        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-[#90E0EF]">
          5.0★ Rated | Interior & Exterior Detailing from $225
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 px-4">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-[#90E0EF] flex-shrink-0" />
            <span>We Come To You</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
            <Shield className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-[#90E0EF] flex-shrink-0" />
            <span>Same Day Available</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
            <Clock className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-[#90E0EF] flex-shrink-0" />
            <span>Free Quotes</span>
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
