import React from 'react';
import { Star, Phone, ChevronRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { SEOHead } from '../components/seo/SEOHead';
import { generateProductSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

const FullDetailPage: React.FC = () => {
  const scrollToQuote = () => { window.location.href = '/#quote'; };

  const basicPackageSchema = generateProductSchema({
    name: "Level 2 Full Reset",
    description: "Complete interior and exterior deep reset. Full wipe down, conditioning, vacuum, disinfection, light stain removal, shampoo & extraction, foam wash, engine bay, protective wax layer.",
    price: "375",
    features: [
      "Interior full wipe down",
      "Conditioner + UV protection",
      "Complete vacuum & disinfection",
      "Light stain removal",
      "Shampoo & extraction",
      "Glass cleaned",
      "Door jambs cleaned & waxed",
      "Foam contact wash",
      "Engine bay detailed",
      "Protective wax layer",
      "Wheels & tires dressed"
    ],
    image: "https://mikahsmobiledetailingsc.com/exterior1.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/full-detail",
    category: "Auto Detailing Package"
  });

  const factoryResetSchema = generateProductSchema({
    name: "Level 2 Premium — Reset + Protect",
    description: "Everything in the Level 2 Full Reset plus a 1-step machine polish, headlight ceramic coating, windshield ceramic coating, and black trim restored/redyed.",
    price: "675",
    features: [
      "Everything in the Level 2 Full Reset",
      "1-step machine polish",
      "Headlight ceramic coating",
      "Windshield ceramic coating",
      "Black trim restored/redyed"
    ],
    image: "https://mikahsmobiledetailingsc.com/exterior1.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/full-detail",
    category: "Auto Detailing Package"
  });

  const schemas = [basicPackageSchema, factoryResetSchema, generateEnhancedLocalBusinessSchema()];

  return (
    <>
      <SEOHead
        title="Full Car Detail Columbia SC | Interior + Exterior | $375 Full Reset"
        description="Complete full car detailing in Columbia SC. Interior + exterior detailing package. Professional cleaning, protection, and restoration. Mobile service to Lexington, Irmo, Cayce. Book now!"
        keywords="full car detailing, complete auto detailing, interior exterior detailing, full detail package, car detailing near me, mobile auto detailing, vehicle detailing services, comprehensive car cleaning"
        canonical="https://mikahsmobiledetailingsc.com/services/full-detail/"
        ogImage="https://mikahsmobiledetailingsc.com/exterior1.jpg"
        ogImageAlt="Full car detail package - complete interior and exterior detailing"
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <section className="relative bg-gradient-to-br from-orange-600 to-red-700 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Full Detail Package — Interior + Exterior</h1>
                <p className="text-xl mb-8 text-orange-100">
                  The ultimate detailing experience. Complete interior and exterior deep cleaning, protection, and restoration.
                  Mobile service throughout Columbia, Lexington, West Columbia, Irmo, and Cayce.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/book?service=level-2-reset" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition">
                    Book Online <ChevronRight className="w-5 h-5 inline" />
                  </a>
                  <button onClick={scrollToQuote} className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition">
                    Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                  </button>
                  <a href="tel:+18036678731" className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition">
                    <Phone className="w-5 h-5 inline" /> (803) 667-8731
                  </a>
                
      </div>
              
      </div>
              <div className="hidden md:block">
                <img src="/exterior1.jpg" alt="Complete full detail package - interior and exterior mobile car detailing" className="rounded-lg shadow-2xl" loading="lazy" />
              
      </div>
            
      </div>
          
      </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Full Detail Packages</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold mb-2">Level 2 Full Reset</h3>
                <p className="text-3xl font-bold text-orange-600 mb-4">Starts at $375</p>
                <p className="text-sm text-gray-600 mb-4">The standard — gets your vehicle back to a level we can maintenance clean. Rebook the same vehicle by day 90, with service by day 97: $225.</p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-bold">Interior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Full wipe down of all surfaces</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Conditioner + UV protection</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Complete vacuum</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Disinfection</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Light stain removal</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Shampoo & extraction</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Glass cleaned</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Door jambs cleaned & waxed</li>
                  </ul>
                  <h4 className="font-bold pt-3">Exterior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Wheels decontaminated</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Foam contact wash</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Protective wax layer</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Wheels & tires dressed</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Engine bay detailed</li>
                  </ul>
                
      </div>
              
      </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg shadow-xl border-4 border-orange-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR UPGRADE
                
      </div>
                <h3 className="text-2xl font-bold mb-2">Level 2 Premium — Reset + Protect</h3>
                <p className="text-3xl font-bold text-orange-600 mb-4">Starts at $675</p>
                <p className="text-sm text-gray-600 mb-4">Reset the car, then lock the finish in — for keepers</p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-bold">Everything in the Level 2 Full Reset, plus:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />1-step machine polish — removes light swirls, restores gloss</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Headlight ceramic coating</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Windshield ceramic coating</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />Black trim restored / redyed</li>
                  </ul>
                  <h4 className="font-bold pt-3">Add-On Options:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />Weather Stripping Restoration (call for a quote)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />Scratch Removal (call for a quote)</li>
                  </ul>
                
      </div>
              
      </div>
            
      </div>
          
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
              
      </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Best Value</h3>
                <p className="text-gray-600">Save $75 compared to booking interior and exterior separately. Maximum results for your investment.</p>
              
      </div>
              <div className="text-center">
                <Phone className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Mobile Convenience</h3>
                <p className="text-gray-600">We come to you anywhere in the Midlands. Work from home while we transform your vehicle in your own driveway.</p>
              
      </div>
            
      </div>
          
      </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How long does full detailing take?</h3>
                <p className="text-gray-600">The Level 2 Full Reset takes 3-5 hours. The Level 2 Premium takes 5-7 hours, and the Level 3 Disaster Detail 5-8 hours, depending on vehicle size and condition.</p>
              
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">What's the difference between the detail levels?</h3>
                <p className="text-gray-600">The Level 2 Full Reset ($375) is the standard — a deep clean that gets your vehicle to where we can maintenance clean it. Level 2 Premium ($675) adds a 1-step polish, headlight and windshield ceramic coatings, and trim redye. Level 3 Disaster Detail ($650) is the interior rescue for heavy neglect. And once we've detailed your car, the Level 1 Maintenance rate is just $225 anytime you rebook the same vehicle by day 90, with service by day 97.</p>
              
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do you come to my location?</h3>
                <p className="text-gray-600">Yes! We're a mobile auto detailing service serving Columbia, Lexington, West Columbia, Irmo, Cayce, and all surrounding SC areas within 25 miles. We bring all equipment, water, and power.</p>
              
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How often should I get full detailing?</h3>
                <p className="text-gray-600">Our 90-day maintenance plan is built exactly for this: after your Level 2 Full Reset, rebook the same vehicle by day 90, with service by day 97 and each qualifying maintenance visit is just $225 — your car never falls back to needing a full reset again.</p>
              
      </div>
            
      </div>
          
      </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Complete Vehicle Transformation?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Book your full car detail today. Mobile service means we come to you!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/book?service=level-2-reset" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition">Book Online</a>
              <button onClick={scrollToQuote} className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition">Get Free Quote</button>
              <a href="tel:+18036678731" className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition">Call (803) 667-8731</a>
            
      </div>
          
      </div>
        </section>

        <Footer />
      
      </div>
    </>
  );
};

export default FullDetailPage;
