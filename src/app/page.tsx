"use client";
import { ArrowRight, Code, Server, Shield, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroSection from "./components/global/HeroSection";
import NavBarComponet from "./components/global/NavBarComponet";
import { StickyScrollRevealDemo } from "./components/global/WhyChooseUs";
import Footer from "./components/ui/Footer";
import Component from "./components/ui/ParallaxTestimony";
import Services from "./components/ui/Services";
import { Spotlight } from "./components/ui/spotlight-new";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <div className=" w-full z-50 fixed bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <NavBarComponet />
      </div>

      {/* Hero Section */}
      <HeroSection />
      {/* <Spotlight /> */}

      {/* Services Section */}

      <div id="services" className="w-full">
        <Services isVisible={true} />
      </div>

      {/* Why Choose Us Section */}
    <section className="no-scrollbar">
        <StickyScrollRevealDemo />
      </section>

      {/* CTA Section */}

      {/* Testimonials Section */}
      <div id="testimonials" className="w-full">
        <Component />
      </div>
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build the digital solutions that
              will take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white border-0"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-gray-800 text-white ">
        <Footer />
      </footer>
    </div>
  );
}
