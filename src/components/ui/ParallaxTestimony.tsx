"use client";

import { useState, useEffect } from "react";
import { Quote, Skull, Eye, Zap, Crown, Star } from "lucide-react";
import { ThreeDMarqueeDemo } from "../global/TestSection";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Shadow Architect",
    company: "MobileFirst Inc.",
    content:
      "Their dark arts in React Native conjured our cross-platform portal 40% faster than the ancient prophecies foretold. The performance channels pure digital essence!",
    initials: "SC",
    rating: 5,
    theme: "from-red-500 to-orange-600",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Dimensional Guardian",
    company: "Global Retail",
    content:
      "The Flutter incantations they wove handle our 50,000+ daily souls flawlessly. Animation rituals flow like liquid shadow across all realms.",
    initials: "MR",
    rating: 5,
    theme: "from-orange-500 to-red-600",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Interface Sorceress",
    company: "FinTech Solutions",
    content:
      "Our React.js grimoire now loads in 1.2s through their forbidden optimizations. The data visualizations mesmerize users, increasing engagement by 65%.",
    initials: "EW",
    rating: 5,
    theme: "from-red-600 to-orange-500",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Backend Necromancer",
    company: "HealthTech",
    content:
      "Their Node.js/MongoDB underworld handles 10M+ API requests daily with 99.99% uptime. The real-time data synchronization transcends mortal comprehension.",
    initials: "DK",
    rating: 5,
    theme: "from-orange-600 to-red-500",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Experience Enchantress",
    company: "EduPlatform",
    content:
      "From React Native shadow portals to React admin sanctuaries - everything pulses with dark harmony. Their design system saved us 300+ hours of mortal toil.",
    initials: "LT",
    rating: 5,
    theme: "from-red-500 to-orange-600",
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Digital Overlord",
    company: "SocialHub",
    content:
      "Complete dominion: Flutter app + React web + Node.js backend. Launched with forbidden speed and perfect scalability from the first eclipse.",
    initials: "AJ",
    rating: 5,
    theme: "from-orange-500 to-red-600",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`w-80 flex-shrink-0 mx-4 transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-800/50 shadow-2xl rounded-2xl overflow-hidden hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-2xl border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-6 z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="p-2 bg-black/40 rounded-xl border border-gray-800/50">
              <Quote
                className="text-red-500 group-hover:text-orange-500 transition-colors duration-300"
                size={20}
              />
            </div>
            <div
              className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.theme} flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
            >
              {testimonial.initials}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-red-500 fill-current transform group-hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-200 mb-6 leading-relaxed text-base font-medium group-hover:text-white transition-colors duration-300">
            <span className="text-red-500 font-bold">"</span>
            {testimonial.content}
            <span className="text-red-500 font-bold">"</span>
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-800/50 group-hover:border-gray-700/50 transition-colors duration-300">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-white text-base group-hover:text-red-100 transition-colors duration-300">
                  {testimonial.name}
                </p>
                <Crown size={14} className="text-red-500 opacity-70" />
              </div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {testimonial.role} at{" "}
                <span className="text-red-500 font-semibold group-hover:text-orange-500 transition-colors duration-300">
                  {testimonial.company}
                </span>
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <Skull size={24} className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => (
  <button
    className="group relative overflow-hidden rounded-full font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl hover:shadow-red-500/20 transform hover:scale-105"
    onClick={onClick}
  >
    <span className="relative z-10">{label}</span>
    <div className="relative z-10 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-200">
      <Eye size={18} />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </button>
);

export default function DarkTestimonials() {
  const [isVisible, setIsVisible] = useState(false);

  // Create multiple copies for infinite scroll
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
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

    const element = document.getElementById("testimonials-section");
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
      id="testimonials-section"
      className="relative min-h-screen bg-gradient-to-tr from-slate-900 via-gray-900 to-black overflow-hidden py-20"
    >
      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 via-orange-900/5 to-transparent animate-pulse opacity-20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse" />

      <div className="relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-sm text-gray-300 mb-8">
            <Skull size={16} className="text-red-500" />
            <span className="font-medium">Testimonials from the Shadows</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white block mb-2">Whispers of</span>
            <span className="bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent bg-300% animate-gradient">
              Dark Satisfaction
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Hear the testimonies of those who dared to embrace our{" "}
            <span className="text-red-500 font-semibold">
              forbidden methodologies
            </span>{" "}
            and emerged victorious from the digital abyss
          </p>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div
          className={`relative overflow-hidden rounded-3xl transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* First Row - Moving Right to Left */}
          <div className="mb-8">
            <div className="flex animate-scroll-left">
              {extendedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index % testimonials.length}
                />
              ))}
            </div>
          </div>

          {/* Second Row - Moving Left to Right */}
          <div className="mb-8">
            <div className="flex animate-scroll-right">
              {[...extendedTestimonials].reverse().map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index % testimonials.length}
                />
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-gray-900/80 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-gray-900/80 to-transparent pointer-events-none z-20" />
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

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
