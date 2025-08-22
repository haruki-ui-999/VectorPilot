import { Check, X, AlertTriangle } from "lucide-react";

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Setup time",
      manual: "Days to weeks",
      codegen: "Hours",
      vectorpilot: "Minutes",
      manualIcon: "X",
      codegenIcon: "warning",
      vectorpilotIcon: "check"
    },
    {
      feature: "API drift detection",
      manual: "Manual monitoring",
      codegen: "None",
      vectorpilot: "Automatic",
      manualIcon: "warning",
      codegenIcon: "X",
      vectorpilotIcon: "check"
    },
    {
      feature: "Multi-repo sync",
      manual: "Manual updates",
      codegen: "Manual updates",
      vectorpilot: "Automatic",
      manualIcon: "X",
      codegenIcon: "X",
      vectorpilotIcon: "check"
    },
    {
      feature: "Type safety",
      manual: "Depends on dev",
      codegen: "Generated once",
      vectorpilot: "Always current",
      manualIcon: "warning",
      codegenIcon: "warning",
      vectorpilotIcon: "check"
    },
    {
      feature: "Maintenance effort",
      manual: "High",
      codegen: "Medium",
      vectorpilot: "Minimal",
      manualIcon: "X",
      codegenIcon: "warning",
      vectorpilotIcon: "check"
    },
    {
      feature: "Language support",
      manual: "Limited",
      codegen: "Single language",
      vectorpilot: "TypeScript, Python, Go+",
      manualIcon: "X",
      codegenIcon: "warning",
      vectorpilotIcon: "check"
    }
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case "check":
        return <Check size={16} className="text-[#10B981]" />;
      case "X":
        return <X size={16} className="text-[#EF4444]" />;
      case "warning":
        return <AlertTriangle size={16} className="text-[#F59E0B]" />;
      default:
        return null;
    }
  };

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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-4">
              Why VectorPilot wins
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
              Compare your current approach to VectorPilot's automated solution
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="bg-[#F9FAFB] dark:bg-[#1A1A1A] rounded-xl border border-[#E5E7EB] dark:border-[#374151] min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-6 border-b border-[#E5E7EB] dark:border-[#374151]">
                <div className="font-semibold text-[#111827] dark:text-white">Feature</div>
                <div className="text-center">
                  <div className="font-semibold text-[#111827] dark:text-white mb-1">Manual</div>
                  <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">Current approach</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-[#111827] dark:text-white mb-1">Codegen Scripts</div>
                  <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">One-time generation</div>
                </div>
                <div className="text-center bg-[#EEF2FF] dark:bg-[#1E1B3A] rounded-lg p-3 -m-3">
                  <div className="font-semibold text-[#6366F1] mb-1">VectorPilot</div>
                  <div className="text-sm text-[#6366F1] opacity-80">Automated solution</div>
                </div>
              </div>

              {/* Table Rows */}
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-6 border-b border-[#E5E7EB] dark:border-[#374151] last:border-b-0"
                >
                  <div className="font-medium text-[#111827] dark:text-white">
                    {row.feature}
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {getIcon(row.manualIcon)}
                      <span className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
                        {row.manual}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {getIcon(row.codegenIcon)}
                      <span className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
                        {row.codegen}
                      </span>
                    </div>
                  </div>
                  <div className="text-center bg-[#F0F9FF] dark:bg-[#1E3A8A] bg-opacity-50 rounded-lg p-3 -m-3">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {getIcon(row.vectorpilotIcon)}
                      <span className="text-[#6366F1] dark:text-[#A5B4FC] text-sm font-medium">
                        {row.vectorpilot}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-[#6366F1] hover:bg-[#5B5BD6] text-white font-semibold rounded-lg transition-colors duration-150">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>
    </>
  );
}