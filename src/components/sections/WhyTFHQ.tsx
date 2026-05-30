"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/data/site.config";

export const WhyTFHQ: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="why-tfhq" className="relative z-20 py-24 bg-dark-950 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-brand-gold/3 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            The TFHQ Experience
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4 text-balance">
            Elevating Bhopal’s <br className="sm:hidden" />
            Fitness Standard
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted text-balance">
            Since our inception over 6 years ago, we have been providing the ultimate high-end training environment. Here is why Bhopal's achievers select TFHQ.
          </p>
        </div>

        {/* Value Props Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {siteConfig.valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-light hover:glass p-8 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent line inside card */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-red to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              
              {/* Card Index */}
              <div className="font-display font-black text-4xl text-brand-red/25 group-hover:text-brand-red/50 transition-colors duration-300 mb-6">
                0{index + 1}
              </div>

              {/* Card Title */}
              <h3 className="font-display font-black text-xl text-light uppercase mb-4 tracking-tight group-hover:text-glow-red group-hover:text-brand-red transition-all duration-300">
                {prop.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs font-sans text-muted leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
