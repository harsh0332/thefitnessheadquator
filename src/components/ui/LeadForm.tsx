"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site.config";

interface LeadFormProps {
  defaultGoal?: string;
  buttonText?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  defaultGoal = "Weight Training & Strength",
  buttonText = "Book My Free Trial",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState(defaultGoal);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (num: string): boolean => {
    // Basic Indian phone number verification (10 digits, optional prefix of +91 or 91)
    const cleanNumber = num.replace(/\D/g, "");
    return cleanNumber.length === 10 || (cleanNumber.length === 12 && cleanNumber.startsWith("91"));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Format the WhatsApp message text
    const cleanPhone = phone.replace(/\D/g, "");
    const formattedPhone = cleanPhone.length === 12 ? cleanPhone.slice(2) : cleanPhone;

    const messageText = `Namaste TFHQ! 🙏\n\nI would like to book a *Free Trial Session* at your gym. Here are my details:\n\n👤 *Name:* ${name.trim()}\n📞 *Phone:* ${formattedPhone}\n🎯 *Fitness Goal:* ${goal}\n\nLooking forward to scheduling my session! 💪`;

    // Construct the WhatsApp link
    const whatsappUrl = `https://wa.me/91${siteConfig.contact.primaryWhatsApp}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      // Reset form on success
      setName("");
      setPhone("");
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      <div>
        <label htmlFor="name" className="block text-xs font-display font-black tracking-widest text-muted uppercase mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Rahul Sharma"
          className={`w-full px-4 py-3 bg-dark-900 border ${
            errors.name ? "border-brand-red/60 focus:ring-brand-red/30" : "border-white/10 focus:ring-brand-red/20"
          } rounded-xl text-light placeholder-muted/40 focus:outline-none focus:border-brand-red focus:ring-4 transition-all duration-300`}
        />
        {errors.name && <p className="text-brand-red text-xs mt-1 font-sans">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-display font-black tracking-widest text-muted uppercase mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. 88272 09990"
          className={`w-full px-4 py-3 bg-dark-900 border ${
            errors.phone ? "border-brand-red/60 focus:ring-brand-red/30" : "border-white/10 focus:ring-brand-red/20"
          } rounded-xl text-light placeholder-muted/40 focus:outline-none focus:border-brand-red focus:ring-4 transition-all duration-300`}
        />
        {errors.phone && <p className="text-brand-red text-xs mt-1 font-sans">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="goal" className="block text-xs font-display font-black tracking-widest text-muted uppercase mb-2">
          Fitness Goal
        </label>
        <select
          id="goal"
          name="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-light focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/20 transition-all duration-300 appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23A1A1AA' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: "right 1rem center",
            backgroundSize: "1.5rem",
            backgroundRepeat: "no-repeat",
            paddingRight: "2.5rem",
          }}
        >
          <option value="Weight Training & Strength">Weight Training & Strength</option>
          <option value="Active Fat Loss & Toning">Active Fat Loss & Toning</option>
          <option value="CrossFit & Athletic Drill">CrossFit & Athletic Drill</option>
          <option value="Zumba & Cardio Studio">Zumba & Cardio Studio</option>
          <option value="Power Yoga & Stretching">Power Yoga & Stretching</option>
          <option value="General Wellness & Recovery">General Wellness & Recovery</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full py-4 bg-brand-red text-light font-display font-black tracking-widest text-sm uppercase rounded-xl overflow-hidden group shadow-lg hover:shadow-brand-red/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
      >
        {/* Button hover slide-in glare */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        <span className="relative flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Redirecting...
            </>
          ) : (
            buttonText
          )}
        </span>
      </button>

      <p className="text-[10px] text-center text-muted font-sans mt-2">
        ⚡ Form submits directly to WhatsApp. Zero data tracking, 100% secure.
      </p>
    </form>
  );
};
