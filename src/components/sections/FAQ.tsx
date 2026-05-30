"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { ChevronDownIcon } from "../ui/Icons";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-20 py-24 bg-dark-900 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-[40%] left-[-15%] w-[400px] h-[400px] bg-brand-red/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            Got Questions?
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4">
            Frequently Asked
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted">
            Have clear details about memberships, accessibility, and facilities. Here are quick answers to the most common queries.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-dark-800/80 border-brand-red/30 shadow-md shadow-brand-red/5"
                    : "glass-light border-white/5 hover:border-white/10"
                }`}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className={`font-display font-black text-sm uppercase tracking-wide transition-colors duration-300 ${
                    isOpen ? "text-brand-red" : "text-light group-hover:text-brand-red"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon rotation */}
                  <span className={`transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-brand-red" : "text-muted group-hover:text-light"
                  }`}>
                    <ChevronDownIcon size={18} />
                  </span>
                </button>

                {/* Expanding Content Block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="text-xs font-sans text-muted leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
