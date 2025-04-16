
import React from 'react';
import { Flame } from 'lucide-react';

const topics = [
  { id: 1, name: "AI", count: 28 },
  { id: 2, name: "Elections", count: 42 },
  { id: 3, name: "Climate", count: 19 },
  { id: 4, name: "Tech", count: 31 },
  { id: 5, name: "Healthcare", count: 15 },
  { id: 6, name: "Finance", count: 23 },
  { id: 7, name: "Space", count: 12 },
  { id: 8, name: "Science", count: 25 },
];

const TrendingTopics = () => {
  return (
    <section className="py-6 bg-slate/30 animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <Flame size={18} className="text-flame" />
          <h2 className="text-lg font-bold text-midnight">Trending Topics</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <a 
              key={topic.id}
              href={`#${topic.name.toLowerCase()}`}
              className="px-4 py-2 bg-white border border-slate rounded-full text-sm text-dimgray font-medium hover:bg-flame hover:text-white hover:border-flame transition-colors duration-200 flex items-center gap-2"
            >
              #{topic.name}
              <span className="bg-slate/60 text-dimgray px-1.5 py-0.5 rounded-full text-xs">
                {topic.count}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
