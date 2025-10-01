"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Shield,
  Heart,
  Skull,
  Crown,
  Eye,
  Flame,
} from "lucide-react";
import AnimatedSection from "@/components/global/AnimatedSection";
import TimelineSection from "@/components/global/about/TimelineSection";

const values = [
  {
    icon: Flame,
    title: "Innovation from Darkness",
    description:
      "We embrace the shadows of possibility, constantly pushing boundaries to forge bleeding-edge solutions.",
    theme: "from-red-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Unwavering Excellence",
    description:
      "Our commitment to quality is eternal, delivering solutions that withstand the test of time.",
    theme: "from-orange-500 to-red-600",
  },
  {
    icon: Users,
    title: "Client-Centric Rituals",
    description:
      "Your success is our dark covenant, and we bind ourselves to exceeding your expectations.",
    theme: "from-red-600 to-orange-500",
  },
  {
    icon: Heart,
    title: "Integrity & Transparency",
    description:
      "We operate with honesty and openness, building trust through every shadowed interaction.",
    theme: "from-orange-600 to-red-500",
  },
];

const team = [
  {
    role: "Leadership Council",
    description:
      "Visionary architects who guide our journey through the digital abyss with strategic foresight.",
    count: "15+",
    icon: Crown,
  },
  {
    role: "Dark Engineers",
    description:
      "Master craftsmen who transform ethereal ideas into powerful, scalable reality.",
    count: "80+",
    icon: Zap,
  },
  {
    role: "Design Mystics",
    description:
      "Creative souls who conjure intuitive, mesmerizing experiences that captivate users.",
    count: "25+",
    icon: Eye,
  },
  {
    role: "Strategy Oracles",
    description:
      "Analytical minds who divine optimal paths through complex business challenges.",
    count: "20+",
    icon: Lightbulb,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-slate-900 via-gray-900 to-black">
      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 via-orange-900/5 to-transparent animate-pulse opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-sm text-gray-300 mb-8">
                <Skull size={16} className="text-red-500" />
                <span className="font-medium">Our Dark Legacy</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">About </span>
                <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We are the architects of digital darkness, forging innovative
                solutions that
                <span className="text-red-500 font-semibold">
                  {" "}
                  illuminate the path
                </span>{" "}
                to your business transformation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
                <div
                  className={`bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
                  Our Mission
                  <Flame size={20} className="text-red-500" />
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  To empower businesses through{" "}
                  <span className="text-red-500 font-semibold">
                    cutting-edge technology
                  </span>{" "}
                  solutions, delivering exceptional value and driving digital
                  transformation that transcends the ordinary into the
                  extraordinary.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:shadow-orange-500/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />
                <div
                  className={`bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
                  Our Vision
                  <Crown size={20} className="text-orange-500" />
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  To become the{" "}
                  <span className="text-orange-500 font-semibold">
                    global leader
                  </span>{" "}
                  in technology innovation, recognized for our unwavering
                  commitment to excellence and our ability to summon
                  transformative solutions from the depths of possibility.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Our Core </span>
                <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The dark principles that guide every incantation, every line of
                code, and every client relationship we forge.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-300 group relative">
                    <div className="flex items-start gap-4">
                      <div
                        className={`bg-gradient-to-br ${value.theme} p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Skull size={24} className="text-red-500" />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                  Dark Order
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A collective of{" "}
                <span className="text-red-500 font-semibold">
                  150+ talented souls
                </span>{" "}
                united by passion, expertise, and the pursuit of digital
                excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-300 group text-center">
                    <div className="bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {member.count}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {member.role}
                    </h3>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                      {member.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* CTA Section */}
      <AnimatedSection delay={0.3}>
        <section className="pt-20 w-full">
          <div className=" mx-auto text-center">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-12 hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-300">
              <div className="p-4 bg-black/20 rounded-full inline-block mb-6 border border-gray-800/50">
                <TrendingUp className="w-16 h-16 text-red-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Join Our{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                  Dark Mission
                </span>
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Become part of our journey and let's forge the future of
                technology together in the shadows of innovation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                >
                  Work With Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black/30 backdrop-blur-sm border border-gray-800/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black/50 transition-all duration-300"
                >
                  Join Our Order
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
