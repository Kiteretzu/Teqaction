"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "MobileFirst Inc.",
    content:
      "Their React Native team delivered our cross-platform app 40% faster than estimated. The performance is indistinguishable from native!",
    initials: "SC",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "Global Retail",
    content:
      "The Flutter app they built handles our 50,000+ daily users flawlessly. Animation smoothness and UI consistency are perfect across devices.",
    initials: "MR",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Frontend Lead",
    company: "FinTech Solutions",
    content:
      "Our React.js dashboard loaded in 1.2s thanks to their optimization. The interactive data visualizations increased user engagement by 65%.",
    initials: "EW",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Backend Architect",
    company: "HealthTech",
    content:
      "Their Node.js/MongoDB backend handles 10M+ API requests daily with 99.99% uptime. The real-time data sync implementation is brilliant.",
    initials: "DK",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Director",
    company: "EduPlatform",
    content:
      "From React Native mobile app to React admin panel - everything feels cohesive. Their design system implementation saved us 300+ dev hours.",
    initials: "LT",
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Startup Founder",
    company: "SocialHub",
    content:
      "Complete solution: Flutter app + React web + Node.js backend. Launched in record time with perfect scalability from day one.",
    initials: "AJ",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <motion.div
    className="w-80 flex-shrink-0 mx-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <Quote className="text-blue-400" size={24} />
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
          {testimonial.initials}
        </div>
      </div>
      <p className="text-gray-200 mb-5 leading-relaxed text-base font-medium">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-700/50">
        <div>
          <p className="font-bold text-white text-base">{testimonial.name}</p>
          <p className="text-sm text-gray-400">
            {testimonial.role} at{" "}
            <span className="text-blue-400">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => (
  <motion.button
    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
    }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default function Component() {
  // Create multiple copies for infinite scroll
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses who've transformed their digital
            presence with our comprehensive solutions
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Testimonials */}
        <motion.div
          className="relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* First Row - Moving Right to Left */}
          <div className="mb-8">
            <motion.div
              className="flex"
              animate={{ x: [0, -100 * testimonials.length] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </div>

          {/* Second Row - Moving Left to Right */}
          <div className="mb-8">
            <motion.div
              className="flex"
              animate={{ x: [-100 * testimonials.length, 0] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {extendedTestimonials.reverse().map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent pointer-events-none z-10" />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Ready to join our success stories?
          </motion.p>
          <Button label="Start Your Project Today" />
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
      </div>
    </div>
  );
}
