import {
  FaBolt,
  FaChartLine,
  FaLock,
  FaUserShield,
  FaQrcode,
  FaGlobe,
  FaMobileAlt,
  FaCalendarAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Upcoming <span className="text-indigo-600">Features</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, share, and track your links effectively
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaBolt className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Lightning-Fast Shortening
            </h3>
            <p className="text-gray-600">
              Create short links instantly with our optimized platform. No waiting, 
              just paste your URL and get a shortened version in milliseconds.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaChartLine className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Real-Time Analytics
            </h3>
            <p className="text-gray-600">
              Track clicks, locations, devices, and referral sources. See exactly 
              who's clicking your links with detailed, up-to-the-minute reports.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaLock className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Link Expiration
            </h3>
            <p className="text-gray-600">
              Set expiration dates for your links. Perfect for time-sensitive 
              campaigns or temporary sharing needs.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaUserShield className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Password Protection
            </h3>
            <p className="text-gray-600">
              Add an extra layer of security with password-protected links. 
              Control who can access your content.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaQrcode className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              QR Code Generation
            </h3>
            <p className="text-gray-600">
              Convert any link into a QR code instantly. Perfect for print 
              materials, business cards, and offline marketing.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaGlobe className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Geographic Targeting
            </h3>
            <p className="text-gray-600">
              See exactly where in the world your clicks are coming from with 
              interactive maps and country-level statistics.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaMobileAlt className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Device Analytics
            </h3>
            <p className="text-gray-600">
              Know whether your audience is on mobile, desktop, or tablet. 
              Optimize your content for the right devices.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaCalendarAlt className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Historical Data
            </h3>
            <p className="text-gray-600">
              Compare performance over time with our historical analytics. 
              See trends and patterns in your link engagement.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 text-white p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of marketers, businesses, and creators who trust our 
            platform for their link management needs.
          </p>
          <Link to="/register">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Create Free Account
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;