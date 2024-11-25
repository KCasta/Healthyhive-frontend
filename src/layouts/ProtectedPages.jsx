import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedPages = () => {
  // navigate to login page if not authenticated

  const { accessToken } = useAuthContext();
  return accessToken ? <Outlet /> : <Navigate to="/auth/signin" />;
};

export default ProtectedPages;
// Compare this snippet from FRONTEND/my-react-app/src/pages/HomePage.jsx:
