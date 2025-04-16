
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Rss } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-midnight text-white/80 pt-12 pb-6 animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & about */}
          <div className="md:col-span-1">
            <a href="/" className="text-white font-playfair text-2xl font-bold block mb-4">
              News<span className="text-flame">Grid</span>
            </a>
            <p className="text-sm mb-6">
              A modern editorial-style news platform delivering the latest stories and insights across technology, politics, business, and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-flame transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-flame transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-flame transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-flame transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-flame transition-colors">
                <Rss size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-flame transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Politics</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Science</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Health</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Entertainment</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-flame transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Advertise</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-flame transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Subscribe</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">RSS Feed</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-flame transition-colors">iOS App</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} NewsGrid. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-flame transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-flame transition-colors">Privacy</a>
            <a href="#" className="text-white/60 hover:text-flame transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
