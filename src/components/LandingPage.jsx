import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLink, FaChartLine, FaShieldAlt, FaBolt } from "react-icons/fa";
import { useStoreContext } from "../contextAPI/ContextAPI";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  // Sample analytics data for the demo graph
  const analyticsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Link Clicks',
        data: [1250, 1890, 2100, 2780, 1890, 2390],
        backgroundColor: '#4f46e5', // indigo-600
        borderColor: '#4f46e5',
        borderWidth: 0,
        borderRadius: 6,
        hoverBackgroundColor: '#6366f1', // indigo-500
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1e1b4b', // indigo-900
        titleColor: '#ffffff',
        bodyColor: '#e0e7ff', // indigo-100
        borderColor: '#4f46e5', // indigo-600
        borderWidth: 1,
        padding: 12,
        usePointStyle: true,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#4b5563', // gray-600
        }
      },
      y: {
        grid: {
          color: '#e5e7eb', // gray-200
        },
        ticks: {
          color: '#4b5563', // gray-600
        }
      }
    },
    maintainAspectRatio: false
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
            <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Link Performance</h3>
              <div className="h-64">
                <Bar data={analyticsData} options={options} />
              </div>
              <p className="text-sm text-gray-500 mt-2"></p>
            </div>
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
            Build for professionals, Trusted by professionals 
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