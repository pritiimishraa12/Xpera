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
    color: "bg-green-100 text-green-600",
  },
  {
    title: "100 XP Milestone",
    description: "Unlocked Builder Level with 100 XP.",
    icon: HiOutlineLightningBolt,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "7 Day Streak",
    description: "Practiced consistently for seven days.",
    icon: HiOutlineFire,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Top Performer",
    description: "Ranked among the top learners this week.",
    icon: HiOutlineStar,
    color: "bg-violet-100 text-violet-700",
  },
];

function Achievements() {
  return (
    <section className="flex flex-col h-full rounded-[24px] border border-slate-200/50 bg-white p-6 xl:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:border-slate-200">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-600">
            Rewards
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            Achievements
          </h2>
        </div>

        <button className="text-sm font-semibold text-violet-700">
          View All
        </button>

      </div>

      <div className="mt-6 space-y-4">

        {achievements.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-violet-200 hover:bg-violet-50"
            >

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
              >
                <Icon className="text-2xl" />
              </div>

              <div className="flex-1">

                <h3 className="font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.description}
                </p>

              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                Unlocked
              </span>

            </div>

          );

        })}

      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-xl border border-violet-100 bg-violet-50 p-5">

          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-700">
            Next Achievement
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-900">
            React Professional Badge
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Complete <span className="font-semibold text-violet-700">2 more projects</span> and earn <span className="font-semibold">160 XP</span>.
          </p>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-violet-100">

            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
              style={{ width: "68%" }}
            />

          </div>

        </div>
      </div>

    </section>
  );
}

export default Achievements;