"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Zap, Crown, Eye, Skull, Star } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "lg";
  className?: string;
  onClick?: () => void;
}) => {
  const baseClasses =
    "group relative overflow-hidden rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105";

  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl hover:shadow-red-500/20"
      : "border-2 border-gray-700/50 text-gray-300 hover:bg-red-600/10 hover:text-white hover:border-red-500/50 backdrop-blur-sm";

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
};

export default function DarkCTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("cta-section");
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
      id="cta-section"
      className="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden"
    >
      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 via-orange-900/5 to-transparent animate-pulse opacity-20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-20 w-24 h-24 bg-red-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-red-500/5 rounded-full blur-lg animate-pulse" />

      <div className="container mx-auto text-center relative z-10">
        <div
          className={`group relative bg-black/30 backdrop-blur-sm border border-gray-800/50 shadow-2xl rounded-3xl overflow-hidden hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-1000 p-12 transform ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-95"
          }`}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-3xl border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Decorative Skull */}
          <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <Skull size={32} className="text-red-500" />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-sm text-gray-300 mb-8">
              <Crown size={16} className="text-red-500" />
              <span className="font-medium">Begin Your Ascension</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 group-hover:text-red-50 transition-colors duration-300">
              Ready to{" "}
              <span className="bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent bg-300% animate-gradient">
                Transform
              </span>{" "}
              Your Digital Realm?
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              Embrace the{" "}
              <span className="text-red-500 font-semibold">dark arts</span> of
              modern development. Let us forge the digital solutions that will
              elevate your empire to{" "}
              <span className="text-orange-500 font-semibold">
                legendary status
              </span>
              .
            </p>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-red-500 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                Sworn by Digital Overlords
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="primary" size="lg">
                <Zap size={20} className="group-hover:animate-pulse" />
                Claim Your Free Dark Consultation
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button variant="outline" size="lg">
                <Eye size={20} />
                Witness Our Dark Portfolio
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Crown size={14} className="text-red-500" />
                <span>24/7 Shadow Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-orange-500" />
                <span>Lightning Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Skull size={14} className="text-red-500" />
                <span>No Mortal Contracts</span>
              </div>
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
      `}</style>
    </section>
  );
}
