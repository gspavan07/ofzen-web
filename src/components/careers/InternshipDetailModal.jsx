import React, { useEffect } from "react";
import { motion } from "framer-motion";

const domainColors = {
  "Full Stack": "text-blue-400 bg-blue-900/30 border-blue-500/30",
  Engineering: "text-blue-400 bg-blue-900/30 border-blue-500/30",
  Design: "text-purple-400 bg-purple-900/30 border-purple-500/30",
  "UI/UX": "text-purple-400 bg-purple-900/30 border-purple-500/30",
  Growth: "text-emerald-400 bg-emerald-900/30 border-emerald-500/30",
  Marketing: "text-emerald-400 bg-emerald-900/30 border-emerald-500/30",
  Backend: "text-orange-400 bg-orange-900/30 border-orange-500/30",
  Frontend: "text-cyan-400 bg-cyan-900/30 border-cyan-500/30",
  Data: "text-pink-400 bg-pink-900/30 border-pink-500/30",
};

const domainIcons = {
  "Full Stack": "hub",
  Engineering: "hub",
  Design: "palette",
  "UI/UX": "palette",
  Growth: "trending_up",
  Marketing: "campaign",
  Backend: "dns",
  Frontend: "web",
  Data: "bar_chart",
};

const InternshipDetailModal = ({ internship, onClose, onApply }) => {
  const colorClass =
    domainColors[internship.domain] ??
    "text-primary bg-primary/10 border-primary/20";
  const icon = domainIcons[internship.domain] ?? "work";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const highlights = [
    internship.durationWeeks && {
      icon: "schedule",
      label: "Duration",
      value: `${internship.durationWeeks} Weeks`,
    },
    internship.certificate && {
      icon: "workspace_premium",
      label: "Certificate",
      value: internship.certificate,
    },
    internship.openings && {
      icon: "group",
      label: "Openings",
      value: `${internship.openings} Seats`,
    },
    internship.fee !== undefined && {
      icon: "payments",
      label: "Program Fee",
      value: `₹${internship.fee.toLocaleString("en-IN")}`,
    },
  ].filter(Boolean);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 28 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-2xl w-full max-h-[92vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col z-100"
        style={{
          background: "linear-gradient(160deg, #0d1117 0%, #111827 100%)",
        }}
      >
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Glow blob */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 size-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all"
        >
          <span className="material-symbols-outlined text-white/70 text-lg">
            close
          </span>
        </button>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex flex-col">
          {/* Header */}
          <div className="relative z-10 p-8 pb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="size-14 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-2xl">
                  {icon}
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <span
                  className={`self-start text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${colorClass}`}
                >
                  {internship.domain}
                </span>
                <h2 className="text-2xl font-black text-white leading-tight">
                  {internship.title}
                </h2>
              </div>
            </div>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-col gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/8"
                >
                  <span className="material-symbols-outlined text-primary text-base">
                    {h.icon}
                  </span>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    {h.label}
                  </p>
                  <p className="text-sm font-black text-white">{h.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-8 border-t border-white/6" />

          {/* Body */}
          <div className="relative z-10 p-8 pt-6 flex flex-col gap-6">
            {/* Description */}
            {internship.description && (
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                  About the Role
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {internship.description}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            {internship.techStack && internship.techStack.length > 0 && (
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {internship.techStack.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* What you get */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                What You Get
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Industry-recognized certificate",
                  "Letter of Recommendation",
                  "Hands-on real project experience",
                  "Mentorship from senior engineers",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-400 text-base">
                      check_circle
                    </span>
                    <p className="text-sm text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fee callout */}
            {internship.fee !== undefined && (
              <div className="flex items-center justify-between p-4 rounded-2xl bg-primary/10 border border-primary/20">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/70 mb-0.5">
                    One-Time Program Fee
                  </p>
                  <p className="text-2xl font-black text-white">
                    ₹{internship.fee.toLocaleString("en-IN")}
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary text-3xl">
                  payments
                </span>
              </div>
            )}

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onApply}
              className="w-full bg-primary text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-primary/30 transition-all text-sm tracking-widest uppercase cursor-pointer"
            >
              Apply for this Internship
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </motion.button>

            <p className="text-center text-[11px] text-white/30">
              Secure payment powered by Razorpay • UPI, Cards, Net Banking
              accepted
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InternshipDetailModal;
