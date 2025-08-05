import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="h-16 bg-indigo-600 z-50 flex items-center sticky top-0 shadow-md">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="font-bold text-2xl sm:text-3xl text-white">
            <span className="italic">Swift</span>Link Analytics
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className={`text-white hover:text-indigo-100 transition-colors ${
                path === "/" ? "font-semibold border-b-2 border-white" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-white hover:text-indigo-100 transition-colors ${
                path === "/about" ? "font-semibold border-b-2 border-white" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <button
              onClick={() => navigate("/signup")}
              className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-4 py-2 rounded-md transition-colors"
            >
              Sign Up
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {navbarOpen ? <RxCross2 /> : <IoIosMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-indigo-700 transition-all duration-300 ease-in-out ${
          navbarOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <Link
              to="/"
              className={`text-white text-lg ${
                path === "/" ? "font-semibold" : ""
              }`}
              onClick={() => setNavbarOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-white text-lg ${
                path === "/about" ? "font-semibold" : ""
              }`}
              onClick={() => setNavbarOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/signup");
                setNavbarOpen(false);
              }}
              className="bg-white text-indigo-600 font-medium px-6 py-2 rounded-md mt-2"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;