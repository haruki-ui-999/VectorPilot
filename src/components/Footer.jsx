export default function Footer() {
  const navigationLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
    { name: "Security", href: "#security" },
    { name: "Documentation", href: "#docs" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <footer
        className="bg-white dark:bg-[#1E1E1E] border-t border-[#E5E7EB] dark:border-[#374151] py-16 px-6"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-[#111827] dark:text-white font-semibold text-lg">
                  VectorPilot
                </span>
              </div>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed mb-6 max-w-md">
                Auto-generate API clients from OpenAPI specs and keep them in sync across repos.
                Ship integrations faster with zero API drift.
              </p>

              {/* Trust Statement */}
              <div className="bg-[#F9FAFB] dark:bg-[#111827] p-4 rounded-lg">
                <h4 className="font-semibold text-[#111827] dark:text-white mb-2 text-sm">
                  Enterprise Trust & Reliability
                </h4>
                <div className="grid grid-cols-3 gap-4 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  <div>
                    <div className="font-semibold text-[#6366F1]">99.9%</div>
                    <div>Uptime SLA</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[#6366F1]">&lt;2hr</div>
                    <div>Support Response</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[#6366F1]">SOC 2</div>
                    <div>Compliance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-[#111827] dark:text-white mb-6">
                Quick Links
              </h4>
              <nav className="grid grid-cols-2 gap-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors duration-150 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Support Info */}
              <div className="mt-8">
                <h5 className="font-semibold text-[#111827] dark:text-white mb-3 text-sm">
                  Enterprise Support
                </h5>
                <div className="space-y-2 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  <div>24/7 support for enterprise customers</div>
                  <div>Dedicated customer success manager</div>
                  <div>On-premise deployment available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#E5E7EB] dark:border-[#374151]">
            <div className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mb-4 md:mb-0">
              © 2024 VectorPilot. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors duration-150"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors duration-150"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors duration-150"
              >
                Status
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}