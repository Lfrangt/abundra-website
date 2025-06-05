"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles, Brain, Bitcoin, Zap } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import Button from './Button';
import Card from './Card';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden abundra-bg-hero">
      {/* Abundra 品牌化背景元素 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* AI 主题背景 - 蓝紫渐变 */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-abundra-blue-400/15 to-abundra-purple-400/15 rounded-full blur-3xl"
        />
        
        {/* Blockchain 主题背景 - 金色渐变 */}
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-abundra-gold-400/15 to-abundra-blue-400/15 rounded-full blur-3xl"
        />
        
        {/* 科技网格背景 */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 122, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Abundra 品牌公告徽章 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-abundra-xl"
        >
          <div className="abundra-badge-primary">
            <Sparkles size={16} className="text-abundra-blue-600" />
            <span>{t('hero.announcement')}</span>
          </div>
        </motion.div>

        {/* 主标题 - 使用 Abundra 品牌渐变 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-abundra-5xl sm:text-abundra-6xl lg:text-abundra-7xl abundra-title text-abundra-gray-900 mb-abundra-lg"
        >
          <span className="block">{t('hero.welcome')}</span>
          <span className="block text-gradient-primary">
            {t('hero.company')}
          </span>
        </motion.h1>

        {/* 副标题 - 使用 Abundra 字体系统 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-abundra-xl sm:text-abundra-2xl text-abundra-gray-600 mb-abundra-4xl max-w-5xl mx-auto leading-relaxed font-abundra"
        >
          {t('hero.subtitle')}
          <br />
          <span className="font-semibold text-gradient-ai">{t('hero.tagline')}</span>
        </motion.p>

        {/* CTA 按钮 - 使用品牌化按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-abundra-md sm:space-y-0 sm:space-x-abundra-lg mb-abundra-4xl"
        >
          <Button
            variant="primary"
            size="xl"
            hoverEffect={true}
            glowEffect={true}
            className="min-w-[240px]"
          >
            {t('hero.exploreVision')}
          </Button>
          
          <Button
            variant="ghost"
            size="xl"
            icon={Play}
            iconPosition="left"
            hoverEffect={true}
          >
            {t('hero.watchDemo')}
          </Button>
        </motion.div>

        {/* 核心特性卡片 - 使用 AI/Blockchain 主题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-abundra-xl mb-abundra-4xl"
        >
          <Card
            variant="ai"
            icon={Brain}
            title={t('feature.aiLab.title')}
            description={t('feature.aiLab.desc')}
            delay={0.7}
            hoverEffect={true}
            glowEffect={false}
            size="lg"
          />
          
          <Card
            variant="blockchain"
            icon={Bitcoin}
            title={t('feature.blockchain.title')}
            description={t('feature.blockchain.desc')}
            delay={0.8}
            hoverEffect={true}
            glowEffect={false}
            size="lg"
          />
          
          <Card
            variant="tech"
            icon={Zap}
            title={t('feature.digitalCapital.title')}
            description={t('feature.digitalCapital.desc')}
            delay={0.9}
            hoverEffect={true}
            glowEffect={false}
            size="lg"
          />
        </motion.div>

        {/* 滚动指示器 - 品牌化样式 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col items-center"
        >
          <span className="text-abundra-sm text-abundra-gray-500 mb-abundra-sm font-abundra">
            {t('hero.scrollExplore')}
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full bg-gradient-to-r from-abundra-blue-500 to-abundra-purple-500 flex items-center justify-center shadow-abundra-md hover:shadow-abundra-glow transition-all duration-300"
          >
            <ArrowDown size={16} className="text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
