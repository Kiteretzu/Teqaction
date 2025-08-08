import {
  ArrowRight,
  Cloud,
  Globe,
  Server,
  Smartphone,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";

interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  features: string[];
  color: string;
}

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: "backend",
      title: "Backend Development",
      icon: Server,
      description:
        "Robust server-side solutions with Node.js, Express.js, and modern frameworks that power your business growth",
      features: [
        "Scalable API Architecture",
        "Database Integration & Optimization",
        "Secure Authentication Systems",
        "Real-time Data Processing",
        "Microservices Architecture",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: Smartphone,
      description:
        "Cross-platform mobile applications with Flutter and React Native for seamless iOS and Android experiences",
      features: [
        "Cross-Platform Development",
        "Native Performance Optimization",
        "Intuitive User Interfaces",
        "Push Notifications & Analytics",
        "App Store Deployment",
      ],
      color: "from-red-500 to-pink-500",
    },
    {
      id: "web",
      title: "Web Development",
      icon: Globe,
      description:
        "Modern web applications with React, Vue, and responsive design that deliver exceptional user experiences",
      features: [
        "Responsive Web Design",
        "Modern Framework Integration",
        "Cross-Browser Compatibility",
        "Performance Optimization",
        "SEO & Analytics Integration",
      ],
      color: "from-orange-400 to-orange-600",
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      icon: Cloud,
      description:
        "Scalable cloud infrastructure with AWS, Azure, and Google Cloud for enterprise-grade applications",
      features: [
        "Multi-Cloud Deployment",
        "Serverless Architecture",
        "Container Orchestration",
        "Auto-scaling Solutions",
        "Global Content Delivery",
      ],
      color: "from-amber-500 to-orange-500",
    },
  ];

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

  return (
    <section
      id="services-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20"
    >
      {/* top blur */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10 pointer-events-none">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-48 h-10 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 blur-xl opacity-70" />
      </div>
      
      ;{/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-3/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>
      <div className="relative z-20 container mx-auto px-6 ">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white block mb-2 drop-shadow-2xl tracking-tight">
              Fueling
            </span>
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent bg-300% animate-gradient drop-shadow-2xl">
              Business Growth
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            We partner with ambitious brands to{" "}
            <span className="text-orange-400 font-semibold">fuel growth</span>{" "}
            and deliver{" "}
            <span className="text-orange-300 font-semibold">
              measurable results
            </span>{" "}
            through innovative technology and tailored solutions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                className={`group relative transition-all duration-700 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } ${isHovered ? "scale-105 z-10" : "hover:scale-105"}`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  transitionDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background with Glass Effect */}
                <div className="relative h-full bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
                  {/* Animated Border Glow */}
                  <div
                    className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                      isHovered
                        ? `bg-gradient-to-r ${service.color} p-[2px]`
                        : "bg-gradient-to-r from-orange-500/20 to-red-500/20 p-[1px]"
                    }`}
                  >
                    <div className="h-full w-full rounded-3xl bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header with Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`relative p-4 rounded-2xl bg-gradient-to-r ${
                          service.color
                        } transform transition-all duration-300 ${
                          isHovered
                            ? "rotate-6 scale-110"
                            : "group-hover:rotate-3 group-hover:scale-105"
                        }`}
                      >
                        <IconComponent
                          size={28}
                          className="text-white drop-shadow-lg"
                        />

                        {/* Icon Glow Effect */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                            service.color
                          } opacity-0 blur-lg transition-opacity duration-300 ${
                            isHovered ? "opacity-70" : "group-hover:opacity-50"
                          }`}
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                      {service.description}
                    </p>

                    {/* Features List with Enhanced Styling */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                            isHovered
                              ? "text-gray-200 translate-x-2"
                              : "text-gray-400 group-hover:text-gray-300"
                          }`}
                          style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                        >
                          <div className="relative">
                            <Zap
                              size={14}
                              className={`transition-all duration-300 ${
                                isHovered
                                  ? "text-orange-400"
                                  : "text-orange-500/70"
                              }`}
                            />
                            {isHovered && (
                              <div className="absolute inset-0 text-orange-400 blur-sm animate-pulse" />
                            )}
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <button
                        className={`group/btn relative overflow-hidden rounded-2xl font-semibold transition-all duration-500 flex items-center gap-3 w-full justify-center py-4 px-6 ${
                          isHovered
                            ? `bg-gradient-to-r ${service.color} text-white shadow-2xl`
                            : "bg-white/10 backdrop-blur-sm border border-orange-400/30 text-white hover:bg-white/20 hover:border-orange-300/50"
                        }`}
                      >
                        <span className="relative z-10 transition-all duration-300">
                          {isHovered ? "Get Started" : "Learn More"}
                        </span>
                        <ArrowRight
                          size={18}
                          className={`relative z-10 transition-all duration-300 ${
                            isHovered
                              ? "translate-x-1 scale-110"
                              : "group-hover/btn:translate-x-1"
                          }`}
                        />

                        {/* Button Glow Effect */}
                        {isHovered && (
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 blur-lg animate-pulse`}
                          />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Floating Particles Effect */}
                  {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 3) * 20}%`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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
      `}</style>
    </section>
  );
};

export default Services;
