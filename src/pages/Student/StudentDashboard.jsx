import Sidebar from "../../components/student/Sidebar";
import Topbar from "../../components/student/Topbar";
import StatsCards from "../../components/student/StatsCards";
import CareerCoach from "../../components/student/CareerCoach";
import RecommendedProject from "../../components/student/RecommendedProject";
import RecentApplications from "../../components/student/RecentApplications";
import XPChart from "../../components/student/XPChart";
import Achievements from "../../components/student/Achievements";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        <main className="flex-1 overflow-x-hidden md:ml-[245px]">
          <div className="mx-auto w-full max-w-[1700px] px-5 py-6 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

            {/* Topbar */}

            <Topbar />

            {/* Stats */}

            <div className="mt-8">

              <StatsCards />

            </div>

            {/* Hero Row */}

            <div className="mt-8 grid grid-cols-1 gap-6 lg:gap-8 xl:grid-cols-12">

              <div className="xl:col-span-8">

                <CareerCoach />

              </div>

              <div className="xl:col-span-4">

                <RecommendedProject />

              </div>

            </div>

            {/* Bottom Row */}

            <div className="mt-8 grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3">

              <div>

                <RecentApplications />

              </div>

              <div>

                <XPChart />

              </div>

              <div>

                <Achievements />

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default StudentDashboard;