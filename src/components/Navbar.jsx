import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 md:py-6 transition-all duration-300 ${scrolled ? 'md:py-4' : ''}`}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between glass-nav rounded-xl px-6 md:px-8 py-4 transition-all duration-300 ${scrolled ? 'shadow-lg border-white/40' : 'shadow-sm'}`}>
                <div className="flex items-center gap-3 cursor-pointer z-50 relative" onClick={(e) => scrollToSection(e, 'home')}>
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V44Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-heading text-xl font-bold tracking-tight leading-none">Ofzen</h2>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {['Services', 'Work', 'About'].map((item) => (
                        <a
                            key={item}
                            className="text-sm font-medium hover:text-primary transition-colors text-heading/70"
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => scrollToSection(e, item.toLowerCase())}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="bg-primary text-white text-sm font-bold px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer active:scale-95"
                    >
                        Start a Project
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 text-heading focus:outline-none transition-transform active:scale-90"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isOpen ? 'close' : 'menu'}
                    </span>
                </button>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop for clicking outside */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-40 md:hidden bg-black/5 backdrop-blur-[2px]"
                                onClick={() => setIsOpen(false)}
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -10, x: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10, x: 10 }}
                                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                                className="absolute top-[calc(100%+12px)] right-0 w-64 glass-nav backdrop-blur-[60px] bg-gray-600/20 dark:bg-gray-900/40 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-3xl border border-white/60 p-5 z-50 md:hidden origin-top-right flex flex-col gap-2"
                            >
                                <nav className="flex flex-col gap-1">
                                    {['Services', 'Work', 'About'].map((item) => (
                                        <a
                                            key={item}
                                            className="text-base font-bold text-heading/80 hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all"
                                            href={`#${item.toLowerCase()}`}
                                            onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                    <div className="h-px bg-black/5 dark:bg-white/5 my-2 mx-2" />
                                    <button
                                        onClick={(e) => scrollToSection(e, 'contact')}
                                        className="bg-primary text-white text-sm font-black uppercase tracking-widest px-6 py-4 rounded-xl w-full shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all"
                                    >
                                        Start a Project
                                    </button>
                                </nav>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
