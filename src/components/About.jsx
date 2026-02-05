import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import charanImg from '../assets/charan.jpeg';
import pavanImg from '../assets/pavan.jpeg';
import sunilImg from '../assets/sunil.jpeg';
import sandeepImg from '../assets/sandeep.jpeg';

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
    { name: 'Charan', role: 'Founder & Creative Director', image: charanImg, desc: 'Specializing in generative design systems and future-tech human interfaces.', icons: ['hub', 'deployed_code', 'public'] },
    { name: 'Pavan', role: 'Lead Product Developer', image: pavanImg, desc: 'Expert in scalable Web3 infrastructures and low-latency interactive experiences.', icons: ['terminal', 'dataset'] },
    { name: 'Sunil', role: 'Lead FrontEnd Developer', image: sunilImg, desc: 'Specializing in developing frontend interface with industry standards.', icons: ['hub', 'deployed_code', 'public'] },
    { name: 'Sandeep', role: 'Strategic Growth Lead', image: sandeepImg, desc: 'Bridging the gap between creative vision and market dominance for high-growth startups.', icons: ['query_stats', 'share'] }
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
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ zIndex: style.zIndex, transformStyle: 'preserve-3d' }}
        >
            <div className="flex flex-col items-center gap-4">
                <div className={`
          flex items-center justify-center transition-all duration-500
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
                    <p className={`font-black transition-all duration-500 tracking-tight leading-none mb-1 ${isActive ? 'text-2xl bg-clip-text text-transparent bg-gradient-to-r from-accent-fire to-sunset-pink' : 'text-xl text-heading dark:text-white'}`}>
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

    // Handle scroll event for orbital animation
    useEffect(() => {
        const triggerZone = triggerRef.current;
        if (!triggerZone) return;

        const handleScroll = () => {
            const rect = triggerZone.getBoundingClientRect();
            const triggerHeight = triggerZone.offsetHeight;
            let progress = -rect.top / (triggerHeight - window.innerHeight);
            progress = Math.max(0, Math.min(1, progress));
            const newActiveIndex = Math.round(progress * (7));
            setActiveIndex(newActiveIndex);
            
            // Dynamic orbital path animations
            setOrbitalOpacity(0.2 + (progress * 0.1));
            setOrbitalBlur(1 + (1 - progress));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="about" className="w-full relative silk-texture" ref={triggerRef}>
            {/* 1. Static Intro Section - Tightened spacing */}
            <div className="pt-24 px-4 lg:px-40 pb-0 overflow-hidden">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-xl text-heading">
                        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">The Ofzen Way</h1>
                        <p className="text-gray-700 dark:text-gray-600 text-lg font-normal leading-relaxed">
                            Scroll to rotate through our 8-phase methodology. Each scroll step advances the orbital system.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-accent-fire mb-2">
                        <span className="size-2 rounded-full bg-accent-fire animate-pulse"></span>
                        Orbit Tracking Active
                    </div>
                </div>
            </div>

            {/* 2. PARALLAX ORBITAL SECTION - Fixed height, scroll-driven animation */}
            <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden silk-texture">
                <div className="max-w-[1400px] w-full relative h-full flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 px-4 overflow-visible">

                        {/* The Orbit Visualization */}
                        <div className="relative flex-1 h-[700px] flex items-center justify-center orbit-container perspective-[2000px] transform-style-3d">
                            {/* CORE Node */}
                            <div className="relative z-30 size-48 lg:size-64 rounded-full glass-card flex items-center justify-center shadow-[0_0_120px_rgba(19,91,236,0.1)] border border-primary/10 bg-white/5 backdrop-blur-3xl">
                                <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px] animate-pulse"></div>
                                <div className="text-primary flex flex-col items-center relative z-10">
                                    <span className="material-symbols-outlined text-6xl lg:text-8xl">view_in_ar</span>
                                    <span className="text-xs uppercase font-black tracking-[0.5em] mt-4">CORE</span>
                                </div>
                            </div>

                            {/* Orbital Ring */}
                            <motion.div 
                                className="orbital-path pointer-events-none"
                                animate={{
                                    opacity: orbitalOpacity,
                                    filter: `blur(${orbitalBlur}px)`
                                }}
                                transition={{ duration: 0.1 }}
                            ></motion.div>

                            {/* Items */}
                            {steps.map((step, index) => (
                                <OrbitItem key={step.id} index={index} step={step} activeIndex={activeIndex} />
                            ))}
                        </div>

                        {/* Info Panel - Fixed background logic and AnimatePresence */}
                        <div className="w-full lg:w-[440px] glass-card rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl z-[110] bg-white/80 dark:bg-[#151b29]/80 border border-gray-200 dark:border-white/10 backdrop-blur-3xl lg:translate-x-12">
                            {/* Watermark reflects the same activeIndex accurately */}
                            <div className="absolute top-0 right-0 p-8 leading-none">
                                <span className="text-[110px] font-black text-white/5 select-none tracking-tighter">
                                    {steps[activeIndex].id}
                                </span>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative z-10"
                                >
                                    <h3 className="text-4xl lg:text-5xl font-black mb-4 text-accent-fire tracking-tight leading-tight">
                                        {steps[activeIndex].title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-8 font-medium">
                                        {steps[activeIndex].desc}
                                    </p>
                                    <ul className="space-y-4">
                                        {steps[activeIndex].points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="size-5 rounded-full bg-sunset-pink/10 flex items-center justify-center mt-1">
                                                    <span className="material-symbols-outlined text-sunset-pink text-sm font-bold">check</span>
                                                </div>
                                                <span className="text-base lg:text-lg font-bold text-gray-800 dark:text-white/90">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute bottom-0 left-0 h-2 bg-white/5 w-full">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-accent-fire to-sunset-pink"
                                    animate={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
                                    transition={{ duration: 0.8 }}
                                />
                            </div>
                        </div>
                    </div>

                {/* Scroll Hint */}
                {activeIndex < 7 && (
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 z-30 pointer-events-none">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-heading dark:text-white">Scroll to advance</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-fire to-transparent"></div>
                    </div>
                )}
            </section>

            {/* 3. POST-ORBIT TRANSITION - Ensure seamless flow */}
            <div className="relative z-20 silk-texture pt-32 pb-32 border-t border-gray-200 dark:border-white/5 -mt-px">
                <div className="max-w-[1200px] mx-auto px-4 lg:px-40">
                    {/* Quote Section Container */}
                    <div className="relative overflow-hidden rounded-[3rem] py-64 px-16 shadow-2xl glass-quote-bg">
                        {/* Design Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                            <span className="text-[30vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap quote-watermark">
                                OFZEN
                            </span>
                        </div>

                        {/* Design Dot Grid Layer */}
                        <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #135bec 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

                        {/* Large Circular Quote Symbol */}
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10">
                            <span className="font-serif italic text-primary/20 text-[120px] leading-none select-none" style={{ fontFamily: '"Playfair Display", serif' }}>
                                &ldquo;
                            </span>
                        </div>

                        <div className="relative z-20 max-w-4xl mx-auto text-center mt-12">
                            <h2 className="font-serif italic text-4xl md:text-7xl leading-[1.3] text-heading dark:text-heading mb-24 tracking-tight" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900 }}>
                                "Design is not just what it looks like; it's how it <span className="relative inline-block text-accent-fire not-italic font-black mx-1">
                                    accelerates
                                    <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-accent-fire/20 rounded-full"></span>
                                </span> the human intent."
                            </h2>
                        </div>

                        {/* Philosophy Footer */}
                        <div className="absolute bottom-16 left-0 w-full flex items-center justify-center gap-8 px-10 z-10">
                            <div className="h-px flex-1 max-w-[100px] bg-primary/20"></div>
                            <p className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">OFZEN PHILOSOPHY 2026</p>
                            <div className="h-px flex-1 max-w-[100px] bg-primary/20"></div>
                        </div>
                    </div>
                </div>

                {/* Collective Section */}
                <div className="max-w-[1200px] mx-auto px-4 lg:px-40 mt-48">
                    <div className="mb-20 flex flex-col gap-4">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-xs">Our Collective</p>
                        <h3 className="text-5xl md:text-6xl font-black text-heading tracking-tighter">The Minds Behind</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-10 overflow-x-auto">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -15 }}
                                className="group relative bg-white dark:bg-[#151b29] rounded-[3rem] overflow-hidden border border-gray-100 dark:border-white/5 transition-all duration-700 hover:shadow-2xl"
                            >
                                <div className="aspect-[4/5] w-full overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-10 translate-y-40 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                                    <div className="text-white">
                                        <h4 className="text-3xl font-bold mb-1">{member.name}</h4>
                                        <p className="text-primary font-black text-xs mb-6 uppercase tracking-widest">{member.role}</p>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                            <p className="text-gray-300 text-sm leading-relaxed mb-8">{member.desc}</p>
                                            <div className="flex gap-6">
                                                {member.icons.map((icon, idx) => (
                                                    <span key={idx} className="material-symbols-outlined cursor-pointer hover:text-accent-fire transition-all text-2xl">{icon}</span>
                                                ))}
                                            </div>
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
