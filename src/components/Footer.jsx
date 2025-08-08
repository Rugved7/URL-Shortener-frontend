import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="italic font-serif">Swift</span>
              <span>Link Analytics</span>
            </h2>
            <p className="text-indigo-100 leading-relaxed max-w-md">
              Professional URL shortening and analytics platform for businesses
              and individuals.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-indigo-100 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-indigo-100 hover:text-white transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="text-indigo-100 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-5">
              <a
                href="mailto:rugvedagasti7@gmail.com"
                target="blank"
                className="text-indigo-100 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="Email"
              >
                <MdOutlineEmail size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/rugved-agasti-09350121b/"
                target="blank"
                className="text-indigo-100 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/Rugved7/URL-Shortener-frontend"
                target="blank"
                className="text-indigo-100 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-600 pt-8">
          <p className="text-center text-indigo-100 text-sm">
            &copy; {new Date().getFullYear()} SwiftLink Analytics made by Rugved
            Aagsti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
