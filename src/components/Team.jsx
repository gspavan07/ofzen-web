import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Twitter,
  Facebook,
  Dribbble,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import charanImg from "../assets/team/charan.jpeg";
import pavanImg from "../assets/team/pavan.jpeg";
import sunilImg from "../assets/team/sunil.jpeg";
import sandeepImg from "../assets/team/sandeep.jpeg";
import krishnaImg from "../assets/team/krishna.jpeg";
import nareenImg from "../assets/team/nareen.jpeg";
import dheeruImg from "../assets/team/dheeru.jpeg";
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
    avatarImage: charanImg,
    fallbackImage: "https://i.pravatar.cc/300?img=12",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Sunil Garbana",
    role: "Chief Technology Officer (CTO)",
    bgImage: sunilBgImg,
    avatarImage: sunilImg,
    fallbackImage: "https://i.pravatar.cc/300?img=13",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Pavan Gollapalli",
    role: "Founder & CEO",
    bgImage: pavanBgImg,
    avatarImage: pavanImg,
    fallbackImage: "https://i.pravatar.cc/300?img=11",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Sandeep Jakka",
    role: "Chief Operating Officer (COO)",
    bgImage: sandeepBgImg,
    avatarImage: sandeepImg,
    fallbackImage: "https://i.pravatar.cc/300?img=14",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Krishna Bhagavan",
    role: "AI Engineer",
    bgImage: krishnaBgImg,
    avatarImage: krishnaImg,
    fallbackImage: "https://i.pravatar.cc/300?img=15",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Nareen Kumar",
    role: "Chief Information Security Officer",
    bgImage: nareenBgImg,
    avatarImage: nareenImg,
    fallbackImage: "https://i.pravatar.cc/300?img=16",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Dheeraj Bathi",
    role: "Head of Product & Quality Assurance",
    bgImage: dheeruBgImg,
    avatarImage: dheeruImg,
    fallbackImage: "https://i.pravatar.cc/300?img=17",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with someone in middle

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % teamData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
  };

  const activeMember = teamData[activeIndex];

  return (
    <div className="relative w-full overflow-hidden bg-[#f5f5f5] md:pb-32 lg:py-32 mt-22 font-sans isolate">
      {/* 1. Backdrop Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Giant Watermark Name */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7 }}
            className="mb-72 md:mb-60 lg:mb-40 w-fit z-0 flex flex-col items-start"
          >
            {/* Giant Watermark */}
            <div
              className="
                w-full text-center m-0 p-0 font-black text-slate-900 uppercase tracking-widest leading-none select-none opacity-20
                text-[0px]
                md:text-[140px]
                lg:text-[240px]
            "
            >
              {activeMember.name.split(" ")[0]}
            </div>

            {/* Left Title BELOW it */}
            <div className="mt-2 ml-2 z-30">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black max-w-[120px]">
                {activeMember.name}
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Faded Background Portrait */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute bottom-0 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] flex items-end justify-center z-10 mask-image-bottom"
          >
            <img
              src={activeMember.bgImage}
              alt="bg"
              className="object-contain min-h-[500px] max-h-[500px] md:min-h-[600px] md:max-h-[600px] lg:min-h-[700px] lg:max-h-[700px] object-bottom grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto cursor-pointer"
              style={{
                maskImage: "linear-gradient(to top, transparent, black 50%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent, black 50%)",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full mx-auto px-8 z-20 h-[500px] flex items-end pointer-events-none">
        {/* Active Member Role & Navigation Container */}
        <div className="w-full flex relative justify-center items-center">
          <motion.div
            key={`info-${activeIndex}`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: -200, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute -bottom-40 md:bottom-[-280px] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] lg:w-[820px]"
          >
            {/* Role */}
            <div className="mb-4">
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-700 text-center uppercase pb-5">
                {activeMember.role}
              </p>
            </div>
            {/* Navigation Buttons Capsule */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center bg-primary rounded-full overflow-hidden shadow-xl pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="py-2.5 px-5 hover:bg-primary/80 transition-colors text-white border-r border-primary/50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="py-2.5 px-5 hover:bg-primary/80 transition-colors text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
