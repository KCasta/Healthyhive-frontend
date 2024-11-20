import React from "react";
import NavBarLayOut from "./NavBarLayOut";
import HomePage from "../pages/HomePage";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <NavBarLayOut />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
