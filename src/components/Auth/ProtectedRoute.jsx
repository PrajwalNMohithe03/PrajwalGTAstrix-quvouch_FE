import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
  const isAuth = localStorage.getItem("isAuth");
  const role = localStorage.getItem("role");

  if (!isAuth) {
    return <Navigate to="/signup" replace />;
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/signup" replace />;
  }

  return children;
}
