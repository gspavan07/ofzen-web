import React from 'react';
import { motion } from 'framer-motion';
import Terminal from '../components/Terminal';

const Home = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col w-full">

            <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20 relative z-10 w-full">
                <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-8 text-left z-20"
                    >

                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black leading-[1.1] tracking-[-0.04em] text-heading">
                            We Design & Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">Digital Products</span> <br />
                            That Work
                        </h1>

                        <p className="text-base md:text-xl text-subtext dark:text-gray-600 font-normal leading-relaxed max-w-[540px]">
                            From early-stage startups to growing enterprises — we handle design, development, and everything in between.                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex min-w-[160px] items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-2xl hover:shadow-primary/20 cursor-pointer"
                            >
                                Partner with Us
                            </button>
                            <button
                                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex min-w-[160px] items-center justify-center rounded-xl h-14 px-8 bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-heading text-base font-bold transition-all hover:bg-white/80 dark:hover:bg-white/10 backdrop-blur-sm cursor-pointer"
                            >
                                View Our Work
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-8 border-t border-black/5 dark:border-white/5">
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-primary">10+</span>
                                <span className="text-xs font-medium text-subtext uppercase tracking-tighter">Projects Delivered</span>
                            </div>
                            <div className="h-8 w-px bg-black/5 dark:bg-white/10"></div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-primary">15+ Satisfied Clients</span>
                                <span className="text-xs font-medium text-subtext uppercase tracking-tighter">Across India</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex justify-center items-center  z-20"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[120px] scale-75"></div>
                        <div className="relative z-10 w-full max-w-[500px]  group flex items-center justify-center">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

                            <Terminal />

                            <div className="absolute -top-5 -right-5 md:-top-10 md:-right-10 glass-nav p-4 rounded-2xl shadow-xl flex items-center gap-3">
                                <div className="bg-teal-400 size-2 rounded-full animate-pulse"></div>
                                <span className="text-xs font-bold text-heading">Node Connected</span>
                            </div>
                            <div className="absolute -bottom-8 -left-5 md:-bottom-8 md:-left-10 glass-nav p-5 rounded-2xl shadow-xl max-w-[150px] md:max-w-[200px]">
                                <p className="text-[10px] uppercase font-bold text-primary mb-2">Technical Specs</p>
                                <p className="text-xs font-medium leading-tight text-heading">Architecture built for ultra-low latency data sync.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <div className="relative z-20 max-w-[960px] mx-auto w-full px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        whileHover={{ y: -5 }}
                        whileInView={{
                            y: typeof window !== 'undefined' && window.innerWidth < 768 ? -8 : 0,
                            borderColor: typeof window !== 'undefined' && window.innerWidth < 768 ? '#135bec' : 'transparent'
                        }}
                        viewport={{ margin: "-40% 0px -40% 0px" }}
                        className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/[0.02] backdrop-blur-sm flex flex-col gap-4 group hover:border-primary/30 transition-all duration-500"
                    >
                        <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                        <h3 className="text-lg font-bold text-heading">Strategic Design</h3>
                        <p className="text-sm text-subtext dark:text-gray-600 leading-relaxed">Interfaces designed around how users actually think — clean, fast, and purposeful.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        whileInView={{
                            y: typeof window !== 'undefined' && window.innerWidth < 768 ? -8 : 0,
                            borderColor: typeof window !== 'undefined' && window.innerWidth < 768 ? '#135bec' : 'transparent'
                        }}
                        viewport={{ margin: "-40% 0px -40% 0px" }}
                        className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/[0.02] backdrop-blur-sm flex flex-col gap-4 group hover:border-primary/30 transition-all duration-500"
                    >
                        <span className="material-symbols-outlined text-primary text-3xl">memory</span>
                        <h3 className="text-lg font-bold text-heading ">Advanced Engineering</h3>
                        <p className="text-sm text-subtext dark:text-gray-600 leading-relaxed">Backend and frontend systems built to handle real load without breaking.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        whileInView={{
                            y: typeof window !== 'undefined' && window.innerWidth < 768 ? -8 : 0,
                            borderColor: typeof window !== 'undefined' && window.innerWidth < 768 ? '#135bec' : 'transparent'
                        }}
                        viewport={{ margin: "-40% 0px -40% 0px" }}
                        className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/[0.02] backdrop-blur-sm flex flex-col gap-4 group hover:border-primary/30 transition-all duration-500"
                    >
                        <span className="material-symbols-outlined text-primary text-3xl">science</span>
                        <h3 className="text-lg font-bold text-heading">Innovation Lab</h3>
                        <p className="text-sm text-subtext dark:text-gray-600 leading-relaxed">Exploring what's next — AI tools, automation, and smarter product workflows.</p>
                    </motion.div>
                </div>
            </div>

            {/* <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-30 pointer-events-none">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-heading">Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </div> */}
        </section>
    );
};

export default Home;
