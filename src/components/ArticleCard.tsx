
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import TimeIndicator from './TimeIndicator';
import { User, Bookmark, MessageSquare, Share2 } from 'lucide-react';

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
    category?: string;
    commentCount?: number;
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
      <Link to={`/news/${article.id}`} className={cn("block", view === 'list' && "flex flex-col md:flex-row w-full")}>
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
          {article.category && (
            <div className="absolute top-2 right-2">
              <span className="bg-flame text-white text-xs font-medium px-2.5 py-1 rounded-full">
                {article.category}
              </span>
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
            <div className="flex items-center gap-2">
              <span>{article.readTime}</span>
              {article.commentCount !== undefined && (
                <div className="flex items-center text-dimgray">
                  <MessageSquare size={12} className="mr-1" />
                  <span>{article.commentCount}</span>
                </div>
              )}
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
            <div className="flex items-center">
              <User size={14} className="mr-1 text-dimgray" />
              <span className="text-xs text-dimgray">By {article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-dimgray hover:text-flame transition-colors" aria-label="Bookmark">
                <Bookmark size={14} />
              </button>
              <button className="text-dimgray hover:text-flame transition-colors" aria-label="Share">
                <Share2 size={14} />
              </button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ArticleCard;
