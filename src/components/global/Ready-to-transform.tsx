"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Zap, Crown, Eye, Skull, Star } from "lucide-react";
import { GlobeDemo } from "./ConnectNow";

const Button = ({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline"
  size?: "lg";
  className?: string;
  onClick?: () => void;
}) => {
  const baseClasses =
    "group relative overflow-hidden rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2  transform hover:scale-105";

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
      className="relative py-5 px-4 bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden"
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
        <div className="relative z-10 py-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-sm text-gray-300 mb-8">
            <Crown size={16} className="text-red-500" />
            <span className="font-medium">Begin Your Ascension</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent bg-300% animate-gradient">
              Transform
            </span>{" "}
            Your Digital Realm?
          </h2>

          {/* Non-interactable Globe */}
          {/* <div className="w-full h-full z-30 absolute "></div> */}
          <div className="pointer-events-none  select-none">
            <GlobeDemo />
          </div>



          {/* Additional Info */}
          <div className="mt-8  flex flex-col items-center justify-center gap-6 text-sm text-gray-400">
            {/* CTA Buttons */}
            <Button className="flex z-50 justify-center bg-amber-700 ">
              Book a meeting
              <ArrowRight className="ml-3 inline" />
            </Button>
            <div className="flex items-center gap-4">
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