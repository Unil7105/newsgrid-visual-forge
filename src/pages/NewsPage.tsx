
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, MessageSquare, Bookmark, Share2, ThumbsUp, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimeIndicator from '@/components/TimeIndicator';
import { categoryArticles, Article } from '@/data/articles';
import { Badge } from '@/components/ui/badge';
import ArticleCard from '@/components/ArticleCard';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Find the article based on the ID parameter
  useEffect(() => {
    // Flatten all articles from categories
    const allArticles: Article[] = Object.values(categoryArticles).flat();
    
    // Find the article with the matching ID
    const foundArticle = allArticles.find(a => a.id === Number(id));
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Find related articles from the same category
      const categoryList = Object.entries(categoryArticles);
      let foundCategory = '';
      
      // Find which category this article belongs to
      for (const [category, articles] of categoryList) {
        if (articles.some(a => a.id === foundArticle.id)) {
          foundCategory = category;
          break;
        }
      }
      
      // Get other articles from the same category (excluding the current one)
      if (foundCategory) {
        const related = categoryArticles[foundCategory]
          .filter(a => a.id !== foundArticle.id)
          .slice(0, 3);
        setRelatedArticles(related);
      }
    }
  }, [id]);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link to="/" className="text-flame hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          className="h-full bg-flame transition-all duration-100" 
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 animate-fade-in">
            {/* Breadcrumbs and back button */}
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center text-dimgray hover:text-flame transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                <span>Back to Home</span>
              </Link>
              <div className="text-dimgray text-sm">
                <span>Home</span>
                <ChevronRight size={14} className="inline mx-1" />
                <span>{article.tags && article.tags[0]}</span>
              </div>
            </div>
            
            {/* Article header */}
            <h1 className="text-3xl md:text-4xl font-bold text-midnight font-playfair mb-4">
              {article.title}
            </h1>
            
            {/* Article metadata */}
            <div className="flex flex-wrap items-center gap-4 text-dimgray text-sm mb-6">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>By {article.author}</span>
              </div>
              <div>
                <span>{article.date}</span>
              </div>
              {article.tags && (
                <div className="flex flex-wrap gap-2 ml-auto">
                  {article.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-slate/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Article featured image */}
          <div className="mb-8 rounded-xl overflow-hidden animate-fade-in">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Article content */}
          <div className="prose prose-lg max-w-none animate-fade-in">
            <p className="text-lg font-medium mb-6">{article.excerpt}</p>
            
            <p>The implications of this development extend far beyond immediate applications. Experts in the field suggest that we are witnessing a pivotal moment that could reshape industry standards for years to come.</p>
            
            <p>Research indicates that early adoption of these innovations provides significant competitive advantages. Organizations that embrace these changes report improvements across multiple performance metrics, according to recent studies.</p>
            
            <h2>Key Developments</h2>
            
            <p>Several factors have contributed to this breakthrough:</p>
            
            <ul>
              <li>Advanced algorithms specifically designed to optimize performance</li>
              <li>Collaborative efforts between research institutions and industry leaders</li>
              <li>Substantial investment in infrastructure and talent development</li>
              <li>Regulatory frameworks that encourage responsible innovation</li>
            </ul>
            
            <p>"This represents the culmination of years of dedicated research and development," explains Dr. Maria Johnson, a leading expert in the field. "We're seeing the practical application of theoretical concepts that were once considered purely academic."</p>
            
            <h2>Future Implications</h2>
            
            <p>Looking ahead, we can anticipate several important developments:</p>
            
            <p>The integration of these technologies into existing systems will likely accelerate in the coming months. Market analysts predict widespread adoption across multiple sectors, with particularly strong growth in healthcare, transportation, and financial services.</p>
            
            <p>Consumer applications are also expected to emerge rapidly, bringing these innovations into everyday life. This democratization of technology represents a significant shift in accessibility.</p>
            
            <blockquote>
              <p>"We stand at the threshold of a new era in how we approach these challenges. The possibilities are both exciting and profound." - Industry Analyst James Chen</p>
            </blockquote>
            
            <p>As this story continues to develop, we will provide updates on key milestones and implications for various stakeholders.</p>
          </div>
          
          {/* Article actions */}
          <div className="border-t border-b border-slate py-4 my-8 flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-dimgray hover:text-flame transition-colors">
                <ThumbsUp size={18} />
                <span>Like</span>
              </button>
              <button className="flex items-center gap-2 text-dimgray hover:text-flame transition-colors">
                <MessageSquare size={18} />
                <span>Comment</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-dimgray hover:text-flame transition-colors" aria-label="Bookmark">
                <Bookmark size={18} />
              </button>
              <button className="text-dimgray hover:text-flame transition-colors" aria-label="Share">
                <Share2 size={18} />
              </button>
            </div>
          </div>
          
          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 animate-fade-in">
              <h2 className="text-2xl font-bold text-midnight font-playfair mb-6">
                More to Read
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map(article => (
                  <ArticleCard 
                    key={article.id} 
                    article={{
                      ...article,
                      timestamp: new Date(article.date),
                      commentCount: 5
                    }} 
                    view="grid" 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
