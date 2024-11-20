import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const AuthLayout = () => {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
};

export default AuthLayout;
