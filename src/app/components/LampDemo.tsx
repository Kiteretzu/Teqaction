"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/app/components/ui/lamp";

export function LampDemo() {
  return (
    <LampContainer className="bg-transparent w-full h-screen flex items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: -300 }}
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
