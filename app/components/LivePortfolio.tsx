'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Wallet, DollarSign, Percent, Clock } from 'lucide-react';
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
          ? 'from-green-600 to-green-800' 
          : 'from-red-600 to-red-800'
      } rounded-xl p-6 text-white relative overflow-hidden`}
    >
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

      {/* 标题 */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center space-x-3">
          <Wallet className="h-8 w-8" />
          <div>
            <h3 className="text-lg font-semibold">实时投资组合</h3>
            <p className="text-white/80 text-sm">ADA 持仓表现</p>
          </div>
        </div>
        {portfolioData.isStatic && (
          <span className="text-xs bg-white/20 px-2 py-1 rounded">
            示例数据
          </span>
        )}
      </div>

      {/* 主要数据 */}
      <div className="grid grid-cols-2 gap-6 mb-6 relative z-10">
        {/* 当前价值 */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="h-5 w-5 text-white/80" />
            <span className="text-white/80 text-sm">当前价值</span>
          </div>
          <div className="text-3xl font-bold">
            {formatCurrency(portfolio.currentValue)}
          </div>
          <div className="text-white/80 text-sm">
            ₳ {parseFloat(portfolioData.balance.ada).toFixed(2)} @ {formatCurrency(portfolioData.adaPriceUsd)}
          </div>
        </div>

        {/* 总收益 */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            {isPositive ? (
              <TrendingUp className="h-5 w-5 text-white/80" />
            ) : (
              <TrendingDown className="h-5 w-5 text-white/80" />
            )}
            <span className="text-white/80 text-sm">总收益</span>
          </div>
          <div className="text-3xl font-bold">
            {isPositive ? '+' : ''}{formatCurrency(portfolio.profit)}
          </div>
          <div className="text-white/80 text-sm">
            {isPositive ? '+' : ''}{portfolio.profitPercentage.toFixed(2)}%
          </div>
        </div>
      </div>

      {/* 24小时变化 */}
      <div className="bg-white/10 rounded-lg p-4 mb-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-white/80" />
            <span className="text-white/80 text-sm">24小时变化</span>
          </div>
          <div className={`flex items-center space-x-2 ${
            isDayPositive ? 'text-green-200' : 'text-red-200'
          }`}>
            {isDayPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="font-semibold">
              {isDayPositive ? '+' : ''}{formatCurrency(portfolio.dayChange)}
            </span>
            <span className="text-sm">
              ({isDayPositive ? '+' : ''}{portfolio.dayChangePercentage.toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>

      {/* 投资详情 */}
      <div className="grid grid-cols-2 gap-4 text-sm relative z-10">
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-white/80 mb-1">总投入</div>
          <div className="font-semibold">{formatCurrency(portfolio.totalInvested)}</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-white/80 mb-1">平均成本</div>
          <div className="font-semibold">{formatCurrency(portfolio.averageCost)}/ADA</div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="mt-6 flex space-x-3 relative z-10">
        <Link
          href="/admin/wallet"
          className="flex-1 bg-white/20 hover:bg-white/30 text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
        >
          钱包详情
        </Link>
        <Link
          href="/admin/portfolio"
          className="flex-1 bg-white/20 hover:bg-white/30 text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
        >
          分析报告
        </Link>
      </div>

      {/* 更新时间 */}
      <div className="mt-4 text-center text-white/60 text-xs relative z-10">
        更新于 {new Date(portfolioData.lastUpdated).toLocaleTimeString('zh-CN')}
      </div>
    </motion.div>
  );
} 