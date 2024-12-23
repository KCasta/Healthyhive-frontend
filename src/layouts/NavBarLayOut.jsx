import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
import "./NavBar.css";

function NavBarLayOut() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex flex-row justify-between items-center py-4 px-8 bg-orange-100 shadow-xl sticky top-0 z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          <Link to="/">
            <h1>
              <span className="text-red-500 gap-5">Healthy</span>Hive
            </h1>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-semibold">
          <ScrollLink
            to="services" // Link to the 'services' section ID
            smooth={true}
            offset={-50} // Optional: Adjust scroll position to account for navbar height
            duration={500} // Optional: Scroll duration in ms
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about" // Link to the 'about' section ID
            smooth={true}
            offset={-50}
            duration={500}
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            About
          </ScrollLink>
          <Link
            to="/auth/signin"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 right-8 w-48 bg-orange-50 shadow-lg rounded-lg flex flex-col space-y-4 py-4 px-6 md:hidden transition-all duration-300 transform ${
            isMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ScrollLink
            to="services"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={toggleMenu}
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={toggleMenu}
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            About
          </ScrollLink>
          <Link
            to="/auth/signin"
            onClick={toggleMenu}
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBarLayOut;
