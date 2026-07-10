import Sidebar from "../../components/student/Sidebar";
import Topbar from "../../components/student/Topbar";
import StatsCards from "../../components/student/StatsCards";
import CareerCoach from "../../components/student/CareerCoach";
import RecommendedProject from "../../components/student/RecommendedProject";
import RecentApplications from "../../components/student/RecentApplications";
import XPChart from "../../components/student/XPChart";
import Achievements from "../../components/student/Achievements";
import { useAuth } from "../../context/AuthContext";

function StudentDashboard() {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-800 antialiased selection:bg-violet-100 selection:text-violet-900">
      <div>
        {/* Sidebar */}
        <Sidebar />

        <main className="overflow-x-hidden md:ml-[260px] pb-12">
          <div className="mx-auto w-full max-w-[1700px] px-5 py-8 sm:px-8 lg:px-10">

            {/* Topbar (Search + Nav) */}
            <Topbar />

            {/* Welcome Section */}
            <div className="mt-10 mb-8">
              <h1 className="text-[28px] font-black tracking-tight text-slate-900">
                Welcome back{profile?.full_name ? `, ${profile.full_name.split(" ")[0]}` : ""}! 👋
              </h1>
              <p className="mt-1.5 text-[15px] font-medium text-slate-500">
                Continue building your real-world experience and unlock your next career milestone.
              </p>
            </div>

            {/* AI Career Coach (Full Width) */}
            <div className="mt-6">
              <CareerCoach />
            </div>

            {/* Recommended Project (Full Width) */}
            <div className="mt-6">
              <RecommendedProject />
            </div>

            {/* Stats */}
            <div className="mt-6">
              <StatsCards />
            </div>

            {/* Applications & Analytics (2 Cards) */}
            <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
              <RecentApplications />
              <XPChart />
            </div>

            {/* Achievements */}
            <div className="mt-6">
              <Achievements />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentDashboard;