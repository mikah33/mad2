import React from 'react';
import { Shield, CheckCircle, Clock, DollarSign, Phone, ChevronRight, Award, Droplets, Sun } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { SEOHead } from '../components/seo/SEOHead';
import { generateProductSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

const CeramicCoatingPage: React.FC = () => {
  const scrollToQuote = () => {
    window.location.href = '/#quote';
  };

  const productSchema = generateProductSchema({
    name: "Professional Ceramic Coating Service",
    description: "Professional ceramic coating installation in Columbia SC. Multi-year paint protection with hydrophobic properties. Starting at $850, custom quoted by vehicle and condition.",
    price: "850",
    features: [
      "Multi-year protection (2-5 years)",
      "UV resistance",
      "Chemical resistance",
      "Enhanced gloss",
      "Hydrophobic properties",
      "Professional-grade application",
      "Complete decontamination",
      "Required paint correction prep included",
      "Starting at $850 (custom quote)"
    ],
    image: "https://mikahsmobiledetailingsc.com/exterior3.jpg",
    url: "https://mikahsmobiledetailingsc.com/services/ceramic-coating",
    category: "Auto Detailing Services"
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Ceramic Coating Application",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mikah's Auto Detailing",
      "telephone": "(803) 667-8731",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Columbia",
        "addressRegion": "SC"
      },
      "areaServed": ["Columbia SC", "Lexington SC", "West Columbia SC", "Irmo SC", "Cayce SC"]
    },
    "description": "Professional ceramic coating installation in Columbia SC. Multi-year paint protection with hydrophobic properties. Starting at $850, custom quoted by vehicle and condition.",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "850",
        "priceCurrency": "USD"
      }
    }
  };

  const schemas = [structuredData, productSchema, generateEnhancedLocalBusinessSchema()];

  return (
    <>
      <SEOHead
        title="Ceramic Coating Columbia SC | Auto Detailing Services | Paint Protection"
        description="Professional ceramic coating in Columbia, SC from $850. 2–5 year paint protection, custom quoted to your vehicle. Mobile service to your location. 5-star rated. Call (803) 667-8731!"
        keywords="auto detailing services columbia sc, ceramic coating Columbia SC, ceramic coating near me, paint protection Columbia, auto detailing services in columbia sc, car ceramic coating, ceramic coating installer, long-term paint protection, ceramic paint protection"
        canonical="https://mikahsmobiledetailingsc.com/services/ceramic-coating/"
        ogImage="https://mikahsmobiledetailingsc.com/exterior3.jpg"
        ogImageAlt="Professional ceramic coating auto detailing services in Columbia SC"
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero with Video */}
        <section className="relative text-white min-h-[600px] w-full overflow-hidden flex items-center pt-16">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-black/70"></div>

          {/* Content */}
          <div className="container mx-auto px-4 max-w-7xl relative z-10 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-lg">Professional Ceramic Coating</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Ultimate Paint Protection
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Ceramic Coating Columbia, SC</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Transform your vehicle with a mirror-like shine that lasts years, not weeks.
                Professional-grade ceramic coating with unmatched gloss, self-cleaning properties,
                and permanent UV protection. Mobile service throughout Columbia and Lexington.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/book?service=ceramic-coating" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition shadow-xl transform hover:scale-105">
                  Book Online <ChevronRight className="w-5 h-5 inline" />
                </a>
                <button onClick={scrollToQuote} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition shadow-xl transform hover:scale-105">
                  Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                </button>
                <a href="tel:+18036678731" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition">
                  <Phone className="w-5 h-5 inline" /> (803) 667-8731
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Ceramic Coating?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Multi-Year Protection</h3>
                <p className="text-gray-600">
                  Unlike wax that lasts weeks or sealant that lasts months, ceramic coating provides 2-5 years
                  of superior protection against environmental damage, UV rays, and chemicals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Droplets className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Hydrophobic Self-Cleaning</h3>
                <p className="text-gray-600">
                  Water beads and sheets off instantly. Dirt and contaminants won't stick as readily,
                  making your vehicle easier to clean and requiring less frequent washing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Sun className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Enhanced Gloss & Depth</h3>
                <p className="text-gray-600">
                  Ceramic coating creates incredible depth and gloss that surpasses any wax.
                  Your paint will have a permanent wet-look shine that turns heads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ceramic Coating Pricing</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Ceramic coating starts at $850. Every job is custom quoted based on your vehicle's size, paint
              condition, and the level of correction needed — so you only pay for what your vehicle actually needs.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white to-green-50 border-2 border-green-500 rounded-2xl p-8 shadow-lg text-center">
                <div className="inline-block p-3 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full mb-4">
                  <Award className="w-8 h-8 text-yellow-700" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Professional Ceramic Coating</h3>
                <p className="text-5xl font-bold text-green-600 mb-1">Starting at $850</p>
                <p className="text-gray-600 mb-6">Final price quoted after we inspect your vehicle</p>
                <ul className="space-y-3 text-sm text-left max-w-md mx-auto mb-8">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Complete decontamination &amp; clay bar treatment</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Required paint correction prep (1-step or 2-step)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Professional-grade ceramic coating application</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>2–5 year protection with hydrophobic water beading</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Enhanced gloss with UV &amp; chemical resistance</span></li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/book?service=ceramic-coating" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition shadow-md">
                    Book Online
                  </a>
                  <button onClick={scrollToQuote} className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition">
                    Get a Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Ceramic Coating Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-bold mb-1">Thorough Wash & Decontamination</h3>
                    <p className="text-gray-600">Complete wash, iron remover, and clay bar treatment removes all contaminants.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-bold mb-1">Paint Correction Prep</h3>
                    <p className="text-gray-600">Remove swirls, scratches, and imperfections for perfect surface.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-bold mb-1">Surface Preparation</h3>
                    <p className="text-gray-600">Isopropyl alcohol wipe-down ensures perfect bonding surface.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="font-bold mb-1">Professional Application</h3>
                    <p className="text-gray-600">Ceramic coating carefully applied by hand with proper curing time between applications for maximum bonding and durability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div>
                    <h3 className="font-bold mb-1">Curing & Quality Check</h3>
                    <p className="text-gray-600">24-48 hour curing period. Comprehensive inspection ensures perfection.</p>
                  </div>
                </div>
              </div>
              <div>
                <picture>
                  <source srcSet="/exterior3_optimized.webp" type="image/webp" />
                  <img src="/exterior3.jpg" alt="Auto detailing services columbia sc - ceramic coating preparation and premium exterior wash" className="rounded-lg shadow-lg mb-4" loading="lazy" />
                </picture>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg mb-3">What Makes Ceramic Coating Different?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />Chemically bonds to paint (not just sits on top)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />9H hardness provides scratch resistance</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />Resistant to chemicals, bird droppings, acid rain</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />UV protection prevents fading and oxidation</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />Makes cleaning significantly easier</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />Maintains resale value by preserving paint</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Mobile advantage — the competitive wedge */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Mobile Ceramic Coating — We Come to You</h2>
            <p className="text-gray-600 mb-4">
              Almost every ceramic installer in Columbia is a fixed shop. You drive across town, leave
              the car for a few days, and arrange a ride home. We work differently: we bring the
              equipment, the water, the power, and the lighting to your driveway or your office
              parking lot.
            </p>
            <p className="text-gray-600 mb-4">
              That covers Columbia, Lexington, West Columbia, Irmo, Cayce, Chapin, Blythewood,
              Swansea, and Newberry — with no travel fee anywhere in the Midlands.
            </p>
            <p className="text-gray-600">
              Ceramic coating is mostly preparation. The coating itself goes on in about an hour;
              getting the paint ready is the real work, and it is where cheaper coating jobs cut
              corners. Every ceramic job we do includes a full decontamination wash, clay treatment,
              paint correction, a panel wipe, hand-leveled application, and a proper cure before the
              vehicle goes back into service.
            </p>
          </div>
        </section>

        {/* Local climate content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">How Ceramic Coating Holds Up in South Carolina</h2>
            <p className="text-gray-600 mb-4">
              The Midlands is genuinely hard on paint, and that is exactly why a coating pays off more
              here than it would in a dry climate. We get heavy spring pollen that turns mildly acidic
              once it sits in the rain. Summer brings heat, humidity, and love bugs whose remains etch
              clear coat within days. Park under the pines and oaks most of us have in our yards and
              you are dealing with sap. And the UV load fades red and black paint faster than people
              expect.
            </p>
            <p className="text-gray-600 mb-4">
              A coating takes that abuse instead of your clear coat. Bug guts, bird droppings, sap,
              and pollen are all acidic — on bare paint they etch, and on a coated surface you have a
              real buffer to get them off before damage happens.
            </p>
            <p className="text-gray-600">
              Coating life depends on the vehicle and how it is kept. A garaged car that gets washed
              properly holds up near the top of the range; a truck that lives outside under trees
              works harder for it. To keep it performing, wash with a pH-neutral soap and skip
              automatic brush tunnels — those brushes are what put swirls back into paint you just
              paid to correct.
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Ceramic Coating vs. Wax vs. Paint Correction</h2>
            <p className="text-gray-600 mb-4">
              These three get confused constantly, so here is the honest version:
            </p>
            <ul className="space-y-3 text-gray-600 mb-4">
              <li>
                <strong>Wax or sealant</strong> — weeks to a few months of protection. Cheap, easy,
                and temporary.
              </li>
              <li>
                <strong><a href="/services/paint-correction" className="text-green-700 underline">Paint correction</a></strong> —
                removes existing swirls and scratches. It makes paint look new, but it does not
                protect anything on its own. From $599, and it is already included in your ceramic
                coating job.
              </li>
              <li>
                <strong>Ceramic coating</strong> — two to five years of UV and chemical protection
                over corrected paint. From $850.
              </li>
            </ul>
            <p className="text-gray-600 mb-4">
              If your paint is in good shape and you want it to stay that way for years, coating is
              the move. If your paint is dull or swirled and you are not ready for a coating, start
              with paint correction.
            </p>
            <p className="text-gray-600">
              One thing worth saying plainly: a ceramic coating is <strong>not</strong> scratch-proof
              and it will <strong>not</strong> stop rock chips. It is chemical and UV protection with
              serious gloss and much easier washing — not armor. See the full{' '}
              <a href="/pricing" className="text-green-700 underline">2026 price list</a> or{' '}
              <a href="/book" className="text-green-700 underline">book online</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Ceramic Coating FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How long does ceramic coating last?</h3>
                <p className="text-gray-600">Ceramic coatings last 2–5 years with proper maintenance, depending on the product used and how the vehicle is driven and stored. We'll recommend the right option for your vehicle when we quote the job.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How much does ceramic coating cost?</h3>
                <p className="text-gray-600">Ceramic coating starts at $850. Because every vehicle's size and paint condition is different, we provide a custom quote after inspecting your paint — the price includes the required paint correction prep and professional application.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Is ceramic coating worth it?</h3>
                <p className="text-gray-600">Absolutely! While the upfront cost is higher than wax, ceramic coating lasts years, provides superior protection, reduces maintenance time, and maintains vehicle resale value. Most customers find it pays for itself over time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do I need paint correction before ceramic coating?</h3>
                <p className="text-gray-600">For best results, yes. Ceramic coating locks in the current condition of your paint. If you have swirls or scratches, the coating will seal them in place. Paint correction creates a perfect surface for the coating — that's why the required paint correction prep is included in every ceramic coating job.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Can I wash my car after ceramic coating?</h3>
                <p className="text-gray-600">Wait 7 days before the first wash to allow complete curing. After that, wash normally using pH-neutral soap. The hydrophobic properties make washing much easier - dirt rinses off easily and water beads instantly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Will ceramic coating make my car scratch-proof?</h3>
                <p className="text-gray-600">No coating is truly scratch-proof. Ceramic coating provides excellent resistance to minor scratches and swirls from washing, but deep scratches from keys or rocks can still occur. It's significantly more durable than wax or sealant.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do you come to my location for ceramic coating?</h3>
                <p className="text-gray-600">Yes! We're a mobile service serving Columbia, Lexington, West Columbia, Irmo, Cayce, and surrounding SC areas. We bring all equipment needed for professional ceramic coating installation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Investment with Ceramic Coating</h2>
            <p className="text-xl mb-8 text-green-100">
              Multi-year protection, incredible gloss, and hydrophobic self-cleaning properties.
              Professional ceramic coating serving Columbia and Lexington SC.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/book?service=ceramic-coating" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition">
                Book Online
              </a>
              <button onClick={scrollToQuote} className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition">
                Get Free Quote
              </button>
              <a href="tel:+18036678731" className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition">
                Call (803) 667-8731
              </a>
            </div>
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
};

export default CeramicCoatingPage;
