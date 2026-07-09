import {
  HiOutlineCheck,
  HiOutlineLockClosed,
  HiOutlinePaperAirplane,
  HiOutlineClipboardDocument
} from "react-icons/hi2";
import Button from "../ui/Button";
import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { createPortal } from "react-dom";
import { chatWithAI } from "../../services/groq";

const roadmap = [
  {
    title: "Beginner",
    status: "Completed",
    completed: true,
  },
  {
    title: "Explorer",
    status: "Completed",
    completed: true,
  },
  {
    title: "Builder",
    status: "Current",
    current: true,
  },
  {
    title: "Professional",
    status: "Locked",
    locked: true,
  },
  {
    title: "Expert",
    status: "Locked",
    locked: true,
  },
];

const CareerCoach = memo(function CareerCoach() {
  const [chatOpen, setChatOpen] = useState(false);
  const nextId = useRef(2); // Track incremental IDs

  const [messages, setMessages] = useState([
    { id: "msg-1", role: "assistant", content: "Hi there! Ready to plan your career growth?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const textAreaRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    // requestAnimationFrame ensures the DOM has updated and layout is calculated before snapping.
    // We use "auto" for immediate stable anchoring like ChatGPT (smooth causes jitter).
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto", block: "end" });
    });
  }, []);

  useEffect(() => {
    if (chatOpen) {
      scrollToBottom();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [messages.length, isTyping, chatOpen, scrollToBottom]);

  const handleInput = (e) => {
    setInputMessage(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 120)}px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputMessage);
    }
  };

  async function handleCopy(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) { }
  }

  const handleSend = useCallback(async (text) => {
    if (!text.trim()) return;

    const userMsgId = `msg-${nextId.current++}`;
    const newMsgs = [...messages, { id: userMsgId, role: "user", content: text }];
    setMessages(newMsgs);
    setInputMessage("");
    setIsTyping(true);

    try {
      const groqMsg = newMsgs.map(m => ({ role: m.role, content: m.content }));
      const responseContent = await chatWithAI(groqMsg, "You are a brief, helpful AI Career Coach for students using Xpera. Keep answers very concise under 3 sentences unless specifically asked for details.");
      setMessages(prev => [...prev, { id: `msg-${nextId.current++}`, role: "assistant", content: responseContent }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { id: `msg-${nextId.current++}`, role: "assistant", content: "Error connecting to AI Coach." }]);
    } finally {
      setIsTyping(false);
      // Reset textarea height after send
      if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';
      }
    }
  }, [messages]);

  const suggestedPrompts = [
    "How can I level up faster?",
    "What project should I build next?",
    "Review my current progress."
  ];

  async function handleSendMessage(e) {
    if (e?.preventDefault) e.preventDefault();
    handleSend(inputMessage);
  }

  // Logic replaced above

  return (
    <section className="flex flex-col h-full rounded-[24px] border border-slate-200/50 bg-white p-6 xl:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:border-slate-200 relative">

      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            <h2 className="text-[22px] font-bold text-slate-900">
              AI Career Coach
            </h2>

            <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-700">
              Beta
            </span>

          </div>

          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-slate-600">

            You're only{" "}

            <span className="font-bold text-violet-700">
              2 projects
            </span>

            {" "}away from unlocking the

            <span className="font-bold text-slate-900">
              {" "}Professional Level.
            </span>

          </p>

        </div>

        <div className="rounded-xl flex items-center justify-center h-8 w-8 transition hover:bg-slate-100 cursor-pointer">
          <span className="text-xl font-bold text-slate-500 pb-2">...</span>
        </div>

      </div>

      <div className="relative mt-14">

        <div className="absolute left-[8%] right-[8%] top-4 h-[3px] rounded-full bg-slate-200" />

        <div className="absolute left-[8%] top-4 h-[3px] w-[41%] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500" />

        <div className="relative flex justify-between">

          {roadmap.map((item) => (

            <div
              key={item.title}
              className="flex flex-col items-center"
            >

              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border-[4px] bg-white shadow-sm ${item.completed
                  ? "border-green-500"
                  : item.current
                    ? "border-violet-600"
                    : "border-slate-300"
                  }`}
              >

                {item.completed && (
                  <HiOutlineCheck className="text-green-600" />
                )}

                {item.locked && (
                  <HiOutlineLockClosed className="text-slate-400" />
                )}

              </div>

              <h3 className="mt-5 text-sm font-bold text-slate-900">
                {item.title}
              </h3>

              <p
                className={`mt-1 text-xs font-semibold ${item.completed
                  ? "text-green-600"
                  : item.current
                    ? "text-violet-700"
                    : "text-slate-400"
                  }`}
              >
                {item.status}
              </p>

            </div>

          ))}

        </div>

      </div>

      <div className="mt-12 grid grid-cols-3 gap-5">

        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Current XP
          </p>

          <h3 className="mt-3 text-3xl font-extrabold text-slate-900">
            340 XP
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Keep completing projects to level up.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Next Goal
          </p>

          <h3 className="mt-3 text-3xl font-extrabold text-slate-900">
            500 XP
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Unlock Professional Badge.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Completion
          </p>

          <h3 className="mt-3 text-3xl font-extrabold text-violet-700">
            68%
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            You're closer than ever.
          </p>

        </div>

      </div>

      <div className="mt-auto pt-10 flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            AI Recommendation
          </p>

          <p className="mt-1 text-[15px] font-semibold text-slate-900">
            Build one React + Supabase project to maximize your XP gain.
          </p>

        </div>

        <Button onClick={() => setChatOpen(true)} className="bg-violet-700 text-white hover:bg-violet-800">
          Chat with Coach
        </Button>

      </div>

      {chatOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="flex h-[80vh] max-h-[600px] w-full max-w-[450px] flex-col rounded-[24px] bg-white shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden border border-slate-200/60">
            <div className="flex items-center justify-between bg-white border-b border-slate-100 p-5">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                  <span className="text-xl">🤖</span>
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">AI Coach</h3>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">Always Active</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition">
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 bg-[#F8FAFC]">
              <div className="flex flex-col gap-6 pb-2">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className="group relative flex max-w-[85%] flex-col">
                      <div className={`rounded-2xl px-5 py-3.5 text-[14.5px] leading-relaxed shadow-sm whitespace-pre-wrap ${msg.role === "user" ? "bg-violet-600 text-white rounded-br-sm" : "bg-white border border-slate-200/60 text-slate-700 rounded-bl-sm"
                        }`}>
                        {msg.content}
                      </div>

                      {msg.role === "assistant" && (
                        <div className="absolute -bottom-7 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => handleCopy(msg.content)} className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-violet-600 focus:outline-none bg-[#F8FAFC] rounded-md px-1" title="Copy response">
                            <HiOutlineClipboardDocument className="text-[14px]" /> Copy
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-sm bg-white border border-slate-200/60 px-5 py-4 shadow-sm flex gap-1 items-center h-[46px]">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} className="h-8 w-full" />
              </div>
            </div>

            <div className="bg-white border-t border-slate-100 p-4">
              {messages.length === 1 && !isTyping && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {suggestedPrompts.map(prompt => (
                    <button key={prompt} onClick={() => handleSend(prompt)} className="text-[12px] font-medium text-violet-700 bg-violet-50 border border-violet-100 rounded-full px-3 py-1.5 hover:bg-violet-100 transition whitespace-nowrap">
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              <form onSubmit={handleSendMessage} className="flex gap-3 items-end">
                <textarea
                  ref={textAreaRef}
                  value={inputMessage}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about your career..."
                  rows={1}
                  className="flex-1 max-h-32 min-h-[44px] rounded-xl border border-slate-200/60 bg-slate-50 px-4 pt-[11px] pb-3 text-[14.5px] text-slate-900 placeholder-slate-400 outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-shadow resize-none overflow-y-auto"
                />
                <button
                  disabled={isTyping || !inputMessage.trim()}
                  type="submit"
                  className="h-[44px] w-[44px] rounded-xl bg-violet-600 text-white shadow-sm hover:bg-violet-700 hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
                >
                  <HiOutlinePaperAirplane className="text-xl" />
                </button>
              </form>
            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
});

export default CareerCoach;