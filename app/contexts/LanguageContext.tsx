"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.aiLab': 'AI Lab',
    'nav.blockchain': 'Blockchain',
    'nav.investment': 'Investment',  
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.announcement': 'Building the Future with AI & Blockchain',
    'hero.welcome': 'Welcome to',
    'hero.company': 'Abundra Capital',
    'hero.subtitle': 'Wealth is not just about capital, but calmness, clarity, and code.',
    'hero.tagline': 'AI • Blockchain • Digital Capital',
    'hero.exploreVision': 'Explore Our Vision',
    'hero.watchDemo': 'Watch Demo',
    'hero.scrollExplore': 'Scroll to explore',
    
    // Features
    'feature.aiLab.title': 'AI Lab',
    'feature.aiLab.desc': 'Advanced AI solutions and model development',
    'feature.blockchain.title': 'Blockchain R&D',
    'feature.blockchain.desc': 'Web3 innovation and DeFi infrastructure',
    'feature.digitalCapital.title': 'Digital Capital',
    'feature.digitalCapital.desc': 'Strategic BTC holdings and crypto investments',
    
    // Vision Section
    'vision.header': 'Our',
    'vision.foundation': 'Foundation',
    'vision.subtitle': 'Guided by principles of innovation, integrity, and impact, we\'re building tomorrow\'s financial infrastructure today.',
    'vision.vision.title': 'Vision',
    'vision.vision.desc': 'Building a platform that integrates AI, blockchain, and digital capital for a more abundant, intelligent, and peaceful future.',
    'vision.mission.title': 'Mission',
    'vision.mission.desc': 'Empowering blockchain innovation with AI, laying out the future with digital capital, and building long-term value with technology.',
    'vision.values.title': 'Values',
    'vision.values.desc': 'Calmness, clarity, and code. We believe wealth extends beyond capital to encompass wisdom and well-being.',
    'vision.innovation.title': 'Innovation',
    'vision.innovation.desc': 'Pioneering the convergence of AI and Web3 technologies to create unprecedented value and opportunities.',
    'vision.quote': '"Wealth is not just about capital, but calmness, clarity, and code."',
    
    // Core Modules
    'modules.badge': 'Core Business Modules',
    'modules.header': 'Three Pillars of',
    'modules.innovation': 'Innovation',
    'modules.subtitle': 'Our integrated approach combines AI innovation, blockchain infrastructure, and strategic digital capital management to create unprecedented value.',
    'modules.ai.title': 'AI Lab',
    'modules.ai.subtitle': 'Artificial Intelligence Solutions',
    'modules.ai.desc': 'Advanced AI model fine-tuning, intelligent advisory systems, and enterprise AI tool development. We create smart solutions that enhance decision-making and automate complex processes.',
    'modules.ai.feature1': 'GPT Model Fine-tuning',
    'modules.ai.feature2': 'Intelligent Investment Advisory',
    'modules.ai.feature3': 'Enterprise AI Tools',
    'modules.ai.feature4': 'Predictive Analytics',
    'modules.blockchain.title': 'Blockchain R&D',
    'modules.blockchain.subtitle': 'Web3 Infrastructure & Innovation',
    'modules.blockchain.desc': 'Cardano ecosystem development, smart contract tools, DID projects, and Web3 API services. Building the decentralized infrastructure of tomorrow.',
    'modules.blockchain.feature1': 'Cardano Smart Contracts',
    'modules.blockchain.feature2': 'Decentralized Identity (DID)',
    'modules.blockchain.feature3': 'Web3 API Development',
    'modules.blockchain.feature4': 'Blockchain Infrastructure',
    'modules.capital.title': 'Digital Capital',
    'modules.capital.subtitle': 'Strategic Asset Management',
    'modules.capital.desc': 'BTC treasury management, digital asset allocation, and early-stage project investments. Building anti-inflation, anti-cycle digital wealth structures.',
    'modules.capital.feature1': 'BTC Treasury Strategy',
    'modules.capital.feature2': 'Digital Asset Portfolio',
    'modules.capital.feature3': 'Early Stage Investments',
    'modules.capital.feature4': 'Risk Management',
    'modules.learnMore': 'Learn More',
    'modules.activeProjects': 'Active Projects',
    'modules.cta.title': 'Ready to Build the Future?',
    'modules.cta.subtitle': 'Join us in creating the next generation of AI-powered blockchain solutions',
    'modules.cta.button': 'Get Started Today',
    
    // BTC Strategy
    'btc.badge': 'Digital Treasury Strategy',
    'btc.header': 'Bitcoin',
    'btc.treasury': 'Treasury',
    'btc.subtitle': 'Building anti-inflation, anti-cycle digital wealth structures through strategic Bitcoin holdings and transparent asset management.',
    'btc.currentPrice': 'Current Price',
    'btc.marketCap': 'Market Cap',
    'btc.volume24h': 'Volume 24h',
    'btc.holdingsTarget': 'Holdings Target',
    'btc.goal': 'Goal',
    'btc.strategyHeader': 'Strategic Asset Allocation',
    'btc.strategyDesc': 'Our Bitcoin treasury strategy focuses on long-term value preservation and growth through disciplined accumulation and secure storage practices.',
    'btc.initialTarget.title': 'Initial Target',
    'btc.initialTarget.value': '1 BTC',
    'btc.initialTarget.desc': 'Company treasury holding as anti-inflation asset',
    'btc.security.title': 'Security Model',
    'btc.security.value': 'Multi-Sig',
    'btc.security.desc': 'Multi-location cold storage with asset layering',
    'btc.platforms.title': 'Platforms',
    'btc.platforms.value': 'Global',
    'btc.platforms.desc': 'Bitbuy (Canada), Kraken (Global), Cold Wallets',
    'btc.accounting.title': 'Accounting',
    'btc.accounting.value': 'IFRS',
    'btc.accounting.desc': 'Crypto asset accounting with periodic revaluation',
    'btc.treasuryLabel': 'BTC Treasury',
    'btc.corporateHoldings': 'Corporate Holdings',
    'btc.features.security.title': 'Security First',
    'btc.features.security.desc': 'Multi-signature wallets and geographic distribution for maximum security',
    'btc.features.growth.title': 'Long-term Growth',
    'btc.features.growth.desc': 'Dollar-cost averaging strategy with focus on long-term value appreciation',
    'btc.features.transparent.title': 'Transparent Holdings',
    'btc.features.transparent.desc': 'Public Bitcoin addresses and regular portfolio updates for transparency',
    'btc.targetBtc': 'Target BTC',
    'btc.secureStorage': 'Secure Storage',
    
    // Footer
    'footer.description': 'Building the future with AI, blockchain, and digital capital. We create intelligent solutions for tomorrow\'s financial infrastructure.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.aboutUs': 'About Us',
    'footer.ourTeam': 'Our Team',
    'footer.careers': 'Careers',
    'footer.news': 'News',
    'footer.aiLab': 'AI Lab',
    'footer.blockchainRD': 'Blockchain R&D',
    'footer.digitalCapital': 'Digital Capital',
    'footer.consulting': 'Consulting',
    'footer.documentation': 'Documentation',
    'footer.apiReference': 'API Reference',
    'footer.whitePapers': 'White Papers',
    'footer.blog': 'Blog',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.cookiePolicy': 'Cookie Policy',
    'footer.disclaimer': 'Disclaimer',
    
    // Footer contact
    'contact.address': 'Vancouver, BC, Canada',
    
    // Common
    'language.english': 'English',
    'language.chinese': '中文',
  },
  zh: {
    // Navigation
    'nav.aiLab': 'AI 实验室',
    'nav.blockchain': '区块链',
    'nav.investment': '投资',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.getStarted': '开始使用',
    
    // Hero Section
    'hero.announcement': '用 AI 与区块链构建未来',
    'hero.welcome': '欢迎来到',
    'hero.company': 'Abundra Capital',
    'hero.subtitle': '财富不仅仅是资本，更是冷静、清晰与代码的结合。',
    'hero.tagline': 'AI • 区块链 • 数字资本',
    'hero.exploreVision': '探索我们的愿景',
    'hero.watchDemo': '观看演示',
    'hero.scrollExplore': '向下滚动探索',
    
    // Features
    'feature.aiLab.title': 'AI 实验室',
    'feature.aiLab.desc': '先进的AI解决方案和模型开发',
    'feature.blockchain.title': '区块链研发',
    'feature.blockchain.desc': 'Web3创新和DeFi基础设施',
    'feature.digitalCapital.title': '数字资本',
    'feature.digitalCapital.desc': '战略性BTC持有和加密货币投资',
    
    // Vision Section
    'vision.header': '我们的',
    'vision.foundation': '基础',
    'vision.subtitle': '秉承创新、诚信和影响力的原则，我们正在建设明天的金融基础设施。',
    'vision.vision.title': '愿景',
    'vision.vision.desc': '构建一个整合AI、区块链和数字资本的平台，创造更加富足、智能与和谐的未来。',
    'vision.mission.title': '使命',
    'vision.mission.desc': '用AI赋能区块链创新，用数字资本布局未来，用技术构建长期价值。',
    'vision.values.title': '价值观',
    'vision.values.desc': '冷静、清晰与代码。我们相信财富不仅是资本，更包含智慧与幸福。',
    'vision.innovation.title': '创新',
    'vision.innovation.desc': '引领AI与Web3技术的融合，创造前所未有的价值与机遇。',
    'vision.quote': '"财富不仅仅是资本，更是冷静、清晰与代码的结合。"',
    
    // Core Modules
    'modules.badge': '核心业务模块',
    'modules.header': '创新的',
    'modules.innovation': '三大支柱',
    'modules.subtitle': '我们的综合方法结合了AI创新、区块链基础设施和战略性数字资本管理，创造前所未有的价值。',
    'modules.ai.title': 'AI 实验室',
    'modules.ai.subtitle': '人工智能解决方案',
    'modules.ai.desc': '先进的AI模型微调、智能投资咨询系统和企业AI工具开发。我们创造智能解决方案，增强决策能力并自动化复杂流程。',
    'modules.ai.feature1': 'GPT模型微调',
    'modules.ai.feature2': '智能投资咨询',
    'modules.ai.feature3': '企业AI工具',
    'modules.ai.feature4': '预测分析',
    'modules.blockchain.title': '区块链研发',
    'modules.blockchain.subtitle': 'Web3基础设施与创新',
    'modules.blockchain.desc': 'Cardano生态系统开发、智能合约工具、DID项目和Web3 API服务。构建明天的去中心化基础设施。',
    'modules.blockchain.feature1': 'Cardano智能合约',
    'modules.blockchain.feature2': '去中心化身份(DID)',
    'modules.blockchain.feature3': 'Web3 API开发',
    'modules.blockchain.feature4': '区块链基础设施',
    'modules.capital.title': '数字资本',
    'modules.capital.subtitle': '战略资产管理',
    'modules.capital.desc': 'BTC库存管理、数字资产配置和早期项目投资。构建抗通胀、反周期的数字财富结构。',
    'modules.capital.feature1': 'BTC库存策略',
    'modules.capital.feature2': '数字资产投资组合',
    'modules.capital.feature3': '早期阶段投资',
    'modules.capital.feature4': '风险管理',
    'modules.learnMore': '了解更多',
    'modules.activeProjects': '活跃项目',
    'modules.cta.title': '准备好构建未来了吗？',
    'modules.cta.subtitle': '加入我们，共同创造下一代AI驱动的区块链解决方案',
    'modules.cta.button': '立即开始',
    
    // BTC Strategy
    'btc.badge': '数字库存策略',
    'btc.header': '比特币',
    'btc.treasury': '库存',
    'btc.subtitle': '通过战略性比特币持有和透明资产管理，构建抗通胀、反周期的数字财富结构。',
    'btc.currentPrice': '当前价格',
    'btc.marketCap': '市值',
    'btc.volume24h': '24小时成交量',
    'btc.holdingsTarget': '持有目标',
    'btc.goal': '目标',
    'btc.strategyHeader': '战略资产配置',
    'btc.strategyDesc': '我们的比特币库存策略专注于通过有纪律的积累和安全存储实践实现长期价值保护和增长。',
    'btc.initialTarget.title': '初始目标',
    'btc.initialTarget.value': '1 BTC',
    'btc.initialTarget.desc': '公司库存持有作为抗通胀资产',
    'btc.security.title': '安全模型',
    'btc.security.value': '多重签名',
    'btc.security.desc': '多地点冷存储与资产分层',
    'btc.platforms.title': '平台',
    'btc.platforms.value': '全球',
    'btc.platforms.desc': 'Bitbuy(加拿大)、Kraken(全球)、冷钱包',
    'btc.accounting.title': '会计',
    'btc.accounting.value': 'IFRS',
    'btc.accounting.desc': '加密资产会计与定期重估',
    'btc.treasuryLabel': 'BTC库存',
    'btc.corporateHoldings': '企业持有',
    'btc.features.security.title': '安全第一',
    'btc.features.security.desc': '多重签名钱包和地理分布，确保最大安全性',
    'btc.features.growth.title': '长期增长',
    'btc.features.growth.desc': '定投策略，专注长期价值增长',
    'btc.features.transparent.title': '透明持有',
    'btc.features.transparent.desc': '公开比特币地址和定期投资组合更新，确保透明度',
    'btc.targetBtc': '目标BTC',
    'btc.secureStorage': '安全存储',
    
    // Footer
    'footer.description': '用AI、区块链和数字资本构建未来。我们为明天的金融基础设施创造智能解决方案。',
    'footer.company': '公司',
    'footer.services': '服务',
    'footer.resources': '资源',
    'footer.legal': '法律',
    'footer.aboutUs': '关于我们',
    'footer.ourTeam': '我们的团队',
    'footer.careers': '招聘',
    'footer.news': '新闻',
    'footer.aiLab': 'AI实验室',
    'footer.blockchainRD': '区块链研发',
    'footer.digitalCapital': '数字资本',
    'footer.consulting': '咨询',
    'footer.documentation': '文档',
    'footer.apiReference': 'API参考',
    'footer.whitePapers': '白皮书',
    'footer.blog': '博客',
    'footer.privacyPolicy': '隐私政策',
    'footer.termsOfService': '服务条款',
    'footer.cookiePolicy': 'Cookie政策',
    'footer.disclaimer': '免责声明',
    
    // Footer contact
    'contact.address': '加拿大不列颠哥伦比亚省温哥华',
    
    // Common
    'language.english': 'English',
    'language.chinese': '中文',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 