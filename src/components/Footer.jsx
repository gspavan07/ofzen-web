import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white/30 dark:bg-black/20 backdrop-blur-md border-t border-white/20 dark:border-white/10 py-12 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-5 text-primary">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V44Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="font-bold text-lg text-heading  leading-none">
            Ofzen Technologies
          </span>
        </Link>

        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2026 Ofzen Technologies. All rights reserved.
          </p>
          <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>

        <div className="flex gap-6">
          <a
            className="text-gray-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
            href="https://www.linkedin.com/company/ofzen/"
            target="_blank"
          >
            LinkedIn
          </a>
          {/* <a
            className="text-gray-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
            href="#"
          >
            X
          </a> */}
          <a
            className="text-gray-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
            href="https://www.instagram.com/ofzen.dev?igsh=MW5lY2kyZGE1amNxYg=="
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
