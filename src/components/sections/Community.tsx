"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { InstagramIcon } from "../ui/Icons";

export const Community: React.FC = () => {
  return (
    <section id="community" className="relative z-20 py-24 bg-dark-900 overflow-hidden">
      {/* Background glowing panel */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            Bhopal's Best Gym Community
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4">
            TFH Culture & Legacy
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted">
            TFHQ is more than weights — it's a tight-knit family of fitness enthusiasts. From our signature annual tournament to daily motivation, this is where Bhopal connects.
          </p>
        </div>

        {/* Premier League Showcase Card */}
        <div className="glass rounded-3xl overflow-hidden border border-white/5 shadow-2xl mb-20 max-w-5xl mx-auto grid md:grid-cols-12 items-center">
          {/* Text Area (7 cols) */}
          <div className="p-8 sm:p-12 md:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full text-[9px] font-display font-black tracking-widest text-brand-red uppercase">
              SIGNATURE ANNUAL EVENT
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-light uppercase tracking-tight text-glow-red">
              {siteConfig.community.eventTitle}
            </h3>
            <p className="text-xs font-sans text-muted leading-relaxed">
              {siteConfig.community.eventDesc}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <span className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-display font-black tracking-widest text-light uppercase">
                🏆 Championship Trophy
              </span>
              <span className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-display font-black tracking-widest text-light uppercase">
                🔥 Multi-Discipline Drills
              </span>
            </div>
          </div>

          {/* Image Area (5 cols) */}
          <div className="relative aspect-video md:aspect-auto md:h-full md:col-span-5 self-stretch overflow-hidden bg-dark-950">
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950/20 to-transparent z-10 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent z-10 md:hidden" />
            <Image
              src={siteConfig.community.eventImage}
              alt="TFH Premier League"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover pointer-events-none filter brightness-95"
            />
          </div>
        </div>

        {/* Instagram Strip Showcase */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-white/5">
            <div className="text-center sm:text-left">
              <h4 className="font-display font-black text-lg text-light uppercase tracking-tight">
                Follow the Headquarters
              </h4>
              <p className="text-xs font-sans text-muted">
                Get daily tips, event highlights, and motivation on Instagram.
              </p>
            </div>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-dark-950 hover:bg-white hover:text-dark-950 text-xs font-display font-black tracking-widest uppercase rounded-lg border border-white/10 transition-all duration-300"
            >
              <InstagramIcon size={14} className="text-brand-red" />
              {siteConfig.contact.instagram}
            </a>
          </div>

          {/* Mosaic Instagram Images (6 columns responsive) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteConfig.community.igFeed.map((item) => (
              <a
                key={item.id}
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-xl overflow-hidden bg-dark-950 border border-white/5 group shadow-md"
              >
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-brand-red/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <InstagramIcon size={24} className="text-white animate-pulse" />
                </div>
                <Image
                  src={item.image}
                  alt={`TFHQ Instagram Feed ${item.id}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover pointer-events-none filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
