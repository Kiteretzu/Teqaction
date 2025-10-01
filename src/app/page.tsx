"use client";

import { StickyScrollRevealDemo } from "@/components/global/WhyChooseUs";
import HeroSection from "../components/global/HeroSection";
import NavBarComponet from "../components/global/NavBarComponet";
import Footer from "../components/global/Footer";
import Testimonial from "../components/global/ParallaxTestimony";
import { Spotlight } from "../components/ui/spotlight-new";
export default function HomePage() {
  return (
    <div className="bg-gradient-to-br relative from-gray-950 overflow-hidden via-gray-900 to-gray-950">
      {/* Header */}
      <div className=" w-full z-50 fixed bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <NavBarComponet />
      </div>

      {/* Hero Section */}
      <HeroSection />
      <Spotlight />

      {/* Services Section */}

      <div id="services" className="w-full">
        <StickyScrollRevealDemo />
      </div>

      {/* Why Choose Us Section */}
      {/* <section className="no-scrollbar">
        <StickyScrollRevealDemo />
        </section> */}

      {/* Testimonials Section */}
      <div id="testimonials" className="w-full">
        <Testimonial />
      </div>
      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-gray-800 text-white ">
        <Footer />
      </footer>
    </div>
  );
}
