import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Fitness Headquarters (TFHQ) | Central India's Biggest Gym in Bhopal",
  description: "Experience Bhopal's premium luxury gym. 15,000+ sq ft floor, world-class equipment, steam, spa, cupping therapy, and certified coaches at Polytechnic Square, Bhopal.",
  keywords: ["gym in bhopal", "best gym in bhopal", "luxury fitness center bhopal", "tfhq bhopal", "biggest gym central india", "fitness headquarters bhopal", "crossfit bhopal", "spa and gym bhopal"],
  authors: [{ name: "The Fitness Headquarters" }],
  creator: "TFHQ Team",
  publisher: "The Fitness Headquarters",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#0B0B0D] text-[#F5F5F5] selection:bg-[#E11D2A] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
