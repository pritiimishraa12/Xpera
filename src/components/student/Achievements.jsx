import {
  HiOutlineBadgeCheck,
  HiOutlineFire,
  HiOutlineLightningBolt,
  HiOutlineStar,
} from "react-icons/hi";

const achievements = [
  {
    title: "First Project",
    description: "Completed your first real-world project.",
    icon: HiOutlineBadgeCheck,
    color: "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-500/20",
  },
  {
    title: "100 XP Milestone",
    description: "Unlocked Builder Level with 100 XP.",
    icon: HiOutlineLightningBolt,
    color: "bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-500/20",
  },
  {
    title: "7 Day Streak",
    description: "Practiced consistently for seven days.",
    icon: HiOutlineFire,
    color: "bg-orange-50 text-orange-600 ring-1 ring-inset ring-orange-500/20",
  },
  {
    title: "Top Performer",
    description: "Ranked among the top learners this week.",
    icon: HiOutlineStar,
    color: "bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-500/20",
  },
];

function Achievements() {
  return (
    <section className="flex flex-col rounded-[24px] border border-slate-200/80 bg-white p-6 xl:p-8 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:border-slate-300/80 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)]">

      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-100">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-violet-600">
            Rewards
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900">
            Achievements
          </h2>
        </div>
        <button className="text-[13px] font-bold text-violet-600 hover:text-violet-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded p-1">
          View All <span className="ml-0.5">→</span>
        </button>
      </div>

      {/* List */}
      <div className="mt-6 flex flex-col space-y-4">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[18px] bg-white p-4 border border-slate-100/50 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-slate-100/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_16px_-4px_rgba(0,0,0,0.08)] hover:border-slate-200/80"
            >
              <div className="flex items-center gap-5">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-white shadow-sm transition-transform duration-300 ease-out group-hover:scale-110 ${item.color.replace('ring-1 ring-inset ring', 'ring-1 ring-inset ring')}`}>
                  <Icon className="text-[22px]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 transition-colors group-hover:text-violet-700">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-slate-500 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-600 ring-1 ring-inset ring-emerald-500/10 self-start sm:self-auto shadow-sm">
                Unlocked
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Progress */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="relative overflow-hidden rounded-[20px] bg-slate-900 p-6 sm:p-8 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.6)]">
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-[8px] bg-violet-500/20 text-[12px] ring-1 ring-inset ring-violet-500/30">
                  ⭐
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-violet-300">
                  Next Achievement
                </p>
              </div>

              <h3 className="mt-3 text-[18px] font-bold tracking-tight text-white">
                React Professional Badge
              </h3>

              <p className="mt-1.5 text-[13px] text-slate-400 font-medium leading-relaxed max-w-md">
                Complete <span className="font-semibold text-white">2 more projects</span> and earn <span className="font-semibold text-violet-300">160 XP</span>.
              </p>
            </div>

            <div className="w-full sm:w-[260px] shrink-0">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
                <span>Progress</span>
                <span className="text-white">68%</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800/80 ring-1 ring-inset ring-white/5">
                <div
                  className="h-full rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-all duration-1000 ease-out"
                  style={{ width: "68%" }}
                />
              </div>
            </div>
          </div>

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-[64px] pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-[64px] pointer-events-none"></div>
        </div>
      </div>

    </section>
  );
}

export default Achievements;