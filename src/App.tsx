import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustBadges from './components/TrustBadges'
import RecentProjects from './components/RecentProjects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import { generateLocalBusinessSchema } from './components/seo/StructuredData'
import { generateOrganizationSchema } from './components/seo/OrganizationSchema'
import { businessInfo } from './data/business'
import { reviews, aggregateRating } from './data/reviews'
import { images } from './data/images'

function App() {
  const [selectedService, setSelectedService] = useState('')

  const handleServiceSelect = (service: string) => {
    setSelectedService(service)
    // Scroll to form
    const formElement = document.getElementById('quote-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  // Generate comprehensive schema with reviews
  const localBusinessSchema = generateLocalBusinessSchema(
    businessInfo,
    aggregateRating,
    reviews
  )

  // Generate organization schema
  const organizationSchema = generateOrganizationSchema({
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    description: businessInfo.description,
    url: 'https://mikahsmobiledetailingsc.com',
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: businessInfo.address,
    foundingDate: '2020',
    socialMedia: businessInfo.socialMedia
  })

  // Combine schemas
  const schemas = [localBusinessSchema, organizationSchema]

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

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemas)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white w-full overflow-x-hidden">
        <Navigation />
        <Hero />
      <Services onSelectService={handleServiceSelect} />
      <TrustBadges />

      <section id="quote" className="py-12 md:py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Your Free Quote</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Ready to restore your vehicle's beauty? Fill out the form below and we'll get
            back to you with a personalized quote.
          </p>

          <div className="flex justify-center w-full" id="quote-form">
            <LeadForm selectedService={selectedService} />
          </div>
        </div>
      </section>

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
