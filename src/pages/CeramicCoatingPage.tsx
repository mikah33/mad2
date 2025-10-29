import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, Clock, DollarSign, Phone, ChevronRight, Award, Droplets, Sun } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { generateProductSchema } from '../components/seo/StructuredData';

const CeramicCoatingPage: React.FC = () => {
  const scrollToQuote = () => {
    window.location.href = '/#quote';
  };

  const productSchema = generateProductSchema({
    name: "Professional Ceramic Coating Service",
    description: "Professional ceramic coating installation in Columbia SC. Multi-year paint protection with hydrophobic properties. Authorized Ceramic Pro installer. 2-7 year warranties available.",
    price: "Quote",
    features: [
      "Multi-year protection (2-7 years)",
      "UV resistance",
      "Chemical resistance",
      "Enhanced gloss",
      "Hydrophobic properties",
      "Professional-grade application",
      "Complete decontamination",
      "Paint correction included (Gold & Platinum)",
      "Warranty included"
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
    "description": "Professional ceramic coating installation in Columbia SC. Multi-year paint protection with hydrophobic properties. Authorized Ceramic Pro installer. 2-7 year warranties available.",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "599",
        "maxPrice": "1299",
        "priceCurrency": "USD"
      }
    }
  };

  const schemas = [structuredData, productSchema];

  return (
    <>
      <Helmet>
        <title>Ceramic Coating Columbia SC | Paint Protection Near Me | Ceramic Pro Installer</title>
        <meta name="description" content="Professional ceramic coating in Columbia SC. Multi-year paint protection with 2-7 year warranties. Authorized Ceramic Pro installer. Serving Lexington, Irmo, Cayce. Call today!" />
        <meta name="keywords" content="ceramic coating Columbia SC, ceramic coating near me, paint protection Columbia, Ceramic Pro Columbia, ceramic coating Lexington SC, car ceramic coating, paint sealant, hydrophobic coating, nano coating, ceramic coating installer, long-term paint protection, ceramic paint protection" />

        <meta property="og:title" content="Ceramic Coating Columbia SC | Professional Paint Protection" />
        <meta property="og:description" content="Professional ceramic coating installation. Multi-year paint protection with hydrophobic properties. Authorized Ceramic Pro installer." />
        <meta property="og:url" content="https://mikahsautodetailing.com/services/ceramic-coating" />

        <link rel="canonical" content="https://mikahsautodetailing.com/services/ceramic-coating" />

        <script type="application/ld+json">
          {JSON.stringify(schemas)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero with Video */}
        <section className="relative text-white min-h-[600px] w-full overflow-hidden flex items-center" style={{ marginTop: '-4rem' }}>
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
                <span className="text-yellow-400 font-bold text-lg">Authorized Ceramic Pro Installer</span>
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
                <button onClick={scrollToQuote} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition shadow-xl transform hover:scale-105">
                  Get Free Quote <ChevronRight className="w-5 h-5 inline" />
                </button>
                <a href="tel:8036678731" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition">
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
                  Unlike wax that lasts weeks or sealant that lasts months, ceramic coating provides 2-7 years
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

        {/* Packages */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ceramic Coating Packages</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose the perfect level of protection for your investment. All packages include professional application and warranty.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Bronze Package */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-center mb-4">
                  <div className="inline-block p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mb-3">
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Bronze</h3>
                  <p className="text-4xl font-bold text-green-600 mb-1">$599</p>
                  <div className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full inline-block">2-Year Warranty</div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Premium ceramic protection</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Complete decontamination</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Professional paint prep</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Hydrophobic water beading</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>UV protection</span></li>
                </ul>
                <button onClick={scrollToQuote} className="w-full mt-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition">
                  Get Started
                </button>
              </div>

              {/* Silver Package */}
              <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-green-500 hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-center mb-4">
                  <div className="inline-block p-3 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full mb-3">
                    <Shield className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Silver</h3>
                  <p className="text-4xl font-bold text-green-600 mb-1">$799</p>
                  <div className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full inline-block">3-Year Warranty</div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Enhanced ceramic coating</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Deep decontamination process</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Advanced surface preparation</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Extended gloss enhancement</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>Chemical resistance</span></li>
                </ul>
                <button onClick={scrollToQuote} className="w-full mt-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition">
                  Get Started
                </button>
              </div>

              {/* Gold Package - POPULAR */}
              <div className="bg-gradient-to-br from-white to-green-50 border-2 border-green-500 rounded-xl p-6 relative shadow-lg transform scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  ⭐ MOST POPULAR
                </div>
                <div className="text-center mb-4 mt-2">
                  <div className="inline-block p-3 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full mb-3">
                    <Award className="w-8 h-8 text-yellow-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Gold</h3>
                  <p className="text-4xl font-bold text-green-600 mb-1">$999</p>
                  <div className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block">5-Year Warranty</div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Premium multi-coat protection</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Wheels ceramic coated</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Light paint correction included</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Maximum gloss & depth</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Superior scratch resistance</span></li>
                </ul>
                <button onClick={scrollToQuote} className="w-full mt-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition shadow-md">
                  Get Started →
                </button>
              </div>

              {/* Platinum Package */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-400 rounded-xl p-6 hover:border-green-500 hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-center mb-4">
                  <div className="inline-block p-3 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mb-3">
                    <Award className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Platinum</h3>
                  <p className="text-4xl font-bold text-green-600 mb-1">$1,299</p>
                  <div className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full inline-block">7-Year Warranty</div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Ultimate ceramic protection</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Wheels + windows coated</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Full paint correction</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Show-car finish quality</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="font-medium">Maximum longevity</span></li>
                </ul>
                <button onClick={scrollToQuote} className="w-full mt-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition">
                  Get Started
                </button>
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
                    <h3 className="font-bold mb-1">Paint Correction (if included)</h3>
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
                <img src="/exterior3.jpg" alt="Ceramic coating application process" className="rounded-lg shadow-lg mb-4" loading="lazy" />
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

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Ceramic Coating FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">How long does ceramic coating last?</h3>
                <p className="text-gray-600">Depending on the package, ceramic coatings last 2-7 years with proper maintenance. We offer Bronze (2yr), Silver (3yr), Gold (5yr), and Platinum (7yr) packages with corresponding warranties.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Is ceramic coating worth it?</h3>
                <p className="text-gray-600">Absolutely! While the upfront cost is higher than wax, ceramic coating lasts years, provides superior protection, reduces maintenance time, and maintains vehicle resale value. Most customers find it pays for itself over time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Do I need paint correction before ceramic coating?</h3>
                <p className="text-gray-600">For best results, yes. Ceramic coating locks in the current condition of your paint. If you have swirls or scratches, the coating will seal them in place. Paint correction creates a perfect surface for the coating. Our Gold and Platinum packages include paint correction.</p>
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
              Authorized Ceramic Pro installer serving Columbia and Lexington SC.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={scrollToQuote} className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition">
                Get Free Quote
              </button>
              <a href="tel:5551234567" className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default CeramicCoatingPage;
