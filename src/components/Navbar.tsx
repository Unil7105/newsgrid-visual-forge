
import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
    } else {
      toast({
        title: "Empty search",
        description: "Please enter a search term",
        variant: "destructive",
      });
    }
  };

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
            <Link to="/" className="text-midnight font-playfair text-2xl font-bold">
              News<span className="text-flame">Grid</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/category/politics" className="text-jet hover:text-flame transition-colors text-sm font-medium">Politics</Link>
              <Link to="/category/technology" className="text-jet hover:text-flame transition-colors text-sm font-medium">Technology</Link>
              <Link to="/category/business" className="text-jet hover:text-flame transition-colors text-sm font-medium">Business</Link>
              <Link to="/category/science" className="text-jet hover:text-flame transition-colors text-sm font-medium">Science</Link>
              <Link to="/category/health" className="text-jet hover:text-flame transition-colors text-sm font-medium">Health</Link>
              <Link to="/about" className="text-jet hover:text-flame transition-colors text-sm font-medium">About</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              className="text-jet hover:text-flame transition-colors p-2 rounded-full"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <button 
              className="text-jet hover:text-flame transition-colors p-2 rounded-full"
              onClick={() => {
                toast({
                  title: "Coming soon",
                  description: "User accounts will be available soon!",
                });
              }}
              aria-label="User account"
            >
              <User size={20} />
            </button>
            <button 
              className="md:hidden text-jet hover:text-flame transition-colors p-2 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pt-4 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search for articles..."
                className="w-full p-3 pr-12 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-flame focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dimgray hover:text-flame"
                aria-label="Submit search"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-white transform transition-transform ease-in-out duration-300 z-40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/category/politics" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Politics</Link>
            <Link to="/category/technology" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Technology</Link>
            <Link to="/category/business" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Business</Link>
            <Link to="/category/science" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Science</Link>
            <Link to="/category/health" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">Health</Link>
            <Link to="/about" className="text-jet hover:text-flame transition-colors py-2 px-4 text-lg font-medium">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
