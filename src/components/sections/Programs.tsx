"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { CheckIcon } from "../ui/Icons";

export const Programs: React.FC = () => {
  const handleProgramSelection = (e: React.MouseEvent<HTMLButtonElement>, goalName: string) => {
    e.preventDefault();
    
    // Scroll to contact form
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Synchronize Goal Dropdown selection
      setTimeout(() => {
        const goalSelect = document.getElementById("goal") as HTMLSelectElement;
        if (goalSelect) {
          // Attempt to map program title to select option
          let mappedValue = "Weight Training & Strength";
          if (goalName.includes("Fat Loss")) mappedValue = "Active Fat Loss & Toning";
          else if (goalName.includes("Functional") || goalName.includes("CrossFit")) mappedValue = "CrossFit & Athletic Drill";
          else if (goalName.includes("Group") || goalName.includes("Studio")) mappedValue = "Zumba & Cardio Studio";
          
          goalSelect.value = mappedValue;
          // Trigger React change event
          const event = new Event("change", { bubbles: true });
          goalSelect.dispatchEvent(event);
          
          // Focus name input
          const nameInput = document.getElementById("name");
          if (nameInput) nameInput.focus();
        }
      }, 800);
    }
  };

  return (
    <section id="programs" className="relative z-20 py-24 bg-dark-900 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-[40%] right-[-15%] w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] bg-brand-gold/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            Targeted Excellence
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4">
            Elite Programs
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted">
            Whether your objective is rapid fat loss, structural strength building, high-performance athletic drills, or group studio energy — we have a customized plan for you.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {siteConfig.programs.map((program) => (
            <motion.div
              key={program.title}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-red/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header card details */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display font-black text-xl text-light uppercase tracking-tight group-hover:text-brand-red transition-colors duration-300">
                    {program.title}
                  </h3>
                  <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[9px] font-display font-black tracking-widest text-brand-gold uppercase">
                    {program.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs font-sans text-muted leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Bullet Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-xs font-sans text-light">
                      <span className="w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                        <CheckIcon size={10} className="text-brand-red" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger */}
              <button
                onClick={(e) => handleProgramSelection(e, program.title)}
                className="w-full py-3.5 bg-dark-950 hover:bg-brand-red text-light font-display font-black tracking-widest text-xs uppercase rounded-xl border border-white/10 hover:border-brand-red transition-all duration-300 shadow-md group-hover:shadow-brand-red/5"
              >
                Explore Program
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
