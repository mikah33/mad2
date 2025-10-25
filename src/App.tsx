import React, { useState } from 'react'
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

  return (
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
    </div>
  )
}

export default App
