import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Offset for sticky navbar
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
        <header className={`fixed top-0 left-0 w-full z-50 px-10 py-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between glass-nav rounded-xl px-8 py-4 transition-all duration-300 ${scrolled ? 'shadow-lg border-white/40' : 'shadow-sm'}`}>
                <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 'home')}>
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V44Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-heading text-xl font-bold tracking-tight leading-none">Ofzen</h2>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    <a
                        className="text-sm font-medium hover:text-primary transition-colors text-heading/70"
                        href="#services"
                        onClick={(e) => scrollToSection(e, 'services')}
                    >
                        Services
                    </a>
                    <a
                        className="text-sm font-medium hover:text-primary transition-colors text-heading/70"
                        href="#work"
                        onClick={(e) => scrollToSection(e, 'work')}
                    >
                        Work
                    </a>
                    <a
                        className="text-sm font-medium hover:text-primary transition-colors text-heading/70"
                        href="#about"
                        onClick={(e) => scrollToSection(e, 'about')}
                    >
                        About
                    </a>
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="bg-primary text-white text-sm font-bold px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer active:scale-95"
                    >
                        Start a Project
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
