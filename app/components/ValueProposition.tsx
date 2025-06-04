"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe2 } from "lucide-react";

export default function ValueProposition() {
  const propositions = [
    {
      icon: Zap,
      title: "AI × Blockchain Fusion",
      subtitle: "AI × 区块链融合",
      description:
        "Leveraging AI to enhance Web3 product intelligence through predictive analytics, strategy generation, and automated risk management.",
      details: "利用 AI 增强 Web3 产品智能化（如预测分析、策略生成、自动风控）",
    },
    {
      icon: Shield,
      title: "Long-term Capital Strategy",
      subtitle: "长期资本战略",
      description:
        "Holding BTC/ETH to establish anti-inflation, anti-cyclical digital wealth structures for sustainable growth.",
      details: "持有 BTC/ETH，建立抗通胀、抗周期的数字财富结构",
    },
    {
      icon: Globe2,
      title: "Bilingual Global Operations",
      subtitle: "双语国际化运营",
      description:
        "Connecting resources across Canada, US, and China to establish a truly global presence and strategic advantage.",
      details: "对接中加美三地资源，布局全球",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-abundra-dark to-gray-900 text-white">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core Value Proposition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three fundamental pillars that drive our innovation and create
            lasting value
          </p>
        </motion.div>

        <div className="space-y-12">
          {propositions.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-abundra-blue rounded-2xl flex items-center justify-center">
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{prop.title}</h3>
                    <p className="text-gray-400 font-medium">{prop.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  {prop.description}
                </p>

                <p className="text-gray-400 italic">{prop.details}</p>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-abundra-blue/20 to-purple-600/20 rounded-3xl flex items-center justify-center border border-white/10">
                  <prop.icon className="w-32 h-32 text-abundra-blue/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
