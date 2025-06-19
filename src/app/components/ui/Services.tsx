import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Server, Smartphone, Globe, Terminal, Cloud } from "lucide-react";
import Button from "./Button";

interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  description: string;
  features: string[];
}

interface ServicesProps {
  isVisible?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isVisible = false }) => {
  const [activeService, setActiveService] = useState<string>("backend");
  const [progress, setProgress] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number>(0);

  // Memoized services data to prevent unnecessary re-renders
  const services: Record<string, Service> = useMemo(
    () => ({
      backend: {
        id: "backend",
        title: "Backend Development",
        icon: Server,
        color: "from-slate-800 to-slate-900",
        description: "Robust server-side solutions with Node.js and Express.js",
        features: [
          "RESTful API Development",
          "Database Integration",
          "Authentication Systems",
          "Real-time Applications",
          "Microservices Architecture",
        ],
      },
      mobile: {
        id: "mobile",
        title: "Mobile Development",
        icon: Smartphone,
        color: "from-slate-900 to-black",
        description: "Cross-platform mobile apps with Flutter and React Native",
        features: [
          "iOS & Android Apps",
          "Cross-platform Development",
          "Native Performance",
          "Push Notifications",
          "App Store Deployment",
        ],
      },
      web: {
        id: "web",
        title: "Web Development",
        icon: Globe,
        color: "from-slate-700 to-slate-800",
        description: "Modern web applications with React and responsive design",
        features: [
          "React Applications",
          "Responsive Design",
          "Progressive Web Apps",
          "Single Page Applications",
          "Modern UI/UX",
        ],
      },
      express: {
        id: "express",
        title: "Express.js",
        icon: Terminal,
        color: "from-slate-800 to-slate-900",
        description: "Fast and minimalist web framework for Node.js",
        features: [
          "Middleware Integration",
          "Routing Solutions",
          "Template Engines",
          "Error Handling",
          "Security Features",
        ],
      },
      devops: {
        id: "devops",
        title: "DevOps",
        icon: Cloud,
        color: "from-slate-900 to-black",
        description: "CI/CD pipelines, containerization, and cloud deployment",
        features: [
          "Docker Containerization",
          "CI/CD Pipelines",
          "Cloud Deployment",
          "Infrastructure Automation",
          "Monitoring & Logging",
        ],
      },
    }),
    []
  );

  const navItems: Service[] = useMemo(
    () => Object.values(services),
    [services]
  );
  const currentService: Service = services[activeService];
  const currentIndex: number = navItems.findIndex(
    (service) => service.id === activeService
  );

  // Mobile detection with debounced resize handler
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };

    checkMobile();
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Visibility animations with mobile considerations
  useEffect(() => {
    if (isVisible) {
      setIsNavbarVisible(true);
      setTimeout(() => setIsContentVisible(true), isMobile ? 300 : 500);
    }
  }, [isVisible, isMobile]);

  // Auto-play with mobile-optimized intervals
  useEffect(() => {
    if (!isAutoPlaying || !isContentVisible) return;

    const interval = isMobile ? 200 : 150; // Slower on mobile for better performance
    const progressStep = isMobile ? 2 : 1.5; // Faster progress on mobile

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const nextIndex = (currentIndex + 1) % navItems.length;
          setActiveService(navItems[nextIndex].id);
          return 0;
        }
        return prev + progressStep;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, [currentIndex, navItems, isAutoPlaying, isContentVisible, isMobile]);

  // Optimized service click handler
  const handleServiceClick = useCallback(
    (serviceId: string): void => {
      setActiveService(serviceId);
      setProgress(0);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), isMobile ? 8000 : 10000);
    },
    [isMobile]
  );

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!isMobile) return;

      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        // Minimum swipe distance
        if (diff > 0 && currentIndex < navItems.length - 1) {
          // Swipe left - next service
          handleServiceClick(navItems[currentIndex + 1].id);
        } else if (diff < 0 && currentIndex > 0) {
          // Swipe right - previous service
          handleServiceClick(navItems[currentIndex - 1].id);
        }
      }
    },
    [currentIndex, handleServiceClick, isMobile, navItems, touchStartX]
  );

  // Auto-play toggle handler
  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Mobile-First Navigation Bar */}
      <nav
        className={`backdrop-blur-2xl bg-black/20 border-b border-white/5 sticky top-0  transition-all duration-700 ease-out ${
          isNavbarVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Mobile: Horizontal scrollable nav */}
            <div
              className={`flex ${
                isMobile
                  ? "overflow-x-auto scrollbar-hide space-x-2 pb-2"
                  : "space-x-2 gap-2"
              } w-full`}
            >
              {navItems.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = activeService === service.id;
                const isCurrentlyProgressing = isActive && isAutoPlaying;

                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className={`relative flex items-center space-x-2 md:space-x-3 px-3 md:px-6 lg:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl transition-all duration-500 ease-out transform overflow-hidden backdrop-blur-xl border flex-shrink-0 ${
                      isActive
                        ? "bg-slate-900/40 text-white shadow-2xl border-white/20 scale-105"
                        : "hover:bg-slate-800/30 text-slate-400 hover:text-white hover:scale-102 border-white/5 hover:border-white/10"
                    } ${isMobile ? "min-w-max" : ""}`}
                    style={{
                      transform: isNavbarVisible
                        ? `translateX(0) ${
                            isActive ? "scale(1.05)" : "scale(1)"
                          }`
                        : `translateX(-50px)`,
                      opacity: isNavbarVisible ? 1 : 0,
                    }}
                  >
                    {/* Progress Bar Fill - Mobile optimized */}
                    {isCurrentlyProgressing && (
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-black/80 rounded-xl md:rounded-2xl transition-all duration-100 ease-linear origin-left backdrop-blur-sm"
                        style={{
                          transform: `scaleX(${progress / 100 + 0.05})`,
                          transformOrigin: "left",
                        }}
                      />
                    )}

                    {/* Button Content - Responsive sizing */}
                    <div className="relative z-10 flex items-center space-x-2 md:space-x-3">
                      <IconComponent
                        size={isMobile ? 16 : 20}
                        className="transition-transform duration-500"
                      />
                      <span
                        className={`font-medium transition-all duration-500 ${
                          isMobile ? "text-sm" : "hidden sm:inline"
                        }`}
                      >
                        {isMobile ? service.title.split(" ")[0] : service.title}
                      </span>
                    </div>

                    {/* Active State Overlay */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm animate-pulse border border-white/10" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Content Area - Mobile optimized */}
      <div
        className="max-w-7xl mx-auto px-3 md:px-6 bg-gradient-to-t from-black to-gray-950/80 py-6 md:py-12"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`relative overflow-hidden border border-white/10 rounded-2xl md:rounded-4xl transition-all duration-700 ease-out backdrop-blur-2xl bg-black/20 ${
            isContentVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div key={activeService} className="transition-opacity duration-700">
            <div className="bg-slate-900/20 backdrop-blur-3xl rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/5">
              {/* Header section - Mobile responsive */}
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-8 md:mb-12">
                <div
                  className={`w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br ${currentService.color} flex items-center justify-center shadow-2xl transition-all duration-500 backdrop-blur-sm border border-white/10 flex-shrink-0`}
                >
                  <currentService.icon
                    size={isMobile ? 32 : 48}
                    className="text-white"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg leading-tight">
                    {currentService.title}
                  </h2>
                  <p className="text-base md:text-xl text-slate-300 leading-relaxed">
                    {currentService.description}
                  </p>
                </div>
              </div>

              {/* Features grid - Mobile optimized */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {currentService.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="bg-slate-800/20 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 hover:bg-slate-700/20 transition-all duration-500 shadow-xl hover:shadow-2xl"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r ${currentService.color} shadow-lg flex-shrink-0`}
                      />
                      <h3 className="text-base md:text-lg font-semibold text-white leading-tight">
                        {feature}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button - Mobile optimized */}
              <div className="mt-12 md:mt-16 text-center">
                <Button
                  label={`Get Started${
                    isMobile ? "" : ` with ${currentService.title}`
                  }`}
                  position="center"
                  link="/contact"
                  paddingX={isMobile ? "px-6" : "px-8"}
                  paddingY={isMobile ? "py-3" : "py-4"}
                  color="custom"
                  customColor="bg-slate-800/40 hover:bg-slate-700/60 text-sm md:text-base"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Controls - Mobile optimized */}
        <div className="mt-6 md:mt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={toggleAutoPlay}
              className="text-slate-400 hover:text-white transition-colors duration-500 text-xs md:text-sm backdrop-blur-sm bg-black/20 px-3 md:px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 touch-manipulation"
            >
              {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
            </button>

            {/* Progress indicators */}
            <div className="flex space-x-2 bg-black/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg border border-white/10">
              {navItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(navItems[index].id)}
                  className="touch-manipulation p-1"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? "bg-white shadow-lg"
                        : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile swipe hint */}
            {isMobile && (
              <p className="text-xs text-slate-500 mt-2">
                Swipe left/right to navigate
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Services;
