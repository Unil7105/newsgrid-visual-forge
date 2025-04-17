
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, MessageSquare, Share2 } from 'lucide-react';
import TimeIndicator from './TimeIndicator';

const latestUpdates = [
  {
    id: 1,
    title: "SpaceX Successfully Launches Satellite Constellation",
    excerpt: "The aerospace company deployed another batch of satellites into low Earth orbit.",
    timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
    readTime: "3 min read",
    author: "John Smith",
    category: "Technology",
    commentCount: 8
  },
  {
    id: 2,
    title: "Major Pharmaceutical Breakthrough for Alzheimer's Treatment",
    excerpt: "New drug shows promising results in late-stage clinical trials for treating memory loss.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    readTime: "5 min read",
    author: "Emma Chen",
    category: "Health",
    commentCount: 12
  },
  {
    id: 3,
    title: "Tech Giant Announces New Smartphone Lineup",
    excerpt: "Latest models feature significant camera improvements and extended battery life.",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    readTime: "4 min read",
    author: "Michael Rodriguez",
    category: "Technology",
    commentCount: 5
  },
  {
    id: 4,
    title: "Global Stock Markets React to Federal Reserve Announcement",
    excerpt: "Investors respond to the latest interest rate decision with cautious optimism.",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    readTime: "6 min read",
    author: "Sarah Johnson",
    category: "Business",
    commentCount: 3
  },
  {
    id: 5,
    title: "Climate Report Warns of Accelerating Polar Ice Melt",
    excerpt: "Scientists observe faster-than-expected changes in Arctic and Antarctic regions.",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    readTime: "7 min read",
    author: "David Park",
    category: "Environment",
    commentCount: 15
  },
];

const LatestUpdates = () => {
  return (
    <section className="py-12 bg-slate/30 animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-midnight font-playfair">
            Latest Updates
          </h2>
          <Link to="/search" className="text-flame hover:text-midnight text-sm font-medium story-link">
            View All
          </Link>
        </div>
        
        <div className="space-y-4">
          {latestUpdates.map((update) => (
            <div key={update.id} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 hover-scale">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <TimeIndicator 
                    timestamp={update.timestamp} 
                    showBadge={true}
                    showIcon={false}
                  />
                  <span className="bg-flame/90 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                    {update.category}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-jet mb-1 font-playfair">
                    {update.title}
                  </h3>
                  <p className="text-dimgray text-sm mb-2 line-clamp-1">
                    {update.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-dimgray text-xs">
                    <div className="flex items-center gap-4">
                      <TimeIndicator timestamp={update.timestamp} showIcon={true} className="mr-3" />
                      <span>{update.readTime}</span>
                      <div className="flex items-center">
                        <User size={12} className="mr-1" />
                        <span>By {update.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <MessageSquare size={12} className="mr-1" />
                        <span>{update.commentCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to={`/article/${update.id}`}
                  className="text-flame hover:bg-flame hover:text-white p-2 rounded-full transition-colors self-end sm:self-center"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
