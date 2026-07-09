import {
  HiOutlineClock,
  HiOutlineChevronRight,
} from "react-icons/hi";

const applications = [
  {
    company: "Fintech Dashboard",
    role: "Frontend Developer",
    date: "12 May 2026",
    status: "Under Review",
    color: "bg-amber-100 text-amber-700",
    logo: "💳",
  },
  {
    company: "Travel Booking App",
    role: "React Developer",
    date: "10 May 2026",
    status: "Shortlisted",
    color: "bg-green-100 text-green-700",
    logo: "✈️",
  },
  {
    company: "E-Commerce Platform",
    role: "UI Developer",
    date: "08 May 2026",
    status: "Applied",
    color: "bg-violet-100 text-violet-700",
    logo: "🛒",
  },
];

function RecentApplications() {
  return (
    <section className="flex flex-col h-full rounded-[24px] border border-slate-200/50 bg-white p-6 xl:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:border-slate-200">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track your latest project applications
          </p>
        </div>

        <button className="flex items-center gap-1 text-sm font-semibold text-violet-700 hover:text-violet-900">
          View All
          <HiOutlineChevronRight />
        </button>

      </div>

      {/* List */}

      <div className="mt-6 flex-1 flex flex-col space-y-4">

        {applications.map((item) => (

          <div
            key={item.company}
            className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-violet-200 hover:bg-violet-50"
          >

            <div className="flex items-start justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                  {item.logo}
                </div>

                <div>

                  <h3 className="font-bold text-slate-900">
                    {item.company}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.role}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <HiOutlineClock />
                    <span>Applied on {item.date}</span>
                  </div>

                </div>

              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${item.color}`}
              >
                {item.status}
              </span>

            </div>

          </div>

        ))}

        {/* Bottom Elements pushed down */}
        <div className="mt-auto pt-2 space-y-4">

          {/* Insights */}
          <div className="rounded-xl border border-violet-100 bg-violet-50 p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-700">
                  Application Insights
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Great Progress 🚀
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Your application success rate is improving. Keep completing
                  recommended projects to increase your chances of getting
                  shortlisted.
                </p>

              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-violet-600 text-white shrink-0 ml-4">

                <span className="text-xl font-bold">
                  82%
                </span>

              </div>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-slate-50 p-4">

              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                Total Applied
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                26
              </h3>

            </div>

            <div className="rounded-xl bg-slate-50 p-4">

              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                Shortlisted
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-green-600">
                9
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default RecentApplications;