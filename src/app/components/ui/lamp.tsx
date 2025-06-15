"use client";
import type React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        {/* Light source at the top */}
        <motion.div
          initial={{ width: "15rem", opacity: 0.5 }}
          whileInView={{ width: "30rem", opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[12rem] bg-cyan-900/40 "
        />

        {/* Central light source glow */}
        <motion.div
          initial={{ width: "8rem", opacity: 0.5 }}
          whileInView={{ width: "16rem", opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-20 w-64 -translate-y-[11rem] rounded-full bg-cyan-900 blur-2xl"
        />

        {/* Main downward light cone - Left side */}
        <motion.div
          initial={{ opacity: 0.5, scaleY: 0.5 }}
          whileInView={{ opacity: 0.8, scaleY: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 top-1/4 h-96 overflow-visible w-[25rem] bg-gradient-conic from-cyan-500/60 via-cyan-300/30 to-transparent [--conic-position:from_160deg_at_center_top] origin-top"
        />

        {/* Main downward light cone - Right side */}
        <motion.div
          initial={{ opacity: 0.5, scaleY: 0.5 }}
          whileInView={{ opacity: 0.8, scaleY: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 top-1/4 h-96 w-[25rem] bg-gradient-conic from-transparent via-cyan-300/30 to-cyan-500/60 [--conic-position:from_20deg_at_center_top] origin-top"
        />

        {/* Wide downward light spread */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.3 }}
          whileInView={{ opacity: 0.4, scaleY: 1 }}
          transition={{
            delay: 0.6,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-auto top-1/3 z-20 h-80 w-[40rem] bg-gradient-to-b from-cyan-400/20 via-cyan-300/10 to-transparent rounded-t-full origin-top"
        />

        {/* Soft ambient downward glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{
            delay: 0.8,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute inset-auto top-1/2 z-10 h-96 w-[50rem] bg-gradient-to-b from-cyan-200/15 via-cyan-100/8 to-transparent rounded-full blur-sm"
        />

        {/* Floor light pool */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 z-5 h-32 w-[35rem] bg-gradient-radial from-cyan-300/40 via-cyan-200/20 to-transparent rounded-full blur-lg"
        />
      </div>

      <div className="relative z-50 flex -translate-y-32 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
