import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Shield, Wrench, Zap, Anchor, RotateCw, Check, ChevronRight, Mail, User, Phone, MapPin, Car, FileText } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  color: string;
  slug: string;
}

const BookingTimeline: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    vehicleDetails: '',
    service: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Top 6 main services
  const mainServices: Service[] = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Basic Detail',
      price: '$200',
      color: 'bg-orange-500',
      slug: 'basic-detail',
      description: 'Full interior & exterior detail with wax protection'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Factory Reset',
      price: '$325',
      color: 'bg-orange-600',
      slug: 'factory-reset',
      description: 'Deep clean with shampoo, extraction & restoration'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ceramic Coating',
      price: 'Custom Quote',
      color: 'bg-primary-500',
      slug: 'ceramic-coating',
      description: 'Long-lasting paint protection (2-5 years)'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Paint Correction',
      price: 'Custom Quote',
      color: 'bg-primary-600',
      slug: 'paint-correction',
      description: 'Remove swirls, scratches & restore finish'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Specialty Services',
      price: 'Starting at $50',
      color: 'bg-purple-500',
      slug: 'specialty',
      description: 'Interior-only, exterior-only, engine bay & more'
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Marine & RV',
      price: 'Custom Quote',
      color: 'bg-blue-500',
      slug: 'marine-rv',
      description: 'Boats, RVs, motorcycles & specialty vehicles'
    }
  ];

  // Auto-fill form when service is selected
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        service: selectedService
      }));

      // Scroll to form
      setTimeout(() => {
        document.getElementById('step-2')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [selectedService]);

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Mikahs Auto Detailing - Booking Timeline'
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus('success');

        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            location: '',
            vehicleDetails: '',
            service: '',
            description: ''
          });
          setSelectedService('');
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* ========== STEP 1: HOW TO BOOK ========== */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 text-primary-700 px-6 py-2 rounded-full font-semibold text-sm mb-4">
            STEP 1
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How to Book a Detail</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get your vehicle detailed in 3 simple steps. Select your service, fill out the form, and we'll contact you within 24 hours.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="flex justify-center mb-12">
          <div className="w-1 h-16 bg-gradient-to-b from-primary-400 to-orange-500"></div>
        </div>

        {/* ========== STEP 2: SELECT YOUR SERVICE ========== */}
        <div id="step-1" className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full font-semibold text-sm mb-4">
              STEP 2
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Select Your Service</h3>
            <p className="text-gray-600">Choose the package that fits your needs</p>
          </div>

          {/* Services Grid: 3x2 for main services + 1x3 for Routine Reset */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Main 6 Services (3x2 grid) */}
            {mainServices.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceSelect(service.title)}
                className={`
                  relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 border-2
                  ${selectedService === service.title
                    ? 'border-orange-500 ring-4 ring-orange-200 transform scale-105'
                    : 'border-gray-200 hover:border-orange-300'
                  }
                `}
              >
                {/* Selection Indicator */}
                {selectedService === service.title && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full p-1">
                    <Check className="w-5 h-5" />
                  </div>
                )}

                {/* Icon */}
                <div className={`${service.color} text-white p-4 rounded-lg inline-block mb-4`}>
                  {service.icon}
                </div>

                {/* Title & Price */}
                <h4 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h4>
                <div className="text-2xl font-bold text-orange-600 mb-3">{service.price}</div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                {/* CTA */}
                <button className={`
                  w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2
                  ${selectedService === service.title
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white'
                  }
                `}>
                  {selectedService === service.title ? 'Selected' : 'Select This Service'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}

            {/* Routine Reset - Tall Card (spans 1x3 height on desktop) */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div
                onClick={() => handleServiceSelect('Routine Reset')}
                className={`
                  relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 border-2 h-full
                  ${selectedService === 'Routine Reset'
                    ? 'border-orange-500 ring-4 ring-orange-200 transform scale-105'
                    : 'border-orange-300 hover:border-orange-400'
                  }
                `}
              >
                {/* "NOW INTRODUCING" Banner */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 rounded-t-xl font-bold text-sm tracking-wide">
                  ✨ NOW INTRODUCING ✨
                </div>

                {/* Selection Indicator */}
                {selectedService === 'Routine Reset' && (
                  <div className="absolute top-14 right-4 bg-orange-500 text-white rounded-full p-1 z-10">
                    <Check className="w-5 h-5" />
                  </div>
                )}

                {/* Content (with top padding for banner) */}
                <div className="pt-8">
                  {/* Icon */}
                  <div className="bg-orange-500 text-white p-4 rounded-lg inline-block mb-4">
                    <RotateCw className="w-8 h-8" />
                  </div>

                  {/* Title & Price */}
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Routine Reset</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-4">$175/Month</div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Stay consistently clean with our monthly subscription designed to keep your vehicle clean, protected, and consistent — every month.
                  </p>

                  {/* What's Included */}
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800 mb-2">✅ What's Included:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>2x Exterior Details per Month</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>1x Interior Reset per Month</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>1x Engine Bay Cleaning (first visit)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Priority Scheduling - You pick the times</span>
                      </li>
                    </ul>
                  </div>

                  {/* Pricing Details */}
                  <div className="bg-white/80 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-gray-800 mb-2">💰 Pricing:</p>
                    <p className="text-sm text-gray-700 mb-1">
                      <span className="font-semibold text-orange-600">First 2 months:</span> $300 upfront (limited-time offer)
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">After that:</span> $175/month • Cancel anytime • No rollovers
                    </p>
                  </div>

                  {/* Warning/CTA */}
                  <div className="bg-orange-200 border border-orange-400 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-800">
                      ⚠️ <span className="font-semibold">Want to stay consistently clean without falling behind?</span> The Routine Reset is your system.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className={`
                    w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2
                    ${selectedService === 'Routine Reset'
                      ? 'bg-orange-500 text-white'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                    }
                  `}>
                    {selectedService === 'Routine Reset' ? 'Selected' : 'Select Routine Reset'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Timeline Line */}
        {selectedService && (
          <div className="flex justify-center mb-12">
            <div className="w-1 h-16 bg-gradient-to-b from-orange-500 to-green-500 animate-pulse"></div>
          </div>
        )}

        {/* ========== STEP 3: ENTER YOUR DETAILS ========== */}
        {selectedService && (
          <div id="step-2" className="scroll-mt-20">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full font-semibold text-sm mb-4">
                STEP 3
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Enter Your Details</h3>
              <p className="text-gray-600">We'll contact you within 24 hours with your personalized quote</p>
              <p className="text-orange-600 font-semibold mt-2">Selected Service: {selectedService}</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-800 font-medium">Thank you for your booking request!</p>
                        <p className="text-green-700 text-sm">We'll get back to you within 24 hours with your personalized quote for {selectedService}.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 font-medium">Submission failed</p>
                    <p className="text-red-700 text-sm">Please try again or call us at (803) 667-8731</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Full Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Full Name *"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Email Address *"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Phone Number *"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Location */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      autoComplete="street-address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="City & Zip Code *"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Vehicle Details */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Car className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="vehicleDetails"
                      value={formData.vehicleDetails}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Vehicle Year/Make/Model *"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Service Selection (Hidden - auto-filled) */}
                  <input type="hidden" name="service" value={formData.service} />

                  {/* Additional Notes */}
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      autoComplete="off"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-gray-50 focus:bg-white resize-none"
                      placeholder="Additional Details (Optional)"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      `Get Quote for ${selectedService}`
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    Or call us directly: <a href="tel:8036678731" className="text-orange-600 font-semibold hover:underline">(803) 667-8731</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default BookingTimeline;
