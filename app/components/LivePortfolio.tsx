'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Wallet, DollarSign, Percent, Clock, Coins, Calendar, BarChart3, Settings } from 'lucide-react';
import Link from 'next/link';

interface PortfolioData {
  currentValue: number;
  totalInvested: number;
  profit: number;
  profitPercentage: number;
  averageCost: number;
  dayChange: number;
  dayChangePercentage: number;
}

interface WalletData {
  balance: {
    ada: string;
  };
  adaPriceUsd: number;
  portfolio: PortfolioData;
  lastUpdated: string;
  isStatic?: boolean;
}

export default function LivePortfolio() {
  const [portfolioData, setPortfolioData] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPortfolioData = async () => {
    try {
      setError(null);
      const response = await fetch('/api/wallet/balance');
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio data');
      }
      const data = await response.json();
      setPortfolioData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolioData();
    // 每2分钟自动刷新
    const interval = setInterval(fetchPortfolioData, 120000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 4
    }).format(value);
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="animate-pulse">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
            <div className="ml-3 w-32 h-6 bg-white/20 rounded"></div>
          </div>
          <div className="space-y-3">
            <div className="w-24 h-8 bg-white/20 rounded"></div>
            <div className="w-20 h-4 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !portfolioData?.portfolio) {
    return (
      <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Wallet className="h-8 w-8" />
          <h3 className="text-lg font-semibold">投资组合</h3>
        </div>
        <div className="text-center py-4">
          <p className="text-white/80 text-sm mb-2">暂时无法获取数据</p>
          <button
            onClick={fetchPortfolioData}
            className="text-white hover:text-white/80 text-sm underline"
          >
            重试
          </button>
        </div>
      </div>
    );
  }

  const { portfolio } = portfolioData;
  const isPositive = portfolio.profit >= 0;
  const isDayPositive = portfolio.dayChange >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-gradient-to-br ${
        isPositive 
          ? 'from-green-600 via-green-700 to-emerald-800' 
          : 'from-red-600 via-red-700 to-rose-800'
      } rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl`}
    >
      {/* 增强背景装饰 */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16 blur-lg"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12 blur-md"></div>

      {/* 标题区域 - 增强视觉效果 */}
      <div className="flex items-center justify-between mb-6 relative z-10 flex-wrap gap-4">
        <div className="flex items-center space-x-3 md:space-x-4 min-w-0 flex-1">
          <motion.div 
            className="p-2 md:p-3 bg-white/20 rounded-xl backdrop-blur-sm flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Wallet className="h-6 w-6 md:h-8 md:w-8" />
          </motion.div>
          <div className="min-w-0">
            <h3 className="text-lg md:text-2xl font-bold truncate">实时投资组合</h3>
            <p className="text-white/90 text-xs md:text-sm font-medium">ADA 持仓表现 • 实时更新</p>
          </div>
        </div>
        <motion.div 
          className="text-right bg-white/10 rounded-xl p-2 md:p-3 backdrop-blur-sm flex-shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-white/80 text-xs font-medium">当前 ADA 价格</div>
          <div className="text-sm md:text-lg font-bold">{formatCurrency(portfolioData.adaPriceUsd)}</div>
        </motion.div>
      </div>

      {/* 主要数据 - 增强卡片效果 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 relative z-10">
        {/* 当前价值 */}
        <motion.div 
          className="text-center bg-white/15 rounded-xl p-3 md:p-4 backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <DollarSign className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-white/80" />
          <div className="text-white/80 text-xs mb-2 font-medium">当前价值</div>
          <div className="text-xl md:text-2xl font-bold mb-1">
            {formatCurrency(portfolio.currentValue)}
          </div>
          <div className="text-white/70 text-xs">
            ₳{parseFloat(portfolioData.balance.ada).toFixed(1)}
          </div>
        </motion.div>

        {/* 总收益 */}
        <motion.div 
          className="text-center bg-white/15 rounded-xl p-3 md:p-4 backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {isPositive ? (
            <TrendingUp className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-green-200" />
          ) : (
            <TrendingDown className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-red-200" />
          )}
          <div className="text-white/80 text-xs mb-2 font-medium">总收益</div>
          <div className="text-xl md:text-2xl font-bold mb-1">
            {isPositive ? '+' : ''}{formatCurrency(portfolio.profit)}
          </div>
          <div className="text-white/70 text-xs">
            {isPositive ? '+' : ''}{portfolio.profitPercentage.toFixed(1)}%
          </div>
        </motion.div>

        {/* 24小时变化 */}
        <motion.div 
          className="text-center bg-white/15 rounded-xl p-3 md:p-4 backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Clock className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-white/80" />
          <div className="text-white/80 text-xs mb-2 font-medium">24h 变化</div>
          <div className={`text-xl md:text-2xl font-bold mb-1 ${
            isDayPositive ? 'text-green-200' : 'text-red-200'
          }`}>
            {isDayPositive ? '+' : ''}{formatCurrency(portfolio.dayChange)}
          </div>
          <div className="text-white/70 text-xs">
            {isDayPositive ? '+' : ''}{portfolio.dayChangePercentage.toFixed(1)}%
          </div>
        </motion.div>
      </div>

      {/* 投资详情 - 增强卡片效果 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 text-sm relative z-10 mb-6">
        {[
          { label: "总投入", value: formatCurrency(portfolio.totalInvested), icon: Wallet },
          { label: "平均成本", value: formatCurrency(portfolio.averageCost), icon: DollarSign },
          { label: "持仓数量", value: `₳${parseFloat(portfolioData.balance.ada).toFixed(1)}`, icon: Coins },
          { label: "持仓天数", value: "45天", icon: Calendar }
        ].map((item, index) => (
          <motion.div 
            key={item.label}
            className="bg-white/10 rounded-xl p-2 md:p-3 text-center backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.05, y: -1 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <item.icon className="h-3 w-3 md:h-4 md:w-4 mx-auto mb-1 text-white/80" />
            <div className="text-white/80 text-xs mb-1 font-medium">{item.label}</div>
            <div className="font-bold text-xs md:text-sm">{item.value}</div>
          </motion.div>
        ))}
      </div>

      {/* 操作按钮 - 增强视觉效果 */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 relative z-10 mb-4">
        {[
          { href: "/admin/wallet", label: "钱包详情", icon: Wallet },
          { href: "/admin/portfolio", label: "完整分析", icon: BarChart3 },
          { href: "/admin/dashboard", label: "管理后台", icon: Settings }
        ].map((button, index) => (
          <Link
            key={button.href}
            href={button.href}
            className="flex-1 group"
          >
            <motion.div
              className="bg-white/20 hover:bg-white/30 text-center py-2 md:py-3 px-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <button.icon className="h-4 w-4 mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <div className="text-xs md:text-sm font-medium">{button.label}</div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* 更新时间 - 增强样式 */}
      <motion.div 
        className="text-center text-white/60 text-xs relative z-10 bg-white/5 rounded-lg py-2 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>最后更新: {new Date(portfolioData.lastUpdated).toLocaleTimeString('zh-CN', {hour: '2-digit', minute: '2-digit'})}</span>
        </div>
      </motion.div>
    </motion.div>
  );
} 