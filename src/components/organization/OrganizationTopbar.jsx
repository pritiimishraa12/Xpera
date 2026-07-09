import "../../styles/organization/OrganizationTopbar.css";
import {
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineCalendarDays,
  HiOutlineChatBubbleLeftRight,
  HiOutlineChevronDown,
  HiOutlinePlus,
} from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function OrganizationTopbar({ onPostNew }) {
  const { profile } = useAuth();
  const organizationName = profile?.organization_name || profile?.full_name || "Organization";
  const navigate = useNavigate();

  function handlePost() {
    if (onPostNew) {
      onPostNew();
    } else {
      navigate("/organization/projects");
    }
  }

  return (
    <header className="organization-topbar">

      {/* Left Section */}

      <div className="topbar-left">

        <div>

          <h2 className="dashboard-title">
            Good morning, {organizationName}! 👋
          </h2>

          <p className="dashboard-subtitle">
            Here's what's happening with your projects and applicants today.
          </p>

        </div>

        <button className="post-project-btn" onClick={handlePost}>
          <HiOutlinePlus />
          <span>Post New Project</span>
        </button>

      </div>

      {/* Right Section */}

      <div className="topbar-right">

        {/* Search */}

        <div className="search-box">

          <HiOutlineMagnifyingGlass />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

        {/* Icons */}

        <button className="top-icon">

          <HiOutlineCalendarDays />

        </button>

        <button className="top-icon notification">

          <HiOutlineBell />

          <span className="badge">
            3
          </span>

        </button>

        <button className="top-icon">

          <HiOutlineChatBubbleLeftRight />

        </button>
        {/* Profile */}

        <div className="profile-dropdown">

          <div className="profile-avatar">

            <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-indigo-100 text-[15px] font-bold text-indigo-700">
              {organizationName !== "Organization" ? organizationName.substring(0, 2).toUpperCase() : "OR"}
            </div>

            <span className="online-dot"></span>

          </div>

          <div className="profile-details">

            <h4>{organizationName}</h4>

            <p>Organization</p>

          </div>

          <HiOutlineChevronDown className="dropdown-arrow" />

        </div>

      </div>

    </header>
  );
}