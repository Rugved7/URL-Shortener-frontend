import React from "react";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
