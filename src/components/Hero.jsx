import { Terminal, GitBranch, Zap } from "lucide-react";

export default function Hero() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#1A1A1A] dark:to-[#121212]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF2FF] dark:bg-[#1E1B3A] text-[#6366F1] dark:text-[#A5B4FC] text-sm font-medium rounded-full mb-6">
            <Terminal size={14} />
            CLI + Dashboard
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#111827] dark:text-white mb-6 leading-tight">
            Ship integrations faster.
            <br />
            <span className="text-[#6366F1]">No drift.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-[#6B7280] dark:text-[#9CA3AF] mb-8 max-w-2xl mx-auto leading-relaxed">
            Auto-generate API clients from OpenAPI specs and keep them in sync across repos. 
            Stop maintaining brittle integrations manually.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <button className="px-6 py-3 bg-[#6366F1] hover:bg-[#5B5BD6] text-white font-semibold rounded-lg transition-colors duration-150 flex items-center gap-2">
              <Terminal size={18} />
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-[#D1D5DB] dark:border-[#374151] text-[#374151] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white hover:border-[#9CA3AF] dark:hover:border-[#6B7280] font-medium rounded-lg transition-colors duration-150">
              View Demo
            </button>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            {/* Terminal Window Mockup */}
            <div className="bg-[#1F2937] rounded-lg shadow-2xl max-w-3xl mx-auto overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#374151] border-b border-[#4B5563]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#EF4444] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
                </div>
                <span className="text-[#D1D5DB] text-sm font-mono">vectorpilot</span>
                <div className="w-16"></div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-[#10B981]">$ vectorpilot generate</div>
                <div className="text-[#9CA3AF] mt-2">
                  ✓ Found OpenAPI spec at ./api/openapi.yaml<br />
                  ✓ Generated TypeScript client<br />
                  ✓ Updated 3 repositories<br />
                  ✓ All clients in sync
                </div>
                <div className="text-[#6366F1] mt-4">
                  🚀 Ready to ship integrations
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#10B981] rounded-lg flex items-center justify-center shadow-lg hidden md:flex">
              <GitBranch size={20} className="text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#6366F1] rounded-lg flex items-center justify-center shadow-lg hidden md:flex">
              <Zap size={20} className="text-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}