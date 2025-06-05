"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  // 徽章相关
  badge?: {
    text: string;
    icon?: LucideIcon;
    variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ai' | 'blockchain' | 'tech';
    bgColor?: string; // 向后兼容
    textColor?: string; // 向后兼容
  };
  
  // 主标题
  title: string;
  
  // 高亮部分（渐变文字）
  highlightText?: string;
  highlightVariant?: 'primary' | 'ai' | 'blockchain' | 'tech' | 'custom';
  
  // 副标题
  subtitle?: string;
  
  // 对齐方式
  align?: 'left' | 'center' | 'right';
  
  // 尺寸
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // 动画延迟
  delay?: number;
  
  // 自定义类名
  className?: string;
  
  // 自定义渐变颜色（向后兼容）
  gradientFrom?: string;
  gradientTo?: string;
}

const SectionTitle = ({
  badge,
  title,
  highlightText,
  highlightVariant = 'primary',
  subtitle,
  align = 'center',
  size = 'lg',
  delay = 0,
  className = '',
  gradientFrom = 'from-emerald-600',
  gradientTo = 'to-teal-600'
}: SectionTitleProps) => {
  
  // Abundra 尺寸映射 - 使用品牌设计系统
  const sizeClasses = {
    sm: {
      title: 'text-abundra-2xl sm:text-abundra-3xl lg:text-abundra-4xl',
      subtitle: 'text-abundra-base',
      spacing: 'mb-abundra-4xl'
    },
    md: {
      title: 'text-abundra-3xl sm:text-abundra-4xl lg:text-abundra-5xl',
      subtitle: 'text-abundra-lg',
      spacing: 'mb-abundra-4xl'
    },
    lg: {
      title: 'text-abundra-4xl sm:text-abundra-5xl lg:text-abundra-6xl',
      subtitle: 'text-abundra-xl',
      spacing: 'mb-abundra-5xl'
    },
    xl: {
      title: 'text-abundra-5xl sm:text-abundra-6xl lg:text-abundra-7xl',
      subtitle: 'text-abundra-xl sm:text-abundra-2xl',
      spacing: 'mb-abundra-5xl'
    }
  };
  
  // 对齐方式映射
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  // Abundra 徽章变体
  const badgeVariants = {
    primary: 'abundra-badge-primary',
    secondary: 'abundra-badge-secondary',
    accent: 'abundra-badge-accent',
    neutral: 'abundra-badge-neutral',
    ai: 'abundra-badge bg-abundra-blue-100 text-abundra-blue-700 border-abundra-blue-200/50',
    blockchain: 'abundra-badge bg-abundra-gold-100 text-abundra-gold-700 border-abundra-gold-200/50',
    tech: 'abundra-badge bg-abundra-purple-100 text-abundra-purple-700 border-abundra-purple-200/50'
  };
  
  // 高亮文字渐变变体
  const highlightVariants = {
    primary: 'text-gradient-primary',
    ai: 'text-gradient-ai',
    blockchain: 'text-gradient-blockchain',
    tech: 'bg-gradient-to-r from-abundra-purple-500 to-abundra-blue-500 bg-clip-text text-transparent',
    custom: `bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`
  };
  
  const currentSize = sizeClasses[size];
  const BadgeIcon = badge?.icon;
  
  // 获取徽章样式
  const getBadgeClasses = () => {
    if (badge?.bgColor && badge?.textColor) {
      // 向后兼容
      return `abundra-badge ${badge.bgColor} ${badge.textColor}`;
    }
    return badgeVariants[badge?.variant || 'neutral'];
  };
  
  // 获取高亮文字样式
  const getHighlightClasses = () => {
    if (highlightVariant === 'custom') {
      return highlightVariants.custom;
    }
    return highlightVariants[highlightVariant];
  };
  
  return (
    <motion.div
      className={`${alignClasses[align]} ${currentSize.spacing} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* 徽章 */}
      {badge && (
        <motion.div 
          className="mb-abundra-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          <div className={getBadgeClasses()}>
            {BadgeIcon && (
              <BadgeIcon 
                size={16} 
                className={
                  badge.variant === 'ai' ? 'text-abundra-blue-600' :
                  badge.variant === 'blockchain' ? 'text-abundra-gold-600' :
                  badge.variant === 'tech' ? 'text-abundra-purple-600' :
                  badge.textColor?.includes('gray') ? 'text-abundra-blue-600' : ''
                } 
              />
            )}
            <span className="font-medium">{badge.text}</span>
          </div>
        </motion.div>
      )}
      
      {/* 主标题 */}
      <motion.h2
        className={`${currentSize.title} abundra-title text-abundra-gray-900 mb-abundra-lg`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
      >
        <span>{title}</span>
        {highlightText && (
          <>
            {' '}
            <span className={getHighlightClasses()}>
              {highlightText}
            </span>
          </>
        )}
      </motion.h2>
      
      {/* 副标题 */}
      {subtitle && (
        <motion.p
          className={`${currentSize.subtitle} text-abundra-gray-600 leading-relaxed font-abundra ${
            align === 'center' ? 'max-w-4xl mx-auto' : 
            align === 'right' ? 'max-w-4xl ml-auto' : 'max-w-4xl'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle; 