import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Sparkles, Star, Shield, Wrench, Anchor, RotateCw, Check, ChevronRight, Mail, User, Phone, MapPin, Car, FileText, Info, X, Droplet } from 'lucide-react';
import { collectForensicData, isJeffreyByAnyMethod } from '../utils/forensics';
import {
  trackPhoneClick,
  trackTextClick,
  getClickIds,
  getLeadSource,
  trackFunnelStep,
  trackFieldInteraction,
  trackFormSubmitAttempt,
  trackFormSubmitResult,
  trackServiceSelect,
  flushFunnelAbandon,
} from '../utils/analytics';

/** GA4 funnel identifiers for this form. */
const FUNNEL_ID = 'booking_main';
// Funnel condensed 2026-07: GA4 showed a 40% user drop at the old step 3
// ("how dirty is your car") and another 37% at the contact step, so the three
// qualification questions now live on ONE screen (step 2). The n8n/GHL payload
// field names are unchanged — only how the answers are collected.
const STEP_NAMES: Record<number, string> = {
  1: 'package_selection',
  2: 'vehicle_condition',
  3: 'contact_details',
};

/**
 * Dirtiness slider praise — every answer gets celebrated so nobody feels
 * judged into abandoning the form (the old "how dirty" step lost 40% of users).
 */
const DIRTINESS_PRAISE: Record<number, { emoji: string; text: string }> = {
  1: { emoji: '🤩', text: 'Basically showroom clean — this will be a quick glow-up!' },
  2: { emoji: '✨', text: 'Barely lived-in. You clearly take care of your ride!' },
  3: { emoji: '👌', text: 'Just needs a little love — easy day for us.' },
  4: { emoji: '😎', text: 'A few crumbs never hurt anyone. Nice and manageable!' },
  5: { emoji: '👍', text: 'Perfectly normal — right in our sweet spot.' },
  6: { emoji: '💪', text: 'Lived-in and loved. We got you covered!' },
  7: { emoji: '🔥', text: 'Now we\'re talking — a satisfying transformation incoming.' },
  8: { emoji: '🚀', text: 'Oh, this is going to be a GREAT before & after!' },
  9: { emoji: '🏋️', text: 'A worthy challenge — honestly, our favorite kind of job.' },
  10: { emoji: '🏆', text: 'Legendary. We LIVE for these transformations!' },
};

interface Service {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  color: string;
  slug: string;
  image: string;
  isPopular?: boolean;
  altText?: string;
}

const BookingTimeline: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const onBookPage = location.pathname === '/book' || location.pathname.startsWith('/book');

  // Step tracking
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Vehicle Type
  const [vehicleType, setVehicleType] = useState('');

  // Last-detail timing question removed 2026-07 (the dirtiness slider covers
  // condition). Payload still sends the field so n8n/GHL mappings don't break.
  const lastDetailTiming = '';

  // Cleanliness: 1-10 slider. Payload still sends the legacy level-1/2/3
  // buckets in `cleanlinessLevel` (so n8n/GHL mappings keep working) plus the
  // exact score as a new additive `dirtinessScore` field.
  const [dirtinessScore, setDirtinessScore] = useState(5);
  const cleanlinessLevel = dirtinessScore <= 3 ? 'level-1' : dirtinessScore <= 7 ? 'level-2' : 'level-3';

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

  // SMS consent (A2P 10DLC) — two separate, optional opt-ins; neither is required to submit
  const [smsTransactional, setSmsTransactional] = useState(false);
  const [smsMarketing, setSmsMarketing] = useState(false);

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
      description: 'Full interior & exterior detail with wax protection',
      altText: 'Auto detailing services columbia sc - basic detail package interior and exterior'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Factory Reset',
      price: '$400',
      color: 'bg-[#0077B6]',
      slug: 'factory-reset',
      image: '/exterior2.jpg',
      description: 'Deep clean with shampoo, extraction & restoration',
      isPopular: true,
      altText: 'Auto detailing services columbia sc - factory reset deep clean package'
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Marine & RV',
      price: 'Custom Quote',
      color: 'bg-[#023E8A]',
      slug: 'marine-rv',
      image: '/marine.jpg',
      description: 'Boats, RVs, motorcycles & specialty vehicles',
      altText: 'Auto detailing services columbia sc - marine and RV detailing'
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
      description: 'Complete interior cleaning & protection',
      altText: 'Interior auto detailing services columbia sc - complete cleaning and protection'
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Exterior Detail',
      price: 'Starting at $100',
      color: 'bg-[#0077B6]',
      slug: 'exterior-detail',
      image: '/exterior2.jpg',
      description: 'Full exterior wash, wax & protection',
      altText: 'Exterior auto detailing services columbia sc - wash wax and paint protection'
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
      description: '1-step & 2-step correction available',
      altText: 'Auto detailing services columbia sc - paint correction swirl removal'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ceramic Coating',
      price: 'Starting at $999',
      color: 'bg-[#023E8A]',
      slug: 'ceramic-coating',
      image: '/ceramic.jpg',
      description: 'Long-lasting paint protection (2-5 years)',
      altText: 'Auto detailing services columbia sc - ceramic coating paint protection'
    }
  ];

  const bottomRowService: Service = {
    icon: <RotateCw className="w-8 h-8" />,
    title: 'Routine Reset',
    price: '$225/Month',
    color: 'bg-[#0077B6]',
    slug: 'routine-reset',
    image: '/mclarens.jpg',
    description: '1 interior + 2 exterior details monthly',
    altText: 'Auto detailing services columbia sc - monthly routine reset subscription'
  };


  // All services (for slug <-> title mapping and deep-linking from other pages)
  const allServices = [...topRowServices, ...standaloneServices, ...middleRowServices, bottomRowService];
  const slugToTitle: Record<string, string> = {};
  const titleToSlug: Record<string, string> = {};
  allServices.forEach((s) => {
    slugToTitle[s.slug] = s.title;
    titleToSlug[s.title] = s.slug;
  });

  // Deep-link: /book?service=<slug> pre-selects the package and jumps to step 2
  useEffect(() => {
    const svc = searchParams.get('service');
    if (svc && slugToTitle[svc]) {
      setSelectedService(slugToTitle[svc]);
      setCurrentStep(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll on step change
  useEffect(() => {
    if (currentStep > 1) {
      setTimeout(() => {
        document.getElementById(`step-${currentStep}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [currentStep]);

  // GA4 funnel: report each step reached (only track the real funnel on /book;
  // on other pages step 1 just deep-links into /book).
  useEffect(() => {
    if (onBookPage) trackFunnelStep(FUNNEL_ID, currentStep, STEP_NAMES[currentStep] || `step_${currentStep}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, onBookPage]);

  // GA4 funnel: user navigated away mid-funnel (SPA route change).
  useEffect(() => {
    if (!onBookPage) return;
    return () => flushFunnelAbandon('route_change');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onBookPage]);

  // Step 1: Package Selection -> Step 2.
  // On pages other than /book, deep-link to the dedicated /book funnel at step 2.
  const handleServiceSelect = (serviceTitle: string) => {
    trackServiceSelect(FUNNEL_ID, serviceTitle);
    if (!onBookPage) {
      const slug = titleToSlug[serviceTitle];
      navigate(`/book?service=${slug || ''}`);
      return;
    }
    setSelectedService(serviceTitle);
    setTimeout(() => {
      setCurrentStep(2);
    }, 500);
  };

  // Step 2 (combined vehicle & condition) -> Step 3 (contact).
  // Only the vehicle is required; the two condition questions are single-tap
  // chips that no longer gate progress (they were the funnel's biggest cliff).
  const handleDetailsSubmit = () => {
    if (vehicleType.trim()) {
      setCurrentStep(3);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    trackFieldInteraction(FUNNEL_ID, e.target.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;
    const alreadySubmitted = sessionStorage.getItem('formSubmitted');
    if (alreadySubmitted) {
      console.log('Form already submitted this session');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    sessionStorage.setItem('formSubmitted', 'true');
    trackFormSubmitAttempt(FUNNEL_ID);

    try {
      // Collect forensic data (IP, fingerprint, device info)
      const forensics = await collectForensicData();
      console.log('🔍 Forensic data collected:', forensics);

      // Prepare the payload with ALL step data
      const payload = {
        // Step 1: Vehicle Type
        vehicleType: vehicleType,

        // Step 2: Last Detail Timing
        lastDetailTiming: lastDetailTiming,

        // Cleanliness: legacy bucket (GHL mappings depend on level-1/2/3)
        // plus the exact 1-10 slider score as a new additive field.
        cleanlinessLevel: cleanlinessLevel,
        dirtinessScore: dirtinessScore,

        // Step 4: Selected Service
        service: selectedService,

        // Step 5: Contact Information
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        description: formData.description,

        // SMS consent (A2P 10DLC opt-in proof) — separate transactional & marketing
        smsConsentTransactional: smsTransactional,
        smsConsentMarketing: smsMarketing,
        smsConsentText: [
          smsTransactional ? 'TRANSACTIONAL: consented to appointment/service text updates' : '',
          smsMarketing ? 'MARKETING: consented to promotional text messages' : '',
        ].filter(Boolean).join(' | '),

        // Forensic Data (full device fingerprint)
        forensics: forensics,

        // Ad click IDs (gclid/gbraid/wbraid) for Offline Conversion Import
        ...getClickIds(),

        // Lead source: submit page, landing page, referrer, UTMs
        ...getLeadSource(),

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
        // Must fire BEFORE the redirect below so the funnel isn't counted as abandoned.
        trackFormSubmitResult(FUNNEL_ID, true);

        // Check if this is Jeffrey based on IP OR known harassment patterns
        const formFields = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          description: formData.description,
          vehicleType: vehicleType
        };

        if (isJeffreyByAnyMethod(forensics.ip, formFields)) {
          console.log('🚨 Detected harassment pattern - redirecting to callout page');
          // Store full forensics data for the callout page
          sessionStorage.setItem('forensics', JSON.stringify(forensics));
          // Store his form submission data to throw back at him
          sessionStorage.setItem('submissionData', JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            vehicleType: vehicleType,
            service: selectedService,
            description: formData.description
          }));
          window.location.href = '/nice-try-jeffrey';
          return;
        }

        // Normal flow for legitimate customers.
        // Store lead details for Enhanced Conversions; the conversion itself
        // fires once on the Thank-You page (single source of truth).
        try {
          sessionStorage.setItem(
            'lead_ec',
            JSON.stringify({ email: formData.email, phone: formData.phone, fullName: formData.fullName })
          );
        } catch {
          /* ignore storage errors */
        }
        window.location.href = '/book/thank-you';
        return;
      } else {
        console.error('❌ n8n webhook failed:', response.status, response.statusText);
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      trackFormSubmitResult(FUNNEL_ID, false, error instanceof Error ? error.message : String(error));
      setSubmitStatus('error');
      // Clear flag so they can retry on error
      sessionStorage.removeItem('formSubmitted');
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
        fullDescription: '🏭 Factory Reset Package – $400\n\nOur Factory Reset is an enhanced version of the Basic Maintenance Detail, designed to get your vehicle looking as close to factory condition as possible.',
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
        <div className="flex justify-center items-center mb-8 max-w-md mx-auto">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                ${currentStep >= step ? 'bg-[#0077B6] text-white' : 'bg-gray-200 text-gray-400'}
              `}>
                {currentStep > step ? <Check className="w-5 h-5" /> : step}
              </div>
              {step < 3 && (
                <div className={`
                  flex-1 h-1 mx-2
                  ${currentStep > step ? 'bg-[#0077B6]' : 'bg-gray-200'}
                `} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* STEP 2: Vehicle & Condition (combined — vehicle required, condition chips optional) */}
        {currentStep === 2 && (
        <div id="step-2" className="mb-8 scroll-mt-20">
          <div className="text-center mb-4">
            <div className="inline-block bg-[#CAF0F8] text-[#023E8A] px-4 py-1 rounded-full font-semibold text-xs mb-2">
              STEP 2 OF 3
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Tell us about your vehicle</h3>
            <p className="text-gray-600 text-sm">30 seconds — this is how we give you an exact quote</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 space-y-5">
            {/* Vehicle (required) */}
            <div>
              <label className="block font-semibold text-gray-800 text-sm mb-2">What do you drive?</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Car className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleDetailsSubmit()}
                  className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition bg-gray-50 focus:bg-white text-lg"
                  placeholder="e.g., 2020 Honda Civic, Ford F-150..."
                />
              </div>
            </div>

            {/* Cleanliness level (1-10 slider — every answer gets praised) */}
            <div>
              <label htmlFor="dirtiness-slider" className="block font-semibold text-gray-800 text-sm mb-2">
                How dirty is it? <span className="font-normal text-gray-500">Be honest — we've seen it all!</span>
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="dirtiness-slider"
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={dirtinessScore}
                  onChange={(e) => setDirtinessScore(Number(e.target.value))}
                  className="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-[#0077B6]"
                  style={{
                    background: `linear-gradient(to right, #0077B6 0%, #0077B6 ${((dirtinessScore - 1) / 9) * 100}%, #E5E7EB ${((dirtinessScore - 1) / 9) * 100}%, #E5E7EB 100%)`,
                  }}
                  aria-valuetext={`${dirtinessScore} out of 10`}
                />
                <div className="w-14 text-center bg-[#023E8A] text-white font-black text-lg rounded-lg py-1.5 select-none">
                  {dirtinessScore}
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1 select-none">
                <span>Spotless</span>
                <span>Send help</span>
              </div>
              <div className="mt-2 flex items-center gap-2 bg-[#CAF0F8] border border-[#90E0EF] rounded-lg px-3 py-2.5" aria-live="polite">
                <span className="text-xl">{DIRTINESS_PRAISE[dirtinessScore].emoji}</span>
                <span className="text-[#023E8A] font-semibold text-sm">{DIRTINESS_PRAISE[dirtinessScore].text}</span>
              </div>
            </div>

            <button
              onClick={handleDetailsSubmit}
              disabled={!vehicleType.trim()}
              className="w-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] hover:from-[#0077B6] hover:to-[#90E0EF] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:transform-none"
            >
              Continue to Last Step <ChevronRight className="w-5 h-5 inline ml-2" />
            </button>

            {/* Back Button */}
            <div>
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-all text-sm"
              >
                ← Back
              </button>
            </div>
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
                      alt={service.altText || service.title}
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
                      alt={service.altText || service.title}
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
                      alt={service.altText || service.title}
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
                      alt={service.altText || service.title}
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

        {/* STEP 3: Contact Information */}
        {currentStep === 3 && selectedService && (
          <div id="step-3" className="scroll-mt-20">
            <div className="text-center mb-4">
              <div className="inline-block bg-[#CAF0F8] text-[#023E8A] px-4 py-1 rounded-full font-semibold text-xs mb-2">
                LAST STEP
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Where do we send your quote?</h3>
              <p className="text-gray-600 text-sm">No payment now — we'll text you within minutes to confirm</p>
              <p className="text-[#023E8A] font-semibold text-sm mt-1">Selected: {selectedService}</p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Escape hatch: phone-first customers convert better than the form */}
              <div className="flex gap-2 mb-3">
                <a
                  href="tel:8036678731"
                  onClick={() => trackPhoneClick('booking_form_top')}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-[#0077B6] text-[#023E8A] font-semibold text-sm hover:bg-[#CAF0F8] transition"
                >
                  <Phone className="w-4 h-4" /> Rather call?
                </a>
                <a
                  href="sms:8036678731"
                  onClick={() => trackTextClick('booking_form_top')}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-[#0077B6] text-[#023E8A] font-semibold text-sm hover:bg-[#CAF0F8] transition"
                >
                  <Mail className="w-4 h-4" /> Text us instead
                </a>
              </div>

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
                      placeholder="Phone Number * (we text your quote here)"
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

                  {/* SMS Consent (A2P 10DLC) — two separate, optional opt-ins; neither required to submit */}
                  <div className="space-y-2 rounded-lg bg-gray-50 border border-gray-200 p-3">
                    <label htmlFor="smsTransactional" className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        id="smsTransactional"
                        name="smsTransactional"
                        checked={smsTransactional}
                        onChange={(e) => setSmsTransactional(e.target.checked)}
                        disabled={isSubmitting}
                        className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-[#0077B6] focus:ring-[#90E0EF]"
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">
                        I consent to receive transactional text messages (appointment confirmations and service updates) from Mikah's Auto Detailing at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help or STOP to opt out.
                      </span>
                    </label>
                    <label htmlFor="smsMarketing" className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        id="smsMarketing"
                        name="smsMarketing"
                        checked={smsMarketing}
                        onChange={(e) => setSmsMarketing(e.target.checked)}
                        disabled={isSubmitting}
                        className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-[#0077B6] focus:ring-[#90E0EF]"
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">
                        I consent to receive marketing and promotional text messages from Mikah's Auto Detailing at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help or STOP to opt out.
                      </span>
                    </label>
                    <p className="text-[11px] text-gray-500 leading-relaxed pt-1 border-t border-gray-200">
                      Consent is not a condition of purchase. See our{' '}
                      <a href="/privacy" className="text-[#023E8A] font-semibold hover:underline">Privacy Policy</a> &amp;{' '}
                      <a href="/terms" className="text-[#023E8A] font-semibold hover:underline">Terms of Service</a>.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] hover:from-[#0077B6] hover:to-[#90E0EF] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:transform-none shadow-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    No payment now — we confirm your exact quote by text within minutes.
                    Or call us: <a href="tel:8036678731" onClick={() => trackPhoneClick('booking_form')} className="text-[#023E8A] font-semibold hover:underline">(803) 667-8731</a>
                  </p>
                </form>

                {/* Back Button */}
                <div className="mt-4">
                  <button
                    onClick={() => setCurrentStep(2)}
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
