import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaArrowLeft, FaRocket } from 'react-icons/fa';

const ErrorPage = ({ errorCode = 404, errorMessage = "Page Not Found" }) => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Error Header */}
        <div className="bg-indigo-600 py-6 px-8 text-center">
          <div className="flex justify-center items-center space-x-4">
            <FaExclamationTriangle className="text-white text-4xl" />
            <h1 className="text-3xl font-bold text-white">
              Oops! Error {errorCode}
            </h1>
          </div>
        </div>

        {/* Error Content */}
        <div className="p-8 text-center">
          <div className="mb-6">
            <p className="text-xl text-gray-700 mb-2">{errorMessage}</p>
            <p className="text-gray-600">
              The page you're looking for doesn't exist or another error occurred.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <FaArrowLeft />
              <span>Return Home</span>
            </Link>
            <Link
              to="/dashboard"
              className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <FaRocket />
              <span>Go to Dashboard</span>
            </Link>
          </div>

          {/* Tech Details (hidden by default, shows on hover) */}
          <details className="text-left bg-gray-50 rounded-lg p-4 cursor-pointer">
            <summary className="text-indigo-600 font-medium">
              Technical Details
            </summary>
            <div className="mt-2 text-sm text-gray-600">
              <p>Error Code: {errorCode}</p>
              <p className="mt-1">Timestamp: {new Date().toLocaleString()}</p>
              <p className="mt-1">
                If this persists, please try to log in again or wait for sometime.
              </p>
            </div>
          </details>
        </div>
      </div>

      {/* Optional Branding */}
      <div className="mt-12 text-center">
        <Link to="/" className="flex items-center justify-center space-x-2">
          <span className="text-2xl font-bold text-indigo-600 italic">SwiftLink</span>
          <span className="text-2xl font-bold text-gray-800">Analytics</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;