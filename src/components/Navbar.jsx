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
        <header className={`fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 md:py-6 transition-all duration-300 ${scrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'}`}>
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
                    className="md:hidden z-50 text-heading focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full bg-white dark:bg-[#0a0f18] shadow-2xl p-6 pt-28 flex flex-col gap-6 md:hidden rounded-b-3xl border-b border-black/5"
                    >
                        <nav className="flex flex-col gap-6 items-center">
                            {['Services', 'Work', 'About'].map((item) => (
                                <a
                                    key={item}
                                    className="text-xl font-bold text-heading hover:text-primary transition-colors"
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                >
                                    {item}
                                </a>
                            ))}
                            <button
                                onClick={(e) => scrollToSection(e, 'contact')}
                                className="bg-primary text-white text-lg font-bold px-8 py-3 rounded-xl w-full max-w-[200px] mt-4 shadow-lg hover:shadow-primary/20 active:scale-95"
                            >
                                Start a Project
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
