
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const topics = [
  { id: 1, name: "AI", count: 28 },
  { id: 2, name: "Elections", count: 42 },
  { id: 3, name: "Climate", count: 19 },
  { id: 4, name: "Tech", count: 31 },
  { id: 5, name: "Healthcare", count: 15 },
  { id: 6, name: "Finance", count: 23 },
  { id: 7, name: "Space", count: 12 },
  { id: 8, name: "Science", count: 25 },
  { id: 9, name: "Business", count: 18 },
  { id: 10, name: "Politics", count: 30 },
  { id: 11, name: "Sports", count: 22 },
  { id: 12, name: "Education", count: 16 },
];

const TrendingTopics = () => {
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemsToShow = isMobile ? 3 : 8;
  const maxScroll = Math.max(0, topics.length - itemsToShow);
  
  const handleScrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1));
  };
  
  const handleScrollRight = () => {
    setScrollPosition(Math.min(maxScroll, scrollPosition + 1));
  };
  
  const visibleTopics = topics.slice(scrollPosition, scrollPosition + itemsToShow);
  
  const showLeftArrow = scrollPosition > 0;
  const showRightArrow = scrollPosition < maxScroll;

  return (
    <section className="py-6 bg-slate/30 animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <Flame size={18} className="text-flame" />
          <h2 className="text-lg font-bold text-midnight">Trending Topics</h2>
        </div>
        
        <div className="relative">
          {showLeftArrow && (
            <button 
              onClick={handleScrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-1.5 rounded-full text-dimgray hover:text-flame transition-colors z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
          )}
          
          <div className="overflow-hidden px-8">
            <div 
              className="flex gap-3 transition-transform duration-300"
              style={{ transform: `translateX(-${scrollPosition * (isMobile ? 100 : 130)}px)` }}
            >
              {topics.map((topic) => (
                <Link 
                  key={topic.id}
                  to={`/search?tag=${topic.name.toLowerCase()}`}
                  className={cn(
                    "px-4 py-2 bg-white border border-slate rounded-full text-sm text-dimgray font-medium hover:bg-flame hover:text-white hover:border-flame transition-colors duration-200 flex items-center gap-2 whitespace-nowrap",
                    topic.name.toLowerCase() === "science" && "bg-flame text-white border-flame"
                  )}
                >
                  #{topic.name}
                  <span className="bg-slate/60 text-dimgray px-1.5 py-0.5 rounded-full text-xs">
                    {topic.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          
          {showRightArrow && (
            <button 
              onClick={handleScrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-1.5 rounded-full text-dimgray hover:text-flame transition-colors z-10"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
