"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Crown,
  Skull,
  Zap,
  Star,
  Eye,
  ArrowRight,
} from "lucide-react";

const Button = ({
  label,
  link,
  paddingX = "px-6",
  paddingY = "py-3",
  color = "primary",
}: {
  label: string;
  link: string;
  paddingX?: string;
  paddingY?: string;
  color?: "primary" | "secondary";
}) => {
  const baseClasses =
    "group relative overflow-hidden rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105";

  const colorClasses =
    color === "primary"
      ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl hover:shadow-red-500/20"
      : "border-2 border-gray-700/50 text-gray-300 hover:bg-red-600/10 hover:text-white hover:border-red-500/50 backdrop-blur-sm";

  return (
    <button
      className={`${baseClasses} ${paddingX} ${paddingY} ${colorClasses}`}
    >
      <span className="relative z-10">{label}</span>
      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
      {color === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
};

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 via-orange-900/5 to-transparent animate-pulse opacity-20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-20 w-24 h-24 bg-red-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-red-500/5 rounded-full blur-lg animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-orange-500/5 rounded-full blur-lg animate-pulse" />

      {/* Decorative Skulls */}
      <div className="absolute top-8 right-8 opacity-5">
        <Skull size={48} className="text-red-500" />
      </div>
      <div className="absolute bottom-8 left-8 opacity-5">
        <Crown size={36} className="text-orange-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section - Hero Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-sm text-gray-300">
                <Crown size={16} className="text-red-500" />
                <span className="font-medium">Digital Dominion</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">Our Company</span>
                <span className="block bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent bg-300% animate-gradient">
                  helps you to grow
                </span>
                <span className="block text-gray-300">your business fast.</span>
              </h1>

              {/* Decorative Elements */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-red-500 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">
                  Forged by Digital Legends
                </span>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Button
                label="Summon Our Dark Powers"
                link=""
                paddingX="px-6"
                paddingY="py-4"
                color="primary"
              />
            </div>

            {/* Additional Dark Info */}
            <div
              className={`flex items-center gap-6 text-sm text-gray-400 transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-orange-500" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={14} className="text-red-500" />
                <span>Always Watching</span>
              </div>
              <div className="flex items-center gap-2">
                <Skull size={14} className="text-red-500" />
                <span>No Mercy</span>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Platform Column */}
            <div className="space-y-6 group">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Crown size={16} className="text-red-500" />
                Platform
              </h3>
              <ul className="space-y-4">
                {["About", "Features", "Pricing & Plans", "Contact"].map(
                  (item, index) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className={`text-gray-400 hover:text-red-400 transition-all duration-300 hover:translate-x-2 block transform relative group ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <span className="relative z-10">{item}</span>
                        <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300 transform -translate-y-1/2" />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-6 group">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Zap size={16} className="text-orange-500" />
                Resources
              </h3>
              <ul className="space-y-4">
                {["Account", "Tools", "Newsletter", "FAQ"].map(
                  (item, index) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className={`text-gray-400 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block transform relative group ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                      >
                        <span className="relative z-10">{item}</span>
                        <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300 transform -translate-y-1/2" />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legals Column */}
            <div className="space-y-6 group">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Skull size={16} className="text-red-500" />
                Legals
              </h3>
              <ul className="space-y-4">
                {[
                  "Guides",
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Licensing",
                ].map((item, index) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-gray-400 hover:text-red-400 transition-all duration-300 hover:translate-x-2 block transform relative group ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${(index + 8) * 100}ms` }}
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300 transform -translate-y-1/2" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div
          className={`mt-16 pt-8 border-t border-gray-800/50 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 flex items-center gap-2">
              <Eye size={16} className="text-red-500" />
              <span>Follow us into the shadows:</span>
            </div>

            <div className="flex space-x-6">
              {[
                {
                  Icon: Twitter,
                  label: "Twitter",
                  color: "hover:text-red-400",
                },
                {
                  Icon: Facebook,
                  label: "Facebook",
                  color: "hover:text-orange-400",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  color: "hover:text-red-400",
                },
              ].map(({ Icon, label, color }, index) => (
                <a
                  key={label}
                  href="#"
                  className={`text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:-translate-y-1 transform relative group ${
                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 1200}ms` }}
                  aria-label={label}
                >
                  <Icon size={24} />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div
            className={`mt-8 text-center text-gray-500 text-sm transform transition-all duration-1000 delay-1200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p>
              © 2025 Digital Dominion. All rights reserved. Forged in the depths
              of innovation.
            </p>
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
    </footer>
  );
};

export default Footer;
