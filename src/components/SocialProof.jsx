export default function SocialProof() {
  const testimonials = [
    {
      quote: "VectorPilot saved us 3 weeks of dev work and eliminated our API drift incidents completely.",
      author: "Sarah Chen",
      title: "Platform Lead",
      company: "TechFlow"
    },
    {
      quote: "Auto-syncing across repos was a game changer—no more manually updating 12 different clients.",
      author: "Marcus Rodriguez", 
      title: "Staff Engineer",
      company: "DataSync Pro"
    },
    {
      quote: "Type safety with zero maintenance overhead—exactly what our team needed for rapid scaling.",
      author: "Emily Parker",
      title: "Engineering Manager", 
      company: "CloudScale"
    }
  ];

  const partnerLogos = [
    { name: "Stripe", url: "https://www.create.xyz/images/logoipsum/245" },
    { name: "Shopify", url: "https://www.create.xyz/images/logoipsum/246" },
    { name: "Twilio", url: "https://www.create.xyz/images/logoipsum/247" },
    { name: "GitHub", url: "https://www.create.xyz/images/logoipsum/248" },
    { name: "Docker", url: "https://www.create.xyz/images/logoipsum/249" },
    { name: "MongoDB", url: "https://www.create.xyz/images/logoipsum/250" }
  ];

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
        <div className="max-w-[1200px] mx-auto">
          {/* Partner Logos */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF] mb-8 uppercase tracking-wide">
              Trusted by design partners
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-4">
              Engineering teams love VectorPilot
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
              Join teams that ship integrations faster with zero API drift
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl border border-[#E5E7EB] dark:border-[#374151] shadow-sm"
              >
                {/* Quote */}
                <blockquote className="text-[#111827] dark:text-white mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#6366F1] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] dark:text-white text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}