"use client"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Button from "./Button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Developer",
    company: "TechCorp",
    content:
      "This platform has completely transformed how we handle our database operations. The intuitive interface and powerful features have saved us countless hours.",
    initials: "SC",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "The performance improvements we've seen are incredible. Our queries run 10x faster and the developer experience is unmatched.",
    initials: "MR",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Full Stack Engineer",
    company: "InnovateLab",
    content:
      "I love how easy it is to get started. The documentation is excellent and the community support is outstanding.",
    initials: "EW",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Lead Architect",
    company: "CloudSystems",
    content:
      "The scalability features are exactly what we needed. We can handle millions of requests without breaking a sweat.",
    initials: "DK",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Product Manager",
    company: "DataFlow",
    content:
      "Our team productivity has increased dramatically. The real-time collaboration features are game-changing.",
    initials: "LT",
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Backend Developer",
    company: "WebSolutions",
    content:
      "The migration process was seamless. We moved our entire infrastructure in just a few hours with zero downtime.",
    initials: "AJ",
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
  <div className="w-72 flex-shrink-0 mx-3 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-lg overflow-hidden">
    <div className="p-5">
      <Quote className="text-gray-500 mb-1" size={18} />
      <p className="text-gray-200 mb-3 leading-relaxed text-sm">"{testimonial.content}"</p>
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-400">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default function Component() {
  // Split testimonials into rows
  const row1 = testimonials.slice(0, 2)
  const row2 = testimonials.slice(2, 4)
  const row3 = testimonials.slice(4, 6)

  return (
    <div className="min-h-screen  py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-white mb-3">Loved by developers worldwide</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Join thousands of developers who have transformed their workflow with our platform
          </p>
        </motion.div>

        {/* Infinite Moving Testimonials */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Row 1 - Moving left */}
          <motion.div
            className="flex mb-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            animate={{ x: [-1000, 0] }}
            style={{
              animationDelay: "0.8s",
            }}
          >
            <motion.div
              className="flex"
              animate={{ x: [-1000, 0] }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 0.8,
              }}
            >
              {[...row1, ...row1, ...row1, ...row1].map((testimonial, index) => (
                <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </motion.div>

          {/* Row 2 - Moving right */}
          <motion.div
            className="flex mb-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 60,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 1.1,
              }}
            >
              {[...row2, ...row2, ...row2, ...row2].map((testimonial, index) => (
                <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </motion.div>

          {/* Row 3 - Moving left (slower) */}
          <motion.div
            className="flex"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex"
              animate={{ x: [-1000, 0] }}
              transition={{
                duration: 50,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 1.0,
              }}
            >
              {[...row3, ...row3, ...row3, ...row3].map((testimonial, index) => (
                <TestimonialCard key={`row3-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </motion.div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r  to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l  to-transparent pointer-events-none z-10" />
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-base text-gray-300 mb-4">Ready to join them?</p>
          
          <Button label=" Get Started Today" link="" position="center" paddingY="py-3" color="secondary" />
        </motion.div>
      </div>
    </div>
  )
}
