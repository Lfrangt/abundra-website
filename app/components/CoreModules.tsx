"use client";

import { motion } from "framer-motion";
import { Brain, Blocks, TrendingUp, Globe } from "lucide-react";

export default function CoreModules() {
  const modules = [
    {
      icon: Brain,
      title: "AI Lab",
      subtitle: "人工智能实验室",
      description:
        "AI model fine-tuning, intelligent investment advisory, and data services",
      features: ["AI 模型微调", "智能投顾", "数据服务"],
      color: "bg-blue-500",
    },
    {
      icon: Blocks,
      title: "Blockchain R&D",
      subtitle: "区块链研发部门",
      description:
        "Cardano ecosystem tools, on-chain identity, and Web3 product incubation",
      features: ["Cardano 生态工具开发", "链上身份", "Web3 产品孵化"],
      color: "bg-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Investment Arm",
      subtitle: "投资部门",
      description:
        "Digital asset allocation, early-stage project investment, and fund structuring",
      features: ["数字资产配置 (BTC, ETH)", "早期项目投资", "基金结构化"],
      color: "bg-green-500",
    },
    {
      icon: Globe,
      title: "China Tech Branch",
      subtitle: "中国技术分支 (未来规划)",
      description:
        "Technical outsourcing support and Asia-Pacific strategic support",
      features: ["技术外包支持", "Asia-Pacific 战略支持"],
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-abundra-dark mb-6">
            Core Business Modules
          </h2>
          <p className="text-xl text-abundra-gray max-w-3xl mx-auto">
            Four integrated divisions working together to build the future of
            digital capital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-abundra-light rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 ${module.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <module.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-abundra-dark mb-2">
                {module.title}
              </h3>

              <p className="text-sm text-abundra-gray mb-4 font-medium">
                {module.subtitle}
              </p>

              <p className="text-abundra-gray mb-6 leading-relaxed">
                {module.description}
              </p>

              <ul className="space-y-2">
                {module.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm text-abundra-gray flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-abundra-blue rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
