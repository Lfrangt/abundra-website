"use client";

import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown, Target } from "lucide-react";
import { ReactNode } from "react";

interface CardProps {
  // 卡片变体 - 增强 Abundra 品牌特色
  variant?: 'default' | 'feature' | 'metric' | 'module' | 'glass' | 'ai' | 'blockchain' | 'tech';
  
  // 图标
  icon?: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  
  // 标题和内容
  title?: string;
  subtitle?: string;
  description?: string;
  value?: string;
  change?: string;
  
  // 特性列表
  features?: string[];
  
  // 自定义内容
  children?: ReactNode;
  
  // 样式配置
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  
  // 交互
  onClick?: () => void;
  href?: string;
  
  // 动画和视觉效果
  delay?: number;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  
  // 渐变配置（向后兼容）
  gradientFrom?: string;
  gradientTo?: string;
  bgGradientFrom?: string;
  bgGradientTo?: string;
}

const Card = ({
  variant = 'default',
  icon: Icon,
  iconColor = 'text-white',
  iconBgColor,
  title,
  subtitle,
  description,
  value,
  change,
  features = [],
  children,
  className = '',
  size = 'md',
  onClick,
  href,
  delay = 0,
  hoverEffect = true,
  glowEffect = false,
  gradientFrom = 'from-emerald-500',
  gradientTo = 'to-emerald-600',
  bgGradientFrom = 'from-emerald-50',
  bgGradientTo = 'to-emerald-100'
}: CardProps) => {
  
  // Abundra 尺寸配置 - 使用品牌设计系统
  const sizeClasses = {
    sm: 'p-abundra-md',
    md: 'p-abundra-lg',
    lg: 'p-abundra-xl'
  };
  
  // Abundra 品牌化变体样式配置
  const variantStyles = {
    default: {
      container: 'abundra-card abundra-card-hover',
      iconContainer: 'abundra-icon-container bg-gradient-to-r from-abundra-blue-500 to-abundra-blue-600'
    },
    feature: {
      container: 'abundra-card abundra-card-feature abundra-card-hover',
      iconContainer: 'abundra-icon-container abundra-icon-ai'
    },
    ai: {
      container: 'abundra-card abundra-card-feature abundra-card-hover border-abundra-blue-200/60',
      iconContainer: 'abundra-icon-container abundra-icon-ai'
    },
    blockchain: {
      container: 'abundra-card abundra-card-blockchain abundra-card-hover border-abundra-gold-200/60',
      iconContainer: 'abundra-icon-container abundra-icon-blockchain'
    },
    tech: {
      container: 'abundra-card abundra-card-hover bg-gradient-to-br from-abundra-purple-50 to-abundra-blue-50 border-abundra-purple-200/60',
      iconContainer: 'abundra-icon-container abundra-icon-tech'
    },
    metric: {
      container: 'abundra-card abundra-card-hover bg-white',
      iconContainer: 'abundra-icon-container bg-gradient-to-r from-abundra-gray-500 to-abundra-gray-600'
    },
    module: {
      container: 'abundra-card abundra-card-glass',
      iconContainer: 'abundra-icon-container'
    },
    glass: {
      container: 'abundra-card abundra-card-glass',
      iconContainer: 'abundra-icon-container bg-gradient-to-r from-abundra-blue-500 to-abundra-blue-600'
    }
  };
  
  const currentVariant = variantStyles[variant];
  
  // 渲染图标部分
  const renderIconSection = () => {
    if (!Icon) return null;
    
    const iconBg = iconBgColor || currentVariant.iconContainer;
    const iconSize = size === 'sm' ? 20 : size === 'lg' ? 32 : 24;
    const containerSize = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
    
    return (
      <div className={`${iconBg} ${containerSize} mb-abundra-lg rounded-abundra-lg`}>
        <Icon size={iconSize} className={iconColor} />
      </div>
    );
  };
  
  // 渲染变化指示器（用于 metric 变体）
  const renderChangeIndicator = () => {
    if (!change) return null;
    
    // 检查是否为目标值
    const isGoal = change === "Goal" || change.includes("目标") || change.includes("goal") || change.includes("Goal");
    const isPositive = change.startsWith("+");
    const isNegative = change.startsWith("-");
    
    let colorClass = 'text-abundra-gray-600';
    let icon = null;
    
    if (isGoal) {
      colorClass = 'text-abundra-gold-600';
      icon = <Target size={16} className="mr-1" />;
    } else if (isPositive) {
      colorClass = 'text-abundra-success-600';
      icon = <TrendingUp size={16} className="mr-1" />;
    } else if (isNegative) {
      colorClass = 'text-abundra-error-600';
      icon = <TrendingDown size={16} className="mr-1" />;
    }
    
    return (
      <div className={`flex items-center text-abundra-sm font-medium ${colorClass}`}>
        {icon}
        <span>{change}</span>
      </div>
    );
  };
  
  // 渲染内容
  const renderContent = () => {
    if (children) {
      return children;
    }
    
    switch (variant) {
      case 'metric':
        return (
          <div className="space-y-2">
            {title && <div className="text-abundra-sm text-abundra-gray-500 font-medium">{title}</div>}
            {value && <div className="text-abundra-3xl font-bold text-abundra-gray-900 font-abundra">{value}</div>}
            {renderChangeIndicator()}
            {description && <div className="text-abundra-sm text-abundra-gray-600 mt-2">{description}</div>}
          </div>
        );
        
      case 'feature':
      case 'ai':
      case 'blockchain':
      case 'tech':
        return (
          <div>
            {renderIconSection()}
            {title && <h3 className="text-abundra-lg font-semibold text-abundra-gray-900 mb-abundra-sm font-abundra">{title}</h3>}
            {subtitle && <div className="text-abundra-sm font-medium text-abundra-blue-600 mb-abundra-sm">{subtitle}</div>}
            {description && <p className="text-abundra-base text-abundra-gray-600 leading-relaxed">{description}</p>}
          </div>
        );
        
      case 'module':
        return (
          <div>
            {renderIconSection()}
            {title && <h4 className="text-abundra-lg font-semibold text-abundra-gray-900 mb-1 font-abundra">{title}</h4>}
            {subtitle && <div className="text-abundra-gold-600 font-medium text-abundra-sm mb-abundra-sm">{subtitle}</div>}
            {description && <p className="text-abundra-gray-600 text-abundra-sm leading-relaxed mb-abundra-lg">{description}</p>}
            {features.length > 0 && (
              <div className="space-y-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-abundra-blue-500 to-abundra-purple-500" />
                    <span className="text-abundra-gray-700 text-abundra-sm">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
        
      default:
        return (
          <div>
            {renderIconSection()}
            {title && <h3 className="text-abundra-lg font-semibold text-abundra-gray-900 mb-abundra-sm font-abundra">{title}</h3>}
            {subtitle && <p className="text-abundra-sm text-abundra-gray-500 mb-abundra-sm">{subtitle}</p>}
            {description && <p className="text-abundra-base text-abundra-gray-600 leading-relaxed">{description}</p>}
            {features.length > 0 && (
              <div className="mt-abundra-lg space-y-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-abundra-blue-500 to-abundra-blue-600" />
                    <span className="text-abundra-gray-600 text-abundra-sm">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
    }
  };
  
  // 处理自定义渐变（向后兼容）
  let containerClasses = currentVariant.container;
  if (variant === 'feature' && (bgGradientFrom !== 'from-emerald-50' || bgGradientTo !== 'to-emerald-100')) {
    containerClasses = `abundra-card abundra-card-hover bg-gradient-to-br ${bgGradientFrom} ${bgGradientTo} border-gray-200/50`;
  }
  
  // 组合最终样式
  const finalClasses = `
    ${containerClasses}
    ${sizeClasses[size]}
    ${onClick || href ? 'cursor-pointer' : ''}
    ${hoverEffect ? 'transition-all duration-300' : ''}
    ${glowEffect ? 'hover:shadow-abundra-glow' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  // 如果是链接
  if (href) {
    return (
      <motion.a
        href={href}
        className={finalClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={hoverEffect ? { y: -4 } : undefined}
        style={variant === 'module' ? { backdropFilter: 'blur(20px)' } : undefined}
      >
        {renderContent()}
      </motion.a>
    );
  }
  
  // 如果是可点击卡片
  if (onClick) {
    return (
      <motion.div
        onClick={onClick}
        className={finalClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={hoverEffect ? { y: -4 } : undefined}
        whileTap={{ scale: 0.98 }}
        style={variant === 'module' ? { backdropFilter: 'blur(20px)' } : undefined}
      >
        {renderContent()}
      </motion.div>
    );
  }
  
  // 普通卡片
  return (
    <motion.div
      className={finalClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      style={variant === 'module' ? { backdropFilter: 'blur(20px)' } : undefined}
    >
      {renderContent()}
    </motion.div>
  );
};

export default Card; 