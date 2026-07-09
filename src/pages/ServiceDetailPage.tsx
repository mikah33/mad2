import { useParams, Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { Check, Clock, DollarSign, MapPin, Star, Phone, Award, Shield } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateServiceSchema, generateVideoSchema, generateFAQSchema } from '../components/seo/StructuredData';
import { getServiceBySlug } from '../data/services';
import { businessInfo } from '../data/business';
import { aggregateRating, reviews } from '../data/reviews';
import { faqs } from '../data/faqs-comprehensive';
import { NotFoundPage } from './NotFoundPage';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Service-specific content
const serviceContent: Record<string, {
  fullDescription: string;
  metaDescription: string;
  keywords: string[];
  benefits: string[];
  process: Array<{ step: string; description: string }>;
  faqIds: string[];
  videoEmbedUrl?: string;
  videoTitle?: string;
  videoDescription?: string;
  videoDuration?: string;
  expertise: {
    certification?: string;
    yearsExperience?: string;
    specialist?: string;
  };
}> = {
  'mobile-detailing': {
    fullDescription: 'Professional mobile auto detailing brought directly to your location in Columbia, Lexington, and surrounding SC areas. Our fully-equipped mobile unit includes commercial-grade equipment, water tanks, and power generation—delivering shop-quality results at your home, office, or preferred location. Experience the ultimate convenience without sacrificing quality.',
    metaDescription: 'Best mobile auto detailing Columbia SC. Professional mobile car detailing comes to your home or office. IDA-certified, fully insured. Serving Columbia, Lexington, Irmo. Book online 24/7!',
    keywords: ['mobile auto detailing Columbia SC', 'mobile car detailing near me', 'at-home car detailing', 'mobile detailing Lexington SC', 'on-site auto detailing', 'convenience car detailing'],
    benefits: [
      'No travel time or waiting at shops',
      'Work from home while we detail',
      'Same professional equipment as shops',
      'Service at home, work, or anywhere',
      'No contact with other vehicles',
      'Flexible scheduling 7 days/week'
    ],
    process: [
      { step: 'Schedule Online or Call', description: 'Choose your date, time, and location. We serve all of Columbia metro area.' },
      { step: 'We Come to You', description: 'Our mobile unit arrives fully equipped. You continue your day.' },
      { step: 'Professional Service', description: 'IDA-certified technicians use commercial-grade equipment and products.' },
      { step: 'Final Inspection', description: 'Walk-through to ensure complete satisfaction before we leave.' }
    ],
    faqIds: ['mob-1', 'mob-2', 'mob-3', 'mob-6', 'mob-7', 'mob-8'],
    videoEmbedUrl: 'https://www.youtube.com/embed/placeholder-mobile-detailing',
    videoTitle: 'Mobile Car Detailing Process - Columbia SC',
    videoDescription: 'Watch our complete mobile detailing process from arrival to finished vehicle. See why Columbia SC residents choose Mikah\'s Auto Detailing for convenient, professional mobile service.',
    videoDuration: 'PT8M30S',
    expertise: {
      certification: 'IDA Certified Mobile Detailing Specialist',
      yearsExperience: '5+ years serving Columbia SC',
      specialist: 'Mobile Service Expert'
    }
  },
  'interior-detailing': {
    fullDescription: 'Deep interior car cleaning and restoration using professional extraction equipment and premium products. Our interior detailing removes stains, eliminates odors, and restores that new-car freshness. From leather conditioning to carpet shampooing, every surface receives meticulous attention.',
    metaDescription: 'Best interior car detailing Columbia SC. Professional interior cleaning removes stains, pet hair, odors. Steam cleaning, leather conditioning. Mobile service available. Book now!',
    keywords: ['interior car detailing Columbia SC', 'interior auto detailing near me', 'car interior deep cleaning', 'leather seat cleaning', 'carpet shampooing car', 'odor removal vehicle'],
    benefits: [
      'Professional extraction equipment',
      'Pet hair complete removal',
      'Stain and odor elimination',
      'Leather conditioning and protection',
      'Dashboard and console detailing',
      'New-car scent restoration'
    ],
    process: [
      { step: 'Initial Inspection', description: 'Assess condition, identify problem areas, discuss specific concerns.' },
      { step: 'Thorough Vacuuming', description: 'Remove loose debris from seats, carpets, trunk, and crevices.' },
      { step: 'Deep Cleaning', description: 'Steam cleaning or extraction shampooing of all upholstery and carpets.' },
      { step: 'Surface Detailing', description: 'Clean and protect all hard surfaces, leather conditioning, window cleaning.' }
    ],
    faqIds: ['int-1', 'int-2', 'int-3', 'int-4', 'int-5', 'int-6'],
    videoEmbedUrl: 'https://www.youtube.com/embed/placeholder-interior-detailing',
    videoTitle: 'Interior Car Detailing Complete Process',
    videoDescription: 'Complete interior detailing process showing stain removal, carpet shampooing, leather conditioning, and odor elimination. Professional techniques used by Mikah\'s Auto Detailing in Columbia SC.',
    videoDuration: 'PT10M15S',
    expertise: {
      certification: 'Certified Interior Restoration Specialist',
      yearsExperience: '5+ years Columbia SC experience',
      specialist: 'Stain & Odor Removal Expert'
    }
  },
  'exterior-detailing': {
    fullDescription: 'Complete exterior car detailing including hand washing, clay bar treatment, paint polishing, and protective sealant application. We restore your vehicle\'s exterior to showroom condition while providing long-lasting protection against Columbia SC\'s harsh sun, pollen, and environmental contaminants.',
    metaDescription: 'Professional exterior car detailing Columbia SC. Hand wash, clay bar, polish, wax. Paint correction available. Mobile service to your location. 5-star rated. Free quotes!',
    keywords: ['exterior car detailing Columbia SC', 'exterior auto detailing near me', 'paint protection detailing', 'car wash and wax', 'clay bar treatment', 'exterior polishing'],
    benefits: [
      'Hand wash with pH-balanced soap',
      'Clay bar decontamination',
      'Paint polishing and correction',
      '6-month sealant protection',
      'Trim restoration to deep black',
      'Wheel and tire detailing'
    ],
    process: [
      { step: 'Pre-Wash & Rinse', description: 'Remove loose dirt and debris to prevent scratching during wash.' },
      { step: 'Hand Wash', description: 'Two-bucket method with premium soap and microfiber mitts.' },
      { step: 'Clay Bar Treatment', description: 'Remove bonded contaminants for glass-smooth paint.' },
      { step: 'Polish & Seal', description: 'Restore gloss and apply long-lasting protection.' }
    ],
    faqIds: ['ext-1', 'ext-2', 'ext-3', 'ext-5', 'ext-6', 'ext-7'],
    videoEmbedUrl: 'https://www.youtube.com/embed/placeholder-exterior-detailing',
    videoTitle: 'Exterior Car Detailing & Paint Protection Process',
    videoDescription: 'Professional exterior detailing process from hand wash to final protection. Learn how Mikah\'s Auto Detailing achieves showroom shine on every vehicle in Columbia SC.',
    videoDuration: 'PT12M45S',
    expertise: {
      certification: 'IDA Certified Paint Care Specialist',
      yearsExperience: '5+ years professional detailing',
      specialist: 'Paint Correction Expert'
    }
  },
  'ceramic-coating': {
    fullDescription: 'Professional ceramic coating application providing 2-5 years of superior paint protection. Our nano-ceramic coatings create a permanent bond with your paint, offering extreme gloss, hydrophobic properties, UV protection, and chemical resistance. Ideal for Columbia SC\'s intense sun and environmental challenges.',
    metaDescription: 'Best ceramic coating Columbia SC. Professional nano-ceramic paint protection 2-5 years. From $999. Paint correction included. Mobile ceramic coating available. Free quotes!',
    keywords: ['ceramic coating Columbia SC', 'ceramic coating near me', 'nano ceramic paint protection', 'professional ceramic coating', 'ceramic car coating', 'paint protection coating'],
    benefits: [
      '2-5 year protection guarantee',
      'Extreme hydrophobic properties',
      'UV and chemical resistance',
      'Enhanced gloss and depth',
      'Easier cleaning and maintenance',
      'Increased resale value'
    ],
    process: [
      { step: 'Paint Correction', description: 'Remove all imperfections—swirls, scratches, oxidation—for flawless base.' },
      { step: 'Paint Prep', description: 'Panel wipe to remove all oils, waxes, and contaminants.' },
      { step: 'Coating Application', description: 'Apply 2 layers of professional-grade nano-ceramic coating.' },
      { step: 'Cure Time', description: '24-hour cure ensures proper bonding and maximum durability.' }
    ],
    faqIds: ['cer-1', 'cer-2', 'cer-3', 'cer-4', 'cer-5', 'cer-8'],
    videoEmbedUrl: 'https://www.youtube.com/embed/placeholder-ceramic-coating',
    videoTitle: 'Ceramic Coating Application Process - Professional Installation',
    videoDescription: 'Complete ceramic coating installation process including paint correction, prep work, and application. See why professional ceramic coating beats DIY kits. Mikah\'s Auto Detailing Columbia SC.',
    videoDuration: 'PT15M20S',
    expertise: {
      certification: 'Certified Ceramic Coating Installer',
      yearsExperience: '4+ years coating experience',
      specialist: 'Paint Protection Specialist'
    }
  },
  'paint-correction': {
    fullDescription: 'Multi-stage paint correction to remove swirls, scratches, oxidation, and water spots. Using precision machine polishing and professional compounds, we restore paint clarity and depth that makes 5-year-old vehicles look brand new. Essential preparation for ceramic coating and recommended for all vehicles showing paint imperfections.',
    metaDescription: 'Professional paint correction Columbia SC. Remove swirls, scratches, oxidation. From $599. Before/after photos. Multi-stage polishing. Mobile service available. Free quotes!',
    keywords: ['paint correction Columbia SC', 'paint correction near me', 'swirl mark removal', 'scratch removal detailing', 'paint restoration', 'machine polishing'],
    benefits: [
      'Remove 80-95% of imperfections',
      'Restore paint depth and clarity',
      'Dramatic before/after results',
      'Essential before ceramic coating',
      'Increases vehicle value',
      'Professional equipment only'
    ],
    process: [
      { step: 'Paint Inspection', description: 'Assess defects with paint depth gauge and inspection lighting.' },
      { step: 'Single-Stage Polish', description: 'Remove moderate defects with cutting compound and polishing pad.' },
      { step: 'Multi-Stage Polish', description: 'Refine with fine polish for flawless, swirl-free finish.' },
      { step: 'Protection Application', description: 'Seal corrected paint with premium wax or ceramic coating.' }
    ],
    faqIds: ['gen-7', 'gen-8', 'ext-4', 'cer-4'],
    videoEmbedUrl: 'https://www.youtube.com/embed/placeholder-paint-correction',
    videoTitle: 'Paint Correction Process - Removing Swirls and Scratches',
    videoDescription: 'Watch dramatic paint correction transformation. See how professional machine polishing removes years of defects. Mikah\'s Auto Detailing uses precision techniques for flawless results in Columbia SC.',
    videoDuration: 'PT14M10S',
    expertise: {
      certification: 'Advanced Paint Correction Certified',
      yearsExperience: '5+ years correction experience',
      specialist: 'Paint Restoration Expert'
    }
  },
  'headlight-restoration': {
    fullDescription: 'Professional headlight restoration to remove oxidation, yellowing, and haze. Using progressive wet-sanding and polishing techniques, we restore up to 90% of original clarity. Finished with UV-resistant coating for long-lasting results. Improves nighttime visibility and vehicle appearance.',
    metaDescription: 'Professional headlight restoration Columbia SC. Remove yellowing and oxidation. Restore clarity 90%. UV protection coating. Mobile service available. Book now!',
    keywords: ['headlight restoration Columbia SC', 'restore foggy headlights', 'headlight cleaning near me', 'yellow headlight fix', 'headlight oxidation removal', 'headlight polishing'],
    benefits: [
      'Restore 90% of original clarity',
      'Improved nighttime visibility',
      'Safer driving conditions',
      'UV protection coating included',
      'Fraction of replacement cost',
      'Dramatic cosmetic improvement'
    ],
    process: [
      { step: 'Surface Preparation', description: 'Clean and mask headlights to protect surrounding paint.' },
      { step: 'Wet Sanding', description: 'Progressive grits (400, 800, 1500, 2000) remove oxidation layer.' },
      { step: 'Machine Polishing', description: 'Restore optical clarity with professional polishing compound.' },
      { step: 'UV Sealant', description: 'Apply protective coating to prevent future oxidation.' }
    ],
    faqIds: ['ext-8', 'gen-5'],
    videoEmbedUrl: 'https://www.youtube.com/embed/placeholder-headlight-restoration',
    videoTitle: 'Headlight Restoration Before & After - Amazing Results',
    videoDescription: 'See dramatic headlight restoration transformation. Professional wet-sanding and polishing restores cloudy headlights to crystal clear. Mikah\'s Auto Detailing Columbia SC.',
    videoDuration: 'PT6M45S',
    expertise: {
      certification: 'Certified Headlight Restoration Technician',
      yearsExperience: '5+ years restoration experience',
      specialist: 'Headlight Restoration Specialist'
    }
  }
};

export const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const content = serviceSlug ? serviceContent[serviceSlug] : undefined;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      }
    };
    playVideo();
  }, []);

  if (!service || !content) {
    return <NotFoundPage />;
  }

  // Get service-specific FAQs
  const serviceFAQs = content.faqIds
    .map(id => faqs.find(f => f.id === id))
    .filter(Boolean)
    .map(f => ({ question: f!.question, answer: f!.answer }));

  // Generate schemas
  const serviceSchema = generateServiceSchema(
    {
      name: service.name,
      description: content.fullDescription,
      price: service.pricing?.starting,
      url: `https://mikahsmobiledetailingsc.com/services/${service.slug}`
    },
    {
      name: businessInfo.name,
      description: businessInfo.description,
      phone: businessInfo.phone,
      email: businessInfo.email,
      address: businessInfo.address
    },
    aggregateRating,
    reviews // Include all 8 real reviews
  );

  const faqSchema = generateFAQSchema(serviceFAQs);

  const videoSchema = content.videoEmbedUrl ? generateVideoSchema({
    name: content.videoTitle!,
    description: content.videoDescription!,
    thumbnailUrl: 'https://mikahsmobiledetailingsc.com/exterior1.jpg',
    uploadDate: '2024-01-15',
    duration: content.videoDuration!,
    contentUrl: content.videoEmbedUrl
  }) : null;

  const schemas = videoSchema ? [serviceSchema, faqSchema, videoSchema] : [serviceSchema, faqSchema];

  return (
    <>
      <SEOHead
        title={`${service.name} Columbia SC | ${businessInfo.name}`}
        description={content.metaDescription}
        keywords={content.keywords.join(', ')}
        canonical={`https://mikahsmobiledetailingsc.com/services/${service.slug}/`}
        ogType="service"
        schema={schemas}
      />

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Hero Video Section */}
        <div className="relative text-white min-h-screen w-full overflow-hidden flex items-center">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10 pt-24 pb-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-100 hover:text-white transition mb-6"
            >
              ← Back to Services
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl leading-relaxed">
              {content.fullDescription}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <DollarSign className="w-8 h-8 text-primary-300 mb-2" />
                <div className="text-sm text-primary-200">Starting at</div>
                <div className="text-2xl font-bold">${service.pricing?.starting}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <Clock className="w-8 h-8 text-primary-300 mb-2" />
                <div className="text-sm text-primary-200">Duration</div>
                <div className="text-xl font-bold">{service.duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <MapPin className="w-8 h-8 text-primary-300 mb-2" />
                <div className="text-sm text-primary-200">Service Area</div>
                <div className="text-xl font-bold">Columbia SC</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <Star className="w-8 h-8 text-primary-300 mb-2" />
                <div className="text-sm text-primary-200">Rating</div>
                <div className="text-xl font-bold">{aggregateRating.ratingValue.toFixed(1)} ⭐</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/book?service=${service.slug}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Book Online
              </a>
              <a
                href="tel:8036678731"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call (803) 667-8731
              </a>
              <a
                href="/#quote"
                className="px-8 py-4 bg-primary-700 text-white font-bold rounded-lg hover:bg-primary-800 transition shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* E-E-A-T Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Award className="w-12 h-12 text-primary-700 mb-4" />
                <h3 className="text-xl font-bold mb-2">{content.expertise.certification}</h3>
                <p className="text-gray-600">International Detailing Association certified professional with proven expertise.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Shield className="w-12 h-12 text-primary-700 mb-4" />
                <h3 className="text-xl font-bold mb-2">{content.expertise.yearsExperience}</h3>
                <p className="text-gray-600">Extensive experience serving Columbia, Lexington, and surrounding SC communities.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Star className="w-12 h-12 text-primary-700 mb-4" />
                <h3 className="text-xl font-bold mb-2">{content.expertise.specialist}</h3>
                <p className="text-gray-600">Specialized training and continuous education in latest detailing techniques.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our {service.name}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Professional Process
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Every {service.name.toLowerCase()} follows our proven process for consistent, exceptional results
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.step}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section (if available) */}
        {content.videoEmbedUrl && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                See Our {service.name} in Action
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Watch our complete process and see the dramatic results
              </p>
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={content.videoEmbedUrl}
                  title={content.videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-gray-500 mt-4 italic">{content.videoDescription}</p>
            </div>
          </section>
        )}

        {/* Service Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Serving Columbia SC & Surrounding Areas
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Professional {service.name.toLowerCase()} available throughout the Greater Columbia region
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              {['Columbia', 'Lexington', 'Irmo', 'Forest Acres', 'West Columbia', 'Cayce', 'Chapin', 'Blythewood'].map((area) => (
                <Link
                  key={area}
                  to={`/locations/${area.toLowerCase().replace(' ', '-')}-sc`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <MapPin className="w-6 h-6 text-primary-700 mx-auto mb-2" />
                  <div className="font-semibold">{area}, SC</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        {serviceFAQs.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {serviceFAQs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Professional {service.name}?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get your free quote today and see why Columbia SC trusts Mikah's Auto Detailing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/book?service=${service.slug}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg text-center"
              >
                Book Online
              </a>
              <a
                href="tel:8036678731"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call (803) 667-8731
              </a>
              <Link
                to="/#quote"
                className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition shadow-lg"
              >
                Get Free Quote Online
              </Link>
            </div>
            <p className="text-primary-200 mt-6">
              Serving Columbia, Lexington, Irmo, Forest Acres, and surrounding SC areas
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetailPage;
