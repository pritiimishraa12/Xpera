import {
  HiOutlineClock,
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlineExternalLink,
} from "react-icons/hi";

function RecommendedProject() {
  return (
    <section className="flex flex-col lg:flex-row overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:border-slate-300/80 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)]">

      {/* Cover (Left side) */}
      <div className="relative w-full lg:w-5/12 shrink-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt="Project Cover"
          className="h-64 w-full object-cover lg:h-full"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply transition-opacity duration-300 hover:opacity-80"></div>
        <div className="absolute left-6 top-6 flex items-center gap-2">
          <span className="flex items-center gap-1 shadow-sm rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold text-white tracking-wide">
            92% MATCH
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-800 shadow-sm">
            React
          </span>
        </div>
      </div>

      {/* Content (Right side) */}
      <div className="flex w-full flex-col p-6 lg:p-8">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-violet-600">
              RECOMMENDED PROJECT
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900">
              SaaS Landing Page
            </h2>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <HiOutlineExternalLink className="text-[22px]" />
          </button>
        </div>

        <p className="mt-3 text-[14px] leading-relaxed text-slate-500 max-w-lg">
          Design and build a modern SaaS landing page using React, Tailwind CSS and responsive layouts to strengthen your frontend portfolio.
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {["React", "Tailwind CSS", "Responsive", "UI/UX"].map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-slate-50 border border-slate-200/60 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-7 grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 py-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] ring-1 ring-inset ring-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:ring-slate-200 text-center">
            <HiOutlineClock className="text-2xl text-violet-500 mb-2" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Duration
            </p>
            <h4 className="mt-1.5 text-[13px] font-bold text-slate-900">
              3–4 Hours
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 py-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] ring-1 ring-inset ring-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:ring-slate-200 text-center">
            <HiOutlineCode className="text-2xl text-violet-500 mb-2" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Difficulty
            </p>
            <h4 className="mt-1.5 text-[13px] font-bold text-slate-900">
              Beginner
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 py-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] ring-1 ring-inset ring-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:ring-slate-200 text-center">
            <HiOutlineLightningBolt className="text-2xl text-violet-500 mb-2" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Reward
            </p>
            <h4 className="mt-1.5 text-[13px] font-bold text-slate-900">
              +120 XP
            </h4>
          </div>
        </div>

        {/* AI Recommendation Alert */}
        <div className="mt-6 flex items-center justify-between rounded-[16px] bg-violet-50/50 p-4 border border-violet-100/60 ring-1 ring-inset ring-white/50">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-violet-700">
              AI RECOMMENDATION
            </p>
            <p className="mt-1.5 text-[12px] font-medium text-slate-600">
              This project perfectly matches your current skill level and will help you unlock the <span className="font-bold text-slate-900">Professional</span> badge faster.
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-violet-600 shadow-[0_2px_8px_-2px_rgba(124,58,237,0.5)] text-white ml-4">
            <HiOutlineLightningBolt className="text-[20px]" />
          </div>
        </div>

        {/* Footer info & action */}
        <div className="mt-8 flex flex-col sm:flex-row items-end justify-between gap-6 pt-2">
          <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Estimated
              </p>
              <h4 className="mt-1 text-[14px] font-bold tracking-tight text-slate-900">
                Today
              </h4>
            </div>
            <div className="text-right sm:text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Success Rate
              </p>
              <h4 className="mt-1 text-[16px] font-bold tracking-tight text-emerald-500">
                92%
              </h4>
            </div>
          </div>

          <button className="flex w-full sm:w-[200px] items-center justify-center gap-2 rounded-[14px] bg-violet-600 py-[14px] text-[13px] font-bold tracking-wide text-white shadow-[0_4px_12px_-2px_rgba(124,58,237,0.4)] transition-all duration-300 ease-out hover:bg-violet-700 hover:shadow-[0_6px_16px_-2px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 focus:outline-none">
            Build Project <span className="mx-0.5 text-lg leading-none">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default RecommendedProject;