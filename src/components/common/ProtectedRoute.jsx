import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

export default function ProtectedRoute({ allowedRoles = [] }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    const fallback =
      user.role === "ADMIN"
        ? "/admin"
        : user.role === "TEACHER"
          ? "/teacher"
          : "/my-courses";

    return <Navigate to={fallback} replace />;
  }

  return <Outlet />;
}
