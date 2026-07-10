import {
  HiOutlineSparkles,
  HiOutlineBadgeCheck,
  HiOutlineClipboardCheck,
  HiOutlineStar,
} from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

const stats = [
  {
    title: "Current Level",
    value: "03",
    subtitle: "Builder",
    trend: "+1 this month",
    icon: HiOutlineBadgeCheck,
    iconBg: "bg-violet-50 text-violet-600",
  },
  {
    title: "XP Earned",
    value: "340",
    subtitle: "160 XP to Level 4",
    progress: 68,
    icon: HiOutlineSparkles,
    iconBg: "bg-violet-50 text-violet-600",
  },
  {
    title: "Projects",
    value: "12",
    subtitle: "Completed",
    trend: "+3 this month",
    icon: HiOutlineClipboardCheck,
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Verified Skills",
    value: "08",
    subtitle: "Frontend",
    trend: "+2 new",
    icon: HiOutlineStar,
    iconBg: "bg-amber-50 text-amber-500",
  },
];

function StatsCards() {
  return (
    <section className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="group flex flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] min-h-[178px]"
          >
            <div>
              <div className="flex items-start justify-between">
                <p className="text-[13px] font-semibold text-slate-500 transition-colors group-hover:text-slate-700">
                  {item.title}
                </p>
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110 ${item.iconBg}`}
                >
                  <Icon className="text-[20px]" />
                </div>
              </div>

              <div className="mt-3">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 leading-none">
                  {item.value}
                </h2>
                <p className="mt-2 text-[13px] font-medium text-slate-500">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-8">
              {item.progress ? (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      Progress
                    </span>
                    <span className="text-[11px] font-bold text-violet-600">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-100/80">
                    <div
                      className="h-full rounded-full bg-violet-600 shadow-[0_0_8px_rgba(124,58,237,0.4)] transition-all duration-1000 ease-out"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-emerald-600">
                  <HiArrowUpRight className="text-sm stroke-[3]" />
                  <span className="text-[13px] font-semibold tracking-wide">
                    {item.trend}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default StatsCards;