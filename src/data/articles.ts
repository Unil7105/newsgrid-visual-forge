
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
  ]
};
