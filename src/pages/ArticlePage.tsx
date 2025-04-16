
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrendingTopics from '@/components/TrendingTopics';
import { Clock, Share2, Bookmark, ArrowLeft, MessageSquare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

// Sample data - in a real app, this would come from an API call based on the ID
const getArticleById = (id: string) => {
  const articles = [
    {
      id: "101",
      title: "Apple's New VR Headset Sees Strong Pre-orders Despite High Price",
      excerpt: "The tech giant's new device is selling well in spite of its premium positioning in the market.",
      content: `
        <p class="mb-4">The highly anticipated virtual reality headset from Apple, priced at $3,499, has reportedly seen pre-orders exceeding internal expectations, according to sources familiar with the matter. This strong initial demand comes despite widespread industry skepticism about the premium price point in a market where most competing devices sell for under $1,000.</p>
        
        <p class="mb-4">Industry analysts point to several factors driving the unexpected demand. "Apple has managed to position this as a premium computing platform rather than just a VR gaming device," explains technology analyst Maria Rodriguez. "The emphasis on productivity applications and the integration with existing Apple services has resonated with professionals and creative users who see this as a potential workflow enhancement."</p>
        
        <h2 class="text-2xl font-bold font-playfair mb-3 mt-6">Technical Innovation Justifies Premium Positioning</h2>
        
        <p class="mb-4">The headset features several technological advances that help justify its price point to early adopters. The device incorporates dual 4K micro-OLED displays, advanced eye and hand tracking systems, and Apple's latest M2 chip architecture. Battery life, often a limitation for VR devices, has been extended to approximately 3.5 hours of active use, with an external battery pack that can be swapped while the headset remains powered.</p>
        
        <p class="mb-4">Software developers have responded enthusiastically, with over 250 applications already optimized for the new platform ahead of its official release. These include not only entertainment and gaming experiences but also productivity tools for 3D modeling, architectural visualization, and virtual collaboration.</p>
        
        <h2 class="text-2xl font-bold font-playfair mb-3 mt-6">Market Implications</h2>
        
        <p class="mb-4">The strong pre-order performance has implications beyond Apple's immediate bottom line. "This validates the premium segment of the VR market," notes consumer technology researcher James Chen. "Other manufacturers have been hesitant to target the high end, but Apple's success could encourage more innovation at higher price points."</p>
        
        <p class="mb-4">However, challenges remain for mainstream adoption. The device's weight, at 580 grams, is still considered heavy for extended use sessions. Additionally, the requirement for a separate battery pack has been criticized as an inelegant solution that detracts from the otherwise sleek design.</p>
        
        <p class="mb-4">Apple has not released specific sales figures, maintaining its traditional secrecy around early product performance. However, shipping estimates have already slipped to 8-10 weeks for new orders, suggesting that demand has outpaced initial production capacity.</p>
        
        <h2 class="text-2xl font-bold font-playfair mb-3 mt-6">Competitive Response</h2>
        
        <p class="mb-4">Competitors are reportedly accelerating their own high-end VR and mixed reality initiatives in response to Apple's market entry. Meta, which has dominated the consumer VR market with its Quest headsets, is said to be developing a more premium device targeted at professional users. Similarly, Sony has hinted at a potential "Pro" version of its PlayStation VR2 system that would incorporate additional features for power users.</p>
        
        <p class="mb-4">For now, Apple appears to have successfully carved out a new segment in the expanding reality computing landscape, demonstrating once again its ability to enter established markets with differentiated, premium offerings that resonance with its dedicated customer base.</p>
      `,
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&q=80&w=1200",
      readTime: "6 min read",
      date: "Apr 12, 2025",
      author: {
        name: "Sarah Chen",
        role: "Senior Technology Reporter",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      tags: ["Apple", "VR", "Technology", "Gadgets"]
    },
    {
      id: "201",
      title: "Global Summit on Climate Change Produces New Agreements",
      excerpt: "World leaders have committed to more ambitious goals following intense negotiations.",
      content: `
        <p class="mb-4">After two weeks of negotiations, representatives from 195 countries have reached a new agreement on climate action that significantly raises ambitions for reducing greenhouse gas emissions this decade. The pact, which builds on the foundation of the Paris Agreement, introduces more stringent requirements for national climate plans and establishes a framework for financial support to developing nations.</p>
        
        <p class="mb-4">The summit, held in Geneva, Switzerland, began with modest expectations but gained momentum after several major economies announced new commitments during the proceedings. "What we've witnessed here is a genuine diplomatic breakthrough," said UN Secretary-General António Guterres during the closing ceremony. "For the first time, we have concrete mechanisms to hold nations accountable for their climate promises."</p>
        
        <h2 class="text-2xl font-bold font-playfair mb-3 mt-6">Key Provisions of the Agreement</h2>
        
        <p class="mb-4">The new accord includes several groundbreaking provisions that distinguish it from previous climate agreements:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">A binding commitment to reach net-zero emissions by 2050 for developed nations and by 2060 for developing economies</li>
          <li class="mb-2">A new framework requiring countries to update their climate plans every three years instead of five</li>
          <li class="mb-2">The establishment of a $100 billion annual "climate resilience fund" to help vulnerable nations adapt to already unavoidable impacts</li>
          <li class="mb-2">A phased approach to eliminating fossil fuel subsidies, beginning with coal in 2027</li>
          <li class="mb-2">A global carbon pricing recommendation, though implementation remains at national discretion</li>
        </ul>
        
        <p class="mb-4">Perhaps most significantly, the agreement includes stronger enforcement mechanisms, including a transparent monitoring system and potential trade implications for countries that fail to meet their stated goals.</p>
        
        <h2 class="text-2xl font-bold font-playfair mb-3 mt-6">Mixed Reactions</h2>
        
        <p class="mb-4">Reactions to the new agreement have been mixed. Environmental organizations have generally praised the increased ambition while expressing concern about the extended timeline for developing nations. "This is progress, but the climate won't wait for political convenience," said Greenpeace International Director Jennifer Morgan. "The science demands faster action from all countries."</p>
        
        <p class="mb-4">Industry representatives have expressed cautious support, with many highlighting the need for technological innovation to meet the new targets. "These goals can only be achieved with massive investment in new clean energy technologies," said International Chamber of Commerce Secretary General John W.H. Denton. "The private sector is ready to deliver solutions, but we need consistent policy frameworks to guide long-term investments."</p>
        
        <p class="mb-4">Oil-producing nations, which historically have resisted ambitious climate accords, showed unusual willingness to engage in the process. Saudi Arabia's Minister of Energy, Prince Abdulaziz bin Salman, acknowledged that "diversification away from fossil fuel dependence is now an economic necessity, not merely an environmental choice."</p>
        
        <h2 class="text-2xl font-bold font-playfair mb-3 mt-6">Implementation Challenges</h2>
        
        <p class="mb-4">Despite the diplomatic success, significant challenges remain for implementing the agreement. Many developing nations have expressed concern about their capacity to monitor and report emissions accurately. Additionally, questions remain about how the climate resilience fund will be financed and administered.</p>
        
        <p class="mb-4">Climate policy experts also point to domestic political obstacles in several key countries. "International agreements are just the beginning," explained Dr. Maria Rodriguez of the Climate Policy Institute. "The real test comes when governments attempt to translate these commitments into national legislation and regulatory frameworks."</p>
        
        <p class="mb-4">The first test of the new agreement will come next year, when countries must submit updated climate plans under the accelerated three-year cycle. These plans will need to demonstrate concrete pathways to achieving the more ambitious targets, including sector-specific strategies for industry, transportation, and energy production.</p>
      `,
      category: "Politics",
      imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200",
      readTime: "8 min read",
      date: "Apr 14, 2025",
      author: {
        name: "Emma Richardson",
        role: "Political Correspondent",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg"
      },
      tags: ["Climate Change", "Politics", "Global Summit", "Environment"]
    }
  ];
  
  return articles.find(article => article.id === id);
};

// Function to get recommended articles
const getRecommendedArticles = (currentId: string) => {
  // In a real app, this would be based on category, tags, or user preferences
  return [
    {
      id: "102",
      title: "The Rising Concerns of AI Generated Content in Academia",
      excerpt: "Universities are grappling with new challenges as AI tools become more sophisticated.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: "103",
      title: "Quantum Computing Milestone Achieved By Research Team",
      excerpt: "Scientists announce breakthrough that could revolutionize computing power.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      category: "Science"
    },
    {
      id: "202",
      title: "Election Polls Show Tight Race in Key Battleground States",
      excerpt: "Latest polling data reveals neck-and-neck competition with just weeks until voting day.",
      imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      category: "Politics"
    }
  ];
};

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : null;
  const recommendedArticles = id ? getRecommendedArticles(id) : [];

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
        {article ? (
          <div className="container mx-auto px-4 max-w-5xl">
            <a href="javascript:history.back()" className="inline-flex items-center text-dimgray hover:text-flame mb-6 transition-colors animate-fade-in">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back</span>
            </a>

            <div className="mb-8 animate-fade-in">
              <div className="mb-2">
                <span className="bg-flame text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-midnight font-playfair mb-4 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-lg text-dimgray mb-6 max-w-3xl">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="font-medium text-jet">{article.author.name}</p>
                    <p className="text-dimgray text-sm">{article.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-dimgray text-sm">
                  <span>{article.date}</span>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8 rounded-xl overflow-hidden animate-fade-in">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-16 flex md:flex-col items-center gap-4 md:sticky md:top-24 h-fit animate-fade-in">
                <button className="p-3 rounded-full border border-slate hover:bg-slate/20 transition-colors text-dimgray">
                  <Share2 size={18} />
                </button>
                <button className="p-3 rounded-full border border-slate hover:bg-slate/20 transition-colors text-dimgray">
                  <Bookmark size={18} />
                </button>
                <button className="p-3 rounded-full border border-slate hover:bg-slate/20 transition-colors text-dimgray">
                  <MessageSquare size={18} />
                </button>
              </div>
              
              <div className="flex-1 animate-fade-in">
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </article>
                
                <div className="mt-8 flex flex-wrap gap-2">
                  {article.tags.map(tag => (
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
                    {recommendedArticles.map(article => (
                      <Card 
                        key={article.id} 
                        className="overflow-hidden hover:shadow-md transition-shadow duration-300 hover-scale border-slate"
                      >
                        <a href={`/article/${article.id}`} className="block">
                          <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                            <img 
                              src={article.imageUrl} 
                              alt={article.title}
                              className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="mb-1">
                              <span className="text-xs font-medium text-flame">
                                {article.category}
                              </span>
                            </div>
                            <h3 className="text-sm font-bold mb-1 text-jet line-clamp-2 font-playfair">
                              {article.title}
                            </h3>
                            <div className="flex items-center text-dimgray text-xs">
                              <Clock size={10} className="mr-1" />
                              <span>{article.readTime}</span>
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
        ) : (
          <div className="container mx-auto px-4 max-w-6xl text-center py-20">
            <h2 className="text-2xl text-dimgray mb-4">Article not found</h2>
            <p className="text-dimgray mb-6">The article you're looking for may have been moved or deleted</p>
            <a href="/" className="inline-block px-6 py-3 bg-flame text-white rounded-md hover:bg-midnight transition-colors">
              Back to Home
            </a>
          </div>
        )}
      </main>
      
      <TrendingTopics />
      <Footer />
    </div>
  );
};

export default ArticlePage;
