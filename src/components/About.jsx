import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import charanImg from '../assets/charan.jpeg';
import pavanImg from '../assets/pavan.jpeg';
import sunilImg from '../assets/sunil.jpeg';
import sandeepImg from '../assets/sandeep.jpeg';
import krishnaImg from '../assets/krishna.jpeg';
import nareenImg from '../assets/nareen.jpeg';

const steps = [
    { id: '01', title: 'Discovery', icon: 'travel_explore', desc: 'We deep-dive into your ecosystem, uncovering core challenges and latent opportunities through immersive research and data-driven insights.', points: ['Stakeholder Alignment Workshops', 'Market & Competitor Analysis', 'User Persona Development'] },
    { id: '02', title: 'Strategy', icon: 'architecture', desc: 'Defining the blueprint for success. We architect a strategic roadmap that bridges vision and execution, ensuring scalable growth.', points: ['Product Roadmap Creation', 'KPI Framework Definition', 'Brand Positioning Matrix'] },
    { id: '03', title: 'Architecture', icon: 'account_tree', desc: 'Building the foundation of your digital ecosystem. We design robust structures that handle complex data flows with elegance and efficiency.', points: ['System Logic Diagrams', 'Database Schema Design', 'API Integration Map'] },
    { id: '04', title: 'Design', icon: 'auto_fix_high', desc: 'Crafting emotive and high-performance interfaces. We merge aesthetic excellence with intuitive user experiences that captivate and convert.', points: ['High-Fidelity Prototypes', 'Design System Library', 'Interactive Motion Specs'] },
    { id: '05', title: 'Development', icon: 'terminal', desc: 'Bringing pixels to life with clean, performant code. Our engineering team builds future-proof solutions using cutting-edge technologies.', points: ['Scalable Frontend Codebase', 'Robust Backend APIs', 'CI/CD Pipeline Setup'] },
    { id: '06', title: 'Testing', icon: 'precision_manufacturing', desc: 'Rigorous quality assurance to ensure flawless performance. We break things so your users never have to encounter a glitch.', points: ['End-to-End User Testing', 'Performance Optimization', 'Security Vulnerability Audit'] },
    { id: '07', title: 'Deployment', icon: 'rocket_launch', desc: 'The launch of your digital flagship. We manage the final handover and deployment process with zero-downtime precision.', points: ['Cloud Infrastructure Launch', 'SEO & Analytics Baseline', 'Operational Handover'] },
    { id: '08', title: 'Evolution', icon: 'trending_up', desc: 'Post-launch growth and iterative refinement. We stay by your side to scale the product and adapt to evolving market demands.', points: ['A/B Testing & Optimization', 'Feature Expansion Roadmap', '24/7 Strategic Support'] }
];

const team = [
    { name: 'Charan Tej', role: 'UI/UX Designer', image: charanImg, desc: 'Specializing in generative design systems and future-tech human interfaces.', icons: ['hub', 'deployed_code', 'public'] },
    { name: 'Pavan', role: 'Product Developer', image: pavanImg, desc: 'Expert in scalable Web3 infrastructures and low-latency interactive experiences.', icons: ['terminal', 'dataset'] },
    { name: 'Sunil', role: 'Frontend Developer', image: sunilImg, desc: 'Specializing in developing frontend interface with industry standards.', icons: ['hub', 'deployed_code', 'public'] },
    { name: 'Sandeep', role: 'Strategic Growth Lead', image: sandeepImg, desc: 'Bridging the gap between creative vision and market dominance for high-growth startups.', icons: ['query_stats', 'share'] },
    { name: 'Krishna', role: 'AI Engineer', image: krishnaImg, desc: 'Architecting high-availability server infrastructures and scalable microservices.', icons: ['database', 'cloud', 'api'] },
    { name: 'Nareen', role: 'Security Engineer', image: nareenImg, desc: 'Fortifying digital perimeters with advanced threat detection and zero-trust protocols.', icons: ['security', 'lock', 'shield'] }
];

const OrbitItem = ({ step, index, activeIndex }) => {
    const totalSteps = 8;
    // Normalized position relative to active index
    const currentPos = (index - activeIndex + totalSteps) % totalSteps;

    const positions = {
        0: { transform: "translate3d(-50%, 120px, 350px) scale(1.3)", opacity: 1, blur: 0, zIndex: 100 },
        1: { transform: "translate3d(280px, 40px, 150px) scale(1)", opacity: 0.8, blur: 0.5, zIndex: 90 },
        2: { transform: "translate3d(450px, -60px, -100px) scale(0.85)", opacity: 0.6, blur: 1.5, zIndex: 80 },
        3: { transform: "translate3d(200px, -160px, -250px) scale(0.7)", opacity: 0.4, blur: 2.5, zIndex: 70 },
        4: { transform: "translate3d(-50%, -200px, -350px) scale(0.6)", opacity: 0.3, blur: 4, zIndex: 60 },
        5: { transform: "translate3d(-350px, -160px, -250px) scale(0.7)", opacity: 0.4, blur: 2.5, zIndex: 70 },
        6: { transform: "translate3d(-550px, -60px, -100px) scale(0.85)", opacity: 0.6, blur: 1.5, zIndex: 80 },
        7: { transform: "translate3d(-400px, 40px, 150px) scale(1)", opacity: 0.8, blur: 0.5, zIndex: 90 },
    };

    const style = positions[currentPos];
    const isActive = currentPos === 0;

    return (
        <motion.div
            className="absolute left-1/2 top-1/2"
            animate={{
                transform: style.transform,
                opacity: style.opacity,
                filter: `blur(${style.blur}px)`
            }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
                opacity: { duration: 0.5 },
                filter: { duration: 0.6 }
            }}
            style={{ zIndex: style.zIndex, transformStyle: 'preserve-3d' }}
        >
            <div className="flex flex-col items-center gap-4">
                <div className={`
          flex items-center justify-center transition-all duration-700 ease-out
          ${isActive
                        ? 'size-24 rounded-[2rem] active-phase-card shadow-2xl scale-110'
                        : 'size-20 rounded-2xl inactive-phase-card opacity-80'
                    }
        `}>
                    <span className={`material-symbols-outlined ${isActive ? 'text-5xl' : 'text-3xl'}`}>
                        {step.icon}
                    </span>
                </div>
                <div className="text-center pb-8 min-w-[120px]">
                    <p className={`font-black transition-all duration-700 ease-out tracking-tight leading-none mb-1 ${isActive ? 'text-lg sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-accent-fire to-sunset-pink' : 'text-base sm:text-xl text-heading dark:text-white'}`}>
                        {step.title}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Phase {step.id}</p>
                </div>
            </div>
        </motion.div>
    );
};

const About = () => {
    const triggerRef = useRef(null);
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [orbitalOpacity, setOrbitalOpacity] = useState(0.25);
    const [orbitalBlur, setOrbitalBlur] = useState(1.5);

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);



    // GSAP ScrollTrigger for orbital animation
    // This properly pins the orbit section and drives phase changes based on scroll progress
    useLayoutEffect(() => {
        const stickyElement = sectionRef.current;
        if (!stickyElement) return;

        const scrollTrigger = ScrollTrigger.create({
            trigger: stickyElement,
            start: "center center", // Pin when the section is centered in viewport
            end: () => `+=${steps.length * 250}vh`, // Increased distance to prevent skipping phases (250vh per phase)
            pin: true, // Pin the element itself
            pinSpacing: true, // Maintain spacing
            scrub: 0.5, // Reduced lag for tighter sync, reducing "jump" feeling
            // Removed anticipatePin as it can cause vertical jitter
            // Removed fastScrollEnd to prevent jumpy catch-up
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                const progress = self.progress; // 0 to 1

                // Map progress to phases (0-7)
                const totalPhases = steps.length;
                const newActiveIndex = Math.min(
                    Math.floor(progress * totalPhases),
                    totalPhases - 1
                );

                setActiveIndex(newActiveIndex);



                // Orbital visual effects
                setOrbitalOpacity(0.2 + progress * 0.1);
                setOrbitalBlur(2 - progress * 2);
            },
        });

        // Cleanup on unmount
        return () => {
            scrollTrigger.kill();
        };
    }, []);

    return (
        <div id="about" className="w-full relative silk-texture">
            {/* 1. Static Intro Section - Tightened spacing */}
            <div className="pt-24 px-4 lg:px-40 pb-0 overflow-hidden">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-xl text-heading">
                        <h1 className="text-3xl md:text-6xl font-black leading-tight tracking-tight mb-4">The Ofzen Way</h1>
                        <p className="text-gray-700 dark:text-gray-600 text-lg font-normal leading-relaxed">
                            Every project follows a clear, tested process — from first conversation to final launch.                        </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-accent-fire mb-2">
                        <span className="size-2 rounded-full bg-accent-fire animate-pulse"></span>
                        Orbit Tracking Active
                    </div>
                </div>
            </div>

            {/* 2. ORBITAL SECTION with GSAP ScrollTrigger */}
            {/* 
                GSAP ScrollTrigger Configuration:
                - trigger: triggerRef (this section)
                - pin: sectionRef (the orbit container)
                - end: 8 viewport heights (100vh per phase)
                
                How it works:
                1. When trigger's top hits viewport top → orbit container pins
                2. Scroll progress 0-100% maps to phases 1-8
                3. After 800vh of scroll → unpin and resume normal scrolling
            */}
            <section ref={triggerRef}>



                {/* This container gets pinned by GSAP ScrollTrigger */}
                <div
                    ref={sectionRef}
                    className="h-screen w-full flex items-center justify-center overflow-hidden bg-transparent"
                >
                    <div className="max-w-[1400px] w-full relative h-screen flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-32 px-4">

                        {/* The Orbit Visualization */}
                        <div className="relative flex-1 h-[400px] md:h-[600px] scale-[0.4] md:scale-100 flex items-center justify-center" style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}>
                            {/* CORE Node */}
                            <div className="relative z-30 size-48 lg:size-64 rounded-full glass-card flex items-center justify-center shadow-[0_0_100px_rgba(19,91,236,0.15)] border border-primary/10">
                                <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
                                <div className="text-primary flex flex-col items-center relative z-10">
                                    <span className="material-symbols-outlined text-5xl lg:text-7xl">deployed_code</span>
                                    <span className="text-[10px] lg:text-sm uppercase font-black tracking-[0.4em] mt-4">CORE</span>
                                </div>
                            </div>

                            {/* Orbital Ring */}
                            <div
                                className="absolute top-1/2 left-1/2 w-[1100px] h-[450px] border-[3px] border-transparent rounded-[50%] transition-all duration-300"
                                style={{
                                    transform: 'translate(-50%, -50%) rotateX(70deg)',
                                    background: 'linear-gradient(90deg, #FF5F38, #FF38A2, #135bec, #FF5F38)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    padding: '3px',
                                    opacity: orbitalOpacity,
                                    filter: `blur(${orbitalBlur}px)`
                                }}
                            />

                            {/* Items */}
                            {steps.map((step, index) => (
                                <OrbitItem key={step.id} index={index} step={step} activeIndex={activeIndex} />
                            ))}
                        </div>

                        {/* Info Panel */}
                        <div className="w-full lg:w-[420px] glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl z-[90]">
                            {/* Watermark */}
                            <div className="absolute top-0 right-0 p-4">
                                <span className="text-[60px] font-black text-primary/10 select-none leading-none">
                                    {(activeIndex + 1).toString().padStart(2, '0')}
                                </span>
                            </div>

                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20, position: 'absolute' }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }}
                                >
                                    <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                                        <span className="text-accent-fire">{steps[activeIndex].title}</span>
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-600 leading-relaxed mb-8">
                                        {steps[activeIndex].desc}
                                    </p>
                                    <motion.ul
                                        className="space-y-4"
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            visible: { transition: { staggerChildren: 0.08 } }
                                        }}
                                    >
                                        {steps[activeIndex].points.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-3"
                                                variants={{
                                                    hidden: { opacity: 0, x: -10 },
                                                    visible: { opacity: 1, x: 0 }
                                                }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                <span className="material-symbols-outlined text-sunset-pink text-xl">check_circle</span>
                                                <span className="text-sm font-semibold text-gray-600 dark:text-gray-600">{point}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </AnimatePresence>

                            <div
                                className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-accent-fire to-sunset-pink transition-all duration-1000 ease-out"
                                style={{ width: `${((activeIndex + 1) / 8) * 100}%` }}
                            />
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
                            <span className="text-[24vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap quote-watermark">
                                OFZEN
                            </span>
                        </div>

                        {/* Design Dot Grid Layer */}
                        <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #135bec 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

                        {/* Large Circular Quote Symbol */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
                            <span className="font-serif italic text-primary/20 text-[120px] leading-none select-none" style={{ fontFamily: '"Playfair Display", serif' }}>
                                &ldquo;
                            </span>
                        </div>

                        <div className="relative z-20 max-w-5xl mx-auto text-center mt-12">
                            <h2 className="font-serif italic text-2xl sm:text-4xl md:text-7xl leading-[1.3] text-heading dark:text-heading mb-16 tracking-tight" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900 }}>
                                "Good products don't just look <span className="relative inline-block text-accent-fire not-italic font-black mx-1">
                                    right
                                    <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-accent-fire/20 rounded-full"></span>
                                </span> — they get out of the way and let people do what they came to do."
                            </h2>
                        </div>

                        {/* Philosophy Footer */}
                        <div className="absolute bottom-8 left-0 w-full flex items-center justify-center gap-8 px-10 z-10">
                            <div className="h-px flex-1 max-w-[100px] bg-primary/20"></div>
                            <p className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">OFZEN</p>
                            <div className="h-px flex-1 max-w-[100px] bg-primary/20"></div>
                        </div>
                    </div>
                </div>

                {/* Collective Section */}
                <div className="max-w-[1400px] mx-auto px-4 lg:px-48 mt-48">
                    <div className="mb-20 flex flex-col gap-4">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-xs">Our Collective</p>
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-heading tracking-tighter">The Minds Behind</h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -12 }}
                                className="group relative bg-white dark:bg-[#151b29] rounded-2xl lg:rounded-[2.5rem] overflow-hidden border border-gray-100 border-white/10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(19,91,236,0.2)]"
                            >
                                <div className="aspect-[3/4] w-full overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-2 lg:p-7">
                                    <div className="text-white">
                                        <h4 className="text-md sm:text-2xl lg:text-3xl font-black mb-1 md:mb-2 leading-tight">{member.name}</h4>
                                        <p className="text-[8px] sm:text-lg lg:text-[16px] font-black text-[#135bec] lg:mb-5 uppercase tracking-widest">{member.role}</p>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 hidden lg:block">
                                            <p className="text-gray-200 text-sm leading-relaxed font-medium">{member.desc}</p>
                                            {/* <div className="flex gap-4">
                                                {member.icons.map((icon, idx) => (
                                                    <span key={idx} className="material-symbols-outlined cursor-pointer hover:text-primary hover:scale-125 transition-all duration-300 text-xl">{icon}</span>
                                                ))}
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
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
          background: linear-gradient(90deg, #FF5F38, #FF38A2, #135bec, #FF5F38);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 4px;
          opacity: 0.25;
          filter: blur(1.5px);
        }
        .active-phase-card {
          background: linear-gradient(135deg, #FF5F38, #FF38A2);
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
           background: radial-gradient(circle at 50% 50%, rgba(19, 91, 236, 0.05) 0%, transparent 80%),
                       white;
        }
        :global(.dark) .glass-quote-bg {
           background: radial-gradient(circle at 50% 50%, rgba(19, 91, 236, 0.1) 0%, transparent 80%),
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
