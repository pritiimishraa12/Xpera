import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineBriefcase,
  HiOutlineCommandLine,
  HiOutlineDevicePhoneMobile,
  HiOutlineChartBar,
  HiOutlineCpuChip,
  HiEllipsisVertical,
} from "react-icons/hi2";
import "../../styles/organization/ActiveProjects.css";
import { getOrganizationProjects } from "../../services/projects";
import { useAuth } from "../../context/AuthContext";

// Keep a set of predefined styles to randomly or sequentially assign to dynamic projects for beautiful UI
const projectStyles = [
  { icon: <HiOutlineBriefcase className="text-violet-600" />, bg: "bg-violet-50" },
  { icon: <HiOutlineCommandLine className="text-blue-600" />, bg: "bg-blue-50" },
  { icon: <HiOutlineDevicePhoneMobile className="text-sky-600" />, bg: "bg-sky-50" },
  { icon: <HiOutlineChartBar className="text-indigo-600" />, bg: "bg-indigo-50" },
  { icon: <HiOutlineCpuChip className="text-purple-600" />, bg: "bg-purple-50" },
];

export default function ActiveProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!user) return;
      try {
        const data = await getOrganizationProjects(user.id);
        const activeData = data.filter(p => p.status === "Active").slice(0, 5);
        setProjects(activeData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [user]);

  return (
    <div className="active-projects-card">

      {/* Header */}
      <div className="active-projects-header">
        <div>
          <h3>Active Projects</h3>
          <p>Currently hiring</p>
        </div>
        <Link to="/organization/projects" className="active-projects-view-all rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
          View all &rarr;
        </Link>
      </div>

      {/* List */}
      <div className="project-list-wrap">
        {loading ? (
          <div className="space-y-4 py-2">
            {[1, 2, 3].map(n => (
              <div key={n} className="flex animate-pulse items-center gap-3 rounded-xl border border-slate-100 p-3">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-100" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-1/2 rounded bg-slate-100" />
                  <div className="h-3 w-1/3 rounded bg-slate-50" />
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-6 text-slate-500">
            <span className="text-4xl mb-3 opacity-80">💼</span>
            <h4 className="text-[15px] font-bold text-slate-900">No active projects</h4>
            <p className="text-sm mt-1 text-center">You aren't actively hiring for any projects right now.</p>
            <Link to="/organization/projects" className="mt-4 rounded-lg bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-500">
              Post a Project
            </Link>
          </div>
        ) : (
          projects.map((project, index) => {
            const style = projectStyles[index % projectStyles.length];
            return (
              <div key={project.id} className="project-row">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={`project-icon-box ${style.bg}`}>
                    {style.icon}
                  </div>
                  <div className="project-info">
                    <h4>{project.title}</h4>
                    <p>{project.type}</p>
                  </div>
                </div>
                <button
                  aria-label={`Options for ${project.title}`}
                  className="project-dots-btn rounded-md p-1 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  <HiEllipsisVertical className="text-slate-400 hover:text-slate-600 transition-colors" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}