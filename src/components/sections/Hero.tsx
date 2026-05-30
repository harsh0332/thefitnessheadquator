"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { StarIcon } from "../ui/Icons";

export const Hero: React.FC = () => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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

      const nameInput = document.getElementById("name");
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 800);
      }
    }
  };

  const handleScrollToWhy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#why-tfhq");
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
    }
  };

  const tagPills = [
    "Weight Training",
    "Cardio Suite",
    "CrossFit",
    "Functional Training",
    "Zumba Arena",
    "Power Yoga"
  ];

  return (
    <section className="relative min-h-screen lg:min-h-[100svh] flex items-center justify-center overflow-hidden bg-dark-950 pt-24 lg:pt-16 pb-12">
      {/* Cinematic Hero Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Instant paint poster background as a fallback */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 z-0" 
          style={{ backgroundImage: "url('/videos/hero-poster.jpg')" }}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center z-10"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark Cinematic Gradient Overlay on top of video */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/50 to-dark-950 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 via-transparent to-dark-950/40 z-20 pointer-events-none" />
        {/* Ambient spotlights inside video layer for red-glow branding */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none z-20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Content (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-left flex flex-col justify-center">
            
            {/* Established Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              <span className="text-[10px] font-display font-black tracking-widest text-light uppercase">
                CELEBRATING {siteConfig.established} IN BHOPAL
              </span>
            </div>

            {/* Aspirational Headline */}
            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-light uppercase leading-[0.9] text-balance">
              Push Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-red to-brand-gold text-glow-red">
                Limits With Us
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="max-w-xl text-sm sm:text-base font-sans text-muted leading-relaxed text-balance">
              From beginner to advanced, experience workouts designed to help you achieve peak performance and exceed your fitness goals. {siteConfig.tagline} inside Bhopal's most cinematic luxury facility.
            </p>

            {/* Call to Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={handleScrollToForm}
                className="px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-light font-display font-black tracking-widest text-sm uppercase rounded-xl shadow-[0_4px_20px_rgba(225,29,42,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Join Now »
              </a>
              <a
                href="#why-tfhq"
                onClick={handleScrollToWhy}
                className="inline-flex items-center gap-3 px-6 py-4 text-light font-display font-black tracking-widest text-sm uppercase group hover:text-brand-red transition-all duration-300"
              >
                {/* Watch Play Circular Indicator */}
                <span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-brand-red/40 flex items-center justify-center bg-white/5 group-hover:bg-brand-red/10 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-light group-hover:text-brand-red translate-x-[1px] transition-colors"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
                Take a Tour
              </a>
            </div>

            {/* Ratings & Social Proof Badge */}
            <div className="flex items-center gap-4 pt-2">
              {/* Overlapping Faces Avatars */}
              <div className="flex -space-x-3 select-none">
                <div className="w-8 h-8 rounded-full border-2 border-dark-950 overflow-hidden relative bg-dark-800">
                  <Image src="/images/trainer-1.jpg" alt="Member face" fill className="object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-dark-950 overflow-hidden relative bg-dark-800">
                  <Image src="/images/trainer-2.jpg" alt="Member face" fill className="object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-dark-950 overflow-hidden relative bg-dark-800">
                  <Image src="/images/trainer-3.jpg" alt="Member face" fill className="object-cover" />
                </div>
                {/* Extra Counter bubble */}
                <div className="w-8 h-8 rounded-full border-2 border-dark-950 bg-brand-red flex items-center justify-center text-[9px] font-display font-black text-light">
                  +
                </div>
              </div>

              {/* Stars & Text Rating */}
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={12} className="text-brand-gold text-glow-gold" />
                  ))}
                </div>
                <span className="text-[10px] font-display font-black text-light uppercase tracking-wider mt-0.5">
                  8,000+ Bhopal Members
                </span>
              </div>
            </div>

            {/* Tag Pills Grid list */}
            <div className="flex flex-wrap gap-2.5 pt-4 max-w-xl">
              {tagPills.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-2 bg-dark-900 border border-white/5 hover:border-brand-red/30 hover:bg-dark-800/40 text-[10px] font-display font-black tracking-widest text-muted hover:text-light uppercase rounded-xl select-none cursor-pointer transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Cinematic Runner Photo (5 columns) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Ambient Red glow panel behind runner */}
            <div className="absolute inset-0 w-[120%] h-[120%] bg-red-glow rounded-full blur-[100px] pointer-events-none scale-100 animate-glow-pulse" />
            <div className="absolute w-[250px] h-[250px] bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Glowing red accent rings */}
            <div className="absolute w-[300px] h-[300px] rounded-full border border-brand-red/10 animate-[float_8s_ease-in-out_infinite]" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 animate-[float_12s_ease-in-out_infinite_reverse]" />

            {/* Image Container frame */}
            <div className="relative w-full aspect-square max-w-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 glass-premium z-10 scale-95 hover:scale-100 transition-transform duration-500">
              {/* Dynamic bottom/sides gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent z-10 pointer-events-none" />
              
              <Image
                src="/images/hero-athlete.png"
                alt="TFHQ Running Athlete"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover pointer-events-none filter brightness-95 contrast-[1.05]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* Dynamic bottom separator line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
    </section>
  );
};
