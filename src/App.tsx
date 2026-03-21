import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import BookingTimeline from './components/BookingTimeline'
import TrustBadges from './components/TrustBadges'
import BlogSection from './components/BlogSection'
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
        <title>Mobile Car Detailing Columbia & Lexington SC | 5-Star Rated | Mikah's</title>
        <meta name="description" content="Columbia & Lexington SC's top-rated mobile car detailing. Interior & exterior from $225. We come to you — same day available. Call (803) 667-8731." />
        <meta name="keywords" content="mobile car detailing columbia sc, car detailing columbia sc, mobile detailing near me, car detailing near me, mobile car detailing lexington sc, car detailing lexington sc, mobile auto detailing columbia sc, ceramic coating columbia sc, paint correction columbia sc" />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikahsmobiledetailingsc.com" />
        <meta property="og:title" content="Mobile Car Detailing Columbia & Lexington SC | 5-Star Rated | Mikah's" />
        <meta property="og:description" content="Columbia & Lexington SC's top-rated mobile car detailing. Interior & exterior from $225. We come to you — same day available. Call (803) 667-8731." />
        <meta property="og:image" content={images.ogDefault.url} />
        <meta property="og:image:alt" content={images.ogDefault.alt} />
        <meta property="og:image:width" content={images.ogDefault.width.toString()} />
        <meta property="og:image:height" content={images.ogDefault.height.toString()} />
        <meta property="og:site_name" content="Mikah's Auto Detailing" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Car Detailing Columbia & Lexington SC | 5-Star Rated | Mikah's" />
        <meta name="twitter:description" content="Columbia & Lexington SC's top-rated mobile car detailing. Interior & exterior from $225. We come to you — same day available. Call (803) 667-8731." />
        <meta name="twitter:image" content={images.ogDefault.url} />
        <meta name="twitter:image:alt" content={images.ogDefault.alt} />

        {/* Structured Data - Schema is in static HTML, no need to add here */}
      </Helmet>

      <div className="min-h-screen bg-white w-full overflow-x-hidden">
        <Navigation />
        <Hero />


        <BookingTimeline />
        <TrustBadges />
        <BlogSection />
        <RecentProjects />
      <Testimonials />
      <FAQ />

        {/* Near Me SEO Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Mobile Car Detailing Near Me in Columbia & Lexington SC
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Looking for car detailing near me? Mikah's Auto Detailing brings professional mobile detailing directly to your location anywhere in the Columbia and Lexington SC metro area. From Five Points and The Vista to Lake Murray and Harbison — we come to your home, office, or apartment complex with everything needed for a complete detail. No drop-off, no waiting, no hassle.
              </p>
              <p>
                Our mobile detailing near me service covers Columbia, Lexington, Irmo, Cayce, West Columbia, Blythewood, Chapin, and all surrounding communities within 25 miles. Interior and exterior packages start at $225. Same day appointments available. Call <a href="tel:8036678731" className="text-primary-700 font-semibold">(803) 667-8731</a> for a free quote.
              </p>
            </div>
          </div>
        </section>

      <Contact />
      <Footer />
      <Chatbot />
      </div>
    </>
  )
}

export default App
