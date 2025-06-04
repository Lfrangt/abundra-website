"use client";

import { motion } from "framer-motion";
import { Brain, Blocks, TrendingUp, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

const CoreModules = () => {
  const modules = [
    {
      icon: Brain,
      title: "AI Lab",
      subtitle: "Artificial Intelligence Solutions",
      description: "Advanced AI model fine-tuning, intelligent advisory systems, and enterprise AI tool development. We create smart solutions that enhance decision-making and automate complex processes.",
      features: [
        "GPT Model Fine-tuning",
        "Intelligent Investment Advisory",
        "Enterprise AI Tools",
        "Predictive Analytics"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      delay: 0
    },
    {
      icon: Blocks,
      title: "Blockchain R&D",
      subtitle: "Web3 Infrastructure & Innovation",
      description: "Cardano ecosystem development, smart contract tools, DID projects, and Web3 API services. Building the decentralized infrastructure of tomorrow.",
      features: [
        "Cardano Smart Contracts",
        "Decentralized Identity (DID)",
        "Web3 API Development",
        "Blockchain Infrastructure"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Digital Capital",
      subtitle: "Strategic Asset Management",
      description: "BTC treasury management, digital asset allocation, and early-stage project investments. Building anti-inflation, anti-cycle digital wealth structures.",
      features: [
        "BTC Treasury Strategy",
        "Digital Asset Portfolio",
        "Early Stage Investments",
        "Risk Management"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      delay: 0.4
    }
  ];

  return (
    <section id="ai-lab" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-6">
            <Sparkles size={16} className="text-blue-600" />
            <span>Core Business Modules</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900">Three Pillars of</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our integrated approach combines AI innovation, blockchain infrastructure, 
            and strategic digital capital management to create unprecedented value.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="space-y-20">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: module.delay }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} mb-6`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                      {module.title}
                    </h3>
                    <p className="text-lg text-gray-500 font-medium mb-4">
                      {module.subtitle}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: module.delay + 0.1 + idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.color}`} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-semibold group"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>

                {/* Visual */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br ${module.bgColor} border border-gray-200 overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4">
                        <Icon size={120} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                          <div className="w-3 h-3 bg-red-400 rounded-full" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="h-4 bg-white/60 rounded-lg" />
                        <div className="h-4 bg-white/40 rounded-lg w-3/4" />
                        <div className="h-4 bg-white/60 rounded-lg w-1/2" />
                      </div>

                      <div className="mt-8 p-4 bg-white/50 rounded-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          <Shield size={16} className={`text-${module.color.split('-')[1]}-600`} />
                          <span className="text-sm font-medium text-gray-700">Active Projects</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          {index === 0 ? '12' : index === 1 ? '8' : '5'}+
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="p-8 lg:p-12 rounded-3xl bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Build the Future?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join us in creating the next generation of AI-powered blockchain solutions
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreModules;
