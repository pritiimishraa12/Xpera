import { useState } from "react";
import OrganizationTopbar from "../../components/organization/OrganizationTopbar.jsx";
import OrganizationSidebar from "../../components/organization/OrganizationSidebar.jsx";
import RecentApplicants from "../../components/organization/RecentApplicants.jsx";
import ActiveProjects from "../../components/organization/ActiveProjects.jsx";
import UpcomingInterviews from "../../components/organization/UpcomingInterviews.jsx";
import HelpCard from "../../components/organization/HelpCard.jsx";
import "../../styles/organization/OrganizationDashboard.css";
import {
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineHeart,
  HiOutlineChartBar,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";



const stats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2",
    icon: <HiOutlineBriefcase />,
    color: "purple",
  },
  {
    title: "Total Applicants",
    value: "356",
    change: "+18%",
    icon: <HiOutlineUsers />,
    color: "blue",
  },
  {
    title: "Shortlisted",
    value: "48",
    change: "+8",
    icon: <HiOutlineHeart />,
    color: "pink",
  },
  {
    title: "Profile Views",
    value: "1,245",
    change: "+24%",
    icon: <HiOutlineChartBar />,
    color: "green",
  },
];

// Applications chart data
const applicationsData = [
  { name: "May 1", applications: 20 },
  { name: " ", applications: 38 },
  { name: "May 8", applications: 28 },
  { name: "  ", applications: 50 },
  { name: "May 15", applications: 38 },
  { name: "   ", applications: 75 },
  { name: "May 22", applications: 45 },
  { name: "    ", applications: 48 },
  { name: "May 29", applications: 55 },
];

// Applications by Status data
const applicationStatusData = [
  { name: "Applied", value: 62, color: "#7c3aed" },
  { name: "Shortlisted", value: 18, color: "#3b82f6" },
  { name: "Interviewed", value: 11, color: "#22c55e" },
  { name: "Hired", value: 9, color: "#f59e0b" },
];

export default function OrganizationDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [dateFilter, setDateFilter] = useState("This Month");

  return (
    <div className="organization-layout">
      <OrganizationSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="organization-dashboard">

        <OrganizationTopbar />

        {/* ================= KPI Cards ================= */}

        <div className="stats-grid">

          {stats.map((card, index) => (

            <div
              className={`stat-card ${card.color}`}
              key={index}
            >

              <div className="stat-top">

                <div className="stat-icon">
                  {card.icon}
                </div>

                <span className="stat-change">
                  {card.change}
                </span>

              </div>

              <h2>{card.value}</h2>

              <p>{card.title}</p>

            </div>

          ))}

        </div>

        {/* ================= Dashboard Grid ================= */}

        <div className="dashboard-grid">

          {/* LEFT COLUMN */}

          <div className="dashboard-left-column">

            {/* Applications Overview */}

            <div className="dashboard-card analytics-card">

              <div className="card-header">

                <div>
                  <h3>Applications Overview</h3>
                </div>

                <div className="relative inline-block">
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="view-btn appearance-none pr-8 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
                    aria-label="Filter Analytics"
                  >
                    <option value="Last 7 Days">Last 7 Days</option>
                    <option value="This Month">This Month</option>
                    <option value="Last 6 Months">Last 6 Months</option>
                  </select>
                  <HiOutlineChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" style={{ fontSize: "14px" }} />
                </div>

              </div>

              <div style={{ height: "320px", marginTop: "25px" }}>

                <ResponsiveContainer width="100%" height="100%">

                  <AreaChart data={applicationsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>

                    <defs>

                      <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">

                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />

                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />

                      </linearGradient>

                    </defs>

                    <CartesianGrid vertical={false} stroke="#ECECEC" strokeDasharray="3 3" />

                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />

                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />

                    <Tooltip
                      cursor={{ stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '4 4' }}
                      contentStyle={{
                        borderRadius: 16,
                        border: "1px solid #ECECEC",
                        boxShadow: "0 12px 40px rgba(15,23,42,.08)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        padding: "12px 16px"
                      }}
                    />

                    <Area type="monotone" dataKey="applications" stroke="#7c3aed" strokeWidth={2} fillOpacity={1} fill="url(#colorApplications)" />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </div>

            {/* Recent Applicants */}

            <RecentApplicants />

          </div>

          {/* RIGHT COLUMN */}

          <div className="dashboard-right-column">

            {/* Applications by Status */}

            <div className="dashboard-card status-card">

              <div className="card-header">

                <div>
                  <h3>Applications by Status</h3>
                </div>

              </div>

              <div style={{ height: "220px", marginTop: "16px" }}>
                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Tooltip
                      contentStyle={{
                        borderRadius: 16,
                        border: "1px solid #ECECEC",
                        boxShadow: "0 12px 40px rgba(15,23,42,.08)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        padding: "12px 16px"
                      }}
                    />

                    <Pie
                      data={applicationStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >

                      {applicationStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}

                    </Pie>

                  </PieChart>

                </ResponsiveContainer>
              </div>

              <div className="source-list">

                <div className="source-item">
                  <span className="dot purple"></span>
                  <p>Applied</p>
                  <strong>356 (62%)</strong>
                </div>

                <div className="source-item">
                  <span className="dot blue"></span>
                  <p>Shortlisted</p>
                  <strong>48 (18%)</strong>
                </div>

                <div className="source-item">
                  <span className="dot green"></span>
                  <p>Interviewed</p>
                  <strong>32 (11%)</strong>
                </div>

                <div className="source-item">
                  <span className="dot orange"></span>
                  <p>Hired</p>
                  <strong>12 (9%)</strong>
                </div>

              </div>

            </div>

            {/* Active Projects */}

            <ActiveProjects />

            {/* Upcoming Interviews */}

            <UpcomingInterviews />

            {/* HelpCard */}

            <HelpCard />

          </div>

        </div>

      </div>

    </div>

  );

}