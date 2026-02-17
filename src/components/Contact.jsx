import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sivajiImg from '../assets/sivaji.jpg';
import ramasriImg from '../assets/ramasri.jpg';
import krishna2Img from '../assets/krishna_img.png';

const testimonials = [
    {
        name: "sivaji kumar polisetti",
        role: "CEO of NRI Connects",
        image: sivajiImg,
        quote: "Ofzen took our brief and turned it into something we genuinely didn't expect. The process was smooth, the communication was clear, and the final product exceeded what we asked for.",
        verified: true
    },
    {
        name: "Dr. Rama Sri",
        role: "Pro Vice Chancellor at Aditya University",
        image: ramasriImg,
        quote: "Professional, responsive, and technically solid. They understood our institutional requirements and delivered a product that our staff and students actually find easy to use.",
        verified: true,
        offset: true
    },
    {
        name: "Krishna Mohan Koyya",
        role: "Director of Koyya Enterprises",
        image: krishna2Img,
        quote: "Good team to work with. They kept us informed throughout and delivered on time. The end result has noticeably improved how we present our business online.",
        verified: true
    }

];

const faqs = [
    {
        question: "What technologies do you work with?",
        answer: "We work with a modern tech stack, including React, Next.js, JavaScript, Tailwind CSS, and various cloud and AI services. We choose the right tools for your specific project needs."
    },
    {
        question: "How do partnership models work?",
        answer: "We work on fixed-scope projects, monthly retainers, or long-term embedded partnerships depending on what your team needs. We'll recommend the right model after an initial call."
    },
    {
        question: "What is the typical project timeline?",
        answer: "A standard web or app project runs 6–12 weeks depending on scope. Smaller design or branding work can wrap in 2–4 weeks. We'll give you a clear timeline after the discovery call."
    },
    {
        question: "How does Ofzen handle data security?",
        answer: "We follow standard security practices — encrypted communications, secure credential handling, NDA-protected workflows, and access controls for all client assets."
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
                    What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`glass-card p-8 rounded-[2rem] flex flex-col gap-6 shadow-xl relative ${t.offset ? 'md:mt-12' : ''}`}
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-16 h-16 rounded-full object-cover aspect-square border-2 border-primary/30 shadow-md flex-shrink-0"
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
                            Got a Project <br />
                            <span className="text-primary italic font-serif">in mind?</span>
                        </h2>
                        <p className="text-xl text-subtext dark:text-gray-500 mb-12 max-w-sm font-medium">
                            Tell us what you're building. We'll get back to you within 24 hours.
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
                                    placeholder="Describe your project or idea — even rough notes are fine."
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
