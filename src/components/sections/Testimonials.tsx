"use client";

import React from "react";
import { motion } from "framer-motion";
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-red/20 hover:bg-dark-800/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-star Rating icons */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} size={14} className="text-brand-gold text-glow-gold" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs font-sans text-light italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Member profile info */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <h4 className="font-display font-black text-sm text-light uppercase tracking-wide">
                  {t.name}
                </h4>
                <p className="text-[10px] font-sans text-muted mt-0.5">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
