import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import OrganizationLogin from "../pages/Auth/OrganizationLogin";
import OrganizationSignup from "../pages/Auth/OrganizationSignup";
import RoleSelection from "../pages/Auth/RoleSelection";
import StudentLogin from "../pages/Auth/StudentLogin";
import StudentSignup from "../pages/Auth/StudentSignup";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/role" element={<RoleSelection />} />
        <Route path="/auth/student/login" element={<StudentLogin />} />
        <Route path="/auth/student/signup" element={<StudentSignup />} />
        <Route path="/auth/organization/login" element={<OrganizationLogin />} />
        <Route path="/auth/organization/signup" element={<OrganizationSignup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;