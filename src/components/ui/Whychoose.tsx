"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  Globe,
  Shield,
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Skull,
  Eye,
  Sparkles,
} from "lucide-react";

// Dark themed content matching the Services section
const webServicesContent = [
  {
    title: "Forbidden Web Mastery",
    description:
      "Craft scalable, responsive web applications using shadowy technologies and cryptic best practices that transcend ordinary boundaries.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="text-center text-white relative z-10">
          <Code className="w-24 h-24 mx-auto mb-4 text-red-500" />
          <h3 className="text-3xl font-bold mb-2">Web Architecture</h3>
          <p className="text-red-200">Born from Shadow Code</p>
        </div>
      </div>
    ),
    features: [
      "React & Next.js Mastery",
      "Shadow-Responsive Design",
      "Dark SEO Optimization",
      "Lightning-Fast Loading",
    ],
    icon: Code,
  },
  {
    title: "Cross-Dimensional Apps",
    description:
      "Forge high-performance mobile portals for iOS and Android using forbidden frameworks with native-like dark power.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-black via-slate-900 to-orange-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-transparent to-black/40" />
        <div className="text-center text-white relative z-10">
          <Globe className="w-24 h-24 mx-auto mb-4 text-orange-500" />
          <h3 className="text-3xl font-bold mb-2">Cross-Platform</h3>
          <p className="text-orange-200">Dual-Realm Dominion</p>
        </div>
      </div>
    ),
    features: [
      "React Native Sorcery",
      "Flutter Dark Arts",
      "UI/UX Shadow Optimization",
      "Forbidden API Integration",
    ],
    icon: Globe,
  },
  {
    title: "Cryptic Security Fortress",
    description:
      "Shield your digital realm with impenetrable security measures and compliance standards forged in the depths of cyber protection.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-black via-gray-900 to-red-800 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-red-500/30 rounded-full animate-ping" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-red-500/50 rounded-full animate-ping animation-delay-75" />
        </div>
        <div className="text-center text-white relative z-10">
          <Shield className="w-24 h-24 mx-auto mb-4 text-red-500" />
          <h3 className="text-3xl font-bold mb-2">Dark Shield</h3>
          <p className="text-red-200">Impenetrable Defense</p>
        </div>
      </div>
    ),
    features: [
      "Shadow SSL Certificates",
      "Cryptic Data Encryption",
      "Deep Security Audits",
      "GDPR Dark Compliance",
    ],
    icon: Shield,
  },
  {
    title: "Ethereal Cloud Dominion",
    description:
      "Deploy and command your applications with enterprise-grade cloud solutions that scale across multiple dimensions of digital space.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-black via-purple-900 to-orange-800 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-60"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `float ${
                  3 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="text-center text-white relative z-10">
          <Zap className="w-24 h-24 mx-auto mb-4 text-orange-500" />
          <h3 className="text-3xl font-bold mb-2">Cloud Mastery</h3>
          <p className="text-orange-200">Infinite Scalability</p>
        </div>
      </div>
    ),
    features: [
      "AWS & Azure Mastery",
      "Shadow Auto-Scaling",
      "Dark Load Balancing",
      "Forbidden CDN Integration",
    ],
    icon: Zap,
  },
  {
    title: "Eternal Support Covenant",
    description:
      "Receive round-the-clock vigilance and proactive maintenance to keep your dark web services thriving in perpetual excellence.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-black via-indigo-900 to-purple-800 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30" />
        <div className="text-center text-white relative z-10">
          <Users className="w-24 h-24 mx-auto mb-4 text-purple-400" />
          <h3 className="text-3xl font-bold mb-2">Dark Support</h3>
          <p className="text-purple-200">Always Watching, Always Ready</p>
        </div>
      </div>
    ),
    features: [
      "24/7 Shadow Monitoring",
      "Lightning Response",
      "Continuous Dark Updates",
      "Secure Backup Rituals",
    ],
    icon: Users,
  },
];

import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content = webServicesContent,
  contentClassName = "",
  showProgress = true,
  showFeatures = true,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Mobile Layout
  if (isMobile) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden">
        {/* Floating particles background */}
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

        {/* Aurora Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 via-orange-900/5 to-transparent animate-pulse opacity-20" />
        </div>

        <div className="relative z-10 px-4 w-full mx-auto py-20">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-sm text-gray-300 mb-8">
              <Skull size={16} className="text-red-500" />
              <span className="font-medium">Dark Mastery Portfolio</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white block mb-2">Our</span>
              <span className="bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Forbidden Arts
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {content.map((item, index) => {
              const IconComponent = item.icon || Code;
              return (
                <motion.div
                  key={item.title + index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 shadow-2xl"
                >
                  {/* Mobile Content Card */}
                  <div className="mb-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="h-48 w-full overflow-hidden rounded-xl shadow-lg"
                    >
                      {item.content}
                    </motion.div>
                  </div>

                  {/* Mobile Text Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        {item.title}
                      </h2>
                    </div>

                    <p className="text-base text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Mobile Features */}
                    {showFeatures && item.features && (
                      <div className="grid grid-cols-1 gap-2 mt-4">
                        {item.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-gray-300 p-2 bg-black/20 rounded-lg border border-gray-800/30"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-full animate-pulse flex-shrink-0" />
                            <span className="text-sm font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Mobile CTA */}
                    <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-105">
                      Embrace the Power
                      <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 shadow-2xl"
          >
            <div className="grid grid-cols-3 gap-4 text-white text-center">
              <div>
                <div className="text-2xl font-bold text-red-500">666+</div>
                <div className="text-xs text-gray-400">Dark Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">99.9%</div>
                <div className="text-xs text-gray-400">Shadow Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">∞</div>
                <div className="text-xs text-gray-400">Eternal Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
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

      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 via-orange-900/5 to-transparent animate-pulse opacity-20" />
      </div>

      <div className="relative z-10 px-4 lg:px-20 w-full mx-auto py-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-sm text-gray-300 mb-8">
            <Skull size={16} className="text-red-500" />
            <span className="font-medium">Dark Mastery Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white block mb-2">Our</span>
            <span className="bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent bg-300% animate-gradient">
              Forbidden Arts
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness the{" "}
            <span className="text-red-500 font-semibold">dark mastery</span>{" "}
            behind our digital creations
          </p>
        </div>

        <motion.div
          className="relative flex h-[40rem] justify-center space-x-10 overflow-y-auto rounded-xl p-8 bg-black/10 backdrop-blur-sm border border-gray-800/30 custom-scrollbar"
          ref={ref}
        >
          {/* Content Section */}
          <div className="relative flex items-start px-6 flex-1">
            <div className="max-w-2xl">
              {content.map((item, index) => {
                const IconComponent = item.icon || Code;
                return (
                  <div key={item.title + index} className="my-32 first:mt-20">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.4,
                        y: activeCard === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl transform hover:rotate-12 transition-all duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">
                          {item.title}
                        </h2>
                      </div>

                      <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                        {item.description}
                      </p>

                      {/* Features List */}
                      {showFeatures && item.features && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: activeCard === index ? 1 : 0,
                          }}
                          className="grid grid-cols-2 gap-3 mt-6"
                        >
                          {item.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-gray-300 p-3 bg-black/20 rounded-lg border border-gray-800/30"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-full animate-pulse" />
                              <span className="text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {/* CTA Button */}
                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                          opacity: activeCard === index ? 1 : 0,
                          scale: activeCard === index ? 1 : 0.9,
                        }}
                        className="mt-8 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 group transform hover:scale-105"
                      >
                        Embrace the Power
                        <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </div>
                );
              })}
              <div className="h-40" />
            </div>
          </div>

          {/* Sticky Content Card - Desktop Only */}
          <div className="sticky top-5 block">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className={cn(
                "h-[30rem] w-[40rem] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-red-500/20 border border-gray-800/50",
                contentClassName
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  {content[activeCard].content}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50"
            >
              <div className="flex items-center justify-between text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">666+</div>
                  <div className="text-xs text-gray-400">Dark Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">
                    99.9%
                  </div>
                  <div className="text-xs text-gray-400">Shadow Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">∞</div>
                  <div className="text-xs text-gray-400">Eternal Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

export default StickyScroll;
