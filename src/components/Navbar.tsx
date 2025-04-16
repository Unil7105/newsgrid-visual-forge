
import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, User, Menu, X, Home, Newspaper, Bookmark, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const isMobile = useIsMobile();

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

  // Close search when route changes
  useEffect(() => {
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

  const categories = [
    { name: 'Politics', path: '/category/politics', icon: <Newspaper size={20} /> },
    { name: 'Technology', path: '/category/technology', icon: <Newspaper size={20} /> },
    { name: 'Business', path: '/category/business', icon: <Newspaper size={20} /> },
    { name: 'Science', path: '/category/science', icon: <Newspaper size={20} /> },
    { name: 'Health', path: '/category/health', icon: <Newspaper size={20} /> },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="text-midnight font-playfair text-2xl font-bold">
              News<span className="text-flame">Grid</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              {categories.map((category) => (
                <Link 
                  key={category.path}
                  to={category.path} 
                  className={cn(
                    "text-jet hover:text-flame transition-colors text-sm font-medium",
                    location.pathname === category.path && "text-flame font-semibold"
                  )}
                >
                  {category.name}
                </Link>
              ))}
              <Link 
                to="/about" 
                className={cn(
                  "text-jet hover:text-flame transition-colors text-sm font-medium",
                  location.pathname === "/about" && "text-flame font-semibold"
                )}
              >
                About
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
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
            
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <button 
                    className="md:hidden text-jet hover:text-flame transition-colors p-2 rounded-full"
                    aria-label="Menu"
                  >
                    <Menu size={20} />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="p-0 w-[75vw] sm:max-w-sm">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b">
                      <Link 
                        to="/" 
                        className="text-midnight font-playfair text-xl font-bold"
                        onClick={() => document.body.click()} // Close sheet
                      >
                        News<span className="text-flame">Grid</span>
                      </Link>
                    </div>
                    
                    <nav className="flex-1 overflow-auto py-4">
                      <Link
                        to="/"
                        className={cn(
                          "flex items-center gap-3 py-3 px-6 text-jet hover:text-flame hover:bg-slate/20 transition-colors",
                          location.pathname === "/" && "text-flame font-semibold bg-slate/10"
                        )}
                        onClick={() => document.body.click()} // Close sheet
                      >
                        <Home size={20} />
                        <span className="font-medium">Home</span>
                      </Link>
                      
                      {categories.map((category) => (
                        <Link
                          key={category.path}
                          to={category.path}
                          className={cn(
                            "flex items-center gap-3 py-3 px-6 text-jet hover:text-flame hover:bg-slate/20 transition-colors",
                            location.pathname === category.path && "text-flame font-semibold bg-slate/10"
                          )}
                          onClick={() => document.body.click()} // Close sheet
                        >
                          {category.icon}
                          <span className="font-medium">{category.name}</span>
                        </Link>
                      ))}
                      
                      <Link
                        to="/about"
                        className={cn(
                          "flex items-center gap-3 py-3 px-6 text-jet hover:text-flame hover:bg-slate/20 transition-colors",
                          location.pathname === "/about" && "text-flame font-semibold bg-slate/10"
                        )}
                        onClick={() => document.body.click()} // Close sheet
                      >
                        <Info size={20} />
                        <span className="font-medium">About</span>
                      </Link>
                    </nav>
                    
                    <div className="p-4 border-t mt-auto">
                      <form onSubmit={handleSearchSubmit} className="relative">
                        <input
                          type="text"
                          placeholder="Search articles..."
                          className="w-full p-3 pr-12 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-flame focus:border-transparent"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
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
                  </div>
                </SheetContent>
              </Sheet>
            )}
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
    </header>
  );
};

export default Navbar;
