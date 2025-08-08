import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextAPI/ContextAPI";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();

  const LogoutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    toast.success("Logged out successfully");
    navigate("/");
  };

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
          <li className="flex items-center gap-4">
            {token ? (
              <>
                <Link
                  to="/dashboard"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-4 py-2 rounded-md transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={LogoutHandler}
                  className="bg-red-500 text-white hover:shadow-gray-700 font-medium px-5 py-2 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-4 py-2 rounded-md transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-red-500 text-white hover:shadow-gray-700 font-medium px-5 py-2 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  Sign Up
                </button>
              </>
            )}
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
          navbarOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
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
          <li className="w-full px-6 space-y-3">
            {token ? (
              <>
                <Link
                  to="/dashboard"
                  className="block w-full text-center bg-white text-indigo-600 font-medium py-2 rounded-md"
                  onClick={() => setNavbarOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    LogoutHandler();
                    setNavbarOpen(false);
                  }}
                  className="block w-full text-center bg-red-500 text-white font-medium py-2 rounded-lg shadow-md hover:shadow-gray-700 hover:shadow-lg transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/login");
                    setNavbarOpen(false);
                  }}
                  className="block w-full text-center bg-white text-indigo-600 font-medium py-2 rounded-md"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                    setNavbarOpen(false);
                  }}
                  className="block w-full text-center bg-white text-indigo-600 font-medium py-2 rounded-md"
                >
                  Sign Up
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
