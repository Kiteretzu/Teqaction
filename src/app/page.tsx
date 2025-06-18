"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Button from "./components/ui/Button";
import InteractiveGrid from "./components/ui/InteractiveGrid";
import { HandPlatter } from 'lucide-react';

import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  Camera,
  Headphones,
  Rocket,
  Target,
  Users,
  TrendingUp,
  Heart,
  Star,
} from "lucide-react";
import { Spotlight } from "./components/ui/spotlight-new";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/ui/Navbar";
import { LampDemo } from "./components/LampDemo";
import Services from "./components/ui/Services";
import { FeaturesSectionDemo } from "./components/ui/ServicesPros";
import Component from "./components/ui/ParallaxTestimony";
import Footer from "./components/ui/Footer";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const servicesRef = useRef(null);

  // Optimized mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    }; 
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized intersection observer with better mobile thresholds
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.3, // Lower threshold for mobile
        rootMargin: isMobile ? '-20px 0px' : '-50px 0px', // Smaller margin for mobile
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, [isMobile]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Optimized mobile menu close handler
  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const allServices = [
    {
      title: "Web Development",
      icon: (
        <Globe className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#web-dev",
      description: "Custom websites and web applications",
    },
    {
      title: "Mobile Apps",
      icon: (
        <Smartphone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#mobile",
      description: "iOS and Android app development",
    },
    {
      title: "UI/UX Design",
      icon: (
        <Palette className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#design",
      description: "Beautiful and intuitive user interfaces",
    },
    {
      title: "Backend Development",
      icon: (
        <Database className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#backend",
      description: "Scalable server-side solutions",
    },
    {
      title: "DevOps",
      icon: (
        <Shield className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#devops",
      description: "Deployment and infrastructure management",
    },
    {
      title: "Performance Optimization",
      icon: (
        <Zap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#performance",
      description: "Speed up your applications",
    },
    {
      title: "Photography",
      icon: (
        <Camera className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#photography",
      description: "Professional photography services",
    },
    {
      title: "Audio Production",
      icon: (
        <Headphones className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#audio",
      description: "Music and podcast production",
    },
    {
      title: "Startup Consulting",
      icon: (
        <Rocket className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#consulting",
      description: "Launch your business idea",
    },
    {
      title: "Digital Marketing",
      icon: (
        <Target className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#marketing",
      description: "Grow your online presence",
    },
    {
      title: "Team Building",
      icon: (
        <Users className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#team",
      description: "Build high-performing teams",
    },
    {
      title: "Growth Strategy",
      icon: (
        <TrendingUp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#growth",
      description: "Scale your business effectively",
    },
    {
      title: "Brand Identity",
      icon: (
        <Heart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#branding",
      description: "Create memorable brand experiences",
    },
    {
      title: "Quality Assurance",
      icon: (
        <Star className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#qa",
      description: "Ensure product excellence",
    },
    {
      title: "Custom Development",
      icon: (
        <Code className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#custom",
      description: "Tailored software solutions",
    },
  ];

  return (
    <>
      {/* Hero Section with Mobile Optimizations */}
      <InteractiveGrid>
        <div id="about" className="w-screen min-h-screen flex flex-col justify-between overflow-hidden">
          {/* Fixed Navbar with Mobile-First Design */}
          <div className="fixed w-full z-50 bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
            <Navbar>
              {/* Desktop Navigation */}
              <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="hidden md:flex items-center gap-4">
                  <Button 
                    label="Book Now" 
                    link="" 
                    position="right" 
                    paddingX='px-4' 
                    paddingY="py-2" 
                  />
                </div>
              </NavBody>

              {/* Mobile Navigation */}
              <MobileNav>
                <MobileNavHeader>
                  <NavbarLogo />
                  <MobileNavToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  />
                </MobileNavHeader>

                <MobileNavMenu
                  isOpen={isMobileMenuOpen}
                  onClose={handleMobileMenuClose}
                >
                  {navItems.map((item, idx) => (
                    <a
                      key={`mobile-link-${idx}`}
                      href={item.link}
                      onClick={handleMobileMenuClose}
                      className="relative text-neutral-600 dark:text-neutral-300 py-3 px-4 text-lg font-medium hover:text-white transition-colors"
                    >
                      <span className="block">{item.name}</span>
                    </a>
                  ))}
                  <div className="flex w-full flex-col gap-4 mt-6 px-4">
                    <NavbarButton
                      onClick={handleMobileMenuClose}
                      variant="primary"
                      className="w-full py-3 text-lg font-semibold"
                    >
                      Login
                    </NavbarButton>
                    <NavbarButton
                      onClick={handleMobileMenuClose}
                      variant="primary"
                      className="w-full py-3 text-lg font-semibold"
                    >
                      Book a call
                    </NavbarButton>
                  </div>
                </MobileNavMenu>
              </MobileNav>
            </Navbar>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center pt-16 md:pt-0">
            <Spotlight />
            <LampDemo />
          </div>
        </div>
      </InteractiveGrid>

      {/* Services Section - Mobile Optimized */}
      <div className="w-full flex flex-col text-white justify-center items-center bg-gradient-to-t from-black via-gray-900 to-black px-4 md:px-8 py-12 md:py-20">
        <div 
          ref={servicesRef}
          className={`w-full z-1  text-center flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-gray-400 font-bold mb-8 md:mb-12 text-3xl md:text-5xl transition-all duration-1000 ease-out ${
            isServicesVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <p className="text-center">OUR SERVICES</p> 
          <span><HandPlatter size={isMobile ? 32 : 40}/></span>
        </div>
        <div id="services" className="w-full">
          <Services isVisible={isServicesVisible} />
        </div>
      </div>

      {/* Features Section - Mobile Optimized */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-black via-gray-900 to-black px-4 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Why <span className="text-gray-600">Partner</span> With Us?
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed px-4">
            We combine technical excellence with business understanding to deliver results that matter
          </p>
        </div>
        
        <div id="features" className="w-full">
          <FeaturesSectionDemo />
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="w-full">
        <Component />
      </div>

      {/* Contact/Footer Section */}
      <div id="contact" className="w-full">
        <Footer />
      </div>
    </>
  );
}