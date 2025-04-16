
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import TimeIndicator from './TimeIndicator';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    author: string;
    readTime: string;
    timestamp?: Date | string;
    date?: string;
  };
  view: 'grid' | 'list';
}

const ArticleCard = ({ article, view }: ArticleCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-scale border-slate",
        view === 'list' && "flex flex-col md:flex-row"
      )}
    >
      <Link to={`/article/${article.id}`} className={cn("block", view === 'list' && "flex flex-col md:flex-row w-full")}>
        <div className={cn(
          "aspect-w-16 aspect-h-9 relative overflow-hidden",
          view === 'list' ? "md:w-1/3 h-48 md:h-auto" : ""
        )}>
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className={cn(
              "w-full h-48 object-cover hover:scale-105 transition-transform duration-500",
              view === 'list' && "md:h-full"
            )}
          />
          {article.timestamp && (
            <div className="absolute top-2 left-2">
              <TimeIndicator 
                timestamp={article.timestamp} 
                showBadge={true} 
                showIcon={false}
                className="bg-white/80 hover:bg-white transition-colors"
              />
            </div>
          )}
        </div>
        <CardContent className={cn(
          "p-5",
          view === 'list' && "md:w-2/3"
        )}>
          <div className="flex justify-between items-center text-dimgray text-xs mb-2">
            {article.timestamp ? (
              <TimeIndicator timestamp={article.timestamp} />
            ) : (
              <span>{article.date}</span>
            )}
            <div className="flex items-center">
              <span>{article.readTime}</span>
            </div>
          </div>
          <h3 className={cn(
            "font-bold mb-2 text-jet font-playfair",
            view === 'grid' ? "text-xl line-clamp-2" : "text-xl md:text-2xl"
          )}>
            {article.title}
          </h3>
          <p className={cn(
            "text-dimgray mb-3 text-sm",
            view === 'grid' ? "line-clamp-3" : "line-clamp-2 md:line-clamp-3"
          )}>
            {article.excerpt}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-dimgray">By {article.author}</span>
            <span className="text-flame text-sm font-medium story-link">Read More</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ArticleCard;
