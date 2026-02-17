import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const projects = [
    {
        title: "Quantum SaaS",
        category: "Enterprise Orchestration Platform",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3X35zZ5lpOt88JaYFO-8c6mZmI2mbMw1NzXQd7fsktG40KImMuc4FhrW9JdpneRd5d8i1iAPYogBu_71indpp6vhJN6HXWES4xokubmbssWz2KQUibpmBQSiv7NQ4dMcLB8jlrYjX87mlgvjAqFpbaBJxDaLdVB5xci1ltdrDhAVZLq12Oro1coC_ez0-5xiYCJM2MbRUsmMUtxwdA5TVYaSpQy8X07ajRoy1EsnFhmezR3wdgPiFePL6w88j_q81caukczIXYGS8",
        width: "w-[85vw] md:w-[750px]",
    },
    {
        title: "Aura AI",
        category: "Neural Interaction",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeia5a7A6X7IO3uq0u2t1dpt3aMlU1A1Kq0we2Ka9xYJc5xhkOvZoqHLRwc7qAzYos6nEq82nZGhrESH2jG7bfTPVqnYNA1N6HUSpg1SHZ5zbfLN_3LaTqzzZEJAJpjtdZvvnNR1xsegE7QFd_LM-xjMLZj4frqrTezTITcbGovC24pdbmkmc7oqYsAg--CZEub9GMw4YUoRsNnZ4Wuvu8mfniAr8ULfzpl3YZ2ixHisKSkVvRb5J36Sg-hjjy-7FL4HBfgvOmDRKO",
        width: "w-[70vw] md:w-[500px]",
        aspect: "aspect-[3/4]",
        isPortrait: true
    },
    {
        title: "Luxe Commerce",
        category: "Digital Experience",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8X29jXnrQ42KNad2uNXBGv2DyEK_Jnlx45gRQeRlfHN1YeJ5JUjCAi9o6fRm8gayInvBAiuP2REFop87YTNKSWEwgcY-PpVVDMkXJqohdFE2gylo8yZ-xgGjwMLK_VZYKMl8PaVGEUn9i9sZ-WN_Zd0gvmVTPZCoNtCxwTAIISGR6RsjSlhZ8AqbIDEuOD_Du2SP7XFcObA8Phf1YNlXai4PBTHT8c74Z7IO5i7exY0QL9uqJf0mQ6ZWvFvC-SJHjINXioOmp0Mjc",
        width: "w-[85vw] md:w-[750px]",
    },
    {
        title: "Eco Flow",
        category: "Sustainability Dashboard",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt3hoH7beht8VmEch3ibONIzOL6WuMVegFGJU_Qw0IZ-c69C6MqjSCZ4OevZ-6yoo5nFbpkUVULCszfvBPJaOH-OJuXplHytdui1cUfkHjI-mEIcGk--4Y_Io56B-3bRlvCsTHagxNSlF3NZefa9A9n0JteM7XnY6b573ziTODL-UgeIIfkzXrQRkwOTJ7gmZn-NYKAUruD7ID23ayiRgQRxF9_Qqazq5O6th-PZXoUp0Dp8uwKyeh9LRJSkDsAbIg_BAQuQyJNH1_",
        width: "w-[85vw] md:w-[750px]",
    }
];

const Work = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [percent, setPercent] = useState(0);

    // Sync percent with scroll
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleScroll = () => {
            const maxScroll = el.scrollWidth - el.clientWidth;
            if (maxScroll <= 0) return;
            const currentPercent = (el.scrollLeft / maxScroll) * 100;
            setPercent(currentPercent);
        };

        el.addEventListener('scroll', handleScroll, { passive: true });
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle slider interaction
    const handleSliderMove = (e) => {
        const el = containerRef.current;
        if (!el) return;
        const value = parseFloat(e.target.value);
        const maxScroll = el.scrollWidth - el.clientWidth;
        el.scrollTo({
            left: value * maxScroll,
            behavior: 'auto' // Use 'auto' for direct drag feedback, the slider itself will feel smooth
        });
    };

    return (
        <section id="work" className="silk-texture pt-32 pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-10 mb-12">
                <div className="flex flex-col gap-2">
                    <p className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase">Portfolio 2026</p>
                    <h1 className="text-heading text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter">
                        Selected Work
                    </h1>
                </div>
            </div>

            {/* Horizontal Gallery */}
            <div className="relative w-full group mb-4">
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto hide-scrollbar px-10 gap-8 md:gap-12 pt-8 pb-4 cursor-grab active:cursor-grabbing snap-x snap-proximity"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`flex-none ${project.width} snap-center group/card cursor-pointer`}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            onClick={() => navigate(`/project/${index}`)}
                        >
                            <div className={`relative glass-card ${project.isPortrait ? 'rounded-[2rem]' : 'rounded-2xl'} p-2 md:p-3 shadow-xl overflow-hidden ${project.aspect || 'aspect-video'}`}>
                                <div className={`w-full h-full ${project.isPortrait ? 'rounded-[1.6rem]' : 'rounded-xl'} overflow-hidden relative bg-black/5 group-hover/card:shadow-inner transition-all duration-500`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-60 group-hover/card:opacity-40 transition-opacity duration-500" />

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
                                </div>
                            </div>
                            <div className="mt-4 px-2 flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg md:text-3xl font-bold text-black leading-tight group-hover/card:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-subtext dark:text-gray-600 text-sm font-medium mt-2 uppercase tracking-wider">{project.category}</p>
                                </div>
                                <button className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300">
                                    <span className="material-symbols-outlined text-2xl">arrow_outward</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                    <div className="flex-none w-[10vw]" /> {/* End Spacer */}
                </div>
            </div>

            {/* Progress & Drag Explorer */}
            <div className="max-w-7xl mx-auto px-10">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-subtext uppercase tracking-widest">Navigator</span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm animate-bounce-x">keyboard_double_arrow_right</span>
                                <span className="text-xs font-bold text-heading  uppercase">Drag to explore reality</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-2xl md:text-4xl font-black text-primary tabular-nums tracking-tighter">{Math.round(percent)}%</span>
                        </div>
                    </div>

                    <div className="relative h-10 group/slider flex items-center">
                        {/* Native Slider for direct input */}
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.0001"
                            value={percent / 100}
                            onChange={handleSliderMove}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        />

                        {/* Custom Track Visual */}
                        <div className="absolute w-full h-[2px] bg-gray-200 dark:bg-white/10 rounded-full">
                            {/* Progress Line */}
                            <motion.div
                                className="h-full bg-primary rounded-full origin-left relative"
                                style={{ width: `${percent}%` }}
                            >
                                {/* Glowing Tip */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 size-2 bg-primary rounded-full blur-[4px]" />
                            </motion.div>
                        </div>

                        {/* Drag Handle Dot */}
                        <div
                            style={{ left: `${percent}%` }}
                            className="absolute size-4 bg-primary rounded-full border-2 border-white dark:border-background-dark shadow-lg -translate-x-1/2 pointer-events-none z-10 transition-transform group-hover/slider:scale-150"
                        />
                    </div>
                </div>
            </div>

            {/* Expertise Domains */}
            <div className="max-w-7xl mx-auto px-10 mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    {
                        title: "Design Systems",
                        icon: "widgets",
                        description: "Component libraries and style guides that keep your product consistent as it grows."
                    },
                    {
                        title: "Technical R&D",
                        icon: "biotech",
                        description: "Prototyping and research into emerging tools, frameworks, and AI integrations."
                    },
                    {
                        title: "Brand Identity",
                        icon: "diamond",
                        description: "Logos, visual language, and brand guidelines that give your product a clear, lasting identity."
                    }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-4 group">
                        <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                        </div>
                        <h4 className="text-xl font-bold text-black">{item.title}</h4>
                        <p className="text-sm text-subtext dark:text-gray-600 leading-relaxed max-w-[280px]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
