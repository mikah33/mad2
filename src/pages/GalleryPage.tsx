import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import RecentProjects from '../components/RecentProjects';
import BottomNavbar from '../components/BottomNavbar';

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Gallery | Mikah's Auto Detailing Columbia SC</title>
        <meta name="description" content="View our portfolio of professional auto detailing work in Columbia, SC. See before and after photos of ceramic coating, paint correction, and interior detailing." />
        <link rel="canonical" href="https://mikahsmobiledetailingsc.com/gallery" />
      </Helmet>

      <div className="min-h-screen bg-white pb-20">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center h-14">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-[#023E8A] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </button>
              <div className="flex-1 text-center">
                <h1 className="text-lg font-bold text-[#023E8A]">Our Work</h1>
              </div>
              <div className="w-16" />
            </div>
          </div>
        </div>

        <RecentProjects />
      </div>

      <BottomNavbar />
    </>
  );
};

export default GalleryPage;
