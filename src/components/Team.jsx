import React, { useState } from "react";
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
    name: "Pavan Gollapalli",
    role: "Founder & CEO",
    bgImage: pavanBgImg,
  },
  {
    name: "Dheeraj Bathi",
    role: "Chief Operating Officer (COO)",
    bgImage: dheeruBgImg,
  },
  {
    name: "Sandeep Jakka",
    role: "Chief Operating Officer (COO)",
    bgImage: sandeepBgImg,
  },
  {
    name: "Sunil Garbana",
    role: "Front-end Development Lead",
    bgImage: sunilBgImg,
  },
  {
    name: "Charan Tej",
    role: "Product Design Lead",
    bgImage: charanBgImg,
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
];

/* ─── Individual Card ─── */
const TeamCard = ({
  member,
  index,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 16,
            delay: index * 0.08,
          },
        },
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative cursor-pointer"
      style={{
        transition: "opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease",
        opacity: isAnyHovered && !isHovered ? 0.55 : 1,
        transform: isHovered
          ? "scale(1.04)"
          : isAnyHovered
            ? "scale(0.97)"
            : "scale(1)",
      }}
    >
      {/* Animated gradient border — visible on hover */}
      <div
        className="absolute -inset-[2px] rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background:
            "linear-gradient(135deg, #135bec, #ff5f38, #ff38a2, #135bec)",
          backgroundSize: "300% 300%",
          animation: isHovered ? "borderGlow 3s ease infinite" : "none",
        }}
      />

      {/* Card inner */}
      <div className="relative z-10 rounded-2xl overflow-hidden aspect-3/4 bg-slate-100 dark:bg-slate-900/40">
        {/* Image */}
        <LazyImage
          src={member.bgImage}
          alt={member.name}
          loading="lazy"
          containerClassName="w-full h-full"
          className="w-full h-full transition-all duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
          objectFit="cover"
          style={{ objectPosition: "top" }}
        />

        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Name + Role overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-20">
          <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-1">
            <h3 className="text-white font-bold text-sm md:text-base lg:text-lg leading-tight tracking-tight">
              {member.name}
            </h3>
            <div className="h-px w-0 group-hover:w-10 bg-accent-fire mt-1.5 mb-1.5 transition-all duration-500 ease-out" />
            <p className="text-white/60 text-[11px] md:text-xs font-medium leading-tight group-hover:text-white/80 transition-colors duration-500">
              {member.role}
            </p>
          </div>
        </div>

        {/* Top-right index number — subtle design element */}
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-white/20 text-3xl font-black leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ─── */
const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-16 font-sans isolate bg-transparent">
      {/* Decorative ambient blurs */}
      <div className="absolute top-32 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-32 left-0 w-[400px] h-[400px] bg-accent-fire/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1320px] mx-auto px-6 md:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-accent-fire mb-5"
          >
            <span className="size-1.5 rounded-full bg-accent-fire animate-pulse" />
            The Collective
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-heading leading-[1.15] tracking-tight"
          >
            Meet the minds behind
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary ">
              Ofzen
            </span>
          </motion.h2>
        </div>

        {/* ── Team Grid ── */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
        >
          {/* Row 1: First 3 members */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
            {teamData.slice(0, 3).map((member, idx) => (
              <div
                key={member.name}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.875rem)] lg:w-[calc(33.333%-1.25rem)]"
              >
                <TeamCard
                  member={member}
                  index={idx}
                  isHovered={hoveredIndex === idx}
                  isAnyHovered={hoveredIndex !== null}
                  onHover={() => setHoveredIndex(idx)}
                  onLeave={() => setHoveredIndex(null)}
                />
              </div>
            ))}
          </div>

          {/* Row 2: Remaining 4 members */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
            {teamData.slice(3).map((member, idx) => (
              <div
                key={member.name}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.875rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <TeamCard
                  member={member}
                  index={idx + 3}
                  isHovered={hoveredIndex === idx + 3}
                  isAnyHovered={hoveredIndex !== null}
                  onHover={() => setHoveredIndex(idx + 3)}
                  onLeave={() => setHoveredIndex(null)}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Keyframe for animated border gradient */}
      <style>{`
        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Team;
