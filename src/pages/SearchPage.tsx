import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Clock, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample search data - in a real app, this would come from an API
const searchArticles = (query: string, category?: string, tag?: string) => {
  const allArticles = [
    {
      id: 101,
      title: "Apple's New VR Headset Sees Strong Pre-orders Despite High Price",
      excerpt: "The tech giant's new device is selling well in spite of its premium positioning in the market. Industry analysts point to the company's loyal customer base and cutting-edge features as key factors driving demand.",
      imageUrl: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min read",
      date: "Apr 12, 2025",
      category: "Technology",
      tags: ["Apple", "VR", "Technology", "Gadgets"]
    },
    {
      id: 102,
      title: "The Rising Concerns of AI Generated Content in Academia",
      excerpt: "Universities are grappling with new challenges as AI tools become more sophisticated. Faculty members report increasing difficulty in distinguishing between student-written papers and AI-generated content, raising questions about academic integrity.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 10, 2025",
      category: "Technology",
      tags: ["AI", "Education", "Technology", "Ethics"]
    },
    {
      id: 201,
      title: "Global Summit on Climate Change Produces New Agreements",
      excerpt: "World leaders have committed to more ambitious goals following intense negotiations. The revised targets include faster transitions to renewable energy and increased funding for climate adaptation in vulnerable regions.",
      imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Apr 14, 2025",
      category: "Politics",
      tags: ["Climate", "Politics", "Global", "Environment"]
    },
    {
      id: 301,
      title: "Startup Secures Record Funding for Sustainable Energy Storage",
      excerpt: "A cleantech venture has raised $300 million in Series B funding to scale production of its innovative battery technology. The company claims its solution offers twice the energy density of current lithium-ion batteries at a competitive price point.",
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 15, 2025",
      category: "Business",
      tags: ["Startup", "CleanTech", "Business", "Energy"]
    },
    {
      id: 401,
      title: "Breakthrough in Fusion Energy Brings Commercial Viability Closer",
      excerpt: "Scientists at a national laboratory have maintained a fusion reaction for a record duration, marking significant progress toward practical energy generation. The achievement addresses one of the key challenges that has limited fusion's commercial application.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", 
      readTime: "6 min read",
      date: "Apr 14, 2025",
      category: "Science",
      tags: ["Science", "Energy", "Research", "Technology"]
    },
    {
      id: 501,
      title: "Clinical Trial Shows Promise for Early Alzheimer's Intervention",
      excerpt: "A novel treatment approach targeting protein aggregation has demonstrated significant benefits in patients with mild cognitive impairment. The multi-year study suggests that early intervention may slow or even halt disease progression in some individuals.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 15, 2025",
      category: "Health",
      tags: ["Health", "Medicine", "Research", "Alzheimer's"]
    }
  ];

  let filteredArticles = [...allArticles];
  
  // Filter by search query (check title and excerpt)
  if (query) {
    filteredArticles = filteredArticles.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  // Filter by category if provided
  if (category) {
    filteredArticles = filteredArticles.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Filter by tag if provided
  if (tag) {
    filteredArticles = filteredArticles.filter(article => 
      article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }
  
  return filteredArticles;
};

// List of available categories
const categories = [
  "Technology",
  "Politics",
  "Business",
  "Science",
  "Health"
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  const tag = searchParams.get('tag') || '';
  
  const [showFilters, setShowFilters] = useState(false);
  const articles = searchArticles(query, category, tag);
  
  // Scroll to top when search params change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query, category, tag]);

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

  // Handle category selection
  const handleCategorySelect = (selectedCategory: string) => {
    if (category === selectedCategory) {
      // If clicking the already selected category, remove the filter
      searchParams.delete('category');
    } else {
      searchParams.set('category', selectedCategory);
    }
    setSearchParams(searchParams);
  };

  // Handle clearing all filters
  const clearFilters = () => {
    searchParams.delete('category');
    searchParams.delete('tag');
    // Keep the search query
    setSearchParams(searchParams.get('q') ? { q: searchParams.get('q')! } : {});
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
            <h1 className="text-3xl md:text-4xl font-bold text-midnight font-playfair mb-4">
              {query ? `Search results for "${query}"` : (tag ? `Articles tagged with "${tag}"` : 'All Articles')}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              {(query || category || tag) && (
                <button 
                  className="text-sm text-dimgray hover:text-flame flex items-center"
                  onClick={clearFilters}
                >
                  <X size={14} className="mr-1" />
                  Clear all filters
                </button>
              )}
              
              {tag && (
                <div className="px-4 py-2 bg-white border border-slate rounded-full text-sm text-dimgray font-medium flex items-center gap-2">
                  #{tag}
                  <button 
                    onClick={() => {
                      searchParams.delete('tag');
                      setSearchParams(searchParams);
                    }}
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters for desktop */}
            <div className="hidden md:block md:w-64">
              <div className="bg-white border border-slate rounded-lg p-4 shadow-sm animate-fade-in">
                <h2 className="font-bold text-midnight text-lg mb-4">Filters</h2>
                
                <div className="mb-4">
                  <h3 className="font-medium text-jet text-sm mb-2">Categories</h3>
                  <div className="flex flex-col gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        className={cn(
                          "text-left px-3 py-2 rounded-md text-sm transition-colors",
                          category === cat 
                            ? "bg-flame text-white" 
                            : "text-dimgray hover:bg-slate/50"
                        )}
                        onClick={() => handleCategorySelect(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile filter button */}
            <div className="md:hidden">
              <button 
                className="w-full px-4 py-3 bg-white border border-slate rounded-lg mb-4 flex items-center justify-between"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="flex items-center">
                  <Filter size={18} className="mr-2 text-dimgray" />
                  <span className="font-medium">Filters</span>
                </span>
                <span className="text-flame">{showFilters ? 'Hide' : 'Show'}</span>
              </button>
              
              {/* Mobile filters */}
              {showFilters && (
                <div className="bg-white border border-slate rounded-lg p-4 shadow-sm mb-4 animate-fade-in">
                  <h3 className="font-medium text-jet text-sm mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-sm transition-colors",
                          category === cat 
                            ? "bg-flame text-white" 
                            : "bg-slate/30 text-dimgray hover:bg-slate/50"
                        )}
                        onClick={() => handleCategorySelect(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Search results */}
            <div className="flex-1">
              {articles.length > 0 ? (
                <>
                  <p className="text-dimgray mb-4 animate-fade-in">
                    Found {articles.length} result{articles.length !== 1 ? 's' : ''}
                  </p>
                  
                  <div className="space-y-6 mb-8 animate-fade-in">
                    {articles.map(article => (
                      <Card 
                        key={article.id} 
                        className="overflow-hidden hover:shadow-md transition-shadow duration-300 hover-scale border-slate"
                      >
                        <a href={`/article/${article.id}`} className="block">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 relative overflow-hidden">
                              <img 
                                src={article.imageUrl} 
                                alt={article.title}
                                className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <CardContent className="p-5 md:w-2/3">
                              <div className="flex justify-between items-center text-dimgray text-xs mb-2">
                                <span className="bg-slate/60 px-2 py-1 rounded-full">
                                  {article.category}
                                </span>
                                <div className="flex items-center">
                                  <Clock size={12} className="mr-1" />
                                  <span>{article.readTime}</span>
                                </div>
                              </div>
                              <h3 className="text-xl font-bold mb-2 text-jet line-clamp-2 font-playfair">
                                {article.title}
                              </h3>
                              <p className="text-dimgray mb-4 text-sm line-clamp-2 md:line-clamp-3">
                                {article.excerpt}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {article.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-xs text-dimgray bg-slate/40 px-2 py-1 rounded-full">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </CardContent>
                          </div>
                        </a>
                      </Card>
                    ))}
                  </div>
                  
                  <Pagination className="mt-8 animate-fade-in">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </>
              ) : (
                <div className="text-center py-20 animate-fade-in">
                  <h2 className="text-2xl text-dimgray mb-4">No articles found</h2>
                  <p className="text-dimgray mb-6">Try adjusting your search or filters</p>
                  <button 
                    onClick={clearFilters}
                    className="inline-block px-6 py-3 bg-flame text-white rounded-md hover:bg-midnight transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
