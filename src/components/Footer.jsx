import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white/30 dark:bg-black/20 backdrop-blur-md border-t border-white/20 dark:border-white/10 py-12 px-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <div className="size-5 text-heading text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V44Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <span className="font-bold text-lg text-heading  leading-none">Ofzen</span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-500">© 2026 Ofzen • Remote • All rights reserved • ofzenenterprise@gmail.com</p>

                <div className="flex gap-6">
                    <a className="text-gray-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="https://www.linkedin.com/company/ofzen/">
                        LinkedIn
                    </a>
                    <a className="text-gray-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#">
                        X
                    </a>
                    <a className="text-gray-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="https://www.instagram.com/ofzen.dev?igsh=MW5lY2kyZGE1amNxYg==">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
