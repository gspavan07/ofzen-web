import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InternshipDetailModal from "./careers/InternshipDetailModal";
import ApplicationFormModal from "./careers/ApplicationFormModal";
import SuccessModal from "./careers/SuccessModal";
import { trackEvent } from "../utils/analytics";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const perks = [
  {
    icon: "school",
    title: "Hands-On Mentorship",
    desc: "Work directly with senior engineers and designers — not just ticket queues.",
  },
  {
    icon: "rocket_launch",
    title: "Real Projects",
    desc: "Your work ships to production and goes into actual client products.",
  },
  {
    icon: "workspace_premium",
    title: "Certificate of Completion",
    desc: "Every intern receives an official certificate recognizing their successful completion and contributions.",
  },
  {
    icon: "devices",
    title: "Flexible Work Options",
    desc: "Work your way—remote, hybrid, or on-site. We support flexible, async-friendly workflows to suit your style.",
  },
];

const internshipPhases = [
  {
    phase: "Phase 01",
    title: "Guided Learning & Mastery",
    duration: "Weeks 1–4",
    icon: "school",
    desc: "Focus on mastering core technologies and internal workflows. Your mentor will provide curated topics and hands-on guidance to prepare you for production-level work.",
    color: "from-blue-600/20 to-blue-400/5",
    iconColor: "text-blue-600",
  },
  {
    phase: "Phase 02",
    title: "Applied Product Development",
    duration: "Month 2 onwards",
    icon: "terminal",
    desc: "Transition to real-world client projects. Collaborate with our core team to develop, test, and ship production-ready features that impact real users.",
    color: "from-indigo-600/20 to-indigo-400/5",
    iconColor: "text-indigo-600",
  },
];

const domainColors = {
  "Full Stack": "text-blue-600 bg-blue-50 border-blue-100",
  Engineering: "text-blue-600 bg-blue-50 border-blue-100",
  Design: "text-purple-600 bg-purple-50 border-purple-100",
  "UI/UX": "text-purple-600 bg-purple-50 border-purple-100",
  Growth: "text-emerald-600 bg-emerald-50 border-emerald-100",
  Marketing: "text-emerald-600 bg-emerald-50 border-emerald-100",
  Backend: "text-orange-600 bg-orange-50 border-orange-100",
  Frontend: "text-cyan-600 bg-cyan-50 border-cyan-100",
  Data: "text-pink-600 bg-pink-50 border-pink-100",
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

// --- Skeleton Card ---
const SkeletonCard = ({ index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="glass-card rounded-3xl p-8 flex flex-col gap-5 border border-black/5"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-3 flex-1">
        <div className="h-5 w-20 rounded-full bg-black/8 animate-pulse" />
        <div className="h-6 w-3/4 rounded-lg bg-black/8 animate-pulse" />
      </div>
      <div className="size-12 rounded-2xl bg-black/8 animate-pulse shrink-0" />
    </div>
    <div className="flex gap-6">
      <div className="h-4 w-24 rounded-full bg-black/8 animate-pulse" />
      <div className="h-4 w-28 rounded-full bg-black/8 animate-pulse" />
    </div>
    <div className="flex flex-col gap-2">
      <div className="h-3 w-full rounded bg-black/8 animate-pulse" />
      <div className="h-3 w-5/6 rounded bg-black/8 animate-pulse" />
    </div>
    <div className="flex gap-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-6 w-16 rounded-full bg-black/8 animate-pulse"
        />
      ))}
    </div>
    <div className="h-12 w-full rounded-2xl bg-black/8 animate-pulse mt-2" />
  </motion.div>
);

// --- Position Card ---
const PositionCard = ({ position, index, onViewDetails }) => {
  const colorClass =
    domainColors[position.domain] ??
    "text-primary bg-primary/5 border-primary/10";
  const icon = domainIcons[position.domain] ?? "work";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, borderColor: "#135bec" }}
      className="glass-card rounded-3xl p-8 flex flex-col gap-6 border border-transparent transition-all duration-500 group relative overflow-hidden"
    >
      {/* Glow on hover */}
      <div className="absolute -right-10 -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${colorClass}`}
            >
              {position.domain}
            </span>
            {position.openings > 0 && (
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border text-emerald-600 bg-emerald-50 border-emerald-100">
                {position.openings} Openings
              </span>
            )}
          </div>
          <h3 className="text-xl font-black text-heading leading-tight">
            {position.title}
          </h3>
        </div>
        <div className="flex items-center justify-center size-12 rounded-2xl bg-primary/5 border border-primary/10 shrink-0">
          <span className="material-symbols-outlined text-primary text-xl">
            {icon}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-subtext relative z-10 flex-wrap">
        {position.durationWeeks && (
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-primary">
              schedule
            </span>
            {position.durationWeeks} Weeks
          </div>
        )}
        {position.certificate && (
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-primary">
              workspace_premium
            </span>
            {position.certificate}
          </div>
        )}
        {position.fee !== undefined && position.fee !== null && (
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-primary">
              payments
            </span>
            ₹{position.fee.toLocaleString("en-IN")}
          </div>
        )}
      </div>

      {/* Description */}
      {position.description && (
        <p className="text-sm text-subtext leading-relaxed relative z-10 line-clamp-2">
          {position.description}
        </p>
      )}

      {/* Tech Stack */}
      {position.techStack && position.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 relative z-10">
          {position.techStack.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/5 text-heading/60 border border-black/5"
            >
              {skill}
            </span>
          ))}
          {position.techStack.length > 4 && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/5 text-heading/60 border border-black/5">
              +{position.techStack.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="relative z-10 pt-2 border-t border-black/5">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onViewDetails(position)}
          className="w-full bg-primary text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-primary/20 transition-all text-sm tracking-widest uppercase cursor-pointer"
        >
          View Details & Apply
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

// --- Main Careers Component ---
const Careers = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // Modal state
  const [detailInternship, setDetailInternship] = useState(null); // opens detail modal
  const [formInternship, setFormInternship] = useState(null); // opens form modal
  const [showSuccess, setShowSuccess] = useState(false);
  const [successInternship, setSuccessInternship] = useState(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true);
        setFetchError(null);
        const res = await fetch(`${API_BASE_URL}/api/public/internships`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        const active = (data.internships ?? []).filter(
          (i) => i.status === "active",
        );
        setInternships(active);
      } catch (err) {
        console.error("Failed to fetch internships:", err);
        setFetchError("Unable to load positions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  const handleViewDetails = (internship) => {
    setDetailInternship(internship);
    trackEvent("Careers", "View Details", internship.title);
  };

  const handleProceedToApply = () => {
    trackEvent("Careers", "Initiate Application", detailInternship?.title);
    setFormInternship(detailInternship);
    setDetailInternship(null);
  };

  const handlePaymentSuccess = () => {
    trackEvent("Careers", "Application Successful", formInternship?.title);
    setSuccessInternship(formInternship);
    setFormInternship(null);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setSuccessInternship(null);
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* ── Modals ── */}
      <AnimatePresence>
        {detailInternship && (
          <InternshipDetailModal
            key="detail"
            internship={detailInternship}
            onClose={() => setDetailInternship(null)}
            onApply={handleProceedToApply}
          />
        )}
        {formInternship && (
          <ApplicationFormModal
            key="form"
            internship={formInternship}
            onClose={() => setFormInternship(null)}
            onSuccess={handlePaymentSuccess}
          />
        )}
        {showSuccess && (
          <SuccessModal
            key="success"
            internship={successInternship}
            onClose={handleCloseSuccess}
          />
        )}
      </AnimatePresence>

      {/* ── Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-36 pb-20 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          <p className="text-primary text-xs font-black tracking-[0.3em] uppercase">
            Careers at Ofzen
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-[-0.04em] text-heading">
            Build the Future{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-cyan-500">
              With Us
            </span>
          </h1>
          <p className="text-base md:text-xl text-subtext font-normal leading-relaxed max-w-2xl">
            We're a small, high-output team that ships real products. Join us as
            an intern or collaborator and work on things that actually go live.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#positions"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("positions")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 rounded-xl h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-2xl hover:shadow-primary/20 cursor-pointer"
            >
              View Open Positions
              <span className="material-symbols-outlined text-xl">south</span>
            </a>
            <a
              href="mailto:careers@ofzen.in"
              className="flex items-center gap-2 rounded-xl h-14 px-8 bg-white/50 border border-black/5 text-heading text-base font-bold transition-all hover:bg-white/80 hover:border-primary backdrop-blur-sm cursor-pointer"
            >
              Email Us Directly
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 mt-16 flex items-center gap-10 pt-8 border-t border-black/5"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-primary">
              {loading ? "—" : `${internships.length}+`}
            </span>
            <span className="text-[10px] font-black text-subtext uppercase tracking-[0.2em]">
              Open Roles
            </span>
          </div>
          <div className="h-8 w-px bg-black/5" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-primary">100%</span>
            <span className="text-[10px] font-black text-subtext uppercase tracking-[0.2em]">
              Remote
            </span>
          </div>
          <div className="h-8 w-px bg-black/5" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-primary">Real</span>
            <span className="text-[10px] font-black text-subtext uppercase tracking-[0.2em]">
              Projects
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── Perks Section ── */}
      <section className="max-w-[1280px] mx-auto w-full px-6 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary text-xs font-black tracking-[0.3em] uppercase mb-4">
            Why Ofzen
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl text-heading">
            What You Get Working With Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, borderColor: "#135bec" }}
              className="p-8 rounded-3xl border border-black/5 bg-white/20 backdrop-blur-sm flex flex-col gap-4 transition-all duration-500"
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                {perk.icon}
              </span>
              <h3 className="text-lg font-bold text-heading">{perk.title}</h3>
              <p className="text-sm text-subtext leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Work Process Section ── */}
      <section className="max-w-[1280px] mx-auto w-full px-6 py-16 bg-black/2 rounded-[3rem] my-8">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-primary text-xs font-black tracking-[0.3em] uppercase mb-4">
            The Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-heading">
            Our Internship Roadmap
          </h2>
          <p className="text-base text-subtext mt-4 max-w-lg">
            We've structured our internship to transform you from a learner to a
            professional developer through two distinct phases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-px bg-black/10 z-0" />

          {internshipPhases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              className="relative group"
            >
              <div
                className={`h-full p-10 rounded-[2.5rem] border border-black/5 bg-linear-to-br ${phase.color} backdrop-blur-xl flex flex-col gap-6 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-white text-heading border border-black/5 shadow-sm">
                    {phase.phase}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 bg-primary/5 px-3 py-1 rounded-lg">
                    {phase.duration}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`size-14 rounded-2xl bg-white shadow-sm flex items-center justify-center ${phase.iconColor}`}
                    >
                      <span className="material-symbols-outlined text-3xl">
                        {phase.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-heading">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-base text-subtext leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <div className="flex-1 h-1 rounded-full bg-black/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.3 }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <span className="text-[10px] font-black text-primary/40 uppercase">
                    {i === 0 ? "50%" : "Complete"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section
        id="positions"
        className="max-w-[1280px] mx-auto w-full px-6 py-16 pb-32"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary text-xs font-black tracking-[0.3em] uppercase mb-4">
            Current Openings
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-heading">
            Open Positions
          </h2>
          <p className="text-base text-subtext mt-4 max-w-lg">
            All roles are remote. Click any role to view full details and apply
            online.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1].map((i) => (
              <SkeletonCard key={i} index={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && fetchError && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <span className="material-symbols-outlined text-5xl text-red-400">
              wifi_off
            </span>
            <p className="text-subtext font-medium">{fetchError}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-primary font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:underline"
            >
              Retry
              <span className="material-symbols-outlined text-base">
                refresh
              </span>
            </button>
          </motion.div>
        )}

        {/* Grid */}
        {!loading && !fetchError && internships.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <PositionCard
                key={internship._id}
                position={internship}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && !fetchError && internships.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <span className="material-symbols-outlined text-5xl text-subtext/30">
              inbox
            </span>
            <p className="text-subtext font-medium">
              No open positions right now. Check back soon.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 flex flex-col items-center text-center gap-4"
        >
          <p className="text-sm text-subtext max-w-md">
            Don't see a role that fits? We're always open to hearing from
            talented people.
          </p>
          <a
            href="mailto:careers@ofzen.in?subject=General%20Application%20–%20Ofzen"
            className="text-primary font-black text-sm uppercase tracking-widest flex items-center gap-2 transition-all"
          >
            <span className="hover:underline">Send a General Application</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;
