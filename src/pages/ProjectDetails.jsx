import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import Koyya from "../assets/Koyya.jpeg";
import Koyya1 from "../assets/Koyya1.png";
import Koyya2 from "../assets/Koyya2.png";
import Koyya3 from "../assets/Koyya3.png";
import CodeTracker from "../assets/CodeTracker.jpeg";
import SKC from "../assets/SKC.jpeg";
import MeatBox from "../assets/MeatBox.jpeg";
import Unipilot from "../assets/Unipilot.jpeg";
import ct1 from "../assets/ct1.png";
import ct2 from "../assets/ct2.png";
import ct3 from "../assets/ct3.png";
import skc1 from "../assets/skc1.png";
import skc2 from "../assets/skc2.png";
import skc3 from "../assets/skc3.png";
import U1 from "../assets/U1.png";
import U2 from "../assets/U2.png";
import U3 from "../assets/U3.png";
import mt1 from "../assets/mt1.jpeg";
import mt2 from "../assets/mt2.jpeg";
import mt3 from "../assets/mt3.jpeg";

const projects = [
  {
    id: "0",
    slug: "koyya-enterprises",
    title: "Koyya Enterprises",
    description:
      "A unified platform combining technology and agribusiness solutions to drive digital growth. Built to streamline operations and expand business reach.",
    imgdescription: [
      "Koyya was built to bridge technology and agribusiness into one powerful business ecosystem. The goal was to enable digital growth while strengthening agricultural commerce through modern platforms.",
      "The platform improved brand presence, customer engagement, and service accessibility across both verticals. It streamlined operations and positioned Koyya as a future-ready enterprise.",
      "The system was designed to expand into new services, e-commerce offerings, and regional markets. Its modular architecture supports continuous growth.",
      "Technology services, agri-commerce tools, and digital marketing systems were unified into a connected digital ecosystem. This ensured seamless data flow and efficient management.",
    ],
    image: [Koyya, Koyya1, Koyya2, Koyya3],
  },
  {
    id: "1",
    slug: "code-tracker",
    title: "Code Tracker",
    description:
      "A platform that tracks development progress and team productivity in real time. Built for transparency and efficiency.",
    imgdescription: [
      "CodeTracker was built to bring clarity and accountability into software development workflows. It helps teams monitor progress in real time.",
      "Teams achieved better productivity, transparency, and faster project completion. Management gained actionable insights through analytics.",
      "The platform supports multiple projects, growing teams, and enterprise-level workflows. It scales seamlessly with development needs.",
      "It connects with code repositories, task tools, and reporting dashboards. This creates a unified development monitoring environment.",
    ],
    // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt3hoH7beht8VmEch3ibONIzOL6WuMVegFGJU_Qw0IZ-c69C6MqjSCZ4OevZ-6yoo5nFbpkUVULCszfvBPJaOH-OJuXplHytdui1cUfkHjI-mEIcGk--4Y_Io56B-3bRlvCsTHagxNSlF3NZefa9A9n0JteM7XnY6b573ziTODL-UgeIIfkzXrQRkwOTJ7gmZn-NYKAUruD7ID23ayiRgQRxF9_Qw0IZ-c69C6MqjSCZ4OevZ-6yoo5nFbpkUVULCszfvBPJaOH-OJuXplHytdui1cUfkHjI-mEIcGk--4Y_Io56B-3bRlvCsTHagxNSlF3NZefa9A9n0JteM7XnY6b573ziTODL-UgeIIfkzXrQRkwOTJ7gmZn-NYKAUruD7ID23ayiRgQRxF9_Qqazq5O6th-PZXoUp0Dp8uwKyeh9LRJSkDsAbIg_BAQuQyJNH1_",
    image: [CodeTracker, ct1, ct2, ct3],
  },
  {
    id: "2",
    slug: "skc-caterers",
    title: "SKC Caterers",
    description:
      "A digital system that automates catering orders and customer coordination. Designed for faster service and smoother operations.",
    imgdescription: [
      "SKC Catering aimed to digitize catering operations for smoother order management and customer communication. The focus was on speed, accuracy, and service excellence.",
      "Manual processes were replaced with automated bookings and streamlined workflows. This resulted in faster service delivery and improved customer satisfaction.",
      "The platform supports high-volume orders, multiple branches, and large events. It is built to grow alongside business expansion.",
      "Online ordering, payments, scheduling, and admin controls were connected into a single system. This created a seamless operational experience.",
    ],
    // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8X29jXnrQ42KNad2uNXBGv2DyEK_Jnlx45gRQeRlfHN1YeJ5JUjCAi9o6fRm8gayInvBAiuP2REFop87YTNKSWEwgcY-PpVVDMkXJqohdFE2gylo8yZ-xgGjwMLK_VZYKMl8PaVGEUn9i9sZ-WN_Zd0gvmVTPZCoNtCxwTAIISGR6RsjSlhZ8AqbIDEuOD_Du2SP7XFcObA8Phf1YNlXai4PBTHT8c74Z7IO5i7exY0QL9uqJf0mQ6ZWvFvC-SJHjINXioOmp0Mjc",
    image: [SKC, skc1, skc2, skc3],
  },
  {
    id: "3",
    slug: "unipilot",
    title: "Unipilot",
    description:
      "A unified digital system automating academic and campus operations. Designed for scalable, modern university management.",
    imgdescription: [
      "UniPilot was designed to transform university operations into one intelligent digital ecosystem. The goal was automation, transparency, and smarter governance.",
      "Academic processes, finance, and campus operations became faster, more accurate, and fully connected. Institutions experienced improved efficiency and control.",
      "Built for large universities, multi-campus expansion, and future digital modules. It is engineered for long-term institutional growth.",
      "Exams, fees, hostel, HR, transport, placements, and analytics were unified into a single platform. This eliminated silos and improved real-time decision making.",
    ],
    // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeia5a7A6X7IO3uq0u2t1dpt3aMlU1A1Kq0we2Ka9xYJc5xhkOvZoqHLRwc7qAzYos6nEq82nZGhrESH2jG7bfTPVqnYNA1N6HUSpg1SHZ5zbfLN_3LaTqzzZEJAJpjtdZvvnNR1xsegE7QFd_LM-xjMLZj4frqrTezTITcbGovC24pdbmkmc7oqYsAg--CZEub9GMw4YUoRsNnZ4Wuvu8mfniAr8ULfzpl3YZ2ixHisKSkVvRb5J36Sg-hjjy-7FL4HBfgvOmDRKO",
    image: [Unipilot, U1, U2, U3],
  },
  {
    id: "4",
    slug: "meat-box",
    title: "Meat Box",
    description:
      "A hyperlocal meat delivery app offering quick ordering and real-time tracking. Focused on freshness, speed, and convenience.",
    imgdescription: [
      "MeatBox was created to offer fast, reliable hyperlocal meat delivery through a user-friendly mobile experience. The focus was freshness, convenience, and trust.",
      "Customers experienced quicker ordering and real-time tracking while vendors gained better inventory control. This boosted operational efficiency and repeat orders.",
      "The platform can easily expand to new locations, product lines, and subscription models. It is optimized for rapid growth.",
      "Delivery tracking, payments, inventory systems, and admin dashboards were fully connected. This ensured smooth end-to-end operations.",
    ],
    // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeia5a7A6X7IO3uq0u2t1dpt3aMlU1A1Kq0we2Ka9xYJc5xhkOvZoqHLRwc7qAzYos6nEq82nZGhrESH2jG7bfTPVqnYNA1N6HUSpg1SHZ5zbfLN_3LaTqzzZEJAJpjtdZvvnNR1xsegE7QFd_LM-xjMLZj4frqrTezTITcbGovC24pdbmkmc7oqYsAg--CZEub9GMw4YUoRsNnZ4Wuvu8mfniAr8ULfzpl3YZ2ixHisKSkVvRb5J36Sg-hjjy-7FL4HBfgvOmDRKO",
    image: [MeatBox, mt1, mt2, mt3],
  },
];

const ProjectSlide = ({ project }) => {
  return (
    <div className="h-full w-full overflow-y-auto relative scroll-smooth bg-transparent">
      {/* Texture background layer moved out of scroll container flow */}
      <div className="silk-texture absolute inset-0 pointer-events-none opacity-40" />

      {/* Project Content Container */}
      <div className="max-w-[1400px] mx-auto pt-24 md:pt-36 pb-32 md:pb-64 px-6 md:px-10 relative z-10">
        {/* Header (Top Centered) */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-7xl lg:text-[100px] font-black tracking-tighter text-heading leading-[0.9]"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl lg:text-2xl text-subtext dark:text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto font-medium"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Z-Pattern Content sections */}
        <div className="flex flex-col gap-16 md:gap-48">
          {/* Section 1: Image Left, Desc Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-video md:aspect-4/3 bg-black/5">
              <LazyImage
                src={project.image[0]}
                alt="The Vision"
                loading="eager"
                containerClassName="w-full h-full"
                className="w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="text-xl md:text-4xl font-black text-heading">
                The Vision
              </h3>
              <p className="text-sm md:text-lg text-subtext leading-relaxed">
                {project.imgdescription[0]}
              </p>
            </div>
          </div>

          {/* Section 2: Desc Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="order-2 md:order-1 flex flex-col gap-4 md:gap-6">
              <h3 className="text-xl md:text-4xl font-black text-heading">
                The Impact
              </h3>
              <p className="text-sm md:text-lg text-subtext leading-relaxed">
                {project.imgdescription[1]}
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-video md:aspect-4/3 bg-black/5">
              <LazyImage
                src={project.image[1]}
                alt="The Impact"
                containerClassName="w-full h-full"
                className="w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Section 3: Image Left, Desc Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-video md:aspect-4/3 bg-black/5">
              <LazyImage
                src={project.image[2]}
                alt="Scalability"
                containerClassName="w-full h-full"
                className="w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="text-xl md:text-4xl font-black text-heading">
                Scalability
              </h3>
              <p className="text-sm md:text-lg text-subtext leading-relaxed">
                {project.imgdescription[2]}
              </p>
            </div>
          </div>

          {/* Section 4: Desc Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="order-2 md:order-1 flex flex-col gap-4 md:gap-6">
              <h3 className="text-xl md:text-4xl font-black text-heading">
                Integration
              </h3>
              <p className="text-sm md:text-lg text-subtext leading-relaxed">
                {project.imgdescription[3]}
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-video md:aspect-4/3 bg-black/5">
              <LazyImage
                src={project.image[3]}
                alt="Integration"
                containerClassName="w-full h-full"
                className="w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [isScrolling, setIsScrolling] = useState(false);

  // Deriving currentIndex from URL params directly to prevent cascading renders
  const currentIndex = projects.findIndex((p) => p.slug === slug) !== -1
    ? projects.findIndex((p) => p.slug === slug)
    : 0;

  const handleSwitch = (newIndex) => {
    if (newIndex < 0 || newIndex >= projects.length || isScrolling) return;

    setIsScrolling(true);
    navigate(`/project/${projects[newIndex].slug}`, { replace: true });

    // Interaction lock
    setTimeout(() => setIsScrolling(false), 800);
  };

  return (
    <div className="fixed inset-0 pearlescent-bg overflow-hidden z-100">
      {/* Global Background Watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <span className="text-[25vw] font-black text-black/2 dark:text-gray-300 leading-none tracking-tighter uppercase watermark-text select-none">
          OFZEN
        </span>
      </div>

      {/* TOP NAVIGATION: Project Toggle Bar */}
      <div className="fixed top-2 md:top-10 left-1/2 -translate-x-1/2 z-110 flex items-center gap-1.5 p-1 glass-nav rounded-2xl shadow-xl max-w-[calc(100vw-120px)] md:max-w-[90vw] overflow-x-auto hide-scrollbar">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => handleSwitch(i)}
            className={`px-3 md:px-6 py-1.5 md:py-2 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
              i === currentIndex
                ? "bg-primary text-white shadow-lg"
                : "text-heading/40 hover:text-heading hover:bg-white/50"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Home button */}
      <div className="fixed top-2 md:top-10 left-3 md:left-10 z-110">
        <button
          onClick={() => navigate("/")}
          className="size-8 md:size-14 rounded-full glass-nav flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        >
          <span className="material-symbols-outlined text-base md:text-2xl">
            home
          </span>
        </button>
      </div>

      {/* SIDE NAVIGATION: Arrows (Desktop Only) */}
      {currentIndex > 0 && (
        <div className="fixed left-10 top-1/2 -translate-y-1/2 z-110 hidden md:flex">
          <button
            onClick={() => handleSwitch(currentIndex - 1)}
            className="size-16 rounded-full glass-nav flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl group active:scale-90"
          >
            <span className="material-symbols-outlined text-3xl transition-transform group-hover:-translate-x-1">
              west
            </span>
          </button>
        </div>
      )}

      {currentIndex < projects.length - 1 && (
        <div className="fixed right-10 top-1/2 -translate-y-1/2 z-110 hidden md:flex">
          <button
            onClick={() => handleSwitch(currentIndex + 1)}
            className="size-16 rounded-full glass-nav flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl group active:scale-90"
          >
            <span className="material-symbols-outlined text-3xl transition-transform group-hover:translate-x-1">
              east
            </span>
          </button>
        </div>
      )}

      {/* Project Display Layer */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset }) => {
            const swipe = offset.x;
            const threshold = 50;
            if (swipe < -threshold && currentIndex < projects.length - 1) {
              handleSwitch(currentIndex + 1);
            } else if (swipe > threshold && currentIndex > 0) {
              handleSwitch(currentIndex - 1);
            }
          }}
        >
          <ProjectSlide project={projects[currentIndex]} />
        </motion.div>
      </AnimatePresence>

      <div className="noise-overlay" />
    </div>
  );
};

export default ProjectDetails;
