import { Clock, Shield, Rocket } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "80% faster integration development",
      description: "Auto-generated clients eliminate manual SDK writing and reduce integration time from weeks to hours."
    },
    {
      icon: Shield,
      title: "Zero API drift incidents",
      description: "Automatic sync detection prevents breaking changes from reaching production. No more surprise 500s."
    },
    {
      icon: Rocket,
      title: "Deploy with confidence",
      description: "Type-safe clients and automated testing ensure integrations work before they hit production."
    }
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
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-4">
              Stop fighting API drift
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
              Engineering teams waste weeks maintaining brittle integrations. VectorPilot eliminates the pain.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#EEF2FF] dark:bg-[#1E1B3A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-[#6366F1]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}