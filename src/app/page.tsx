"use client";

import { useState, useEffect, useRef } from "react";
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
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '-50px 0px', // Trigger slightly before the element comes into view
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <>
      <InteractiveGrid>
        <div id="about" className="w-screen  flex flex-col justify-between overflow-hidden">
          <div className="fixed w-full">
            <Navbar>
              {/* Desktop Navigation */}
              <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                  <Button label="Book Now" link="" position="right" paddingX='px-3' paddingY="py-2" />
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
                  onClose={() => setIsMobileMenuOpen(false)}
                >
                  {navItems.map((item, idx) => (
                    <a
                      key={`mobile-link-${idx}`}
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="block">{item.name}</span>
                    </a>
                  ))}
                  <div className="flex w-full flex-col gap-4">
                    <NavbarButton
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                      className="w-full"
                    >
                      Login
                    </NavbarButton>
                    <NavbarButton
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                      className="w-full"
                    >
                      Book a call
                    </NavbarButton>
                  </div>
                </MobileNavMenu>
              </MobileNav>
            </Navbar>

            {/* Navbar */}
          </div>
          <Spotlight />

          {/* Feel like over */}
          <LampDemo />

          {/* <div className="flex flex-col items-center text-white justify-center h-full text-center ">
            <p className="font-bold text-4xl ">
              Hey We Make Your Dream Come True
            </p>
            <p className="font-bold text-4xl ">
              And Your <Cover>Vision Into Reality</Cover>
            </p>
          </div> */}
          {/* Hero Section */}
        </div>
      </InteractiveGrid>

      {/* Second Part */}
      <div className="w-full flex flex-col  text-white justify-center  items-center  bg-gradient-to-t from-black via-gray-900 to-black ">
        <div 
          ref={servicesRef}
          className={`w-full z-1 text-center flex items-center justify-center gap-10 text-gray-400 font-bold  mb-2  text-5xl transition-all duration-1000 ease-out ${
            isServicesVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <p>OUR SERVICES </p> 
          <span><HandPlatter  size={40}/></span>
        </div>
        <div  id="services"><Services isVisible={isServicesVisible} /></div>
      
      </div>
      {/* Third Part */}
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t from-black via-gray-900 to-black">
      
  <div className="text-center ">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
    Why <span className="text-gray-600">Partner</span> With Us?
  </h2>
  <p className="text-lg text-gray-500 max-w-2xl mx-auto">
    We combine technical excellence with business understanding to deliver results that matter
  </p>
</div>
  
  <div id="features">
  <FeaturesSectionDemo />
  </div>
  

      
      </div>
      <div id="testimonials">
        <Component/>

      </div>
      <div id="contact">
        <Footer/></div>
      

    </>
  );
}