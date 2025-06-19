"use client";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Server,
  Shield,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InteractiveGrid from "../components/ui/InteractiveGrid";
import Services from "../components/ui/Services";
import { Spotlight } from "../components/ui/spotlight-new";
import Component from "../components/ui/ParallaxTestimony";
import NavBarComponet from "../components/global/NavBarComponet";
import HeroSection from "../components/global/HeroSection";
import { StickyScrollRevealDemo } from "../components/global/WhyChooseUs";

export default function HomePage() {
  return (
    <InteractiveGrid>
      {/* Header */}
       <div className=" w-full z-50 fixed bg-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
            <NavBarComponet/>
          </div>
      

      {/* Hero Section */}
      <HeroSection/>
      <Spotlight/>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions to accelerate your business
              growth
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">
                  Flutter Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Cross-platform mobile apps with native performance. Build
                  once, deploy everywhere with beautiful, responsive designs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">
                  React Native
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Native mobile experiences using React. Leverage existing web
                  development skills for mobile app creation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">
                  Node.js Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Scalable server-side applications with modern JavaScript.
                  Fast, efficient, and perfect for real-time applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">
                  DevOps Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Streamlined deployment and infrastructure management.
                  Automated workflows for faster, more reliable releases.
                </CardDescription>
              </CardContent>
            </Card>
          </div> */}

          <div id="services" className="w-full">
            <Services isVisible={true} />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="no-scrollbar">
        <StickyScrollRevealDemo />
      </section>

      {/* CTA Section */}
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

      {/* Testimonials Section */}
      <div id="testimonials" className="w-full">
        <Component />
      </div>
      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TechAction</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses through innovative digital solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-gray-300 transition-colors">
                  Flutter Development
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  React Native
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  Node.js Backend
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  DevOps Solutions
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-gray-300 transition-colors">
                  About Us
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  Portfolio
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  Careers
                </li>
                <li className="hover:text-gray-300 transition-colors">
                  Contact
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>hello@techaction.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechAction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </InteractiveGrid>
  );
}
