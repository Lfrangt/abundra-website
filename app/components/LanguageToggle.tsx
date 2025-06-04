"use client";

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-blue-100 hover:bg-blue-200 border border-blue-200 hover:border-blue-300 transition-colors duration-200 text-sm font-semibold text-blue-700 hover:text-blue-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
    >
      <Globe size={16} className="text-blue-600" />
      <span>
        {language === 'en' ? '中文' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle; 