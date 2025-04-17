
// Article data structure
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  readTime: string;
  date: string;
  author: string;
  tags?: string[];
}

// Articles organized by category
export const categoryArticles: Record<string, Article[]> = {
  technology: [
    {
      id: 101,
      title: "Apple's New VR Headset Sees Strong Pre-orders Despite High Price",
      excerpt: "The tech giant's new device is selling well in spite of its premium positioning in the market. Industry analysts point to the company's loyal customer base and cutting-edge features as key factors driving demand.",
      imageUrl: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min read",
      date: "Apr 12, 2025",
      author: "Sarah Chen",
      tags: ["VR", "Apple", "Technology"]
    },
    {
      id: 102,
      title: "The Rising Concerns of AI Generated Content in Academia",
      excerpt: "Universities are grappling with new challenges as AI tools become more sophisticated. Faculty members report increasing difficulty in distinguishing between student-written papers and AI-generated content, raising questions about academic integrity.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 10, 2025",
      author: "Michael Rodriguez",
      tags: ["AI", "Education", "Ethics"]
    },
    {
      id: 103,
      title: "Quantum Computing Milestone Achieved By Research Team",
      excerpt: "Scientists announce breakthrough that could revolutionize computing power. The team successfully demonstrated quantum advantage on a practical problem, potentially opening the door to real-world applications years ahead of schedule.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 9, 2025",
      author: "Dr. Eliza Thornton",
      tags: ["Quantum Computing", "Research", "Innovation"]
    },
    {
      id: 104,
      title: "New Programming Language Aims to Simplify AI Development",
      excerpt: "A team of developers has released an open-source programming language specifically designed for artificial intelligence applications. The language promises to reduce development time while improving readability and maintenance.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 8, 2025",
      author: "James Wilson",
      tags: ["Programming", "AI", "Open Source"]
    },
    {
      id: 105,
      title: "Tech Companies Shifting Focus to Sustainable Manufacturing",
      excerpt: "Major tech firms announce new initiatives to reduce their environmental impact. The industry-wide shift includes commitments to carbon-neutral production, recyclable components, and extended device lifecycles.",
      imageUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 7, 2025",
      author: "Anna Patel",
      tags: ["Sustainability", "Manufacturing", "Technology"]
    },
    {
      id: 106,
      title: "Cybersecurity Experts Warn of New Sophisticated Phishing Techniques",
      excerpt: "Security researchers have identified an alarming rise in advanced phishing attacks targeting corporate employees. The new methods combine AI-generated content with deep social engineering to bypass traditional security measures.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Apr 5, 2025",
      author: "Thomas Blackwell",
      tags: ["Cybersecurity", "Phishing", "Security"]
    },
    {
      id: 107,
      title: "The Future of Electric Vehicles in Urban Transportation",
      excerpt: "Cities worldwide are adopting innovative approaches to integrate electric vehicles into public transit systems. New charging infrastructure and traffic management techniques are being developed to accommodate the growing EV market.",
      imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba13938c9?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 3, 2025",
      author: "Marcus Johnson",
      tags: ["Electric Vehicles", "Urban Planning", "Transportation"]
    },
    {
      id: 108,
      title: "Wearable Technology Market Expected to Triple by 2030",
      excerpt: "Industry analysis predicts explosive growth in health-focused wearable devices. Advancements in sensor technology and battery life are driving consumer adoption across all age demographics.",
      imageUrl: "https://images.unsplash.com/photo-1539437829697-1b4ed5aebd19?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 1, 2025",
      author: "Dr. Katherine Zhang",
      tags: ["Wearables", "Market Trends", "Health Tech"]
    },
    {
      id: 109,
      title: "Revolutionary Augmented Reality Platform Launches for Education",
      excerpt: "A new AR system promises to transform how students interact with learning materials. The technology creates immersive 3D environments that adapt to individual learning styles and paces.",
      imageUrl: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Mar 30, 2025",
      author: "Lisa Montgomery",
      tags: ["Augmented Reality", "Education", "Technology"]
    },
    {
      id: 110,
      title: "Tech Leaders Form Consortium to Address Digital Divide",
      excerpt: "Major technology companies have joined forces to expand internet access in underserved regions. The initiative combines satellite technology with local infrastructure development to connect remote communities.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Mar 28, 2025",
      author: "Carlos Rivera",
      tags: ["Digital Inclusion", "Internet Access", "Global Tech"]
    }
  ],
  
  politics: [
    {
      id: 201,
      title: "Global Summit on Climate Change Produces New Agreements",
      excerpt: "World leaders have committed to more ambitious goals following intense negotiations. The revised targets include faster transitions to renewable energy and increased funding for climate adaptation in vulnerable regions.",
      imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Apr 14, 2025",
      author: "Emma Richardson",
      tags: ["Climate Change", "Global Summit", "Environment"]
    },
    {
      id: 202,
      title: "Election Polls Show Tight Race in Key Battleground States",
      excerpt: "Latest polling data reveals neck-and-neck competition with just weeks until voting day. Analysts point to economic concerns and healthcare policy as the primary issues driving voter decisions in these crucial regions.",
      imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 13, 2025",
      author: "Daniel Foster",
      tags: ["Elections", "Polling", "Voting"]
    },
    {
      id: 203,
      title: "New Trade Agreements Set to Reshape Regional Economics",
      excerpt: "Experts analyze the potential impact of recently signed international trade deals. The agreements are expected to boost export opportunities for agricultural products while introducing new regulatory frameworks for digital services.",
      imageUrl: "https://images.unsplash.com/photo-1444664597500-035db93e2323?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 11, 2025",
      author: "Sophia Martinez",
      tags: ["Trade", "Economics", "Global Relations"]
    },
    {
      id: 204,
      title: "Local Governments Implement Innovative Housing Solutions",
      excerpt: "Several major cities have launched experimental programs to address affordable housing shortages. The initiatives combine zoning reforms, public-private partnerships, and new construction technologies to increase housing supply.",
      imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 9, 2025",
      author: "Marcus Johnson",
      tags: ["Housing", "Urban Development", "Policy"]
    },
    {
      id: 205,
      title: "Constitutional Reform Proposal Garners Widespread Debate",
      excerpt: "Legal scholars and political activists weigh in on controversial amendments being considered by the legislature. The proposed changes would alter the balance of power between branches of government and revise electoral processes.",
      imageUrl: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?auto=format&fit=crop&q=80&w=800",
      readTime: "9 min read",
      date: "Apr 7, 2025",
      author: "Dr. Alexandra Kim",
      tags: ["Constitution", "Reform", "Governance"]
    },
    {
      id: 206,
      title: "Diplomatic Tensions Rise Following Controversial Statement",
      excerpt: "International relations experts analyze the implications of recent comments made by a prominent world leader. The statement has triggered diplomatic protests and calls for clarification from several allied nations.",
      imageUrl: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 5, 2025",
      author: "Richard Torres",
      tags: ["Diplomacy", "International Relations", "Politics"]
    },
    {
      id: 207,
      title: "Grassroots Movement Gains Momentum Ahead of Policy Vote",
      excerpt: "A coalition of community organizations has mobilized unprecedented support for environmental legislation. The movement has successfully pressured several key legislators to reconsider their positions.",
      imageUrl: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min read",
      date: "Apr 3, 2025",
      author: "Cassandra Wright",
      tags: ["Grassroots", "Activism", "Legislation"]
    },
    {
      id: 208,
      title: "Political Parties Announce Major Platform Shifts Ahead of Convention",
      excerpt: "Both major political parties have unveiled significant policy changes that reflect evolving voter priorities. Analysts note a convergence on certain economic issues while social policy differences remain stark.",
      imageUrl: "https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&q=80&w=800", 
      readTime: "7 min read",
      date: "Apr 1, 2025",
      author: "Jennifer Matthews",
      tags: ["Political Parties", "Policy", "Elections"]
    },
    {
      id: 209,
      title: "Government Launches Initiative to Modernize Critical Infrastructure",
      excerpt: "A comprehensive plan to upgrade aging systems has received bipartisan support in the legislature. The multi-year project will address transportation networks, energy grids, and digital communications systems nationwide.",
      imageUrl: "https://images.unsplash.com/photo-1498354136128-58f790194fa7?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read", 
      date: "Mar 30, 2025",
      author: "Alexander Washington",
      tags: ["Infrastructure", "Government", "Public Works"]
    },
    {
      id: 210,
      title: "International Court Issues Landmark Ruling on Human Rights Case",
      excerpt: "Legal experts describe the decision as a watershed moment for international law enforcement. The ruling establishes new precedents for holding entities accountable for rights violations across national boundaries.",
      imageUrl: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Mar 28, 2025", 
      author: "Dr. Elena Cortez",
      tags: ["International Law", "Human Rights", "Legal"]
    }
  ],
  
  business: [
    {
      id: 301,
      title: "Startup Secures Record Funding for Sustainable Energy Storage",
      excerpt: "A cleantech venture has raised $300 million in Series B funding to scale production of its innovative battery technology. The company claims its solution offers twice the energy density of current lithium-ion batteries at a competitive price point.",
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 15, 2025", 
      author: "Jordan Taylor",
      tags: ["Startup", "CleanTech", "Funding"]
    },
    {
      id: 302,
      title: "Major Retailer Announces Shift to Hybrid Shopping Experience",
      excerpt: "One of the largest retail chains is transforming its brick-and-mortar locations into integrated digital-physical spaces. The redesigned stores will feature expanded pickup areas, augmented reality product displays, and personalized shopping assistance.",
      imageUrl: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 13, 2025",
      author: "Rachel Wong",
      tags: ["Retail", "Digital Transformation", "Shopping"]
    },
    {
      id: 303,
      title: "Central Bank Signals New Approach to Inflation Targets",
      excerpt: "Financial markets respond to policy shifts announced during yesterday's monetary policy meeting. The updated framework acknowledges structural economic changes and introduces more flexibility in how inflation is measured and managed.",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 11, 2025",
      author: "Victor Alvarez",
      tags: ["Banking", "Inflation", "Economy"]
    },
    {
      id: 304,
      title: "Supply Chain Innovations Help Companies Weather Global Disruptions",
      excerpt: "Businesses are implementing advanced analytics and diversified sourcing strategies to build resilience. The new approaches have proven effective during recent logistical challenges caused by regional conflicts and natural disasters.",
      imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c1?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Apr 9, 2025",
      author: "Nina Patel",
      tags: ["Supply Chain", "Logistics", "Business Strategy"]
    },
    {
      id: 305,
      title: "Workplace Flexibility Becomes Key Factor in Talent Acquisition",
      excerpt: "Companies offering hybrid and remote work options report significant advantages in recruitment and retention. HR professionals cite improved work-life balance and reduced commuting costs as major benefits for employees.",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 7, 2025",
      author: "Mark Stevens",
      tags: ["Remote Work", "HR", "Employment"]
    },
    {
      id: 306,
      title: "Cryptocurrency Exchange Introduces Enhanced Security Measures",
      excerpt: "Following industry concerns about digital asset safety, a major crypto platform has implemented multi-layered protection protocols. The new system combines biometric verification with behavioral analysis to prevent unauthorized transactions.",
      imageUrl: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 5, 2025",
      author: "Jason Kim",
      tags: ["Cryptocurrency", "Security", "Fintech"]
    },
    {
      id: 307,
      title: "Major Merger Creates New Leader in Digital Media Landscape",
      excerpt: "Two prominent content platforms have combined operations in a deal valued at $4.5 billion. The merger is expected to accelerate content production while streamlining distribution across multiple channels.",
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 3, 2025",
      author: "Tanya Singh",
      tags: ["Mergers", "Media", "Business Strategy"]
    },
    {
      id: 308,
      title: "Sustainable Investment Funds See Record Inflows as ESG Criteria Evolve",
      excerpt: "Financial institutions report unprecedented growth in environmentally and socially conscious investment products. New standardized reporting frameworks are helping investors make more informed decisions about corporate sustainability practices.",
      imageUrl: "https://images.unsplash.com/photo-1604689598793-b43e3ade0cbe?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 1, 2025",
      author: "Harrison Ford",
      tags: ["ESG", "Investment", "Sustainability"]
    },
    {
      id: 309,
      title: "Global Shipping Industry Embraces Autonomous Navigation Technology",
      excerpt: "Leading maritime companies are integrating AI-powered systems to optimize routes and reduce crew requirements. Early adopters report significant fuel savings and improved safety metrics across their fleets.",
      imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c1?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Mar 30, 2025",
      author: "Captain Lawrence Chen",
      tags: ["Shipping", "Autonomous", "Maritime"]
    },
    {
      id: 310,
      title: "Small Business Lending Platform Disrupts Traditional Banking Model",
      excerpt: "A fintech startup has developed an alternative credit assessment system that's opening doors for entrepreneurs. The platform analyzes non-traditional metrics to evaluate business viability, resulting in higher approval rates for qualified applicants.",
      imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Mar 28, 2025",
      author: "Michelle Rodriguez",
      tags: ["Fintech", "Small Business", "Lending"]
    }
  ],
  
  science: [
    {
      id: 401,
      title: "Breakthrough in Fusion Energy Brings Commercial Viability Closer",
      excerpt: "Scientists at a national laboratory have maintained a fusion reaction for a record duration, marking significant progress toward practical energy generation. The achievement addresses one of the key challenges that has limited fusion's commercial application.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 14, 2025",
      author: "Dr. Neil Crawford",
      tags: ["Fusion", "Energy", "Physics"]
    },
    {
      id: 402,
      title: "Marine Biologists Discover Unexpected Ecosystem in Deep Ocean Trench",
      excerpt: "A research expedition has documented dozens of previously unknown species living in one of Earth's most extreme environments. The findings challenge existing theories about the limits of life and may have implications for the search for extraterrestrial organisms.",
      imageUrl: "https://images.unsplash.com/photo-1581093458791-9ea22992d7c2?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Apr 12, 2025",
      author: "Dr. Laura Chen",
      tags: ["Marine Biology", "Ecosystems", "Discovery"]
    },
    {
      id: 403,
      title: "Revolutionary Material Could Transform Electronics Manufacturing",
      excerpt: "Researchers have developed a new type of semiconductor with unique electrical properties that could lead to faster, more efficient devices. The material can be produced using existing manufacturing processes, potentially enabling rapid adoption by industry.",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 10, 2025",
      author: "Dr. Amir Hassan",
      tags: ["Materials Science", "Electronics", "Manufacturing"]
    },
    {
      id: 404,
      title: "Astronomers Detect Unusual Radio Signals from Distant Galaxy",
      excerpt: "An international team of researchers has observed repeating patterns in radio emissions from a galaxy billions of light-years away. While natural explanations are being investigated, the precision of the signals has sparked scientific debate.",
      imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 8, 2025",
      author: "Dr. Sophia Rodriguez",
      tags: ["Astronomy", "Radio Signals", "Space"]
    },
    {
      id: 405,
      title: "New Mathematical Model Improves Weather Prediction Accuracy",
      excerpt: "Meteorologists are implementing an advanced mathematical framework that significantly enhances forecast precision. Early tests show particular improvements in predicting extreme weather events and long-term climate patterns.",
      imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 6, 2025",
      author: "Dr. Michael Chen",
      tags: ["Meteorology", "Mathematics", "Climate"]
    },
    {
      id: 406,
      title: "Genetic Research Identifies Promising Target for Neurodegenerative Diseases",
      excerpt: "Scientists have discovered a specific protein pathway that may play a crucial role in multiple neurodegenerative conditions. The finding could lead to new therapeutic approaches for Alzheimer's, Parkinson's, and related disorders.",
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
      readTime: "9 min read",
      date: "Apr 4, 2025",
      author: "Dr. Emily Harrison",
      tags: ["Genetics", "Neuroscience", "Medicine"]
    },
    {
      id: 407,
      title: "Study Reveals Surprising Connection Between Gut Microbiome and Immune Response",
      excerpt: "Researchers have identified specific bacterial populations that significantly influence immune system development and function. The discovery may lead to new preventative approaches for autoimmune disorders and inflammatory conditions.",
      imageUrl: "https://images.unsplash.com/photo-1579154341098-e4e7a7a88f89?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 2, 2025",
      author: "Dr. Jonathan Wei",
      tags: ["Microbiology", "Immunology", "Health"]
    },
    {
      id: 408,
      title: "Paleontologists Unearth Fossilized Remains of Previously Unknown Dinosaur Species",
      excerpt: "The remarkably well-preserved specimen discovered in a remote region provides valuable insights into the evolution of avian characteristics. Initial analysis suggests the creature represents a transitional form between dinosaurs and modern birds.",
      imageUrl: "https://images.unsplash.com/photo-1606041011872-596597976b25?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Mar 31, 2025",
      author: "Dr. Rebecca Alvarez",
      tags: ["Paleontology", "Evolution", "Dinosaurs"]
    },
    {
      id: 409,
      title: "Quantum Sensor Technology Enables Unprecedented Measurement Precision",
      excerpt: "Engineers have created sensors that leverage quantum mechanics to achieve extraordinary sensitivity in detecting minute physical changes. The technology has applications ranging from medical diagnostics to geological survey and navigation systems.",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Mar 29, 2025",
      author: "Dr. Alexander Hayes",
      tags: ["Quantum Physics", "Sensors", "Engineering"]
    },
    {
      id: 410,
      title: "Researchers Demonstrate Successful Carbon Capture at Industrial Scale",
      excerpt: "A pilot project has proven the effectiveness of a novel carbon capture system when integrated with existing industrial infrastructure. The approach significantly reduces implementation costs while achieving higher-than-expected CO2 absorption rates.",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Mar 27, 2025",
      author: "Dr. Nathan Peterson",
      tags: ["Carbon Capture", "Climate Science", "Engineering"]
    },
    {
      id: 411,
      title: "Pioneering Brain-Computer Interface Achieves New Milestone in Human Trials",
      excerpt: "Volunteers with mobility impairments demonstrate remarkable control of digital interfaces using only thought patterns. The non-invasive system represents a significant advance in assistive technology for people with paralysis and other conditions.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", 
      readTime: "8 min read",
      date: "Mar 25, 2025",
      author: "Dr. Sarah Williams",
      tags: ["Neurotechnology", "Assistive Tech", "Medical Research"]
    },
    {
      id: 412,
      title: "Conservation Biologists Report Success in Endangered Species Recovery Program",
      excerpt: "A coordinated international effort has resulted in population growth for several critically endangered species. The approach combines habitat restoration, breeding programs, and community engagement to create sustainable conservation outcomes.",
      imageUrl: "https://images.unsplash.com/photo-1564935799028-d8347f148506?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Mar 23, 2025", 
      author: "Dr. Marco Santini",
      tags: ["Conservation", "Biodiversity", "Wildlife"]
    }
  ],
  
  health: [
    {
      id: 501,
      title: "Clinical Trial Shows Promise for Early Alzheimer's Intervention",
      excerpt: "A novel treatment approach targeting protein aggregation has demonstrated significant benefits in patients with mild cognitive impairment. The multi-year study suggests that early intervention may slow or even halt disease progression in some individuals.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 15, 2025",
      author: "Dr. Maria Sanchez",
      tags: ["Alzheimer's", "Clinical Trials", "Neurology"]
    },
    {
      id: 502,
      title: "Medical Researchers Develop Improved Diabetes Management System",
      excerpt: "A team of biomedical engineers has created an integrated monitoring and delivery device that automatically adjusts insulin levels. The system combines continuous glucose monitoring with machine learning to predict and prevent blood sugar fluctuations.",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 13, 2025",
      author: "Dr. James Wilson",
      tags: ["Diabetes", "Medical Devices", "Healthcare Technology"]
    },
    {
      id: 503,
      title: "Study Reveals Unexpected Benefits of Moderate Exercise in Older Adults",
      excerpt: "New research challenges conventional wisdom about exercise intensity for seniors. The findings suggest that even light physical activity can significantly improve cognitive function and emotional well-being when performed consistently.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 11, 2025",
      author: "Dr. Elizabeth Park",
      tags: ["Exercise", "Aging", "Health Research"]
    },
    {
      id: 504,
      title: "Revolutionary Surgical Technique Minimizes Recovery Time",
      excerpt: "Surgeons have developed a less invasive approach for complex abdominal procedures that significantly reduces hospital stays. Patients report less pain and faster return to normal activities compared to traditional methods.",
      imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 9, 2025",
      author: "Dr. Robert Kim",
      tags: ["Surgery", "Medical Innovation", "Recovery"]
    },
    {
      id: 505,
      title: "Mental Health Professionals Adopt New Protocol for Trauma Treatment",
      excerpt: "Psychologists are reporting improved outcomes using an integrated therapy approach for patients with complex trauma. The protocol combines elements from several established treatment modalities with personalized care planning.",
      imageUrl: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Apr 7, 2025",
      author: "Dr. Samantha Brooks",
      tags: ["Mental Health", "Trauma", "Psychology"]
    },
    {
      id: 506,
      title: "Nutritional Study Identifies Key Dietary Factors in Longevity",
      excerpt: "Research analyzing dietary patterns across multiple populations has isolated specific nutritional components associated with extended healthy lifespan. The findings emphasize the importance of certain food combinations rather than individual nutrients.",
      imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 5, 2025",
      author: "Dr. David Nguyen",
      tags: ["Nutrition", "Longevity", "Diet"]
    },
    {
      id: 507,
      title: "Breakthrough in Vaccine Development Offers Hope for Malaria Prevention",
      excerpt: "After decades of research, scientists have created a vaccine showing unprecedented efficacy against the most dangerous strains of malaria. Clinical trials in affected regions demonstrate protection rates exceeding 80% across all age groups.",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Apr 3, 2025",
      author: "Dr. Francis Okafor",
      tags: ["Vaccines", "Malaria", "Global Health"]
    },
    {
      id: 508,
      title: "Digital Health Platform Revolutionizes Chronic Disease Management",
      excerpt: "A comprehensive telehealth system has demonstrated remarkable success in helping patients manage complex conditions. The platform connects patients with specialized care teams while providing continuous monitoring and personalized interventions.",
      imageUrl: "https://images.unsplash.com/photo-1551772412-da9e65656a69?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 1, 2025",
      author: "Dr. Christine Lee",
      tags: ["Telehealth", "Chronic Disease", "Digital Medicine"]
    },
    {
      id: 509,
      title: "Groundbreaking Research Maps Complete Neural Pathways of Emotion",
      excerpt: "Neuroscientists have created the most detailed mapping yet of how emotional responses are processed in the brain. The findings could transform treatment approaches for anxiety, depression, and other mood disorders.",
      imageUrl: "https://images.unsplash.com/photo-1559757175-7cb037169fdf?auto=format&fit=crop&q=80&w=800",
      readTime: "9 min read",
      date: "Mar 30, 2025",
      author: "Dr. Michael Rahman",
      tags: ["Neuroscience", "Emotions", "Brain Research"]
    },
    {
      id: 510,
      title: "Pediatric Hospital Implements Innovative Pain Management Protocol",
      excerpt: "A children's medical center has developed a comprehensive approach to managing pain that significantly reduces medication requirements. The system incorporates virtual reality, specialized play therapy, and family involvement in care planning.",
      imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Mar 28, 2025",
      author: "Dr. Jessica Thompson",
      tags: ["Pediatrics", "Pain Management", "Patient Care"]
    }
  ],
  
  entertainment: [
    {
      id: 601,
      title: "Highly Anticipated Sci-Fi Series Breaks Streaming Records in First Week",
      excerpt: "The big-budget adaptation of a beloved novel has surpassed all viewership expectations. Critics praise the show's visual effects, character development, and faithful interpretation of the source material.",
      imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 15, 2025",
      author: "Marcus Bennett",
      tags: ["Streaming", "Science Fiction", "Television"]
    },
    {
      id: 602,
      title: "Virtual Reality Concert Platform Transforms Music Industry",
      excerpt: "A new technology allowing fans to experience live performances in immersive 3D environments is gaining rapid adoption. Artists report reaching global audiences while creating innovative performance experiences impossible in physical venues.",
      imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 13, 2025",
      author: "Alicia Moore",
      tags: ["Virtual Reality", "Music", "Technology"]
    },
    {
      id: 603,
      title: "Independent Film Wins Major Festival Awards, Secures Distribution Deal",
      excerpt: "A low-budget production shot entirely on location with unknown actors has become the surprise hit of the festival circuit. The character-driven drama explores contemporary social issues through a deeply personal narrative.",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 11, 2025",
      author: "Sofia Chan",
      tags: ["Independent Film", "Cinema", "Film Festivals"]
    },
    {
      id: 604,
      title: "Gaming Industry Embraces Accessibility Features in Latest Releases",
      excerpt: "Major studios are implementing comprehensive options to make video games playable for people with diverse abilities. The initiative includes customizable controls, visual aids, and innovative audio cues to enhance gaming experiences.",
      imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 9, 2025",
      author: "Ryan Cooper",
      tags: ["Gaming", "Accessibility", "Technology"]
    },
    {
      id: 605,
      title: "Celebrity Chef Opens Revolutionary Dining Experience",
      excerpt: "An internationally renowned culinary artist has launched a restaurant concept combining traditional techniques with cutting-edge technology. The immersive dining experience incorporates storytelling elements and interactive food presentation.",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 7, 2025",
      author: "Nina Patel",
      tags: ["Culinary", "Restaurants", "Dining"]
    },
    {
      id: 606,
      title: "Broadway Revival Reimagines Classic Musical with Modern Perspective",
      excerpt: "A bold new production of a beloved show has captivated audiences with its contemporary interpretation. The updated staging incorporates innovative choreography and visual design while preserving the original's emotional core.",
      imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Apr 5, 2025",
      author: "Thomas Jackson",
      tags: ["Theater", "Broadway", "Performing Arts"]
    },
    {
      id: 607,
      title: "Popular Novel Series Adaptation Announces All-Star Cast",
      excerpt: "The highly anticipated screen version of a bestselling book series has revealed its impressive ensemble of actors. Production is set to begin next month with locations spanning three continents.",
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 3, 2025",
      author: "Olivia Martinez",
      tags: ["Casting News", "Book Adaptation", "Television"]
    },
    {
      id: 608,
      title: "Art Installation Uses AI to Create Ever-Changing Interactive Experience",
      excerpt: "A groundbreaking exhibit employs artificial intelligence to generate unique visual and audio compositions in response to visitor movements. The installation evolves over time, creating a different experience for each person who engages with it.",
      imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 1, 2025",
      author: "Dr. James Wilson",
      tags: ["Art", "AI", "Interactive Media"]
    },
    {
      id: 609,
      title: "Fashion Designer Debuts Collection Made Entirely From Sustainable Materials",
      excerpt: "A prominent creative director has unveiled a line featuring innovative fabrics created from agricultural waste and recycled plastics. The collection demonstrates that high fashion can be both luxurious and environmentally responsible.",
      imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Mar 30, 2025",
      author: "Isabella Wong",
      tags: ["Fashion", "Sustainability", "Design"]
    },
    {
      id: 610,
      title: "Emerging Musician's Debut Album Redefines Genre Boundaries",
      excerpt: "A young artist's first full-length release has garnered critical acclaim for its innovative fusion of traditional and electronic elements. Music industry observers predict the unique sound will influence production trends across multiple genres.",
      imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Mar 28, 2025",
      author: "Darius Johnson",
      tags: ["Music", "Album Release", "Artists"]
    }
  ],
  
  sports: [
    {
      id: 701,
      title: "Underdog Team Makes Historic Championship Run",
      excerpt: "A squad that began the season with the lowest expectations has defied odds to reach the finals. Their journey has captivated fans nationwide and revitalized interest in the league.",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 15, 2025",
      author: "Marcus Johnson",
      tags: ["Championships", "Underdogs", "Team Sports"]
    },
    {
      id: 702,
      title: "Olympic Medalist Pioneers New Training Methodology",
      excerpt: "A decorated athlete has developed an innovative approach to preparation that's being adopted across multiple sports. The technique combines advanced biomechanics with psychological conditioning to optimize performance.",
      imageUrl: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 13, 2025",
      author: "Dr. Sarah Chen",
      tags: ["Olympics", "Training", "Athletics"]
    },
    {
      id: 703,
      title: "Major League Implements Revolutionary Player Tracking System",
      excerpt: "A professional sports organization has launched advanced analytics technology that captures unprecedented performance data. The system provides real-time insights for coaches while enhancing the viewing experience for fans.",
      imageUrl: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 11, 2025",
      author: "Thomas Wilson",
      tags: ["Sports Technology", "Analytics", "Professional Sports"]
    },
    {
      id: 704,
      title: "Urban Marathon Breaks Participation Records with Inclusive Approach",
      excerpt: "A city's signature running event has attracted unprecedented numbers through initiatives designed to welcome athletes of all abilities. The revamped event features multiple distance options and specialized support services.",
      imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 9, 2025",
      author: "Jessica Martinez",
      tags: ["Marathon", "Running", "Inclusivity"]
    },
    {
      id: 705,
      title: "Youth Sports Programs Show Long-Term Benefits in New Study",
      excerpt: "Research tracking participants over two decades reveals significant advantages in physical and mental health outcomes. The findings highlight the importance of early access to organized athletic activities for child development.",
      imageUrl: "https://images.unsplash.com/photo-1562071707-7249ab429b2a?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min read",
      date: "Apr 7, 2025",
      author: "Dr. Michael Reynolds",
      tags: ["Youth Sports", "Health", "Child Development"]
    },
    {
      id: 706,
      title: "Veteran Athlete's Comeback Story Inspires Millions",
      excerpt: "After a career-threatening injury and two years of rehabilitation, a beloved sports figure has returned to competition at the highest level. Their journey has been documented in an award-winning series that highlights the recovery process.",
      imageUrl: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Apr 5, 2025",
      author: "Robert Davis",
      tags: ["Comeback", "Inspiration", "Rehabilitation"]
    },
    {
      id: 707,
      title: "International Tournament Expands to Include Developing Regions",
      excerpt: "A major sporting competition has announced a restructured qualification system that provides greater opportunities for teams from emerging markets. The change aims to increase global participation and develop talent worldwide.",
      imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Apr 3, 2025",
      author: "Carlos Mendoza",
      tags: ["International Sports", "Development", "Competition"]
    },
    {
      id: 708,
      title: "Breakthrough in Sports Medicine Accelerates Recovery Time",
      excerpt: "Medical researchers have developed a treatment protocol that significantly reduces healing periods for common athletic injuries. The approach combines targeted cellular therapy with customized rehabilitation exercises.",
      imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min read",
      date: "Apr 1, 2025",
      author: "Dr. Alisha Patel",
      tags: ["Sports Medicine", "Rehabilitation", "Health"]
    },
    {
      id: 709,
      title: "Extreme Sports Competition Introduces Environmental Conservation Initiative",
      excerpt: "An adventure sports event has launched a comprehensive sustainability program alongside its athletic challenges. Participants engage in conservation projects at competition sites as part of their involvement.",
      imageUrl: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      date: "Mar 30, 2025",
      author: "Emma Blackwell",
      tags: ["Extreme Sports", "Environment", "Conservation"]
    },
    {
      id: 710,
      title: "Legendary Coach Shares Revolutionary Leadership Philosophy in New Book",
      excerpt: "A highly successful athletic director has published insights from their decades-long career guiding teams to championships. The methodology emphasizes character development alongside competitive excellence.",
      imageUrl: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min read",
      date: "Mar 28, 2025",
      author: "Coach James Richardson",
      tags: ["Coaching", "Leadership", "Sports Psychology"]
    }
  ]
};
