import React from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const MainPage = () => {
    return (
        <div className="relative w-full overflow-x-hidden">
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

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10"
            >
                <Home />
                <Services />
                <TechStack />
                <Work />
                <About />
                <Contact />
                <Footer />
            </motion.div>

            {/* Noise Overlay */}
            <div className="noise-overlay" />
        </div>
    );
};

export default MainPage;
