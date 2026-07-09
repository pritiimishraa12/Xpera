import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import OrganizationLogin from "../pages/Auth/OrganizationLogin";
import OrganizationSignup from "../pages/Auth/OrganizationSignup";
import RoleSelection from "../pages/Auth/RoleSelection";
import StudentLogin from "../pages/Auth/StudentLogin";
import StudentSignup from "../pages/Auth/StudentSignup";
import ProtectedRoute from "./ProtectedRoute";
import StudentDashboard from "../pages/Student/StudentDashboard";
import OrganizationDashboard from "../pages/Organization/OrganizationDashboard";
import OrganizationProjects from "../pages/Organization/OrganizationProjects";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/role" element={<RoleSelection />} />
        <Route path="/auth/student/login" element={<StudentLogin />} />
        <Route path="/auth/student/signup" element={<StudentSignup />} />
        <Route path="/auth/organization/login" element={<OrganizationLogin />} />
        <Route path="/auth/organization/signup" element={<OrganizationSignup />} />

        {/* Protected Organization Routes */}
        <Route
          path="/organization"
          element={
            <ProtectedRoute allowedRole="organization">
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<OrganizationDashboard />} />
          <Route path="projects" element={<OrganizationProjects />} />
          {/* Add more organization routes here (e.g., applicants) */}
        </Route>

        {/* Protected Student Routes */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRole="student">
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<StudentDashboard />} />
          {/* Add more student routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;