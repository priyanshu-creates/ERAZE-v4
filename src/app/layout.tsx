// Import necessary modules from Next.js
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DualHeader from "@/app/components/DualHeader";
import Link from 'next/link';
import Footer from "@/app/components/Footer";
import ParticleField from "@/app/components/ParticleField";
import DownloadButton from "@/app/components/DownloadButton";

// Configure Geist font for the application
// Geist is a variable font that provides excellent readability
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Geist Mono font for monospace text
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for the application
// This includes the title and description that appear in browser tabs and search results
export const metadata: Metadata = {
  title: "E-RAZE | Cyberpunk Cybersecurity",
  description: "Cyberpunk-Style Cybersecurity Solutions",
};

// Root layout component that wraps all pages
// This component defines the overall structure of the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML element with language set to English
    <html lang="en">
      {/* Body with dark theme background and font settings */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0F0A] text-white min-h-screen flex flex-col font-sans`}
      >
        {/* Particle field background */}
        <ParticleField />
        {/* E-RAZE Dual Header with scroll-triggered navigation */}
        <DualHeader />
        {/* Notification Banner Container - without the DOWNLOAD button */}
        <div className="mt-[86px] mb-6 mx-4 sm:mx-8 lg:mx-[39px] h-10 sm:h-[45px] lg:h-[51px] bg-[rgba(127,226,0,0.9)] flex items-center justify-between px-[15px] z-[110]">
          {/* Left "E" Element - Replaced with SVG */}
          <img 
            src="/left-blackgk.svg" 
            alt="E" 
            className="h-6 sm:h-7 lg:h-8 w-auto"
          />
          
          {/* Right "E" Element - Replaced with SVG */}
          <img 
            src="/right-blackgk.svg" 
            alt="E" 
            className="h-6 sm:h-7 lg:h-8 w-auto"
          />
        </div>
        <DownloadButton />
        {/* Main content area with no padding since header is transparent and at top */}
        <main className="flex-grow relative z-[110]">
          {children}
        </main>
        {/* Footer component with site information and links */}
        <Footer />
      </body>
    </html>
  );
}
