import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Award,
  Calendar,
  Briefcase,
  ExternalLink,
  ShieldCheck,
  FileText,
  Building2,
  ChevronLeft,
} from "lucide-react";

const VerifyCertificate = () => {
  const { certificateId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";

  useEffect(() => {
    const verify = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch(
          `${API_BASE_URL}/api/interns/certificates/verify/${certificateId}`,
        );
        const res = await response.json();

        if (res.success && res.valid) {
          setData(res.data);
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch (error) {
        console.error("Verification failed", error);
        setIsValid(false);
      } finally {
        setLoading(false);
      }
    };

    if (certificateId) {
      verify();
    }
  }, [certificateId, API_BASE_URL]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-lg transform rotate-45"></div>
            </div>
          </div>
          <p className="text-lg font-medium text-subtext animate-pulse font-display">
            Verifying Authenticity...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pearlescent-bg py-20 px-4 relative overflow-hidden">
      <div className="noise-overlay" />

      {/* Back button */}
      <div className="max-w-3xl mx-auto mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          <ChevronLeft size={20} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {isValid ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className=" rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header / Status Banner */}
            <div className="bg-primary p-8 ">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl shadow-primary/30 transform -rotate-3">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h2 className="font-display font-black text-2xl text-white tracking-tight">
                      Certificate Verified
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <p className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
                        Authentic Document
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-2 bg-white/40  backdrop-blur-md rounded-2xl border border-white/50 ">
                  <p className="text-xs font-bold text-black uppercase tracking-tighter mb-0.5">
                    Certificate ID
                  </p>
                  <p className="font-mono font-bold text-white ">
                    {data.certificateId}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-10 bg-white/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column: Personal Info */}
                <div className="space-y-8">
                  <div className="group">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 ">
                      Recipient Name
                    </p>
                    <p className="text-3xl font-display font-black text-black leading-none">
                      {data.internName}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0 border border-primary">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">
                          Role / Designation
                        </p>
                        <p className="font-bold text-black ">{data.role}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0 border border-primary">
                        <Award size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">
                          Internship Domain
                        </p>
                        <p className="font-bold text-black ">{data.domain}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Timeline Info */}
                <div className="space-y-6">
                  <div className="p-6 bg-linear-to-br from-primary/5 to-transparent rounded-2xl border border-primary/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10" />

                    <div className="space-y-5 relative z-10">
                      <div>
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">
                          Completion Timeline
                        </p>
                        <div className="flex items-center gap-3">
                          <Calendar size={18} className="text-primary" />
                          <p className="font-bold text-black">
                            {new Date(data.startDate).toLocaleDateString(
                              "en-US",
                              { month: "short", year: "numeric" },
                            )}{" "}
                            —{" "}
                            {new Date(data.endDate).toLocaleDateString(
                              "en-US",
                              { month: "short", year: "numeric" },
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-primary/10">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">
                          Issue Date
                        </p>
                        <p className="font-bold text-black ">
                          {new Date(data.issueDate).toLocaleDateString(
                            "en-US",
                            { day: "numeric", month: "long", year: "numeric" },
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-2 text-primary ">
                    <Building2 size={16} />
                    <p className="text-xs font-bold uppercase tracking-widest italic">
                      Issued by Ofzen Technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-12 flex flex-col sm:flex-row gap-5">
                <a
                  href={`${data.certificateUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative overflow-hidden px-8 py-5 bg-primary text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#135bec]/20"
                >
                  <div className="absolute inset-0 bg-white/10 -translate-x-full" />
                  <FileText size={22} />
                  View Original PDF
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 bg-primary/30  text-center border-t border-primary/50">
              <p className="text-[10px] font-black text-black uppercase tracking-[0.2em]">
                Verified Digital Asset • Secure ID:{" "}
                {data.certificateId.split("-").pop()} • ofzen.in/verify
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-3xl p-16 text-center shadow-2xl"
          >
            <div className="w-24 h-24 bg-red-500/10 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 transform -rotate-12">
              <XCircle size={48} />
            </div>
            <h2 className="text-3xl font-display font-black text-[#0d121b] dark:text-white mb-4 tracking-tight">
              Verification Failed
            </h2>
            <p className="text-[#4c669a] dark:text-gray-400 mb-10 max-w-sm mx-auto font-medium">
              We couldn't locate any record matching the certificate ID{" "}
              <span className="text-[#135bec] font-bold">
                "{certificateId}"
              </span>
              . Please ensure the ID is correct or contact support.
            </p>
            <Link
              to="/careers"
              className="px-8 py-4 bg-white dark:bg-white/5 border border-[#135bec]/20 text-[#135bec] rounded-2xl font-black hover:bg-[#135bec] hover:text-white transition-all inline-flex items-center gap-2"
            >
              Contact Support
              <ExternalLink size={18} />
            </Link>
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <div className="w-12 h-1 bg-[#135bec]/20 mx-auto rounded-full mb-6" />
          <p className="text-[10px] font-black text-[#4c669a] dark:text-gray-500 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} OFZEN TECHNOLOGIES • SECURE
            VERIFICATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
