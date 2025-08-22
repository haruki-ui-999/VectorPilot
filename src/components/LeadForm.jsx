import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobRoles = [
    { value: "engineering-manager", label: "Engineering Manager" },
    { value: "platform-team", label: "Platform Team Lead" },
    { value: "staff-engineer", label: "Staff Engineer" },
    { value: "architect", label: "Solutions Architect" },
    { value: "other", label: "Other" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !role) return;

    setIsSubmitting(true);
    
    // Simulate Zapier webhook
    try {
      await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role })
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting lead:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <section
          className="py-16 md:py-24 px-6 bg-[#6366F1] text-white"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          id="contact"
        >
          <div className="max-w-[600px] mx-auto text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ArrowRight size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thanks for your interest!</h2>
            <p className="text-lg opacity-90">
              We'll be in touch within 24 hours to discuss how VectorPilot can help your team.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section
        className="py-16 md:py-24 px-6 bg-[#6366F1] text-white"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        id="contact"
      >
        <div className="max-w-[600px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to eliminate API drift?
            </h2>
            <p className="text-lg opacity-90">
              Join engineering teams already shipping integrations faster with VectorPilot.
            </p>
          </div>

          {/* Lead Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Job Role Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-2 opacity-90">
                Your role
              </label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent appearance-none"
                  required
                >
                  <option value="" disabled className="text-gray-900">
                    Select your role
                  </option>
                  {jobRoles.map((jobRole) => (
                    <option key={jobRole.value} value={jobRole.value} className="text-gray-900">
                      {jobRole.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={20}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white opacity-60 pointer-events-none"
                />
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-medium mb-2 opacity-90">
                Work email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !email || !role}
              className="w-full px-6 py-3 bg-white text-[#6366F1] font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-[#6366F1] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Get Early Access
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-sm opacity-70 text-center">
              No account creation required. We'll send details directly to your CRM.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}