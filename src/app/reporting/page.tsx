// Import Link component from Next.js for navigation
import Link from "next/link";

// Reporting service page component
export default function ReportingPage() {
  // Define services data for the related services section
  // This shows other services the company offers
  const services = [
    {
      id: "1.0",
      title: "Detection and Response",
      description: "We amplify your threat visibility and employ automated incident response to safeguard your resources, standing, and activities.",
      href: "/detection",
    },
    {
      id: "2.0",
      title: "Offensive Security",
      description: "We specialize in penetration testing and collaborative cross-team operations, creating realistic threat simulations to fine-tune and amplify cybersecurity defenses.",
      href: "/offensive",
    },
    {
      id: "3.0",
      title: "Reporting and Analytics",
      description: "Today's digital landscape requires more than just monitoring isolated metrics; it demands a holistic, unified view of your entire cybersecurity posture.",
      href: "/reporting",
    },
    {
      id: "4.0",
      title: "Advisory Services",
      description: "We provide expert guidance on best practices and strategies to strengthen an organization's cyber defenses and resilience.",
      href: "/advisory",
    },
    {
      id: "5.0",
      title: "NIS2",
      description: "Navigate the journey to NIS2 compliance with our expert services, guiding organizations to achieve high cybersecurity standards.",
      href: "/NIS2",
    },
  ];

  // Main component render function
  return (
    // Main container with minimum height to fill the screen
    <div className="min-h-screen">
      {/* Hero Section - Introduction to the Reporting service */}
      <section className="relative py-20 md:py-32 overflow-hidden matrix-bg min-h-[100vh] flex items-center">
        {/* Content container with maximum width and padding */}
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          {/* Centered content with maximum width */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Service tagline */}
            <p className="text-sm text-[#666666] mb-2 uppercase tracking-[0.1em]">[ o u r s e r v i c e s ]</p>
            {/* Service title */}
            <h1 className="text-[clamp(32px,5vw,64px)] font-normal text-[#FFFFFF] leading-[1.1] mb-4">
              Reporting and Analytics
            </h1>
            {/* Service description */}
            <p className="text-[clamp(24px,3vw,48px)] font-normal text-[#FFFFFF] leading-[1.2] mb-8">
              Today&#39;s digital landscape requires more than just monitoring isolated metrics; it demands a holistic, unified view of your entire cybersecurity posture.
            </p>
          </div>
        </div>
      </section>

      {/* More Services Section - Showcase of other services offered */}
      <section className="py-20">
        {/* Content container */}
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Section header with centered text */}
          <div className="text-center mb-16">
            {/* Section tagline */}
            <p className="text-sm text-[#666666] mb-2 uppercase tracking-[0.1em]">[ m o r e s e r v i c e s ]</p>
            {/* Section title with accent color */}
            <h2 className="text-[clamp(24px,3vw,48px)] font-normal text-[#FFFFFF] leading-[1.2] mb-4">
              Tailored digital security <span className="text-[#7FFF00]">solutions</span>
            </h2>
          </div>

          {/* Services grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map through services array to create service cards */}
            {services.map((service) => (
              // Link component for navigation to service page
              <Link 
                key={service.id}
                href={service.href}
                // Service card styling with hover effects
                className="bg-[rgba(31,41,55,0.3)] backdrop-blur-sm border border-[rgba(127,255,0,0.2)] rounded-[24px] p-10 min-h-[400px] transition-all duration-300 card-hover"
              >
                {/* Service ID tag */}
                <p className="text-sm text-[#666666] mb-2 uppercase tracking-[0.1em]">[ [ {service.id} ] ]</p>
                {/* Service title */}
                <h3 className="text-[clamp(24px,3vw,48px)] font-normal text-[#FFFFFF] leading-[1.2] mb-4">
                  {service.title}
                </h3>
                {/* Service description */}
                <p className="text-base font-light text-[#B3B3B3] leading-[1.6]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Final call-to-action */}
      <section className="py-20">
        {/* Content container */}
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Centered content */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Section title with accent color */}
            <h2 className="text-[clamp(24px,3vw,48px)] font-normal text-[#FFFFFF] leading-[1.2] mb-4">
              Contact us Today <span className="text-[#7FFF00]">solutions</span>
            </h2>
            {/* Section description */}
            <p className="text-base font-light text-[#B3B3B3] leading-[1.6] mb-8">
              Whether you have questions, seek expert guidance, or need immediate assistance, we&#39;re only a click away
            </p>
            {/* Contact button linking to contact page */}
            <Link 
              href="/contact"
              // Primary button with hover effects
              className="inline-block bg-[#7FFF00] text-[#0D0D0D] px-8 py-4 rounded-[50px] font-medium hover:bg-[#39FF14] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(127,255,0,0.3)]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}