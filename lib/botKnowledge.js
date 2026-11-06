// Knowledge base for Kartik Upadhyay's Portfolio RAG Assistant
export const portfolioKnowledge = {
  bio: {
    name: "Kartik Upadhyay",
    title: "AI Engineer Intern",
    education: "B.Tech in Computer Science Engineering from Birla Institute of Applied Sciences, Bhimtal, Uttarakhand (Aug 2023 – Aug 2027, CGPA: 7.64; Senior Secondary 77%, Secondary 84%).",
    location: "Bhimtal, India",
    phone: "+91 7310991482",
    email: "upadhyaykartik187@gmail.com",
    github: "https://github.com/upadhyaykartik1",
    linkedin: "https://linkedin.com/in/upadhyaykartik",
    resumeUrl: "/resume/Kartik-Upadhyay-Resume.pdf",
    summary:
      "Kartik Upadhyay is an AI Engineer Intern with hands-on experience integrating LLM-powered chatbots into live e-commerce platforms and supporting customer queries across multiple service categories. He is skilled in prompt engineering, knowledge base design, and using ChatGPT, Gemini, and Claude for content generation, FAQ automation, and e-commerce workflows. He has full-stack foundations across Node.js, Express.js, React.js, and MongoDB, with automated API testing using Cypress.",
  },

  skills: {
    programming_languages: ["Python", "JavaScript", "Java", "C++"],
    ai_ml_data_science: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "RAG",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
    frameworks_libraries: [
      "Node.js",
      "Express.js",
      "React.js",
      "Redux",
      "Bootstrap",
    ],
    databases: [
      "MySQL",
      "MongoDB",
      "SQL",
    ],
    tools_platforms: [
      "Git",
      "GitHub",
      "Cypress",
      "CI/CD",
    ],
    core_competencies: [
      "Data Structures and Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Complexity Analysis",
      "Analytical Thinking",
      "Team Collaboration",
      "Leadership",
    ],
  },

  experience: [
    {
      role: "AI Engineer Intern",
      company: "KafalMart (Nyaari)",
      period: "Aug 2026 – Oct 2026",
      location: "Remote, Pithoragarh, Uttarakhand",
      technologies: "Node.js, LLM APIs, ChatGPT, Gemini, Claude",
      highlights: [
        "Integrated an LLM-powered chatbot into a live e-commerce platform, supporting customer queries across 4+ service categories.",
        "Engineered prompts and a knowledge base covering 30+ delivery locations for context-aware customer responses.",
        "Utilized ChatGPT, Gemini, and Claude for content generation, FAQ automation, and e-commerce workflows.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "TechXAlt",
      period: "Apr 2026 – Jul 2026",
      location: "Remote, Dehradun, Uttarakhand",
      technologies: "Node.js, Express, RESTful API",
      highlights: [
        "Developed RESTful APIs using Node.js and Express.js, implementing CRUD operations, validation, and error handling.",
        "Integrated React.js features with Node.js, Express.js, and MongoDB backend services.",
        "Automated API testing and collaborated using Git/GitHub for version control and code reviews.",
      ],
    },
  ],

  projects: [
    {
      name: "KafalMart Website with AI Chatbot",
      type: "Full-Stack Website & AI Assistant",
      tech: "Node.js, Express, MongoDB, LLM APIs",
      period: "Aug 2026 – Oct 2026",
      highlights: [
        "Built a full-stack website for a hyperlocal food and grocery delivery startup, featuring restaurant and grocery listings on a Node.js/Express/MongoDB backend and an HTML/CSS/JavaScript frontend.",
        "Integrated an AI chatbot into the site by connecting LLM APIs with the backend.",
      ],
    },
    {
      name: "AI-Powered Personal Portfolio Website",
      type: "AI & Full-Stack Website",
      tech: "React.js, JavaScript, HTML, CSS, AI API, Vercel",
      period: "Oct 2026",
      highlights: [
        "Developed and deployed a responsive personal portfolio website featuring an integrated AI-powered assistant for interactive visitor engagement.",
        "Integrated an AI assistant to answer visitor queries about technical skills, projects, professional experience, and qualifications.",
        "Designed a modern, interactive user interface with responsive layouts, smooth animations, and seamless AI chatbot integration.",
      ],
    },
    {
      name: "Multi-Step Loan Application System",
      type: "Full-Stack Web Application",
      tech: "Node.js, Express, Cypress",
      period: "Dec 2025 – Feb 2026",
      highlights: [
        "Built a full-stack platform with dynamic forms, document uploads, e-signatures, and EMI calculations.",
        "Developed RESTful APIs (Node.js/Express) with PAN/Aadhaar verification workflows and comprehensive Cypress end-to-end test coverage, including auto-save and input validation.",
      ],
    },
  ],

  certifications: [
    "Applied Data Science Lab – WorldQuant University (2026)",
    "AI Training – Acmegrade (2024)",
    "Cyber Security (A+) – IIRS, ISRO (2024)",
    "Data Visualization & Frontend Libraries – freeCodeCamp",
    "JavaScript Algorithms & Data Structures – freeCodeCamp",
  ],

  positions_of_responsibility: [
    {
      title: "Sports Secretary",
      org: "Birla Institute of Applied Sciences, Bhimtal",
      highlights: [
        "Led sports events, tournaments, and team coordination.",
        "Managed event planning, registrations, and logistics.",
        "Represented athletes and coordinated with faculty.",
      ],
    },
    {
      title: "Student Representative – Induction Cell",
      org: "Birla Institute of Applied Sciences, Bhimtal",
      highlights: [
        "Coordinated student orientation and onboarding activities.",
        "Represented students and facilitated faculty communication.",
      ],
    },
  ],
};

// Chunk knowledge for search and prompt injection
export const knowledgeChunks = [
  {
    id: "bio",
    category: "About & Background",
    keywords: ["who", "kartik", "about", "bio", "education", "college", "university", "cgpa", "degree", "where", "location", "bhimtal"],
    content: `Kartik Upadhyay is a B.Tech Computer Science Engineering undergraduate at Birla Institute of Applied Sciences, Bhimtal (Aug 2023 – Aug 2027, 7.64 CGPA; 12th 77%, 10th 84%). He is based in Bhimtal, India. He works at the intersection of AI Engineering and Full-Stack Systems, integrating LLM-powered chatbots into live e-commerce platforms and building the Node.js/Express, React.js, and MongoDB systems behind them.`,
  },
  {
    id: "skills-ai",
    category: "AI/ML & Data Science Skills",
    keywords: ["ai", "ml", "machine learning", "deep learning", "genai", "generative", "llm", "rag", "scikit", "pandas", "numpy", "chatgpt", "gemini", "claude"],
    content: `Kartik's AI/ML & Data Science stack includes Machine Learning, Deep Learning, Generative AI, LLMs, RAG, Scikit-learn, Pandas, and NumPy. In production he has used ChatGPT, Gemini, and Claude for content generation, FAQ automation, and e-commerce workflows, and has engineered prompts and knowledge bases for context-aware customer responses.`,
  },
  {
    id: "skills-stack",
    category: "Full-Stack Skills",
    keywords: ["stack", "tech", "skills", "backend", "frontend", "languages", "python", "javascript", "java", "cpp", "react", "node", "express", "mongodb", "mysql", "sql", "redux", "bootstrap", "cypress", "git", "dsa", "oop"],
    content: `Programming Languages: Python, JavaScript, Java, C++. Frameworks & Libraries: Node.js, Express.js, React.js, Redux, Bootstrap. Databases: MySQL, MongoDB, SQL. Tools & Platforms: Git, GitHub, Cypress, CI/CD. Core Competencies: DSA, OOP, Complexity Analysis, Analytical Thinking, Team Collaboration, Leadership.`,
  },
  {
    id: "exp-techxalt",
    category: "Work Experience - TechXAlt",
    keywords: ["techxalt", "intern", "internship", "full stack", "experience", "work", "express", "node", "mongodb", "react", "api"],
    content: `Full Stack Developer Intern at TechXAlt (Apr 2026 – Jul 2026, Remote, Dehradun, Uttarakhand): Developed RESTful APIs using Node.js and Express.js with CRUD operations, validation, and error handling. Integrated React.js features with Node.js, Express.js, and MongoDB backend services. Automated API testing and collaborated using Git/GitHub for version control and code reviews. Tech: Node.js, Express, RESTful API.`,
  },
  {
    id: "exp-kafalmart",
    category: "Work Experience - KafalMart",
    keywords: ["kafalmart", "nyaari", "ai engineer", "intern", "internship", "chatbot", "ecommerce", "prompt", "knowledge base", "chatgpt", "gemini", "claude"],
    content: `AI Engineer Intern at KafalMart / Nyaari (Aug 2026 – Oct 2026, Remote, Pithoragarh, Uttarakhand): Integrated an LLM-powered chatbot into a live e-commerce platform, supporting customer queries across 4+ service categories. Engineered prompts and a knowledge base covering 30+ delivery locations for context-aware customer responses. Utilized ChatGPT, Gemini, and Claude for content generation, FAQ automation, and e-commerce workflows. Tech: Node.js, LLM APIs, ChatGPT, Gemini, Claude.`,
  },
  {
    id: "project-kafalmart",
    category: "Project - KafalMart Website with AI Chatbot",
    keywords: ["kafalmart website", "website", "chatbot", "grocery", "food", "delivery", "project", "mongodb", "llm"],
    content: `KafalMart Website with AI Chatbot (Aug 2026 – Oct 2026): Built a full-stack website for a hyperlocal food and grocery delivery startup, featuring restaurant and grocery listings on a Node.js/Express/MongoDB backend and an HTML/CSS/JavaScript frontend. Integrated an AI chatbot into the site by connecting LLM APIs with the backend. Built with Node.js, Express, MongoDB, and LLM APIs.`,
  },
  {
    id: "project-portfolio",
    category: "Project - AI-Powered Personal Portfolio Website",
    keywords: ["portfolio", "website", "assistant", "chatbot", "vercel", "react", "project", "ai demo"],
    content: `AI-Powered Personal Portfolio Website (Oct 2026): Developed and deployed a responsive personal portfolio website featuring an integrated AI-powered assistant for interactive visitor engagement. The assistant answers visitor queries about technical skills, projects, professional experience, and qualifications. Designed a modern, interactive UI with responsive layouts, smooth animations, and seamless AI chatbot integration. Built with React.js, JavaScript, HTML, CSS, AI API, and Vercel.`,
  },
  {
    id: "project-loan",
    category: "Project - Loan Application System",
    keywords: ["loan", "application", "system", "project", "aadhaar", "pan", "emi", "cypress", "full stack", "forms"],
    content: `Multi-Step Loan Application System (Dec 2025 – Feb 2026): Built a full-stack platform with dynamic forms, document uploads, e-signatures, and EMI calculations. Developed RESTful APIs (Node.js/Express) with PAN/Aadhaar verification workflows and comprehensive Cypress end-to-end test coverage, including auto-save and input validation. Built with Node.js, Express, and Cypress.`,
  },
  {
    id: "contact",
    category: "Contact & Hiring",
    keywords: ["contact", "hire", "email", "github", "linkedin", "resume", "reach", "message", "call", "phone"],
    content: `You can reach Kartik via Email at upadhyaykartik187@gmail.com, by phone at +91 7310991482, view his code on GitHub at https://github.com/upadhyaykartik1, connect on LinkedIn at https://linkedin.com/in/upadhyaykartik, or download his PDF resume directly from the portfolio website. He is based in Bhimtal, India and is open to AI Engineer, Generative AI Developer, and Full-Stack roles.`,
  },
  {
    id: "certs",
    category: "Certifications & Leadership",
    keywords: ["certifications", "certs", "worldquant", "isro", "freecodecamp", "acmegrade", "leadership", "sports", "induction", "cyber"],
    content: `Certifications: Applied Data Science Lab (WorldQuant University, 2026), AI Training (Acmegrade, 2024), Cyber Security A+ (IIRS, ISRO, 2024), Data Visualization & Frontend Libraries (freeCodeCamp), and JavaScript Algorithms & Data Structures (freeCodeCamp). Leadership: Sports Secretary at Birla Institute of Applied Sciences, Bhimtal — led sports events, tournaments, and team coordination, managed event planning, registrations, and logistics, and represented athletes and coordinated with faculty. Also served as Student Representative on the Induction Cell, coordinating student orientation and onboarding and facilitating faculty communication.`,
  },
];

/**
 * Perform keyword-weighted semantic retrieval over knowledge chunks
 */
export function retrieveRelevantContext(query) {
  if (!query || typeof query !== "string") return knowledgeChunks.slice(0, 3).map((c) => c.content).join("\n\n");

  const cleanTokens = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);

  const scored = knowledgeChunks.map((chunk) => {
    let score = 0;
    const textLower = (chunk.content + " " + chunk.category).toLowerCase();

    for (const token of cleanTokens) {
      // Check explicit keywords (higher weight)
      if (chunk.keywords.some((k) => k.includes(token) || token.includes(k))) {
        score += 5;
      }
      // Check text occurrence
      if (textLower.includes(token)) {
        score += 2;
      }
    }
    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);

  // Return top 3 chunks (or top scoring ones)
  const top = scored.filter((s) => s.score > 0).slice(0, 3);
  if (top.length === 0) {
    // If no specific match, provide bio + skills
    return knowledgeChunks
      .filter((c) => ["bio", "skills-ai", "project-portfolio"].includes(c.id))
      .map((c) => c.content)
      .join("\n\n");
  }

  return top.map((t) => t.chunk.content).join("\n\n");
}
