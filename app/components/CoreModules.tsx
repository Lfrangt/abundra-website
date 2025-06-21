"use client";

import { motion } from "framer-motion";
import { Brain, Blocks, TrendingUp, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from './SectionTitle';
import Card from './Card';
import Button from './Button';

const CoreModules = () => {
  const { t } = useLanguage();
  
  const modules = [
    {
      icon: Brain,
      title: t('modules.ai.title'),
      subtitle: t('modules.ai.subtitle'),
      description: t('modules.ai.desc'),
      features: [
        t('modules.ai.feature1'),
        t('modules.ai.feature2'),
        t('modules.ai.feature3'),
        t('modules.ai.feature4')
      ],
      variant: "ai" as const,
      delay: 0
    },
    {
      icon: Blocks,
      title: t('modules.blockchain.title'),
      subtitle: t('modules.blockchain.subtitle'),
      description: t('modules.blockchain.desc'),
      features: [
        t('modules.blockchain.feature1'),
        t('modules.blockchain.feature2'),
        t('modules.blockchain.feature3'),
        t('modules.blockchain.feature4')
      ],
      variant: "blockchain" as const,
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: t('modules.capital.title'),
      subtitle: t('modules.capital.subtitle'),
      description: t('modules.capital.desc'),
      features: [
        t('modules.capital.feature1'),
        t('modules.capital.feature2'),
        t('modules.capital.feature3'),
        t('modules.capital.feature4')
      ],
      variant: "tech" as const,
      delay: 0.4
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="核心业务模块"
          subtitle="AI、区块链、数字资产三大支柱驱动未来增长"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* 背景渐变装饰 */}
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-12 translate-x-12 md:-translate-y-16 md:translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 md:mb-6">
                    <motion.div 
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <module.icon className="h-8 w-8 md:h-10 md:w-10" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-700 transition-colors">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {module.description}
                  </p>
                  
                  <div className="space-y-2 md:space-y-3">
                    {module.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center justify-center text-xs md:text-sm text-gray-600 bg-gray-50 rounded-lg py-2 px-2 md:px-3 group-hover:bg-blue-50 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <motion.span 
                          className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2 md:mr-3 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        ></motion.span>
                        <span className="font-medium text-center">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* 底部装饰线 */}
                  <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-100">
                    <div className="w-8 h-0.5 md:w-12 md:h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto group-hover:w-12 md:group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 底部CTA区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full -translate-y-16 translate-x-16 md:-translate-y-20 md:translate-x-20 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full translate-y-12 -translate-x-12 md:translate-y-16 md:-translate-x-16 blur-lg"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                构建未来数字经济生态
              </h3>
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                通过AI驱动的智能决策、区块链技术的安全保障，以及数字资产的价值创造，
                为投资者提供全方位的数字化金融服务
              </p>
              <motion.button
                className="bg-white text-blue-700 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                了解更多
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreModules;
