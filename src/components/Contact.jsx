import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: "Alex Rivers",
        role: "Visionary at X-Labs",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7UuJiVMVyAa7JQOiiKnz87DXgbw1ZBbwG7cTvR76oUUYERDcmoBfJZT0obcrbXvZQBqwny2knGJcXWNIFjaAiylyDmf36vSDSv5WpVYo6ynVNUBSCFJbNMX2CQaxOnqNvcywLHZY_3jj2GvRZad65H8ybEHkvXhT3XWi9ixkWTiMq302rvRHmU1eDK7qANubsHS5zfaqhdYDcDD09MZnTDaoxPQXmQeejEo2s39PHhmGyUZWokpozAIdlkZw14zbwQ0rimdJsU3OY",
        quote: "Ofzen's vision for 2026 is unparalleled. The glassmorphic interface is stunning and sets a new standard for luxury tech.",
        verified: true
    },
    {
        name: "Sarah Chen",
        role: "CTO at Lumina",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiNXIHn86Hx1a2HW6f-MRbZ1y17-pEFXs0_DN6GZUu-Gjs1CvNC4zBGtzjo5gA0PdevMUrCe8XKJzkbMRsJJXbvWxw8uzdYmgdoQ4E5Rta0qXhIzm44uyk2D6nKXQZaIJDRQQtVmpPg07ebi8Y0cIiXDEuFCUkTwcdCa7f97aku-QqlY6E2C-inbjIAmFrShGbLWhwP9XJjhRrITSEeijHMO41g47FhlBqpvvQOAwElGcNp4ruHhOG_wt8vbsuMbB75-tNdmvSRmuo",
        quote: "The most futuristic agency we've partnered with. Highly recommended for those seeking a cutting-edge presence.",
        verified: true,
        offset: true
    },
    {
        name: "Marcus Thorne",
        role: "Founder of Aether",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY_neTyWJoPYWw2xUG-s8EAsSeqDeyRjxBIAivvtEIjySAR7WuxwGDyIZt3jthSFlMc7Z3eh5IQ-5hsaWZ9mYxFUjwo9Lb_Fe1-nJpFnN8P76S0limVVJVwDI4QKYWyMaLHUriCN5EO5InJteQig5dqC5BZw9EcIBSFH_z19omwEtKyH7UspJ7xgnCS1tYUEyLwpJNkiZUcfIoAeMTeM4brXv9VBzeG4BkHdtBLsV_AvzAjHqeZcXAjVreqP33wuHK2z98nX-IDQIc",
        quote: "Engineering excellence meets pearlescent design. Every pixel is intentional. A true masterpiece of modern UI.",
        verified: true
    }
];

const faqs = [
    {
        question: "What is the Silicon Valley 2026 tech stack?",
        answer: "We leverage a cutting-edge stack including decentralized AI nodes, spatial computing interfaces (WebXR), and real-time iridescent rendering engines for immersive web experiences."
    },
    {
        question: "How do partnership models work?",
        answer: "Our models range from project-based sprints to full-scale technological integration partnerships where we act as your fractional innovation department."
    },
    {
        question: "What is the typical project timeline?",
        answer: "Strategic visions are delivered in 4-6 weeks, while complex spatial platforms typically launch within 3-5 months from initial discovery."
    },
    {
        question: "How does Ofzen handle data security?",
        answer: "Security is engineered at the protocol level. We use zero-knowledge proofs and decentralized storage to ensure client data remains private and uncompromised."
    }
];

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass-card rounded-2xl overflow-hidden mb-4 border-none transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-6 p-6 hover:bg-white/30 dark:hover:bg-white/5 transition-colors text-left"
            >
                <p className="text-base font-bold text-heading ">{faq.question}</p>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="material-symbols-outlined text-primary"
                >
                    expand_more
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6">
                            <p className="text-sm font-medium leading-relaxed text-subtext dark:text-gray-400">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Contact = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Testimonials */}
            <div className="max-w-[1200px] mx-auto px-4 lg:px-40 py-24">
                <h2 className="text-4xl md:text-[56px] font-black tracking-tighter text-center mb-20 text-heading">
                    The Future, Delivered
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`glass-card p-8 rounded-[2rem] flex flex-col gap-6 shadow-xl relative ${t.offset ? 'md:mt-12' : ''}`}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-primary/20 shadow-inner"
                                    style={{ backgroundImage: `url(${t.image})` }}
                                />
                                <div>
                                    <p className="text-lg font-black text-heading  leading-tight">{t.name}</p>
                                    <p className="text-[10px] text-primary font-black uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-subtext dark:text-gray-500 italic font-medium">
                                "{t.quote}"
                            </p>
                            {t.verified && (
                                <div className="flex items-center gap-2 text-primary pt-2">
                                    <span className="material-symbols-outlined text-sm font-bold">verified</span>
                                    <span className="text-[10px] font-black uppercase tracking-wider">Verified Partner</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/5 dark:bg-black/5 py-32">
                <div className="max-w-[800px] mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-16 text-heading">
                        Clarifying the Vision
                    </h2>
                    <div className="flex flex-col">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} faq={faq} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div id="contact" className="max-w-[1200px] mx-auto px-4 lg:px-40 py-32 relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 relative z-10">
                    <div className="flex-1">
                        <h2 className="text-[64px] md:text-[84px] font-black leading-[0.9] tracking-tighter mb-8 text-heading ">
                            Ready to <br />
                            <span className="text-primary italic font-serif">Leap?</span>
                        </h2>
                        <p className="text-xl text-subtext dark:text-gray-500 mb-12 max-w-sm font-medium">
                            Build smarter. Launch faster.
                            Start your journey with OfZen.
                        </p>
                        <div className="flex gap-8 text-xs font-black uppercase tracking-[0.3em] text-primary/60">
                            <a className="hover:text-primary transition-colors cursor-pointer" href="https://www.linkedin.com/company/ofzen/">LinkedIn</a>
                            <a className="hover:text-primary transition-colors cursor-pointer" href="#">X</a>
                            <a className="hover:text-primary transition-colors cursor-pointer" href="https://www.instagram.com/ofzen.dev?igsh=MW5lY2kyZGE1amNxYg==">Instagram</a>
                        </div>
                    </div>

                    <div className="w-full lg:w-[480px] glass-card p-10 lg:p-14 rounded-[3rem] shadow-2xl bg-white/40 dark:bg-background-dark/60 backdrop-blur-3xl border border-white/20">
                        <h3 className="text-2xl font-black mb-10 text-heading tracking-tight">Say Hello</h3>
                        <form className="flex flex-col gap-8">
                            <div className="relative group">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-2 block">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b-2 border-primary/10 focus:border-primary outline-none py-3 text-base text-heading dark:text-black placeholder:text-subtext/30 transition-all font-bold"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="relative group">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-2 block">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b-2 border-primary/10 focus:border-primary outline-none py-3 text-base text-heading dark:text-black placeholder:text-subtext/30 transition-all font-bold"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div className="relative group">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-2 block">Message</label>
                                <textarea
                                    rows="3"
                                    className="w-full bg-transparent border-b-2 border-primary/10 focus:border-primary outline-none py-3 text-base text-heading dark:text-black placeholder:text-subtext/30 transition-all font-bold resize-none"
                                    placeholder="Tell us about your vision..."
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary text-white font-black py-5 rounded-2xl mt-4 flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-primary/30 transition-all text-sm tracking-widest uppercase"
                            >
                                Send Inquiry
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Background Decorative Gradient */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

                {/* Scroll to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="absolute bottom-10 right-10 z-[60] size-14 rounded-full glass-nav flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl group active:scale-95 cursor-pointer"
                >
                    <span className="material-symbols-outlined text-3xl transition-transform group-hover:-translate-y-1">north</span>
                </button>
            </div>
        </section>
    );
};

export default Contact;
