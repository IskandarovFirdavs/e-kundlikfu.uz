import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("authToken"); // login da token saqlanganmi tekshir
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
}
