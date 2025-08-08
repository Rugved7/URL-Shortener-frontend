import { Route, Routes } from "react-router-dom";
import ShortenUrlPage from "./components/ShortenUrlPage";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./components/ErrorPage"; 
import Features from "./components/Features";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />\
        <Route path="/features" element={<Features />} />

        
        <Route path="/register"  element={< PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
        <Route path="/login"  element={< PrivateRoute publicPage={true}><LoginPage /></PrivateRoute>} />
        
        <Route
          path="/dashboard/"
          element={< PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>}
        />

        {/* Error Page */}
         <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;

export const subDomainRouter = () => {
  return (
    <Routes>
      <Route path="/:url" element={<ShortenUrlPage />} />
    </Routes>
  );
};
