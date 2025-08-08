import React from "react";
import {
  FaLink,
  FaChartBar,
  FaShieldAlt,
  FaRocket,
  FaPalette,
  FaUsers,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-indigo-600">SwiftLink Analytics</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Revolutionizing the way you share and track links with powerful
            analytics, customization, and enterprise-grade security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaLink className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Instant URL Shortening
            </h3>
            <p className="text-gray-600">
              Create short, branded links in seconds with our lightning-fast
              platform. Perfect for social media, emails, and digital marketing
              campaigns.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaChartBar className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Advanced Analytics
            </h3>
            <p className="text-gray-600">
              Track clicks, geographic locations, devices, and referral sources
              in real-time. Make data-driven decisions with our comprehensive
              dashboard.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaShieldAlt className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Military-Grade Security
            </h3>
            <p className="text-gray-600">
              Enterprise-level encryption and threat protection ensure your
              links and data remain secure against malicious attacks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaPalette className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Custom Branding
            </h3>
            <p className="text-gray-600">
              Use your own domain and customize links with your brand name.
              Increase recognition and click-through rates.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaRocket className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Lightning Fast
            </h3>
            <p className="text-gray-600">
              99.9% uptime with global CDN ensures your links load instantly
              anywhere in the world, maximizing conversion rates.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaUsers className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Team Collaboration
            </h3>
            <p className="text-gray-600">
              Share link management with your team, set permissions, and
              collaborate seamlessly on marketing campaigns.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
 