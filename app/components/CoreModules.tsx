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
    <section id="ai-lab" className="section-padding abundra-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* 使用 Abundra 品牌化 SectionTitle */}
        <SectionTitle
          badge={{
            text: t('modules.badge'),
            icon: Sparkles,
            variant: "primary"
          }}
          title={t('modules.header')}
          highlightText={t('modules.innovation')}
          highlightVariant="primary"
          subtitle={t('modules.subtitle')}
          size="lg"
          delay={0.2}
        />

        {/* 模块卡片网格 - 使用品牌化变体 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-abundra-xl mb-abundra-5xl">
          {modules.map((module) => (
            <Card
              key={module.title}
              variant={module.variant}
              icon={module.icon}
              title={module.title}
              subtitle={module.subtitle}
              description={module.description}
              features={module.features}
              delay={module.delay}
              size="lg"
              hoverEffect={true}
              glowEffect={false}
            />
          ))}
        </div>

        {/* 详细模块展示 */}
        <div className="space-y-abundra-5xl">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isEven = index % 2 === 0;

            // 根据模块类型设置品牌化样式
            const getModuleStyles = () => {
              switch (module.variant) {
                case 'ai':
                  return {
                    iconBg: 'abundra-icon-ai',
                    dotColor: 'bg-gradient-to-r from-abundra-blue-500 to-abundra-blue-600',
                    cardBg: 'abundra-card-feature border-abundra-blue-200/60',
                    titleGradient: 'text-gradient-ai'
                  };
                case 'blockchain':
                  return {
                    iconBg: 'abundra-icon-blockchain',
                    dotColor: 'bg-gradient-to-r from-abundra-gold-500 to-abundra-gold-600',
                    cardBg: 'abundra-card-blockchain border-abundra-gold-200/60',
                    titleGradient: 'text-gradient-blockchain'
                  };
                case 'tech':
                  return {
                    iconBg: 'abundra-icon-tech',
                    dotColor: 'bg-gradient-to-r from-abundra-purple-500 to-abundra-purple-600',
                    cardBg: 'abundra-card bg-gradient-to-br from-abundra-purple-50 to-abundra-blue-50 border-abundra-purple-200/60',
                    titleGradient: 'bg-gradient-to-r from-abundra-purple-500 to-abundra-blue-500 bg-clip-text text-transparent'
                  };
                default:
                  return {
                    iconBg: 'abundra-icon-ai',
                    dotColor: 'bg-gradient-to-r from-abundra-blue-500 to-abundra-blue-600',
                    cardBg: 'abundra-card-feature',
                    titleGradient: 'text-gradient-primary'
                  };
              }
            };

            const styles = getModuleStyles();

            return (
              <motion.div
                key={`${module.title}-detail`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: module.delay + 0.2 }}
                className={`grid lg:grid-cols-2 gap-abundra-2xl lg:gap-abundra-3xl items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* 内容区域 */}
                <div className={`space-y-abundra-xl ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className={`${styles.iconBg} w-16 h-16 mb-abundra-lg rounded-abundra-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className={`text-abundra-3xl lg:text-abundra-4xl abundra-title ${styles.titleGradient} mb-abundra-sm`}>
                      {module.title}
                    </h3>
                    <p className="text-abundra-lg text-abundra-gray-500 font-medium mb-abundra-md font-abundra">
                      {module.subtitle}
                    </p>
                    <p className="text-abundra-lg text-abundra-gray-600 leading-relaxed font-abundra">
                      {module.description}
                    </p>
                  </div>

                  {/* 特性列表 */}
                  <div className="space-y-abundra-sm">
                    {module.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: module.delay + 0.3 + idx * 0.1 }}
                        className="flex items-center space-x-abundra-sm"
                      >
                        <div className={`w-2 h-2 rounded-full ${styles.dotColor}`} />
                        <span className="text-abundra-gray-700 font-medium font-abundra">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA 按钮 */}
                  <Button
                    variant="link"
                    icon={ArrowRight}
                    iconPosition="right"
                    hoverEffect={true}
                    className="text-abundra-gray-700 hover:text-abundra-blue-700"
                  >
                    {t('modules.learnMore')}
                  </Button>
                </div>

                {/* 可视化区域 */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`relative p-abundra-xl lg:p-abundra-2xl rounded-abundra-2xl ${styles.cardBg} overflow-hidden shadow-abundra-lg hover:shadow-abundra-xl`}
                  >
                    {/* 品牌化背景图案 */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4">
                        <Icon size={120} />
                      </div>
                    </div>

                    {/* 内容 */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-abundra-xl">
                        <div className={`${styles.iconBg} w-12 h-12 rounded-abundra-lg`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-abundra-success-400 rounded-full animate-abundra-pulse" />
                          <div className="w-3 h-3 bg-abundra-warning-400 rounded-full" />
                          <div className="w-3 h-3 bg-abundra-error-400 rounded-full" />
                        </div>
                      </div>

                      <div className="space-y-abundra-md">
                        <div className="h-4 bg-white/60 rounded-abundra-lg" />
                        <div className="h-4 bg-white/40 rounded-abundra-lg w-3/4" />
                        <div className="h-4 bg-white/60 rounded-abundra-lg w-1/2" />
                      </div>

                      <div className="mt-abundra-xl p-abundra-md bg-white/50 rounded-abundra-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          <Shield size={16} className="text-abundra-blue-600" />
                          <span className="text-abundra-sm font-medium text-abundra-gray-700 font-abundra">
                            {t('modules.activeProjects')}
                          </span>
                        </div>
                        <div className="text-abundra-2xl font-bold text-abundra-gray-900 font-abundra">
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

        {/* 品牌化底部 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-abundra-5xl"
        >
          <div className="p-abundra-xl lg:p-abundra-2xl rounded-abundra-2xl bg-gradient-to-br from-abundra-gray-900 to-abundra-gray-800 text-white relative overflow-hidden shadow-abundra-2xl">
            {/* 品牌化背景装饰 */}
            <div className="absolute inset-0 bg-gradient-to-r from-abundra-blue-600/20 via-abundra-purple-600/20 to-abundra-gold-600/20" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-abundra-blue-500/30 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-abundra-purple-500/30 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-abundra-2xl lg:text-abundra-3xl abundra-title text-white mb-abundra-md">
                {t('modules.cta.title')}
              </h3>
              <p className="text-abundra-gray-300 mb-abundra-xl max-w-3xl mx-auto font-abundra leading-relaxed">
                {t('modules.cta.subtitle')}
              </p>
              <Button
                variant="primary"
                size="lg"
                hoverEffect={true}
                glowEffect={true}
                className="bg-white text-abundra-gray-900 hover:bg-abundra-gray-100"
              >
                {t('modules.cta.button')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreModules;
