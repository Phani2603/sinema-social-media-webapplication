import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LandingNavbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Features', path: '#features' },
    { name: 'Why Sinema?', path: '#why' },
    { name: 'Discover', path: '#discover' },
    { name: 'Community', path: '#community' },
    { name: 'Support', path: '#support' },
  ];
  
  return (
    <div className="w-2/5 mx-auto bg-gray-900/80 backdrop-blur-md shadow-md fixed top-17 left-1/2 transform -translate-x-1/2 z-50 px-6 rounded-2xl">
      <div className="container mx-auto flex items-center justify-center">
        {/* Navigation Links - Horizontally Scrollable */}
        <nav className="flex-1 overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide">
          <div className="flex justify-center [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-1.5 text-sm transition-colors ${
                    isActive 
                      ? 'text-white font-medium' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LandingNavbar; 