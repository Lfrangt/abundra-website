"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export default function Vision() {
  return (
    <section className="py-24 bg-abundra-light">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-abundra-dark mb-6">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-abundra-gray max-w-3xl mx-auto">
            Shaping the future through the convergence of artificial
            intelligence, blockchain technology, and strategic digital capital
            management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-abundra-blue rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-abundra-dark">Vision</h3>
            </div>
            <p className="text-lg text-abundra-gray leading-relaxed">
              构建一个融合
              AI、区块链与数字资本的科技平台，让未来更富饶、更智慧、更宁静。
            </p>
            <p className="text-lg text-abundra-gray leading-relaxed mt-4">
              Building a technology platform that integrates AI, blockchain, and
              digital capital to create a more abundant, intelligent, and
              peaceful future.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-abundra-dark">Mission</h3>
            </div>
            <p className="text-lg text-abundra-gray leading-relaxed">
              以人工智能赋能区块链创新，以数字资本布局未来，用技术构建长期价值。
            </p>
            <p className="text-lg text-abundra-gray leading-relaxed mt-4">
              Empowering blockchain innovation with artificial intelligence,
              strategically positioning digital capital for the future, and
              building long-term value through technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
