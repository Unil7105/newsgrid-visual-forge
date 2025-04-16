
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Clock, ArrowRight, Filter, SlidersHorizontal, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { categoryArticles } from '@/data/articles';
import LoadingArticles from '@/components/LoadingArticles';

// Function to get proper title case for the category
const getCategoryTitle = (category: string) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryTitle = category ? getCategoryTitle(category) : '';
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState<any[]>([]);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    
    setTimeout(() => {
      if (category && categoryArticles[category as keyof typeof categoryArticles]) {
        setArticles(categoryArticles[category as keyof typeof categoryArticles]);
      } else {
        setArticles([]);
      }
      setIsLoading(false);
      setCurrentPage(1);
    }, 800);
  }, [category]);

  // Calculate pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // Add a scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;
      const progressBar = document.getElementById('progress-bar');
      
      if (progressBar) {
        progressBar.style.width = `${scrollProgress * 100}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subscribe to newsletter for this category
  const handleSubscribe = () => {
    toast({
      title: "Subscribed!",
      description: `You're now subscribed to ${categoryTitle} updates.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          id="progress-bar" 
          className="h-full bg-flame transition-all duration-100 w-0"
        />
      </div>
      
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-midnight font-playfair mb-4">
              {categoryTitle}
            </h1>
            <div className="h-1 w-24 bg-flame"></div>
          </div>

          {/* Subscribe and View Options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 animate-fade-in">
            <button 
              onClick={handleSubscribe}
              className="px-4 py-2 bg-flame text-white rounded-md hover:bg-midnight transition-colors mb-4 sm:mb-0 flex items-center"
            >
              <BookOpen size={16} className="mr-2" />
              Subscribe to {categoryTitle}
            </button>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setView('grid')} 
                className={cn(
                  "p-2 rounded-md transition-colors",
                  view === 'grid' ? "bg-slate text-flame" : "bg-white text-dimgray hover:bg-slate/50"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
              </button>
              <button 
                onClick={() => setView('list')} 
                className={cn(
                  "p-2 rounded-md transition-colors",
                  view === 'list' ? "bg-slate text-flame" : "bg-white text-dimgray hover:bg-slate/50"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
              </button>
              <button 
                className="p-2 rounded-md bg-white text-dimgray hover:bg-slate/50 transition-colors md:flex items-center hidden"
              >
                <SlidersHorizontal size={20} />
              </button>
            </div>
          </div>

          {isLoading ? (
            <LoadingArticles count={6} view={view} />
          ) : articles.length > 0 ? (
            <>
              <div className={cn(
                "mb-10 animate-fade-in",
                view === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"
              )}>
                {currentArticles.map((article) => (
                  <Card 
                    key={article.id} 
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
                      </div>
                      <CardContent className={cn(
                        "p-5",
                        view === 'list' && "md:w-2/3"
                      )}>
                        <div className="flex justify-between items-center text-dimgray text-xs mb-2">
                          <span>{article.date}</span>
                          <div className="flex items-center">
                            <Clock size={12} className="mr-1" />
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
                ))}
              </div>
              
              {totalPages > 1 && (
                <Pagination className="mt-8 animate-fade-in">
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage - 1);
                          }} 
                        />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink 
                          href="#" 
                          isActive={currentPage === page}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage + 1);
                          }} 
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <div className="text-center py-20 animate-fade-in">
              <h2 className="text-2xl text-dimgray mb-4">No articles found in this category</h2>
              <p className="text-dimgray mb-6">Try exploring one of our other categories</p>
              <Link to="/" className="inline-block px-6 py-3 bg-flame text-white rounded-md hover:bg-midnight transition-colors">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
