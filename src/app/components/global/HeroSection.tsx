"use client";
import { motion } from "framer-motion";
import { MapPin, Camera } from "lucide-react";

const Button = ({
  label,
  variant = "primary",
  icon,
  onClick,
}: {
  label: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  const baseClasses =
    "group relative overflow-hidden rounded-full font-semibold transition-all duration-300 flex items-center gap-2";

  const variants = {
    primary:
      "px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg hover:shadow-xl",
    secondary:
      "px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:border-white/50",
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]}`}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === "primary"
            ? "0 20px 40px rgba(234, 88, 12, 0.3)"
            : "0 10px 30px rgba(255, 255, 255, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <span className="relative z-10">{label}</span>
      {icon && (
        <motion.div
          className="relative z-10"
          whileHover={{ x: 3, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
      )}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.button>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Mountain Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/70 to-transparent z-5">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 L0,200 L200,100 L400,150 L600,80 L800,120 L1000,60 L1200,100 L1200,300 Z"
            fill="rgba(15, 15, 15, 0.9)"
          />
          <path
            d="M0,300 L0,250 L150,180 L350,200 L550,140 L750,160 L950,120 L1200,140 L1200,300 Z"
            fill="rgba(30, 30, 30, 0.8)"
          />
        </svg>
      </div>

      {/* Floating Stars/Lights */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 via-orange-900/10 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl mt-16 font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white block mb-2">Explore the Shadows</span>
            <span className="text-gray-400 block mb-2">with</span>
            <motion.span
              className="bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent bg-300% animate-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Teqaction
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Venture into mysterious realms and{" "}
            <span className="text-red-500 font-semibold">
              forbidden destinations
            </span>{" "}
            where few dare to tread. Discover{" "}
            <span className="text-orange-500 font-semibold">
              hidden secrets
            </span>{" "}
            in the world's darkest corners and most enigmatic places.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              label="Enter the Unknown"
              variant="primary"
              icon={<MapPin size={18} />}
            />
            <Button
              label="Dark Destinations"
              variant="secondary"
              icon={<Camera size={18} />}
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: "66", label: "Mysterious Places", icon: "🌑" },
              { number: "13K+", label: "Dark Explorers", icon: "🗿" },
              { number: "4.6★", label: "Thrill Rating", icon: "⚡" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl hover:bg-black/50 transition-all duration-300 shadow-2xl"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
}
