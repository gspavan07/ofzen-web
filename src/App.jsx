import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { initGA, trackPageView } from "./utils/analytics";
import MainPage from "./pages/MainPage";
import ProjectDetails from "./pages/ProjectDetails";
import CareersPage from "./pages/CareersPage";

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4 - Replace with your actual Measurement ID
    initGA("G-Z60QN1BL1J");
  }, []);

  useEffect(() => {
    // Track page view on every route change
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
