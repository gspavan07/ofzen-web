import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section id="services" className="max-w-[1280px] mx-auto w-full px-6 py-12 md:py-20">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
                <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Expertise</p>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl text-heading">
                    Engineering the Future of Digital Platforms
                </h1>
            </div>

            {/* Bento Grid Services */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[240px]">
                {/* Web Development (Wide) */}
                <motion.div
                    whileHover={{ y: -4 }}
                    whileInView={{
                        y: typeof window !== 'undefined' && window.innerWidth < 768 ? -10 : 0,
                        borderColor: typeof window !== 'undefined' && window.innerWidth < 768 ? '#135bec' : 'transparent'
                    }}
                    viewport={{ margin: "-40% 0px -40% 0px" }}
                    className="md:col-span-8 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group border transition-all duration-500"
                >
                    <div className="z-10 relative">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4 block">language</span>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">Web Development</h3>
                        <p className="text-subtext dark:text-gray-600 text-sm max-w-sm leading-relaxed">
                            Fast, accessible, and maintainable web apps — built to scale as your business does.                        </p>
                    </div>
                    <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:opacity-40 transition-opacity">
                        <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                    </div>
                    <div className="absolute top-8 right-8 hidden md:block">
                        <img
                            alt="Abstract 3D sphere visualization"
                            className="w-28 h-28 object-contain"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3hoH7beht8VmEch3ibONIzOL6WuMVegFGJU_Qw0IZ-c69C6MqjSCZ4OevZ-6yoo5nFbpkUVULCszfvBPJaOH-OJuXplHytdui1cUfkHjI-mEIcGk--4Y_Io56B-3bRlvCsTHagxNSlF3NZefa9A9n0JteM7XnY6b573ziTODL-UgeIIfkzXrQRkwOTJ7gmZn-NYKAUruD7ID23ayiRgQRxF9_Qqazq5O6th-PZXoUp0Dp8uwKyeh9LRJSkDsAbIg_BAQuQyJNH1_"
                        />
                    </div>
                </motion.div>

                {/* App Development (Tall/Square) */}
                <motion.div
                    whileHover={{ y: -4 }}
                    whileInView={{
                        y: typeof window !== 'undefined' && window.innerWidth < 768 ? -10 : 0,
                        borderColor: typeof window !== 'undefined' && window.innerWidth < 768 ? '#135bec' : 'transparent'
                    }}
                    viewport={{ margin: "-40% 0px -40% 0px" }}
                    className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group border transition-all duration-500"
                >
                    <div className="z-10 relative">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4 block">smartphone</span>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">App Development</h3>
                        <p className="text-subtext dark:text-gray-600 text-sm max-w-[200px] leading-relaxed">
                            iOS and Android apps that feel native, perform well, and don't need constant fixing.                        </p>
                    </div>
                    <div className="absolute top-8 right-8 hidden md:block">
                        <img
                            alt="Mobile app UI 3D mockup"
                            className="w-28 h-28 object-contain"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoMTRA2EzOcZt1cVmWfgqqBH4_APqF9tz2A-rOE2OsP5tDzNkSLySEE3oZlxM5-gJ8jAKUTI1c_ruur_6xU2gLNCwumDj2CCIvs4pbl7VuZUlL30H6S6DKEU0OJC3d6tKciPr4jp27RfnFU-d1kgcELK2twFagfTTp2jBgi_bLN-7X9lD7ykoQ1Htybztjall0B5_cogzH8jRUQ_qaxhLhV5fn4oFcIfcB53mhhFwf7A-h-sy5dgn9TaYXZvdb1WxJQoth2NAJAFMU"
                        />
                    </div>
                </motion.div>

                {/* Custom Software (Small Square) */}
                <motion.div
                    whileHover={{ y: -4 }}
                    whileInView={{
                        y: typeof window !== 'undefined' && window.innerWidth < 768 ? -10 : 0,
                        borderColor: typeof window !== 'undefined' && window.innerWidth < 768 ? '#135bec' : 'transparent'
                    }}
                    viewport={{ margin: "-40% 0px -40% 0px" }}
                    className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between relative group border transition-all duration-500"
                >
                    <div className="z-10 relative">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4 block">terminal</span>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">Custom Software</h3>
                        <p className="text-subtext dark:text-gray-600 text-sm leading-relaxed">
                            Internal tools, platforms, and workflows built around how your team actually operates.                        </p>
                    </div>
                </motion.div>

                {/* UI/UX Design (Wide) */}
                <motion.div
                    whileHover={{ y: -4 }}
                    whileInView={{
                        y: typeof window !== 'undefined' && window.innerWidth < 768 ? -10 : 0,
                        borderColor: typeof window !== 'undefined' && window.innerWidth < 768 ? '#135bec' : 'transparent'
                    }}
                    viewport={{ margin: "-40% 0px -40% 0px" }}
                    className="md:col-span-5 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group border transition-all duration-500"
                >
                    <div className="z-10 relative">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4 block">potted_plant</span>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">Design (UI/UX)</h3>
                        <p className="text-subtext dark:text-gray-600 text-sm max-w-xs leading-relaxed">
                            Clean, functional interfaces that reduce friction and keep users coming back.                        </p>
                    </div>
                    <div className="absolute top-8 right-8 hidden md:block">
                        <img
                            alt="Glass UI components 3D"
                            className="w-28 h-28 object-contain opacity-100"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbkAHvvfgSf_E8m7u-eK5HWa2OoQSoUWvF-YDeiJKdNbSl6_cVrA4rLbiNTlpdyMvqu4w6hXh02S4nvisnrFbKAbj38VMPuWTZCxw5RQtLOVnHYjAavqh1xWKHQA1sU1Y8kt4qx_SOw1ZGvrcmFFe2ilM3Wog1NsiD2sjOys57UcT_Jru8guwT47BddjG7VS8dx8CpXPliUqn3deri7Fm36gSnJx3zADLXKWYpAh3_yC0otBU8-kyODyiVP5bm1rg5KzEvLh4Cwb0x"
                        />
                    </div>
                </motion.div>

                {/* Growth / SMM (Small) */}
                <motion.div
                    whileHover={{ y: -4 }}
                    whileInView={{
                        y: typeof window !== 'undefined' && window.innerWidth < 768 ? -10 : 0,
                        borderColor: typeof window !== 'undefined' && window.innerWidth < 768 ? '#135bec' : 'transparent'
                    }}
                    viewport={{ margin: "-40% 0px -40% 0px" }}
                    className="md:col-span-3 glass-card rounded-xl p-8 flex flex-col justify-between relative group border transition-all duration-500"
                >
                    <div className="z-10 relative">
                        <span className="material-symbols-outlined text-4xl text-primary mb-4 block">insights</span>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">SMM & Growth</h3>
                        <p className="text-subtext dark:text-gray-600 text-sm leading-relaxed">
                            Content strategy, social presence, and conversion — for teams that want results, not just impressions.                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
