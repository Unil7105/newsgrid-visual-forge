
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface LoadingArticlesProps {
  count: number;
  view: 'grid' | 'list';
}

const LoadingArticles = ({ count, view }: LoadingArticlesProps) => {
  const articles = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={cn(
      "animate-pulse mb-10",
      view === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"
    )}>
      {articles.map((index) => (
        <Card
          key={index}
          className={cn(
            "overflow-hidden border-slate",
            view === 'list' && "flex flex-col md:flex-row"
          )}
        >
          <div className={cn(
            "bg-slate/50 relative",
            view === 'list' ? "md:w-1/3 h-48 md:h-auto" : "h-48"
          )} />
          
          <CardContent className={cn(
            "p-5",
            view === 'list' && "md:w-2/3"
          )}>
            <div className="flex justify-between items-center mb-2">
              <div className="h-3 bg-slate/50 rounded w-20"></div>
              <div className="h-3 bg-slate/50 rounded w-24"></div>
            </div>
            <div className="h-6 bg-slate/50 rounded w-full max-w-[70%] mb-2"></div>
            <div className="h-6 bg-slate/50 rounded w-full max-w-[40%] mb-4"></div>
            <div className="space-y-2 mb-4">
              <div className="h-3 bg-slate/50 rounded w-full"></div>
              <div className="h-3 bg-slate/50 rounded w-full"></div>
              <div className="h-3 bg-slate/50 rounded w-3/4"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-3 bg-slate/50 rounded w-28"></div>
              <div className="h-3 bg-slate/50 rounded w-20"></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LoadingArticles;
