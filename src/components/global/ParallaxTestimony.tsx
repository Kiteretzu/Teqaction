"use client";

import { useState, useEffect } from "react";
import { Quote, Skull, Eye, Zap, Crown, Star } from "lucide-react";

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
      className={`w-64 sm:w-72 md:w-80 flex-shrink-0 mx-1.5 sm:mx-4 transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="group relative bg-black/30 backdrop-blur-sm border border-gray-800/50 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] sm:hover:scale-105">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-3 sm:p-4 md:p-6 z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
            <div className="p-1 sm:p-1.5 md:p-2 bg-black/40 rounded-lg border border-gray-800/50">
              <Quote
                className="text-red-500 group-hover:text-orange-500 transition-colors duration-300"
                size={14}
              />
            </div>
            <div
              className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br ${testimonial.theme} flex items-center justify-center text-white font-bold text-xs shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
            >
              {testimonial.initials}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className="text-red-500 fill-current transform group-hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-200 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">
            <span className="text-red-500 font-bold">"</span>
            {testimonial.content}
            <span className="text-red-500 font-bold">"</span>
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 pt-2.5 sm:pt-3 md:pt-4 border-t border-gray-800/50 group-hover:border-gray-700/50 transition-colors duration-300">
            <div className="flex-1">
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mb-0.5 sm:mb-1">
                <p className="font-bold text-white text-xs sm:text-sm md:text-base group-hover:text-red-100 transition-colors duration-300">
                  {testimonial.name}
                </p>
                <Crown size={10} className="text-red-500 opacity-70 sm:w-3 sm:h-3" />
              </div>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-snug">
                {testimonial.role} at{" "}
                <span className="text-red-500 font-semibold group-hover:text-orange-500 transition-colors duration-300">
                  {testimonial.company}
                </span>
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <Skull size={14} className="text-red-500 sm:w-4 sm:h-4 md:w-6 md:h-6" />
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
    className="group relative overflow-hidden rounded-full font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white text-sm sm:text-base shadow-lg hover:shadow-xl hover:shadow-red-500/20 transform hover:scale-105"
    onClick={onClick}
  >
    <span className="relative z-10">{label}</span>
    <div className="relative z-10 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-200">
      <Eye size={16} />
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
      className="relative min-h-screen bg-gradient-to-bl from-slate-900 via-gray-900 to-black overflow-hidden py-12 sm:py-20"
    >
      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 via-orange-900/5 to-transparent animate-pulse opacity-20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-red-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse" />

      <div className="relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8">
            <Skull size={14} className="text-red-500" />
            <span className="font-medium">Testimonials from the Shadows</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-white block mb-1 sm:mb-2">Whispers of</span>
            <span className="bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent bg-300% animate-gradient">
              Dark Satisfaction
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-4">
            Hear the testimonies of those who dared to embrace our{" "}
            <span className="text-red-500 font-semibold">
              forbidden methodologies
            </span>{" "}
            and emerged victorious from the digital abyss
          </p>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* First Row - Moving Right to Left */}
          <div className="mb-4 sm:mb-8">
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
          <div className="mb-4 sm:mb-8">
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
          
        </div>

        {/* CTA Section */}
        {/* CTA Section */}
<div
  className={`text-center mt-8 sm:mt-16 transform transition-all duration-1000 delay-500 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
  }`} 
>
  <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
    Ready to join the ranks of the digitally enlightened?
  </p>
  
  <div className="flex justify-center">
    <Button label="Begin Your Dark Journey" />
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
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-scroll-left {
            animation: scroll-left 25s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}