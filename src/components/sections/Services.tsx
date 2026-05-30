"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { DumbbellIcon, HeartIcon, SpaIcon, CupIcon, ShieldIcon, AwardIcon, CheckIcon } from "../ui/Icons";

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "training" | "amenity">("all");

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "training", label: "Core Training" },
    { id: "amenity", label: "Luxury Amenities" },
  ] as const;

  const filteredServices = siteConfig.services.filter(
    (service) => activeCategory === "all" || service.category === activeCategory
  );

  // Map service names to clean custom icons
  const getIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("weight") || n.includes("crossfit") || n.includes("functional")) {
      return <DumbbellIcon className="w-6 h-6 text-brand-red" />;
    }
    if (n.includes("cardio") || n.includes("zumba") || n.includes("dance") || n.includes("aerobics") || n.includes("spinning") || n.includes("yoga")) {
      return <HeartIcon className="w-6 h-6 text-brand-red" />;
    }
    if (n.includes("spa") || n.includes("steam") || n.includes("cupping")) {
      return <SpaIcon className="w-6 h-6 text-brand-gold" />;
    }
    if (n.includes("cafe")) {
      return <CupIcon className="w-6 h-6 text-brand-gold" />;
    }
    if (n.includes("parking") || n.includes("locker") || n.includes("analysis")) {
      return <ShieldIcon className="w-6 h-6 text-light" />;
    }
    return <AwardIcon className="w-6 h-6 text-brand-red" />;
  };

  return (
    <section id="services" className="relative z-20 py-24 bg-dark-900 overflow-hidden">
      {/* Glow spots */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-brand-gold/4 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            What We Offer
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4">
            Amenities & Services
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted">
            TFHQ brings all world-class strength, conditioning, recovery, and wellness infrastructure under one roof in Bhopal. Explore our premium facilities.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 bg-dark-950/60 rounded-xl border border-white/5 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 rounded-lg text-xs font-display font-black tracking-widest uppercase transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-brand-red text-light shadow-md"
                    : "text-muted hover:text-light"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={service.name}
                className="glass-light p-6 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-dark-800/40 transition-all duration-300 relative group"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-dark-950 flex items-center justify-center border border-white/5 mb-5 group-hover:border-brand-red/40 transition-colors duration-300">
                  {getIcon(service.name)}
                </div>

                {/* Service Name */}
                <h3 className="font-display font-black text-lg text-light uppercase mb-2 tracking-tight group-hover:text-brand-red transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-xs font-sans text-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Subdued Category Indicator */}
                <div className="absolute top-4 right-4 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`w-1.5 h-1.5 rounded-full ${service.category === "training" ? "bg-brand-red" : "bg-brand-gold"}`}></span>
                  <span className="text-[9px] font-display font-black tracking-widest text-muted uppercase">
                    {service.category === "training" ? "TRAINING" : "LUXURY"}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
