"use client";

import React from "react";
import { motion } from "framer-motion";
import { FITPASSBadge } from "../ui/Icons";

export const FITPASSCallout: React.FC = () => {
  return (
    <section className="relative z-20 py-16 bg-dark-900 overflow-hidden border-y border-white/5">
      {/* Background cyan spotlights for FITPASS theme contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00DEFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-6 relative z-10">
        {/* FITPASS Badge */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FITPASSBadge />
        </motion.div>

        {/* Headline */}
        <h3 className="font-display font-black text-2xl sm:text-3xl text-light uppercase tracking-tight max-w-2xl text-balance">
          Access TFHQ with Your <span className="text-[#00DEFF] shadow-[#00DEFF]/20">FITPASS Membership</span>
        </h3>

        {/* Subhead details */}
        <p className="max-w-2xl text-xs font-sans text-muted leading-relaxed">
          Are you a FITPASS member? Scan the official check-in QR code at our front desk Polytechnic Square entrance and gain immediate access to Bhopal's largest luxury workout floor. Full locker, shower, and weight floor amenities are covered.
        </p>

        {/* Subdued status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00DEFF] animate-pulse"></span>
          <span className="text-[9px] font-display font-black tracking-widest text-muted uppercase">
            No Extra Fees • Seamless Scan check-in
          </span>
        </div>
      </div>
    </section>
  );
};
