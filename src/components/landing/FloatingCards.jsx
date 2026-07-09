import { HiOutlineBadgeCheck, HiOutlineSparkles } from "react-icons/hi";

function FloatingCards() {
  return (
    <div className="absolute inset-0 z-30 perspective-1000">

      {/* 1. Builder XP Progress */}
      <div className="absolute left-[-2%] top-[12%] w-[220px] rounded-2xl border border-white/10 bg-[#0A121A]/80 p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:-translate-y-1 md:left-[5%] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-violet-600 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
            <HiOutlineSparkles className="text-xl text-white" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#d9f45a]">Level 3</p>
            <p className="text-[15px] font-bold tracking-tight text-white mb-0.5">Builder</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-300">
          <span>XP Progress</span>
          <span>340 / 500</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5 border border-white/10">
          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
        </div>
      </div>

      {/* 2. Resume Score Widget */}
      <div className="absolute right-[-2%] top-[8%] w-[180px] rounded-2xl border border-white/10 bg-[#0A121A]/80 p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:-translate-y-1 md:right-[2%] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
        <p className="text-[11px] font-semibold tracking-wide text-slate-400">Resume Analysis</p>
        <div className="mt-2 flex items-end gap-3">
          <span className="text-4xl font-extrabold tracking-tighter text-white">92</span>
          <span className="mb-1 text-xs font-bold text-green-400">Top 5%</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300 border border-white/10">React</span>
          <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300 border border-white/10">Node.js</span>
          <span className="rounded bg-green-500/10 px-2 py-0.5 text-[10px] font-bold text-green-400 border border-green-500/20">Verified</span>
        </div>
      </div>

      {/* 3. Interview Pipeline */}
      <div className="absolute left-[-5%] top-[55%] w-[210px] rounded-2xl border border-white/10 bg-[#0A121A]/80 p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:-translate-y-1 md:left-[2%] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="flex items-center gap-2 mb-3">
          <HiOutlineBadgeCheck className="text-lg text-emerald-400" />
          <p className="text-[12px] font-bold tracking-wide text-slate-200">Interview Ready</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/5">
            <span className="text-[11px] text-slate-300 font-medium">Stripe Clone</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/5">
            <span className="text-[11px] text-slate-300 font-medium">Fintech API</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
        </div>
      </div>

      {/* 4. AI Coach Interactive Snippet */}
      <div className="absolute bottom-[2%] right-[-5%] w-[260px] rounded-2xl border border-white/10 bg-[#0A121A]/80 p-4 text-white shadow-[0_32px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-transform hover:-translate-y-1 md:right-[0%] animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-3">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/20">
            <span className="text-xs">🤖</span>
            <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-[#0A121A] bg-green-500" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-200 leading-tight">AI Coach <span className="text-[#d9f45a] font-normal ml-0.5">✦</span></p>
            <p className="text-[9px] text-slate-400 font-medium uppercase tracking-widest">Active</p>
          </div>
        </div>
        <div className="rounded-xl bg-white/5 p-3 text-[12px] leading-relaxed text-slate-300 border border-white/5 relative">
          <div className="absolute -top-3 left-4 w-4 h-4 bg-white/5 border-t border-l border-white/5 transform rotate-45" />
          You&apos;re <strong className="text-white">1 project</strong> away from the Senior tier. Let&apos;s build a full-stack SaaS tonight.
        </div>
        <button className="mt-3 w-full rounded-lg bg-white/10 hover:bg-white/15 transition-colors py-2 text-[11px] font-bold text-white tracking-wide border border-white/10">
          Accept Challenge
        </button>
      </div>
    </div>
  );
}

export default FloatingCards;