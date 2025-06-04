"use client";

import { motion } from "framer-motion";
import { Bitcoin, Shield, TrendingUp, Wallet, Globe, Lock, BarChart3, Target } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const BTCStrategy = () => {
  const { t } = useLanguage();
  
  const strategies = [
    {
      icon: Target,
      title: t('btc.initialTarget.title'),
      value: t('btc.initialTarget.value'),
      description: t('btc.initialTarget.desc'),
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: t('btc.security.title'),
      value: t('btc.security.value'),
      description: t('btc.security.desc'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      title: t('btc.platforms.title'),
      value: t('btc.platforms.value'),
      description: t('btc.platforms.desc'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: t('btc.accounting.title'),
      value: t('btc.accounting.value'),
      description: t('btc.accounting.desc'),
      color: "from-purple-500 to-purple-600"
    }
  ];

  const btcMetrics = [
    { label: t('btc.currentPrice'), value: "$43,250", change: "+2.4%" },
    { label: t('btc.marketCap'), value: "$847B", change: "+1.8%" },
    { label: t('btc.volume24h'), value: "$18.2B", change: "+12.3%" },
    { label: t('btc.holdingsTarget'), value: "1+ BTC", change: t('btc.goal') }
  ];

  return (
    <section id="investment" className="section-padding bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 text-sm font-medium text-orange-700 mb-6">
            <Bitcoin size={16} className="text-orange-600" />
            <span>{t('btc.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900">{t('btc.header')}</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">
              {t('btc.treasury')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('btc.subtitle')}
          </p>
        </motion.div>

        {/* BTC Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {btcMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-sm text-gray-500 mb-2">{metric.label}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className={`text-sm font-medium ${
                metric.change === "Goal" ? "text-orange-600" : 
                metric.change.startsWith("+") ? "text-green-600" : "text-red-600"
              }`}>
                {metric.change}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Strategy Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('btc.strategyHeader')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('btc.strategyDesc')}
              </p>
            </motion.div>

            <div className="space-y-6">
              {strategies.map((strategy, index) => {
                const Icon = strategy.icon;
                return (
                  <motion.div
                    key={strategy.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-colors duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${strategy.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {strategy.title}
                      </h4>
                      <div className="text-orange-600 font-medium text-sm mb-2">
                        {strategy.value}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {strategy.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="p-8 lg:p-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl border border-orange-200 relative overflow-hidden">
              {/* Background Bitcoin Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Bitcoin size={120} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Bitcoin size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{t('btc.treasuryLabel')}</div>
                      <div className="text-sm text-gray-600">{t('btc.corporateHoldings')}</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>

                {/* Mock Chart */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-end space-x-2 h-32">
                    {[40, 65, 45, 80, 60, 95, 70, 85].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-gradient-to-t from-orange-400 to-orange-500 rounded-t-sm flex-1"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">1.0+</div>
                    <div className="text-sm text-gray-600">{t('btc.targetBtc')}</div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">{t('btc.secureStorage')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Lock,
              title: t('btc.features.security.title'),
              description: t('btc.features.security.desc')
            },
            {
              icon: TrendingUp,
              title: t('btc.features.growth.title'),
              description: t('btc.features.growth.desc')
            },
            {
              icon: Wallet,
              title: t('btc.features.transparent.title'),
              description: t('btc.features.transparent.desc')
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BTCStrategy;
