
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Clock, Calendar, MessageSquare, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { categoryArticles, Article } from '@/data/articles';
import { cn } from '@/lib/utils';
import TimeIndicator from '@/components/TimeIndicator';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ArticleCard from '@/components/ArticleCard';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  
  // Find the article by ID across all categories
  useEffect(() => {
    if (!id) return;
    
    const articleId = parseInt(id, 10);
    
    // Find article in all categories
    let foundArticle: Article | null = null;
    let category = '';
    
    // Search through all categories to find the article
    Object.entries(categoryArticles).forEach(([categoryName, articles]) => {
      const found = articles.find(article => article.id === articleId);
      if (found) {
        foundArticle = found;
        category = categoryName;
      }
    });
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Get related articles from same category
      if (category) {
        const related = categoryArticles[category]
          .filter(a => a.id !== articleId)
          .slice(0, 3);
        setRelatedArticles(related);
      }
    }
  }, [id]);
  
  // Reading progress
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    
    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <p className="mt-4">The article you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }
  
  // Generate a fake longer content for the article
  const fullContent = `
    <p>${article.excerpt}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
    <h2>The Main Points</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
    <h2>Further Analysis</h2>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
    <h2>Conclusion</h2>
    <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
  `;
  
  return (
    <main className="min-h-screen pb-16">
      {/* Reading progress bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-slate/20 z-50"
        style={{ marginTop: '64px' }} // Adjust based on navbar height
      >
        <div 
          className="h-full bg-flame transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      {/* Article header */}
      <div className="w-full bg-slate/5 pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-2 mb-3">
            {article.tags && article.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-slate/10">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-dimgray mb-6">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{article.readTime}</span>
            </div>
            {/* Note: Since commentCount doesn't exist on Article type, we're not displaying it */}
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Bookmark size={16} />
              <span>Save</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Share2 size={16} />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Article image */}
      <div className="container mx-auto px-4 max-w-4xl py-6">
        <div className="w-full aspect-video overflow-hidden rounded-lg">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Article content */}
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="prose lg:prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: fullContent }}
        />
      </div>
      
      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <div className="container mx-auto px-4 max-w-6xl mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-midnight font-playfair">
              Related Articles
            </h2>
            <Link to="/search" className="text-flame hover:text-midnight text-sm font-medium flex items-center gap-1">
              View More <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard 
                key={relatedArticle.id} 
                article={relatedArticle} 
                view="grid" 
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default NewsPage;
