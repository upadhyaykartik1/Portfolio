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
      "Kartik built a full-stack loan application platform (**Dec 2025 – Feb 2026**).\n\n" +
      "**Technical Highlights:**\n" +
      "- **Dynamic Workflows:** Multi-step forms with document uploads, e-signatures, auto-save, and EMI calculations.\n" +
      "- **Backend API:** RESTful APIs in Node.js & Express with PAN/Aadhaar verification workflows, validation, and error handling.\n" +
      "- **Testing & Reliability:** Comprehensive Cypress end-to-end test coverage to ensure reliable releases."
    );
  }

  // 2. Specific Intent: AI-Powered Personal Portfolio Website
  if (q.includes("portfolio") || q.includes("personal website") || q.includes("vercel")) {
    return (
      "### AI-Powered Personal Portfolio Website\n\n" +
      "Kartik developed and deployed this responsive portfolio (**Oct 2026**).\n\n" +
      "**Highlights:**\n" +
      "- **AI Assistant:** Integrated an AI-powered assistant that answers visitor queries about his skills, projects, experience, and qualifications.\n" +
      "- **Interface:** Modern, interactive UI with responsive layouts, smooth animations, and seamless chatbot integration.\n" +
      "- **Stack:** React.js, JavaScript, HTML, CSS, AI API, and Vercel."
    );
  }

  // 3. Specific Intent: KafalMart Website with AI Chatbot
  if (
    q.includes("grocery") ||
    q.includes("delivery") ||
    q.includes("chatbot") ||
    (q.includes("kafalmart") && (q.includes("website") || q.includes("project")))
  ) {
    return (
      "### KafalMart Website with AI Chatbot\n\n" +
      "Kartik built a full-stack website for a hyperlocal food and grocery delivery startup (**Aug 2026 – Oct 2026**).\n\n" +
      "**Technical Highlights:**\n" +
      "- **Full-Stack Platform:** Restaurant and grocery listings on a Node.js/Express/MongoDB backend with an HTML/CSS/JavaScript frontend.\n" +
      "- **AI Chatbot:** Integrated an AI chatbot into the site by connecting LLM APIs with the backend.\n" +
      "- **Stack:** Node.js, Express, MongoDB, LLM APIs."
    );
  }

  // 4. Specific Intent: Work Experience / Internships
  if (q.includes("experience") || q.includes("intern") || q.includes("kafalmart") || q.includes("techxalt") || q.includes("work")) {
    return (
      "### Work & Internship Experience\n\n" +
      "1. **AI Engineer Intern @ KafalMart (Nyaari)** *(Aug 2026 – Oct 2026, Remote, Pithoragarh)*\n" +
      "   - Integrated an LLM-powered chatbot into a live e-commerce platform, supporting customer queries across **4+ service categories**.\n" +
      "   - Engineered prompts and a knowledge base covering **30+ delivery locations** for context-aware customer responses.\n" +
      "   - Used ChatGPT, Gemini, and Claude for content generation, FAQ automation, and e-commerce workflows.\n" +
      "   - **Tech:** Node.js, LLM APIs, ChatGPT, Gemini, Claude.\n\n" +
      "2. **Full Stack Developer Intern @ TechXAlt** *(Apr 2026 – Jul 2026, Remote, Dehradun)*\n" +
      "   - Developed RESTful APIs using Node.js and Express.js with CRUD operations, validation, and error handling.\n" +
      "   - Integrated React.js features with Node.js, Express.js, and MongoDB backend services.\n" +
      "   - Automated API testing and collaborated using Git/GitHub for version control and code reviews.\n" +
      "   - **Tech:** Node.js, Express, RESTful API."
    );
  }

  // 5. Specific Intent: Skills & Tech Stack
  if (q.includes("stack") || q.includes("skill") || q.includes("tech") || q.includes("python") || q.includes("react") || q.includes("node") || q.includes("cypress") || q.includes("mongodb")) {
    return (
      "### Technical Skills & Stack\n\n" +
      "- 🧠 **AI/ML & Data Science:** Machine Learning, Deep Learning, Generative AI, LLMs, RAG, Scikit-learn, Pandas, NumPy.\n" +
      "- 🗣️ **Programming Languages:** Python, JavaScript, Java, C++.\n" +
      "- ⚙️ **Frameworks & Libraries:** Node.js, Express.js, React.js, Redux, Bootstrap.\n" +
      "- 🗄️ **Databases:** MySQL, MongoDB, SQL.\n" +
      "- 🧪 **Tools & Platforms:** Git, GitHub, Cypress, CI/CD.\n" +
      "- 📐 **Core Competencies:** DSA, OOP, Complexity Analysis, Analytical Thinking, Team Collaboration, Leadership."
    );
  }

  // 6. Specific Intent: Contact & Hiring
  if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach") || q.includes("github") || q.includes("linkedin")) {
    return (
      "### Contact & Hiring Information\n\n" +
      "Kartik is actively seeking **AI Engineer, GenAI Developer, and Full-Stack** roles:\n\n" +
      `- 📧 **Email:** [${portfolioKnowledge.bio.email}](mailto:${portfolioKnowledge.bio.email})\n` +
      `- 📞 **Phone:** ${portfolioKnowledge.bio.phone}\n` +
      `- 🐙 **GitHub:** [github.com/upadhyaykartik1](${portfolioKnowledge.bio.github})\n` +
      `- 💼 **LinkedIn:** [linkedin.com/in/upadhyaykartik](${portfolioKnowledge.bio.linkedin})\n` +
      `- 📄 **Resume:** [View / Download PDF Resume](/resume)`
    );
  }

  // 7. Specific Intent: Education & Certifications
  if (q.includes("education") || q.includes("college") || q.includes("cgpa") || q.includes("birla") || q.includes("cert") || q.includes("isro") || q.includes("worldquant") || q.includes("school")) {
    return (
      "### Education & Certifications\n\n" +
      "- 🎓 **B.Tech in Computer Science Engineering** — Birla Institute of Applied Sciences, Bhimtal (**CGPA: 7.64**, Aug 2023 – Aug 2027).\n" +
      "- 🏫 **Senior Secondary (12th):** Stafford Public School, Pithoragarh — 77% (2022–2023).\n" +
      "- 🏫 **Secondary (10th):** DayaSagar Inter College, Pithoragarh — 84% (2020–2021).\n" +
      "- 📜 **Certifications:**\n" +
      "  - Applied Data Science Lab (WorldQuant University, 2026)\n" +
      "  - AI Training (Acmegrade, 2024)\n" +
      "  - Cyber Security A+ (IIRS, ISRO, 2024)\n" +
      "  - Data Visualization & Frontend Libraries (freeCodeCamp)\n" +
      "  - JavaScript Algorithms & Data Structures (freeCodeCamp)\n" +
      "- 🏆 **Leadership:** Sports Secretary & Student Representative on the Induction Cell at Birla Institute of Applied Sciences, Bhimtal."
    );
  }

  // 8. Context-grounded synthesis (Dynamic RAG fallback per query)
  if (retrievedContext) {
    return (
      "### Relevant Insights for Your Query\n\n" +
      retrievedContext +
      "\n\n---\n*Need more specific details? Ask about Kartik's **AI projects**, **internship achievements**, or **tech stack**!*"
    );
  }

  // Default welcome response
  return (
    `**Kartik Upadhyay** is an **AI Engineer Intern** completing his B.Tech in Computer Science Engineering at Birla Institute of Applied Sciences (2027).\n\n` +
    `He specializes in:\n` +
    `- **AI & LLM Applications:** LLM-powered chatbots, prompt engineering, knowledge bases, and Generative AI.\n` +
    `- **Full-Stack Builds:** Node.js/Express, React.js, and MongoDB, with automated API testing using Cypress.\n` +
    `- **AI Tooling:** ChatGPT, Gemini, and Claude for content generation, FAQ automation, and e-commerce workflows.\n\n` +
    `Feel free to ask about his **KafalMart work**, **portfolio website**, **Loan Application project**, or **contact details**!`
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
Your role is to inform recruiters, engineering managers, and visitors about Kartik's AI engineering experience, full-stack projects, and background.

Tone & Style:
- Professional, concise, articulate, and welcoming.
- Emphasize his dual strengths: AI applications (LLM chatbots, prompt engineering, knowledge bases, Generative AI) alongside full-stack engineering (Node.js/Express, React.js, MongoDB, automated Cypress testing).
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
