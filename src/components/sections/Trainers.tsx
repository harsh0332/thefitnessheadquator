"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="relative z-20 py-24 bg-dark-950 overflow-hidden">
      {/* Background ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-gold/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            Elite Guidance
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4">
            Certified Coaches
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted">
            Our trainers aren't just supervisors — they are certified specialists in sports nutrition, posture restoration, Olympic lifting, and active lifestyle transformations.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {siteConfig.trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all duration-300 relative group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-dark-900">
                {/* Visual Overlay Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-dark-950/30 group-hover:bg-transparent transition-colors duration-300 z-10" />
                
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none filter brightness-90 contrast-[1.05]"
                />
              </div>

              {/* Description Panel */}
              <div className="p-6 relative z-20 bg-dark-950/90 border-t border-white/5">
                <h3 className="font-display font-black text-lg text-light uppercase tracking-tight group-hover:text-brand-red transition-colors duration-300">
                  {trainer.name}
                </h3>
                <p className="text-[10px] font-display font-black tracking-widest text-brand-gold uppercase mt-1">
                  {trainer.specialty}
                </p>
                <div className="h-[1px] w-8 bg-brand-red mt-4 group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
