"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  Bot,
  User,
  ExternalLink,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const INITIAL_SUGGESTIONS = [
  "What is Kartik's AI & full-stack tech stack?",
  "Tell me about the Loan Application project",
  "What did he do at TechXAlt and Kafalmart?",
  "How can I contact or hire Kartik?",
];

// Helper to render basic markdown formatting (bold, headers, bullets, links) safely
function FormattedMessage({ content }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-1.5 text-sm leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-1.5" />;

        // Header ###
        if (trimmed.startsWith("### ")) {
          return (
            <h4 key={idx} className="font-semibold text-ink pt-1 text-base">
              {trimmed.replace("### ", "")}
            </h4>
          );
        }

        // Bullet point
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const itemText = trimmed.slice(2);
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-accent text-xs mt-1">•</span>
              <span className="text-ink/90 flex-1">
                {parseInlineFormatting(itemText)}
              </span>
            </div>
          );
        }

        // Numbered list
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-accent text-xs font-semibold mt-0.5">
                {numMatch[1]}.
              </span>
              <span className="text-ink/90 flex-1">
                {parseInlineFormatting(numMatch[2])}
              </span>
            </div>
          );
        }

        return (
          <p key={idx} className="text-ink/90">
            {parseInlineFormatting(line)}
          </p>
        );
      })}
    </div>
  );
}

function parseInlineFormatting(text) {
  // Simple parser for bold **text** and links [text](url)
  const parts = [];
  let remaining = text;
  let keyCounter = 0;

  while (remaining.length > 0) {
    // Check for link [text](url)
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    // Check for bold **text**
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

    let matchType = null;
    let earliestIndex = remaining.length;
    let match = null;

    if (linkMatch && linkMatch.index < earliestIndex) {
      matchType = "link";
      earliestIndex = linkMatch.index;
      match = linkMatch;
    }
    if (boldMatch && boldMatch.index < earliestIndex) {
      matchType = "bold";
      earliestIndex = boldMatch.index;
      match = boldMatch;
    }

    if (!matchType) {
      parts.push(<span key={keyCounter++}>{remaining}</span>);
      break;
    }

    if (earliestIndex > 0) {
      parts.push(
        <span key={keyCounter++}>{remaining.slice(0, earliestIndex)}</span>
      );
    }

    if (matchType === "bold") {
      parts.push(
        <strong key={keyCounter++} className="font-semibold text-ink">
          {match[1]}
        </strong>
      );
      remaining = remaining.slice(earliestIndex + match[0].length);
    } else if (matchType === "link") {
      parts.push(
        <a
          key={keyCounter++}
          href={match[2]}
          target={match[2].startsWith("http") ? "_blank" : undefined}
          rel={match[2].startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-accent underline hover:opacity-80 inline-flex items-center gap-0.5"
        >
          {match[1]}
          {match[2].startsWith("http") && <ExternalLink size={11} className="inline ml-0.5" />}
        </a>
      );
      remaining = remaining.slice(earliestIndex + match[0].length);
    }
  }

  return parts;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 **Hi! I'm Kartik's Portfolio AI Assistant.**\n\nI'm powered by **Retrieval-Augmented Generation (RAG)**. Ask me anything about Kartik's AI engineering skills, projects, full-stack systems, or work background!",
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  // Expose global window function so buttons across the portfolio can open the bot
  useEffect(() => {
    window.openKartikChat = (presetQuestion) => {
      setIsOpen(true);
      if (presetQuestion) {
        setTimeout(() => {
          handleSendMessage(presetQuestion);
        }, 200);
      }
    };
    return () => {
      delete window.openKartikChat;
    };
  }, []);

  const handleSendMessage = async (textToSend) => {
    const query = typeof textToSend === "string" ? textToSend : input;
    if (!query.trim() || isStreaming) return;

    const userMessage = { role: "user", content: query.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsStreaming(true);

    // Placeholder for assistant stream
    const assistantMessageIndex = newMessages.length;
    setMessages([...newMessages, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to receive stream from AI engine");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const updated = [...prev];
          updated[assistantMessageIndex] = {
            role: "assistant",
            content: accumulated,
          };
          return updated;
        });
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => {
        const updated = [...prev];
        updated[assistantMessageIndex] = {
          role: "assistant",
          content:
            "⚠️ *Sorry, I hit a temporary issue while fetching the response. Please try asking again or feel free to email Kartik directly at [upadhyaykartik187@gmail.com](mailto:upadhyaykartik187@gmail.com).* ",
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Conversation reset. What else would you like to know about Kartik's projects, AI skills, or background?",
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close AI Chat" : "Open AI Chat"}
          className="group relative flex items-center gap-2.5 rounded-full border border-line bg-panel/95 px-4 py-3 shadow-xl backdrop-blur-md transition-all hover:border-accent hover:shadow-accent/10"
        >
          {/* Animated online pulse */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>

          <Sparkles size={18} className="text-accent transition-transform group-hover:rotate-12" />
          <span className="text-sm font-medium text-ink">Ask Portfolio AI</span>
          <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-accent uppercase">
            RAG Demo
          </span>
        </motion.button>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-20 right-5 z-50 flex h-[560px] w-[92vw] max-w-[420px] flex-col overflow-hidden rounded-2xl border border-line bg-panel/95 shadow-2xl backdrop-blur-lg sm:bottom-20"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line bg-bg/80 px-4 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent border border-accent/20">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink flex items-center gap-1.5">
                    Kartik’s AI Assistant
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </h3>
                  <p className="text-[11px] text-mute">
                    RAG Knowledge Engine · Live Stream
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="rounded-md p-1.5 text-mute transition-colors hover:bg-line hover:text-ink"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close chat"
                  className="rounded-md p-1.5 text-mute transition-colors hover:bg-line hover:text-ink"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-line">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.role === "assistant" && (
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent border border-accent/20">
                      <Bot size={13} />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm ${
                      m.role === "user"
                        ? "bg-accent/20 border border-accent/30 text-ink"
                        : "bg-bg/90 border border-line text-ink"
                    }`}
                  >
                    {m.content ? (
                      <FormattedMessage content={m.content} />
                    ) : (
                      <div className="flex items-center gap-1 py-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:0.2s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:0.4s]" />
                      </div>
                    )}
                  </div>

                  {m.role === "user" && (
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-line text-mute">
                      <User size={13} />
                    </div>
                  )}
                </div>
              ))}

              {/* Suggestions chips (only show when 1 assistant message is present) */}
              {messages.length === 1 && (
                <div className="mt-3 space-y-1.5 pt-2">
                  <p className="text-[11px] font-medium text-mute uppercase tracking-wider">
                    Suggested Questions:
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {INITIAL_SUGGESTIONS.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(item)}
                        className="group flex items-center justify-between rounded-lg border border-line bg-bg/60 px-3 py-2 text-left text-xs text-mute transition-all hover:border-accent/60 hover:bg-bg hover:text-ink"
                      >
                        <span>{item}</span>
                        <ArrowRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100 text-accent" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="border-t border-line bg-bg/90 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="relative flex items-center"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Kartik's AI stack, projects, experience..."
                  disabled={isStreaming}
                  className="w-full rounded-xl border border-line bg-panel px-3.5 py-2.5 pr-10 text-xs sm:text-sm text-ink placeholder:text-mute/60 focus:border-accent focus:outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isStreaming}
                  aria-label="Send query"
                  className="absolute right-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={13} />
                </button>
              </form>

              <div className="mt-2 flex items-center justify-between text-[10px] text-mute px-1">
                <span>RAG pipeline · Vector knowledge chunks</span>
                <span className="flex items-center gap-1">
                  <Sparkles size={10} className="text-accent" />
                  Dual-Engine
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

