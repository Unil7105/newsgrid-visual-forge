
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimeIndicator from '@/components/TimeIndicator';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { categoryArticles } from '@/data/articles';
import { ArrowLeft, Clock, Share2, Bookmark, MessageSquare, User, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const numericId = id ? parseInt(id, 10) : 0;
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Find the article across all categories
  const article = Object.values(categoryArticles)
    .flat()
    .find(article => article.id === numericId);

  // Get recommended articles (3 random articles excluding current one)
  const getRecommendedArticles = () => {
    const allArticles = Object.values(categoryArticles).flat();
    const filteredArticles = allArticles.filter(a => a.id !== numericId);
    
    // Shuffle and take first 3
    return filteredArticles
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  };

  const recommendedArticles = getRecommendedArticles();

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Add a scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle sharing and bookmarking
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.excerpt,
        url: window.location.href,
      }).catch(() => {
        toast.success('Article link copied to clipboard!');
        navigator.clipboard.writeText(window.location.href);
      });
    } else {
      toast.success('Article link copied to clipboard!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleBookmark = () => {
    toast.success('Article saved to bookmarks!');
  };

  // Determine if this is a breaking news article (e.g., id === 1)
  const isBreakingNews = numericId === 1;

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 text-center py-20">
            <h2 className="text-2xl text-dimgray mb-4">Article not found</h2>
            <p className="text-dimgray mb-6">The article you're looking for may have been moved or deleted</p>
            <Button onClick={() => navigate('/')} className="bg-flame hover:bg-flame/90">
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          style={{ width: `${scrollProgress}%` }}
          className="h-full bg-flame transition-all duration-100"
        />
      </div>
      
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-dimgray hover:text-flame mb-6 transition-colors animate-fade-in"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Back</span>
          </button>

          <div className="relative rounded-xl overflow-hidden mb-8 animate-fade-in">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-[400px] md:h-[500px] object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent" />
            
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <TimeIndicator 
                timestamp={new Date(article.date)} 
                showBadge={true} 
                showIcon={false}
                className="bg-white/80 text-midnight"
              />
              {isBreakingNews && (
                <span className="bg-red-600 text-white text-xs font-medium px-2.5 py-1 rounded-full animate-pulse">
                  Breaking
                </span>
              )}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <div className="flex gap-3 mb-3">
                <a 
                  href={`/category/${article.tags && article.tags[0].toLowerCase()}`}
                  className="bg-flame text-white text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {article.tags && article.tags[0]}
                </a>
              </div>
              <h1 className="text-white text-2xl md:text-4xl font-bold mb-3 font-playfair">
                {article.title}
              </h1>
              <p className="text-white/90 mb-4 max-w-2xl text-sm md:text-base">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>By {article.author}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare size={14} className="mr-1" />
                  <span>{article.commentsCount || 0} comments</span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <button 
                    onClick={handleBookmark}
                    className="text-white/80 hover:text-white transition-colors" 
                    aria-label="Bookmark"
                  >
                    <Bookmark size={14} />
                  </button>
                  <button 
                    onClick={handleShare}
                    className="text-white/80 hover:text-white transition-colors" 
                    aria-label="Share"
                  >
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-16 flex md:flex-col items-center gap-4 md:sticky md:top-24 h-fit animate-fade-in">
              <button 
                onClick={handleShare}
                className="p-3 rounded-full border border-slate hover:bg-slate/20 transition-colors text-dimgray"
              >
                <Share2 size={18} />
              </button>
              <button 
                onClick={handleBookmark}
                className="p-3 rounded-full border border-slate hover:bg-slate/20 transition-colors text-dimgray"
              >
                <Bookmark size={18} />
              </button>
              <button className="p-3 rounded-full border border-slate hover:bg-slate/20 transition-colors text-dimgray">
                <MessageSquare size={18} />
              </button>
            </div>
            
            <div className="flex-1 animate-fade-in">
              <article className="prose prose-lg max-w-none">
                <p className="mb-4">
                  {article.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. 
                  Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                </p>
                
                <h2 className="text-2xl font-bold font-playfair mb-3 mt-6">More Details</h2>
                
                <p className="mb-4">
                  Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. 
                  Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. 
                  Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. 
                  Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                </p>
                
                <p className="mb-4">
                  Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, 
                  vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. 
                  Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. 
                  Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                </p>
                
                <h2 className="text-2xl font-bold font-playfair mb-3 mt-6">Implications</h2>
                
                <p className="mb-4">
                  Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. 
                  Nulla facilisi. Donec justo ante, vehicula at, arcu. Integer in sapien. Praesent congue. Duis vulputate est, 
                  vitae quam. Nullam facilisis eros phasellus vitae, vehicula blandit, mattis a, vehicula et, nunc. Praesent congue. 
                  Cras vel scelerisque magna purus libero, faucibus adipiscing.
                </p>
              </article>
              
              <div className="flex justify-center mt-8">
                <Button className="bg-flame hover:bg-flame/90 text-white flex items-center gap-2">
                  Read More
                  <ArrowRight size={16} />
                </Button>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {article.tags && article.tags.map(tag => (
                  <a 
                    key={tag}
                    href={`/search?tag=${tag}`}
                    className="px-4 py-2 bg-white border border-slate rounded-full text-sm text-dimgray font-medium hover:bg-flame hover:text-white hover:border-flame transition-colors"
                  >
                    #{tag}
                  </a>
                ))}
              </div>
              
              <Separator className="my-12" />
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-midnight font-playfair mb-6">
                  Recommended Articles
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendedArticles.map(rec => (
                    <Card 
                      key={rec.id} 
                      className={cn(
                        "overflow-hidden hover:shadow-md transition-shadow duration-300 hover-scale border-slate"
                      )}
                    >
                      <a 
                        href={`/news/${rec.id}`} 
                        className="block"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/news/${rec.id}`);
                        }}
                      >
                        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                          <img 
                            src={rec.imageUrl} 
                            alt={rec.title}
                            className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="mb-1">
                            <span className="text-xs font-medium text-flame">
                              {rec.tags && rec.tags[0]}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold mb-1 text-jet line-clamp-2 font-playfair">
                            {rec.title}
                          </h3>
                          <div className="flex items-center text-dimgray text-xs">
                            <Clock size={10} className="mr-1" />
                            <span>{rec.readTime}</span>
                          </div>
                        </CardContent>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
