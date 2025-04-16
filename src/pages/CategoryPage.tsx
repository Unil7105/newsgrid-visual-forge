
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data - in a real app, this would come from an API based on the category
const getCategoryArticles = (category: string) => {
  const articles = {
    technology: [
      {
        id: 101,
        title: "Apple's New VR Headset Sees Strong Pre-orders Despite High Price",
        excerpt: "The tech giant's new device is selling well in spite of its premium positioning in the market. Industry analysts point to the company's loyal customer base and cutting-edge features as key factors driving demand.",
        imageUrl: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&q=80&w=800",
        readTime: "4 min read",
        date: "Apr 12, 2025",
        author: "Sarah Chen"
      },
      {
        id: 102,
        title: "The Rising Concerns of AI Generated Content in Academia",
        excerpt: "Universities are grappling with new challenges as AI tools become more sophisticated. Faculty members report increasing difficulty in distinguishing between student-written papers and AI-generated content, raising questions about academic integrity.",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        readTime: "7 min read",
        date: "Apr 10, 2025",
        author: "Michael Rodriguez"
      },
      {
        id: 103,
        title: "Quantum Computing Milestone Achieved By Research Team",
        excerpt: "Scientists announce breakthrough that could revolutionize computing power. The team successfully demonstrated quantum advantage on a practical problem, potentially opening the door to real-world applications years ahead of schedule.",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        readTime: "5 min read",
        date: "Apr 9, 2025",
        author: "Dr. Eliza Thornton"
      },
      {
        id: 104,
        title: "New Programming Language Aims to Simplify AI Development",
        excerpt: "A team of developers has released an open-source programming language specifically designed for artificial intelligence applications. The language promises to reduce development time while improving readability and maintenance.",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        readTime: "6 min read",
        date: "Apr 8, 2025",
        author: "James Wilson"
      },
      {
        id: 105,
        title: "Tech Companies Shifting Focus to Sustainable Manufacturing",
        excerpt: "Major tech firms announce new initiatives to reduce their environmental impact. The industry-wide shift includes commitments to carbon-neutral production, recyclable components, and extended device lifecycles.",
        imageUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
        readTime: "5 min read",
        date: "Apr 7, 2025",
        author: "Anna Patel"
      },
      {
        id: 106,
        title: "Cybersecurity Experts Warn of New Sophisticated Phishing Techniques",
        excerpt: "Security researchers have identified an alarming rise in advanced phishing attacks targeting corporate employees. The new methods combine AI-generated content with deep social engineering to bypass traditional security measures.",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
        readTime: "8 min read",
        date: "Apr 5, 2025",
        author: "Thomas Blackwell"
      },
    ],
    politics: [
      {
        id: 201,
        title: "Global Summit on Climate Change Produces New Agreements",
        excerpt: "World leaders have committed to more ambitious goals following intense negotiations. The revised targets include faster transitions to renewable energy and increased funding for climate adaptation in vulnerable regions.",
        imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
        readTime: "8 min read",
        date: "Apr 14, 2025",
        author: "Emma Richardson"
      },
      {
        id: 202,
        title: "Election Polls Show Tight Race in Key Battleground States",
        excerpt: "Latest polling data reveals neck-and-neck competition with just weeks until voting day. Analysts point to economic concerns and healthcare policy as the primary issues driving voter decisions in these crucial regions.",
        imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800",
        readTime: "6 min read",
        date: "Apr 13, 2025",
        author: "Daniel Foster"
      },
      {
        id: 203,
        title: "New Trade Agreements Set to Reshape Regional Economics",
        excerpt: "Experts analyze the potential impact of recently signed international trade deals. The agreements are expected to boost export opportunities for agricultural products while introducing new regulatory frameworks for digital services.",
        imageUrl: "https://images.unsplash.com/photo-1444664597500-035db93e2323?auto=format&fit=crop&q=80&w=800",
        readTime: "5 min read",
        date: "Apr 11, 2025",
        author: "Sophia Martinez"
      },
      {
        id: 204,
        title: "Local Governments Implement Innovative Housing Solutions",
        excerpt: "Several major cities have launched experimental programs to address affordable housing shortages. The initiatives combine zoning reforms, public-private partnerships, and new construction technologies to increase housing supply.",
        imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800",
        readTime: "7 min read",
        date: "Apr 9, 2025",
        author: "Marcus Johnson"
      },
      {
        id: 205,
        title: "Constitutional Reform Proposal Garners Widespread Debate",
        excerpt: "Legal scholars and political activists weigh in on controversial amendments being considered by the legislature. The proposed changes would alter the balance of power between branches of government and revise electoral processes.",
        imageUrl: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?auto=format&fit=crop&q=80&w=800",
        readTime: "9 min read",
        date: "Apr 7, 2025",
        author: "Dr. Alexandra Kim"
      },
    ],
    business: [
      {
        id: 301,
        title: "Startup Secures Record Funding for Sustainable Energy Storage",
        excerpt: "A cleantech venture has raised $300 million in Series B funding to scale production of its innovative battery technology. The company claims its solution offers twice the energy density of current lithium-ion batteries at a competitive price point.",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
        readTime: "5 min read",
        date: "Apr 15, 2025", 
        author: "Jordan Taylor"
      },
      {
        id: 302,
        title: "Major Retailer Announces Shift to Hybrid Shopping Experience",
        excerpt: "One of the largest retail chains is transforming its brick-and-mortar locations into integrated digital-physical spaces. The redesigned stores will feature expanded pickup areas, augmented reality product displays, and personalized shopping assistance.",
        imageUrl: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800",
        readTime: "6 min read",
        date: "Apr 13, 2025",
        author: "Rachel Wong"
      },
      {
        id: 303,
        title: "Central Bank Signals New Approach to Inflation Targets",
        excerpt: "Financial markets respond to policy shifts announced during yesterday's monetary policy meeting. The updated framework acknowledges structural economic changes and introduces more flexibility in how inflation is measured and managed.",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
        readTime: "7 min read",
        date: "Apr 11, 2025",
        author: "Victor Alvarez"
      },
    ],
    science: [
      {
        id: 401,
        title: "Breakthrough in Fusion Energy Brings Commercial Viability Closer",
        excerpt: "Scientists at a national laboratory have maintained a fusion reaction for a record duration, marking significant progress toward practical energy generation. The achievement addresses one of the key challenges that has limited fusion's commercial application.",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        readTime: "6 min read",
        date: "Apr 14, 2025",
        author: "Dr. Neil Crawford"
      },
      {
        id: 402,
        title: "Marine Biologists Discover Unexpected Ecosystem in Deep Ocean Trench",
        excerpt: "A research expedition has documented dozens of previously unknown species living in one of Earth's most extreme environments. The findings challenge existing theories about the limits of life and may have implications for the search for extraterrestrial organisms.",
        imageUrl: "https://images.unsplash.com/photo-1581093458791-9ea22992d7c2?auto=format&fit=crop&q=80&w=800",
        readTime: "8 min read",
        date: "Apr 12, 2025",
        author: "Dr. Laura Chen"
      },
      {
        id: 403,
        title: "Revolutionary Material Could Transform Electronics Manufacturing",
        excerpt: "Researchers have developed a new type of semiconductor with unique electrical properties that could lead to faster, more efficient devices. The material can be produced using existing manufacturing processes, potentially enabling rapid adoption by industry.",
        imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
        readTime: "5 min read",
        date: "Apr 10, 2025",
        author: "Dr. Amir Hassan"
      },
    ],
    health: [
      {
        id: 501,
        title: "Clinical Trial Shows Promise for Early Alzheimer's Intervention",
        excerpt: "A novel treatment approach targeting protein aggregation has demonstrated significant benefits in patients with mild cognitive impairment. The multi-year study suggests that early intervention may slow or even halt disease progression in some individuals.",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
        readTime: "7 min read",
        date: "Apr 15, 2025",
        author: "Dr. Maria Sanchez"
      },
      {
        id: 502,
        title: "Medical Researchers Develop Improved Diabetes Management System",
        excerpt: "A team of biomedical engineers has created an integrated monitoring and delivery device that automatically adjusts insulin levels. The system combines continuous glucose monitoring with machine learning to predict and prevent blood sugar fluctuations.",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
        readTime: "6 min read",
        date: "Apr 13, 2025",
        author: "Dr. James Wilson"
      },
      {
        id: 503,
        title: "Study Reveals Unexpected Benefits of Moderate Exercise in Older Adults",
        excerpt: "New research challenges conventional wisdom about exercise intensity for seniors. The findings suggest that even light physical activity can significantly improve cognitive function and emotional well-being when performed consistently.",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
        readTime: "5 min read",
        date: "Apr 11, 2025",
        author: "Dr. Elizabeth Park"
      },
    ]
  };
  
  // Return articles for the requested category, or empty array if not found
  return articles[category as keyof typeof articles] || [];
};

// Function to get proper title case for the category
const getCategoryTitle = (category: string) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryTitle = category ? getCategoryTitle(category) : '';
  const articles = category ? getCategoryArticles(category) : [];

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

          {articles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 animate-fade-in">
                {articles.map((article) => (
                  <Card 
                    key={article.id} 
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-scale border-slate"
                  >
                    <a href={`/article/${article.id}`} className="block">
                      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="flex justify-between items-center text-dimgray text-xs mb-2">
                          <span>{article.date}</span>
                          <div className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-jet line-clamp-2 font-playfair">
                          {article.title}
                        </h3>
                        <p className="text-dimgray mb-3 text-sm line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-dimgray">By {article.author}</span>
                          <span className="text-flame text-sm font-medium story-link">Read More</span>
                        </div>
                      </CardContent>
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
              <h2 className="text-2xl text-dimgray mb-4">No articles found in this category</h2>
              <p className="text-dimgray mb-6">Try exploring one of our other categories</p>
              <a href="/" className="inline-block px-6 py-3 bg-flame text-white rounded-md hover:bg-midnight transition-colors">
                Back to Home
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
