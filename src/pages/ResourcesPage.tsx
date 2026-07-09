import { ExternalLink, FileText, Video, Users, BookOpen, Share2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { SEOHead } from '../components/seo/SEOHead';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';

interface ResourceLink {
  title: string;
  url: string;
  platform: string;
}

interface ResourceCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
  links: ResourceLink[];
}

export const ResourcesPage = () => {
  const resources: ResourceCategory[] = [
    {
      name: 'Educational Guides on Perplexity',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Comprehensive auto detailing guides and resources published on Perplexity AI',
      links: [
        {
          title: 'Mobile Auto Detailing Columbia SC - Complete Guide',
          url: 'https://www.perplexity.ai/page/mobile-auto-detailing-columbia-Bo_9aAGLS566QmaVw9D0oA',
          platform: 'Perplexity'
        },
        {
          title: "Mikah's Mobile Auto Detailing Services",
          url: 'https://www.perplexity.ai/page/mikah-s-mobile-auto-detailing-u4QlDRaEQPyi8ZYjG8Sbtw',
          platform: 'Perplexity'
        },
        {
          title: 'Interior Car Detailing Columbia SC Guide',
          url: 'https://www.perplexity.ai/page/interior-car-detailing-columbi-qCL36zp7QYWAQjoEh1Mm6A',
          platform: 'Perplexity'
        },
        {
          title: 'Mobile Car Wash Columbia SC - What to Know',
          url: 'https://www.perplexity.ai/page/mobile-car-wash-columbia-sc-AH84Ae9aSfSVvjcx5eduDQ',
          platform: 'Perplexity'
        }
      ]
    },
    {
      name: 'Published Documents on Issuu',
      icon: <FileText className="w-6 h-6" />,
      description: 'In-depth auto detailing articles and guides in digital magazine format',
      links: [
        {
          title: 'Interior Car Detailing Columbia SC',
          url: 'https://issuu.com/mikahsmobiledetailing/docs/blog-1-interior-car-detailing-columbia-sc',
          platform: 'Issuu'
        },
        {
          title: 'Mobile Car Wash Columbia SC',
          url: 'https://issuu.com/mikahsmobiledetailing/docs/blog-3-mobile-car-wash-columbia-sc',
          platform: 'Issuu'
        },
        {
          title: 'Best Car Detailing Columbia SC',
          url: 'https://issuu.com/mikahsmobiledetailing/docs/blog-2-best-car-detailing-columbia-sc',
          platform: 'Issuu'
        }
      ]
    },
    {
      name: 'Presentations on SlideShare',
      icon: <Video className="w-6 h-6" />,
      description: 'Professional detailing guides and tips in presentation format',
      links: [
        {
          title: 'Car Detailing Two Notch Columbia SC',
          url: 'https://www.slideshare.net/slideshow/blog-4-car-detailing-two-notch-columbia-sc-docx/283946369',
          platform: 'SlideShare'
        },
        {
          title: 'Mobile Car Wash Columbia SC',
          url: 'https://www.slideshare.net/slideshow/blog-03-mobile-car-wash-columbia-sc-docx/283946375',
          platform: 'SlideShare'
        },
        {
          title: 'Best Car Detailing Columbia SC',
          url: 'https://www.slideshare.net/slideshow/blog-best-car-detailing-columbia-sc-docx/283946385',
          platform: 'SlideShare'
        },
        {
          title: 'Interior Car Detailing Columbia SC',
          url: 'https://www.slideshare.net/slideshow/blog-1-interior-car-detailing-columbia-sc-docx/283946393',
          platform: 'SlideShare'
        },
        {
          title: "Mikah's Auto Detailing SlideShare Profile",
          url: 'https://www.slideshare.net/mikahsautodetailing?tab=documents',
          platform: 'SlideShare'
        }
      ]
    },
    {
      name: 'Technical Articles on Dev.to',
      icon: <FileText className="w-6 h-6" />,
      description: 'Auto detailing insights and professional tips for car enthusiasts',
      links: [
        {
          title: 'Why Choose Mobile Car Detailing Two Notch Columbia SC',
          url: 'https://dev.to/mikah_albertson_74cf44644/why-choose-mobile-car-detailing-two-notch-columbia-sc-2350',
          platform: 'Dev.to'
        },
        {
          title: 'Mobile Car Wash Columbia SC: Prices & Service Levels Explained',
          url: 'https://dev.to/mikah_albertson_74cf44644/mobile-car-wash-columbia-sc-prices-service-levels-explained-4ej9',
          platform: 'Dev.to'
        }
      ]
    },
    {
      name: 'Social Profiles & Networks',
      icon: <Users className="w-6 h-6" />,
      description: 'Connect with us on various platforms and communities',
      links: [
        {
          title: 'Gravatar Profile',
          url: 'https://gravatar.com/mikahsautodetailing',
          platform: 'Gravatar'
        },
        {
          title: 'Linktree - All Our Links',
          url: 'https://linktr.ee/mikahsautodetailingsc',
          platform: 'Linktree'
        },
        {
          title: 'Linkin.bio Profile',
          url: 'https://linkin.bio/mikahsautodetailing',
          platform: 'Linkin.bio'
        },
        {
          title: 'About.me Profile',
          url: 'https://about.me/mikahsautodetailing',
          platform: 'About.me'
        },
        {
          title: 'Reddit Community',
          url: 'https://www.reddit.com/user/North-Scarcity1771/',
          platform: 'Reddit'
        },
        {
          title: 'Quora Answers',
          url: 'https://www.quora.com/profile/Mikahs-Auto-Detailing',
          platform: 'Quora'
        },
        {
          title: 'Goodreads Profile',
          url: 'https://www.goodreads.com/user/show/194965716-mikah-s-auto',
          platform: 'Goodreads'
        },
        {
          title: 'CodeSandbox Profile',
          url: 'https://codesandbox.io/u/mikahsautodetailing',
          platform: 'CodeSandbox'
        }
      ]
    },
    {
      name: 'Content Collections',
      icon: <Share2 className="w-6 h-6" />,
      description: 'Curated collections of auto detailing resources and bookmarks',
      links: [
        {
          title: 'Wakelet Collection',
          url: 'https://wakelet.com/wake/xK80s_-pJm3cKxtRMvE4A',
          platform: 'Wakelet'
        },
        {
          title: 'Pearltrees Bookmark',
          url: 'https://www.pearltrees.com/mikahsautodetaling/item756512371',
          platform: 'Pearltrees'
        }
      ]
    },
    {
      name: 'Reviews & Testimonials',
      icon: <FileText className="w-6 h-6" />,
      description: 'Customer reviews and professional ratings',
      links: [
        {
          title: 'ProvenExpert Reviews',
          url: 'https://www.provenexpert.com/mikah-s-auto-detailing/',
          platform: 'ProvenExpert'
        }
      ]
    }
  ];

  // Generate enhanced comprehensive LocalBusiness schema
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();

  return (
    <>
      <SEOHead
        title="Auto Detailing Resources & Publications | Mikah's Auto Detailing"
        description="Explore our comprehensive auto detailing guides, articles, and resources published across the web. Professional mobile car detailing education from Columbia SC's trusted experts."
        keywords="auto detailing resources, car detailing guides, mobile detailing articles, columbia sc auto detailing, detailing education"
        canonical="https://mikahsmobiledetailingsc.com/resources/"
        schema={enhancedBusinessSchema}
      />

      <Navigation />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Auto Detailing Resources & Publications
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore our comprehensive guides, articles, and educational content published across the web.
              We're committed to sharing expert auto detailing knowledge with the Columbia SC community.
            </p>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="space-y-12">
            {resources.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-primary-700 to-primary-800 text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    {category.icon}
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </div>
                  <p className="text-gray-200">{category.description}</p>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 p-4 bg-gray-50 hover:bg-primary-50 rounded-lg transition-all duration-300 border border-gray-200 hover:border-primary-300"
                      >
                        <ExternalLink className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {link.platform}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-primary-700 to-primary-800 text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional Detailing?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our team transform your vehicle with professional mobile detailing services
              throughout Columbia, Lexington, and Irmo SC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8036678731"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
              >
                Call (803) 667-8731
              </a>
              <a
                href="/#quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition shadow-lg"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
