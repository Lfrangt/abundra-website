"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Blocks, Bitcoin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Building the
            <br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Future of Capital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Integrating AI, blockchain, and digital assets to create a more
            abundant, intelligent, and peaceful tomorrow.
          </p>

          {/* Core Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-3 text-white">
              <Brain className="w-8 h-8" />
              <span className="text-lg font-medium">AI Innovation</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white opacity-30"></div>
            <div className="flex items-center gap-3 text-white">
              <Blocks className="w-8 h-8" />
              <span className="text-lg font-medium">Blockchain R&D</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white opacity-30"></div>
            <div className="flex items-center gap-3 text-white">
              <Bitcoin className="w-8 h-8" />
              <span className="text-lg font-medium">Digital Capital</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <button className="group bg-white text-abundra-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 mx-auto">
              Explore Our Vision
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-12"
          >
            <p className="text-blue-200 italic text-lg">
              "Wealth is not just about capital, but calmness, clarity, and
              code."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
