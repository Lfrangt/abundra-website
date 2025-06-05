"use client";

import { motion } from "framer-motion";
import { LucideIcon, Loader2 } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  // 按钮变体 - 增强 Abundra 品牌特色
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'link' | 'ai' | 'blockchain';
  
  // 尺寸
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // 内容
  children?: ReactNode;
  
  // 图标
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  
  // 交互
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  
  // 样式
  className?: string;
  fullWidth?: boolean;
  
  // 动画和视觉效果
  hoverEffect?: boolean;
  glowEffect?: boolean;
  delay?: number;
  
  // HTML 属性
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  
  // 自定义渐变（向后兼容）
  gradientFrom?: string;
  gradientTo?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  iconPosition = 'left',
  iconOnly = false,
  onClick,
  href,
  disabled = false,
  loading = false,
  className = '',
  fullWidth = false,
  hoverEffect = true,
  glowEffect = false,
  delay = 0,
  type = 'button',
  target,
  gradientFrom,
  gradientTo
}: ButtonProps) => {
  
  // Abundra 尺寸配置 - 使用品牌设计系统
  const sizeClasses = {
    sm: {
      padding: iconOnly ? 'p-abundra-sm' : 'px-abundra-md py-abundra-sm',
      text: 'text-abundra-sm',
      iconSize: 16,
      minWidth: iconOnly ? 'min-w-[32px]' : 'min-w-[120px]',
      height: iconOnly ? 'h-8' : 'h-10'
    },
    md: {
      padding: iconOnly ? 'p-abundra-md' : 'px-abundra-lg py-abundra-md',
      text: 'text-abundra-base',
      iconSize: 20,
      minWidth: iconOnly ? 'min-w-[48px]' : 'min-w-[160px]',
      height: iconOnly ? 'h-12' : 'h-12'
    },
    lg: {
      padding: iconOnly ? 'p-abundra-lg' : 'px-abundra-xl py-abundra-lg',
      text: 'text-abundra-lg',
      iconSize: 24,
      minWidth: iconOnly ? 'min-w-[56px]' : 'min-w-[200px]',
      height: iconOnly ? 'h-14' : 'h-14'
    },
    xl: {
      padding: iconOnly ? 'p-abundra-xl' : 'px-abundra-2xl py-abundra-xl',
      text: 'text-abundra-xl',
      iconSize: 28,
      minWidth: iconOnly ? 'min-w-[64px]' : 'min-w-[240px]',
      height: iconOnly ? 'h-16' : 'h-16'
    }
  };
  
  // Abundra 品牌化变体样式配置
  const variantStyles = {
    primary: {
      base: 'abundra-btn-primary shadow-abundra-md',
      hover: hoverEffect ? 'hover:shadow-abundra-lg hover:scale-105' : '',
      glow: glowEffect ? 'shadow-abundra-glow' : '',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
    },
    secondary: {
      base: 'abundra-btn-secondary shadow-abundra-md',
      hover: hoverEffect ? 'hover:shadow-abundra-glow-purple hover:scale-105' : '',
      glow: glowEffect ? 'shadow-abundra-glow-purple' : '',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
    },
    accent: {
      base: 'abundra-btn-accent shadow-abundra-md',
      hover: hoverEffect ? 'hover:shadow-abundra-glow-gold hover:scale-105' : '',
      glow: glowEffect ? 'shadow-abundra-glow-gold' : '',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
    },
    ai: {
      base: 'bg-gradient-to-r from-abundra-blue-500 via-abundra-purple-400 to-abundra-blue-600 text-white shadow-abundra-md',
      hover: hoverEffect ? 'hover:from-abundra-blue-600 hover:via-abundra-purple-500 hover:to-abundra-blue-700 hover:shadow-abundra-glow hover:scale-105' : '',
      glow: glowEffect ? 'shadow-abundra-glow' : '',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
    },
    blockchain: {
      base: 'bg-gradient-to-r from-abundra-gold-500 via-abundra-warning-400 to-abundra-gold-600 text-white shadow-abundra-md',
      hover: hoverEffect ? 'hover:from-abundra-gold-600 hover:via-abundra-warning-500 hover:to-abundra-gold-700 hover:shadow-abundra-glow-gold hover:scale-105' : '',
      glow: glowEffect ? 'shadow-abundra-glow-gold' : '',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
    },
    outline: {
      base: 'abundra-btn-outline',
      hover: hoverEffect ? 'hover:scale-105' : '',
      glow: glowEffect ? 'hover:shadow-abundra-glow' : '',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
    },
    ghost: {
      base: 'abundra-btn-ghost',
      hover: hoverEffect ? 'hover:scale-105' : '',
      glow: glowEffect ? 'hover:shadow-abundra-md' : '',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
    },
    link: {
      base: 'bg-transparent text-abundra-gray-700 underline-offset-4 font-abundra',
      hover: hoverEffect ? 'hover:underline hover:text-abundra-blue-700' : '',
      glow: '',
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed'
    }
  };
  
  // 处理自定义渐变（向后兼容）
  if (gradientFrom && gradientTo && variant === 'primary') {
    variantStyles.primary.base = `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white shadow-abundra-md font-abundra font-semibold rounded-abundra-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-abundra-blue-500`;
  }
  
  const currentSize = sizeClasses[size];
  const currentVariant = variantStyles[variant];
  
  // 渲染图标
  const renderIcon = () => {
    if (loading) {
      return <Loader2 size={currentSize.iconSize} className="animate-spin" />;
    }
    
    if (!Icon) return null;
    
    return <Icon size={currentSize.iconSize} />;
  };
  
  // 渲染内容
  const renderContent = () => {
    if (iconOnly) {
      return renderIcon();
    }
    
    if (loading) {
      return (
        <div className="flex items-center justify-center space-x-2">
          <Loader2 size={currentSize.iconSize} className="animate-spin" />
          <span>Loading...</span>
        </div>
      );
    }
    
    if (Icon && iconPosition === 'left') {
      return (
        <div className="flex items-center justify-center space-x-2">
          {renderIcon()}
          {children && <span>{children}</span>}
        </div>
      );
    }
    
    if (Icon && iconPosition === 'right') {
      return (
        <div className="flex items-center justify-center space-x-2">
          {children && <span>{children}</span>}
          {renderIcon()}
        </div>
      );
    }
    
    return children;
  };
  
  // 基础样式类 - 使用 Abundra 设计系统
  const baseClasses = `
    ${currentSize.padding}
    ${currentSize.text}
    ${currentSize.height}
    ${fullWidth ? 'w-full' : currentSize.minWidth}
    ${currentVariant.base}
    ${currentVariant.hover}
    ${currentVariant.glow}
    ${currentVariant.disabled}
    font-abundra
    font-semibold
    rounded-abundra-lg
    transition-all
    duration-300
    flex
    items-center
    justify-center
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    ${disabled || loading ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  // 如果是链接
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={baseClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={hoverEffect ? { scale: 1.05 } : undefined}
        whileTap={hoverEffect ? { scale: 0.98 } : undefined}
      >
        {renderContent()}
      </motion.a>
    );
  }
  
  // 如果是按钮
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect && !disabled && !loading ? { scale: 1.05 } : undefined}
      whileTap={hoverEffect && !disabled && !loading ? { scale: 0.98 } : undefined}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button; 