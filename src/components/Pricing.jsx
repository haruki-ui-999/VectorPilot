import { ArrowRight, Check } from "lucide-react";

export default function Pricing() {
  const features = [
    "Unlimited API client generation",
    "Multi-language support (TypeScript, Python, Go+)",
    "Automatic repository synchronization", 
    "Real-time API drift detection",
    "Enterprise security & compliance",
    "24/7 support & SLA guarantees"
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section
        className="py-16 md:py-24 px-6 bg-white dark:bg-[#121212]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        id="pricing"
      >
        <div className="max-w-[800px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-4">
              Enterprise pricing
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
              Custom solutions built for your team's scale and requirements
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
                Enterprise Plan
              </div>

              {/* Main Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Built for engineering teams
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-md mx-auto">
                Custom pricing based on team size, repositories, and integration volume
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 max-w-lg mx-auto">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-left">
                    <Check size={16} className="text-white flex-shrink-0" />
                    <span className="text-sm opacity-90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#6366F1] font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-150">
                Contact Sales
                <ArrowRight size={18} />
              </button>

              {/* Additional Info */}
              <div className="mt-6 space-y-2 text-sm opacity-80">
                <p>Free trial available • Setup in under 30 minutes</p>
                <p>Talk to our team about volume discounts and custom integrations</p>
              </div>
            </div>
          </div>

          {/* Additional Pricing Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-[#6366F1] mb-2">30 min</div>
              <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                Average setup time from first call to production
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-[#6366F1] mb-2">99.9%</div>
              <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                Uptime SLA with enterprise support
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-[#6366F1] mb-2">24/7</div>
              <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                Support available for all enterprise customers
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}