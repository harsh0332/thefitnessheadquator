"use client";

import React from "react";
import { motion } from "framer-motion";
import { BeforeAfter } from "../ui/BeforeAfter";

export const Transformations: React.FC = () => {
  return (
    <section id="transformations" className="relative z-20 py-24 bg-dark-950 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            Proof in Action
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4">
            Real Transformations
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted">
            Swipe or drag the slider handle in the center of the image below to view the incredible physical transformations achieved by our members under elite coaching at TFHQ.
          </p>
        </div>

        {/* Core Showcase Frame */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Interactive Slider Area (7 cols) */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <BeforeAfter
              beforeImage="/images/before-placeholder.jpg"
              afterImage="/images/after-placeholder.jpg"
              beforeLabel="BEFORE (WEEK 1)"
              afterLabel="AFTER (WEEK 16)"
              aspectRatio="aspect-[16/11]"
            />
          </div>

          {/* Motivation Stats Area (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-2xl border border-white/5 space-y-6"
            >
              <h3 className="font-display font-black text-2xl text-light uppercase tracking-tight">
                MEMBER JOURNEY
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-xs font-display font-black tracking-widest text-muted uppercase">Duration</span>
                  <span className="text-sm font-display font-black text-brand-red uppercase">16 Weeks</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-xs font-display font-black tracking-widest text-muted uppercase">Body Fat Melted</span>
                  <span className="text-sm font-display font-black text-brand-gold uppercase">-14% Fat</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-xs font-display font-black tracking-widest text-muted uppercase">Lean Mass Gain</span>
                  <span className="text-sm font-display font-black text-light uppercase">+6.2 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-display font-black tracking-widest text-muted uppercase">Primary Goal</span>
                  <span className="text-sm font-display font-black text-muted uppercase">Recomposition</span>
                </div>
              </div>

              <div className="bg-dark-950/60 rounded-xl p-4 border border-white/5">
                <p className="text-xs font-sans text-muted italic leading-relaxed">
                  "I signed up with a TFHQ Elite Personal Trainer and it changed my entire life. The world-class strength floor combined with a custom nutrition split from the Muscle Cafe kept me fully consistent."
                </p>
                <p className="text-[10px] font-display font-black tracking-widest text-light uppercase mt-2">
                  — Rohan S., Active Member
                </p>
              </div>

              <a
                href="#contact"
                className="block text-center w-full py-3 bg-brand-red hover:bg-brand-red/90 text-light font-display font-black tracking-widest text-xs uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-brand-red/10 active:scale-98"
              >
                Start Your Transformation
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
