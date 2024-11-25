import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedPages = () => {
  // navigate to login page if not authenticated
  const navigate = useNavigate();
  const { accessToken } = useAuthContext();
  return accessToken ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default ProtectedPages;
// Compare this snippet from FRONTEND/my-react-app/src/pages/HomePage.jsx:
