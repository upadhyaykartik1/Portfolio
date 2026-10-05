// Knowledge base for Kartik Upadhyay's Portfolio RAG Assistant
export const portfolioKnowledge = {
  bio: {
    name: "Kartik Upadhyay",
    title: "AI & Full-Stack Developer",
    education: "B.Tech in Computer Science and Engineering from Birla Institute of Applied Sciences, Bhimtal, Uttarakhand (Expected Graduation: 2027, CGPA: 7.64).",
    location: "Uttarakhand, India",
    email: "upadhyaykartik187@gmail.com",
    github: "https://github.com/upadhyaykartik1",
    linkedin: "https://linkedin.com/in/upadhyaykartik",
    resumeUrl: "/resume/Kartik-Upadhyay-Resume.pdf",
    summary:
      "Kartik Upadhyay is a Computer Science Engineering student focused on becoming an AI Engineer. He specializes in bridging Generative AI (LLMs, RAG, AI APIs, autonomous agents) with full-stack production systems (Python/FastAPI, Node.js, Express, React, Next.js). He is an advocate for writing clean, tested code with automated Cypress coverage and reliable API design.",
  },

  skills: {
    ai_genai: [
      "Large Language Models (LLM)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain & LlamaIndex",
      "Vector Databases (ChromaDB, Pinecone, FAISS)",
      "Prompt Engineering & Fine-tuning workflows",
      "OpenAI, Claude, and Google Gemini APIs",
      "Hugging Face Transformers",
      "Chatbot Development & Agentic Workflows",
    ],
    backend: [
      "Python (FastAPI, Flask)",
      "Node.js & Express.js",
      "RESTful API Development & Architecture",
      "API Integration & Authentication workflows (Aadhaar/PAN KYC)",
      "Vector Search & Embeddings Integration",
    ],
    frontend: [
      "React.js",
      "Next.js (App Router)",
      "Tailwind CSS",
      "Redux & State Management",
      "HTML5 / CSS3 / JavaScript (ES6+)",
    ],
    testing_tools: [
      "Automated Testing",
      "Cypress (End-to-End Testing)",
      "Git & GitHub (Version Control, Code Reviews)",
      "Docker basics",
      "Postman",
      "SDLC & Agile Delivery",
    ],
    cs_fundamentals: [
      "Data Structures and Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "System Design & Complexity Analysis",
      "Problem Solving",
    ],
  },

  experience: [
    {
      role: "AI Operations & Growth Intern",
      company: "Kafalmart (Nyaari)",
      period: "August 2026 – Present",
      location: "Remote",
      highlights: [
        "Leveraged generative AI models (ChatGPT, Gemini, Claude) to streamline daily e-commerce operations, support founder-led decision-making, and reduce repetitive manual tasks.",
        "Built and maintained lightweight automations, prompt templates, and AI-assisted customer response systems for rapid FAQ handling.",
        "Generated data-driven product descriptions, digital marketing copy, and promotional assets.",
        "Analyzed operational and customer sales data to prepare weekly executive reports and growth dashboards.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "TechXAlt",
      period: "April 2026 – July 2026",
      location: "Dehradun, Uttarakhand",
      highlights: [
        "Designed, built, and maintained production RESTful APIs using Node.js and Express to power core web application features end-to-end.",
        "Collaborated with the engineering team to connect scalable backend services with dynamic React.js frontends.",
        "Authored and executed automated test suites to validate API behavior and catch regressions early before release.",
        "Practiced iterative feature delivery, code reviews, and Git/GitHub version control in an Agile environment.",
      ],
    },
  ],

  projects: [
    {
      name: "Portfolio AI Assistant (RAG Chatbot)",
      type: "GenAI & Full-Stack System",
      tech: "Next.js, React, Tailwind CSS, Vector Knowledge Embeddings, RAG, Streaming API",
      highlights: [
        "Embedded directly into Kartik's live portfolio to allow recruiters and visitors to query his resume, tech stack, and background interactively.",
        "Uses contextual Retrieval-Augmented Generation (RAG) to find relevant profile chunks and generate grounded answers.",
        "Supports real-time token streaming with dual-engine capability: live LLM integration (Gemini/OpenAI) with intelligent offline RAG fallback.",
      ],
    },
    {
      name: "Multi-Step Loan Application System",
      type: "Full-Stack Web Application",
      tech: "Node.js, Express, React, RESTful APIs, Cypress",
      period: "December 2025 – February 2026",
      highlights: [
        "Architected an end-to-end loan management system with multi-step dynamic forms, secure document uploads, e-signatures, and EMI calculation calculators.",
        "Engineered RESTful API workflows in Node.js and Express featuring PAN and Aadhaar identity verification logic adhering to clean OOP design principles.",
        "Implemented form auto-save, robust client/server input validation, and comprehensive Cypress end-to-end test coverage to ensure system reliability.",
      ],
    },
    {
      name: "Student Counselling Portal",
      type: "Web Application",
      tech: "HTML5, CSS3, JavaScript, Backend Integration",
      highlights: [
        "Developed a web portal facilitating student registration, appointment booking with campus counsellors, and confidential session tracking.",
      ],
    },
  ],

  certifications: [
    "Applied Data Science Lab – WorldQuant University (2026)",
    "Artificial Intelligence Training – Acmegrade (2024)",
    "Geo-Data Sharing & Cyber Security – IIRS, ISRO (Grade A+, 2024)",
    "Data Visualization (V8) – freeCodeCamp",
    "Frontend Development Libraries (V8) – freeCodeCamp",
    "Legacy JavaScript Algorithms and Data Structures (V8) – freeCodeCamp",
  ],

  positions_of_responsibility: [
    "Sports Secretary: Elected student representative organizing and directing college sports tournaments and athletic events across large student cohorts.",
    "Student Representative, Induction Cell: Appointed to the institute's AICTE-mandated Induction Cell at Birla Institute of Applied Sciences (Feb 2026) to onboard and mentor incoming students.",
  ],
};

// Chunk knowledge for search and prompt injection
export const knowledgeChunks = [
  {
    id: "bio",
    category: "About & Background",
    keywords: ["who", "kartik", "about", "bio", "education", "college", "university", "cgpa", "degree", "where", "location"],
    content: `Kartik Upadhyay is a B.Tech Computer Science student at Birla Institute of Applied Sciences, Bhimtal (graduating in 2027 with a 7.64 CGPA). He is based in Uttarakhand, India. He aims to be an AI Engineer, uniquely combining modern Generative AI (LLMs, RAG, vector search, autonomous agents) with full-stack engineering (React, Next.js, Python/FastAPI, Node.js/Express, Cypress).`,
  },
  {
    id: "skills-ai",
    category: "AI & GenAI Skills",
    keywords: ["ai", "genai", "llm", "rag", "langchain", "llamaindex", "chromadb", "pinecone", "prompt", "vector", "models", "huggingface", "gemini", "openai", "claude"],
    content: `Kartik's AI & GenAI stack includes: Large Language Models (LLM), Retrieval-Augmented Generation (RAG), LangChain, LlamaIndex, Vector Databases (ChromaDB, Pinecone, FAISS), OpenAI & Gemini APIs, Hugging Face Transformers, Prompt Engineering, and Autonomous Chatbot/Agent workflows. He specializes in connecting AI inference to full-stack production apps.`,
  },
  {
    id: "skills-stack",
    category: "Full-Stack & Backend Skills",
    keywords: ["stack", "tech", "skills", "backend", "frontend", "languages", "python", "javascript", "react", "nextjs", "node", "express", "fastapi", "dsa", "oop"],
    content: `Languages: Python, JavaScript, Java, C++. Backend: Python (FastAPI), Node.js, Express.js, RESTful APIs, Vector Search. Frontend: React.js, Next.js (App Router), Tailwind CSS, Redux. Testing & Tools: Cypress (End-to-End), Git/GitHub, Docker basics, SDLC, DSA (Data Structures & Algorithms), and OOP.`,
  },
  {
    id: "exp-techxalt",
    category: "Work Experience - TechXAlt",
    keywords: ["techxalt", "intern", "internship", "full stack", "experience", "work", "express", "node", "cypress", "api"],
    content: `Full Stack Developer Intern at TechXAlt (Apr 2026 – Jul 2026, Dehradun): Built and maintained production RESTful APIs in Node.js and Express powering end-to-end features. Designed backend services wired to React frontends, implemented automated API testing, and collaborated via Git/GitHub code reviews and Agile sprints.`,
  },
  {
    id: "exp-kafalmart",
    category: "Work Experience - Kafalmart",
    keywords: ["kafalmart", "nyaari", "operations", "growth", "intern", "internship", "chatgpt", "gemini", "automation", "ecommerce"],
    content: `AI Operations & Growth Intern at Kafalmart / Nyaari (Aug 2026 – Present, Remote): Leveraged LLMs (ChatGPT, Gemini, Claude) to optimize daily e-commerce operations. Built lightweight business automations, AI-assisted customer FAQ templates, synthesized data analytics reports for management, and supported growth marketing campaigns.`,
  },
  {
    id: "project-loan",
    category: "Project - Loan Application System",
    keywords: ["loan", "application", "system", "project", "aadhaar", "pan", "emi", "cypress", "full stack"],
    content: `Multi-Step Loan Application System (Dec 2025 – Feb 2026): A full-stack web application with dynamic multi-step forms, document uploads, digital signatures, and EMI calculation. Built with Node.js/Express REST APIs supporting PAN/Aadhaar identity verification workflows, input validation, auto-save state, and 100% reliable Cypress E2E test coverage.`,
  },
  {
    id: "project-ai-bot",
    category: "Project - Portfolio AI Chatbot",
    keywords: ["bot", "assistant", "chatbot", "rag", "stream", "chat", "project", "ai demo"],
    content: `Portfolio AI Assistant (RAG Demo): Built directly into this portfolio using Next.js, Tailwind CSS, and a Retrieval-Augmented Generation (RAG) pipeline. Features semantic knowledge chunk retrieval, real-time token streaming, and dual-mode execution (direct LLM integration with graceful offline RAG fallback) so recruiters can test his AI engineering skills live.`,
  },
  {
    id: "contact",
    category: "Contact & Hiring",
    keywords: ["contact", "hire", "email", "github", "linkedin", "resume", "reach", "message", "call", "phone"],
    content: `You can reach Kartik via Email at upadhyaykartik187@gmail.com, view his code on GitHub at https://github.com/upadhyaykartik1, connect on LinkedIn at https://linkedin.com/in/upadhyaykartik, or download his PDF resume directly from the portfolio website. He is open to AI Engineer, Generative AI Developer, and Full-Stack roles.`,
  },
  {
    id: "certs",
    category: "Certifications & Leadership",
    keywords: ["certifications", "certs", "worldquant", "isro", "freecodecamp", "acmegrade", "leadership", "sports", "induction"],
    content: `Certifications: Applied Data Science Lab (WorldQuant University, 2026), AI Training (Acmegrade, 2024), Geo-Data Sharing & Cyber Security (IIRS, ISRO Grade A+, 2024), and freeCodeCamp certifications in Data Visualization and Frontend Libraries. Leadership: Elected Sports Secretary and Student Representative on the AICTE Induction Cell at college.`,
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
      .filter((c) => ["bio", "skills-ai", "project-ai-bot"].includes(c.id))
      .map((c) => c.content)
      .join("\n\n");
  }

  return top.map((t) => t.chunk.content).join("\n\n");
}

