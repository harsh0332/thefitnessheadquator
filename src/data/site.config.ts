export interface ServiceItem {
  name: string;
  description: string;
  category: 'training' | 'amenity';
}

export interface PricingTier {
  name: string;
  price: string; // e.g. "[EDIT PRICE]"
  duration: string;
  popular: boolean;
  features: string[];
}

export interface TrainerItem {
  name: string;
  specialty: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "The Fitness Headquarters",
  shortName: "TFHQ",
  established: "6+ Years",
  tagline: "Central India's Biggest Gym — all amenities under one roof",
  taglineSecondary: "Premium luxury, cinematic environment, and world-class equipment in the heart of Bhopal.",
  
  contact: {
    address: "Leela Heights, Professor's Colony, Near Polytechnic Square, Bhopal, Madhya Pradesh 462001",
    phones: ["8827209990", "9977555806", "6262400020"],
    primaryPhone: "8827209990",
    primaryWhatsApp: "8827209990",
    instagram: "@the_fitness_headquarters_",
    instagramUrl: "https://www.instagram.com/the_fitness_headquarters_/",
    mapEmbedUrl: "https://maps.google.com/maps?q=The%20Fitness%20Headquarters%2C%20Polytechnic%20Square%2C%20Bhopal&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },

  stats: [
    { label: "Active Members", value: "8,000+", desc: "Strong Community" },
    { label: "Years of Trust", value: "6+", desc: "Legacy of Fitness" },
    { label: "Certified Coaches", value: "25+", desc: "Elite Guidance" },
    { label: "FITPASS Partner", value: "Official", desc: "Global Access" }
  ],

  valueProps: [
    {
      title: "Biggest Floor in Central India",
      description: "An expansive, ultra-spacious luxury layout that ensures you never have to wait for machines or feel cramped during peak hours."
    },
    {
      title: "World-Class Equipment",
      description: "Equipped with state-of-the-art bio-mechanical strength machinery, professional Olympic lifting stations, and high-performance cardio suites."
    },
    {
      title: "All Amenities Under One Roof",
      description: "From luxury steam rooms and rejuvenating spa therapy to cupping therapies and an in-house health cafe — we cover every wellness angle."
    },
    {
      title: "Elite Certified Coaches",
      description: "Get trained by Bhopal's top fitness professionals specializing in fat loss, athletic conditioning, muscle gain, and injury rehabilitation."
    }
  ],

  services: [
    // Core training programs
    { name: "Weight Training", description: "State-of-the-art resistance machinery and premium free weights.", category: "training" },
    { name: "Cardio Suite", description: "High-performance treadmills, ellipticals, and simulated stairs.", category: "training" },
    { name: "CrossFit Zone", description: "Dedicated combat-style conditioning turf for high-intensity work.", category: "training" },
    { name: "Functional Training", description: "Kettlebells, battle ropes, and custom suspension platforms.", category: "training" },
    { name: "Zumba Classes", description: "High-energy dance-fitness sessions with certified instructors.", category: "training" },
    { name: "Power Yoga", description: "Dynamic Vinyasa sequences focused on strength, core, and flexibility.", category: "training" },
    { name: "Dance Classes", description: "Expressive aerobic dance routines that boost cardiovascular health.", category: "training" },
    { name: "Aerobics Studio", description: "Group endurance routines targeting fat burning and stamina.", category: "training" },
    { name: "Spinning Arena", description: "Immersive group cycling with dynamic simulated tracks and lighting.", category: "training" },
    
    // Luxury Amenities
    { name: "Luxury Spa", description: "Premium massage suites for rapid athletic recovery and stress relief.", category: "amenity" },
    { name: "Steam Room", description: "Deep tissue detox and post-workout respiratory rejuvenation.", category: "amenity" },
    { name: "Cupping Therapy", description: "Traditional vacuum-release recovery to alleviate muscle tension.", category: "amenity" },
    { name: "Valet Parking", description: "Hassle-free parking at our central premium Bhopal location.", category: "amenity" },
    { name: "Locker Facility", description: "Spacious, highly secure biometric lockers for your peace of mind.", category: "amenity" },
    { name: "Body Composition Analysis", description: "Advanced bio-electrical impedance tracking for precise health metrics.", category: "amenity" },
    { name: "Muscle Cafe", description: "In-house nutrient-rich kitchen serving high-protein shakes and dietary meals.", category: "amenity" }
  ] as ServiceItem[],

  programs: [
    {
      title: "Strength & Hypertrophy",
      duration: "Elite Coaching",
      description: "A targeted resistance program designed to maximize lean muscle mass, correct postural issues, and safely build raw structural power.",
      features: ["Customized Split Layouts", "Form Correction Audits", "Body Composition Tracking"]
    },
    {
      title: "Active Fat Loss",
      duration: "Rapid Conditioning",
      description: "Combines intense cardiovascular drills, high-metabolism weight schemes, and macro planning to melt fat while retaining tone.",
      features: ["Personalized Heart-Rate Tracking", "In-house Cafe Meal Plans", "Weekly Measurement Audits"]
    },
    {
      title: "Functional & CrossFit",
      duration: "Athletic Performance",
      description: "Olympic lifting, dynamic turf drills, core conditioning, and gymnastics that build an athletic, high-endurance body structure.",
      features: ["High-Intensity WODs", "Agility Turf Access", "Kettlebell & Rope Drills"]
    },
    {
      title: "Group Energy Studio",
      duration: "Holistic Health",
      description: "Immersive group sessions including Zumba, Power Yoga, Aerobics, and Spinning that combine social energy with premium fitness.",
      features: ["Flexible Class Calendars", "Certified Lead Instructors", "Dynamic Sound & Lighting"]
    }
  ],

  trainers: [
    {
      name: "Coach Rohit Sharma",
      specialty: "Head Coach & Functional Training Specialist",
      image: "/images/trainer-1.jpg"
    },
    {
      name: "Coach Priya Patel",
      specialty: "Zumba Lead & High-Intensity Cardio Expert",
      image: "/images/trainer-2.jpg"
    },
    {
      name: "Coach Amit Singh",
      specialty: "Olympic Weightlifting & Hypertrophy Trainer",
      image: "/images/trainer-3.jpg"
    },
    {
      name: "Coach Sarah Khan",
      specialty: "Power Yoga Guru & Flexibility Therapist",
      image: "/images/trainer-4.jpg"
    }
  ] as TrainerItem[],

  community: {
    eventTitle: "TFH Premier League",
    eventDesc: "Our highly-anticipated annual in-house fitness competition. Members team up and battle in multi-discipline physical challenges to secure the coveted championship trophy. It is more than a competition — it's the heart of Bhopal's elite fitness community.",
    eventImage: "/images/premier-league.jpg",
    igFeed: [
      { id: 1, image: "/images/ig-1.jpg" },
      { id: 2, image: "/images/ig-2.jpg" },
      { id: 3, image: "/images/ig-3.jpg" },
      { id: 4, image: "/images/ig-4.jpg" },
      { id: 5, image: "/images/ig-5.jpg" },
      { id: 6, image: "/images/ig-6.jpg" }
    ]
  },

  pricing: [
    {
      name: "Monthly Elite Trial",
      price: "[EDIT PRICE]",
      duration: "Per Month",
      popular: false,
      features: [
        "Full Access to 15,000 Sq. Ft. Floor",
        "Introductory Fitness Assessment",
        "Access to Steam Room",
        "Free Valet Parking",
        "Standard Locker Access"
      ]
    },
    {
      name: "Quarterly Premium Club",
      price: "[EDIT PRICE]",
      duration: "3 Months",
      popular: true,
      features: [
        "Everything in Monthly Trial",
        "2 Complimentary Body Composition Analyses",
        "Unlimited Group Classes (Zumba, Yoga, Spin)",
        "FITPASS Partner Perks",
        "Cupping & Spa Discount Vouchers",
        "Dedicated Mobile Support Access"
      ]
    },
    {
      name: "Annual Diamond Sanctuary",
      price: "[EDIT PRICE]",
      duration: "12 Months",
      popular: false,
      features: [
        "Everything in Quarterly Premium",
        "Bi-Monthly Custom Training Review",
        "Personal Locker Allocation (Subject to availability)",
        "In-house Muscle Cafe Dining Vouchers",
        "Priority Booking for Community Events",
        "Complimentary Guest passes (2 per month)"
      ]
    }
  ] as PricingTier[],

  testimonials: [
    {
      name: "Vikram Malhotra",
      role: "Bhopal Business Owner (Active Member 3+ Years)",
      quote: "TFHQ has completely redefined what a luxury gym means in Central India. The floor is massive, I never have to wait for equipment, and the steam rooms feel like a 5-star hotel spa. A class apart.",
      rating: 5,
      image: "/images/review-avatar-3.jpg"
    },
    {
      name: "Anjali Deshmukh",
      role: "IT Professional (Member 18 Months)",
      quote: "The group studio environment is electrifying! The spinning studio's sound and lighting make workouts feel like a concert. Plus, being an official FITPASS partner makes access incredibly flexible.",
      rating: 5,
      image: "/images/review-avatar-2.jpg"
    },
    {
      name: "Dr. Sandeep Verma",
      role: "Orthopedic Surgeon (Member 4+ Years)",
      quote: "As a medical professional, I am highly critical of form and trainer expertise. The coaches at TFHQ are genuinely knowledgeable, and the high-end bio-mechanical equipment ensures joints are fully protected.",
      rating: 5,
      image: "/images/review-avatar-1.jpg"
    }
  ] as TestimonialItem[],

  faqs: [
    {
      question: "What makes TFHQ Central India's biggest gym?",
      answer: "With over 15,000 square feet of open premium floor space, specialized zones for Olympic weight training, a dedicated CrossFit turf, isolated group class studios, and recovery amenities, TFHQ offers Bhopal's largest luxury fitness infrastructure under a single roof."
    },
    {
      question: "Are there dedicated lockers and changing rooms?",
      answer: "Yes, we provide state-of-the-art secure changing lockers, pristine premium showers, luxury toiletries, and dedicated steam suites separated fully for ladies and gentlemen."
    },
    {
      question: "Can I access TFHQ using my FITPASS membership?",
      answer: "Absolutely! TFHQ is a proud and verified Official FITPASS Partner. FITPASS members can scan our custom check-in code at the front desk to access our facilities based on their plan terms."
    },
    {
      question: "What is the TFH Premier League?",
      answer: "It is our exclusive annual in-house fitness competition. Designed as a team-based sport, it invites members of all fitness levels to compete in athletic drills, functional trials, and strength events, fostering a highly supportive and electric gym community."
    },
    {
      question: "Is there support for beginners?",
      answer: "Definitely! Every new membership package includes a complimentary full-body composition analysis and dedicated orientation sessions with our senior coaches to introduce you safely to all machines and formulate an initial plan."
    },
    {
      question: "How does the WhatsApp Lead Form work?",
      answer: "When you select a plan or click 'Book a Free Trial', our website compiles your booking details, name, and goal, then directly opens a pre-composed, direct WhatsApp chat with our front-desk team. There is zero signup hassle or email delays!"
    }
  ] as FAQItem[]
};
