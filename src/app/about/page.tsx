// About page component with company information
export default function AboutPage() {
  // Main component render function
  return (
    // Main container with minimum height to fill the screen
    <div className="min-h-screen">
      {/* Hero Section - Introduction to the company */}
      <section className="relative py-20 md:py-32 overflow-hidden min-h-[100vh] flex items-center">
        {/* Content container with maximum width and padding */}
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          {/* Centered content with maximum width */}
          <div className="text-center max-w-3xl mx-auto">
            {/* About tagline */}
            <p className="tagline mb-2">[ a b o u t u s ]</p>
            {/* Company title */}
            <h1 className="mb-4">
              About DOTDNA
            </h1>
            {/* Company description */}
            <p className="text-[clamp(24px,3vw,48px)] font-normal text-[#FFFFFF] leading-[1.2] mb-8">
              We are a boutique cyber security company
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - Detailed company information */}
      <section className="py-20">
        {/* Content container */}
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Centered content with maximum width */}
          <div className="max-w-4xl mx-auto">
            {/* Company description paragraph */}
            <p className="text-default mb-8">
              At DOTDNA, our expertise extends across diverse sectors such as manufacturing, finance, healthcare, and energy, meticulously addressing the distinct security requirements of each industry.
            </p>
            
            {/* Features grid with three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
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
        </div>
      </section>
    </div>
  );
}