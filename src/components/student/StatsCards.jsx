import {
  HiOutlineSparkles,
  HiOutlineBadgeCheck,
  HiOutlineClipboardCheck,
  HiOutlineStar,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const stats = [
  {
    title: "Current Level",
    value: "03",
    subtitle: "Builder",
    trend: "+1 this month",
    icon: HiOutlineBadgeCheck,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
  },
  {
    title: "XP Earned",
    value: "340",
    subtitle: "160 XP to Level 4",
    progress: 68,
    icon: HiOutlineSparkles,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
  },
  {
    title: "Projects",
    value: "12",
    subtitle: "Completed",
    trend: "+3 this month",
    icon: HiOutlineClipboardCheck,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Verified Skills",
    value: "08",
    subtitle: "Frontend",
    trend: "+2 new",
    icon: HiOutlineStar,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

function StatsCards() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="flex flex-col h-full rounded-[24px] border border-slate-200/50 bg-white p-6 xl:p-7 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:border-slate-200">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-4 text-3xl xl:text-[34px] font-extrabold tracking-tight text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {item.subtitle}
                </p>

              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}
              >
                <Icon className={`text-2xl ${item.iconColor}`} />
              </div>

            </div>
            {item.progress && (
              <div className="mt-auto pt-7">

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-xs font-medium text-slate-500">
                    Progress
                  </span>

                  <span className="text-xs font-bold text-violet-700">
                    {item.progress}%
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />

                </div>

              </div>

            )}

            {!item.progress && (
              <div className="mt-auto pt-7 flex items-center gap-2">

                <HiOutlineTrendingUp className="text-green-600" />

                <span className="text-sm font-semibold text-green-600">
                  {item.trend}
                </span>

              </div>

            )}

          </div>

        );

      })}
    </section>
  );
}

export default StatsCards;