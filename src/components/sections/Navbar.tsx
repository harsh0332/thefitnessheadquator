"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site.config";
import { PhoneIcon, WhatsAppIcon, MenuIcon, CloseIcon } from "../ui/Icons";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Why TFHQ", href: "#why-tfhq" },
    { label: "Amenities", href: "#services" },
    { label: "Results", href: "#transformations" },
    { label: "Programs", href: "#programs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <>
      {/* Main Sticky Top Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-950/80 backdrop-blur-md border-b border-white/10 shadow-lg py-4"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-display font-black text-2xl tracking-tighter text-light group-hover:text-brand-red transition-colors duration-300">
              TF<span className="text-brand-red group-hover:text-light transition-colors duration-300">HQ</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-display font-black tracking-widest text-muted hover:text-brand-red uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call-to-action button desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-5 py-2.5 bg-brand-red hover:bg-brand-red/90 text-light font-display font-black tracking-widest text-xs uppercase rounded-lg overflow-hidden group shadow-lg hover:shadow-brand-red/20 active:scale-[0.98] transition-all duration-200"
            >
              Book Trial
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-light hover:text-brand-red focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-dark-950/95 backdrop-blur-lg z-30 transition-all duration-300 lg:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xl font-display font-black tracking-widest text-light hover:text-brand-red uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="mt-4 px-8 py-3 bg-brand-red hover:bg-brand-red/90 text-light font-display font-black tracking-widest text-sm uppercase rounded-xl shadow-lg active:scale-95 transition-all"
          >
            Book Free Trial
          </a>
        </nav>
      </div>

      {/* Floating Sticky Bottom Bar for Mobile Devices */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-dark-900/90 backdrop-blur-md border-t border-white/10 p-3 flex items-center justify-between gap-3 z-30 shadow-[0_-5px_15px_rgba(0,0,0,0.4)]">
        <a
          href={`tel:${siteConfig.contact.primaryPhone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-dark-800 hover:bg-dark-700/80 border border-white/10 rounded-xl font-display font-black tracking-widest text-xs text-light uppercase transition-all duration-200 active:scale-95"
        >
          <PhoneIcon size={16} className="text-brand-red" />
          Call Us
        </a>
        <a
          href={`https://wa.me/91${siteConfig.contact.primaryWhatsApp}?text=${encodeURIComponent("Namaste TFHQ! I'd like to book a Free Trial session.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba5a] rounded-xl font-display font-black tracking-widest text-xs text-white uppercase shadow-lg transition-all duration-200 active:scale-95"
        >
          <WhatsAppIcon size={16} />
          WhatsApp
        </a>
      </div>
    </>
  );
};
