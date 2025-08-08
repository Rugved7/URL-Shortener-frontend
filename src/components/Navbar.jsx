import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextAPI/ContextAPI";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const queryClient = useQueryClient();

  const LogoutHandler = () => {
    queryClient.removeQueries();
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="h-16 bg-indigo-600 z-50 flex items-center sticky top-0 shadow-lg">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <h1 className="font-bold text-2xl sm:text-3xl text-white transition-all duration-200">
            <span className="text-2xl font-bold text-white italic group-hover:text-indigo-200">
              SwiftLink
            </span>
            <span className="text-2xl font-bold text-indigo-100 ml-2 group-hover:text-white">
              Analytics
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className={`text-white hover:text-indigo-100 transition-colors px-1 py-1 ${
                path === "/" ? "font-semibold border-b-2 border-white pb-1" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-white hover:text-indigo-100 transition-colors px-1 py-1 ${
                path === "/about" ? "font-semibold border-b-2 border-white pb-1" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className={`text-white hover:text-indigo-100 transition-colors px-1 py-1 ${
                path === "/features" ? "font-semibold border-b-2 border-white pb-1" : ""
              }`}
            >
              Features
            </Link>
          </li>

          <li className="flex items-center gap-4 ml-4">
            {token ? (
              <>
                <Link
                  to="/dashboard"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  Dashboard
                </Link>
                <button
                  onClick={LogoutHandler}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
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
          className="md:hidden text-white text-3xl p-1 rounded-full hover:bg-indigo-700 transition-colors"
          aria-label="Toggle menu"
        >
          {navbarOpen ? <RxCross2 /> : <IoIosMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-indigo-700 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          navbarOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col items-center space-y-4">
            <li className="w-full">
              <Link
                to="/"
                className={`block w-full text-center py-3 text-white text-lg ${
                  path === "/" ? "font-bold bg-indigo-800 rounded-lg" : "hover:bg-indigo-600 rounded-lg"
                }`}
                onClick={() => setNavbarOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/about"
                className={`block w-full text-center py-3 text-white text-lg ${
                  path === "/about" ? "font-bold bg-indigo-800 rounded-lg" : "hover:bg-indigo-600 rounded-lg"
                }`}
                onClick={() => setNavbarOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/features"
                className={`block w-full text-center py-3 text-white text-lg ${
                  path === "/features" ? "font-bold bg-indigo-800 rounded-lg" : "hover:bg-indigo-600 rounded-lg"
                }`}
                onClick={() => setNavbarOpen(false)}
              >
                Features
              </Link>
            </li>
            <li className="w-full pt-2 border-t border-indigo-600">
              {token ? (
                <div className="space-y-3 px-4">
                  <Link
                    to="/dashboard"
                    className="block w-full text-center bg-white text-indigo-600 font-medium py-3 rounded-lg shadow-sm"
                    onClick={() => setNavbarOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      LogoutHandler();
                      setNavbarOpen(false);
                    }}
                    className="block w-full text-center bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg shadow-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-3 px-4">
                  <button
                    onClick={() => {
                      navigate("/login");
                      setNavbarOpen(false);
                    }}
                    className="block w-full text-center bg-white text-indigo-600 font-medium py-3 rounded-lg shadow-sm"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setNavbarOpen(false);
                    }}
                    className="block w-full text-center bg-indigo-800 hover:bg-indigo-900 text-white font-medium py-3 rounded-lg shadow-sm"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;