"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { CheckIcon } from "../ui/Icons";

export const Pricing: React.FC = () => {
  const handleSelectPlan = (e: React.MouseEvent<HTMLButtonElement>, planName: string) => {
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

      // Focus name and auto-select fitness goal to represent this intent
      setTimeout(() => {
        const goalSelect = document.getElementById("goal") as HTMLSelectElement;
        if (goalSelect) {
          if (planName.includes("Annual")) {
            goalSelect.value = "General Wellness & Recovery";
          } else if (planName.includes("Quarterly")) {
            goalSelect.value = "Active Fat Loss & Toning";
          } else {
            goalSelect.value = "Weight Training & Strength";
          }
          // Dispatch change event to React
          const event = new Event("change", { bubbles: true });
          goalSelect.dispatchEvent(event);
        }

        const nameInput = document.getElementById("name");
        if (nameInput) nameInput.focus();
      }, 800);
    }
  };

  return (
    <section id="pricing" className="relative z-20 py-24 bg-dark-950 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[500px] h-[500px] bg-brand-gold/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            Membership Plans
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4">
            Luxury Tier Packages
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted">
            Choose a tier that corresponds to your lifestyle. No lock-in registration fees, complete transparency, and full access to Bhopal's biggest fitness floor.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {siteConfig.pricing.map((tier) => (
            <motion.div
              key={tier.name}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`rounded-3xl flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? "glass-premium border-2 border-brand-red p-8 md:p-10 shadow-[0_10px_30px_rgba(225,29,42,0.15)] scale-[1.03] z-10"
                  : "glass p-8 border border-white/5 shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-brand-red border border-white/20 shadow-lg text-[9px] font-display font-black tracking-widest text-light uppercase select-none">
                  RECOMMENDED
                </div>
              )}

              <div>
                {/* Tier Name */}
                <h3 className="font-display font-black text-xl text-light uppercase tracking-tight mb-4">
                  {tier.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-3xl sm:text-4xl font-display font-black text-light text-glow-red tracking-tight uppercase">
                    {tier.price}
                  </span>
                  <span className="text-xs font-sans text-muted">/ {tier.duration}</span>
                </div>

                <div className="h-[1px] w-full bg-white/5 mb-8"></div>

                {/* Inclusions List */}
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-xs font-sans text-muted leading-tight">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        tier.popular ? "bg-brand-red/20 text-brand-red" : "bg-white/5 text-muted"
                      }`}>
                        <CheckIcon size={8} />
                      </span>
                      <span className="text-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purchase Trigger */}
              <button
                onClick={(e) => handleSelectPlan(e, tier.name)}
                className={`w-full py-4 rounded-xl font-display font-black tracking-widest text-xs uppercase shadow-md active:scale-98 transition-all duration-300 ${
                  tier.popular
                    ? "bg-brand-red hover:bg-brand-red/90 text-light shadow-brand-red/20"
                    : "bg-dark-950 hover:bg-dark-800 border border-white/10 text-light"
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
