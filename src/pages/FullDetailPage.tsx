import React from 'react';
import { Star, Phone, ChevronRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { SEOHead } from '../components/seo/SEOHead';
import { generateProductSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

const FullDetailPage: React.FC = () => {
  const scrollToQuote = () => { window.location.href = '/#quote'; };

  const basicPackageSchema = generateProductSchema({
    name: "Basic Detail Package",
    description: "Complete interior and exterior detail. Full wipe down, conditioning, vacuum, disinfection, foam wash, wheels decontaminated, protective wax layer.",
    price: "200",
    features: [
      "Interior full wipe down",
      "Conditioner + UV protection",
      "Complete vacuum",
      "Disinfection",
      "Glass cleaned",
      "Door jambs cleaned & waxed",
      "Wheels decontaminated",
      "Foam contact wash",
      "Protective wax layer",
      "Wheels & tires dressed"
    ],
    image: "https://mikahsmobiledetailingsc.com/exterior1.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/full-detail",
    category: "Auto Detailing Package"
  });

  const factoryResetSchema = generateProductSchema({
    name: "Factory Reset Package",
    description: "Deep interior and exterior restoration. Includes shampoo & extraction, light stain removal, brake dust removal, and complete protection.",
    price: "325",
    features: [
      "Full wipe down + conditioner + UV protection",
      "Vacuum + disinfection",
      "Light stain removal",
      "Shampoo & extraction",
      "Glass cleaned",
      "Door jambs cleaned & waxed",
      "Foam contact wash",
      "Brake dust removal",
      "Protective wax layer",
      "Tires & rims dressed"
    ],
    image: "https://mikahsmobiledetailingsc.com/exterior1.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/full-detail",
    category: "Auto Detailing Package"
  });

  const schemas = [basicPackageSchema, factoryResetSchema, generateEnhancedLocalBusinessSchema()];

  return (
    <>
      <SEOHead
        title="Full Car Detail Columbia SC | Interior + Exterior | From $225"
        description="Complete full car detailing in Columbia SC. Interior + exterior detailing package. Professional cleaning, protection, and restoration. Mobile service to Lexington, Irmo, Cayce. Book now!"
        keywords="full car detailing, complete auto detailing Columbia SC, interior exterior detailing, full detail package, car detailing near me, mobile auto detailing Lexington SC, vehicle detailing services, comprehensive car cleaning"
        canonical="https://mikahsmobiledetailingsc.com/services/full-detail"
        ogImage="https://mikahsmobiledetailingsc.com/exterior1.jpg"
        ogImageAlt="Full car detailing Columbia SC - complete interior and exterior package"
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <section className="relative bg-gradient-to-br from-orange-600 to-red-700 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Full Detail Package in Columbia, SC</h1>
                <p className="text-xl mb-8 text-orange-100">
                  The ultimate detailing experience. Complete interior and exterior deep cleaning, protection, and restoration.
                  Mobile service throughout Columbia, Lexington, West Columbia, Irmo, and Cayce.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={scrollToQuote} className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition">
                    Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                  </button>
                  <a href="tel:5551234567" className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition">
                    <Phone className="w-5 h-5 inline" /> (555) 123-4567
                  </a>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="hidden md:block">
                <img src="/exterior1.jpg" alt="Full car detailing Columbia SC" className="rounded-lg shadow-2xl" loading="lazy" />
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Full Detail Packages</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold mb-2">Basic Detail Package</h3>
                <p className="text-3xl font-bold text-orange-600 mb-4">$200</p>
                <p className="text-sm text-gray-600 mb-4">Perfect for regular maintenance</p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-bold">Interior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Full wipe down of all surfaces</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Conditioner + UV protection</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Complete vacuum</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Disinfection</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Glass cleaned</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Door jambs cleaned & waxed</li>
                  </ul>
                  <h4 className="font-bold pt-3">Exterior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Wheels decontaminated</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Foam contact wash</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Protective wax layer</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Wheels & tires dressed</li>
                  </ul>
                <Chatbot />
      </div>
              <Chatbot />
      </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg shadow-xl border-4 border-orange-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                <Chatbot />
      </div>
                <h3 className="text-2xl font-bold mb-2">Factory Reset Package</h3>
                <p className="text-3xl font-bold text-orange-600 mb-4">$325</p>
                <p className="text-sm text-gray-600 mb-4">Complete restoration experience</p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-bold">Interior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Full wipe down + conditioner + UV protection</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Vacuum + disinfection</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Light stain removal</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Shampoo & extraction</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Glass cleaned</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Door jambs cleaned & waxed</li>
                  </ul>
                  <h4 className="font-bold pt-3">Exterior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Foam contact wash</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Brake dust removal</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Protective wax layer</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Tires & rims dressed</li>
                  </ul>
                  <h4 className="font-bold pt-3">Add-On Options:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />Weather Stripping Restoration (+$50)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />Scratch Removal (+$80/panel)</li>
                  </ul>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Full Detail Service?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Star className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Complete Care</h3>
                <p className="text-gray-600">Every inch of your vehicle cleaned, protected, and restored inside and out. Nothing overlooked.</p>
              <Chatbot />
      </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Best Value</h3>
                <p className="text-gray-600">Save $30-50 compared to booking interior and exterior separately. Maximum results for your investment.</p>
              <Chatbot />
      </div>
              <div className="text-center">
                <Phone className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Mobile Convenience</h3>
                <p className="text-gray-600">We come to you in Columbia, Lexington, West Columbia, Irmo, Cayce. Work from home while we transform your vehicle.</p>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How long does full detailing take?</h3>
                <p className="text-gray-600">Basic Detail Package takes 2-4 hours. Factory Reset Package takes 3-5 hours depending on vehicle size and condition.</p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">What's the difference between Basic and Factory Reset?</h3>
                <p className="text-gray-600">Basic is perfect for regular maintenance. Factory Reset includes deep shampooing, extraction, stain removal, and brake dust removal - ideal for vehicles needing more intensive cleaning.</p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do you come to my location?</h3>
                <p className="text-gray-600">Yes! We're a mobile auto detailing service serving Columbia, Lexington, West Columbia, Irmo, Cayce, and all surrounding SC areas within 25 miles. We bring all equipment, water, and power.</p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How often should I get full detailing?</h3>
                <p className="text-gray-600">We recommend full detailing every 3-4 months for optimal protection and appearance. More frequent if you have pets, children, or drive extensively.</p>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Complete Vehicle Transformation?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Book full car detailing in Columbia, Lexington, or surrounding areas. Mobile service means we come to you!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={scrollToQuote} className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition">Get Free Quote</button>
              <a href="tel:5551234567" className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition">Call (555) 123-4567</a>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <Footer />
      <Chatbot />
      </div>
    </>
  );
};

export default FullDetailPage;
