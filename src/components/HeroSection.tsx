
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, MessageSquare, Bookmark, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import TimeIndicator from './TimeIndicator';
import { Badge } from './ui/badge';

const featuredStories = [
  {
    id: 601,
    title: "Highly Anticipated Sci-Fi Series Breaks Streaming Records in First Week",
    excerpt: "The big-budget adaptation of a beloved novel has surpassed all viewership expectations. Critics praise the show's visual effects, character development, and faithful interpretation of the source material.",
    category: "Entertainment",
    isBreaking: true,
    imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=1000",
    readTime: "5 min read",
    author: "Marcus Bennett",
    commentCount: 24,
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
  },
  {
    id: 202,
    title: "Election Polls Show Tight Race in Key Battleground States",
    excerpt: "Latest polling data reveals neck-and-neck competition with just weeks until voting day. Analysts point to economic concerns and healthcare policy as the primary issues driving voter decisions in these crucial regions.",
    category: "Politics",
    isBreaking: false,
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1000",
    readTime: "6 min read",
    author: "Daniel Foster",
    commentCount: 7,
    timestamp: new Date(Date.now() - 90 * 60 * 1000), // 1.5 hours ago
  },
  {
    id: 403,
    title: "Revolutionary Material Could Transform Electronics Manufacturing",
    excerpt: "Researchers have developed a new type of semiconductor with unique electrical properties that could lead to faster, more efficient devices. The material can be produced using existing manufacturing processes, potentially enabling rapid adoption by industry.",
    category: "Science",
    isBreaking: false,
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
    readTime: "5 min read",
    author: "Dr. Amir Hassan",
    commentCount: 15,
    timestamp: new Date(Date.now() - 120 * 60 * 1000), // 2 hours ago
  }
];

const HeroSection = () => {
  return (
    <section className="pt-24 pb-10 animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Featured Story */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-xl hover-scale group">
            <div className="relative h-[400px] md:h-[500px]">
              <img 
                src={featuredStories[0].imageUrl} 
                alt={featuredStories[0].title}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.85] group-hover:brightness-[0.75] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent" />
              
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <TimeIndicator 
                  timestamp={featuredStories[0].timestamp} 
                  showBadge={true} 
                  showIcon={false}
                  className="bg-white/80 text-midnight"
                />
                {featuredStories[0].isBreaking && (
                  <span className="bg-red-600 text-white text-xs font-medium px-2.5 py-1 rounded-full animate-pulse">
                    Breaking
                  </span>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <div className="flex gap-3 mb-3">
                  <Link 
                    to={`/category/${featuredStories[0].category.toLowerCase()}`}
                    className="bg-flame text-white text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {featuredStories[0].category}
                  </Link>
                </div>
                <h1 className="text-white text-2xl md:text-4xl font-bold mb-3 font-playfair">
                  {featuredStories[0].title}
                </h1>
                <p className="text-white/90 mb-4 max-w-2xl text-sm md:text-base line-clamp-2 md:line-clamp-3">
                  {featuredStories[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{featuredStories[0].readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>By {featuredStories[0].author}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare size={14} className="mr-1" />
                    <span>{featuredStories[0].commentCount} comments</span>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <button className="text-white/80 hover:text-white transition-colors" aria-label="Bookmark">
                      <Bookmark size={14} />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors" aria-label="Share">
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <Link 
                    to={`/news/${featuredStories[0].id}`}
                    className="text-flame bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors flex items-center w-fit"
                  >
                    <span className="mr-1">Read More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Secondary Featured Stories */}
          <div className="lg:col-span-4 grid grid-rows-2 gap-6">
            {featuredStories.slice(1, 3).map((story) => (
              <div key={story.id} className="relative overflow-hidden rounded-xl hover-scale group">
                <div className="relative h-[200px] md:h-[240px]">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.9] group-hover:brightness-[0.8] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent" />
                  
                  <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                    <TimeIndicator 
                      timestamp={story.timestamp} 
                      showBadge={true} 
                      showIcon={false}
                      className="bg-white/80 text-midnight"
                    />
                    {story.isBreaking && (
                      <span className="bg-red-600 text-white text-xs font-medium px-2.5 py-1 rounded-full animate-pulse">
                        Breaking
                      </span>
                    )}
                  </div>
                  
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="text-white/80 hover:text-white transition-colors bg-black/20 p-1 rounded-full" aria-label="Bookmark">
                      <Bookmark size={12} />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors bg-black/20 p-1 rounded-full" aria-label="Share">
                      <Share2 size={12} />
                    </button>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                    <div className="flex gap-2 mb-2">
                      <Link 
                        to={`/category/${story.category.toLowerCase()}`}
                        className="bg-flame text-white text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {story.category}
                      </Link>
                    </div>
                    <h2 className="text-white text-lg md:text-xl font-bold mb-2 font-playfair line-clamp-2">
                      {story.title}
                    </h2>
                    <div className="flex items-center justify-between text-white/80 text-xs">
                      <div className="flex items-center gap-2">
                        <span>{story.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={12} className="mr-1" />
                        <span>By {story.author}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Link 
                        to={`/news/${story.id}`}
                        className="text-white/90 hover:text-white transition-colors text-xs flex items-center w-fit"
                      >
                        <span className="mr-1">Read More</span>
                        <ArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
