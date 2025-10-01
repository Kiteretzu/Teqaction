import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const milestones = [
  {
    year: "2017",
    event: "The Awakening",
    description: "Born from the digital void with a vision to transform",
  },
  {
    year: "2019",
    event: "First Century",
    description: "100 souls bound to our dark purpose",
  },
  {
    year: "2021",
    event: "Global Expansion",
    description: "Spread our shadow across three continents",
  },
  {
    year: "2023",
    event: "Industry Recognition",
    description: "Crowned with prestigious technology awards",
  },
  {
    year: "2025",
    event: "The Ascension",
    description: "500+ projects delivered, 150+ disciples recruited",
  },
];

function TimelineSection() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Chronicles of our ascension through the digital realm.
            </p>
          </div>
        </AnimatedSection>

        <div ref={timelineRef} className="relative">
          {/* Background timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800" />

          {/* Animated timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-red-500 to-orange-600 origin-top"
            style={{ scaleY }}
          />

          {milestones.map((milestone, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-300 group">
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-100 transition-colors duration-300">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-full border-4 border-gray-900 z-10" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
