import { NavLink } from "react-router-dom";
import "../../styles/organization/OrganizationSidebar.css";
import {
  HiOutlineSquares2X2,
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineHeart,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineCreditCard,
  HiOutlineCog6Tooth,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineSparkles,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";


const menuItems = [
  {
    name: "Dashboard",
    icon: <HiOutlineSquares2X2 />,
    path: "/organization/dashboard",
  },
  {
    name: "Projects",
    icon: <HiOutlineBriefcase />,
    path: "/organization/projects",
  },
  {
    name: "Applicants",
    icon: <HiOutlineUsers />,
    path: "/organization/applicants",
  },
  {
    name: "Shortlisted",
    icon: <HiOutlineHeart />,
    path: "/organization/shortlisted",
  },
  {
    name: "Messages",
    icon: <HiOutlineChatBubbleLeftRight />,
    path: "/organization/messages",
  },
  {
    name: "Team",
    icon: <HiOutlineUserGroup />,
    path: "/organization/team",
  },
  {
    name: "Analytics",
    icon: <HiOutlineChartBar />,
    path: "/organization/analytics",
  },
  {
    name: "Billing",
    icon: <HiOutlineCreditCard />,
    path: "/organization/billing",
  },
  {
    name: "Settings",
    icon: <HiOutlineCog6Tooth />,
    path: "/organization/settings",
  },
];

export default function OrganizationSidebar({
  collapsed,
  setCollapsed,
}) {
  const { profile } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/auth/organization/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <aside
      className={`organization-sidebar ${collapsed ? "collapsed" : ""
        }`}
    >
      {/* ==========================
             LOGO
      =========================== */}

      <div className="sidebar-logo">

        <div className="logo-circle">
          X
        </div>

        {!collapsed && (
          <div>
            <h2>Xpera</h2>
          </div>
        )}

      </div>

      {/* Collapse Button */}

      <button
        className="collapse-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <HiOutlineChevronRight />
        ) : (
          <HiOutlineChevronLeft />
        )}
      </button>

      {/* ==========================
            COMPANY CARD
      =========================== */}

      {!collapsed && (
        <div className="company-card">

          <div className="company-avatar">
            <HiOutlineBriefcase />
          </div>

          <h3>{profile?.organization_name || profile?.full_name || "Organization"}</h3>

          <span className="truncate w-full text-center px-2">{profile?.email || "organization@example.com"}</span>

        </div>
      )}

      {/* ==========================
             NAVIGATION
      =========================== */}

      <nav className="sidebar-nav">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            {!collapsed && (
              <span>{item.name}</span>
            )}

          </NavLink>

        ))}

      </nav>

      {/* ==========================
           HELPER CARD
      =========================== */}

      {!collapsed && (
        <div className="mb-8 mt-2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-[22px] text-white shadow-lg ring-1 ring-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <HiOutlineSparkles className="text-6xl" />
          </div>

          <div className="flex items-center gap-2 mb-3 relative z-10">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md text-violet-300">
              <HiOutlineSparkles className="text-[14px]" />
            </div>
            <h3 className="text-[13px] font-bold tracking-wide">AI Hiring Guide</h3>
          </div>

          <ul className="space-y-2 mt-3 relative z-10 text-[12px] font-medium text-slate-300">
            <li className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-emerald-500/20 text-emerald-400 p-0.5"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
              <span>Complete organization profile</span>
            </li>
            <li className="flex items-start gap-2 text-white">
              <div className="mt-0.5 rounded-full border-2 border-violet-400 w-3.5 h-3.5"></div>
              <span className="font-bold text-white shadow-sm">+ Publish first project</span>
            </li>
            <li className="flex items-start gap-2 opacity-50">
              <div className="mt-0.5 rounded-full border-2 border-slate-500 w-3.5 h-3.5"></div>
              <span>Invite talented candidates</span>
            </li>
          </ul>
        </div>
      )}
      {/* ==========================
            FOOTER
      =========================== */}

      <div className="sidebar-footer">



        <button className="logout-btn" onClick={handleLogout}>

          <HiOutlineArrowLeftOnRectangle />

          {!collapsed && (
            <span>Logout</span>
          )}

        </button>

      </div>

    </aside>
  );
}
