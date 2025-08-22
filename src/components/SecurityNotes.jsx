import { Shield, Lock, Eye } from "lucide-react";

export default function SecurityNotes() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Read-only Access",
      description: "VectorPilot only reads your OpenAPI specs. No write access to sensitive data or infrastructure."
    },
    {
      icon: Lock,
      title: "Token-based Auth", 
      description: "Secure token-based authentication with configurable permissions and automatic expiration."
    },
    {
      icon: Eye,
      title: "Audit Logs",
      description: "Complete audit trail of all spec reads and client generations for compliance and monitoring."
    }
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-4">
              Security & Permissions
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
              Enterprise-grade security with minimal permissions and complete transparency
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#EEF2FF] dark:bg-[#1E1B3A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-[#6366F1]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Security Information */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E5E7EB] dark:border-[#374151] p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
                  <Shield size={20} className="text-[#6366F1]" />
                  Minimal Permissions Required
                </h4>
                <ul className="text-[#6B7280] dark:text-[#9CA3AF] space-y-2 text-sm">
                  <li>• Read access to OpenAPI specification files only</li>
                  <li>• No database or infrastructure access required</li>
                  <li>• Optional PR/MR creation for client updates</li>
                  <li>• Configurable repository and branch restrictions</li>
                  <li>• Automatic token rotation and expiration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
                  <Lock size={20} className="text-[#6366F1]" />
                  Enterprise Compliance
                </h4>
                <ul className="text-[#6B7280] dark:text-[#9CA3AF] space-y-2 text-sm">
                  <li>• SOC 2 Type II compliant infrastructure</li>
                  <li>• GDPR and CCPA data protection standards</li>
                  <li>• End-to-end encryption for all data in transit</li>
                  <li>• Private cloud and on-premise options available</li>
                  <li>• Regular third-party security audits</li>
                </ul>
              </div>
            </div>

            {/* Token Setup Instructions */}
            <div className="mt-8 p-6 bg-[#F9FAFB] dark:bg-[#111827] rounded-lg">
              <h5 className="font-semibold text-[#111827] dark:text-white mb-3">
                Quick Token Setup
              </h5>
              <div className="bg-[#1F2937] rounded-lg p-4 font-mono text-sm text-[#D1D5DB] overflow-x-auto">
                <div className="text-[#10B981]"># Create read-only token with repo access</div>
                <div className="mt-1">vectorpilot auth setup --permissions read:specs,write:prs</div>
                <div className="mt-2 text-[#6B7280]"># Token expires in 90 days by default</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}