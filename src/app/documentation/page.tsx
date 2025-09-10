// Documentation page component - blank for now
export default function Documentation() {
  return (
    // Main container with minimum height to fill the screen
    <div className="min-h-screen">
      {/* Hero Section - Introduction to documentation */}
      <section className="relative py-20 md:py-32 overflow-hidden min-h-[100vh] flex items-center">
        {/* Content container with maximum width and padding */}
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          {/* Centered content with maximum width */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Documentation tagline */}
            <p className="tagline mb-2">[ d o c u m e n t a t i o n ]</p>
            {/* Page title */}
            <h1 className="mb-4">
              Documentation
            </h1>
            {/* Placeholder text */}
            <p className="text-[clamp(24px,3vw,48px)] font-normal text-[#FFFFFF] leading-[1.2] mb-8">
              Documentation content will be added here
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - Documentation details */}
      <section className="py-20">
        {/* Content container */}
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Centered content with maximum width */}
          <div className="max-w-4xl mx-auto">
            {/* Placeholder paragraph */}
            <p className="text-default mb-8">
              This page is currently blank. Documentation content will be added here in the future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}