import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    title: "Web Development",
    icon: "language",
    description: "Fast, accessible, and maintainable web apps — built to scale as your business does.",
    colSpan: "md:col-span-7",
    tags: ["React & Next.js", "Tailwind CSS", "REST/GraphQL", "Serverless"],
    glow: "from-blue-500/10 to-cyan-500/5",
  },
  {
    title: "App Development",
    icon: "smartphone",
    description: "iOS and Android apps that feel native, perform well, and don't need constant fixing.",
    colSpan: "md:col-span-5",
    tags: ["iOS & Android", "React Native", "Native Performance", "App Store"],
    glow: "from-indigo-500/10 to-purple-500/5",
  },
  {
    title: "Custom Software",
    icon: "terminal",
    description: "Internal tools, platforms, and workflows built around how your team actually operates.",
    colSpan: "md:col-span-4",
    tags: ["Internal Tools", "Databases", "Automation", "Workflows"],
    glow: "from-emerald-500/10 to-teal-500/5",
  },
  {
    title: "Design (UI/UX)",
    icon: "potted_plant",
    description: "Clean, functional interfaces that reduce friction and keep users coming back.",
    colSpan: "md:col-span-4",
    tags: ["Figma Library", "High-Fidelity", "Design Systems", "Prototypes"],
    glow: "from-pink-500/10 to-rose-500/5",
  },
  {
    title: "SMM & Growth",
    icon: "insights",
    description: "Content strategy, social presence, and conversion — for teams wanting real results.",
    colSpan: "md:col-span-4",
    tags: ["SEO Analytics", "Content Strategy", "Funnel Audit", "Conversion"],
    glow: "from-amber-500/10 to-orange-500/5",
  },
];

const Services = () => {
  return (
    <section id="services" className="max-w-[1280px] mx-auto w-full px-6 py-12 md:py-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Expertise</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl text-heading">
          Engineering the Future of Digital Platforms
        </h2>
      </div>

      {/* Bento Grid Services */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[280px]">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, borderColor: '#135bec' }}
            whileInView={{
              y: typeof window !== 'undefined' && window.innerWidth < 768 ? -8 : 0,
              borderColor: typeof window !== 'undefined' && window.innerWidth < 768 ? '#135bec' : 'transparent'
            }}
            viewport={{ margin: "-20% 0px -20% 0px", once: true }}
            className={`${service.colSpan} glass-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group border transition-all duration-500 cursor-pointer`}
          >
            {/* Ambient hover glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            {/* Top row: Icon & Diagonal Arrow */}
            <div className="flex justify-between items-start z-10 relative">
              <span className="material-symbols-outlined text-4xl text-primary transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </span>
              <span className="material-symbols-outlined text-xl text-subtext/40 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                arrow_outward
              </span>
            </div>

            {/* Center Content */}
            <div className="z-10 relative mt-4">
              <h3 className="text-xl md:text-2xl font-black mb-2 text-heading">
                {service.title}
              </h3>
              <p className="text-subtext dark:text-gray-700 text-xs md:text-sm leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>

            {/* Bottom Tech/Domain Tags */}
            <div className="flex flex-wrap gap-2 z-10 relative mt-4 pt-3 border-t border-black/5 dark:border-white/5">
              {service.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 text-subtext dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
