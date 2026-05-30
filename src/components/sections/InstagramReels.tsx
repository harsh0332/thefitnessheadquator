"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { InstagramIcon } from "../ui/Icons";

interface ReelItem {
  id: number;
  likes: string;
  comments: string;
  caption: string;
}

export const InstagramReels: React.FC = () => {
  const reels: ReelItem[] = [
    {
      id: 1,
      likes: "4.8K",
      comments: "248",
      caption: "Morning strength split on Bhopal's biggest luxury floor! 🏋️🔥 #TFHQ #BhopalGym #Fitness",
    },
    {
      id: 2,
      likes: "3.2K",
      comments: "189",
      caption: "Post-workout recovery at our luxury steam and cupping therapy suite. 💆‍♂️✨ #Wellness #Recovery",
    },
    {
      id: 3,
      likes: "5.4K",
      comments: "342",
      caption: "The Group Energy studio was absolute fire tonight! 🕺🔥 #Zumba #PowerYoga #TFHQCommunity",
    },
    {
      id: 4,
      likes: "6.1K",
      comments: "411",
      caption: "Official FITPASS partner check-in. Scan, scan, workout! 📱💪 #FITPASS #BhopalFitness",
    },
  ];

  return (
    <section className="relative z-20 py-24 bg-dark-900 overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-gold/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 max-w-5xl mx-auto pb-6 border-b border-white/5">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase">
              Live Feed
            </h2>
            <p className="text-3xl sm:text-4xl font-display font-black text-light uppercase tracking-tight">
              TFHQ Live Reels
            </p>
            <p className="text-xs font-sans text-muted max-w-md">
              Watch high-energy workout moments, expert form tips, and community events directly from our training floor.
            </p>
          </div>
          
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 bg-brand-red hover:bg-brand-red/90 text-xs font-display font-black tracking-widest uppercase rounded-xl shadow-lg shadow-brand-red/10 hover:shadow-brand-red/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <InstagramIcon size={14} className="text-white" />
            Follow @the_fitness_headquarters_
          </a>
        </div>

        {/* 9:16 Reels Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reels.map((reel) => (
            <motion.a
              key={reel.id}
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/5 hover:border-brand-red/30 transition-all duration-300 group bg-dark-950 cursor-pointer block"
            >
              {/* HTML5 Looping Background Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 filter brightness-90 group-hover:brightness-95 transition-all duration-300"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>

              {/* Cinematic Dark Grid Masks */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-dark-950/30 z-10 pointer-events-none" />
              
              {/* Instagram Logo Watermark at Top Right */}
              <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white">
                <InstagramIcon size={14} />
              </div>

              {/* View on Instagram Center Overlay Button */}
              <div className="absolute inset-0 bg-brand-red/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center gap-2">
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-red shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
                <span className="font-display font-black tracking-widest text-[10px] text-white uppercase mt-1">
                  View Reel
                </span>
              </div>

              {/* Left & Bottom Caption Panel */}
              <div className="absolute bottom-4 left-4 right-14 z-20 space-y-2 pointer-events-none group-hover:translate-y-[-2px] transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-display font-black tracking-widest text-light uppercase truncate">
                    @tfhq_bhopal
                  </span>
                  <span className="w-1 h-1 rounded-full bg-brand-red animate-pulse"></span>
                  <span className="text-[8px] font-sans text-brand-gold uppercase font-bold">
                    Live
                  </span>
                </div>
                <p className="text-[9px] font-sans text-light/95 leading-normal line-clamp-2">
                  {reel.caption}
                </p>
              </div>

              {/* Right Side Stats Panel (Likes, Comments, Share) */}
              <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-5 items-center text-center text-white pointer-events-none">
                
                {/* Hearts / Likes */}
                <div className="space-y-1">
                  <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/5 flex items-center justify-center text-light group-hover:text-brand-red transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </span>
                  <span className="text-[9px] font-display font-black tracking-wide">{reel.likes}</span>
                </div>

                {/* Comments */}
                <div className="space-y-1">
                  <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/5 flex items-center justify-center text-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <span className="text-[9px] font-display font-black tracking-wide">{reel.comments}</span>
                </div>

              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
