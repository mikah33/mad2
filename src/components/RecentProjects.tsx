import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const RecentProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      image: '/exterior1.jpg',
      title: 'Professional Exterior Detail Columbia SC',
      description: 'Premium exterior auto detailing service in Columbia, SC. Complete wash, wax, and paint protection.',
      category: 'exterior-detail',
      subcategory: 'exterior',
      type: 'image',
      datePublished: '2024-10-01'
    },
    {
      id: 2,
      image: '/exterior2.jpg',
      title: 'Ceramic Coating Application Columbia SC',
      description: 'Professional ceramic coating service providing long-lasting paint protection in Columbia, SC.',
      category: 'ceramic-coating',
      subcategory: 'exterior',
      type: 'image',
      datePublished: '2024-10-05'
    },
    {
      id: 3,
      image: '/exterior3.jpg',
      title: 'Premium Exterior Wash Columbia SC',
      description: 'High-quality exterior wash and detailing service in Columbia, SC area.',
      category: 'exterior-detail',
      subcategory: 'exterior',
      type: 'image',
      datePublished: '2024-10-10'
    },
    {
      id: 4,
      image: '/exterior4.jpg',
      title: 'Paint Correction and Polish Columbia SC',
      description: 'Expert paint correction and polishing service removing swirls and scratches in Columbia, SC.',
      category: 'paint-correction',
      subcategory: 'exterior',
      type: 'image',
      datePublished: '2024-10-12'
    },
    {
      id: 5,
      image: '/exterior5.jpg',
      title: 'Full Exterior Auto Detailing Columbia SC',
      description: 'Complete exterior detailing package including wash, clay bar, polish, and wax in Columbia, SC.',
      category: 'exterior-detail',
      subcategory: 'exterior',
      type: 'image',
      datePublished: '2024-10-15'
    },
    {
      id: 6,
      image: '/exterior6.jpg',
      title: 'Ceramic Coating Installation Columbia SC',
      description: 'Professional ceramic coating installation providing years of paint protection in Columbia, SC.',
      category: 'ceramic-coating',
      subcategory: 'exterior',
      type: 'image',
      datePublished: '2024-10-18'
    },
    {
      id: 7,
      image: '/exterior7.jpg',
      title: 'Complete Exterior Restoration Columbia SC',
      description: 'Full exterior restoration service bringing back original shine to your vehicle in Columbia, SC.',
      category: 'exterior-detail',
      subcategory: 'exterior',
      type: 'image',
      datePublished: '2024-10-20'
    },
    {
      id: 8,
      image: '/ceramic-video1.mov',
      title: 'Ceramic Coating Process Video Columbia SC',
      description: 'Watch our professional ceramic coating application process in Columbia, SC.',
      category: 'ceramic-coating',
      subcategory: 'exterior',
      type: 'video',
      datePublished: '2024-10-22'
    },
    {
      id: 9,
      image: '/ceramic-video2.mov',
      title: 'Professional Ceramic Application Columbia SC',
      description: 'See how we apply ceramic coating for maximum protection in Columbia, SC.',
      category: 'ceramic-coating',
      subcategory: 'exterior',
      type: 'video',
      datePublished: '2024-10-23'
    },
    {
      id: 10,
      image: '/interior1.jpg',
      title: 'Interior Restoration Detail Columbia SC',
      description: 'Complete interior restoration and detailing service in Columbia, SC.',
      category: 'interior',
      subcategory: 'interior',
      type: 'image',
      datePublished: '2024-10-24'
    },
    {
      id: 11,
      image: '/interior2.jpg',
      title: 'Complete Interior Auto Detail Columbia SC',
      description: 'Full interior detailing including deep cleaning, conditioning, and protection in Columbia, SC.',
      category: 'interior',
      subcategory: 'interior',
      type: 'image',
      datePublished: '2024-10-25'
    },
  ];

  const tabs = [
    { id: 'all', label: 'All Projects', count: 11 },
    { id: 'ceramic-coating', label: 'Ceramic Coating', count: 4 },
    { id: 'exterior-detail', label: 'Exterior Detail', count: 4 },
    { id: 'paint-correction', label: 'Paint Correction', count: 1 },
    { id: 'interior', label: 'Interior Detail', count: 2 },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  // Show only 3 items on mobile unless "Show More" is clicked
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const hasMoreProjects = filteredProjects.length > 3;

  // Generate ImageGallery Schema.org markup
  const generateImageGallerySchema = () => {
    const imageObjects = projects.filter(p => p.type === 'image').map(project => ({
      "@type": "ImageObject",
      "@id": `https://mikahsmobiledetailingsc.com${project.image}`,
      "contentUrl": `https://mikahsmobiledetailingsc.com${project.image}`,
      "url": `https://mikahsmobiledetailingsc.com${project.image}`,
      "name": project.title,
      "description": project.description,
      "datePublished": project.datePublished,
      "creator": {
        "@type": "Person",
        "name": "Mikah Albertson"
      },
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Mikah's Auto Detailing"
      },
      "copyrightNotice": "© 2024 Mikah's Auto Detailing. All rights reserved.",
      "creditText": "Photo by Mikah's Auto Detailing",
      "acquireLicensePage": "https://mikahsmobiledetailingsc.com/contact",
      "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
    }));

    const videoObjects = projects.filter(p => p.type === 'video').map(project => ({
      "@type": "VideoObject",
      "@id": `https://mikahsmobiledetailingsc.com${project.image}`,
      "contentUrl": `https://mikahsmobiledetailingsc.com${project.image}`,
      "name": project.title,
      "description": project.description,
      "uploadDate": `${project.datePublished}T12:00:00-05:00`,
      "thumbnailUrl": `https://mikahsmobiledetailingsc.com${project.image.replace('.mov', '-thumb.jpg')}`,
      "creator": {
        "@type": "Person",
        "name": "Mikah Albertson"
      },
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Mikah's Auto Detailing"
      },
      "copyrightNotice": "© 2024 Mikah's Auto Detailing. All rights reserved.",
      "creditText": "Video by Mikah's Auto Detailing",
      "acquireLicensePage": "https://mikahsmobiledetailingsc.com/contact",
      "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
    }));

    return {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Mikah's Auto Detailing Portfolio - Columbia SC",
      "description": "Professional auto detailing projects showcasing ceramic coating, paint correction, exterior and interior detailing in Columbia, SC",
      "image": imageObjects,
      "video": videoObjects,
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://mikahsmobiledetailingsc.com",
        "name": "Mikah's Auto Detailing",
        "image": "https://mikahsmobiledetailingsc.com/logo.png",
        "telephone": "(803) 667-8731",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Columbia",
          "addressRegion": "SC",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0007",
          "longitude": "-81.0348"
        },
        "areaServed": ["Columbia, SC", "Lexington, SC", "Irmo, SC", "West Columbia, SC"]
      }
    };
  };

  return (
    <section id="projects" className="py-12 md:py-20 bg-white w-full overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateImageGallerySchema())}
        </script>
      </Helmet>
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Recent Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Take a look at our latest work and see the quality results we deliver for our clients.
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-[#023E8A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              itemScope
              itemType={project.type === 'video' ? "https://schema.org/VideoObject" : "https://schema.org/ImageObject"}
            >
              {project.type === 'video' ? (
                <video
                  src={project.image}
                  className="w-full h-64 md:h-80 object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <picture>
                  <source
                    srcSet={project.image.replace('.jpg', '_optimized.webp')}
                    type="image/webp"
                  />
                  <img
                    src={project.image}
                    alt={`${project.title} - Professional mobile auto detailing results in Columbia SC`}
                    title={project.title}
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </picture>
              )}
              <div className="p-4 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800" itemProp="name">{project.title}</h3>
                <meta itemProp="description" content={project.description} />
                <meta itemProp="datePublished" content={project.datePublished} />
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && !showAll && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-[#023E8A] text-white font-semibold rounded-lg hover:bg-[#0077B6] transition-all duration-200"
            >
              Show More Projects ({filteredProjects.length - 3} more)
            </button>
          </div>
        )}

        {showAll && hasMoreProjects && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-200"
            >
              Show Less
            </button>
          </div>
        )}

        <div className="bg-gray-50 rounded-xl p-12 text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Vehicle?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our satisfied customers and experience the difference professional detailing makes.{' '}
            <a href="#booking" className="text-[#023E8A] hover:underline">
              Get your free quote today
            </a>{' '}
            and see why we're the trusted choice for vehicle care.
          </p>
          <a href="#booking">
            <button className="px-8 py-4 bg-[#023E8A] text-white text-lg font-bold rounded-lg hover:bg-[#0077B6] transition">
              Get Your Free Quote
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
