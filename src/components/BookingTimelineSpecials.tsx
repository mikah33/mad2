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

  // Autofill states
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [showSavedData, setShowSavedData] = useState(false);

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

  // Autofill from URL parameters and localStorage on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const savedData = localStorage.getItem('mikah-auto-form-data');

    let urlData: any = {};
    let savedFormData: any = {};

    // Parse URL parameters
    if (params.get('name')) urlData.fullName = params.get('name');
    if (params.get('email')) urlData.email = params.get('email');
    if (params.get('phone')) urlData.phone = params.get('phone');
    if (params.get('location')) urlData.location = params.get('location');

    // Parse saved data
    if (savedData) {
      try {
        savedFormData = JSON.parse(savedData);
        setShowSavedData(true);
      } catch (e) {
        console.log('Error parsing saved form data');
      }
    }

    // URL parameters take priority over saved data
    const combinedData = { ...savedFormData, ...urlData };
    if (Object.keys(combinedData).length > 0) {
      setFormData(prev => ({ ...prev, ...combinedData }));
    }
  }, []);

  // Autofill and save to localStorage when reaching step 5
  useEffect(() => {
    if (currentStep === 5) {
      // Save current session data for next time
      const sessionData = {
        vehicleType,
        lastDetailTiming,
        cleanlinessLevel,
        selectedService
      };
      localStorage.setItem('mikah-auto-session', JSON.stringify(sessionData));
    }
  }, [currentStep, vehicleType, lastDetailTiming, cleanlinessLevel, selectedService]);

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
    const newData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newData);

    // Save to localStorage as user types (debounced)
    localStorage.setItem('mikah-auto-form-data', JSON.stringify(newData));
  };

  // Geolocation autofill
  const handleGeolocationFill = () => {
    setIsGettingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            const data = await response.json();

            const location = `${data.city || data.locality || ''}, ${data.principalSubdivision || ''} ${data.postcode || ''}`.trim().replace(/^,\s*/, '');
            setFormData(prev => ({ ...prev, location }));
            setIsGettingLocation(false);
          } catch (error) {
            console.error('Error getting location details:', error);
            setIsGettingLocation(false);
            alert('Could not get your location details. Please enter manually.');
          }
        },
        (error) => {
          setIsGettingLocation(false);
          alert('Location access denied. Please enter your location manually.');
        }
      );
    } else {
      setIsGettingLocation(false);
      alert('Geolocation is not supported by this browser.');
    }
  };

  // Quick fill common locations
  const handleQuickFillLocation = (location: string) => {
    setFormData(prev => ({ ...prev, location }));
  };

  // Load saved form data
  const handleLoadSavedData = () => {
    const savedData = localStorage.getItem('mikah-auto-form-data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(prev => ({ ...prev, ...parsedData }));
        setShowSavedData(false);
      } catch (e) {
        console.log('Error loading saved data');
      }
    }
  };

  // Clear saved data
  const handleClearSavedData = () => {
    localStorage.removeItem('mikah-auto-form-data');
    setShowSavedData(false);
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

      // Google Ads conversion tracking
      if ((window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-16694998422/TihGCPrb_9sZEJbr5Zg-',
          'value': 275.0,
          'currency': 'USD'
        });
      }

      // Meta Pixel lead conversion tracking
      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Contact Form Submission',
          content_category: 'Contact',
          value: 275.0,
          currency: 'USD',
          lead_event_source: 'website'
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
            <>
              {/* Saved Data Prompt */}
              {showSavedData && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-blue-800">We found your previous information. Would you like to use it?</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleLoadSavedData}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                      >
                        Use Saved Info
                      </button>
                      <button
                        type="button"
                        onClick={handleClearSavedData}
                        className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400 transition"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              )}

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
                      autoComplete="name"
                      placeholder="Enter your full name"
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
                      autoComplete="tel"
                      placeholder="(803) 555-1234"
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
                      autoComplete="email"
                      placeholder="your.email@example.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Location/Address *
                    </label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        autoComplete="address-line1"
                        placeholder="Where should we come to you?"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] transition"
                      />

                      {/* Location Autofill Options */}
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={handleGeolocationFill}
                          disabled={isGettingLocation}
                          className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded hover:bg-green-200 transition disabled:opacity-50"
                        >
                          <MapPin className="w-3 h-3" />
                          {isGettingLocation ? 'Getting location...' : 'Use my location'}
                        </button>

                        {['Columbia SC', 'Lexington SC', 'Irmo SC', 'West Columbia SC'].map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => handleQuickFillLocation(loc)}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded hover:bg-blue-200 transition"
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    </div>
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