"use client";

import { useState } from "react";
import Button from "./components/ui/Button";
import InteractiveGrid from "./components/ui/InteractiveGrid";
import { FloatingDock } from "./components/ui/InfiniteScrollServices";
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

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
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
   
    <InteractiveGrid>
    <div className="w-screen h-screen  flex flex-col justify-between">
    <Button label="Component" link="/home" position="right" />
    
    <FloatingDock items={allServices} />
    
    </div>
    </InteractiveGrid>
  

  
   

   
  );
}
