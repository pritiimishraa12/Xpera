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
  {
    title: "Dashboard",
    icon: HiOutlineHome,
    path: "/student/dashboard",
  },
  {
    title: "Projects",
    icon: HiOutlineBriefcase,
    path: "/student/projects",
  },
  {
    title: "Applications",
    icon: HiOutlineClipboardList,
    path: "/student/applications",
  },
  {
    title: "Verified Skills",
    icon: HiOutlineBadgeCheck,
    path: "/student/skills",
  },
  {
    title: "Certificates",
    icon: HiOutlineAcademicCap,
    path: "/student/certificates",
  },
  {
    title: "AI Career Coach",
    icon: HiOutlineSparkles,
    path: "/student/ai-coach",
    badge: "BETA",
  },
  {
    title: "Profile",
    icon: HiOutlineUser,
    path: "/student/profile",
  },
  {
    title: "Settings",
    icon: HiOutlineCog,
    path: "/student/settings",
  },
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
    <aside className="fixed left-0 top-0 hidden md:flex h-screen w-[245px] flex-col border-r border-slate-200 bg-white">

      {/* Logo */}

      <div className="flex h-20 items-center border-b border-slate-100 px-6">

        <div className="relative h-10 w-10">

          <span className="absolute left-4 top-0 h-10 w-[5px] rotate-45 rounded-full bg-violet-700"></span>

          <span className="absolute left-4 top-0 h-10 w-[5px] -rotate-45 rounded-full bg-violet-500"></span>

        </div>

        <div className="ml-3">

          <h1 className="text-[22px] font-extrabold tracking-tight text-slate-900">
            Xpera
          </h1>

          <p className="text-xs text-slate-500">
            Student Workspace
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-5 py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-200 ${isActive
                    ? "bg-violet-50 text-violet-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-4">

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${isActive
                          ? "bg-violet-100"
                          : "bg-transparent group-hover:bg-slate-100"
                          }`}
                      >
                        <Icon
                          className={`text-[20px] ${isActive
                            ? "text-violet-700"
                            : "text-slate-500"
                            }`}
                        />
                      </div>

                      <span className="text-[15px] font-semibold">
                        {item.title}
                      </span>

                    </div>

                    {item.badge && (
                      <span className="rounded-full bg-violet-100 px-2 py-1 text-[10px] font-bold tracking-wide text-violet-700">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}


          {/* Progress Card */}

          <div className="mt-8 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-white p-4">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                  Level
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  Builder
                </h3>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white">

                <HiOutlineSparkles className="text-2xl" />

              </div>

            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Complete
              <span className="font-semibold text-violet-700">
                {" "}2 more projects{" "}
              </span>
              to unlock the
              <span className="font-semibold">
                {" "}Professional
              </span>
              badge.
            </p>

            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between">

                <span className="text-xs font-medium text-slate-500">
                  Progress
                </span>

                <span className="text-xs font-bold text-violet-700">
                  68%
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-violet-100">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-700 to-fuchsia-500"
                  style={{ width: "68%" }}
                />

              </div>

            </div>

          </div>
        </div>
      </nav>
      {/* Footer */}

      <div className="shrink-0 border-t border-slate-100 p-4">

        <div className="rounded-3xl bg-slate-50 p-4">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-lg font-bold text-violet-700">
              {profile?.full_name ? profile.full_name.substring(0, 2).toUpperCase() : "ST"}
            </div>

            <div>
              <h4 className="text-[15px] font-bold text-slate-900">
                {profile?.full_name || "Student"}
              </h4>
              <p className="mt-1 text-xs text-slate-500">
                Level 3 • Builder
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-white p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">
                XP Earned
              </span>
              <span className="text-sm font-bold text-violet-700">
                340 XP
              </span>
            </div>
          </div>

        </div>

        <button onClick={handleLogout} className="mt-3 flex w-full items-center gap-4 rounded-2xl px-4 py-2.5 text-slate-600 transition-all duration-200 hover:bg-red-50 hover:text-red-600">

          <HiOutlineLogout className="text-[20px]" />

          <span className="font-semibold">
            Logout
          </span>

        </button>

      </div >

    </aside >
  );
}

export default Sidebar;