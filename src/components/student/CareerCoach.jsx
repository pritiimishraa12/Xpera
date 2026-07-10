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
  { title: "Beginner", status: "Completed", completed: true },
  { title: "Explorer", status: "Completed", completed: true },
  { title: "Builder", status: "Current", current: true },
  { title: "Professional", status: "Locked", locked: true },
  { title: "Expert", status: "Locked", locked: true },
];

const CareerCoach = memo(function CareerCoach() {
  const [chatOpen, setChatOpen] = useState(false);
  const nextId = useRef(2);

  const [messages, setMessages] = useState([
    { id: "msg-1", role: "assistant", content: "Hi there! Ready to plan your career growth?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const textAreaRef = useRef(null);

  const scrollToBottom = useCallback(() => {
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
    return () => { document.body.style.overflow = ""; };
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
    try { await navigator.clipboard.writeText(text); } catch (err) { }
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
      setMessages(prev => [...prev, { id: `msg-${nextId.current++}`, role: "assistant", content: "Error connecting to AI Coach." }]);
    } finally {
      setIsTyping(false);
      if (textAreaRef.current) textAreaRef.current.style.height = 'auto';
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

  return (
    <section className="flex min-w-0 flex-col rounded-[24px] border border-slate-200/80 bg-white p-6 md:p-8 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:border-slate-300/80 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            AI Career Coach
          </h2>
          <span className="flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-violet-700">
            BETA
          </span>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors focus:outline-none">
          <span className="text-xl font-bold pb-2">...</span>
        </button>
      </div>

      <p className="mt-1.5 text-[15px] font-medium text-slate-500">
        You're only <span className="font-bold text-violet-700">2 projects</span> away from unlocking the <span className="font-bold text-slate-900">Professional Level</span>.
      </p>

      {/* Roadmap */}
      <div className="relative mx-auto mt-10 w-full max-w-4xl px-4 lg:px-8">
        {/* Track Line */}
        <div className="absolute left-[8%] right-[8%] top-[18px] h-1.5 rounded-full bg-slate-100/80" />
        <div className="absolute left-[8%] top-[18px] h-1.5 w-[42%] rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all duration-1000 ease-out" />

        <div className="relative flex justify-between">
          {roadmap.map((item) => (
            <div key={item.title} className="group flex flex-col items-center">
              <div
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-[6px] ring-white transition-all duration-300 ease-out group-hover:scale-110 ${item.completed
                  ? "border-2 border-emerald-500"
                  : item.current
                    ? "border-[3px] border-violet-600 shadow-[0_4px_12px_rgba(124,58,237,0.3)]"
                    : "border-2 border-slate-200"
                  }`}
              >
                {item.completed && <HiOutlineCheck className="text-emerald-500 text-lg stroke-[2.5]" />}
                {item.locked && <HiOutlineLockClosed className="text-slate-300 text-sm" />}
                {item.current && <div className="h-3 w-3 rounded-full bg-violet-600 animate-pulse"></div>}
              </div>
              <h3 className={`mt-4 text-[13px] font-bold transition-colors ${item.current ? "text-violet-700" : "text-slate-700 group-hover:text-slate-900"}`}>
                {item.title}
              </h3>
              <p className={`mt-1 text-[10px] font-bold uppercase tracking-widest ${item.completed ? "text-emerald-600" : item.current ? "text-violet-600" : "text-slate-400"
                }`}>
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-3">
        <div className="flex flex-col rounded-[20px] bg-white p-5 border border-slate-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            CURRENT XP
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            340 XP
          </h3>
          <p className="mt-1.5 text-[12px] text-slate-500 font-medium">Keep completing projects to level up.</p>
        </div>
        <div className="flex flex-col rounded-[20px] bg-white p-5 border border-slate-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            NEXT GOAL
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            500 XP
          </h3>
          <p className="mt-1.5 text-[12px] text-slate-500 font-medium">Unlock Professional Badge.</p>
        </div>
        <div className="flex flex-col rounded-[20px] bg-white p-5 border border-slate-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            COMPLETION
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-violet-700">
            68%
          </h3>
          <p className="mt-1.5 text-[12px] text-slate-500 font-medium">You're closer than ever.</p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            AI Recommendation
          </p>
          <p className="mt-1 text-[14px] font-bold text-slate-900 tracking-tight">
            Build one React + Supabase project to maximize your XP gain.
          </p>
        </div>
        <button
          onClick={() => setChatOpen(true)}
          className="flex h-[44px] shrink-0 items-center justify-center gap-2 rounded-[14px] bg-violet-600 px-5 text-[13px] font-bold tracking-wide text-white shadow-[0_4px_12px_-2px_rgba(124,58,237,0.4)] transition-all duration-300 ease-out hover:bg-violet-700 hover:shadow-[0_6px_16px_-2px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 focus:outline-none"
        >
          <span className="text-lg leading-none">💬</span> Chat with Coach
        </button>
      </div>

      {chatOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4">
          <div className="flex h-[80vh] max-h-[600px] w-full max-w-[450px] flex-col rounded-[24px] bg-white shadow-2xl overflow-hidden border border-slate-100">
            <div className="flex items-center justify-between bg-white border-b border-slate-100 p-5">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 ring-1 ring-inset ring-indigo-100">
                  <span className="text-xl">🤖</span>
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />
                </div>
                <div>
                  <h3 className="font-bold tracking-tight text-slate-900">AI Coach</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Always Active</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 bg-slate-50">
              <div className="flex flex-col gap-6 pb-2">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className="group relative flex max-w-[85%] flex-col">
                      <div className={`rounded-2xl px-5 py-3.5 text-[15px] leading-relaxed shadow-sm whitespace-pre-wrap ${msg.role === "user" ? "bg-indigo-600 text-white rounded-br-sm shadow-indigo-600/20" : "bg-white border border-slate-100 text-slate-700 rounded-bl-sm"}`}>
                        {msg.content}
                      </div>
                      {msg.role === "assistant" && (
                        <div className="absolute -bottom-7 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => handleCopy(msg.content)} className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-indigo-600 bg-slate-50 rounded px-1">
                            <HiOutlineClipboardDocument /> Copy
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex h-[46px] items-center gap-1.5 rounded-2xl rounded-bl-sm border border-slate-100 bg-white px-5 shadow-sm">
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.3s]"></div>
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.15s]"></div>
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-300"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} className="h-4 w-full" />
              </div>
            </div>

            <div className="bg-white border-t border-slate-100 p-5">
              {messages.length === 1 && !isTyping && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {suggestedPrompts.map(prompt => (
                    <button key={prompt} onClick={() => handleSend(prompt)} className="rounded-full bg-indigo-50 px-3.5 py-2 text-xs font-bold text-indigo-600 transition-colors hover:bg-indigo-100">
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
                  className="flex-1 max-h-32 min-h-[44px] resize-none overflow-y-auto rounded-xl border-0 bg-slate-100 px-4 py-3 text-[15px] text-slate-900 placeholder-slate-400 outline-none ring-1 ring-inset ring-slate-200 transition-all focus:bg-white focus:ring-2 focus:ring-indigo-600"
                />
                <button
                  disabled={isTyping || !inputMessage.trim()}
                  type="submit"
                  className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
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