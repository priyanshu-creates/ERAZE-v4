// Import Link component from Next.js for navigation
import Link from "next/link";

// Offensive Security service page component
export default function OffensivePage() {
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
      {/* Hero Section - Introduction to the Offensive Security service */}
      <section className="relative py-20 md:py-32 overflow-hidden min-h-[100vh] flex items-center">
        {/* Content container with maximum width and padding */}
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          {/* Centered content with maximum width */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Service tagline */}
            <p className="tagline mb-2">[ o u r s e r v i c e s ]</p>
            {/* Service title */}
            <h1 className="mb-4">
              Offensive Security
            </h1>
            {/* Service description */}
            <p className="text-[clamp(24px,3vw,48px)] font-normal text-[#FFFFFF] leading-[1.2] mb-8">
              We specialize in penetration testing and collaborative cross-team operations, creating realistic threat simulations to fine-tune and amplify cybersecurity defenses.
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
            <p className="tagline mb-2">[ m o r e s e r v i c e s ]</p>
            {/* Section title with accent color */}
            <h2 className="mb-4">
              Tailored digital security <span className="text-[#8DFF4F]">solutions</span>
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
                className="card card-hover min-h-[400px]"
              >
                {/* Service ID tag */}
                <p className="tagline mb-2">[ [ {service.id} ] ]</p>
                {/* Service title */}
                <h3 className="mb-4">
                  {service.title}
                </h3>
                {/* Service description */}
                <p className="text-default">
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
            <h2 className="mb-4">
              Contact us Today <span className="text-[#8DFF4F]">solutions</span>
            </h2>
            {/* Section description */}
            <p className="text-default mb-8">
              Whether you have questions, seek expert guidance, or need immediate assistance, we're only a click away
            </p>
            {/* Contact button linking to contact page */}
            <Link 
              href="/contact"
              className="btn-primary"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}