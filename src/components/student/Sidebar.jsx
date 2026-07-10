import {
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineClipboardList,
  HiOutlineBadgeCheck,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";

const menuItems = [
  { title: "Dashboard", icon: HiOutlineHome, path: "/student/dashboard" },
  { title: "Projects", icon: HiOutlineBriefcase, path: "/student/projects" },
  { title: "Applications", icon: HiOutlineClipboardList, path: "/student/applications" },
  { title: "Verified Skills", icon: HiOutlineBadgeCheck, path: "/student/skills" },
  { title: "Certificates", icon: HiOutlineAcademicCap, path: "/student/certificates" },
  { title: "AI Career Coach", icon: HiOutlineSparkles, path: "/student/ai-coach", badge: "BETA" },
  { title: "Profile", icon: HiOutlineUser, path: "/student/profile" },
  { title: "Settings", icon: HiOutlineCog, path: "/student/settings" },
];

function Sidebar() {
  const { profile } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/auth/student/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <aside className="fixed left-0 top-0 hidden md:flex h-screen w-[260px] flex-col border-r border-slate-200/60 bg-white">

      {/* Logo */}
      <div className="flex h-[88px] shrink-0 items-center px-6">
        <div className="relative h-8 w-8">
          <div className="absolute left-3 top-0 h-8 w-[4px] rotate-45 rounded-full bg-violet-600 shadow-[0_2px_8px_-2px_rgba(124,58,237,0.5)]"></div>
          <div className="absolute left-3 top-0 h-8 w-[4px] -rotate-45 rounded-full bg-violet-400 shadow-sm"></div>
        </div>
        <div className="ml-3">
          <h1 className="text-xl font-black tracking-tight text-slate-900">
            Xpera
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-[12px] px-3 py-2.5 transition-all duration-200 ease-out ${isActive
                    ? "bg-violet-50/80 text-violet-700 font-bold"
                    : "text-slate-500 font-semibold hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3.5">
                      <Icon
                        className={`text-[20px] transition-transform duration-200 ease-out group-hover:scale-110 ${isActive ? "text-violet-600" : "text-slate-400 group-hover:text-slate-500"
                          }`}
                      />
                      <span className="text-[14px]">
                        {item.title}
                      </span>
                    </div>
                    {item.badge && (
                      <span className="rounded-[6px] bg-violet-100 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-violet-600">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Progress Card */}
        <div className="mx-2 mt-8 rounded-[20px] bg-slate-900 p-5 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.4)] relative overflow-hidden">
          <div className="absolute right-0 top-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-violet-500/20 blur-xl"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-violet-300">
                Level
              </p>
              <h3 className="mt-1 text-[17px] font-extrabold tracking-tight text-white">
                Builder
              </h3>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-violet-500/20 text-violet-300 ring-1 ring-inset ring-violet-500/30">
              <HiOutlineSparkles className="text-[20px]" />
            </div>
          </div>
          <div className="relative z-10 mt-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Progress
              </span>
              <span className="text-[10px] font-bold text-white">
                68%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-800 ring-1 ring-inset ring-white/5">
              <div
                className="h-full rounded-full bg-violet-500 transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                style={{ width: "68%" }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="shrink-0 p-4 border-t border-slate-100/60 pb-6">
        <div className="rounded-[16px] bg-slate-50 border border-slate-200/50 p-3 shadow-sm transition-all duration-300 hover:border-slate-300/60 hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-violet-500 to-fuchsia-500 text-[11px] font-extrabold tracking-wide text-white shadow-[0_2px_8px_-2px_rgba(139,92,246,0.5)]">
              {profile?.full_name ? profile.full_name.substring(0, 2).toUpperCase() : "ST"}
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="truncate text-[14px] font-bold text-slate-900 leading-tight">
                {profile?.full_name || "Student"}
              </h4>
              <p className="truncate text-[11px] font-semibold text-slate-500 mt-0.5">
                Premium Plan
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-3 flex w-full items-center gap-3 rounded-[12px] px-3 py-2 text-slate-500 transition-all duration-200 ease-out hover:bg-red-50 hover:text-red-600 group focus:outline-none"
        >
          <HiOutlineLogout className="text-[18px] group-hover:text-red-500 transition-colors" />
          <span className="text-[13px] font-bold">
            Log out
          </span>
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;