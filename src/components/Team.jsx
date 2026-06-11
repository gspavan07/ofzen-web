import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

import dheeruBgImg from "../assets/team/dheeru_bg.png";
import nareenBgImg from "../assets/team/nareen_bg.png";
import krishnaBgImg from "../assets/team/krishna_bg.png";
import pavanBgImg from "../assets/team/pavan_bg.png";
import sandeepBgImg from "../assets/team/sandeep_bg.png";
import sunilBgImg from "../assets/team/sunil_bg.png";
import charanBgImg from "../assets/team/charan_bg.png";

const teamData = [
  {
    name: "Charan Tej",
    role: "Product Design Lead",
    bgImage: charanBgImg,
  },
  {
    name: "Sunil Garbana",
    role: "Chief Technology Officer (CTO)",
    bgImage: sunilBgImg,
  },
  {
    name: "Pavan Gollapalli",
    role: "Founder & CEO",
    bgImage: pavanBgImg,
  },
  {
    name: "Sandeep Jakka",
    role: "Chief Operating Officer (COO)",
    bgImage: sandeepBgImg,
  },
  {
    name: "Krishna Bhagavan",
    role: "AI Engineer",
    bgImage: krishnaBgImg,
  },
  {
    name: "Nareen Kumar",
    role: "Chief Information Security Officer (CISO)",
    bgImage: nareenBgImg,
  },
  {
    name: "Dheeraj Bathi",
    role: "Head of Product & Quality Assurance",
    bgImage: dheeruBgImg,
  },
];

const TeamCard = ({ member }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 18,
          },
        },
      }}
      className="group relative w-full aspect-4/5 sm:aspect-3/4 rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60 opacity-60 group-hover:opacity-85 transition-opacity duration-500 z-10" />

      {/* Image */}
      <LazyImage
        src={member.bgImage}
        alt={member.name}
        loading="lazy"
        containerClassName="w-full h-full"
        className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
        objectFit="cover"
        style={{ objectPosition: "top" }}
      />

      {/* Glassmorphic Capsule */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-background-dark/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 dark:border-white/10 shadow-lg transition-all duration-300 group-hover:border-primary/30 z-20">
        <h3 className="text-sm md:text-base font-bold text-heading dark:text-white leading-tight">
          {member.name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5 font-medium leading-none">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  // Distribute team members into 3 columns for desktop masonry/staggered layout
  const columns = [[], [], []];
  teamData.forEach((member, idx) => {
    if (idx === 6) {
      columns[1].push(member);
    } else {
      columns[idx % 3].push(member);
    }
  });

  return (
    <div className="relative w-full overflow-hidden py-20 lg:py-32 font-sans isolate bg-transparent">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-fire mb-4">
              Meet the Collective
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-heading dark:text-white leading-tight tracking-tight mb-6">
              Our leading, strong & creative team
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 leading-relaxed mb-8 max-w-lg">
              These people work on making our product best.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-[0_4px_14px_0_rgba(19,91,236,0.3)] hover:shadow-[0_6px_20px_0_rgba(19,91,236,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-fit cursor-pointer"
            >
              Join our team
            </Link>
          </div>

          {/* Right Side: Masonry Card Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            {/* Desktop & Tablet: Staggered 3-Column Layout */}
            <div className="hidden sm:grid grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* Column 1 */}
              <div className="flex flex-col gap-6 lg:gap-8 sm:translate-y-8">
                {columns[0].map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
              {/* Column 2 - Shifted Upwards relative to left and right columns (staying at translateY-0) */}
              <div className="flex flex-col gap-6 lg:gap-8">
                {columns[1].map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
              {/* Column 3 */}
              <div className="flex flex-col gap-6 lg:gap-8 sm:translate-y-8">
                {columns[2].map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </div>

            {/* Mobile: 2-Column Grid */}
            <div className="sm:hidden grid grid-cols-2 gap-4">
              {teamData.map((member, idx) => (
                <div
                  key={member.name}
                  className={idx === teamData.length - 1 ? "col-span-2" : ""}
                >
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
