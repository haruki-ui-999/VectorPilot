import { Play } from "lucide-react";

export default function VideoTour() {
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-4">
              See VectorPilot in action
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
              60-second tour of auto-generating and syncing API clients
            </p>
          </div>

          {/* Video Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#1F2937] to-[#111827] flex items-center justify-center relative">
                {/* Play Button */}
                <button className="group">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-200">
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </div>
                </button>

                {/* Video Embed */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="VectorPilot Product Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                ></iframe>

                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    Live Demo
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-6 right-6 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                  1:00
                </div>
              </div>
            </div>

            {/* Video Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="font-semibold text-[#111827] dark:text-white mb-1">
                  Import OpenAPI spec
                </h4>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  Point to any OpenAPI 3.0+ spec file
                </p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="font-semibold text-[#111827] dark:text-white mb-1">
                  Generate clients
                </h4>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  Auto-create TypeScript, Python, Go clients
                </p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="font-semibold text-[#111827] dark:text-white mb-1">
                  Stay in sync
                </h4>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  Automatic updates across all repos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}