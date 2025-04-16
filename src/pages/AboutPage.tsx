
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const AboutPage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add a scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;
      const progressBar = document.getElementById('progress-bar');
      
      if (progressBar) {
        progressBar.style.width = `${scrollProgress * 100}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          id="progress-bar" 
          className="h-full bg-flame transition-all duration-100 w-0"
        />
      </div>
      
      <Navbar />
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="py-16 bg-midnight text-white animate-fade-in">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-playfair">
                About NewsGrid
              </h1>
              <div className="h-1 w-24 bg-flame mx-auto mb-6"></div>
              <p className="text-lg mb-8">
                Your trusted source for the latest news and insights across technology, politics, business, science, and health.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-midnight font-playfair mb-6">
                  Our Mission
                </h2>
                <p className="text-dimgray mb-4">
                  Founded in 2023, NewsGrid is dedicated to bringing readers comprehensive, objective reporting on the stories that matter most. In an era of information overload, we believe in quality over quantity, depth over headlines, and facts over opinions.
                </p>
                <p className="text-dimgray mb-4">
                  Our mission is to empower readers with knowledge through journalism that is accessible, accurate, and insightful. We strive to present diverse perspectives and to illuminate complex topics with clarity and context.
                </p>
                <p className="text-dimgray">
                  As an independent publication, we're committed to maintaining the highest standards of journalistic integrity, free from outside influence or bias.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                  alt="NewsGrid team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-slate/30 animate-fade-in">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-midnight font-playfair mb-10 text-center">
              Our Team
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 hover-scale">
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Sarah Chen"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold mb-1 text-jet font-playfair">
                    Sarah Chen
                  </h3>
                  <p className="text-flame text-sm font-medium mb-3">
                    Chief Editor
                  </p>
                  <p className="text-dimgray text-sm mb-4">
                    Former investigative journalist with 15+ years of experience in digital media.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 hover-scale">
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/76.jpg" 
                    alt="Michael Rodriguez"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold mb-1 text-jet font-playfair">
                    Michael Rodriguez
                  </h3>
                  <p className="text-flame text-sm font-medium mb-3">
                    Technology Editor
                  </p>
                  <p className="text-dimgray text-sm mb-4">
                    Tech analyst and former developer with deep expertise in AI and emerging technologies.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 hover-scale">
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/33.jpg" 
                    alt="Emma Richardson"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold mb-1 text-jet font-playfair">
                    Emma Richardson
                  </h3>
                  <p className="text-flame text-sm font-medium mb-3">
                    Political Correspondent
                  </p>
                  <p className="text-dimgray text-sm mb-4">
                    Political analyst with experience covering national elections and international relations.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 hover-scale">
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/42.jpg" 
                    alt="Jordan Taylor"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold mb-1 text-jet font-playfair">
                    Jordan Taylor
                  </h3>
                  <p className="text-flame text-sm font-medium mb-3">
                    Business Editor
                  </p>
                  <p className="text-dimgray text-sm mb-4">
                    Former financial analyst with expertise in market trends and corporate strategy.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-dimgray hover:text-flame transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ethics Section */}
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-midnight font-playfair mb-6">
                  Our Editorial Standards
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg border-l-4 border-flame shadow-sm">
                    <h3 className="font-bold text-jet mb-2">Accuracy</h3>
                    <p className="text-dimgray text-sm">
                      We verify information from multiple sources before publication and promptly correct errors when they occur.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border-l-4 border-flame shadow-sm">
                    <h3 className="font-bold text-jet mb-2">Independence</h3>
                    <p className="text-dimgray text-sm">
                      Our reporting is free from external influence, and we maintain a clear separation between news and opinion content.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border-l-4 border-flame shadow-sm">
                    <h3 className="font-bold text-jet mb-2">Fairness</h3>
                    <p className="text-dimgray text-sm">
                      We present diverse perspectives and avoid making assumptions or simplifications that could lead to misunderstanding.
                    </p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border-l-4 border-flame shadow-sm">
                    <h3 className="font-bold text-jet mb-2">Transparency</h3>
                    <p className="text-dimgray text-sm">
                      We disclose our sources when possible and explain our reporting methods to build reader trust.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-midnight font-playfair mb-6">
                  Contact Us
                </h2>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin size={20} className="text-flame mr-3 mt-1" />
                      <div>
                        <h3 className="font-bold text-jet">Main Office</h3>
                        <p className="text-dimgray text-sm">
                          1234 Media Way, New York, NY 10001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone size={20} className="text-flame mr-3 mt-1" />
                      <div>
                        <h3 className="font-bold text-jet">Phone</h3>
                        <p className="text-dimgray text-sm">
                          (212) 555-8765
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail size={20} className="text-flame mr-3 mt-1" />
                      <div>
                        <h3 className="font-bold text-jet">Email</h3>
                        <p className="text-dimgray text-sm">
                          info@newsgrid.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate pt-4">
                    <h3 className="font-bold text-jet mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="#" className="p-2 bg-slate/50 rounded-full text-dimgray hover:bg-flame hover:text-white transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href="#" className="p-2 bg-slate/50 rounded-full text-dimgray hover:bg-flame hover:text-white transition-colors">
                        <Facebook size={18} />
                      </a>
                      <a href="#" className="p-2 bg-slate/50 rounded-full text-dimgray hover:bg-flame hover:text-white transition-colors">
                        <Instagram size={18} />
                      </a>
                      <a href="#" className="p-2 bg-slate/50 rounded-full text-dimgray hover:bg-flame hover:text-white transition-colors">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
