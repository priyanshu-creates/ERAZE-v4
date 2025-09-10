// Import necessary modules from Next.js and other libraries
import Link from "next/link";
import Image from "next/image";

// Home page component - the main landing page of the website
export default function Home() {
  // Define services data for the services section
  // Each service has an ID, title, description, and link to the service page
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
      {/* Hero Section - Reduced height by 194px from full viewport height */}
      <section className="relative overflow-visible min-h-[calc(100vh-194px)] z-0" id="hero">
        {/* Custom Bordered Rectangle Element - Fixed at bottom of hero section with proper white borders */}
        <div 
          className="absolute left-0 right-0 mx-auto z-[60]"
          style={{ 
            width: 'calc(100vw - 2 * clamp(20px, 3vw, 39px))',
            height: 'clamp(85px, 12vw, 140px)', // Updated to use clamp for responsive height
            borderTop: 'clamp(2px, 1.5vw, 11px) solid #ffffff',
            borderBottom: 'clamp(2px, 1.5vw, 11px) solid #ffffff',
            borderLeft: '0px solid transparent',
            borderRight: '0px solid transparent',
            boxSizing: 'border-box',
            backgroundColor: 'transparent !important',
            background: 'transparent !important',
            backgroundImage: 'none !important',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            isolation: 'isolate',
            opacity: 1,
            position: 'relative', // Added for positioning context
            top: 'clamp(20rem, 25rem, 30rem)', // Move downward using responsive units
          }}
        >
          {/* Container for star symbol and "E -" text to ensure proper positioning */}
          <div style={{ 
            position: 'absolute', 
            left: 'clamp(35px, 7vw, 79px)', 
            top: '50%', 
            transform: 'translateY(-50%)',
            display: 'flex', 
            alignItems: 'center',
            maxWidth: 'calc(100% - clamp(70px, 14vw, 158px))', // Ensure content doesn't overflow
            overflow: 'hidden'
          }}>
            {/* Star Symbol */}
            <div 
              style={{
                fontSize: 'clamp(50px, 8vw, 110px)',
                color: '#ffffff',
                lineHeight: '1',
                backgroundColor: '#0a0a0a'
              }}
            >
              ✧
            </div>
            
            {/* "E -" Text - Positioned exactly 49px to the right of the star icon */}
            <div
              style={{
                fontSize: 'clamp(90px, 12vw, 145px)', // Make font size responsive
                color: '#ffffff',
                fontFamily: 'Nebula Regular, Arial, sans-serif',
                lineHeight: '1',
                marginLeft: 'clamp(20px, 3vw, 49px)', // Responsive spacing
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              E &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RAZE
            </div>
          </div>
          
          {/* Tagline - Centered horizontally and vertically with stacked text */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(10px, 1.5vw, 14px)', // Responsive font size
              fontWeight: '500', // Helvetica Neue 65 Medium equivalent
              color: '#ffffff',
              textAlign: 'center',
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              maxWidth: '60%', // Limit width to prevent overflow
              whiteSpace: 'nowrap'
            }}
          >
            <div>PERMANENT DELETION.</div>
            <div>MAXIMUM SECURITY.</div>
            <div>PRESERVED HARDWARE.</div>
          </div>
        </div>
        
        {/* Container with responsive margin from left and right sides of viewport */}
        <div 
          className="absolute flex flex-col z-[112]"
          style={{ 
            width: 'calc(100vw - 78px)', // 78px = 39px margin on each side
            height: 'auto',
            left: 'clamp(40px, 5.5vw, 63px)', // Responsive left positioning: 16px (mobile) + 24px = 40px, 39px (desktop) + 24px = 63px
            top: '-94.5px', // Moved up by 119px total (62px + 57px) from original position (24.5px - 119px = -94.5px)
            transform: 'translate(2.0625rem, 1.875rem) scale(1.1)', // Move right by 2.0625rem (33px), down by 1.875rem (30px total), and scale up by 10% using responsive units
          }}
        >
          {/* Hero SVG Image - Positioned above all other elements with maximum z-index */}
          <Image 
            src="/hero.svg" 
            alt="Hero Background" 
            className="relative w-full" // Changed to responsive width
            style={{
              maxWidth: '100%',
              height: 'auto',
              aspectRatio: '1235/535.94', // Maintain aspect ratio
              width: 'clamp(90%, 77.19rem, 77.19rem)', // Responsive width from 90% to 77.19rem (1235px)
            }}
            width={1235}
            height={536}
          />
        </div>
      </section>

      {/* All other content moved above footer */}
      <div className="relative z-10">
        {/* Services Section - Showcase of main services */}
        <section id="services" className="py-20 mt-20">
          {/* Content container */}
          <div className="max-w-[1440px] mx-auto px-6">
            {/* Section header with centered text */}
            <div className="text-center mb-16">
              {/* Services tagline */}
              <p className="tagline mb-2">[ s e r v i c e s ]</p>
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

        {/* AssetAtlas Section - Product promotion area */}
        <section className="py-20">
          {/* Content container */}
          <div className="max-w-[1440px] mx-auto px-6">
            {/* Centered content */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* AssetAtlas tagline */}
              <p className="tagline mb-2">[ A s s e t A t l a s ]</p>
              {/* Product description */}
              <p className="text-default mb-8">
                AssetAtlas continuously identify assets, streamline operations, enrich investigations, and uncover compliance gaps.
              </p>
              {/* Call-to-action button linking to contact page */}
              <Link 
                href="https://dotdna.io/contact"
                className="btn-primary"
              >
                Start a Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* About Section - Company information */}
        <section className="py-20">
          {/* Content container */}
          <div className="max-w-[1440px] mx-auto px-6">
            {/* Section header with centered text */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* Section title with accent color */}
              <h2 className="mb-4">
                We are <span className="text-[#8DFF4F]">a boutique cyber security company</span>
              </h2>
              {/* Section description */}
              <p className="text-default mb-12">
                At DOTDNA, our expertise extends across diverse sectors such as manufacturing, finance, healthcare, and energy, meticulously addressing the distinct security requirements of each industry
              </p>
            </div>

            {/* Features grid with three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 - Experience */}
              <div className="text-center p-6 card hover:border-[rgba(141,255,79,0.3)]">
                <p className="tagline mb-2">[ 01 ]</p>
                <h3 className="mb-4">We have experience</h3>
                <p className="text-default">
                  Drawing from years of experience, our team has been instrumental in defending numerous businesses and their crucial assets from the ever-evolving landscape of cyber threats.
                </p>
              </div>
              {/* Feature 2 - Customized Solutions */}
              <div className="text-center p-6 card hover:border-[rgba(141,255,79,0.3)]">
                <p className="tagline mb-2">[ 02 ]</p>
                <h3 className="mb-4">We offer customized solutions</h3>
                <p className="text-default">
                  Recognizing that each business confronts its unique challenges, we offer customized cybersecurity solutions tailored to your specific demands.
                </p>
              </div>
              {/* Feature 3 - Up-to-date */}
              <div className="text-center p-6 card hover:border-[rgba(141,255,79,0.3)]">
                <p className="tagline mb-2">[ 03 ]</p>
                <h3 className="mb-4">We stay up-to-date</h3>
                <p className="text-default">
                  In the dynamic world of cybersecurity, our focus is on staying ahead of the curve with the newest threats and technologies, ensuring your business remains safeguarded.
                </p>
              </div>
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
                Whether you have questions, seek expert guidance, or need immediate assistance, we&#39;re only a click away
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
    </div>
  );
}