import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What programming languages are supported?",
      answer: "VectorPilot currently supports TypeScript/JavaScript (Node.js and Browser), Python (3.7+), Go (1.18+), Java (Spring Boot), and C# (.NET 6+). We're actively adding support for Rust, Ruby, and PHP. Custom language support is available for enterprise customers."
    },
    {
      question: "How does VectorPilot work with monorepos?",
      answer: "VectorPilot has first-class monorepo support. You can configure different client languages and destinations within the same repository, manage multiple OpenAPI specs, and use custom build scripts. It integrates seamlessly with tools like Nx, Rush, and Lerna."
    },
    {
      question: "What's included in the enterprise license?",
      answer: "Enterprise licenses include unlimited API client generation, all supported languages, priority support with SLA guarantees, on-premise deployment options, custom integrations, audit logs, and dedicated customer success management. Pricing is based on team size and usage volume."
    },
    {
      question: "Can I use VectorPilot with private OpenAPI specs?",
      answer: "Yes, VectorPilot supports private and internal OpenAPI specifications. You can point to local files, private Git repositories, or internal URLs. All data transmission is encrypted and we only require read-only access to your specs."
    },
    {
      question: "How does API drift detection work?",
      answer: "VectorPilot continuously monitors your OpenAPI specs for changes. When breaking changes are detected, it automatically generates updated clients and can create pull requests with the changes. You receive notifications about potential impacts before they reach production."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required. During the trial, you can generate clients for up to 3 repositories and 2 OpenAPI specs to evaluate the platform."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section
        className="py-16 md:py-24 px-6 bg-[#F9FAFB] dark:bg-[#1A1A1A]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[800px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
              Common questions about VectorPilot's features, setup, and pricing
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] border border-[#E5E7EB] dark:border-[#374151] rounded-lg overflow-hidden"
              >
                {/* Question */}
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#F9FAFB] dark:hover:bg-[#262626] transition-colors duration-150"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-[#111827] dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#6B7280] dark:text-[#9CA3AF] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-[#E5E7EB] dark:border-[#374151]">
                    <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Support */}
          <div className="text-center mt-12">
            <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-4">
              Still have questions?
            </p>
            <button className="px-6 py-3 bg-[#6366F1] hover:bg-[#5B5BD6] text-white font-semibold rounded-lg transition-colors duration-150">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </>
  );
}