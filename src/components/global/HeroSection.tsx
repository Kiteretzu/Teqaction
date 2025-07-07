"use client";
import { motion } from "framer-motion";
import { MapPin, Camera, ArrowRight } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/cp.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-slate-900" />
        </video>
        <div className="absolute inset-0 bg-slate-700/60 pointer-events-none" />

        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-900/20" />
      </div>

      {/* Bottom Gradient Overlay with Soft Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-10 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 blur-xl opacity-70" />
      </div>

      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden z-10">
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

      <div className="relative z-20 container mx-auto px-6 text-center max-w-6xl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl mt-16 font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white block mb-2 drop-shadow-2xl">
              We build businesses,
            </span>
            <span className="text-gray-200 block mb-2 drop-shadow-2xl">
              not just software!
            </span>
            <motion.span
              className="bg-gradient-to-r from-red-500 via-orange-600 to-red-600 bg-clip-text text-transparent bg-300% animate-gradient drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Teqaction
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ready to grow?{" "}
            <span className="text-orange-400 font-semibold">
              Book a meeting
            </span>{" "}
            with our experts today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              label="Book Now"
              variant="primary"
              icon={<ArrowRight size={18} />}
              onClick={() => (window.location.href = "/book-a-meeting")}
            />

            <Button
              label="View Gallery"
              variant="secondary"
              icon={<Camera size={18} />}
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: "50+", label: "Projects Delivered", icon: "🚀" },
              { number: "100+", label: "Happy Clients", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "💬" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:bg-black/60 transition-all duration-300 shadow-2xl"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
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
