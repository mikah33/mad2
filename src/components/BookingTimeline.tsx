import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Star, Shield, Wrench, Anchor, RotateCw, Check, ChevronRight, Mail, User, Phone, MapPin, Car, FileText, Info, X, Calendar, Droplet, Clock, CheckCircle } from 'lucide-react';

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

const BookingTimeline: React.FC = () => {
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

  // Service packages
  const topRowServices: Service[] = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Basic Detail',
      price: '$225',
      color: 'bg-[#0077B6]',
      slug: 'basic-detail',
      image: '/interior1.jpg',
      description: 'Full interior & exterior detail with wax protection'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Factory Reset',
      price: '$400',
      color: 'bg-[#0077B6]',
      slug: 'factory-reset',
      image: '/exterior2.jpg',
      description: 'Deep clean with shampoo, extraction & restoration',
      isPopular: true
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Marine & RV',
      price: 'Custom Quote',
      color: 'bg-[#023E8A]',
      slug: 'marine-rv',
      image: '/marine.jpg',
      description: 'Boats, RVs, motorcycles & specialty vehicles'
    }
  ];

  // Interior & Exterior Only Options
  const standaloneServices: Service[] = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Interior Detail',
      price: 'Starting at $200',
      color: 'bg-[#0077B6]',
      slug: 'interior-detail',
      image: '/interior1.jpg',
      description: 'Complete interior cleaning & protection'
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Exterior Detail',
      price: 'Starting at $100',
      color: 'bg-[#0077B6]',
      slug: 'exterior-detail',
      image: '/exterior2.jpg',
      description: 'Full exterior wash, wax & protection'
    }
  ];

  const middleRowServices: Service[] = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Paint Correction',
      price: 'Starting at $599',
      color: 'bg-[#0077B6]',
      slug: 'paint-correction',
      image: '/paintcorrection.jpg',
      description: '1-step & 2-step correction available'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ceramic Coating',
      price: 'Starting at $999',
      color: 'bg-[#023E8A]',
      slug: 'ceramic-coating',
      image: '/ceramic.jpg',
      description: 'Long-lasting paint protection (2-5 years)'
    }
  ];

  const bottomRowService: Service = {
    icon: <RotateCw className="w-8 h-8" />,
    title: 'Routine Reset',
    price: '$225/Month',
    color: 'bg-[#0077B6]',
    slug: 'routine-reset',
    image: '/mclarens.jpg',
    description: '1 interior + 2 exterior details monthly'
  };


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
      // Prepare the payload with ALL step data
      const payload = {
        // Step 1: Vehicle Type
        vehicleType: vehicleType,

        // Step 2: Last Detail Timing
        lastDetailTiming: lastDetailTiming,

        // Step 3: Cleanliness Level
        cleanlinessLevel: cleanlinessLevel,

        // Step 4: Selected Service
        service: selectedService,

        // Step 5: Contact Information
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        description: formData.description,

        // Metadata
        timestamp: new Date().toISOString(),
        source: 'Mikahs Auto Detailing - Booking Timeline'
      };

      console.log('📧 Sending to n8n webhook:', payload);

      // Send directly to n8n webhook
      const response = await fetch('https://contractorai.app.n8n.cloud/webhook/41d626b4-d245-4ef6-82b1-575c623e02d6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('✅ Successfully sent to n8n webhook');
        // Fire Google Ads conversion tracking
        if (typeof (window as any).gtag_report_conversion === 'function') {
          (window as any).gtag_report_conversion('/book/thank-you');
        } else {
          // Fallback if conversion function not available
          window.location.href = '/book/thank-you';
        }
        return;
      } else {
        console.error('❌ n8n webhook failed:', response.status, response.statusText);
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenModal = (serviceTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTimeout(() => {
      setOpenModal(serviceTitle);
    }, 300);
  };

  const handleCloseModal = () => {
    setTimeout(() => {
      setOpenModal(null);
    }, 200);
  };

  const getServiceDetails = (serviceTitle: string) => {
    const serviceDetails: Record<string, {
      fullDescription: string;
      includes: string[];
      process: string[];
      timeEstimate: string;
      benefits: string[];
    }> = {
      'Basic Detail': {
        fullDescription: '🚗 Our Basic Package Includes: ($225)\n\nPerfect for Columbia SC and Lexington SC customers who want professional mobile car detailing at an affordable price.',
        includes: [
          '**Interior:**',
          '✅ Full interior wipe down',
          '✅ Conditioner applied to all surfaces',
          '✅ UV protection on all surfaces',
          '✅ Full vacuum',
          '✅ Full disinfection process for cloth surfaces',
          '✅ Glass cleaning',
          '✅ Door jambs cleaned and waxed',
          '',
          '**Exterior:**',
          '🛞 Wheels decontaminated from brake dust',
          '🫧 Foam contact wash (all bugs, sap and tar removed)',
          '✨ Layer of wax for protection',
          '🛑 Trim and tires dressed',
          '',
          '**Service Areas:** Available for mobile detailing Columbia SC, Lexington SC, Irmo SC, and surrounding areas.',
          '',
          'Want individual services? Check out our dedicated interior detailing and exterior detailing packages.'
        ],
        process: [],
        timeEstimate: '2-3 hours',
        benefits: []
      },
      'Factory Reset': {
        fullDescription: '🏭 Factory Reset Package – $325\n\nOur Factory Reset is an enhanced version of the Basic Maintenance Detail, designed to get your vehicle looking as close to factory condition as possible.',
        includes: [
          '**Interior:**',
          '✅ Full interior wipe down',
          '✅ Conditioner + UV protection on all surfaces',
          '✅ Full vacuum and disinfection of cloth areas',
          '✅ LIGHT stain removal',
          '✅ Upholstery and floor mat shampoo & extraction',
          '✅ Glass cleaned, door jambs cleaned and waxed',
          '',
          '**Exterior:**',
          '✅ Foam contact wash (removes bugs, tar, sap)',
          '✅ Brake dust removal from wheels',
          '✅ Layer of wax for protection',
          '✅ Trim and tires dressed',
          '✅ Black trim restored/redyed',
          '✅ Engine bay detailed'
        ],
        process: [],
        timeEstimate: '4-6 hours',
        benefits: []
      },
      'Paint Correction': {
        fullDescription: '🔧 Paint Correction – Starting at $599\n\nProfessional paint correction removes swirls, scratches, and oxidation to restore your vehicle\'s finish to like-new condition.',
        includes: [
          '**1-Step Paint Correction:**',
          '✅ Thorough hand wash and decontamination',
          '✅ Clay bar treatment to remove bonded contaminants',
          '✅ Single-stage machine polishing',
          '✅ Removes light swirls and minor scratches',
          '✅ Restores gloss and clarity',
          '✅ Paint sealant application',
          '',
          '**2-Step Paint Correction:**',
          '✅ Everything in 1-step correction',
          '✅ Heavy cutting compound for deep scratches',
          '✅ Fine polishing stage for ultimate clarity',
          '✅ Removes moderate to severe paint defects',
          '✅ Maximum gloss and depth enhancement',
          '✅ Premium carnauba wax or sealant',
          '',
          '**Process depends on paint condition:**',
          '• We inspect your paint and recommend the best correction level',
          '• 1-step for newer vehicles with light swirls',
          '• 2-step for older vehicles or heavy defects'
        ],
        process: [],
        timeEstimate: '4-8 hours (varies by correction level)',
        benefits: []
      },
      'Ceramic Coating': {
        fullDescription: '🛡️ Ceramic Coating – Starting at $999\n\nProfessional-grade ceramic coating provides years of protection with incredible gloss, hydrophobic properties, and chemical resistance. Our ceramic coating service is highly popular throughout Columbia SC, Lexington SC, and surrounding areas.',
        includes: [
          '**What is Ceramic Coating?**',
          'Ceramic coating is a liquid polymer that chemically bonds with your vehicle\'s paint, creating a protective layer that lasts 2-5 years. It provides superior protection against UV rays, chemicals, bird droppings, and environmental contaminants.',
          '',
          '**Benefits:**',
          '✅ Long-lasting protection (2-5 years depending on product)',
          '✅ Extreme hydrophobic effect - water beads off instantly',
          '✅ Enhanced gloss and depth of color',
          '✅ Protection from UV damage and oxidation',
          '✅ Chemical resistant to bird droppings, bug splatter, tar',
          '✅ Easier washing - dirt slides right off',
          '✅ Scratch resistance (not scratch-proof)',
          '',
          '**Paint Correction Required:**',
          'We offer 1-step and 2-step paint correction options depending on your paint\'s condition. Paint must be properly corrected before coating for optimal results.',
          '',
          '**Our Process:**',
          '• Thorough decontamination and clay bar treatment',
          '• Paint correction (1-step or 2-step based on condition)',
          '• Paint prep and IPA wipe down',
          '• Professional ceramic coating application',
          '• 24-48 hour curing time required',
          '',
          '**Service Areas:** Available for mobile ceramic coating throughout Columbia SC, Lexington SC, Irmo SC, West Columbia SC, and Cayce SC.',
          '',
          '**Learn More:** Visit our detailed ceramic coating service page for complete pricing, packages, and ceramic coating FAQ information.'
        ],
        process: [],
        timeEstimate: '1-2 days (includes curing time)',
        benefits: []
      },
      'Marine & RV': {
        fullDescription: '⚓ Marine & RV Detailing – Custom Quote\n\nSpecialized detailing for boats, RVs, motorcycles, and other specialty vehicles.',
        includes: [
          '**Pricing depends on:**',
          '• Size of boat or RV',
          '• Condition of gel coat or paint',
          '• Type of surfaces (fiberglass, gel coat, aluminum, etc.)',
          '• Level of oxidation or damage',
          '• Additional services requested',
          '',
          '**Boat Detailing Services:**',
          '✅ Gel coat cleaning and restoration',
          '✅ Oxidation removal',
          '✅ Waxing and protection',
          '✅ Interior cleaning',
          '✅ Canvas and upholstery cleaning',
          '✅ Metal polishing',
          '',
          '**RV Detailing Services:**',
          '✅ Exterior wash and wax',
          '✅ Oxidation removal',
          '✅ Decal and stripe restoration',
          '✅ Interior deep cleaning',
          '✅ Slide-out cleaning',
          '✅ Awning cleaning',
          '',
          'Contact us for a custom quote based on your specific needs.'
        ],
        process: [],
        timeEstimate: 'Varies by size and condition',
        benefits: []
      },
      'Interior Detail': {
        fullDescription: '🧹 Interior Detail – Starting at $200\n\nComplete interior cleaning and protection for your vehicle.',
        includes: [
          '**Interior Services:**',
          '✅ Full interior wipe down',
          '✅ Conditioner applied to all surfaces',
          '✅ UV protection on all surfaces',
          '✅ Full vacuum',
          '✅ Full disinfection process for cloth surfaces',
          '✅ Glass cleaning',
          '✅ Door jambs cleaned and waxed',
          '',
          '**Perfect for:**',
          '• Vehicles that need interior refresh only',
          '• Regular interior maintenance',
          '• Quick turnaround cleaning'
        ],
        process: [],
        timeEstimate: '1-2 hours',
        benefits: []
      },
      'Exterior Detail': {
        fullDescription: '✨ Exterior Detail – Starting at $100\n\nComplete exterior wash, decontamination, and protection.',
        includes: [
          '**Exterior Services:**',
          '🛞 Wheels decontaminated from brake dust',
          '🫧 Foam contact wash (all bugs, sap and tar removed)',
          '✨ Layer of wax for protection',
          '🛑 Trim and tires dressed',
          '',
          '**Perfect for:**',
          '• Vehicles that need exterior refresh only',
          '• Quick wash and protection',
          '• Between full details'
        ],
        process: [],
        timeEstimate: '1 hour',
        benefits: []
      },
      'Routine Reset': {
        fullDescription: '🔄 Routine Reset – $225/Month\n\nOur monthly maintenance subscription keeps your vehicle consistently fresh with 1 interior detail and 2 exterior washes per month.',
        includes: [
          '**Monthly Package Includes:**',
          '',
          '**1x Interior Detail per month:**',
          '✅ Full vacuum of all surfaces',
          '✅ Interior wipe down and conditioning',
          '✅ UV protection on all surfaces',
          '✅ Glass cleaning',
          '✅ Door jambs cleaned',
          '✅ Light stain treatment',
          '',
          '**2x Exterior Details per month:**',
          '✅ Hand wash with foam cannon',
          '✅ Wheel and tire cleaning',
          '✅ Tire dressing',
          '✅ Trim dressing',
          '✅ Glass cleaning',
          '✅ Quick spray wax',
          '',
          '**Perfect for:**',
          '• Busy professionals who want their car always fresh',
          '• Families with kids who need regular cleaning',
          '• Car enthusiasts maintaining show-quality appearance',
          '• Anyone who wants to preserve their vehicle\'s value',
          '',
          '**Saves you money:**',
          'Regular price would be $350/month - you save $125/month with this package!'
        ],
        process: [],
        timeEstimate: 'Scheduled monthly',
        benefits: []
      },
    };

    return serviceDetails[serviceTitle] || null;
  };

  return (
    <section id="booking" className="py-4 md:py-6 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Progress Indicator */}
        <div className="flex justify-center items-center mb-8 max-w-2xl mx-auto">
          {[1, 2, 3, 4, 5].map((step) => (
            <React.Fragment key={step}>
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                ${currentStep >= step ? 'bg-[#0077B6] text-white' : 'bg-gray-200 text-gray-400'}
              `}>
                {currentStep > step ? <Check className="w-5 h-5" /> : step}
              </div>
              {step < 5 && (
                <div className={`
                  flex-1 h-1 mx-2
                  ${currentStep > step ? 'bg-[#0077B6]' : 'bg-gray-200'}
                `} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* STEP 4: Vehicle Type */}
        {currentStep === 4 && (
        <div id="step-4" className="mb-8 scroll-mt-20">
          <div className="text-center mb-4">
            <div className="inline-block bg-[#CAF0F8] text-[#023E8A] px-4 py-1 rounded-full font-semibold text-xs mb-2">
              STEP 4
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">What kind of vehicle do you drive?</h3>
            <p className="text-gray-600 text-sm">Tell us about your car, truck, SUV, or specialty vehicle</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Car className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleVehicleTypeSubmit()}
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition bg-gray-50 focus:bg-white text-lg"
                placeholder="e.g., 2020 Honda Civic, Ford F-150, Tesla Model 3..."
                disabled={currentStep > 4}
              />
            </div>

            <button
              onClick={handleVehicleTypeSubmit}
              disabled={!vehicleType.trim()}
              className="w-full mt-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] hover:from-[#0077B6] hover:to-[#90E0EF] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:transform-none"
            >
              Continue <ChevronRight className="w-5 h-5 inline ml-2" />
            </button>

            {/* Back Button */}
            <div className="mt-4">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-all text-sm"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
        )}

        {/* STEP 2: Last Detail Timing */}
        {currentStep === 2 && (
          <div id="step-2" className="mb-8 scroll-mt-20">
            <div className="text-center mb-4">
              <div className="inline-block bg-[#CAF0F8] text-[#023E8A] px-4 py-1 rounded-full font-semibold text-xs mb-2">
                STEP 2
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">When's the last time you had a detail?</h3>
              <p className="text-gray-600 text-sm">This helps us understand your vehicle's condition</p>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { value: '1-4 weeks', icon: <CheckCircle className="w-8 h-8" />, label: '1-4 weeks ago', desc: 'Recent detail' },
                { value: '4-8 weeks', icon: <Calendar className="w-8 h-8" />, label: '4-8 weeks ago', desc: 'Regular maintenance' },
                { value: '2+ months', icon: <Clock className="w-8 h-8" />, label: '2+ months ago', desc: 'Needs attention' },
                { value: 'never', icon: <Star className="w-8 h-8" />, label: 'Never had a detail', desc: 'First time' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleLastDetailSubmit(option.value)}
                  disabled={currentStep > 2}
                  className={`
                    p-4 rounded-xl border-2 transition-all duration-200 text-left transform
                    ${lastDetailTiming === option.value
                      ? 'border-[#0077B6] ring-4 ring-[#90E0EF] bg-[#CAF0F8] scale-105 shadow-xl'
                      : 'border-gray-200 hover:border-[#90E0EF] bg-white hover:shadow-lg hover:scale-102'
                    }
                    ${currentStep > 2 ? 'cursor-not-allowed' : 'cursor-pointer active:scale-95'}
                  `}
                >
                  <div className={`mb-2 transition-all ${lastDetailTiming === option.value ? 'text-[#023E8A] scale-110' : 'text-[#0077B6]'}`}>{option.icon}</div>
                  <div className={`font-bold text-base mb-1 ${lastDetailTiming === option.value ? 'text-[#023E8A]' : ''}`}>{option.label}</div>
                  <div className="text-gray-600 text-sm">{option.desc}</div>
                </button>
              ))}
            </div>

            {/* Back Button */}
            <div className="max-w-3xl mx-auto mt-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-all text-sm"
              >
                ← Back
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Cleanliness Level */}
        {currentStep === 3 && (
          <div id="step-3" className="mb-8 scroll-mt-20">
            <div className="text-center mb-4">
              <div className="inline-block bg-[#CAF0F8] text-[#023E8A] px-4 py-1 rounded-full font-semibold text-xs mb-2">
                STEP 3
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">How dirty is your car?</h3>
              <p className="text-gray-600 text-sm">Be honest - we've seen it all!</p>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  value: 'level-1',
                  label: 'Level 1: Not too bad',
                  desc: 'Just want a refresh',
                  color: 'bg-green-50 border-green-200'
                },
                {
                  value: 'level-2',
                  label: 'Level 2: Moderately dirty',
                  desc: 'Just dirt and dust',
                  color: 'bg-yellow-50 border-yellow-200'
                },
                {
                  value: 'level-3',
                  label: 'Level 3: Really dirty',
                  desc: 'Food residue, excessive dirt',
                  color: 'bg-red-50 border-red-200'
                }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleCleanlinessSubmit(option.value)}
                  disabled={currentStep > 3}
                  className={`
                    p-4 rounded-xl border-2 transition-all duration-200 text-left transform
                    ${cleanlinessLevel === option.value
                      ? 'border-[#0077B6] ring-4 ring-[#90E0EF] bg-[#CAF0F8] scale-105 shadow-xl'
                      : `${option.color} hover:border-[#90E0EF] hover:shadow-lg hover:scale-102`
                    }
                    ${currentStep > 3 ? 'cursor-not-allowed opacity-70' : 'cursor-pointer active:scale-95'}
                  `}
                >
                  <div className={`font-bold text-base mb-1 ${cleanlinessLevel === option.value ? 'text-[#023E8A]' : ''}`}>{option.label}</div>
                  <div className="text-gray-600 text-sm">{option.desc}</div>
                </button>
              ))}
            </div>

            {/* Back Button */}
            <div className="max-w-3xl mx-auto mt-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-all text-sm"
              >
                ← Back
              </button>
            </div>
          </div>
        )}

        {/* STEP 1: Package Selection */}
        {currentStep === 1 && (
          <div id="step-1" className="mb-8">
            <div className="text-center mb-4">
              <div className="inline-block bg-[#CAF0F8] text-[#023E8A] px-4 py-1 rounded-full font-semibold text-xs mb-2">
                STEP 1
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Select Your Service Package</h3>
              <p className="text-gray-600 text-sm">Choose the package that fits your needs</p>
            </div>

            {/* Service Cards - 4x2 Grid Style with Text Overlays */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {/* Row 1: Basic Detail & Factory Reset */}
              {[topRowServices[0], topRowServices[1]].map((service, index) => (
                <div
                  key={index}
                  onClick={() => currentStep === 1 && handleServiceSelect(service.title)}
                  className={`
                    relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group bg-[#0077B6]
                    ${selectedService === service.title
                      ? 'ring-4 ring-[#0077B6] scale-[1.02]'
                      : 'hover:scale-[1.02]'
                    }
                    ${currentStep === 1 ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'}
                  `}
                >
                  {/* Large Image with Text Overlay */}
                  <div className="relative h-44 sm:h-52 md:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Text Overlay on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h4 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 drop-shadow-lg">
                        {service.title}
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm line-clamp-2 drop-shadow">
                        {service.description}
                      </p>
                    </div>

                    {service.isPopular && (
                      <div className="absolute top-3 left-3 z-10">
                        <div className="bg-[#FFD700] text-[#023E8A] px-3 py-1 rounded text-xs font-bold shadow-lg flex items-center gap-1">
                          <Star className="w-3 h-3 fill-[#023E8A]" />
                          POPULAR
                        </div>
                      </div>
                    )}

                    {selectedService === service.title && (
                      <div className="absolute top-3 right-3 bg-[#0077B6] text-white rounded-full p-2 shadow-lg z-20">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Price Bar */}
                  <div className={`p-3 sm:p-4 flex items-center justify-between ${selectedService === service.title ? 'bg-[#023E8A]' : 'bg-[#0077B6]'}`}>
                    <div className="text-white font-black text-xl sm:text-2xl">
                      {service.price}
                    </div>
                    <button
                      onClick={(e) => handleOpenModal(service.title, e)}
                      className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded text-xs sm:text-sm font-semibold transition flex items-center gap-1"
                    >
                      <Info className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>
              ))}

              {/* Row 2: Interior & Exterior */}
              {standaloneServices.map((service, index) => (
                <div
                  key={index}
                  onClick={() => currentStep === 1 && handleServiceSelect(service.title)}
                  className={`
                    relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group bg-[#0077B6]
                    ${selectedService === service.title
                      ? 'ring-4 ring-[#0077B6] scale-[1.02]'
                      : 'hover:scale-[1.02]'
                    }
                    ${currentStep === 1 ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'}
                  `}
                >
                  {/* Large Image with Text Overlay */}
                  <div className="relative h-44 sm:h-52 md:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Text Overlay on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h4 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 drop-shadow-lg">
                        {service.title}
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm line-clamp-2 drop-shadow">
                        {service.description}
                      </p>
                    </div>

                    {selectedService === service.title && (
                      <div className="absolute top-3 right-3 bg-[#0077B6] text-white rounded-full p-2 shadow-lg z-20">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Price Bar */}
                  <div className={`p-3 sm:p-4 flex items-center justify-between ${selectedService === service.title ? 'bg-[#023E8A]' : 'bg-[#0077B6]'}`}>
                    <div className="text-white font-black text-xl sm:text-2xl">
                      {service.price}
                    </div>
                    <button
                      onClick={(e) => handleOpenModal(service.title, e)}
                      className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded text-xs sm:text-sm font-semibold transition flex items-center gap-1"
                    >
                      <Info className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>
              ))}

              {/* Row 3: Paint Correction & Ceramic Coating */}
              {middleRowServices.map((service, index) => (
                <div
                  key={index}
                  onClick={() => currentStep === 1 && handleServiceSelect(service.title)}
                  className={`
                    relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group bg-[#0077B6]
                    ${selectedService === service.title
                      ? 'ring-4 ring-[#0077B6] scale-[1.02]'
                      : 'hover:scale-[1.02]'
                    }
                    ${currentStep === 1 ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'}
                  `}
                >
                  {/* Large Image with Text Overlay */}
                  <div className="relative h-44 sm:h-52 md:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Text Overlay on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h4 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 drop-shadow-lg">
                        {service.title}
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm line-clamp-2 drop-shadow">
                        {service.description}
                      </p>
                    </div>

                    {selectedService === service.title && (
                      <div className="absolute top-3 right-3 bg-[#0077B6] text-white rounded-full p-2 shadow-lg z-20">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Price Bar */}
                  <div className={`p-3 sm:p-4 flex items-center justify-between ${selectedService === service.title ? 'bg-[#023E8A]' : 'bg-[#0077B6]'}`}>
                    <div className="text-white font-black text-lg sm:text-xl md:text-2xl">
                      {service.price}
                    </div>
                    <button
                      onClick={(e) => handleOpenModal(service.title, e)}
                      className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded text-xs sm:text-sm font-semibold transition flex items-center gap-1"
                    >
                      <Info className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>
              ))}

              {/* Row 4: Marine & RV and Routine Reset */}
              {[topRowServices[2], bottomRowService].map((service, index) => (
                <div
                  key={index}
                  onClick={() => currentStep === 1 && handleServiceSelect(service.title)}
                  className={`
                    relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group bg-[#0077B6]
                    ${selectedService === service.title
                      ? 'ring-4 ring-[#0077B6] scale-[1.02]'
                      : 'hover:scale-[1.02]'
                    }
                    ${currentStep === 1 ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'}
                  `}
                >
                  {/* Large Image with Text Overlay */}
                  <div className="relative h-44 sm:h-52 md:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Text Overlay on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h4 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 drop-shadow-lg">
                        {service.title}
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm line-clamp-2 drop-shadow">
                        {service.description}
                      </p>
                    </div>

                    {selectedService === service.title && (
                      <div className="absolute top-3 right-3 bg-[#0077B6] text-white rounded-full p-2 shadow-lg z-20">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Price Bar */}
                  <div className={`p-3 sm:p-4 flex items-center justify-between ${selectedService === service.title ? 'bg-[#023E8A]' : 'bg-[#0077B6]'}`}>
                    <div className="text-white font-black text-lg sm:text-xl md:text-2xl">
                      {service.price}
                    </div>
                    <button
                      onClick={(e) => handleOpenModal(service.title, e)}
                      className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded text-xs sm:text-sm font-semibold transition flex items-center gap-1"
                    >
                      <Info className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* STEP 5: Contact Information */}
        {currentStep === 5 && selectedService && (
          <div id="step-5" className="scroll-mt-20">
            <div className="text-center mb-4">
              <div className="inline-block bg-[#CAF0F8] text-[#023E8A] px-4 py-1 rounded-full font-semibold text-xs mb-2">
                STEP 5
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Enter Your Contact Details</h3>
              <p className="text-gray-600 text-sm">We'll contact you within a few minutes!</p>
              <p className="text-[#023E8A] font-semibold text-sm mt-1">Selected: {selectedService}</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-200">

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-800 font-medium text-sm">Thank you for your booking request!</p>
                        <p className="text-green-700 text-xs">We'll contact you within a few minutes!</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <p className="text-red-800 font-medium text-sm">Submission failed</p>
                    <p className="text-red-700 text-xs">Please try again or call us at (803) 667-8731</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Full Name *"
                      disabled={isSubmitting}
                    />
                  </div>

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
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Email Address *"
                      disabled={isSubmitting}
                    />
                  </div>

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
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Phone Number *"
                      disabled={isSubmitting}
                    />
                  </div>

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
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition bg-gray-50 focus:bg-white"
                      placeholder="Street address, city and zip"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Vehicle Type - Hidden (already collected in Step 4) */}
                  <input type="hidden" name="vehicleType" value={vehicleType} />

                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition bg-gray-50 focus:bg-white resize-none"
                      placeholder="Additional Details (Optional)"
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] hover:from-[#0077B6] hover:to-[#90E0EF] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:transform-none shadow-lg"
                  >
                    {isSubmitting ? 'Submitting...' : `Get Quote for ${selectedService}`}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Or call us: <a href="tel:8036678731" onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion()} className="text-[#023E8A] font-semibold hover:underline">(803) 667-8731</a>
                  </p>
                </form>

                {/* Back Button */}
                <div className="mt-4">
                  <button
                    onClick={() => setCurrentStep(4)}
                    type="button"
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-all text-sm"
                  >
                    ← Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Modal */}
      {openModal && (() => {
        const details = getServiceDetails(openModal);
        return (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white p-6 rounded-t-2xl flex justify-between items-center z-10">
                <h3 className="text-2xl md:text-3xl font-bold">{openModal}</h3>
                <button
                  onClick={handleCloseModal}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all active:scale-90"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {details && (
                <div className="p-6 md:p-8">
                  <div className="text-gray-700 text-base mb-6 whitespace-pre-line leading-relaxed">
                    {details.fullDescription}
                  </div>

                  {details.timeEstimate && (
                    <div className="bg-[#CAF0F8] border border-[#90E0EF] rounded-lg p-4 mb-6">
                      <p className="font-semibold text-gray-800">⏱️ Time Estimate: {details.timeEstimate}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    {details.includes.map((item, index) => {
                      // Bold headers (Interior/Exterior)
                      if (item.startsWith('**') && item.endsWith('**')) {
                        return (
                          <div key={index} className="font-bold text-lg text-[#023E8A] mt-4 mb-2">
                            {item.replace(/\*\*/g, '')}
                          </div>
                        );
                      }
                      // Empty lines for spacing
                      if (item === '') {
                        return <div key={index} className="h-2"></div>;
                      }
                      // Regular list items
                      return (
                        <div key={index} className="flex items-start gap-2 pl-2">
                          <span className="text-gray-700">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="sticky bottom-0 border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl flex gap-4">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all active:scale-95"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      setOpenModal(null);
                      if (currentStep === 1 && openModal) handleServiceSelect(openModal);
                    }, 200);
                  }}
                  className="flex-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] hover:from-[#0077B6] hover:to-[#90E0EF] text-white font-semibold py-3 px-6 rounded-lg transition-all active:scale-95"
                >
                  Select {openModal}
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};

export default BookingTimeline;
