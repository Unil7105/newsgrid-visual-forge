
import React, { useState, useEffect } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-midnight font-playfair text-2xl font-bold">
              News<span className="text-flame">Grid</span>
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-jet hover:text-flame transition-colors text-sm font-medium">Politics</a>
              <a href="#" className="text-jet hover:text-flame transition-colors text-sm font-medium">Technology</a>
              <a href="#" className="text-jet hover:text-flame transition-colors text-sm font-medium">Business</a>
              <a href="#" className="text-jet hover:text-flame transition-colors text-sm font-medium">Science</a>
              <a href="#" className="text-jet hover:text-flame transition-colors text-sm font-medium">Health</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-jet hover:text-flame transition-colors p-2 rounded-full">
              <Search size={20} />
            </button>
            <button className="text-jet hover:text-flame transition-colors p-2 rounded-full">
              <User size={20} />
            </button>
            <button 
              className="md:hidden text-jet hover:text-flame transition-colors p-2 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-white transform transition-transform ease-in-out duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Politics</a>
            <a href="#" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Technology</a>
            <a href="#" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Business</a>
            <a href="#" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Science</a>
            <a href="#" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Health</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
