
import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 1,
    name: "Technology",
    stories: [
      {
        id: 101,
        title: "Apple's New VR Headset Sees Strong Pre-orders Despite High Price",
        excerpt: "The tech giant's new device is selling well in spite of its premium positioning.",
        imageUrl: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&q=80&w=800",
        readTime: "4 min read",
      },
      {
        id: 102,
        title: "The Rising Concerns of AI Generated Content in Academia",
        excerpt: "Universities are grappling with new challenges as AI tools become more sophisticated.",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        readTime: "7 min read",
      },
      {
        id: 103,
        title: "Quantum Computing Milestone Achieved By Research Team",
        excerpt: "Scientists announce breakthrough that could revolutionize computing power.",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        readTime: "5 min read",
      },
    ]
  },
  {
    id: 2,
    name: "Politics",
    stories: [
      {
        id: 201,
        title: "Global Summit on Climate Change Produces New Agreements",
        excerpt: "World leaders have committed to more ambitious goals following intense negotiations.",
        imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
        readTime: "8 min read",
      },
      {
        id: 202,
        title: "Election Polls Show Tight Race in Key Battleground States",
        excerpt: "Latest polling data reveals neck-and-neck competition with just weeks until voting day.",
        imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800",
        readTime: "6 min read",
      },
      {
        id: 203,
        title: "New Trade Agreements Set to Reshape Regional Economics",
        excerpt: "Experts analyze the potential impact of recently signed international trade deals.",
        imageUrl: "https://images.unsplash.com/photo-1444664597500-035db93e2323?auto=format&fit=crop&q=80&w=800",
        readTime: "5 min read",
      },
    ]
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-12 animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        {categories.map((category, categoryIndex) => (
          <div key={category.id} className={cn("mb-12", categoryIndex === categories.length - 1 && "mb-0")}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-midnight font-playfair">
                {category.name}
              </h2>
              <a href="#" className="text-flame hover:text-midnight text-sm font-medium story-link">
                View All
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.stories.map((story, i) => (
                <div 
                  key={story.id} 
                  className={cn(
                    "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 hover-scale",
                    i === 0 && "md:col-span-2 lg:col-span-1"
                  )}
                >
                  <a href="#" className="block">
                    <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                      <img 
                        src={story.imageUrl} 
                        alt={story.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2 text-jet line-clamp-2 font-playfair">
                        {story.title}
                      </h3>
                      <p className="text-dimgray mb-4 text-sm line-clamp-2">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center text-dimgray text-xs">
                        <Clock size={12} className="mr-1" />
                        <span>{story.readTime}</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
