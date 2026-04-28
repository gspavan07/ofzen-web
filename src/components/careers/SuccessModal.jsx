import React from "react";
import { motion } from "framer-motion";

const SuccessModal = ({ internship, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Backdrop */}
    <motion.div
      className="absolute inset-0 bg-black/60 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />

    {/* Card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 32 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 32 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-white max-w-md w-full rounded-3xl shadow-2xl overflow-hidden text-center"
    >
      {/* Top gradient bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400" />

      {/* Floating orbs */}
      <div className="absolute top-8 left-8 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 p-10 flex flex-col items-center gap-5">
        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          className="size-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="material-symbols-outlined text-emerald-500 text-4xl"
          >
            check_circle
          </motion.span>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-2"
          >
            Registration Successful!
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="text-2xl font-black text-gray-900 leading-tight"
          >
            Welcome to Ofzen!
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46 }}
          className="text-sm text-gray-500 leading-relaxed max-w-xs"
        >
          You're now registered for{" "}
          <span className="font-bold text-gray-800">{internship?.title}</span>.
          A confirmation email has been sent to your inbox with your batch
          details.
        </motion.p>

        {/* Info boxes */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.54 }}
          className="w-full flex flex-col gap-2"
        >
          {[
            {
              icon: "mail",
              text: "Check your email for offer letter & login details",
            },
            {
              icon: "schedule",
              text: "Your onboarding process will start within few days",
            },
            {
              icon: "workspace_premium",
              text: "Certificate issued on completion",
            },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 text-left"
            >
              <span className="material-symbols-outlined text-primary text-base shrink-0">
                {item.icon}
              </span>
              <p className="text-xs font-semibold text-gray-600">{item.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={onClose}
          className="w-full bg-primary text-white font-black py-3.5 rounded-xl text-sm tracking-widest uppercase cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          Done
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

export default SuccessModal;
