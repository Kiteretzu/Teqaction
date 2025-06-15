"use client";

import { useState } from "react";
import Button from "./components/ui/Button";
import InteractiveGrid from "./components/ui/InteractiveGrid";
import { FloatingDock } from "./components/ui/InfiniteScrollServices";
import { Cover } from "./components/ui/TextWrapSpeed/cover";


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

import { Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu } from "./components/ui/Navbar";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
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
    <InteractiveGrid >
    <div className="w-screen h-screen flex flex-col justify-between overflow-hidden">
       <div className="fixed w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            
            <Button label="Book Now" link="/home" position="right" />
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
    
     <div className="flex flex-col items-center text-white justify-center h-full text-center ">
      <p className="font-bold text-4xl ">Hey We Make Your Dream Come True</p>
      <p className="font-bold text-4xl ">And Your <Cover>Vision Into Reality</Cover></p>

     </div>
      <Spotlight />
      
      {/* Hero Section */}
      
    </div>
    </InteractiveGrid>
    <div className="w-full flex h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black p-10">
      <div className="w-[30%] h-full flex flex-col gap-3">
        <div className="w-full bg-gray-600 h-[51%] rounded-lg"></div>
        <div className="w-full bg-gray-600 h-[51%] rounded lg"></div>
      </div>
      <div className="w-[70%] h-full bg-gray-600 rounded-lg p-3 ml-3">
        <div className="w-full h-full border-2  rounded-lg">

        </div>

      </div>
    </div>
    </>
  );
}