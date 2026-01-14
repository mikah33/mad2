import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import BookingTimeline from './components/BookingTimeline'
import TrustBadges from './components/TrustBadges'
import RecentProjects from './components/RecentProjects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import { LocationDetection } from './components/seo/LocationDetection'
import { images } from './data/images'

function App() {

  // NOTE: Enhanced LocalBusiness schema is pre-rendered in static HTML via generate-all-pages-html.ts
  // DO NOT add schemas here to avoid duplication in production builds

  return (
    <>
      <Helmet>
        <title>Mobile Auto Detailing Lexington SC | 200+ 5-Star Reviews</title>
        <meta name="description" content="Mobile auto detailing in Lexington SC. Paint correction, ceramic coating & interior cleaning at your location. 200+ 5-star reviews. Book free quote!" />
        <meta name="keywords" content="mobile auto detailing lexington sc, car detailing lexington sc, ceramic coating lexington sc, detailing packages, paint correction, interior cleaning, exterior wash, mobile detailing services, auto detailing" />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikahsmobiledetailingsc.com" />
        <meta property="og:title" content="Mobile Auto Detailing Lexington SC | 200+ 5-Star Reviews" />
        <meta property="og:description" content="Mobile auto detailing in Lexington SC. Paint correction, ceramic coating & interior cleaning at your location. 200+ 5-star reviews. Book free quote!" />
        <meta property="og:image" content={images.ogDefault.url} />
        <meta property="og:image:alt" content={images.ogDefault.alt} />
        <meta property="og:image:width" content={images.ogDefault.width.toString()} />
        <meta property="og:image:height" content={images.ogDefault.height.toString()} />
        <meta property="og:site_name" content="Mikah's Auto Detailing" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Auto Detailing Lexington SC | 200+ 5-Star Reviews" />
        <meta name="twitter:description" content="Mobile auto detailing in Lexington SC. Paint correction, ceramic coating & interior cleaning at your location. 200+ 5-star reviews. Book free quote!" />
        <meta name="twitter:image" content={images.ogDefault.url} />
        <meta name="twitter:image:alt" content={images.ogDefault.alt} />

        {/* Structured Data - Schema is in static HTML, no need to add here */}
      </Helmet>

      <div className="min-h-screen bg-white w-full overflow-x-hidden">
        <Navigation />
        <Hero />

        {/* Location-based personalization */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <LocationDetection
              showNearestLocations={3}
              showCallout={true}
            />
          </div>
        </section>

        <BookingTimeline />
        <TrustBadges />
        <RecentProjects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <Chatbot />
      </div>
    </>
  )
}

export default App
