import React from "react";
import { motion } from "framer-motion";
import Terminal from "../components/Terminal";
import ScrollingLogos from "../components/ScrollingLogos";
import { Compass, Cpu, Atom } from "lucide-react";

// Import partner logos
import Adityalogo from "../assets/Adityalogo.png";
import Dreamslogo from "../assets/Dreamslogo.png";
import koyya_logo from "../assets/koyya_logo.png";
import logo from "../assets/logo.png";
import rajalogo from "../assets/rajalogo.png";

const Home = () => {
  return (
    <section id="home" className="relative flex flex-col w-full">
      <main className="flex-1 flex flex-col min-h-screen items-center justify-center px-4 pt-32 pb-20 relative z-10 w-full">
        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative mx-auto mb-16">
          <motion.div
            initial={{
              opacity: 0,
              x:
                typeof window !== "undefined" && window.innerWidth < 768
                  ? 0
                  : -50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 text-left z-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[6rem] font-black leading-[1.05] tracking-[-0.03em] text-heading font-display">
              We Design & <br />
              Build <span className="text-primary">Digital</span> <br />
              <span className="text-primary">Products</span> That <br />
              Work
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex min-w-[170px] items-center justify-center rounded-full h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                Partner with Us
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 text-heading text-base font-bold transition-all hover:text-primary cursor-pointer"
              >
                View Our Work <span className="text-lg">→</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center z-20"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[120px] scale-75"></div>
            <div className="relative z-10 w-full max-w-[550px] group flex items-center justify-center">
              <div className="absolute -inset-4 bg-linear-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

              <Terminal />

              {/* <div className="absolute -top-5 -right-5 md:-top-10 md:-right-10 glass-nav p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="bg-teal-400 size-2 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-heading">
                  Node Connected
                </span>
              </div>
              <div className="absolute -bottom-8 -left-5 md:-bottom-8 md:-left-10 glass-nav p-5 rounded-2xl shadow-xl max-w-[150px] md:max-w-[200px]">
                <p className="text-[10px] uppercase font-bold text-primary mb-2">
                  Technical Specs
                </p>
                <p className="text-xs font-medium leading-tight text-heading">
                  Architecture built for ultra-low latency data sync.
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Divider line & Partner Logos */}
        <div className="max-w-[1400px] w-full mt-8 pt-10 border-t border-black/10 dark:border-white/10 relative z-20">
          <p className="text-[11px] font-bold text-center text-subtext/60 dark:text-gray-400 tracking-[0.25em] uppercase mb-4">
            Trusted by Forward-Thinking Companies
          </p>
          <ScrollingLogos
            logos={[
              { src: Adityalogo, alt: "Aditya Logo" },
              { src: Dreamslogo, alt: "Dreams Logo" },
              { src: koyya_logo, alt: "Koyya Logo" },
              { src: logo, alt: "Logo" },
              { src: rajalogo, alt: "Raja Logo" },
            ]}
          />
        </div>
      </main>

      <div className="relative z-20 max-w-[960px] mx-auto w-full px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Strategic Design */}
          <motion.div
            whileHover={{ y: -6, borderColor: "#135bec" }}
            whileInView={{
              y: typeof window !== "undefined" && window.innerWidth < 768 ? -8 : 0,
              borderColor: typeof window !== "undefined" && window.innerWidth < 768 ? "#135bec" : "transparent",
            }}
            viewport={{ margin: "-20% 0px -20% 0px", once: true }}
            className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/2 backdrop-blur-sm flex flex-col gap-4 group transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="z-10 relative flex flex-col gap-4">
              <Compass className="text-primary w-9 h-9 transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.5} />
              <h3 className="text-lg font-black text-heading">Strategic Design</h3>
              <p className="text-sm text-subtext dark:text-gray-700 leading-relaxed">
                Interfaces designed around how users actually think — clean, fast, and purposeful.
              </p>
            </div>
          </motion.div>

          {/* Advanced Engineering */}
          <motion.div
            whileHover={{ y: -6, borderColor: "#135bec" }}
            whileInView={{
              y: typeof window !== "undefined" && window.innerWidth < 768 ? -8 : 0,
              borderColor: typeof window !== "undefined" && window.innerWidth < 768 ? "#135bec" : "transparent",
            }}
            viewport={{ margin: "-20% 0px -20% 0px", once: true }}
            className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/2 backdrop-blur-sm flex flex-col gap-4 group transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="z-10 relative flex flex-col gap-4">
              <Cpu className="text-primary w-9 h-9 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="text-lg font-black text-heading">Advanced Engineering</h3>
              <p className="text-sm text-subtext dark:text-gray-700 leading-relaxed">
                Backend and frontend systems built to handle real load without breaking.
              </p>
            </div>
          </motion.div>

          {/* Innovation Lab */}
          <motion.div
            whileHover={{ y: -6, borderColor: "#135bec" }}
            whileInView={{
              y: typeof window !== "undefined" && window.innerWidth < 768 ? -8 : 0,
              borderColor: typeof window !== "undefined" && window.innerWidth < 768 ? "#135bec" : "transparent",
            }}
            viewport={{ margin: "-20% 0px -20% 0px", once: true }}
            className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/2 backdrop-blur-sm flex flex-col gap-4 group transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="z-10 relative flex flex-col gap-4">
              <Atom className="text-primary w-9 h-9 transition-transform duration-500 group-hover:rotate-180" style={{ transitionDuration: '1s' }} strokeWidth={1.5} />
              <h3 className="text-lg font-black text-heading">Innovation Lab</h3>
              <p className="text-sm text-subtext dark:text-gray-700 leading-relaxed">
                Exploring what's next — AI tools, automation, and smarter product workflows.
              </p>
            </div>
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
