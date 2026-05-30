import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyTFHQ } from "@/components/sections/WhyTFHQ";
import { Services } from "@/components/sections/Services";
import { Transformations } from "@/components/sections/Transformations";
import { Programs } from "@/components/sections/Programs";
import { Trainers } from "@/components/sections/Trainers";
import { Community } from "@/components/sections/Community";
import { Pricing } from "@/components/sections/Pricing";
import { FITPASSCallout } from "@/components/sections/FITPASSCallout";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky top headers */}
      <Navbar />

      {/* Main Page Body Content Sections */}
      <main className="flex-1">
        {/* Section 1: Option 1 Cinematic Hero */}
        <Hero />

        {/* Section 2: Stat Counters Trust Bar */}
        <TrustBar />

        {/* Section 3: Brand Advantage Value Props */}
        <WhyTFHQ />

        {/* Section 4: Interactive Training and Amenities Grid */}
        <Services />

        {/* Section 5: Dynamic Before/After Transformations Slider */}
        <Transformations />

        {/* Section 6: Muscle & Conditioning Programs */}
        <Programs />

        {/* Section 7: Certified Team & Coaches */}
        <Trainers />

        {/* Section 8: culture, events, and Instagram mosaic */}
        <Community />

        {/* Section 9: Membership Tier grids */}
        <Pricing />

        {/* Section 10: FITPASS Affiliate Callout banner */}
        <FITPASSCallout />

        {/* Section 11: Member Reviews & Testimonials */}
        <Testimonials />

        {/* Section 12: common Accordion FAQs */}
        <FAQ />

        {/* Section 13: Map, directions, phone metrics, and WhatsApp LeadForm */}
        <Contact />
      </main>

      {/* Primary corporate footer */}
      <Footer />
    </div>
  );
}
