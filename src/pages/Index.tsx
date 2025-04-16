
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrendingTopics from '@/components/TrendingTopics';
import CategoryGrid from '@/components/CategoryGrid';
import LatestUpdates from '@/components/LatestUpdates';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
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
      <main>
        <HeroSection />
        <TrendingTopics />
        <CategoryGrid />
        <LatestUpdates />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
