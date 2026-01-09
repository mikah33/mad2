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
import { images } from './data/images'

function App() {

  // NOTE: Enhanced LocalBusiness schema is pre-rendered in static HTML via generate-all-pages-html.ts
  // DO NOT add schemas here to avoid duplication in production builds

  return (
    <>
      <Helmet>
        <title>Mobile Auto Detailing Lexington SC | Car Detailing Columbia SC | Mikah's Auto Detailing</title>
        <meta name="description" content="Professional mobile auto detailing Lexington SC & Columbia SC. Car detailing services brought to your location. Ceramic coating, paint correction & interior detailing. IDA certified. Book today (803) 667-8731!" />
        <meta name="keywords" content="mobile auto detailing lexington sc, car detailing lexington sc, mobile car detailing near me, detailing car near me, automotive detail near me, car interior detailing, mobile detailing columbia sc, auto detailing Columbia SC, mobile automotive detailing, professional car detailing near me, automotive detailing service, ceramic coating, paint correction" />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikahsmobiledetailingsc.com" />
        <meta property="og:title" content="Mobile Car Detailing Near Me Columbia SC | Automotive Detail Service | Mikah's Auto Detailing" />
        <meta property="og:description" content="Top-rated mobile car detailing near me in Columbia SC! Professional automotive detail service at your location. Expert car interior detailing, exterior auto detailing. We come to you!" />
        <meta property="og:image" content={images.ogDefault.url} />
        <meta property="og:image:alt" content={images.ogDefault.alt} />
        <meta property="og:image:width" content={images.ogDefault.width.toString()} />
        <meta property="og:image:height" content={images.ogDefault.height.toString()} />
        <meta property="og:site_name" content="Mikah's Auto Detailing" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Car Detailing Near Me Columbia SC" />
        <meta name="twitter:description" content="Top-rated mobile car detailing near me service in Columbia SC. Professional automotive detail at your location!" />
        <meta name="twitter:image" content={images.ogDefault.url} />
        <meta name="twitter:image:alt" content={images.ogDefault.alt} />

        {/* Structured Data - Schema is in static HTML, no need to add here */}
      </Helmet>

      <div className="min-h-screen bg-white w-full overflow-x-hidden">
        <Navigation />
        <Hero />
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
