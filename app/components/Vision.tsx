"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart, Zap } from "lucide-react";

const Vision = () => {
  const visionPoints = [
    {
      icon: Eye,
      title: "Vision",
      description: "Building a platform that integrates AI, blockchain, and digital capital for a more abundant, intelligent, and peaceful future.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Mission",
      description: "Empowering blockchain innovation with AI, laying out the future with digital capital, and building long-term value with technology.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Values",
      description: "Calmness, clarity, and code. We believe wealth extends beyond capital to encompass wisdom and well-being.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pioneering the convergence of AI and Web3 technologies to create unprecedented value and opportunities.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900">Our</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guided by principles of innovation, integrity, and impact, we're building 
            tomorrow's financial infrastructure today.
          </p>
        </motion.div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 transition-all duration-500 border border-gray-200 hover:border-gray-300 hover:shadow-xl">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${point.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {point.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Company Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
            <div className="relative z-10">
              <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-6 italic">
                "Wealth is not just about capital, but calmness, clarity, and code."
              </blockquote>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-lg text-gray-300">Abundra Capital Inc.</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
