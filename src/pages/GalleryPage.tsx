import React, { useState } from 'react';
import { ArrowLeft, LayoutGrid, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import { SEOHead } from '../components/seo/SEOHead';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  type: 'image' | 'video';
  thumbnail?: string;
}

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, image: '/exterior1.jpg', title: 'Auto detailing results Columbia SC - professional exterior detail with ceramic shine', type: 'image' },
    { id: 2, image: '/exterior2.jpg', title: 'Auto detailing services Columbia SC - ceramic coating application results', type: 'image' },
    { id: 3, image: '/exterior3.jpg', title: 'Professional auto detailing Columbia SC - premium exterior wash and prep', type: 'image' },
    { id: 4, image: '/exterior4.jpg', title: 'Auto detailing services Columbia SC - paint correction swirl removal results', type: 'image' },
    { id: 5, image: '/exterior5.jpg', title: 'Auto detailing results Columbia SC - full detail package completion', type: 'image' },
    { id: 6, image: '/exterior6.jpg', title: 'Auto detailing services Columbia SC - ceramic coating installation process', type: 'image' },
    { id: 7, image: '/exterior7.jpg', title: 'Auto detailing results Columbia SC - complete exterior restoration shine', type: 'image' },
    { id: 8, image: '/ceramic-video1.mov', title: 'Auto detailing services Columbia SC - ceramic coating application process video', type: 'video', thumbnail: '/ceramic.jpg' },
    { id: 9, image: '/ceramic-video2.mov', title: 'Professional auto detailing Columbia SC - ceramic coating technique demonstration', type: 'video', thumbnail: '/exterior3.jpg' },
    { id: 10, image: '/interior1.jpg', title: 'Interior car detailing Columbia SC - leather seat restoration and cleaning', type: 'image' },
    { id: 11, image: '/interior2.jpg', title: 'Interior auto detailing services Columbia SC - complete interior detail results', type: 'image' },
    // New images from recent work
    { id: 12, image: '/gallery/exterior-detail-1.jpg', title: 'Auto detailing services Columbia SC - premium exterior shine and protection', type: 'image' },
    { id: 13, image: '/gallery/exterior-detail-2.jpg', title: 'Professional auto detailing Columbia SC - ceramic coating gloss finish', type: 'image' },
    { id: 14, image: '/gallery/exterior-detail-3.jpg', title: 'Auto detailing results Columbia SC - showroom quality exterior detail', type: 'image' },
    { id: 15, image: '/gallery/interior-detail-1.jpg', title: 'Interior detailing services Columbia SC - deep clean and conditioning', type: 'image' },
    { id: 16, image: '/gallery/interior-detail-2.jpg', title: 'Interior car detailing Columbia SC - dashboard and console restoration', type: 'image' },
    { id: 17, image: '/gallery/interior-detail-3.jpg', title: 'Auto detailing services Columbia SC - complete interior transformation', type: 'image' },
    // New videos
    { id: 18, image: '/videos/detail-video-1.mp4', title: 'Auto detailing services Columbia SC - professional detailing in action', type: 'video', thumbnail: '/gallery/exterior-detail-1.jpg' },
    { id: 19, image: '/videos/detail-video-2.mp4', title: 'Mobile detailing Columbia SC - ceramic coating application video', type: 'video', thumbnail: '/gallery/exterior-detail-2.jpg' },
    { id: 20, image: '/videos/detail-video-3.mp4', title: 'Professional auto detailing Columbia SC - interior detail process', type: 'video', thumbnail: '/gallery/interior-detail-1.jpg' },
  ];

  return (
    <>
      <SEOHead
        title="Gallery | Auto Detailing Services Columbia SC | Mikah's"
        description="View our auto detailing services in Columbia, SC. Before & after photos of ceramic coating, paint correction, interior detailing. 5-star rated. Call (803) 667-8731!"
        keywords="auto detailing services columbia sc, car detailing gallery, auto detailing photos columbia sc, ceramic coating results, paint correction before after, auto detailing services in columbia sc"
        canonical="https://mikahsmobiledetailingsc.com/gallery"
      />

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

        {/* H1 Section - SEO Optimized */}
        <div className="px-4 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white">
          <h1 className="text-lg md:text-xl font-bold text-center">Auto Detailing Gallery - Before & After</h1>
          <p className="text-center text-blue-100 text-xs md:text-sm mt-1">Professional detailing results in Columbia, Lexington & Irmo SC</p>
        </div>

        {/* Profile Section */}
        <div className="px-4 py-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              alt="Mikah's Auto Detailing Columbia SC - Professional auto detailing services columbia sc"
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
            <p className="font-bold text-sm">Mikah's Auto Detailing</p>
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
                  <img
                    src={item.thumbnail || '/ceramic.jpg'}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
                    </div>
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
