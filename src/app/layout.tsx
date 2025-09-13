// Import necessary modules from Next.js
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DualHeader from "@/app/components/DualHeader";
import Footer from "@/app/components/Footer";
import DownloadButton from "@/app/components/DownloadButton";
import NotificationBanner from "@/app/components/NotificationBanner";
import Preloader from "@/components/Preloader";
import ParticleFieldClient from "@/app/components/ParticleFieldClient";

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
  title: "E-RAZE",
  description: "Cybersecurity Solutions",
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
        <Preloader />
        {/* Particle field background - dynamically imported for better performance */}
        <ParticleFieldClient />
        {/* E-RAZE Dual Header with scroll-triggered navigation */}
        <DualHeader />
        {/* Notification Banner Container - without the DOWNLOAD button */}
        <NotificationBanner />
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