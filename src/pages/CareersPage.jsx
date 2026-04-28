import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Careers from "../components/Careers";

const CareersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full overflow-x-hidden"
    >
      {/* Global Background Watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden w-screen h-screen">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[20vw] md:text-[25vw] font-black text-black/2 dark:text-gray-300 leading-none tracking-tighter uppercase watermark-text select-none"
        >
          OFZEN
        </motion.span>
      </div>

      <Navbar />

      <div className="pearlescent-bg min-h-screen">
        <Careers />
        <Footer />
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />
    </motion.div>
  );
};

export default CareersPage;
