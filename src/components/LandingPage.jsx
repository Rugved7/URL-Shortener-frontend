import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLink, FaChartLine, FaShieldAlt, FaBolt } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();

  const dashBoardNavigateHandler = () => {
    // Navigation logic will be added here
  };

  const FeatureCard = ({ title, desc, icon }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full"
    >
      <div className="flex items-start mb-4">
        <div className="text-indigo-600 text-2xl mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="text-indigo-600">SwiftLink Analytics</span> Simplifies URL Shortening
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8"
            >
              Professional-grade URL shortening with real-time analytics. Create, manage, and track your links with our powerful platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={dashBoardNavigateHandler}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Manage Links
              </button>
              <button
                onClick={dashBoardNavigateHandler}
                className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-2 px-6 rounded-md transition-colors"
              >
                Create Short Link
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex justify-center"
          >
            <img 
              src="/images/img2.png" 
              alt="URL Analytics Dashboard" 
              className="w-full max-w-lg rounded-xl shadow-lg border border-gray-100"
            />
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Trusted by professionals at world-class companies
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Simple URL Shortening"
              desc="Create short, memorable URLs in just a few clicks with our intuitive interface and quick setup process."
              icon={<FaLink />}
            />
            <FeatureCard
              title="Powerful Analytics"
              desc="Track clicks, geographical data, and referral sources to optimize your marketing strategies."
              icon={<FaChartLine />}
            />
            <FeatureCard
              title="Enhanced Security"
              desc="Advanced encryption protects all shortened URLs, ensuring your data remains safe and secure."
              icon={<FaShieldAlt />}
            />
            <FeatureCard
              title="Fast and Reliable"
              desc="Lightning-fast redirects with high uptime ensure a seamless experience for your users."
              icon={<FaBolt />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;