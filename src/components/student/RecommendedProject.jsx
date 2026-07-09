import {
  HiOutlineClock,
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlineExternalLink,
} from "react-icons/hi";
import Button from "../ui/Button";

function RecommendedProject() {
  return (
    <section className="flex flex-col h-full overflow-hidden rounded-[24px] border border-slate-200/50 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:border-slate-200">

      {/* Cover */}

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt="Project"
          className="h-40 w-full object-cover"
        />

        <div className="absolute left-5 top-5 flex items-center gap-2">

          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
            92% MATCH
          </span>

          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
            React
          </span>

        </div>

      </div>

      <div className="p-6 xl:p-8 flex-1 flex flex-col">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
              Recommended Project
            </p>

            <h2 className="mt-2 text-[20px] font-extrabold leading-8 text-slate-900">
              SaaS Landing Page
            </h2>

          </div>

          <button className="rounded-xl p-2 transition hover:bg-slate-100">

            <HiOutlineExternalLink className="text-lg text-slate-500" />

          </button>

        </div>

        <p className="mt-4 text-[15px] leading-7 text-slate-500">
          Design and build a modern SaaS landing page using React,
          Tailwind CSS and responsive layouts to strengthen your
          frontend portfolio.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">

          {["React", "Tailwind CSS", "Responsive", "UI/UX"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
            >
              {tag}
            </span>
          ))}

        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">

            <HiOutlineClock className="mx-auto text-2xl text-violet-700" />

            <p className="mt-2 text-xs text-slate-500">
              Duration
            </p>

            <h4 className="mt-1 text-sm font-bold text-slate-900">
              3–4 Hours
            </h4>

          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">

            <HiOutlineCode className="mx-auto text-2xl text-violet-700" />

            <p className="mt-2 text-xs text-slate-500">
              Difficulty
            </p>

            <h4 className="mt-1 text-sm font-bold text-slate-900">
              Beginner
            </h4>

          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">

            <HiOutlineLightningBolt className="mx-auto text-2xl text-violet-700" />

            <p className="mt-2 text-xs text-slate-500">
              Reward
            </p>

            <h4 className="mt-1 text-sm font-bold text-slate-900">
              +120 XP
            </h4>

          </div>

        </div>
        <div className="mt-7 rounded-2xl border border-violet-100 bg-violet-50 p-4">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                AI Recommendation
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                This project perfectly matches your current skill level and
                will help you unlock the <span className="font-semibold text-violet-700">Professional</span> badge faster.
              </p>

            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white">

              <HiOutlineLightningBolt className="text-2xl" />

            </div>

          </div>

        </div>

        <div className="mt-7 flex items-center justify-between">

          <div>

            <p className="text-xs text-slate-500">
              Estimated Completion
            </p>

            <h4 className="mt-1 text-lg font-bold text-slate-900">
              Today
            </h4>

          </div>

          <div className="text-right">

            <p className="text-xs text-slate-500">
              Success Rate
            </p>

            <h4 className="mt-1 text-lg font-bold text-green-600">
              92%
            </h4>

          </div>

        </div>

        <div className="mt-auto pt-6">
          <Button className="w-full bg-violet-700 text-white hover:bg-violet-800">
            Build Project →
          </Button>
        </div>
      </div>

    </section>
  );
}

export default RecommendedProject;