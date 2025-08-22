import { FileText, Cog, RefreshCw } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Import OpenAPI Spec",
      description:
        "Point VectorPilot to your OpenAPI 3.0+ specification file or URL.",
    },
    {
      number: "2",
      icon: Cog,
      title: "Generate Clients",
      description:
        "Auto-generate type-safe API clients for TypeScript, Python, Go, and more.",
    },
    {
      number: "3",
      icon: RefreshCw,
      title: "Stay Synchronized",
      description:
        "Automatic updates across all repositories when APIs change. Zero manual work.",
    },
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
        id="how-it-works"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-4">
              How it works
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
              Three simple steps to eliminate API drift and ship integrations
              faster
            </p>
          </div>

          {/* Steps Diagram */}
          <div className="relative">
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center relative">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                      <span className="text-white font-bold text-xl">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#EEF2FF] dark:bg-[#1E1B3A] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={24} className="text-[#6366F1]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed max-w-sm mx-auto">
                      {step.description}
                    </p>

                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-6 w-24 h-px bg-[#E5E7EB] dark:bg-[#374151] z-0"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Details */}
          <div className="mt-16 bg-[#F9FAFB] dark:bg-[#1A1A1A] rounded-xl p-8 border border-[#E5E7EB] dark:border-[#374151]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#111827] dark:text-white mb-3">
                  Supported Languages
                </h4>
                <ul className="text-[#6B7280] dark:text-[#9CA3AF] space-y-2 text-sm">
                  <li>• TypeScript/JavaScript (Node.js, Browser)</li>
                  <li>• Python (3.7+)</li>
                  <li>• Go (1.18+)</li>
                  <li>• Java (Spring Boot)</li>
                  <li>• C# (.NET 6+)</li>
                  <li>• More languages coming soon</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] dark:text-white mb-3">
                  Repository Support
                </h4>
                <ul className="text-[#6B7280] dark:text-[#9CA3AF] space-y-2 text-sm">
                  <li>• GitHub, GitLab, Bitbucket</li>
                  <li>• Monorepo and multi-repo setups</li>
                  <li>• Custom Git workflows</li>
                  <li>• Branch protection compatible</li>
                  <li>• PR/MR automated updates</li>
                  <li>• CI/CD pipeline integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
