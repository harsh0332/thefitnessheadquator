"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";

export const TrustBar: React.FC = () => {
  return (
    <section className="relative z-20 py-12 bg-dark-950/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden"
        >
          {/* Spotlight behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 divide-y-0 divide-x-0 lg:divide-x lg:divide-white/5">
            {siteConfig.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center flex flex-col items-center justify-center ${
                  index > 0 ? "lg:pl-6" : ""
                }`}
              >
                <span className="text-3xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-light via-light to-brand-red tracking-tight mb-2 text-glow-red select-none">
                  {stat.value}
                </span>
                <span className="text-xs font-display font-black tracking-widest text-light uppercase mb-1">
                  {stat.label}
                </span>
                <span className="text-[10px] font-sans text-muted tracking-wider">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
