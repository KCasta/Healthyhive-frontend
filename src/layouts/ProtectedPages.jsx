import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedPages = () => {
  const navigate = useNavigate();
  const { accessToken } = useAuthContext();
  return accessToken ? <Outlet /> : <Navigate to="/LoginPage" />;
};

export default ProtectedPages;
