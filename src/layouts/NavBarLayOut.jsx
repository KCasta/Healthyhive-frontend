// src/App.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBarLayOut() {
  return (
    <>
      <nav className="flex flex-row justify-between items-center py-4 px-8 bg-orange-100">
        <div className="text-2xl font-bold text-orange-500 flex w-[100%] h-[100%] mx-auto items-center justify-between ">
          <Link to="/">
            <h1>
              {" "}
              <span className="text-red-500 gap-5">Healthy</span>Hive
            </h1>
          </Link>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-semibold ">
            <Link
              to="/Services"
              className="text-gray-700  hover:text-black transition-colors"
            >
              <p> Services </p>
            </Link>
            <Link
              to="/About"
              className="text-gray-700 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              to="/LoginPage"
              className="text-gray-700 hover:text-black transition-colors"
            >
              login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarLayOut;
