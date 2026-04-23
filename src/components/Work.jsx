import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LazyImage from "./LazyImage";
import Koyya from "../assets/Koyya.jpeg";
import CodeTracker from "../assets/CodeTracker.jpeg";
import SKC from "../assets/SKC.jpeg";
import MeatBox from "../assets/MeatBox.jpeg";
import Unipilot from "../assets/Unipilot.jpeg";

const projects = [
  {
    title: "Koyya Enterprises",
    category: "Turning Ideas into Impactful Solutions",
    image: Koyya,
    width: "w-[85vw] md:w-[750px]",
    slug: "koyya-enterprises",
  },
  {
    title: "Code Tracker",
    category: "Track Code, builder better",
    //image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt3hoH7beht8VmEch3ibONIzOL6WuMVegFGJU_Qw0IZ-c69C6MqjSCZ4OevZ-6yoo5nFbpkUVULCszfvBPJaOH-OJuXplHytdui1cUfkHjI-mEIcGk--4Y_Io56B-3bRlvCsTHagxNSlF3NZefa9A9n0JteM7XnY6b573ziTODL-UgeIIfkzXrQRkwOTJ7gmZn-NYKAUruD7ID23ayiRgQRxF9_Qqazq5O6th-PZXoUp0Dp8uwKyeh9LRJSkDsAbIg_BAQuQyJNH1_",
    image: CodeTracker,
    width: "w-[85vw] md:w-[750px]",
    slug: "code-tracker",
  },
  {
    title: "SKC Caterers",
    category: "100% Pure Vegetarian",
    // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8X29jXnrQ42KNad2uNXBGv2DyEK_Jnlx45gRQeRlfHN1YeJ5JUjCAi9o6fRm8gayInvBAiuP2REFop87YTNKSWEwgcY-PpVVDMkXJqohdFE2gylo8yZ-xgGjwMLK_VZYKMl8PaVGEUn9i9sZ-WN_Zd0gvmVTPZCoNtCxwTAIISGR6RsjSlhZ8AqbIDEuOD_Du2SP7XFcObA8Phf1YNlXai4PBTHT8c74Z7IO5i7exY0QL9uqJf0mQ6ZWvFvC-SJHjINXioOmp0Mjc",
    image: SKC,
    width: "w-[85vw] md:w-[750px]",
    slug: "skc-caterers",
  },
  {
    title: "Unipilot",
    category: "Building the future of University Management",
    // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8X29jXnrQ42KNad2uNXBGv2DyEK_Jnlx45gRQeRlfHN1YeJ5JUjCAi9o6fRm8gayInvBAiuP2REFop87YTNKSWEwgcY-PpVVDMkXJqohdFE2gylo8yZ-xgGjwMLK_VZYKMl8PaVGEUn9i9sZ-WN_Zd0gvmVTPZCoNtCxwTAIISGR6RsjSlhZ8AqbIDEuOD_Du2SP7XFcObA8Phf1YNlXai4PBTHT8c74Z7IO5i7exY0QL9uqJf0mQ6ZWvFvC-SJHjINXioOmp0Mjc",
    image: Unipilot,
    width: "w-[85vw] md:w-[750px]",
    slug: "unipilot",
  },
  {
    title: "Meat Box",
    category: "Premium Meat Delivery",
    //image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeia5a7A6X7IO3uq0u2t1dpt3aMlU1A1Kq0we2Ka9xYJc5xhkOvZoqHLRwc7qAzYos6nEq82nZGhrESH2jG7bfTPVqnYNA1N6HUSpg1SHZ5zbfLN_3LaTqzzZEJAJpjtdZvvnNR1xsegE7QFd_LM-xjMLZj4frqrTezTITcbGovC24pdbmkmc7oqYsAg--CZEub9GMw4YUoRsNnZ4Wuvu8mfniAr8ULfzpl3YZ2ixHisKSkVvRb5J36Sg-hjjy-7FL4HBfgvOmDRKO",
    image: MeatBox,
    // width: "w-[70vw] md:w-[500px]",
    // aspect: "aspect-[3/4]",
    // isPortrait: true
    width: "w-[85vw] md:w-[750px]",
    slug: "meat-box",
  },
];

const Work = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && containerRef.current) {
        const container = containerRef.current;
        const cardWidth = container.children[0]?.offsetWidth || 300;
        const gap = window.innerWidth >= 768 ? 48 : 32;
        const scrollAmount = cardWidth + gap;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.children[0]?.offsetWidth || 300;
    const gap = window.innerWidth >= 768 ? 48 : 32;
    const scrollAmount = cardWidth + gap;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="silk-texture pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 mb-12 flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <p className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase">
            Portfolio 2026
          </p>
          <h1 className="text-heading text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter">
            Selected Work
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="size-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">west</span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="size-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>
      </div>

      {/* Horizontal Gallery */}
      <div
        className="relative w-full group mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Mobile Navigation Buttons Overlay */}
        <button
          onClick={() => scroll("left")}
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white border border-primary/20 shadow-lg flex items-center justify-center text-primary"
        >
          <span className="material-symbols-outlined">west</span>
        </button>
        <button
          onClick={() => scroll("right")}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white border border-primary/20 shadow-lg flex items-center justify-center text-primary"
        >
          <span className="material-symbols-outlined">east</span>
        </button>

        <div
          ref={containerRef}
          className="flex overflow-x-auto hide-scrollbar px-10 gap-8 md:gap-12 pt-8 pb-4 cursor-grab active:cursor-grabbing snap-x snap-proximity scroll-smooth"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex-none ${project.width} snap-center group/card cursor-pointer`}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => navigate(`/project/${project.slug}`)}
            >
              <div
                className={`relative glass-card ${project.isPortrait ? "rounded-4xl" : "rounded-2xl"} p-2 md:p-3 shadow-xl overflow-hidden ${project.aspect || "aspect-video"}`}
              >
                <div
                  className={`w-full h-full ${project.isPortrait ? "rounded-[1.6rem]" : "rounded-xl"} overflow-hidden relative bg-black/5 group-hover/card:shadow-inner transition-all duration-500`}
                >
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full transition-transform duration-700 ease-out group-hover/card:scale-110"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none opacity-60 group-hover/card:opacity-40 transition-opacity duration-500" />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
                </div>
              </div>
              <div className="mt-4 px-2 flex justify-between items-start">
                <div>
                  <h3 className="text-lg md:text-3xl font-bold text-black leading-tight group-hover/card:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-subtext dark:text-gray-600 text-sm font-medium mt-2 uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
                <button className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    arrow_outward
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
          <div className="flex-none w-[10vw]" /> {/* End Spacer */}
        </div>
      </div>

      {/* Expertise Domains */}
      <div className="max-w-7xl mx-auto px-10 mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: "Design Systems", icon: "widgets" },
          { title: "Technical R&D", icon: "biotech" },
          { title: "Brand Identity", icon: "diamond" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-4 group">
            <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-2xl">
                {item.icon}
              </span>
            </div>
            <h4 className="text-xl font-bold text-black">{item.title}</h4>
            <p className="text-sm text-subtext dark:text-gray-600 leading-relaxed max-w-[280px]">
              Crafting high-performance digital solutions with surgical
              precision and artistic intent.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
