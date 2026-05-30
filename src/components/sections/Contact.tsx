"use client";

import React from "react";
import { siteConfig } from "@/data/site.config";
import { LeadForm } from "../ui/LeadForm";
import { MapPinIcon, PhoneIcon, ClockIcon } from "../ui/Icons";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative z-20 py-24 bg-dark-950 overflow-hidden">
      {/* Spotlight overlay */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-brand-gold/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-display font-black tracking-widest text-brand-red uppercase mb-3">
            Join the HQ
          </h2>
          <p className="text-3xl sm:text-5xl font-display font-black text-light uppercase tracking-tight mb-4">
            Connect & Visit
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-6"></div>
          <p className="text-sm font-sans text-muted">
            Ready to experience Central India's biggest fitness floor? Give us a call, drop by at Polytechnic Square, or submit the trial form to secure your free workout pass.
          </p>
        </div>

        {/* Dual Column Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Map + Info (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Info Cards Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Address Card */}
              <div className="glass-light p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-dark-900 border border-white/5 flex items-center justify-center text-brand-red">
                  <MapPinIcon size={16} />
                </div>
                <h4 className="font-display font-black text-xs text-light uppercase tracking-wider">Address</h4>
                <p className="text-[10px] font-sans text-muted leading-tight">
                  {siteConfig.contact.address}
                </p>
              </div>

              {/* Click-to-Call Phone Lines */}
              <div className="glass-light p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-dark-900 border border-white/5 flex items-center justify-center text-brand-red">
                  <PhoneIcon size={16} />
                </div>
                <h4 className="font-display font-black text-xs text-light uppercase tracking-wider">Call Directly</h4>
                <div className="flex flex-col gap-1.5">
                  {siteConfig.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-[11px] font-sans text-light hover:text-brand-red font-bold transition-colors leading-none"
                    >
                      +91 {phone.slice(0, 5)} {phone.slice(5)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Timings Card */}
              <div className="glass-light p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-dark-900 border border-white/5 flex items-center justify-center text-brand-red">
                  <ClockIcon size={16} />
                </div>
                <h4 className="font-display font-black text-xs text-light uppercase tracking-wider">Timings</h4>
                <div className="text-[10px] font-sans text-muted leading-tight space-y-1">
                  <p><span className="text-light font-bold">Mon - Sat:</span><br />5:30 AM - 10:00 PM</p>
                  <p><span className="text-light font-bold">Sun:</span><br />7:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="flex-1 w-full min-h-[300px] rounded-2xl overflow-hidden border border-white/5 shadow-inner relative bg-dark-900">
              <iframe
                title="TFHQ Google Map"
                src={siteConfig.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(10%) brightness(95%) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Lead Form Card (5 columns) */}
          <div className="lg:col-span-5 flex self-stretch">
            <div className="glass-premium w-full p-8 sm:p-10 rounded-3xl border-2 border-brand-red flex flex-col justify-center relative shadow-[0_10px_30px_rgba(225,29,42,0.1)]">
              {/* Soft decorative glow overlay */}
              <div className="absolute inset-0 bg-red-glow pointer-events-none rounded-3xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="font-display font-black text-2xl text-light uppercase tracking-tight text-glow-red">
                    Book Free VIP Trial
                  </h3>
                  <p className="text-xs font-sans text-muted leading-tight">
                    Get an all-inclusive 1-Day workout pass and full amenities tour.
                  </p>
                </div>
                <div className="h-[1px] w-full bg-white/5"></div>
                <LeadForm buttonText="Activate Free Trial Pass" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
