import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Image, Star, Wrench, Calendar, HelpCircle, Phone, MapPin, ChevronRight } from 'lucide-react'
import BottomNavbar from './components/BottomNavbar'
import { images } from './data/images'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (error) {
        console.log('Autoplay prevented:', error);
      }
    };

    // Try to play immediately
    playVideo();

    // Also try on user interaction (for iOS)
    const handleInteraction = () => {
      playVideo();
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  const menuItems = [
    {
      icon: <Calendar className="w-7 h-7" />,
      title: 'Book Now',
      description: 'Schedule your detail',
      path: '/book',
      color: 'from-[#023E8A] to-[#0077B6]',
      featured: true,
    },
    {
      icon: <Image className="w-7 h-7" />,
      title: 'Gallery',
      description: 'View our recent work',
      path: '/gallery',
      color: 'from-[#023E8A] to-[#0077B6]',
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: 'Reviews',
      description: 'What our customers say',
      path: '/reviews',
      color: 'from-[#023E8A] to-[#0077B6]',
      isGoogle: true,
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: 'Services',
      description: 'Explore our packages',
      path: '/services',
      color: 'from-[#023E8A] to-[#0077B6]',
    },
    {
      icon: <HelpCircle className="w-7 h-7" />,
      title: 'FAQs',
      description: 'Common questions',
      path: '/faq',
      color: 'from-[#023E8A] to-[#0077B6]',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Professional Mobile Auto Detailing Columbia SC | Mikah's Auto Detailing</title>
        <meta name="description" content="Premium mobile auto detailing services in Columbia, Lexington & Irmo SC. Professional ceramic coating, paint correction, interior/exterior detailing. We come to you! Book your free quote today." />
        <meta name="keywords" content="auto detailing Columbia SC, mobile detailing Lexington SC, ceramic coating, paint correction, car detailing near me, interior detailing, exterior detailing, mobile car wash Columbia" />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikahsmobiledetailingsc.com" />
        <meta property="og:title" content="Professional Mobile Auto Detailing Columbia SC | Mikah's Auto Detailing" />
        <meta property="og:description" content="Premium mobile auto detailing services in Columbia, Lexington & Irmo SC. We come to you!" />
        <meta property="og:image" content={images.ogDefault.url} />
        <meta property="og:image:alt" content={images.ogDefault.alt} />
        <meta property="og:image:width" content={images.ogDefault.width.toString()} />
        <meta property="og:image:height" content={images.ogDefault.height.toString()} />
        <meta property="og:site_name" content="Mikah's Auto Detailing" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Mobile Auto Detailing Columbia SC" />
        <meta name="twitter:description" content="Premium mobile auto detailing services. We come to you!" />
        <meta name="twitter:image" content={images.ogDefault.url} />
        <meta name="twitter:image:alt" content={images.ogDefault.alt} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden pb-32">
        {/* Hero Section with Video Background */}
        <div className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            poster="/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Fallback image for when video doesn't play */}
          <img
            src="/hero-poster.jpg"
            alt="Mikah's Auto Detailing"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            {/* Logo */}
            <img
              src="/logo.jpg"
              alt="M.A.Detailing Logo"
              className="h-16 w-16 rounded-full object-cover shadow-xl mb-3 border-2 border-white/30"
              loading="eager"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-center mb-1">
              Mikah's Auto Detailing
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 text-center">
              Premium Mobile Detailing · Columbia, SC
            </p>

            {/* Quick Contact */}
            <div className="flex items-center gap-3 mt-3 flex-wrap justify-center">
              <a
                href="tel:+18036678731"
                className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs hover:bg-white/30 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
              <a
                href="https://www.facebook.com/mikahsautodetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs hover:bg-white/30 transition"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Facebook</span>
              </a>
              <a
                href="/blog"
                className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs hover:bg-white/30 transition"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                <span>Blog</span>
              </a>
              <a
                href="/locations"
                className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs hover:bg-white/30 transition"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Areas</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="px-4 -mt-6 relative z-10">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.96] active:shadow-sm active:bg-gray-50 w-full ${
                  item.featured ? 'ring-2 ring-[#0077B6]' : ''
                }`}
                style={{ display: 'flex' }}
              >
                {item.isGoogle ? (
                  <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                ) : (
                  <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                  </div>
                )}
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                  {item.isGoogle ? (
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-gray-400 text-xs">5.0</span>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-xs truncate">{item.description}</p>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="px-4 mt-4">
          <div className="bg-white rounded-xl p-3 shadow-md">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-lg font-bold text-[#023E8A]">5.0</div>
                <div className="text-[10px] text-gray-400">Google Rating</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#023E8A]">100%</div>
                <div className="text-[10px] text-gray-400">Satisfaction</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#023E8A]">Mobile</div>
                <div className="text-[10px] text-gray-400">We Come To You</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-4 mt-3 text-center text-gray-400 text-xs">
          <p>Serving Columbia, Lexington, Irmo & more</p>
          <a href="tel:+18036678731" className="text-[#023E8A] font-semibold">
            (803) 667-8731
          </a>
        </div>
      </div>

      <BottomNavbar />
    </>
  )
}

export default App
