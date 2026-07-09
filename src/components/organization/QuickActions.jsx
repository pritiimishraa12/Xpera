import {
  HiOutlinePlusCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineUsers,
  HiOutlineBuildingOffice2,
  HiOutlineArrowRight,
  HiOutlineSparkles,
} from "react-icons/hi2";

const actions = [
  {
    title: "Post New Project",
    description: "Create a new real-world project for students.",
    icon: HiOutlinePlusCircle,
    bg: "bg-[#EEF7C7]",
  },
  {
    title: "Manage Projects",
    description: "Edit, update or close active projects.",
    icon: HiOutlineClipboardDocumentList,
    bg: "bg-blue-100",
  },
  {
    title: "Review Applicants",
    description: "Shortlist and manage student applications.",
    icon: HiOutlineUsers,
    bg: "bg-green-100",
  },
  {
    title: "Organization Profile",
    description: "Update branding and company information.",
    icon: HiOutlineBuildingOffice2,
    bg: "bg-orange-100",
  },
];

function QuickActions() {
  return (
    <div className="space-y-6">

      {/* Quick Actions */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Quick Actions
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Workspace
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Frequently used organization tools.
          </p>

        </div>

        <div className="mt-6 space-y-4">

          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.title}
                className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d9f45a] hover:shadow-lg"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${action.bg}`}
                  >
                    <Icon className="text-2xl text-[#061019]" />
                  </div>

                  <div className="text-left">

                    <h3 className="font-bold text-slate-900">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {action.description}
                    </p>

                  </div>

                </div>

                <HiOutlineArrowRight className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#061019]" />

              </button>
            );
          })}

        </div>

      </div>

      {/* AI Insights Card */}

      <div className="overflow-hidden rounded-3xl bg-[#061019] p-6 text-white shadow-lg">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d9f45a]">

            <HiOutlineSparkles className="text-2xl text-[#061019]" />

          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9f45a]">
              AI Assistant
            </p>

            <h2 className="mt-1 text-xl font-extrabold">
              Hiring Insights
            </h2>

          </div>

        </div>

        <p className="mt-6 leading-7 text-slate-300">
          AI has detected that your Frontend projects are receiving the
          highest engagement this month. Consider posting another
          Frontend opportunity to attract more high-quality candidates.
        </p>

        <div className="mt-8 flex items-center justify-between rounded-2xl bg-white/10 p-4">

          <div>

            <p className="text-sm text-slate-300">
              Hiring Health
            </p>

            <h3 className="mt-1 text-3xl font-extrabold text-[#d9f45a]">
              Excellent
            </h3>

          </div>

          <button className="rounded-2xl bg-[#d9f45a] px-5 py-3 font-bold text-[#061019] transition hover:scale-105">
            View Report
          </button>

        </div>

      </div>

    </div>
  );
}

export default QuickActions;