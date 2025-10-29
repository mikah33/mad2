import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Phone, ChevronRight, CheckCircle, MapPin, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const MobileDetailingPage: React.FC = () => {
  const scrollToQuote = () => { window.location.href = '/#quote'; };

  return (
    <>
      <Helmet>
        <title>Mobile Auto Detailing Columbia SC | Car Detailing Near Me | We Come To You</title>
        <meta name="description" content="Mobile auto detailing in Columbia SC. We come to your location with everything needed. Professional car detailing at your home or office in Lexington, Irmo, Cayce. Book now!" />
        <meta name="keywords" content="mobile auto detailing Columbia SC, mobile car wash, car detailing near me, mobile detailing Lexington SC, on-site auto detailing, mobile car detailing service, we come to you, at-home car detailing, office car detailing" />
        <link rel="canonical" content="https://mikahsautodetailing.com/services/mobile-detailing" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Auto Detailing in Columbia, SC - We Come To You!</h1>
                <p className="text-xl mb-8 text-blue-100">
                  Professional car detailing at your location. No need to waste time at car washes. We bring all equipment,
                  water, and power to your home, office, or preferred location throughout Columbia and Lexington SC.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={scrollToQuote} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                    Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                  </button>
                  <a href="tel:5551234567" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition">
                    <Phone className="w-5 h-5 inline" /> (555) 123-4567
                  </a>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="hidden md:block">
                <img src="/exterior3.jpg" alt="Mobile auto detailing Columbia SC" className="rounded-lg shadow-2xl" loading="lazy" />
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Mobile Detailing?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Clock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Save Your Time</h3>
                <p className="text-gray-600">
                  No more wasting hours at the car wash. Work from home, run errands, or relax while we detail your vehicle at your location.
                </p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Truck className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fully Self-Contained</h3>
                <p className="text-gray-600">
                  We bring everything - 100+ gallons of water, quiet generators, professional equipment, and premium products. You provide nothing.
                </p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Anywhere You Need</h3>
                <p className="text-gray-600">
                  Home driveway, office parking lot, apartment complex, storage facility - we come to you anywhere in Columbia or Lexington area.
                </p>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Mobile Detailing Service Areas</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
              We provide mobile auto detailing throughout the Columbia-Lexington metro area and surrounding
              South Carolina communities within 25 miles. Professional service wherever you need it.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Columbia Area</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Downtown Columbia</li>
                  <li>• Forest Acres</li>
                  <li>• The Vista</li>
                  <li>• Five Points</li>
                  <li>• Shandon</li>
                  <li>• Olympia</li>
                </ul>
              <Chatbot />
      </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Lexington Area</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Lexington</li>
                  <li>• West Columbia</li>
                  <li>• Cayce</li>
                  <li>• South Congaree</li>
                  <li>• Red Bank</li>
                  <li>• Oak Grove</li>
                </ul>
              <Chatbot />
      </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Irmo Area</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Irmo</li>
                  <li>• St. Andrews</li>
                  <li>• Seven Oaks</li>
                  <li>• Harbison</li>
                  <li>• Chapin</li>
                  <li>• Ballentine</li>
                </ul>
              <Chatbot />
      </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Extended Areas</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Blythewood</li>
                  <li>• Elgin</li>
                  <li>• Hopkins</li>
                  <li>• Lake Murray</li>
                  <li>• Lake Carolina</li>
                  <li>• Dentsville</li>
                </ul>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">How Mobile Detailing Works</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">1<Chatbot />
      </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Book Your Appointment</h3>
                    <p className="text-gray-600">Call, text, or use our online form. Choose your preferred date, time, and location. We confirm within hours.</p>
                  <Chatbot />
      </div>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">2<Chatbot />
      </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We Arrive at Your Location</h3>
                    <p className="text-gray-600">Our mobile unit arrives on time with everything needed - water, power, equipment, and professional products.</p>
                  <Chatbot />
      </div>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">3<Chatbot />
      </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Service</h3>
                    <p className="text-gray-600">We perform complete detailing service while you work from home, stay at the office, or go about your day.</p>
                  <Chatbot />
      </div>
                <Chatbot />
      </div>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">4<Chatbot />
      </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Final Walkthrough</h3>
                    <p className="text-gray-600">We inspect our work, show you the results, and ensure you're completely satisfied before we leave.</p>
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
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Mobile Detailing FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do I need to provide water or electricity?</h3>
                <p className="text-gray-600">No! Our mobile units are completely self-contained with 100+ gallon water tanks and quiet generators. You just provide access to your vehicle.</p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Where exactly do you perform the service?</h3>
                <p className="text-gray-600">Anywhere you have parking - driveway, garage, office parking lot, apartment complex, storage facility. We just need space to work around the vehicle.</p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do I need to be home during service?</h3>
                <p className="text-gray-600">Not necessarily. Many customers provide vehicle access and go about their day. We communicate via phone when we arrive and finish.</p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Is your generator loud?</h3>
                <p className="text-gray-600">Our commercial-grade generators are designed for quiet operation - much quieter than typical construction generators. Most customers barely hear them from inside.</p>
              <Chatbot />
      </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Can you come to apartment complexes?</h3>
                <p className="text-gray-600">Yes! We regularly service vehicles at apartment complexes throughout Columbia and Lexington. Just confirm with your complex management.</p>
              <Chatbot />
      </div>
            <Chatbot />
      </div>
          <Chatbot />
      </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Mobile Detailing Convenience</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional car detailing at your location in Columbia, Lexington, and surrounding SC areas.
              Save time, get superior results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={scrollToQuote} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">Get Free Quote</button>
              <a href="tel:5551234567" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition">Call (555) 123-4567</a>
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

export default MobileDetailingPage;
