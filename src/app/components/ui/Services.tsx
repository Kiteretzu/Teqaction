"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Server,
  Smartphone,
  Globe,
  Cloud,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  MapPin,
  Skull,
  Eye,
  Zap,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  accentColor: string;
  description: string;
  features: string[];
}

const Button = ({
  label,
  variant = "primary",
  icon,
  onClick,
}: {
  label: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  const baseClasses =
    "group relative overflow-hidden rounded-full font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer";

  const variants = {
    primary:
      "px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105",
    secondary:
      "px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:border-white/50 hover:scale-105",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
      <span className="relative z-10">{label}</span>
      {icon && (
        <div className="relative z-10 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
      )}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState("backend");
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Services data with dark theme matching hero section
  const services = useMemo(
    () => ({
      backend: {
        id: "backend",
        title: "Shadow Architecture",
        icon: Server,
        color: "from-black via-gray-900 to-slate-900",
        accentColor: "from-red-500 to-orange-600",
        description:
          "Forge powerful server-side realms with Node.js and Express.js for applications that thrive in the darkness",
        features: [
          "Dark API Architectures",
          "Cryptic Database Integration",
          "Shadow Authentication",
          "Real-time Dark Channels",
          "Forbidden Microservices",
        ],
      },
      mobile: {
        id: "mobile",
        title: "Pocket Mysteries",
        icon: Smartphone,
        color: "from-black via-gray-900 to-slate-900",
        accentColor: "from-orange-500 to-red-600",
        description:
          "Cross-platform mobile portals with Flutter and React Native for iOS and Android exploration",
        features: [
          "Dual-Realm Apps",
          "Cross-Dimensional Development",
          "Native Dark Performance",
          "Whispered Notifications",
          "Forbidden Store Deployment",
        ],
      },
      web: {
        id: "web",
        title: "Web of Shadows",
        icon: Globe,
        color: "from-gray-900 via-black to-slate-900",
        accentColor: "from-red-600 to-orange-500",
        description:
          "Modern web applications with React and responsive design that adapt to all viewing portals",
        features: [
          "Responsive Dark Interfaces",
          "Modern Framework Mastery",
          "Cross-Browser Compatibility",
          "Performance Optimization",
          "SEO Dark Arts",
        ],
      },
      cloud: {
        id: "cloud",
        title: "Ethereal Infrastructure",
        icon: Cloud,
        color: "from-slate-900 via-gray-900 to-black",
        accentColor: "from-orange-600 to-red-500",
        description:
          "Scalable cloud solutions with AWS, Azure, and Google Cloud for applications that transcend dimensions",
        features: [
          "Multi-Cloud Deployment",
          "Serverless Functions",
          "Container Orchestration",
          "Auto-scaling Solutions",
          "Global Content Delivery",
        ],
      },
    }),
    []
  );

  const serviceKeys = Object.keys(services);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const currentIndex = serviceKeys.indexOf(activeService);
          const nextIndex = (currentIndex + 1) % serviceKeys.length;
          setActiveService(serviceKeys[nextIndex]);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeService, isAutoPlaying, serviceKeys]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleServiceClick = useCallback((serviceId: string) => {
    setActiveService(serviceId);
    setProgress(0);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
    setProgress(0);
  }, []);

  const currentService = services[activeService as keyof typeof services];

  return (
    <section
      id="services-section"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden"
    >
      {/* Floating Stars/Lights - matching hero section */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Aurora Effect - matching hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 via-orange-900/5 to-transparent animate-pulse opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-sm text-gray-300 mb-8">
            <Sparkles size={16} className="text-red-500" />
            <span className="font-medium">Dark Arts & Services</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white block mb-2">Unleash</span>
            <span className="bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent bg-300% animate-gradient">
              Digital Power
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness forbidden technologies and{" "}
            <span className="text-red-500 font-semibold">
              dark methodologies
            </span>{" "}
            to craft digital experiences that transcend ordinary boundaries
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Service Navigation */}
          <div
            className={`space-y-4 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            {Object.values(services).map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeService === service.id;
              const isHovered = hoveredService === service.id;

              return (
                <div
                  key={service.id}
                  className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer group overflow-hidden transform hover:scale-102 hover:-translate-y-1 ${
                    isActive
                      ? "bg-black/50 border-red-500/50 shadow-2xl shadow-red-500/20"
                      : "bg-black/20 border-gray-800/50 hover:bg-black/40 hover:border-gray-700/50"
                  }`}
                  onClick={() => handleServiceClick(service.id)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Progress Bar */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-600 transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  )}

                  {/* Glow Effect */}
                  {(isActive || isHovered) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-600/10 rounded-2xl" />
                  )}

                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 transform group-hover:rotate-6 group-hover:scale-110 ${
                        isActive
                          ? "bg-gradient-to-r from-red-500 to-orange-600"
                          : "bg-gray-800 group-hover:bg-gray-700"
                      }`}
                    >
                      <IconComponent
                        size={24}
                        className={isActive ? "text-white" : "text-gray-300"}
                      />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-200 group-hover:text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    <div
                      className={`transition-all duration-300 transform ${
                        isActive
                          ? "text-red-500 rotate-90"
                          : "text-gray-600 rotate-0"
                      }`}
                    >
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Auto-play Control */}
            <div className="flex items-center justify-center pt-4">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-black/50 border border-gray-800/50 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {isAutoPlaying ? (
                  <Pause size={16} className="text-red-500" />
                ) : (
                  <Play size={16} className="text-red-500" />
                )}
                <span className="text-sm font-medium">
                  {isAutoPlaying ? "Pause" : "Play"} Auto-rotation
                </span>
              </button>
            </div>
          </div>

          {/* Service Details */}
          <div
            className={`lg:sticky lg:top-8 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div
              key={activeService}
              className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 shadow-2xl transition-all duration-500"
            >
              {/* Service Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl transform hover:rotate-12 hover:scale-105 transition-all duration-300">
                  <currentService.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {currentService.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-600 rounded-full" />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {currentService.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Skull size={16} className="text-red-500" />
                  Dark Capabilities
                </h4>
                <div className="grid gap-3">
                  {currentService.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-gray-800/30 transform transition-all duration-300 hover:bg-black/40 hover:translate-x-2"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-full animate-pulse" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                label="Embrace the Darkness"
                variant="primary"
                icon={<Eye size={18} />}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;
