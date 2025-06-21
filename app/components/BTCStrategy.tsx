"use client";

import { motion } from "framer-motion";
import { Bitcoin, Shield, TrendingUp, Wallet, Globe, Lock, BarChart3, Target } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice';
import SectionTitle from './SectionTitle';
import Card from './Card';

export default function BTCStrategy() {
  const { t } = useLanguage();
  const { data: btcPrice, loading, formatPrice, formatChange, formatMarketData } = useBitcoinPrice();
  
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
    { 
      label: t('btc.currentPrice'), 
      value: loading ? "加载中..." : (btcPrice ? formatPrice(btcPrice.price) : "$43,250"), 
      change: loading ? "..." : (btcPrice ? formatChange(btcPrice.change24h) : "+2.4%") 
    },
    { 
      label: t('btc.marketCap'), 
      value: loading ? "加载中..." : (btcPrice ? formatMarketData(btcPrice.marketCap) : "$847B"), 
      change: "+1.8%" 
    },
    { 
      label: t('btc.volume24h'), 
      value: loading ? "加载中..." : (btcPrice ? formatMarketData(btcPrice.volume24h) : "$18.2B"), 
      change: "+12.3%" 
    },
    { label: t('btc.holdingsTarget'), value: "1+ BTC", change: t('btc.goal') }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="比特币战略储备"
          subtitle="将比特币作为长期价值储存，对冲通胀风险"
        />
        
        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* 左侧内容 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Bitcoin className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    数字黄金配置
                  </h3>
                  <p className="text-orange-600 font-medium text-sm md:text-base">Corporate Treasury Strategy</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                比特币作为"数字黄金"，具有稀缺性、去中心化和抗通胀特性。
                我们将其纳入战略储备，作为传统资产的有效补充，为长期价值保值提供保障。
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  icon: Shield,
                  title: "价值储存",
                  description: "有限供应量保证长期价值稳定",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: TrendingUp,
                  title: "通胀对冲",
                  description: "历史数据显示优秀的抗通胀表现",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: Globe,
                  title: "全球流动性",
                  description: "24/7全球交易，高流动性资产",
                  color: "from-purple-500 to-purple-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className="flex items-start space-x-3 md:space-x-4 bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-base md:text-lg group-hover:text-orange-700 transition-colors">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 右侧图表 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0"
          >
            <motion.div
              className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* 背景装饰 */}
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full -translate-y-12 translate-x-12 md:-translate-y-16 md:translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-4">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bitcoin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">比特币价格走势</h4>
                      <p className="text-gray-500 text-xs md:text-sm">Corporate Holdings Dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs md:text-sm flex-shrink-0">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-600 font-medium">实时数据</span>
                  </div>
                </div>
                
                {/* 增强的价格显示 */}
                <div className="text-center py-6 md:py-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl mb-6 md:mb-8">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    $95,234
                  </motion.div>
                  <div className="text-gray-600 mb-3 md:mb-4 font-medium text-sm md:text-base">当前比特币价格</div>
                  <div className="flex items-center justify-center flex-wrap gap-3 md:gap-6 text-xs md:text-sm">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                      <span className="text-green-600 font-semibold">+2.34% (24h)</span>
                    </div>
                    <span className="text-gray-300 hidden sm:inline">|</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">市值排名</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-bold">#1</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <motion.div 
                    className="text-center p-3 md:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100"
                    whileHover={{ scale: 1.05 }}
                  >
                    <TrendingUp className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-green-600" />
                    <div className="text-xs md:text-sm text-gray-500 mb-1 font-medium">24小时变化</div>
                    <div className="text-lg md:text-xl font-bold text-green-600">+2.34%</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-3 md:p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Globe className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-orange-600" />
                    <div className="text-xs md:text-sm text-gray-500 mb-1 font-medium">市值排名</div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">#1</div>
                  </motion.div>
                </div>

                {/* 底部统计 */}
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-3 md:gap-4 text-center">
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-orange-600">1.0+</div>
                      <div className="text-xs text-gray-500 font-medium">目标 BTC 持仓</div>
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-green-600">100%</div>
                      <div className="text-xs text-gray-500 font-medium">冷钱包存储</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
