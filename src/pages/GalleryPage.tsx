import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, LayoutGrid, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  type: 'image' | 'video';
}

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, image: '/exterior1.jpg', title: 'Exterior Detail', type: 'image' },
    { id: 2, image: '/exterior2.jpg', title: 'Ceramic Coating', type: 'image' },
    { id: 3, image: '/exterior3.jpg', title: 'Premium Wash', type: 'image' },
    { id: 4, image: '/exterior4.jpg', title: 'Paint Correction', type: 'image' },
    { id: 5, image: '/exterior5.jpg', title: 'Full Detail', type: 'image' },
    { id: 6, image: '/exterior6.jpg', title: 'Ceramic Install', type: 'image' },
    { id: 7, image: '/exterior7.jpg', title: 'Restoration', type: 'image' },
    { id: 8, image: '/ceramic-video1.mov', title: 'Ceramic Process', type: 'video' },
    { id: 9, image: '/ceramic-video2.mov', title: 'Application', type: 'video' },
    { id: 10, image: '/interior1.jpg', title: 'Interior Restore', type: 'image' },
    { id: 11, image: '/interior2.jpg', title: 'Interior Detail', type: 'image' },
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | Mikah's Auto Detailing Columbia SC</title>
        <meta name="description" content="View our portfolio of professional auto detailing work in Columbia, SC. See before and after photos of ceramic coating, paint correction, and interior detailing." />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com/gallery" />
      </Helmet>

      <div className="min-h-screen bg-white pb-20">
        {/* Instagram-style Header */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-14 px-4">
            <button
              onClick={() => navigate('/')}
              className="text-gray-800"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">mikahsautodetailing</span>
            </div>
            <div className="w-6" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="px-4 py-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              alt="Mikah's Auto Detailing"
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
            />
            <div className="flex-1">
              <div className="flex justify-around text-center">
                <div>
                  <div className="font-bold text-lg">{galleryItems.length}</div>
                  <div className="text-gray-500 text-xs">posts</div>
                </div>
                <div>
                  <div className="font-bold text-lg">5.0</div>
                  <div className="text-gray-500 text-xs">rating</div>
                </div>
                <div>
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-gray-500 text-xs">satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="font-bold text-sm">Mikah's Auto Detailing</h1>
            <p className="text-gray-600 text-sm">Premium Mobile Detailing</p>
            <p className="text-gray-600 text-sm">Columbia, Lexington & Irmo SC</p>
            <a href="tel:+18036678731" className="text-[#023E8A] text-sm font-medium">(803) 667-8731</a>
          </div>
          <a
            href="/book"
            className="block w-full mt-3 py-2 bg-[#023E8A] text-white text-center font-semibold rounded-lg text-sm"
          >
            Book Now
          </a>
        </div>

        {/* Grid Tab */}
        <div className="flex border-b border-gray-200">
          <button className="flex-1 py-3 flex justify-center border-b-2 border-gray-800">
            <LayoutGrid className="w-6 h-6" />
          </button>
        </div>

        {/* Instagram-style Grid */}
        <div className="grid grid-cols-3 gap-0.5">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative aspect-square overflow-hidden bg-gray-100"
            >
              {item.type === 'video' ? (
                <>
                  <video
                    src={item.image}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                  <div className="absolute top-2 right-2">
                    <Play className="w-5 h-5 text-white drop-shadow-lg" fill="white" />
                  </div>
                </>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-white text-2xl z-50"
          >
            &times;
          </button>
          {selectedItem.type === 'video' ? (
            <video
              src={selectedItem.image}
              className="max-w-full max-h-full"
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}

      <BottomNavbar />
    </>
  );
};

export default GalleryPage;
