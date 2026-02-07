import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

const projects = [
    {
        id: "0",
        title: "Quantum SaaS",
        description: "Leading the next generation of enterprise orchestration with precision and scale.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3X35zZ5lpOt88JaYFO-8c6mZmI2mbMw1NzXQd7fsktG40KImMuc4FhrW9JdpneRd5d8i1iAPYogBu_71indpp6vhJN6HXWES4xokubmbssWz2KQUibpmBQSiv7NQ4dMcLB8jlrYjX87mlgvjAqFpbaBJxDaLdVB5xci1ltdrDhAVZLq12Oro1coC_ez0-5xiYCJM2MbRUsmMUtxwdA5TVYaSpQy8X07ajRoy1EsnFhmezR3wdgPiFePL6w88j_q81caukczIXYGS8",
    },
    {
        id: "1",
        title: "Aura AI",
        description: "Neural interaction models that redefine the boundary between human and machine.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeia5a7A6X7IO3uq0u2t1dpt3aMlU1A1Kq0we2Ka9xYJc5xhkOvZoqHLRwc7qAzYos6nEq82nZGhrESH2jG7bfTPVqnYNA1N6HUSpg1SHZ5zbfLN_3LaTqzzZEJAJpjtdZvvnNR1xsegE7QFd_LM-xjMLZj4frqrTezTITcbGovC24pdbmkmc7oqYsAg--CZEub9GMw4YUoRsNnZ4Wuvu8mfniAr8ULfzpl3YZ2ixHisKSkVvRb5J36Sg-hjjy-7FL4HBfgvOmDRKO",
    },
    {
        id: "2",
        title: "Luxe Commerce",
        description: "High-end digital shopping experiences for the world's most exclusive brands.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8X29jXnrQ42KNad2uNXBGv2DyEK_Jnlx45gRQeRlfHN1YeJ5JUjCAi9o6fRm8gayInvBAiuP2REFop87YTNKSWEwgcY-PpVVDMkXJqohdFE2gylo8yZ-xgGjwMLK_VZYKMl8PaVGEUn9i9sZ-WN_Zd0gvmVTPZCoNtCxwTAIISGR6RsjSlhZ8AqbIDEuOD_Du2SP7XFcObA8Phf1YNlXai4PBTHT8c74Z7IO5i7exY0QL9uqJf0mQ6ZWvFvC-SJHjINXioOmp0Mjc",
    },
    {
        id: "3",
        title: "Eco Flow",
        description: "Real-time sustainability tracking and energy optimization for modern ecosystems.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt3hoH7beht8VmEch3ibONIzOL6WuMVegFGJU_Qw0IZ-c69C6MqjSCZ4OevZ-6yoo5nFbpkUVULCszfvBPJaOH-OJuXplHytdui1cUfkHjI-mEIcGk--4Y_Io56B-3bRlvCsTHagxNSlF3NZefa9A9n0JteM7XnY6b573ziTODL-UgeIIfkzXrQRkwOTJ7gmZn-NYKAUruD7ID23ayiRgQRxF9_Qqazq5O6th-PZXoUp0Dp8uwKyeh9LRJSkDsAbIg_BAQuQyJNH1_",
    }
];

const ProjectSlide = ({ project }) => {
    return (
        <div className="h-full w-full overflow-y-auto relative scroll-smooth bg-transparent">
            {/* Texture background layer moved out of scroll container flow */}
            <div className="silk-texture absolute inset-0 pointer-events-none opacity-40" />

            {/* Project Content Container */}
            <div className="max-w-[1400px] mx-auto pt-36 pb-64 px-10 relative z-10">

                {/* Header (Top Centered) */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-[100px] font-black tracking-tighter text-heading leading-[0.9]"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-subtext dark:text-gray-400 mt-6 max-w-2xl mx-auto font-medium"
                    >
                        {project.description}
                    </motion.p>
                </div>

                {/* Z-Pattern Content sections */}
                <div className="flex flex-col gap-48">
                    {/* Section 1: Image Left, Desc Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] bg-black/5">
                            <img src={project.image} alt="Process" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-4xl font-black text-heading">The Vision</h3>
                            <p className="text-lg text-subtext leading-relaxed">
                                Our collaborative approach starts by uncovering the core values of your mission. We deep-dive into the technical requirements to ensure every pixel serves a strategic purpose.
                                This project represents the pinnacle of our design-driven engineering philosophy.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Desc Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="order-2 md:order-1 flex flex-col gap-6">
                            <h3 className="text-4xl font-black text-heading">The Impact</h3>
                            <p className="text-lg text-subtext leading-relaxed">
                                Implementing advanced neural networks allowed for a 40% increase in user retention.
                                The aesthetic clarity of the interface ensures complex data streams remain intuitive and actionable for high-stake decision makers.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] bg-black/5">
                            <img src={project.image} alt="Impact" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Section 3: Image Left, Desc Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] bg-black/5">
                            <img src={project.image} alt="Future" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-4xl font-black text-heading">Scalability</h3>
                            <p className="text-lg text-subtext leading-relaxed">
                                Built on a global microservices architecture, the platform scales horizontally to support millions of concurrent connections while maintaining sub-50ms latency globally.
                            </p>
                        </div>
                    </div>

                    {/* Section 4: Desc Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="order-2 md:order-1 flex flex-col gap-6">
                            <h3 className="text-4xl font-black text-heading">Ecosystem Integration</h3>
                            <p className="text-lg text-subtext leading-relaxed">
                                Seamlessly connecting with existing infrastructure, our solution ensures that data flow is unified across all touchpoints. We prioritize interoperability to create a frictionless experience for both developers and end-users alike.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] bg-black/5">
                            <img src={project.image} alt="Integration" className="w-full h-full object-cover" />
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
            <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-2 p-1.5 glass-nav rounded-2xl shadow-xl">
                {projects.map((p, i) => (
                    <button
                        key={p.id}
                        onClick={() => handleSwitch(i)}
                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${i === currentIndex
                            ? 'bg-primary text-white shadow-lg'
                            : 'text-heading/40 hover:text-heading hover:bg-white/50'
                            }`}
                    >
                        {p.title}
                    </button>
                ))}
            </div>

            {/* Back button */}
            <div className="fixed top-10 left-10 z-[110]">
                <button
                    onClick={() => navigate('/')}
                    className="size-14 rounded-full glass-nav flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-300"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>

            {/* SIDE NAVIGATION: Arrows */}
            {currentIndex > 0 && (
                <div className="fixed left-10 top-1/2 -translate-y-1/2 z-[110]">
                    <button
                        onClick={() => handleSwitch(currentIndex - 1)}
                        className="size-16 rounded-full glass-nav flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl group active:scale-90"
                    >
                        <span className="material-symbols-outlined text-3xl transition-transform group-hover:-translate-x-1">west</span>
                    </button>
                </div>
            )}

            {currentIndex < projects.length - 1 && (
                <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[110]">
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
                >
                    <ProjectSlide project={projects[currentIndex]} />
                </motion.div>
            </AnimatePresence>

            <div className="noise-overlay" />
        </div>
    );
};

export default ProjectDetails;
