import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const loadRazorpay = () =>
  new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });

const InputField = ({ label, id, error, icon, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="text-xs font-bold text-gray-600 uppercase tracking-wider"
    >
      {label}
    </label>
    <div className="relative">
      {icon && (
        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none z-10">
          {icon}
        </span>
      )}
      {children}
    </div>
    {error && (
      <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
        <span className="material-symbols-outlined text-xs">error</span>
        {error}
      </p>
    )}
  </div>
);

const ApplicationFormModal = ({ internship, onClose, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    college: "",
    course: "",
    passOutYear: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const set = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    if (fieldErrors[key]) setFieldErrors((prev) => ({ ...prev, [key]: null }));
  };

  const validateStep1 = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Valid email required";
    if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, "")))
      errs.phone = "Enter a valid 10-digit phone number";
    if (!formData.gender) errs.gender = "Please select your gender";
    if (formData.password.length < 8) errs.password = "Minimum 8 characters";
    return errs;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.college.trim())
      errs.college = "College/University is required";
    if (!formData.course.trim()) errs.course = "Course/Degree is required";

    const year = parseInt(formData.passOutYear, 10);
    if (!formData.passOutYear.trim()) {
      errs.passOutYear = "Pass out year is required";
    } else if (isNaN(year) || year < 2000 || year > 2035) {
      errs.passOutYear = "Enter a valid year (e.g., 2026)";
    }

    return errs;
  };

  const handleNext = () => {
    const errs = validateStep1();
    if (Object.keys(errs).length > 0) return setFieldErrors(errs);
    setFieldErrors({});
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateStep2();
    if (Object.keys(errs).length > 0) return setFieldErrors(errs);
    setFieldErrors({});
    setSubmitting(true);
    setError(null);

    try {
      // 1. Check if email already exists before proceeding to payment
      const emailCheckRes = await fetch(
        `${API_BASE_URL}/api/public/internships/check-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        },
      );
      const emailCheckData = await emailCheckRes.json();

      if (emailCheckData.exists) {
        setError(
          emailCheckData.message ||
            "An account already exists with this email address.",
        );
        setStep(1); // Take them back to step 1 to fix the email
        setSubmitting(false);
        return;
      }

      // 2. Load Razorpay
      const loaded = await loadRazorpay();
      if (!loaded)
        throw new Error("Payment gateway failed to load. Please try again.");

      // 3. Create Razorpay order
      const orderRes = await fetch(
        `${API_BASE_URL}/api/public/internships/create-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ internshipId: internship._id }),
        },
      );
      const orderData = await orderRes.json();
      if (!orderData.success)
        throw new Error(orderData.message || "Could not initiate payment.");

      const { order, keyId } = orderData;

      // 4. Open Razorpay Checkout
      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Ofzen Technologies",
        description: internship.title,
        image: "/logo.png",
        order_id: order.id,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#135bec", backdrop_color: "rgba(0, 0, 0, 0)" },
        handler: async (response) => {
          try {
            // 5. Register Intern upon successful payment
            const regRes = await fetch(
              `${API_BASE_URL}/api/public/internships/register`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  gender: formData.gender,
                  password: formData.password,
                  college: formData.college,
                  course: formData.course,
                  passOutYear: formData.passOutYear, // Passing pass out year to backend
                  internshipId: internship._id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              },
            );
            const regData = await regRes.json();
            if (!regData.success)
              throw new Error(regData.message || "Registration failed.");
            onSuccess();
          } catch (err) {
            setError(err.message);
            setSubmitting(false);
          }
        },
        modal: {
          ondismiss: () => setSubmitting(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  const inputBase = (hasIcon = true) =>
    `w-full h-12 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm font-medium outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all appearance-none ${hasIcon ? "pl-10 pr-4" : "px-4"}`;

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
        onClick={!submitting ? onClose : undefined}
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
        className="relative bg-white max-w-lg w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Top accent */}
        <div className="h-1 w-full shrink-0 bg-gradient-to-r from-blue-600 via-primary to-cyan-500" />

        <div className="p-8 overflow-y-auto">
          {/* Close */}
          {!submitting && (
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 size-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
            >
              <span className="material-symbols-outlined text-gray-500 text-lg">
                close
              </span>
            </button>
          )}

          {/* Header */}
          <div className="mb-6 pr-8">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">
              Apply for Internship
            </p>
            <h3 className="text-xl font-black text-gray-900 leading-tight">
              {internship.title}
            </h3>
          </div>

          {/* Step Progress */}
          <div className="flex items-center gap-3 mb-8">
            {["Personal Details", "Academic Info"].map((label, i) => (
              <React.Fragment key={label}>
                <div className="flex items-center gap-2">
                  <div
                    className={`size-7 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                      step > i + 1
                        ? "bg-emerald-500 text-white"
                        : step === i + 1
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step > i + 1 ? (
                      <span className="material-symbols-outlined text-sm">
                        check
                      </span>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span
                    className={`text-xs font-bold hidden sm:block ${
                      step === i + 1 ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < 1 && (
                  <div
                    className={`flex-1 h-px ${step > 1 ? "bg-primary" : "bg-gray-200"} transition-all`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Error Banner */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                className="mb-5 p-3 rounded-xl bg-red-50 border border-red-100 flex items-start gap-2 overflow-hidden"
              >
                <span className="material-symbols-outlined text-red-500 text-base mt-0.5 shrink-0">
                  error
                </span>
                <p className="text-sm text-red-600 font-medium">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 1: Personal */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col gap-4"
              >
                <InputField
                  label="Full Name"
                  id="name"
                  error={fieldErrors.name}
                  icon="person"
                >
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={set("name")}
                    className={inputBase()}
                  />
                </InputField>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Email Address"
                    id="email"
                    error={fieldErrors.email}
                    icon="mail"
                  >
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={set("email")}
                      className={inputBase()}
                    />
                  </InputField>

                  <InputField
                    label="Phone Number"
                    id="phone"
                    error={fieldErrors.phone}
                    icon="phone"
                  >
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={set("phone")}
                      className={inputBase()}
                    />
                  </InputField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Gender"
                    id="gender"
                    error={fieldErrors.gender}
                    icon="wc"
                  >
                    <select
                      id="gender"
                      value={formData.gender}
                      onChange={set("gender")}
                      className={`${inputBase()} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                    {/* Custom chevron for select */}
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      expand_more
                    </span>
                  </InputField>

                  <InputField
                    label="Create Password"
                    id="password"
                    error={fieldErrors.password}
                    icon="lock"
                  >
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 chars"
                      value={formData.password}
                      onChange={set("password")}
                      className={`${inputBase()} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                    >
                      <span className="material-symbols-outlined text-base block">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </InputField>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  className="mt-2 w-full bg-primary text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm tracking-widest uppercase cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Next Step
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </motion.button>
              </motion.div>
            )}

            {/* Step 2: Academic */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col gap-4"
              >
                <InputField
                  label="College / University"
                  id="college"
                  error={fieldErrors.college}
                  icon="school"
                >
                  <input
                    id="college"
                    type="text"
                    placeholder="Your institution name"
                    value={formData.college}
                    onChange={set("college")}
                    className={inputBase()}
                  />
                </InputField>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Course / Degree"
                    id="course"
                    error={fieldErrors.course}
                    icon="menu_book"
                  >
                    <input
                      id="course"
                      type="text"
                      placeholder="e.g. B.Tech CSE"
                      value={formData.course}
                      onChange={set("course")}
                      className={inputBase()}
                    />
                  </InputField>

                  <InputField
                    label="Pass Out Year"
                    id="passOutYear"
                    error={fieldErrors.passOutYear}
                    icon="calendar_today"
                  >
                    <input
                      id="passOutYear"
                      type="number"
                      placeholder="e.g. 2026"
                      value={formData.passOutYear}
                      onChange={set("passOutYear")}
                      className={inputBase()}
                    />
                  </InputField>
                </div>

                {/* Fee Summary */}
                {internship.fee !== undefined && (
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-primary/5 border border-primary/15 mt-1">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-0.5">
                        Amount to Pay
                      </p>
                      <p className="text-xl font-black text-gray-900">
                        ₹{internship.fee.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <img
                      src="https://razorpay.com/favicon.png"
                      alt="Razorpay"
                      className="h-6 opacity-60"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                )}

                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => setStep(1)}
                    disabled={submitting}
                    className="flex-1 h-12 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-all cursor-pointer disabled:opacity-50"
                  >
                    Back
                  </button>
                  <motion.button
                    whileHover={{ scale: submitting ? 1 : 1.02 }}
                    whileTap={{ scale: submitting ? 1 : 0.97 }}
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex-[2] bg-primary text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 text-sm tracking-widest uppercase cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing…
                      </>
                    ) : (
                      <>
                        Pay ₹{internship.fee?.toLocaleString("en-IN")}
                        <span className="material-symbols-outlined text-base">
                          payments
                        </span>
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-center text-[11px] text-gray-400">
                  🔒 Secure payment via Razorpay · UPI, Cards &amp; Net Banking
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ApplicationFormModal;
