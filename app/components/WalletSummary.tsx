'use client';

import { useState, useEffect } from 'react';
import { Wallet, TrendingUp, RefreshCcw, ExternalLink, AlertCircle, TrendingDown } from 'lucide-react';
import Link from 'next/link';

interface WalletData {
  address: string;
  balance: {
    ada: string;
    assets: Array<{
      unit: string;
      quantity: string;
    }>;
  };
  lastUpdated: string;
  adaPriceUsd?: number;
  isStatic?: boolean;
  message?: string;
  portfolio?: {
    currentValue: number;
    totalInvested: number;
    profit: number;
    profitPercentage: number;
    averageCost: number;
    dayChange: number;
    dayChangePercentage: number;
  };
}

export default function WalletSummary() {
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWalletData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/wallet/balance');
      if (!response.ok) {
        throw new Error('Failed to fetch wallet data');
      }
      
      const data = await response.json();
      setWalletData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWalletData();
    // 每2分钟自动刷新以获取实时数据
    const interval = setInterval(fetchWalletData, 120000);
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

  const formatAmount = (amount: string) => {
    return parseFloat(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    });
  };

  const calculateUsdValue = (ada: string) => {
    if (walletData && walletData.adaPriceUsd) {
      return (parseFloat(ada) * walletData.adaPriceUsd).toFixed(2);
    }
    return (parseFloat(ada) * 0.35).toFixed(2);
  };

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="animate-pulse">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
            <div className="ml-3 w-32 h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-3">
            <div className="w-24 h-8 bg-gray-200 rounded"></div>
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-red-500" />
            <h3 className="ml-3 text-lg font-medium text-gray-900">Cardano 钱包</h3>
          </div>
          <button
            onClick={fetchWalletData}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            title="重新加载"
          >
            <RefreshCcw className="h-4 w-4" />
          </button>
        </div>
        <div className="text-center py-4">
          <p className="text-red-600 text-sm mb-2">{error}</p>
          <button
            onClick={fetchWalletData}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Wallet className="h-8 w-8 text-blue-600" />
          <h3 className="ml-3 text-lg font-medium text-gray-900">Cardano 投资组合</h3>
          {walletData?.isStatic && (
            <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
              示例
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={fetchWalletData}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            title="刷新"
          >
            <RefreshCcw className="h-4 w-4" />
          </button>
          <Link
            href="/admin/wallet"
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            title="查看详情"
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {walletData && (
        <>
          {/* 静态数据提示 */}
          {walletData.isStatic && (
            <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-amber-700">
                  <p className="font-semibold mb-1">显示示例数据</p>
                  <p>配置 Blockfrost API 以显示实时余额</p>
                </div>
              </div>
            </div>
          )}

          {/* 投资组合价值 */}
          <div className="mb-4">
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {walletData.portfolio ? 
                    formatCurrency(walletData.portfolio.currentValue) : 
                    `₳ ${formatAmount(walletData.balance.ada)}`
                  }
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>
                    ₳ {formatAmount(walletData.balance.ada)}
                  </span>
                  {walletData.adaPriceUsd && (
                    <span>
                      @{formatCurrency(walletData.adaPriceUsd)}/ADA
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                {walletData.portfolio && (
                  <>
                    <div className={`flex items-center ${
                      walletData.portfolio.profit >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {walletData.portfolio.profit >= 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      <span className="text-sm font-medium">
                        {walletData.portfolio.profit >= 0 ? '+' : ''}
                        {formatCurrency(walletData.portfolio.profit)}
                      </span>
                    </div>
                    <div className={`text-sm ${
                      walletData.portfolio.profitPercentage >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {walletData.portfolio.profitPercentage >= 0 ? '+' : ''}
                      {walletData.portfolio.profitPercentage.toFixed(2)}%
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* 24小时变化 */}
          {walletData.portfolio && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">24小时变化</span>
                <div className={`flex items-center space-x-2 ${
                  walletData.portfolio.dayChange >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span className="text-sm font-medium">
                    {walletData.portfolio.dayChange >= 0 ? '+' : ''}
                    {formatCurrency(walletData.portfolio.dayChange)}
                  </span>
                  <span className="text-xs">
                    ({walletData.portfolio.dayChangePercentage >= 0 ? '+' : ''}
                    {walletData.portfolio.dayChangePercentage.toFixed(2)}%)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 投资详情 */}
          <div className="border-t pt-4">
            {walletData.portfolio ? (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">总投入:</span>
                  <span className="text-gray-900 font-medium">
                    {formatCurrency(walletData.portfolio.totalInvested)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">平均成本:</span>
                  <span className="text-gray-900 font-medium">
                    {formatCurrency(walletData.portfolio.averageCost)}/ADA
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">持仓数量:</span>
                  <span className="text-gray-900 font-medium">
                    ₳ {formatAmount(walletData.balance.ada)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">原生代币:</span>
                <span className="text-gray-900">
                  {walletData.balance.assets.length > 0 
                    ? `${walletData.balance.assets.length} 种` 
                    : '无'
                  }
                </span>
              </div>
            )}
            
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-500">更新时间:</span>
              <span className="text-gray-900">
                {new Date(walletData.lastUpdated).toLocaleTimeString('zh-CN')}
              </span>
            </div>
          </div>

          {/* 快捷操作 */}
          <div className="mt-4 pt-4 border-t space-y-2">
            <Link
              href="/admin/wallet"
              className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium block"
            >
              查看完整钱包详情
            </Link>
            <Link
              href="/admin/portfolio"
              className="w-full bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium block"
            >
              查看投资组合分析
            </Link>
          </div>
        </>
      )}
    </div>
  );
} 