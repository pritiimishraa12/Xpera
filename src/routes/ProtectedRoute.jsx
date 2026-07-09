import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRole }) {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // AuthContext currently holds off rendering children until !loading,
    // but just in case, provide a fallback.
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#061019] text-white">
        Loading...
      </div>
    );
  }

  // Not authenticated -> redirect to appropriate login
  if (!user || !profile) {
    if (allowedRole === "student") {
      return <Navigate to="/auth/student/login" state={{ from: location }} replace />;
    }
    return <Navigate to="/auth/organization/login" state={{ from: location }} replace />;
  }

  // Authenticated but wrong role -> redirect to their designated dashboard
  if (profile.role !== allowedRole) {
    if (profile.role === "student") {
      return <Navigate to="/student/dashboard" replace />;
    }
    if (profile.role === "organization") {
      return <Navigate to="/organization/dashboard" replace />;
    }
    // Fallback if role is totally unrecognized
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;