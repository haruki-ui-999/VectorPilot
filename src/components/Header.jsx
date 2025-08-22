import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <header
        className="bg-white dark:bg-[#1E1E1E] h-16 px-6 border-b border-[#E5E7EB] dark:border-[#374151]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-[#111827] dark:text-white font-semibold text-lg">
              VectorPilot
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors duration-150 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#5B5BD6] text-white font-medium text-sm rounded-lg transition-colors duration-150">
              Contact Sales
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#6B7280] dark:text-[#9CA3AF]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-[#1E1E1E]">
            <nav className="px-6 py-4 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors duration-150 font-medium text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full px-4 py-2 bg-[#6366F1] hover:bg-[#5B5BD6] text-white font-medium text-sm rounded-lg transition-colors duration-150 mt-4">
                Contact Sales
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}