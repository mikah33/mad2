import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, CheckCircle, Phone, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { generateProductSchema } from '../components/seo/StructuredData';

const PaintCorrectionPage: React.FC = () => {
  const scrollToQuote = () => { window.location.href = '/#quote'; };

  const productSchema = generateProductSchema({
    name: "Professional Paint Correction Service",
    description: "Expert paint correction removes swirl marks, scratches, and oxidation to restore your vehicle's flawless finish. Multi-stage polishing for show car results.",
    price: "Quote",
    features: [
      "Multi-stage polishing",
      "Swirl removal",
      "Scratch removal",
      "Oxidation removal",
      "Paint depth restoration",
      "Single or two-stage options",
      "Complete wash & decontamination",
      "Paint depth measurement",
      "Professional inspection"
    ],
    image: "https://mikahsmobiledetailingsc.com/exterior4.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/paint-correction",
    category: "Auto Detailing Services"
  });

  return (
    <>
      <Helmet>
        <title>Paint Correction Columbia SC | Swirl Mark Removal | Auto Detailing Near Me</title>
        <meta name="description" content="Professional paint correction in Columbia SC. Remove swirl marks, scratches, oxidation. Expert polishing and paint restoration. Serving Lexington, Irmo, Cayce. Book now!" />
        <meta name="keywords" content="paint correction Columbia SC, swirl removal, scratch removal, paint polishing, paint restoration, auto detailing Columbia, car paint correction Lexington SC, oxidation removal, paint correction near me" />
        <link rel="canonical" content="https://mikahsautodetailing.com/services/paint-correction" />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Paint Correction in Columbia, SC</h1>
                <p className="text-xl mb-8 text-purple-100">
                  Remove swirl marks, scratches, and oxidation with expert paint correction. Restore your vehicle's
                  flawless finish. Mobile service throughout Columbia, Lexington, and surrounding areas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={scrollToQuote} className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition">
                    Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                  </button>
                  <a href="tel:5551234567" className="bg-purple-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-600 transition">
                    <Phone className="w-5 h-5 inline" /> (555) 123-4567
                  </a>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="hidden md:block">
                <img src="/exterior4.jpg" alt="Paint correction Columbia SC" className="rounded-lg shadow-2xl" loading="lazy" />
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">What is Paint Correction?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Paint correction is a meticulous process that removes imperfections in your vehicle's paint through
                  multi-stage polishing. Over time, improper washing, automated car washes, and environmental factors
                  create swirl marks, scratches, water spots, and oxidation that dull your paint's appearance.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Using professional-grade polishers, compounds, and techniques, we safely remove a thin layer of
                  clear coat to eliminate these imperfections, revealing the perfect paint underneath.
                </p>
                <h3 className="text-2xl font-bold mb-4">Paint Issues We Address:</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />Swirl marks and spider webbing</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />Light to moderate scratches</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />Oxidation and paint fading</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />Water spots and etching</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />Holograms from improper polishing</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />Bird dropping and bug etching</li>
                </ul>
              <Chatbot />
      </div>
              <div>
                <img src="/exterior5.jpg" alt="Paint correction results" className="rounded-lg shadow-lg mb-6" loading="lazy" />
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Paint Correction Packages</h3>
                  <div className="space-y-3">
                    <div className="border-b pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <strong>Single Stage</strong>
                        <span className="text-purple-600 font-bold">$399-$499</span>
                      <Chatbot />
      </div>
                      <p className="text-sm text-gray-600">Removes 50-60% of defects, enhances gloss</p>
                    <Chatbot />
      </div>
                    <div className="border-b pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <strong>Two Stage</strong>
                        <span className="text-purple-600 font-bold">$599-$699</span>
                      <Chatbot />
      </div>
                      <p className="text-sm text-gray-600">Removes 70-85% of defects, significant improvement</p>
                    <Chatbot />
      </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <strong>Multi Stage</strong>
                        <span className="text-purple-600 font-bold">$799-$899</span>
                      <Chatbot />
      </div>
                      <p className="text-sm text-gray-600">Removes 90-95%+ of defects, show car finish</p>
                    <Chatbot />
      </div>
                  <Chatbot />
      </div>
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Paint Correction Process</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1<Chatbot />
      </div>
                <div>
                  <h3 className="font-bold mb-1">Complete Wash & Decontamination</h3>
                  <p className="text-gray-600">Thorough wash, iron remover, and clay bar treatment to remove all surface contaminants before polishing.</p>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="flex gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2<Chatbot />
      </div>
                <div>
                  <h3 className="font-bold mb-1">Paint Depth Measurement</h3>
                  <p className="text-gray-600">Paint thickness gauge ensures we safely remove only what's necessary without compromising clear coat integrity.</p>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="flex gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3<Chatbot />
      </div>
                <div>
                  <h3 className="font-bold mb-1">Test Spot & Lighting Inspection</h3>
                  <p className="text-gray-600">Test small area to determine correct compounds and pads. High-intensity LED lights identify all imperfections.</p>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="flex gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4<Chatbot />
      </div>
                <div>
                  <h3 className="font-bold mb-1">Multi-Stage Polishing</h3>
                  <p className="text-gray-600">Heavy cutting compound removes deeper imperfections. Medium polish refines surface. Fine polish creates final clarity and gloss.</p>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="flex gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">5<Chatbot />
      </div>
                <div>
                  <h3 className="font-bold mb-1">Panel-by-Panel Inspection</h3>
                  <p className="text-gray-600">Each panel inspected with LED lights between stages to ensure perfection.</p>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="flex gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">6<Chatbot />
      </div>
                <div>
                  <h3 className="font-bold mb-1">Paint Protection Application</h3>
                  <p className="text-gray-600">Wax, sealant, or ceramic coating applied to lock in the perfect finish and protect your investment.</p>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Before & After Paint Correction</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">Before Paint Correction</h3>
                <ul className="space-y-3 bg-white p-6 rounded-lg shadow-lg">
                  <li className="flex gap-2"><span className="text-red-500">✗</span>Visible swirl marks under sunlight</li>
                  <li className="flex gap-2"><span className="text-red-500">✗</span>Light scratches from improper washing</li>
                  <li className="flex gap-2"><span className="text-red-500">✗</span>Dull, faded paint lacking depth</li>
                  <li className="flex gap-2"><span className="text-red-500">✗</span>Water spots etched into clear coat</li>
                  <li className="flex gap-2"><span className="text-red-500">✗</span>Oxidation making paint look old</li>
                </ul>
              <Chatbot />
      </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">After Paint Correction</h3>
                <ul className="space-y-3 bg-white p-6 rounded-lg shadow-lg">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Perfect reflection, scratch-free finish</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Deep clarity and wet-look gloss</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Mirror-like paint depth restored</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Smooth, defect-free surface</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Like-new showroom appearance</li>
                </ul>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Restore Your Paint's Perfect Finish</h2>
            <p className="text-xl mb-8 text-purple-100">
              Expert paint correction removes years of damage. Mobile service in Columbia, Lexington, and surrounding SC areas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={scrollToQuote} className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition">Get Free Quote</button>
              <a href="tel:5551234567" className="bg-purple-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-600 transition">Call (555) 123-4567</a>
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

export default PaintCorrectionPage;
