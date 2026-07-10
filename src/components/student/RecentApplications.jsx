import {
  HiOutlineClock,
  HiOutlineChevronRight,
  HiOutlineBriefcase,
} from "react-icons/hi";

const applications = [
  {
    company: "Fintech Dashboard",
    role: "Frontend Developer",
    date: "12 May 2026",
    status: "Under Review",
    color: "bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-500/20",
    logo: "💳",
  },
  {
    company: "Travel Booking App",
    role: "React Developer",
    date: "10 May 2026",
    status: "Shortlisted",
    color: "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-500/20",
    logo: "✈️",
  },
  {
    company: "E-Commerce Platform",
    role: "UI Developer",
    date: "08 May 2026",
    status: "Applied",
    color: "bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-500/20",
    logo: "🛒",
  },
];

function RecentApplications() {
  return (
    <section className="flex flex-col h-full rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:border-slate-300/80 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-100">
        <div>
          <h2 className="text-[20px] font-bold tracking-tight text-slate-900">
            Recent Applications
          </h2>
          <p className="mt-1 text-[13px] font-medium text-slate-500">
            Track your latest project applications
          </p>
        </div>
        <button className="flex items-center gap-1 text-[13px] font-semibold text-violet-600 transition-colors hover:text-violet-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded p-1">
          View All <HiOutlineChevronRight className="stroke-2" />
        </button>
      </div>

      {/* List */}
      <div className="flex-1 flex flex-col pt-6">
        <div className="flex flex-col space-y-6">
          {applications.map((item) => (
            <div key={item.company} className="group flex items-start sm:items-center gap-4 cursor-pointer">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-slate-50 border border-slate-200/60 shadow-[0_2px_6px_-2px_rgba(0,0,0,0.03)] text-[22px] transition-all duration-300 ease-out group-hover:scale-[1.05] group-hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.06)] group-hover:border-slate-300 xl:mt-0 mt-0.5">
                {item.logo}
              </div>
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100/0 sm:border-slate-100/50 pb-4 sm:pb-0 group-last:border-0 group-last:pb-0">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-[15px] font-bold text-slate-900 transition-colors group-hover:text-violet-700">
                    {item.company}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[12px] text-slate-500 font-medium">
                    <p className="flex items-center gap-1.5"><HiOutlineBriefcase className="text-slate-400" /> {item.role}</p>
                    <span className="hidden sm:block h-[3px] w-[3px] rounded-full bg-slate-300" />
                    <p className="flex items-center gap-1.5"><HiOutlineClock className="text-slate-400" /> Applied {item.date}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center self-start sm:self-center mt-3 sm:mt-0 rounded-full px-3 py-1 text-[11px] font-bold shadow-sm transition-all duration-300 group-hover:opacity-90 ${item.color.replace('ring-1 ring-inset ring', 'ring-1 ring-inset ring')}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div className="mt-8 rounded-[18px] bg-violet-50/40 p-5 border border-violet-100/80 shadow-[0_2px_4px_-1px_rgba(124,58,237,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_-2px_rgba(124,58,237,0.08)] hover:bg-violet-50/60 relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-[6px] bg-violet-100 text-[10px] text-violet-600 ring-1 ring-inset ring-violet-200">
                  🚀
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-violet-700">
                  Application Insights
                </p>
              </div>
              <h3 className="text-[15px] font-bold text-slate-900">
                Great Progress
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 max-w-[280px]">
                Your success rate is improving. Keep completing recommended projects to increase your chances.
              </p>
            </div>
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_10px_-2px_rgba(124,58,237,0.15)] ring-[3px] ring-white">
              <svg className="absolute inset-0 h-full w-full -rotate-90">
                <circle cx="32" cy="32" r="30" fill="none" stroke="#f5f3ff" strokeWidth="4" />
                <circle cx="32" cy="32" r="30" fill="none" stroke="#7c3aed" strokeWidth="4" strokeDasharray="188.4" strokeDashoffset={188.4 * (1 - 0.82)} className="transition-all duration-1000 ease-out" strokeLinecap="round" />
              </svg>
              <span className="relative text-[14px] font-extrabold tracking-tight text-violet-700">82%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentApplications;