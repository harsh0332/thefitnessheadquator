"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { StarIcon } from "../ui/Icons";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative z-20 py-24 bg-dark-950 overflow-hidden">
      {/* Background glowing layer */}
      <div className="absolute top-[40%] right-[-15%] w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            Real Stories
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4">
            Hear from Our Members
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted">
            Find out why Bhopal's leading professionals, athletes, and fitness enthusiasts choose TFHQ to achieve their wellness and strength goals.
          </p>
        </div>

        {/* Testimonials Grid (3 columns responsive) */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {siteConfig.testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-red/20 hover:bg-dark-800/30 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-red to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl" />

              <div className="space-y-6">
                {/* Header: User Avatar + Info + Verified badge */}
                <div className="flex items-center gap-4">
                  {/* Circular Avatar */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 relative bg-dark-900 group-hover:border-brand-red/40 transition-colors duration-300 flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  
                  {/* Name and Title */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-display font-black text-sm text-light uppercase tracking-wide truncate">
                        {t.name}
                      </h4>
                      {/* Green verified check SVG badge */}
                      <span className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400" title="Verified Gym Member">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    </div>
                    <p className="text-[9px] font-sans text-muted truncate mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Stars Rating Row */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} size={12} className="text-brand-gold text-glow-gold" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs font-sans text-muted leading-relaxed italic relative">
                  "{t.quote}"
                </p>
              </div>

              {/* Verified member tagline at bottom */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[8px] font-display font-black tracking-widest text-muted uppercase group-hover:text-brand-red transition-colors duration-300">
                <span>Verified Check-in</span>
                <span>Active Member</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
