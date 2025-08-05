import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="italic">Swift</span>Link Analytics
            </h2>
            <p className="text-indigo-100">
              Professional URL shortening and analytics platform for businesses and individuals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-indigo-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-indigo-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-indigo-100 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-indigo-100 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-100 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-indigo-100 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-indigo-100 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-indigo-100 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-indigo-100 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-600 mt-8 pt-8 text-center md:text-left text-indigo-100">
          <p>&copy; {new Date().getFullYear()} SwiftLink Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;