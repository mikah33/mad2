import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Shield, Wrench, Zap, Anchor, RotateCw, ChevronDown, ChevronUp, Mail, User, Phone, MapPin, Car, FileText, Briefcase, Check } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string[];
  color: string;
  slug: string;
}

const ServicesBooking: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [expandedService, setExpandedService] = useState<string | null>(null);
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

  const services: Service[] = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Basic Detail Package',
      price: '$200',
      color: 'bg-orange-500',
      slug: 'basic-detail',
      description: [
        'Full Interior Wipe Down',
        'Conditioning + UV Protection',
        'Complete Vacuum & Disinfection',
        'Interior Glass Cleaning',
        'Door Jambs Cleaned & Waxed',
        'Wheels Decontaminated',
        'Foam Contact Wash',
        'Protective Wax Layer',
        'Wheels & Tires Dressed'
      ]
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Factory Reset Package',
      price: '$325',
      color: 'bg-orange-500',
      slug: 'factory-reset',
      description: [
        'Everything in Basic Detail',
        'Light Stain Removal',
        'Carpet & Seat Shampoo',
        'Hot Water Extraction',
        'Brake Dust Removal',
        'Weather Stripping Conditioning',
        'Engine Bay Wipe Down',
        'Pet Hair Removal',
        'Odor Elimination Treatment'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Ceramic Coating',
      price: 'Custom Quote',
      color: 'bg-primary-500',
      slug: 'ceramic-coating',
      description: [
        'Complete Paint Decontamination',
        'Clay Bar Treatment',
        'Single or Two-Stage Polish',
        'Professional Ceramic Application',
        'Hydrophobic Protection',
        'UV Ray Protection',
        'Enhanced Gloss & Depth',
        'Easy Maintenance',
        '2-5 Year Warranty Options'
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Paint Correction',
      price: 'Custom Quote',
      color: 'bg-primary-600',
      slug: 'paint-correction',
      description: [
        'Remove Swirl Marks',
        'Light Scratch Removal',
        'Oxidation Removal',
        'Single or Two-Stage Correction',
        'Restore Original Luster',
        'Professional Polish',
        'Paint Depth Measurement'
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Specialty Services',
      price: 'Custom Quote',
      color: 'bg-primary-500',
      slug: 'specialty',
      description: [
        'Interior-Only Detail ($150)',
        'Exterior-Only Detail ($125)',
        'Weather Stripping Restoration ($50)',
        'Scratch Removal ($80/panel)',
        'Engine Bay Detail ($75)',
        'Pet Hair Removal ($50)',
        'Odor Removal / Ozone Treatment ($100)',
        'Headlight Restoration ($80)'
      ]
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      title: 'Marine & RV Detailing',
      price: 'Custom Quote',
      color: 'bg-primary-500',
      slug: 'marine-rv',
      description: [
        'Marine Boat Detailing',
        'RV Detailing',
        'Motorcycle Detailing',
        'Custom Pricing Based on Size',
        'Specialized Marine Products',
        'Oxidation Removal',
        'UV Protection'
      ]
    },
    {
      icon: <RotateCw className="w-6 h-6" />,
      title: 'Routine Reset',
      price: '$175/Month',
      color: 'bg-orange-500',
      slug: 'routine-reset',
      description: [
        '2x Exterior Details per Month',
        '1x Interior Reset per Month',
        '1x Engine Bay Cleaning',
        'Priority Scheduling',
        'Cancel Anytime',
        'First 2 Months: $300 Upfront',
        'After: $175/Month',
        'Stay Consistently Clean'
      ]
    }
  ];

  // Auto-fill form when service is selected
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        service: selectedService
      }));
    }
  }, [selectedService]);

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    // Scroll to form on mobile
    if (window.innerWidth < 1024) {
      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const toggleServiceDetails = (serviceTitle: string) => {
    setExpandedService(expandedService === serviceTitle ? null : serviceTitle);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          source: 'Mikahs Auto Detailing Website - Services Booking'
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus('success');

        // Reset form after successful submission
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
    <section id="quote" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Choose Your Service & Book Now</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Select a package below, see what's included, and get your free quote in seconds
          </p>
        </div>

        {/* Services Grid + Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* LEFT: Service Cards (Stacked) */}
          <div className="lg:col-span-2 space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2
                  ${selectedService === service.title ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-200 hover:border-orange-300'}
                `}
                onClick={() => handleServiceSelect(service.title)}
              >
                {/* Card Header - Always Visible */}
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon */}
                    <div className={`${service.color} text-white p-3 rounded-lg flex-shrink-0`}>
                      {service.icon}
                    </div>

                    {/* Title & Price */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">{service.title}</h3>
                      <p className="text-2xl font-bold text-orange-600 mt-1">{service.price}</p>
                    </div>

                    {/* Selection Indicator */}
                    <div className={`
                      w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0
                      ${selectedService === service.title
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-300 bg-white'
                      }
                    `}>
                      {selectedService === service.title && (
                        <Check className="w-5 h-5 text-white" />
                      )}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleServiceDetails(service.title);
                      }}
                      className="ml-2 p-2 hover:bg-gray-100 rounded-lg transition flex-shrink-0"
                    >
                      {expandedService === service.title ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expandable Details */}
                {expandedService === service.title && (
                  <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">What's Included:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.description.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: Booking Form (Sticky on Desktop) */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div id="booking-form" className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Get Your Free Quote</h3>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  {selectedService ? (
                    <span className="text-orange-600 font-semibold">
                      Selected: {selectedService}
                    </span>
                  ) : (
                    'Select a service from the left'
                  )}
                </p>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-800 font-medium">Thank you!</p>
                        <p className="text-green-700 text-sm">We'll contact you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-medium">Submission failed</p>
                    <p className="text-red-700 text-sm">Call us: (803) 667-8731</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
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
                      autoComplete="tel"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Phone Number"
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
                      autoComplete="street-address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="City & Zip Code"
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
                      autoComplete="off"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Vehicle Year/Make/Model"
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
                    disabled={isSubmitting || !selectedService}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      selectedService ? `Get Quote for ${selectedService}` : 'Select a Service First'
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-2">
                    Or call us: <a href="tel:8036678731" className="text-orange-600 font-semibold hover:underline">(803) 667-8731</a>
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesBooking;
