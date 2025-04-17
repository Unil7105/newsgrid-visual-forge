
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { categoryArticles } from '@/data/articles';

const categories = [
  {
    id: 1,
    name: "Technology",
    slug: "technology",
    stories: categoryArticles.technology.slice(0, 3).map(article => ({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      imageUrl: article.imageUrl,
      readTime: article.readTime,
    }))
  },
  {
    id: 2,
    name: "Politics",
    slug: "politics",
    stories: categoryArticles.politics.slice(0, 3).map(article => ({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      imageUrl: article.imageUrl,
      readTime: article.readTime,
    }))
  },
  {
    id: 3,
    name: "Business",
    slug: "business",
    stories: categoryArticles.business.slice(0, 3).map(article => ({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      imageUrl: article.imageUrl,
      readTime: article.readTime,
    }))
  },
  {
    id: 4,
    name: "Science",
    slug: "science",
    stories: categoryArticles.science.slice(0, 3).map(article => ({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      imageUrl: article.imageUrl,
      readTime: article.readTime,
    }))
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
              <Link to={`/category/${category.slug}`} className="text-flame hover:text-midnight text-sm font-medium story-link">
                View All
              </Link>
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
                  <Link to={`/news/${story.id}`} className="block">
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
                  </Link>
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
