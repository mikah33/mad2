import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Image, Calendar, Wrench } from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
  isCenter?: boolean;
}

const BottomNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      id: 'home',
      icon: <Home className="w-6 h-6" />,
      label: 'Home',
      path: '/',
    },
    {
      id: 'gallery',
      icon: <Image className="w-6 h-6" />,
      label: 'Gallery',
      path: '/gallery',
    },
    {
      id: 'book',
      icon: <Calendar className="w-7 h-7" />,
      label: 'Book',
      path: '/book',
      isCenter: true,
    },
    {
      id: 'services',
      icon: <Wrench className="w-6 h-6" />,
      label: 'Services',
      path: '/services',
    },
  ];

  const handleNavigation = (item: NavItem) => {
    if (item.path.includes('#')) {
      const [basePath, hash] = item.path.split('#');
      if (location.pathname !== basePath && basePath !== '/') {
        navigate(basePath || '/');
        setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (item: NavItem) => {
    if (item.path === '/') return location.pathname === '/' && !location.hash;
    return location.pathname === item.path || location.pathname.startsWith(item.path + '/');
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200"
      style={{
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-center justify-around h-16 w-full px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
              item.isCenter ? 'relative -mt-4' : ''
            }`}
          >
            {item.isCenter ? (
              <div className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isActive(item)
                      ? 'bg-[#023E8A] scale-110'
                      : 'bg-gradient-to-br from-[#023E8A] to-[#0077B6] hover:scale-105'
                  }`}
                  style={{ boxShadow: '0 4px 15px rgba(2, 62, 138, 0.4)' }}
                >
                  <span className="text-white">{item.icon}</span>
                </div>
                <span className={`text-xs mt-1 font-semibold ${isActive(item) ? 'text-[#023E8A]' : 'text-gray-600'}`}>
                  {item.label}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className={`transition-colors duration-200 ${
                  isActive(item) ? 'text-[#023E8A]' : 'text-gray-500 hover:text-[#0077B6]'
                }`}>
                  {item.icon}
                </span>
                <span className={`text-xs mt-1 transition-colors duration-200 ${
                  isActive(item) ? 'text-[#023E8A] font-semibold' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
