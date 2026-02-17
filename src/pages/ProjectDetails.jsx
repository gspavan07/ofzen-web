import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Koyya from '../assets/Koyya.jpeg';
import Koyya1 from '../assets/Koyya1.png';
import Koyya2 from '../assets/Koyya2.png';
import Koyya3 from '../assets/Koyya3.png';
import CodeTracker from '../assets/CodeTracker.jpeg';
import SKC from '../assets/SKC.jpeg';
import MeatBox from '../assets/MeatBox.jpeg';
import Unipilot from '../assets/Unipilot.jpeg';
import ct1 from '../assets/ct1.png';
import ct2 from '../assets/ct2.png';
import ct3 from '../assets/ct3.png';
import skc1 from '../assets/skc1.png';
import skc2 from '../assets/skc2.png';
import skc3 from '../assets/skc3.png';
import U1 from '../assets/U1.png';
import U2 from '../assets/U2.png';
import U3 from '../assets/U3.png';
import mt1 from '../assets/mt1.jpeg';
import mt2 from '../assets/mt2.jpeg';
import mt3 from '../assets/mt3.jpeg';




const projects = [
    {
        id: "0",
        title: "Koyya Enterprises",
        description: "Leading the next generation of enterprise orchestration with precision and scale.",
        image: [Koyya, Koyya1, Koyya2, Koyya3]
    },
    {
        id: "1",
        title: "Code Tracker",
        description: "Real-time sustainability tracking and energy optimization for modern ecosystems.",
        // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt3hoH7beht8VmEch3ibONIzOL6WuMVegFGJU_Qw0IZ-c69C6MqjSCZ4OevZ-6yoo5nFbpkUVULCszfvBPJaOH-OJuXplHytdui1cUfkHjI-mEIcGk--4Y_Io56B-3bRlvCsTHagxNSlF3NZefa9A9n0JteM7XnY6b573ziTODL-UgeIIfkzXrQRkwOTJ7gmZn-NYKAUruD7ID23ayiRgQRxF9_Qqazq5O6th-PZXoUp0Dp8uwKyeh9LRJSkDsAbIg_BAQuQyJNH1_",
        image: [CodeTracker, ct1, ct2, ct3]
    },
    {
        id: "2",
        title: "SKC Caterers",
        description: "High-end digital shopping experiences for the world's most exclusive brands.",
        // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8X29jXnrQ42KNad2uNXBGv2DyEK_Jnlx45gRQeRlfHN1YeJ5JUjCAi9o6fRm8gayInvBAiuP2REFop87YTNKSWEwgcY-PpVVDMkXJqohdFE2gylo8yZ-xgGjwMLK_VZYKMl8PaVGEUn9i9sZ-WN_Zd0gvmVTPZCoNtCxwTAIISGR6RsjSlhZ8AqbIDEuOD_Du2SP7XFcObA8Phf1YNlXai4PBTHT8c74Z7IO5i7exY0QL9uqJf0mQ6ZWvFvC-SJHjINXioOmp0Mjc",
        image: [SKC, skc1, skc2, skc3]
    },
    {
        id: "3",
        title: "Unipilot",
        description: "Neural interaction models that redefine the boundary between human and machine.",
        // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeia5a7A6X7IO3uq0u2t1dpt3aMlU1A1Kq0we2Ka9xYJc5xhkOvZoqHLRwc7qAzYos6nEq82nZGhrESH2jG7bfTPVqnYNA1N6HUSpg1SHZ5zbfLN_3LaTqzzZEJAJpjtdZvvnNR1xsegE7QFd_LM-xjMLZj4frqrTezTITcbGovC24pdbmkmc7oqYsAg--CZEub9GMw4YUoRsNnZ4Wuvu8mfniAr8ULfzpl3YZ2ixHisKSkVvRb5J36Sg-hjjy-7FL4HBfgvOmDRKO",
        image: [Unipilot, U1, U2, U3]
    },

    {
        id: "4",
        title: "Meat Box",
        description: "Neural interaction models that redefine the boundary between human and machine.",
        // image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeia5a7A6X7IO3uq0u2t1dpt3aMlU1A1Kq0we2Ka9xYJc5xhkOvZoqHLRwc7qAzYos6nEq82nZGhrESH2jG7bfTPVqnYNA1N6HUSpg1SHZ5zbfLN_3LaTqzzZEJAJpjtdZvvnNR1xsegE7QFd_LM-xjMLZj4frqrTezTITcbGovC24pdbmkmc7oqYsAg--CZEub9GMw4YUoRsNnZ4Wuvu8mfniAr8ULfzpl3YZ2ixHisKSkVvRb5J36Sg-hjjy-7FL4HBfgvOmDRKO",
        image: [MeatBox, mt1, mt2, mt3]
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
                        <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-video md:aspect-[4/3] bg-black/5">
                            <img src={project.image[0]} alt="Process" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6">
                            <h3 className="text-xl md:text-4xl font-black text-heading">The Vision</h3>
                            <p className="text-sm md:text-lg text-subtext leading-relaxed">
                                Our collaborative approach starts by uncovering the core values of your mission. We deep-dive into the technical requirements to ensure every pixel serves a strategic purpose.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Desc Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
                        <div className="order-2 md:order-1 flex flex-col gap-4 md:gap-6">
                            <h3 className="text-xl md:text-4xl font-black text-heading">The Impact</h3>
                            <p className="text-sm md:text-lg text-subtext leading-relaxed">
                                Implementing advanced neural networks allowed for a 40% increase in user retention.
                                The aesthetic clarity of the interface ensures complex data streams remain intuitive.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-video md:aspect-[4/3] bg-black/5">
                            <img src={project.image[1]} alt="Impact" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Section 3: Image Left, Desc Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
                        <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-video md:aspect-[4/3] bg-black/5">
                            <img src={project.image[2]} alt="Future" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6">
                            <h3 className="text-xl md:text-4xl font-black text-heading">Scalability</h3>
                            <p className="text-sm md:text-lg text-subtext leading-relaxed">
                                Built on a global microservices architecture, the platform scales horizontally to support millions of concurrent connections globally.
                            </p>
                        </div>
                    </div>

                    {/* Section 4: Desc Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
                        <div className="order-2 md:order-1 flex flex-col gap-4 md:gap-6">
                            <h3 className="text-xl md:text-4xl font-black text-heading">Integration</h3>
                            <p className="text-sm md:text-lg text-subtext leading-relaxed">
                                Seamlessly connecting with existing infrastructure, our solution ensures that data flow is unified across all touchpoints for everyone.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-video md:aspect-[4/3] bg-black/5">
                            <img src={project.image[3]} alt="Integration" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(parseInt(id) || 0);
    const [isScrolling, setIsScrolling] = useState(false);

    // Sync with URL ID
    useEffect(() => {
        const urlId = parseInt(id);
        if (!isNaN(urlId) && urlId !== currentIndex) {
            setCurrentIndex(urlId);
        }
    }, [id]);

    const handleSwitch = (newIndex) => {
        if (newIndex < 0 || newIndex >= projects.length || isScrolling) return;

        setIsScrolling(true);
        setCurrentIndex(newIndex);
        navigate(`/project/${newIndex}`, { replace: true });

        // Interaction lock
        setTimeout(() => setIsScrolling(false), 800);
    };

    return (
        <div className="fixed inset-0 pearlescent-bg overflow-hidden z-[100]">
            {/* Global Background Watermark */}
            <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <span className="text-[25vw] font-black text-black/2 dark:text-gray-300 leading-none tracking-tighter uppercase watermark-text select-none">
                    OFZEN
                </span>
            </div>

            {/* TOP NAVIGATION: Project Toggle Bar */}
            <div className="fixed top-2 md:top-10 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-1.5 p-1 glass-nav rounded-2xl shadow-xl max-w-[calc(100vw-120px)] md:max-w-[90vw] overflow-x-auto hide-scrollbar">
                {projects.map((p, i) => (
                    <button
                        key={p.id}
                        onClick={() => handleSwitch(i)}
                        className={`px-3 md:px-6 py-1.5 md:py-2 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${i === currentIndex
                            ? 'bg-primary text-white shadow-lg'
                            : 'text-heading/40 hover:text-heading hover:bg-white/50'
                            }`}
                    >
                        {p.title}
                    </button>
                ))}
            </div>

            {/* Home button */}
            <div className="fixed top-2 md:top-10 left-3 md:left-10 z-[110]">
                <button
                    onClick={() => navigate('/')}
                    className="size-8 md:size-14 rounded-full glass-nav flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                    <span className="material-symbols-outlined text-base md:text-2xl">home</span>
                </button>
            </div>

            {/* SIDE NAVIGATION: Arrows (Desktop Only) */}
            {currentIndex > 0 && (
                <div className="fixed left-10 top-1/2 -translate-y-1/2 z-[110] hidden md:flex">
                    <button
                        onClick={() => handleSwitch(currentIndex - 1)}
                        className="size-16 rounded-full glass-nav flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl group active:scale-90"
                    >
                        <span className="material-symbols-outlined text-3xl transition-transform group-hover:-translate-x-1">west</span>
                    </button>
                </div>
            )}

            {currentIndex < projects.length - 1 && (
                <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[110] hidden md:flex">
                    <button
                        onClick={() => handleSwitch(currentIndex + 1)}
                        className="size-16 rounded-full glass-nav flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl group active:scale-90"
                    >
                        <span className="material-symbols-outlined text-3xl transition-transform group-hover:translate-x-1">east</span>
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
                    onDragEnd={(e, { offset, velocity }) => {
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
