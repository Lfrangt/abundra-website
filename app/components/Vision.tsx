"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart, Zap } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from './SectionTitle';
import Card from './Card';

const Vision = () => {
  const { t } = useLanguage();
  
  const visionPoints = [
    {
      icon: Eye,
      title: t('vision.vision.title'),
      description: t('vision.vision.desc'),
      variant: "ai" as const,
      delay: 0.1
    },
    {
      icon: Target,
      title: t('vision.mission.title'),
      description: t('vision.mission.desc'),
      variant: "blockchain" as const,
      delay: 0.2
    },
    {
      icon: Heart,
      title: t('vision.values.title'),
      description: t('vision.values.desc'),
      variant: "tech" as const,
      delay: 0.3
    },
    {
      icon: Zap,
      title: t('vision.innovation.title'),
      description: t('vision.innovation.desc'),
      variant: "ai" as const,
      delay: 0.4
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 使用 Abundra 品牌化的 SectionTitle */}
        <SectionTitle
          badge={{
            text: t('vision.badge') || "企业愿景",
            icon: Eye,
            variant: "primary"
          }}
          title={t('vision.header')}
          highlightText={t('vision.foundation')}
          highlightVariant="primary"
          subtitle={t('vision.subtitle')}
          size="lg"
          align="center"
          delay={0.2}
        />

        {/* Vision Grid - 使用 Abundra 品牌化卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-abundra-xl lg:gap-abundra-2xl">
          {visionPoints.map((point) => {
            return (
              <Card
                key={point.title}
                variant={point.variant}
                icon={point.icon}
                title={point.title}
                description={point.description}
                delay={point.delay}
                hoverEffect={true}
                glowEffect={false}
                size="lg"
                className="h-full"
              />
            );
          })}
        </div>

        {/* Abundra 品牌化企业宣言 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-abundra-5xl"
        >
          <div className="max-w-5xl mx-auto p-abundra-xl lg:p-abundra-2xl rounded-abundra-2xl bg-gradient-to-br from-abundra-gray-900 to-abundra-gray-800 text-white relative overflow-hidden shadow-abundra-2xl">
            {/* 品牌化背景装饰 */}
            <div className="absolute inset-0 bg-gradient-to-r from-abundra-blue-600/10 via-abundra-purple-600/10 to-abundra-gold-600/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-abundra-blue-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-abundra-purple-500/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <blockquote className="text-abundra-2xl lg:text-abundra-3xl font-abundra font-semibold leading-relaxed mb-abundra-lg italic text-white">
                "{t('vision.quote')}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-abundra-md">
                <div className="w-3 h-3 bg-gradient-to-r from-abundra-blue-400 to-abundra-blue-500 rounded-full shadow-abundra-glow" />
                <span className="text-abundra-lg text-abundra-gray-300 font-abundra font-medium">
                  Abundra Capital Inc.
                </span>
                <div className="w-3 h-3 bg-gradient-to-r from-abundra-purple-400 to-abundra-purple-500 rounded-full shadow-abundra-glow-purple" />
              </div>
              
              {/* 品牌标识线 */}
              <div className="mt-abundra-lg flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-abundra-blue-500 via-abundra-purple-500 to-abundra-gold-500 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 核心价值观数字展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-abundra-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-abundra-xl">
            <Card
              variant="metric"
              title="创新技术"
              value="AI + 区块链"
              change="融合驱动"
              description="前沿技术整合"
              size="md"
              hoverEffect={true}
            />
            
            <Card
              variant="metric"
              title="服务客户"
              value="10,000+"
              change="+25%"
              description="用户增长率"
              size="md"
              hoverEffect={true}
            />
            
            <Card
              variant="metric"
              title="资产管理"
              value="$50M+"
              change="Goal: $100M"
              description="总管理资产"
              size="md"
              hoverEffect={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
