
import React from 'react';
import { Send } from 'lucide-react';

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-midnight text-white animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Stay informed with the latest news
            </h2>
            <p className="text-white/80 mb-2">
              Subscribe to our newsletter and never miss an important story. We'll deliver the top headlines directly to your inbox.
            </p>
            <p className="text-white/60 text-sm mb-6">
              No spam, unsubscribe anytime.
            </p>
          </div>
          
          <div className="w-full md:w-2/5">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email address</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-flame focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center">
                  <input 
                    id="daily" 
                    name="frequency" 
                    type="radio" 
                    className="h-4 w-4 accent-flame"
                    defaultChecked
                  />
                  <label htmlFor="daily" className="ml-2 text-sm text-white/80">Daily digest</label>
                </div>
                <div className="flex items-center">
                  <input 
                    id="weekly" 
                    name="frequency" 
                    type="radio" 
                    className="h-4 w-4 accent-flame"
                  />
                  <label htmlFor="weekly" className="ml-2 text-sm text-white/80">Weekly roundup</label>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-flame hover:bg-flame/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
              >
                Subscribe Now
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
