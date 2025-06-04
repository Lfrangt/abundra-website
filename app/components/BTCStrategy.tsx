"use client";

import { motion } from "framer-motion";
import { Bitcoin, Shield, TrendingUp, Lock } from "lucide-react";

export default function BTCStrategy() {
  const strategies = [
    {
      icon: Bitcoin,
      title: "Initial Target",
      description:
        "Hold 1 BTC under company name as foundational digital asset",
      detail: "以公司名义持有 1 BTC",
    },
    {
      icon: Shield,
      title: "Platform Selection",
      description:
        "Bitbuy (Canada local), Kraken (global), or multi-sig cold wallet",
      detail: "Bitbuy（加拿大本地）、Kraken（全球化）或多签冷钱包",
    },
    {
      icon: Lock,
      title: "Storage Method",
      description:
        "Multi-sig + multi-location cold storage + layered liquidity management",
      detail: "多签 + 多地点冷存储 + 资产分层流动性管理",
    },
    {
      icon: TrendingUp,
      title: "Accounting",
      description:
        "IFRS crypto asset accounting standards + periodic revaluation",
      detail: "以 IFRS 加密资产会计标准入账 + 定期重新估值",
    },
  ];

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
          <div className="flex items-center justify-center gap-4 mb-6">
            <Bitcoin className="w-12 h-12 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-abundra-dark">
              BTC Treasury Strategy
            </h2>
          </div>
          <p className="text-xl text-abundra-gray max-w-3xl mx-auto">
            Strategic Bitcoin holdings as anti-inflation assets and long-term
            value preservation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <strategy.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-abundra-dark">
                  {strategy.title}
                </h3>
              </div>

              <p className="text-abundra-gray mb-3 leading-relaxed">
                {strategy.description}
              </p>

              <p className="text-sm text-abundra-gray italic">
                {strategy.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transparency Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Transparency Commitment</h3>
          <p className="text-lg mb-6">
            We believe in full transparency of our Bitcoin holdings and will
            publicly display our BTC addresses and position ratios on our
            dedicated treasury page.
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            View BTC Holdings
          </button>
        </motion.div>
      </div>
    </section>
  );
}
