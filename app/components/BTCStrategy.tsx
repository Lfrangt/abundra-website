"use client";

import { motion } from "framer-motion";
import { Bitcoin, Shield, TrendingUp, Wallet, Globe, Lock, BarChart3, Target } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from './SectionTitle';
import Card from './Card';

const BTCStrategy = () => {
  const { t } = useLanguage();
  
  const strategies = [
    {
      icon: Target,
      title: t('btc.initialTarget.title'),
      value: t('btc.initialTarget.value'),
      description: t('btc.initialTarget.desc'),
      variant: "blockchain" as const
    },
    {
      icon: Shield,
      title: t('btc.security.title'),
      value: t('btc.security.value'),
      description: t('btc.security.desc'),
      variant: "blockchain" as const
    },
    {
      icon: Globe,
      title: t('btc.platforms.title'),
      value: t('btc.platforms.value'),
      description: t('btc.platforms.desc'),
      variant: "tech" as const
    },
    {
      icon: BarChart3,
      title: t('btc.accounting.title'),
      value: t('btc.accounting.value'),
      description: t('btc.accounting.desc'),
      variant: "ai" as const
    }
  ];

  const btcMetrics = [
    { label: t('btc.currentPrice'), value: "$43,250", change: "+2.4%" },
    { label: t('btc.marketCap'), value: "$847B", change: "+1.8%" },
    { label: t('btc.volume24h'), value: "$18.2B", change: "+12.3%" },
    { label: t('btc.holdingsTarget'), value: "1+ BTC", change: t('btc.goal') }
  ];

  return (
    <section id="investment" className="section-padding abundra-bg-accent">
      <div className="max-w-7xl mx-auto">
        {/* 使用 Abundra 品牌化 SectionTitle */}
        <SectionTitle
          badge={{
            text: t('btc.badge'),
            icon: Bitcoin,
            variant: "blockchain"
          }}
          title={t('btc.header')}
          highlightText={t('btc.treasury')}
          highlightVariant="blockchain"
          subtitle={t('btc.subtitle')}
          size="lg"
          delay={0.2}
        />

        {/* BTC 指标卡片 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-abundra-lg mb-abundra-5xl">
          {btcMetrics.map((metric, index) => (
            <Card
              key={metric.label}
              variant="metric"
              title={metric.label}
              value={metric.value}
              change={metric.change}
              delay={0.1 * index}
              hoverEffect={true}
              size="md"
            />
          ))}
        </div>

        {/* 策略详情网格 */}
        <div className="grid lg:grid-cols-2 gap-abundra-3xl lg:gap-abundra-4xl items-center mb-abundra-5xl">
          {/* 左侧内容 */}
          <div className="space-y-abundra-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-abundra-3xl lg:text-abundra-4xl abundra-title text-gradient-blockchain mb-abundra-lg">
                {t('btc.strategyHeader')}
              </h3>
              <p className="text-abundra-lg text-abundra-gray-600 leading-relaxed mb-abundra-xl font-abundra">
                {t('btc.strategyDesc')}
              </p>
            </motion.div>

            <div className="space-y-abundra-lg">
              {strategies.map((strategy, index) => {
                const Icon = strategy.icon;
                
                // 根据变体设置图标样式
                const getIconStyles = () => {
                  switch (strategy.variant) {
                    case 'blockchain':
                      return 'abundra-icon-blockchain';
                    case 'ai':
                      return 'abundra-icon-ai';
                    case 'tech':
                      return 'abundra-icon-tech';
                    default:
                      return 'abundra-icon-blockchain';
                  }
                };

                return (
                  <motion.div
                    key={strategy.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-abundra-md p-abundra-md rounded-abundra-xl hover:bg-white/60 transition-all duration-300 hover:shadow-abundra-md"
                  >
                    <div className={`${getIconStyles()} w-12 h-12 rounded-abundra-lg flex-shrink-0`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-abundra-lg font-semibold text-abundra-gray-900 mb-1 font-abundra">
                        {strategy.title}
                      </h4>
                      <div className="text-abundra-gold-600 font-medium text-abundra-sm mb-abundra-sm">
                        {strategy.value}
                      </div>
                      <p className="text-abundra-gray-600 text-abundra-sm leading-relaxed font-abundra">
                        {strategy.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 右侧可视化 - 品牌化 BTC 仪表板 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="p-abundra-xl lg:p-abundra-2xl abundra-card-blockchain relative overflow-hidden shadow-abundra-xl hover:shadow-abundra-2xl transition-all duration-300">
              {/* 品牌化背景装饰 */}
              <div className="absolute top-4 right-4 opacity-10">
                <Bitcoin size={120} />
              </div>

              {/* 内容 */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-abundra-xl">
                  <div className="flex items-center space-x-abundra-sm">
                    <div className="abundra-icon-blockchain w-12 h-12 rounded-abundra-lg">
                      <Bitcoin size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-abundra-lg font-semibold text-abundra-gray-900 font-abundra">
                        {t('btc.treasuryLabel')}
                      </div>
                      <div className="text-abundra-sm text-abundra-gray-600 font-abundra">
                        {t('btc.corporateHoldings')}
                      </div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-abundra-success-400 rounded-full animate-abundra-pulse" />
                </div>

                {/* 品牌化图表 */}
                <div className="space-y-abundra-md mb-abundra-xl">
                  <div className="flex items-end space-x-2 h-32">
                    {[40, 65, 45, 80, 60, 95, 70, 85].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: index * 0.1 }}
                        className="bg-gradient-to-t from-abundra-gold-400 to-abundra-gold-500 rounded-t-abundra-sm flex-1 shadow-abundra-sm"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-abundra-xs text-abundra-gray-500 font-abundra">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>

                {/* 统计数据 */}
                <div className="grid grid-cols-2 gap-abundra-md">
                  <div className="p-abundra-md bg-white/50 rounded-abundra-xl">
                    <div className="text-abundra-2xl font-bold text-abundra-gray-900 font-abundra">1.0+</div>
                    <div className="text-abundra-sm text-abundra-gray-600 font-abundra">{t('btc.targetBtc')}</div>
                  </div>
                  <div className="p-abundra-md bg-white/50 rounded-abundra-xl">
                    <div className="text-abundra-2xl font-bold text-abundra-gray-900 font-abundra">100%</div>
                    <div className="text-abundra-sm text-abundra-gray-600 font-abundra">{t('btc.secureStorage')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 特性卡片 - 使用 Abundra 品牌化卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-abundra-xl"
        >
          {[
            {
              icon: Lock,
              title: t('btc.features.security.title'),
              description: t('btc.features.security.desc'),
              variant: "blockchain" as const
            },
            {
              icon: TrendingUp,
              title: t('btc.features.growth.title'),
              description: t('btc.features.growth.desc'),
              variant: "ai" as const
            },
            {
              icon: Wallet,
              title: t('btc.features.transparent.title'),
              description: t('btc.features.transparent.desc'),
              variant: "tech" as const
            }
          ].map((feature, index) => (
            <Card
              key={feature.title}
              variant={feature.variant}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
              hoverEffect={true}
              size="lg"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BTCStrategy;
