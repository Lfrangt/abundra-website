"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'default' | 'white' | 'minimal';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  variant = 'default',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  const textColorClasses = {
    default: 'text-gray-900',
    white: 'text-white',
    minimal: 'text-gray-700'
  };

  return (
    <motion.div
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Logo Icon - Using Original Image */}
      <motion.div
        className={`${sizeClasses[size]} relative flex items-center justify-center`}
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          filter: variant === 'white' ? 
            'drop-shadow(0 4px 20px rgba(255, 255, 255, 0.1))' : 
            'drop-shadow(0 4px 20px rgba(78, 205, 196, 0.3))'
        }}
      >
        <Image
          src="/abundra-logo.png"
          alt="Abundra Capital Logo"
          width={size === 'sm' ? 40 : size === 'md' ? 56 : size === 'lg' ? 80 : 112}
          height={size === 'sm' ? 40 : size === 'md' ? 56 : size === 'lg' ? 80 : 112}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Company Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex flex-col"
        >
          <span 
            className={`font-bold tracking-tight leading-none ${textSizeClasses[size]} ${textColorClasses[variant]}`}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            Abundra
          </span>
          {size !== 'sm' && (
            <span 
              className={`text-xs ${variant === 'white' ? 'text-white/70' : 'text-gray-500'} font-medium tracking-wider uppercase`}
              style={{
                letterSpacing: '0.1em'
              }}
            >
              CAPITAL
            </span>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo; 