"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Smartphone, Globe, Zap, Shield, Users, TrendingUp, Lightbulb, Skull, Crown, Eye } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions forged in the digital fires of cutting-edge technologies to meet your darkest business requirements.",
    features: ["Full-stack necromancy", "API summoning rituals", "Database soul binding", "Code optimization curses"],
    theme: "from-red-500 to-orange-600"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform portals that channel exceptional user experiences from the shadow realms.",
    features: ["iOS & Android dominion", "React Native incantations", "Flutter dark arts", "App store enchantments"],
    theme: "from-orange-500 to-red-600"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive digital sanctuaries that mesmerize visitors and convert souls to your eternal cause.",
    features: ["Responsive shadow design", "E-commerce dark portals", "CMS integration spells", "SEO blood magic"],
    theme: "from-red-600 to-orange-500"
  },
  {
    icon: Zap,
    title: "Cloud Solutions",
    description: "Scalable underworld infrastructure and migration rituals to accelerate your digital transformation into darkness.",
    features: ["AWS/Azure demon deployment", "Serverless ghost architecture", "DevOps automation curses", "Performance divination"],
    theme: "from-orange-600 to-red-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive protection spells to guard your digital assets against the forces of chaos and ensure dark compliance.",
    features: ["Security blood rituals", "Penetration shadow testing", "Compliance demon consulting", "Incident banishment response"],
    theme: "from-red-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Digital Consulting",
    description: "Strategic whispers from the void to guide your digital transformation and optimize your business processes through darkness.",
    features: ["Technology shadow strategy", "Process optimization curses", "Digital roadmap prophecies", "Change management rituals"],
    theme: "from-orange-500 to-red-600"
  }
]

const stats = [
  { number: "500+", label: "Souls Bound", icon: Skull },
  { number: "150+", label: "Dark Disciples", icon: Crown },
  { number: "8+", label: "Years in Shadow", icon: Eye },
  { number: "24/7", label: "Eternal Vigilance", icon: Zap }
]

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-xl shadow-2xl p-8 hover:shadow-red-500/20 hover:shadow-2xl transition-shadow duration-300 group"
    >
      <div className="flex items-center mb-6">
        <div className={`bg-gradient-to-br ${service.theme} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-red-100 transition-colors duration-300">{service.title}</h3>
        <Crown size={16} className="text-red-500 opacity-70 ml-2" />
      </div>
      
      <p className="text-gray-200 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
        <span className="text-red-500 font-bold">"</span>
        {service.description}
        <span className="text-red-500 font-bold">"</span>
      </p>
      
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
            className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
          >
            <div className={`w-2 h-2 bg-gradient-to-r ${service.theme} rounded-full mr-3`} />
            {feature}
          </motion.li>
        ))}
      </ul>

      {/* Decorative skull */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <Skull size={20} className="text-red-500" />
      </div>
    </motion.div>
  )
}


export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-slate-900 via-gray-900 to-black">
      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 via-orange-900/5 to-transparent animate-pulse opacity-20" />
      </div>

     

      

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-full text-sm text-gray-300 mb-8">
                <Skull size={16} className="text-red-500" />
                <span className="font-medium">Services from the Abyss</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">What We </span>
                <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">Conjure</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From digital conception to ethereal deployment, we forge comprehensive technology solutions 
                that <span className="text-red-500 font-semibold">summon growth</span> and innovation from the darkest corners of possibility.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection delay={0.3}>
        <section className="py-20 px-4 bg-gradient-to-r backdrop-blur-sm ">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-black/20 rounded-full inline-block mb-6 border border-gray-800/50">
                <TrendingUp className="w-16 h-16 text-red-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">Embrace the Darkness?</span>
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Let's discuss how our <span className="text-red-500 font-semibold">forbidden expertise</span> can accelerate your digital transformation into the shadows.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                Begin Your Dark Ascension
              </motion.button>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
