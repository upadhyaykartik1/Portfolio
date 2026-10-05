import { retrieveRelevantContext, portfolioKnowledge, knowledgeChunks } from "@/lib/botKnowledge";

export const runtime = "nodejs";

/**
 * Intelligent local response generator grounded in retrieved knowledge context,
 * providing accurate, unique answers per query with zero downtime.
 */
function generateLocalResponse(query, retrievedContext) {
  const q = (query || "").toLowerCase();

  // 1. Specific Intent: Loan Application Project
  if (q.includes("loan") || q.includes("multi-step") || q.includes("aadhaar") || q.includes("pan")) {
    return (
      "### Multi-Step Loan Application System\n\n" +
      "Kartik developed a production-style full-stack loan origination platform (**Dec 2025 – Feb 2026**).\n\n" +
      "**Technical Highlights:**\n" +
      "- **Dynamic Multi-Step Workflows:** Form state auto-saving, document uploads, e-signatures, and dynamic EMI calculations.\n" +
      "- **Backend API:** Built with Node.js & Express following clean OOP principles, implementing PAN & Aadhaar KYC verification flows.\n" +
      "- **Testing & Reliability:** Covered with comprehensive **Cypress end-to-end test suites** and client/server validation to ensure zero release regressions."
    );
  }

  // 2. Specific Intent: Autonomous AI Agent / Copilot
  if (q.includes("agent") || q.includes("copilot") || q.includes("multi-tool") || q.includes("fastapi")) {
    return (
      "### Autonomous Multi-Tool Agent & Copilot\n\n" +
      "Kartik engineered an autonomous AI agent microservice in Python.\n\n" +
      "**Technical Highlights:**\n" +
      "- **Multi-Step Execution:** Uses LangChain and Python for multi-step planning, web search tool execution, and dynamic external API calling.\n" +
      "- **Vector Search:** Integrated ChromaDB vector store with recursive text chunking and similarity thresholding for cited source summaries.\n" +
      "- **Microservice Architecture:** High-performance FastAPI endpoints with asynchronous request handling and Pydantic schema validation."
    );
  }

  // 3. Specific Intent: Work Experience / Internships
  if (q.includes("experience") || q.includes("intern") || q.includes("kafalmart") || q.includes("techxalt") || q.includes("work")) {
    return (
      "### Work & Internship Experience\n\n" +
      "Kartik has hands-on experience in both full-stack software development and AI operations:\n\n" +
      "1. **AI Operations & Growth Intern @ Kafalmart (Nyaari)** *(Aug 2026 – Present)*\n" +
      "   - Engineered automated Python data extraction pipelines using LLM function calling and Pydantic schemas, reducing catalog processing time by **65%**.\n" +
      "   - Designed prompt templates with structured JSON validation across 500+ SKUs.\n" +
      "   - Built lightweight API automations for customer FAQ triage.\n\n" +
      "2. **Full Stack Developer Intern @ TechXAlt** *(Apr 2026 – Jul 2026)*\n" +
      "   - Architected and deployed **12+ production RESTful API endpoints** in Node.js and Express.\n" +
      "   - Connected backend services to React.js frontends and wrote automated Cypress test suites maintaining **90%+ API reliability**."
    );
  }

  // 4. Specific Intent: Skills & Tech Stack
  if (q.includes("stack") || q.includes("skill") || q.includes("tech") || q.includes("python") || q.includes("react") || q.includes("node") || q.includes("cypress")) {
    return (
      "### Technical Skills & Stack\n\n" +
      "Kartik specializes at the intersection of **AI Engineering & Full-Stack Systems**:\n\n" +
      "- 🧠 **AI & GenAI:** Retrieval-Augmented Generation (RAG), LLMs, LangChain, LlamaIndex, Vector Databases (ChromaDB, Pinecone), Pydantic, OpenAI & Gemini APIs, Hugging Face.\n" +
      "- ⚙️ **Backend:** Python (FastAPI), Node.js, Express.js, RESTful API Design, Vector Search, Redis.\n" +
      "- 💻 **Frontend:** React.js, Next.js (App Router), Tailwind CSS, Redux.\n" +
      "- 🧪 **Testing & Tools:** Cypress (Automated E2E Testing), Git/GitHub, Docker basics, Postman, SDLC.\n" +
      "- 📐 **Fundamentals:** Data Structures & Algorithms (DSA), OOP, Complexity Analysis."
    );
  }

  // 5. Specific Intent: Contact & Hiring
  if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach") || q.includes("github") || q.includes("linkedin")) {
    return (
      "### Contact & Hiring Information\n\n" +
      "Kartik is actively seeking **AI Engineer, GenAI Developer, and Full-Stack** roles:\n\n" +
      `- 📧 **Email:** [${portfolioKnowledge.bio.email}](mailto:${portfolioKnowledge.bio.email})\n` +
      `- 🐙 **GitHub:** [github.com/upadhyaykartik1](${portfolioKnowledge.bio.github})\n` +
      `- 💼 **LinkedIn:** [linkedin.com/in/upadhyaykartik](${portfolioKnowledge.bio.linkedin})\n` +
      `- 📄 **Resume:** [View / Download PDF Resume](/resume)`
    );
  }

  // 6. Specific Intent: Education & Certifications
  if (q.includes("education") || q.includes("college") || q.includes("cgpa") || q.includes("birla") || q.includes("cert") || q.includes("isro") || q.includes("worldquant")) {
    return (
      "### Education & Certifications\n\n" +
      "- 🎓 **Education:** B.Tech in Computer Science & Engineering from **Birla Institute of Applied Sciences**, Bhimtal (**CGPA: 7.64**, Expected May 2027).\n" +
      "- 📜 **Certifications:**\n" +
      "  - Applied Data Science Lab (WorldQuant University, 2026)\n" +
      "  - Artificial Intelligence Training (Acmegrade, 2024)\n" +
      "  - Geo-Data Sharing & Cyber Security (ISRO/IIRS Grade A+, 2024)\n" +
      "  - Data Visualization & Frontend Development (freeCodeCamp)\n" +
      "- 🏆 **Leadership:** Elected Sports Secretary & AICTE Induction Cell Student Representative."
    );
  }

  // 7. Context-grounded synthesis (Dynamic RAG fallback per query)
  if (retrievedContext) {
    return (
      "### Relevant Insights for Your Query\n\n" +
      retrievedContext +
      "\n\n---\n*Need more specific details? Ask about Kartik's **AI projects**, **internship achievements**, or **tech stack**!*"
    );
  }

  // Default welcome response
  return (
    `**Kartik Upadhyay** is an **AI & Full-Stack Engineer** completing his B.Tech in Computer Science at Birla Institute of Applied Sciences (2027).\n\n` +
    `He specializes in:\n` +
    `- **Generative AI & RAG:** LLM pipelines, vector databases (ChromaDB/Pinecone), autonomous agents, and Pydantic schemas.\n` +
    `- **Full-Stack Backends:** Production APIs with Python (FastAPI) and Node.js/Express, paired with React/Next.js interfaces.\n` +
    `- **Quality & Testing:** Cypress automated testing, clean OOP architecture, and 90%+ test coverage.\n\n` +
    `Feel free to ask about his **Loan Application project**, **AI Agent microservice**, **internship achievements**, or **contact details**!`
  );
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const latestMessage = messages[messages.length - 1]?.content || "";
    const retrievedContext = retrieveRelevantContext(latestMessage);

    const systemPrompt = `You are the personal AI Assistant for Kartik Upadhyay's developer portfolio.
Your role is to inform recruiters, engineering managers, and visitors about Kartik's technical expertise, AI projects, full-stack systems experience, and background.

Tone & Style:
- Professional, concise, articulate, and welcoming.
- Emphasize his dual strengths: modern Generative AI engineering (LLMs, RAG, Python, vector databases) alongside solid full-stack engineering (Next.js, React, Node.js, automated Cypress testing).
- Format using clean Markdown with bullet points where appropriate.
- Answer strictly based on the provided context. If asked about something unrelated, politely steer back to Kartik's portfolio or offer his email (${portfolioKnowledge.bio.email}).

Context:
${retrievedContext}
`;

    // 1. Google Gemini API (if GEMINI_API_KEY is present)
    if (process.env.GEMINI_API_KEY) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?alt=sse&key=${process.env.GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: systemPrompt }],
              },
              contents: messages.map((m) => ({
                role: m.role === "assistant" ? "model" : "user",
                parts: [{ text: m.content }],
              })),
              generationConfig: {
                temperature: 0.4,
                maxOutputTokens: 600,
              },
            }),
          }
        );

        if (geminiRes.ok) {
          const encoder = new TextEncoder();
          const decoder = new TextDecoder();

          const stream = new ReadableStream({
            async start(controller) {
              const reader = geminiRes.body.getReader();
              let buffer = "";

              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";

                for (const line of lines) {
                  if (line.startsWith("data: ")) {
                    try {
                      const data = JSON.parse(line.slice(6));
                      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
                      if (text) {
                        controller.enqueue(encoder.encode(text));
                      }
                    } catch {
                      // ignore parse errors on partial chunks
                    }
                  }
                }
              }
              controller.close();
            },
          });

          return new Response(stream, {
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Transfer-Encoding": "chunked",
            },
          });
        }
      } catch (err) {
        console.error("Gemini API call failed, falling back to local RAG engine", err);
      }
    }

    // 2. OpenAI / Groq API (if OPENAI_API_KEY or GROQ_API_KEY is present)
    const apiKey = process.env.OPENAI_API_KEY || process.env.GROQ_API_KEY;
    const apiUrl = process.env.GROQ_API_KEY
      ? "https://api.groq.com/openai/v1/chat/completions"
      : "https://api.openai.com/v1/chat/completions";
    const model = process.env.GROQ_API_KEY ? "llama-3.3-70b-versatile" : "gpt-4o-mini";

    if (apiKey) {
      try {
        const aiRes = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            stream: true,
            temperature: 0.4,
            max_tokens: 600,
            messages: [
              { role: "system", content: systemPrompt },
              ...messages.map((m) => ({ role: m.role, content: m.content })),
            ],
          }),
        });

        if (aiRes.ok) {
          const encoder = new TextEncoder();
          const decoder = new TextDecoder();

          const stream = new ReadableStream({
            async start(controller) {
              const reader = aiRes.body.getReader();
              let buffer = "";

              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";

                for (const line of lines) {
                  const trimmed = line.trim();
                  if (trimmed.startsWith("data: ")) {
                    const dataStr = trimmed.slice(6);
                    if (dataStr === "[DONE]") continue;
                    try {
                      const parsed = JSON.parse(dataStr);
                      const delta = parsed.choices?.[0]?.delta?.content;
                      if (delta) {
                        controller.enqueue(encoder.encode(delta));
                      }
                    } catch {
                      // ignore parse errors
                    }
                  }
                }
              }
              controller.close();
            },
          });

          return new Response(stream, {
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Transfer-Encoding": "chunked",
            },
          });
        }
      } catch (err) {
        console.error("OpenAI/Groq API call failed, falling back to local RAG engine", err);
      }
    }

    // 3. Fallback: Local Semantic RAG Streaming Engine
    const localAnswer = generateLocalResponse(latestMessage, retrievedContext);
    const encoder = new TextEncoder();
    const words = localAnswer.split(" ");

    const stream = new ReadableStream({
      async start(controller) {
        for (let i = 0; i < words.length; i++) {
          const word = words[i] + (i < words.length - 1 ? " " : "");
          controller.enqueue(encoder.encode(word));
          // Natural typing delay (15-25ms per token)
          await new Promise((r) => setTimeout(r, 18));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Chat API route error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

