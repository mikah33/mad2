import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Star, Check, ChevronRight, Mail, User, Phone, MapPin, Car, FileText, Info, X, Calendar, Droplet, Clock, CheckCircle } from 'lucide-react';
import { submitBookingForm } from '../utils/formSubmission';

interface Service {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  color: string;
  slug: string;
  image: string;
  isPopular?: boolean;
}

const BookingTimelineSpecials: React.FC = () => {
  const navigate = useNavigate();

  // Step tracking
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Vehicle Type
  const [vehicleType, setVehicleType] = useState('');

  // Step 2: Last Detail Timing
  const [lastDetailTiming, setLastDetailTiming] = useState('');

  // Step 3: Cleanliness Level
  const [cleanlinessLevel, setCleanlinessLevel] = useState('');

  // Step 4: Package Selection
  const [selectedService, setSelectedService] = useState('');

  // Step 5: Contact Form
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    description: ''
  });

  const [openModal, setOpenModal] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ONLY Basic Detail and Factory Reset with special prices
  const specialServices: Service[] = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Basic Detail',
      price: '$199',
      color: 'bg-[#D91656]',
      slug: 'basic-detail',
      image: '/interior1.jpg',
      description: 'Full interior & exterior detail with wax protection'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Factory Reset',
      price: '$350',
      color: 'bg-[#D91656]',
      slug: 'factory-reset',
      image: '/exterior2.jpg',
      description: 'Deep clean with shampoo, extraction & restoration',
      isPopular: true
    }
  ];

  // Auto-scroll on step change
  useEffect(() => {
    if (currentStep > 1) {
      setTimeout(() => {
        document.getElementById(`step-${currentStep}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [currentStep]);

  // Step 1: Package Selection -> Step 2
  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setTimeout(() => {
      setCurrentStep(2);
    }, 500);
  };

  // Step 2: Last Detail -> Step 3
  const handleLastDetailSubmit = (timing: string) => {
    setLastDetailTiming(timing);
    setTimeout(() => {
      setCurrentStep(3);
    }, 500);
  };

  // Step 3: Cleanliness -> Step 4
  const handleCleanlinessSubmit = (level: string) => {
    setCleanlinessLevel(level);
    setTimeout(() => {
      setCurrentStep(4);
    }, 500);
  };

  // Step 4: Vehicle Type -> Step 5
  const handleVehicleTypeSubmit = () => {
    if (vehicleType.trim()) {
      setCurrentStep(5);
    }
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
      const result = await submitBookingForm({
        vehicleType: vehicleType,
        lastDetailTiming: lastDetailTiming,
        cleanlinessLevel: cleanlinessLevel,
        service: selectedService,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        description: formData.description,
        source: 'landing-page-specials'
      });

      console.log('Booking submission successful:', result);

      setSubmitStatus('success');
      // Track conversion
      if ((window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-16694998422/TihGCPrb_9sZEJbr5Zg-',
          'value': 275.0,
          'currency': 'USD'
        });
      }
      // Redirect to thank you page after success
      setTimeout(() => {
        navigate('/book/thank-you');
      }, 2000);

    } catch (error) {
      console.error('Booking submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ServiceModal = ({ service }: { service: Service }) => (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={() => setOpenModal(null)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover"
          />
          <button
            onClick={() => setOpenModal(null)}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 ${service.color} text-white rounded-lg`}>
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#D91656]">{service.price}</span>
                {service.title === 'Basic Detail' && (
                  <span className="text-sm text-gray-500 line-through">$225</span>
                )}
                {service.title === 'Factory Reset' && (
                  <span className="text-sm text-gray-500 line-through">$400</span>
                )}
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{service.description}</p>

          <button
            onClick={() => {
              handleServiceSelect(service.title);
              setOpenModal(null);
            }}
            className="w-full bg-[#D91656] hover:bg-[#E91E63] text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
          >
            <span>Select This Service</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Step 1: Service Selection */}
      {currentStep === 1 && (
        <div id="step-1" className="space-y-6">
          <div className="text-center mb-8">
            <p className="text-white font-semibold" style={{ textShadow: '6px 6px 16px rgba(0,0,0,1), 4px 4px 12px rgba(0,0,0,1), 2px 2px 8px rgba(0,0,0,1)' }}>Limited time pricing on our most popular packages</p>
          </div>

          {/* Special Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialServices.map((service, index) => (
              <div
                key={index}
                className="relative bg-white border-2 border-gray-200 rounded-xl hover:border-[#D91656]/50 transition-all cursor-pointer group hover:shadow-lg"
                onClick={() => handleServiceSelect(service.title)}
              >
                {service.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${service.color} text-white rounded-lg`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-[#D91656]">{service.price}</span>
                        {service.title === 'Basic Detail' && (
                          <span className="text-sm text-gray-500 line-through">$225</span>
                        )}
                        {service.title === 'Factory Reset' && (
                          <span className="text-sm text-gray-500 line-through">$400</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full h-32 bg-gray-200 rounded-lg mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />

                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenModal(service.slug);
                      }}
                      className="text-[#D91656] hover:text-[#E91E63] text-sm font-semibold transition flex items-center gap-1"
                    >
                      <Info className="w-4 h-4" />
                      More Details
                    </button>
                    <button className="bg-[#D91656] hover:bg-[#E91E63] text-white px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 group-hover:bg-[#E91E63]">
                      <span>Select</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Last Detail Timing */}
      {currentStep === 2 && (
        <div id="step-2" className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#0077B6]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-8 bg-[#D91656] text-white rounded-full flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900">When was your car last detailed?</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Never', '6+ months ago', '2-6 months ago', 'Within 2 months'].map((timing) => (
              <button
                key={timing}
                onClick={() => handleLastDetailSubmit(timing)}
                className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#D91656] hover:bg-[#D91656]/5 transition text-center group"
              >
                <div className="font-semibold text-gray-900 group-hover:text-[#D91656] transition">
                  {timing}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Selected service:</strong> {selectedService}
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Cleanliness Assessment */}
      {currentStep === 3 && (
        <div id="step-3" className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#0077B6]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-8 bg-[#D91656] text-white rounded-full flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900">How would you rate your car's current condition?</h3>
          </div>

          <div className="space-y-4">
            {[
              { level: 'Light cleaning needed', desc: 'Just dusty, minor dirt buildup' },
              { level: 'Moderate cleaning needed', desc: 'Some stains, pet hair, noticeable dirt' },
              { level: 'Deep cleaning needed', desc: 'Heavy stains, odors, extensive dirt buildup' }
            ].map(({ level, desc }) => (
              <button
                key={level}
                onClick={() => handleCleanlinessSubmit(level)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-[#D91656] hover:bg-[#D91656]/5 transition text-left group"
              >
                <div className="font-semibold text-gray-900 group-hover:text-[#D91656] transition mb-1">
                  {level}
                </div>
                <div className="text-sm text-gray-600">{desc}</div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Selected service:</strong> {selectedService} • <strong>Last detailed:</strong> {lastDetailTiming}
            </p>
          </div>
        </div>
      )}

      {/* Step 4: Vehicle Type */}
      {currentStep === 4 && (
        <div id="step-4" className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#0077B6]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-8 bg-[#D91656] text-white rounded-full flex items-center justify-center font-bold text-lg">
              4
            </div>
            <h3 className="text-2xl font-bold text-gray-900">What type of vehicle do you have?</h3>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              placeholder="e.g., 2019 Honda Accord, 2021 Ford F-150, etc."
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#0077B6] focus:outline-none transition"
              autoFocus
            />

            <button
              onClick={handleVehicleTypeSubmit}
              disabled={!vehicleType.trim()}
              className="w-full bg-[#D91656] hover:bg-[#E91E63] text-white font-bold py-3 px-6 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span>Continue to Contact Info</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Service:</strong> {selectedService} • <strong>Last detailed:</strong> {lastDetailTiming} • <strong>Condition:</strong> {cleanlinessLevel}
            </p>
          </div>
        </div>
      )}

      {/* Step 5: Contact Form */}
      {currentStep === 5 && (
        <div id="step-5" className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#0077B6]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-8 bg-[#D91656] text-white rounded-full flex items-center justify-center font-bold text-lg">
              5
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Get Your Quote</h3>
          </div>

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">We'll contact you within 24 hours with your quote and to schedule your service.</p>
              <p className="text-sm text-gray-500">Redirecting to confirmation page...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Location/Address *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Where should we come to you?"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-1" />
                  Additional Details (Optional)
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about any specific concerns, requests, or details about your vehicle..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] transition"
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">There was an error submitting your request. Please try again or call us directly at (803) 667-8731.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D91656] hover:bg-[#E91E63] text-white font-bold py-4 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Quote'}
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting, you agree to receive text messages about your service. Standard rates may apply.
              </p>
            </form>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Summary:</strong> {selectedService} for {vehicleType} • Last detailed: {lastDetailTiming} • Condition: {cleanlinessLevel}
            </p>
          </div>
        </div>
      )}

      {/* Service Modals */}
      {openModal && (
        <ServiceModal service={specialServices.find(s => s.slug === openModal)!} />
      )}
    </div>
  );
};

export default BookingTimelineSpecials;