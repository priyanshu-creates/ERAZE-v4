// Import Link component from Next.js for navigation
import Link from "next/link";

// Product page component showcasing the AssetAtlas product
export default function ProductPage() {
  // Define features data for the product features section
  // These are the key features of the AssetAtlas product
  const features = [
    {
      title: "Real-Time Asset Insights",
      description: "Obtain instant visibility into your assets and technologies. Monitor your technology coverage across assets. Determine the trustworthiness of your assets data"
    },
    {
      title: "Assets never sleep",
      description: "Track historical events and asset changes. Get notified of any variation or anomalies across your asset inventory landscape"
    },
    {
      title: "Dynamic, On-Demand Reporting",
      description: "Access a wide range of pre-defined reports on critical areas like endpoint security and compliance or take advantage of the option to craft bespoke reports that align with your unique requirements"
    }
  ];

  // Define benefits data for the product benefits section
  // These are the key benefits users get from the AssetAtlas product
  const benefits = [
    {
      id: "1.0",
      title: "Security incident",
      description: "Boost your security incident investigations by gaining full visibility into your asset landscape"
    },
    {
      id: "2.0",
      title: "Instant Compliance",
      description: "Minimize time to inventory, secure, and comply"
    },
    {
      id: "3.0",
      title: "Know it all, secure it all",
      description: "AI-Powered Data Precision - Experience unparalleled asset data accuracy with AssetAtlas's AI-driven reconciliation, categorization, and enrichment"
    }
  ];

  // Main component render function
  return (
    // Main container with minimum height to fill the screen
    <div className="min-h-screen">
      {/* Hero Section - Introduction to the AssetAtlas product */}
      <section className="relative py-20 md:py-32 overflow-hidden min-h-[100vh] flex items-center">
        {/* Content container with maximum width and padding */}
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          {/* Centered content with maximum width */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Product tagline */}
            <p className="tagline mb-2">[ o u r p r o d u c t ]</p>
            {/* Product title */}
            <h1 className="mb-4">
              AssetAtlas
            </h1>
            {/* Product description */}
            <p className="text-[clamp(24px,3vw,48px)] font-normal text-[#FFFFFF] leading-[1.2] mb-8">
              Reduce your attack surface, eliminate shadow IT, and stay compliant with a comprehensive, unified view of your digital assets
            </p>
            {/* Call-to-action button linking to contact page */}
            <Link 
              href="/contact"
              className="btn-primary"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Key features of the AssetAtlas product */}
      <section className="py-20">
        {/* Content container */}
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Features grid layout with three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map through features array to create feature cards */}
            {features.map((feature, index) => (
              // Feature card with styling and hover effects
              <div key={index} className="text-center p-6 card hover:border-[rgba(141,255,79,0.3)]">
                {/* Feature title */}
                <h3 className="mb-4">
                  {feature.title}
                </h3>
                {/* Feature description */}
                <p className="text-default">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Key benefits of the AssetAtlas product */}
      <section className="py-20">
        {/* Content container */}
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Benefits grid layout with three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map through benefits array to create benefit cards */}
            {benefits.map((benefit) => (
              // Benefit card with styling and hover effects
              <div key={benefit.id} className="card card-hover min-h-[400px]">
                {/* Benefit ID tag */}
                <p className="tagline mb-2">[ {benefit.id} ]</p>
                {/* Benefit title */}
                <h3 className="mb-4">
                  {benefit.title}
                </h3>
                {/* Benefit description */}
                <p className="text-default">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}