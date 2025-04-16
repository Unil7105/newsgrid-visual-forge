
import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const latestUpdates = [
  {
    id: 1,
    title: "SpaceX Successfully Launches Satellite Constellation",
    excerpt: "The aerospace company deployed another batch of satellites into low Earth orbit.",
    timeAgo: "1h ago",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Major Pharmaceutical Breakthrough for Alzheimer's Treatment",
    excerpt: "New drug shows promising results in late-stage clinical trials for treating memory loss.",
    timeAgo: "2h ago",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Tech Giant Announces New Smartphone Lineup",
    excerpt: "Latest models feature significant camera improvements and extended battery life.",
    timeAgo: "3h ago",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Global Stock Markets React to Federal Reserve Announcement",
    excerpt: "Investors respond to the latest interest rate decision with cautious optimism.",
    timeAgo: "4h ago",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Climate Report Warns of Accelerating Polar Ice Melt",
    excerpt: "Scientists observe faster-than-expected changes in Arctic and Antarctic regions.",
    timeAgo: "5h ago",
    readTime: "7 min read",
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
          <a href="#" className="text-flame hover:text-midnight text-sm font-medium story-link">
            View All
          </a>
        </div>
        
        <div className="space-y-4">
          {latestUpdates.map((update) => (
            <div key={update.id} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 hover-scale">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="bg-slate text-dimgray px-3 py-2 rounded-md text-sm font-medium min-w-[80px] text-center">
                  {update.timeAgo}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-jet mb-1 font-playfair">
                    {update.title}
                  </h3>
                  <p className="text-dimgray text-sm mb-2 line-clamp-1">
                    {update.excerpt}
                  </p>
                  <div className="flex items-center text-dimgray text-xs">
                    <Clock size={12} className="mr-1" />
                    <span>{update.readTime}</span>
                  </div>
                </div>
                
                <a 
                  href="#" 
                  className="text-flame hover:bg-flame hover:text-white p-2 rounded-full transition-colors self-end sm:self-center"
                >
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
