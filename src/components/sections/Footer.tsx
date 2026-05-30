"use client";

import React from "react";
import { siteConfig } from "@/data/site.config";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "../ui/Icons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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

  return (
    <footer className="relative z-20 bg-dark-950 border-t border-white/5 pt-16 pb-24 lg:pb-8 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Logo & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display font-black text-2xl tracking-tighter text-light uppercase select-none">
              TF<span className="text-brand-red">HQ</span>
            </span>
            <p className="text-xs font-sans text-muted max-w-sm leading-relaxed">
              {siteConfig.name} — Central India's biggest gym. Elevating your mental & physical health splits with premium fitness and premium recovery options.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-900 border border-white/5 flex items-center justify-center text-muted hover:text-brand-red hover:border-brand-red/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:${siteConfig.contact.primaryPhone}`}
                className="w-9 h-9 rounded-lg bg-dark-900 border border-white/5 flex items-center justify-center text-muted hover:text-brand-red hover:border-brand-red/40 transition-all duration-300"
                aria-label="Phone"
              >
                <PhoneIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Navigation links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-black text-xs text-light uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-sans text-muted">
              <li>
                <a
                  href="#why-tfhq"
                  onClick={(e) => handleLinkClick(e, "#why-tfhq")}
                  className="hover:text-brand-red transition-colors"
                >
                  Why TFHQ
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="hover:text-brand-red transition-colors"
                >
                  Amenities & Facilities
                </a>
              </li>
              <li>
                <a
                  href="#transformations"
                  onClick={(e) => handleLinkClick(e, "#transformations")}
                  className="hover:text-brand-red transition-colors"
                >
                  Real Transformations
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleLinkClick(e, "#programs")}
                  className="hover:text-brand-red transition-colors"
                >
                  Elite Programs
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleLinkClick(e, "#pricing")}
                  className="hover:text-brand-red transition-colors"
                >
                  Membership Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Address & Contacts (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-black text-xs text-light uppercase tracking-widest">
              The Headquarters
            </h4>
            <div className="space-y-3 text-xs font-sans text-muted leading-relaxed">
              <p>{siteConfig.contact.address}</p>
              <div className="flex flex-col gap-1 pt-1">
                {siteConfig.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="hover:text-brand-red transition-colors font-bold text-light"
                  >
                    +91 {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-sans text-muted">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 uppercase font-display font-black tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
            Official FITPASS Gym Partner
          </p>
        </div>
      </div>

      {/* Floating Action WhatsApp Button (wa.me/918827209990) */}
      <a
        href={`https://wa.me/91${siteConfig.contact.primaryWhatsApp}?text=${encodeURIComponent("Namaste TFHQ! I'd like to book a Free Trial Session.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 lg:bottom-8 right-6 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_5px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_5px_25px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 z-30 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </footer>
  );
};
