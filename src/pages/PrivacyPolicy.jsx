import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Section = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay }}
    className="mb-12"
  >
    <h2 className="text-xl font-bold text-heading mb-4 flex items-center gap-3">
      <span className="inline-block w-1.5 h-6 rounded-full bg-primary" />
      {title}
    </h2>
    <div className="text-heading/70 leading-relaxed space-y-3 text-[15px]">
      {children}
    </div>
  </motion.div>
);

const PrivacyPolicy = () => {
  const effectiveDate = "June 1, 2026";
  const companyEmail = "support@ofzen.in";
  const companyName = "Ofzen Technologies";
  const website = "https://ofzen.in";

  return (
    <div className="relative w-full overflow-x-hidden pearlescent-bg min-h-screen">
      {/* Background Watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden w-screen h-screen">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[20vw] md:text-[25vw] font-black text-black/10 leading-none tracking-tighter uppercase select-none"
        >
          Ofzen
        </motion.span>
      </div>

      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10"
      >
        {/* Hero */}
        <section className="pt-36 pb-16 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Legal Document
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-heading tracking-tight leading-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-heading/60 text-base md:text-lg max-w-2xl leading-relaxed">
                At {companyName}, your privacy is not an afterthought — it's a
                foundation. This policy explains how we collect, use, and
                protect your information when you visit{" "}
                <a
                  href={website}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ofzen.in
                </a>
                .
              </p>
              <p className="text-heading/40 text-sm mt-4">
                Effective Date:{" "}
                <span className="font-semibold text-heading/60">
                  {effectiveDate}
                </span>
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="h-px bg-linear-to-r from-primary/30 via-primary/10 to-transparent mt-10 mb-14 origin-left"
            />
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            {/* Card */}
            <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/50 shadow-xl shadow-black/5">
              {/* Quick Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12"
              >
                <p className="text-sm font-semibold text-primary mb-1">
                  TL;DR — Quick Summary
                </p>
                <p className="text-heading/70 text-sm leading-relaxed">
                  We collect only what's necessary to run our website and
                  respond to your enquiries. We do not sell your data. We use
                  cookies for analytics. You can contact us anytime to request
                  data deletion.
                </p>
              </motion.div>

              <Section title="1. Who We Are" delay={0.05}>
                <p>
                  {companyName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                  &ldquo;our&rdquo;) is a digital engineering and product studio
                  based in India. We design and build web apps, mobile
                  applications, and custom software for startups and
                  enterprises.
                </p>
                <p>
                  Our website is{" "}
                  <a
                    href={website}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {website}
                  </a>
                  . For any privacy-related concerns, please contact us at{" "}
                  <a
                    href={`mailto:${companyEmail}`}
                    className="text-primary hover:underline"
                  >
                    {companyEmail}
                  </a>
                  .
                </p>
              </Section>

              <Section title="2. Information We Collect" delay={0.1}>
                <p>
                  We may collect the following types of information when you use
                  our website or contact us:
                </p>
                <ul className="list-none space-y-2 mt-3">
                  {[
                    {
                      label: "Contact Information",
                      desc: "Name, email address, phone number, and company name when you fill out our contact form.",
                    },
                    {
                      label: "Usage Data",
                      desc: "Pages visited, time spent on the site, browser type, device type, and referring URLs — collected automatically via analytics tools.",
                    },
                    {
                      label: "Cookies & Tracking",
                      desc: "We use cookies to remember your preferences and improve your browsing experience.",
                    },
                    {
                      label: "Communications",
                      desc: "Any messages, attachments, or information you send us via email or the contact form.",
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      <span>
                        <span className="font-semibold text-heading">
                          {item.label}:
                        </span>{" "}
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="3. How We Use Your Information" delay={0.12}>
                <p>We use the information we collect to:</p>
                <ul className="list-none space-y-2 mt-3">
                  {[
                    "Respond to your enquiries and project requests",
                    "Improve our website's content and performance",
                    "Understand how visitors interact with our site (analytics)",
                    "Send updates or newsletters if you've opted in",
                    "Comply with applicable legal obligations",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-1.5 shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-heading/50 text-sm">
                  We never use your data for purposes beyond what's listed above
                  without your explicit consent.
                </p>
              </Section>

              <Section title="4. Cookies" delay={0.14}>
                <p>
                  Our website uses cookies — small text files stored on your
                  device — to enhance your experience. We use:
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      type: "Essential Cookies",
                      desc: "Required for core site functionality. Cannot be disabled.",
                      color: "bg-primary/10 border-primary/20",
                      dot: "bg-primary",
                    },
                    {
                      type: "Analytics Cookies",
                      desc: "Help us understand visitor behaviour via Google Analytics (GA4).",
                      color: "bg-accent-fire/10 border-accent-fire/20",
                      dot: "bg-accent-fire",
                    },
                  ].map((c) => (
                    <div
                      key={c.type}
                      className={`border rounded-xl p-4 ${c.color}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                        <span className="font-semibold text-heading text-sm">
                          {c.type}
                        </span>
                      </div>
                      <p className="text-xs text-heading/60">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm">
                  You can disable cookies in your browser settings at any time.
                  Note that doing so may affect some features of the site.
                </p>
              </Section>

              <Section title="5. Third-Party Services" delay={0.16}>
                <p>
                  We use trusted third-party services to operate our website.
                  These services may process your data under their own privacy
                  policies:
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    {
                      name: "Google Analytics (GA4)",
                      purpose: "Website usage analytics",
                      link: "https://policies.google.com/privacy",
                    },
                    {
                      name: "Vercel",
                      purpose: "Website hosting and deployment",
                      link: "https://vercel.com/legal/privacy-policy",
                    },
                    {
                      name: "LinkedIn / Instagram",
                      purpose: "Social media presence linked from our website",
                      link: null,
                    },
                  ].map((svc) => (
                    <div
                      key={svc.name}
                      className="flex items-start justify-between gap-4 py-3 border-b border-black/5 last:border-none"
                    >
                      <div>
                        <p className="font-semibold text-heading text-sm">
                          {svc.name}
                        </p>
                        <p className="text-heading/50 text-xs">{svc.purpose}</p>
                      </div>
                      {svc.link && (
                        <a
                          href={svc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-xs font-semibold hover:underline shrink-0"
                        >
                          Privacy Policy ↗
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="6. Data Retention" delay={0.18}>
                <p>
                  We retain personal information only as long as necessary to
                  fulfil the purposes described in this policy, or as required
                  by applicable law. Contact form submissions are retained for a
                  maximum of 12 months unless a business relationship is
                  established.
                </p>
              </Section>

              <Section title="7. Your Rights" delay={0.2}>
                <p>
                  Depending on your location, you may have the following rights
                  regarding your personal data:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Right to access the personal data we hold about you",
                    "Right to correct inaccurate or incomplete data",
                    "Right to request deletion of your personal data",
                    "Right to withdraw consent at any time",
                    "Right to lodge a complaint with a supervisory authority",
                  ].map((right) => (
                    <li key={right} className="flex gap-3 items-start">
                      <span className="mt-1.5 shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                      </span>
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">
                  To exercise any of these rights, email us at{" "}
                  <a
                    href={`mailto:${companyEmail}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    {companyEmail}
                  </a>
                  . We will respond within 30 days.
                </p>
              </Section>

              <Section title="8. Data Security" delay={0.22}>
                <p>
                  We take reasonable technical and organisational measures to
                  protect your personal data from unauthorised access, loss, or
                  misuse. Our website is served over HTTPS and we use
                  industry-standard security practices. However, no method of
                  transmission over the internet is 100% secure.
                </p>
              </Section>

              <Section title="9. Children's Privacy" delay={0.24}>
                <p>
                  Our website and services are not directed to individuals under
                  the age of 13. We do not knowingly collect personal
                  information from children. If you believe we have
                  inadvertently collected such information, please contact us
                  immediately at{" "}
                  <a
                    href={`mailto:${companyEmail}`}
                    className="text-primary hover:underline"
                  >
                    {companyEmail}
                  </a>{" "}
                  and we will delete it promptly.
                </p>
              </Section>

              <Section title="10. Changes to This Policy" delay={0.26}>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, or legal requirements.
                  When we make significant changes, we will update the
                  &ldquo;Effective Date&rdquo; at the top of this page.
                </p>
                <p>
                  We encourage you to review this policy periodically. Continued
                  use of our website after changes constitutes your acceptance
                  of the revised policy.
                </p>
              </Section>

              <Section title="11. Contact Us" delay={0.28}>
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please reach out to
                  us:
                </p>
                <div className="mt-5 inline-flex flex-col gap-2 bg-primary/5 border border-primary/15 rounded-xl px-6 py-5">
                  <p className="font-black text-heading text-base">
                    {companyName}
                  </p>
                  <a
                    href={`mailto:${companyEmail}`}
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    {companyEmail}
                  </a>
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heading/50 text-sm hover:text-primary transition-colors"
                  >
                    {website}
                  </a>
                </div>
              </Section>

              {/* Back link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 pt-8 border-t border-black/5"
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-heading/50 hover:text-primary transition-colors"
                >
                  <span className="text-lg leading-none">←</span>
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />
    </div>
  );
};

export default PrivacyPolicy;
