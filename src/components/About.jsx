import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Team from "./Team";

const steps = [
  {
    id: "01",
    title: "Discovery",
    icon: "travel_explore",
    desc: "We deep-dive into your ecosystem, uncovering core challenges and latent opportunities through immersive research and data-driven insights.",
    points: [
      "Stakeholder Alignment Workshops",
      "Market & Competitor Analysis",
      "User Persona Development",
    ],
  },
  {
    id: "02",
    title: "Strategy",
    icon: "architecture",
    desc: "Defining the blueprint for success. We architect a strategic roadmap that bridges vision and execution, ensuring scalable growth.",
    points: [
      "Product Roadmap Creation",
      "KPI Framework Definition",
      "Brand Positioning Matrix",
    ],
  },
  {
    id: "03",
    title: "Architecture",
    icon: "account_tree",
    desc: "Building the foundation of your digital ecosystem. We design robust structures that handle complex data flows with elegance and efficiency.",
    points: [
      "System Logic Diagrams",
      "Database Schema Design",
      "API Integration Map",
    ],
  },
  {
    id: "04",
    title: "Design",
    icon: "auto_fix_high",
    desc: "Crafting emotive and high-performance interfaces. We merge aesthetic excellence with intuitive user experiences that captivate and convert.",
    points: [
      "High-Fidelity Prototypes",
      "Design System Library",
      "Interactive Motion Specs",
    ],
  },
  {
    id: "05",
    title: "Development",
    icon: "terminal",
    desc: "Bringing pixels to life with clean, performant code. Our engineering team builds future-proof solutions using cutting-edge technologies.",
    points: [
      "Scalable Frontend Codebase",
      "Robust Backend APIs",
      "CI/CD Pipeline Setup",
    ],
  },
  {
    id: "06",
    title: "Testing",
    icon: "precision_manufacturing",
    desc: "Rigorous quality assurance to ensure flawless performance. We break things so your users never have to encounter a glitch.",
    points: [
      "End-to-End User Testing",
      "Performance Optimization",
      "Security Vulnerability Audit",
    ],
  },
  {
    id: "07",
    title: "Deployment",
    icon: "rocket_launch",
    desc: "The launch of your digital flagship. We manage the final handover and deployment process with zero-downtime precision.",
    points: [
      "Cloud Infrastructure Launch",
      "SEO & Analytics Baseline",
      "Operational Handover",
    ],
  },
  {
    id: "08",
    title: "Evolution",
    icon: "trending_up",
    desc: "Post-launch growth and iterative refinement. We stay by your side to scale the product and adapt to evolving market demands.",
    points: [
      "A/B Testing & Optimization",
      "Feature Expansion Roadmap",
      "24/7 Strategic Support",
    ],
  },
];

const OrbitItem = ({ step, index, activeIndex }) => {
  const totalSteps = 8;
  // Normalized position relative to active index
  const currentPos = (index - activeIndex + totalSteps) % totalSteps;

  const positions = {
    0: {
      transform: "translate3d(-50%, 120px, 350px) scale(1.3)",
      opacity: 1,
      blur: 0,
      zIndex: 100,
    },
    1: {
      transform: "translate3d(280px, 40px, 150px) scale(1)",
      opacity: 0.8,
      blur: 0.3,
      zIndex: 90,
    },
    2: {
      transform: "translate3d(450px, -60px, -100px) scale(0.85)",
      opacity: 0.6,
      blur: 0.8,
      zIndex: 80,
    },
    3: {
      transform: "translate3d(200px, -160px, -250px) scale(0.7)",
      opacity: 0.4,
      blur: 1.2,
      zIndex: 70,
    },
    4: {
      transform: "translate3d(-50%, -200px, -350px) scale(0.6)",
      opacity: 0.3,
      blur: 1.5,
      zIndex: 60,
    },
    5: {
      transform: "translate3d(-350px, -160px, -250px) scale(0.7)",
      opacity: 0.4,
      blur: 1.2,
      zIndex: 70,
    },
    6: {
      transform: "translate3d(-550px, -60px, -100px) scale(0.85)",
      opacity: 0.6,
      blur: 0.8,
      zIndex: 80,
    },
    7: {
      transform: "translate3d(-400px, 40px, 150px) scale(1)",
      opacity: 0.8,
      blur: 0.3,
      zIndex: 90,
    },
  };

  const style = positions[currentPos];
  const isActive = currentPos === 0;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      animate={{
        transform: style.transform,
        opacity: style.opacity,
        filter: `blur(${style.blur}px)`,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.5 },
        filter: { duration: 0.6 },
      }}
      style={{
        zIndex: isActive ? 50 : style.zIndex,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* ICON (FLOATING) */}
        {/* ICON (TRUE FLOATING) */}
        <div
          className={`
          flex items-center justify-center transition-all duration-700 ease-out
          ${
            isActive
              ? "absolute -top-16 z-50 size-20 rounded-2xl bg-white shadow-[0_8px_20px_rgba(19,91,236,0.15)] scale-[1.05] text-primary border border-primary/5"
              : "size-16 rounded-2xl bg-white/80 inactive-phase-card opacity-60"
          }
        `}
        >
          <span
            className={`material-symbols-outlined ${isActive ? "text-4xl" : "text-2xl"}`}
          >
            {step.icon}
          </span>
        </div>
        {/* SPACER (Prevents overlap with absolute icon) */}
        {isActive && <div className="h-10" />}

        {/* TEXT BLOCK */}
        <div
          className={`text-center transition-all duration-700 pb-4 ${isActive ? "mt-4" : "mt-4"}`}
        >
          <p
            className={`font-black transition-all duration-700 ease-out tracking-tight leading-none mb-1 
            ${
              isActive
                ? "text-lg sm:text-2xl bg-clip-text text-transparent bg-linear-to-r from-accent-fire to-sunset-pink"
                : "text-base sm:text-xl text-primary opacity-20 blur-[1.5px]"
            }`}
          >
            {step.title}
          </p>
          <p className="text-[10px] uppercase tracking-widest font-bold text-primary/30">
            Phase {step.id}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Deriving orbital opacity and blur from activeIndex to avoid synchronous setStates in useEffect
  const progress = activeIndex / (steps.length - 1);
  const orbitalOpacity = 0.2 + progress * 0.1;
  const orbitalBlur = 1.5 - progress * 1.5;

  // Keyboard navigation for orbit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % steps.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="about" className="w-full relative silk-texture">
      {/* 1. Static Intro Section - Tightened spacing */}
      <div className="pt-24 px-4 lg:px-40 pb-0 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl text-heading">
            <h1 className="text-3xl md:text-6xl font-black leading-tight tracking-tight mb-4">
              The Ofzen Way
            </h1>
            <p className="text-gray-700 dark:text-gray-600 text-lg font-normal leading-relaxed">
              Every project follows a clear, tested process — from first
              conversation to final launch.{" "}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-accent-fire mb-2">
            <span className="size-2 rounded-full bg-accent-fire animate-pulse"></span>
            Interactive Orbit
          </div>
        </div>
      </div>

      <section ref={triggerRef} className="">
        {/* Interactive orbital section */}
        <div
          ref={sectionRef}
          className="w-full flex items-center justify-center bg-transparent"
        >
          <div className="max-w-[1400px] w-full relative  flex flex-col justify-center items-center gap-0 px-4 overflow-visible">
            {/* The Orbit Visualization */}
            <div
              className="relative w-full h-[200px] md:h-[450px] scale-[0.32] md:scale-75 flex items-center justify-center mb-[-80px] md:mb-[-100px] overflow-visible"
              style={{
                perspective:
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? "500px"
                    : "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* CORE Node - Shifted Up */}
              <div className="relative z-20 size-32 lg:size-40 rounded-full glass-card flex items-center justify-center shadow-[0_0_50px_rgba(19,91,236,0.1)] border border-primary/5 -translate-y-8">
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl animate-pulse"></div>
                <div className="text-primary flex flex-col items-center relative z-10">
                  <span className="material-symbols-outlined text-3xl lg:text-5xl">
                    deployed_code
                  </span>
                  <span className="text-[8px] lg:text-[10px] uppercase font-black tracking-[0.3em] mt-2">
                    CORE
                  </span>
                </div>
              </div>

              {/* Orbital Ring */}
              <div
                className="absolute top-1/2 left-1/2 w-[1100px] h-[450px] border-2 border-transparent rounded-[50%] transition-all duration-300"
                style={{
                  transform: "translate(-50%, -50%) rotateX(70deg)",
                  background:
                    "linear-gradient(90deg, rgba(255,95,56,0.3), rgba(255,56,162,0.3), rgba(19,91,236,0.3))",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "2px",
                  opacity: orbitalOpacity * 0.8,
                  filter: `blur(${orbitalBlur * 0.5}px)`,
                }}
              />

              {/* Items */}
              {steps.map((step, index) => (
                <OrbitItem
                  key={step.id}
                  index={index}
                  step={step}
                  activeIndex={activeIndex}
                />
              ))}
            </div>

            <div className="flex flex-col gap-4 items-center w-full max-w-2xl mx-auto z-30 mt-64 md:mt-30 relative">
              {/* Info Panel - Subtle Glass */}
              <div
                className="w-full rounded-2xl p-4 lg:p-6 relative overflow-visible shadow-[0_10px_30px_rgba(0,0,0,0.06)] max-w-md border border-primary/5"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Watermark */}
                <div className="absolute top-0 right-0 p-3">
                  <span className="text-[32px] font-black text-primary/5 select-none leading-none">
                    {(activeIndex + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15, position: "absolute" }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
                      <span className="text-accent-fire">
                        {steps[activeIndex].title}
                      </span>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 text-xs font-medium">
                      {steps[activeIndex].desc}
                    </p>
                    <motion.ul
                      className="grid grid-cols-2 gap-x-4 gap-y-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.05 } },
                      }}
                    >
                      {steps[activeIndex].points.map((point, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-2"
                          variants={{
                            hidden: { opacity: 0, x: -5 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          <span className="size-1 rounded-full bg-sunset-pink" />
                          <span className="text-[10px] font-bold text-gray-600 dark:text-gray-500 uppercase tracking-tight">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls - Minimal row with Dots + Active Number */}
              <div className="flex items-center gap-2 md:gap-6 z-100 px-6 py-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setActiveIndex(
                      (prev) => (prev - 1 + steps.length) % steps.length,
                    )
                  }
                  className="size-11 rounded-full flex items-center justify-center bg-white/90 shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-primary border border-primary/5 transition-all"
                >
                  <span className="material-symbols-outlined text-xl">
                    west
                  </span>
                </motion.button>

                <div className="flex items-center gap-1.5 md:gap-3">
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className="relative flex items-center justify-center p-1.5"
                    >
                      {activeIndex === idx ? (
                        <motion.span
                          layoutId="active-num"
                          className="text-sm font-black text-accent-fire scale-110"
                        >
                          {(idx + 1).toString().padStart(2, "0")}
                        </motion.span>
                      ) : (
                        <span className="size-1.5 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors" />
                      )}
                    </button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % steps.length)
                  }
                  className="size-11 rounded-full flex items-center justify-center bg-white/90 shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-primary border border-primary/5 transition-all"
                >
                  <span className="material-symbols-outlined text-xl">
                    east
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POST-ORBIT TRANSITION - Ensure seamless flow */}
      <div className="relative z-20 silk-texture pt-12 pb-32">
        <div className="max-w-[1420px] mx-auto px-4 lg:px-4">
          {/* Quote Section Container */}
          <div className="relative overflow-hidden rounded-[3rem] py-32 px-10 shadow-2xl glass-quote-bg">
            {/* Design Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
              <span className="text-[18vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap quote-watermark opacity-[0.02]">
                OFZEN
              </span>
            </div>

            {/* Design Dot Grid Layer */}
            <div
              className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #135bec 1.5px, transparent 1.5px)",
                backgroundSize: "32px 32px",
              }}
            ></div>

            {/* Large Circular Quote Symbol */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
              <span
                className="font-serif italic text-primary/20 text-[120px] leading-none select-none"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                &ldquo;
              </span>
            </div>

            <div className="relative z-20 max-w-5xl mx-auto text-center mt-12">
              <h2
                className="font-serif italic text-2xl sm:text-4xl md:text-7xl leading-[1.3] text-heading dark:text-heading mb-16 tracking-tight"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 900,
                }}
              >
                "Good products don't just look{" "}
                <span className="relative inline-block text-accent-fire not-italic font-black mx-1">
                  right
                  <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-accent-fire/20 rounded-full"></span>
                </span>{" "}
                — they get out of the way and let people do what they came to
                do."
              </h2>
            </div>

            {/* Philosophy Footer */}
            <div className="absolute bottom-8 left-0 w-full flex items-center justify-center gap-8 px-10 z-10">
              <div className="h-px flex-1 max-w-[100px] bg-primary/20"></div>
              <p className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">
                OFZEN
              </p>
              <div className="h-px flex-1 max-w-[100px] bg-primary/20"></div>
            </div>
          </div>
        </div>

        {/* Collective Section */}
        <Team />
      </div>

      <style jsx="true">{`
        .orbital-path {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1100px;
          height: 450px;
          transform: translate(-50%, -50%) rotateX(70deg);
          border: 4px solid transparent;
          border-radius: 50%;
          background: linear-gradient(
            90deg,
            #ff5f38,
            #ff38a2,
            #135bec,
            #ff5f38
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 4px;
          opacity: 0.25;
          filter: blur(1.5px);
        }
        .active-phase-card {
          background: linear-gradient(135deg, #ff5f38, #ff38a2);
          color: white;
        }
        .inactive-phase-card {
          background: white;
          border: 2px solid rgba(19, 91, 236, 0.15);
          color: #135bec;
        }
        :global(.dark) .inactive-phase-card {
          background: #101622;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        .glass-quote-bg {
          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(19, 91, 236, 0.05) 0%,
              transparent 80%
            ),
            white;
        }
        :global(.dark) .glass-quote-bg {
          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(19, 91, 236, 0.1) 0%,
              transparent 80%
            ),
            #141b2a;
        }
        .quote-watermark {
          color: rgba(19, 91, 236, 0.05);
        }
        :global(.dark) .quote-watermark {
          color: rgba(255, 255, 255, 0.03);
        }
      `}</style>
    </div>
  );
};

export default About;
