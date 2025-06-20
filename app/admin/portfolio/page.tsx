'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import PortfolioChart from '../../components/PortfolioChart';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">投资组合分析</h1>
          </div>
          <p className="text-gray-600">
            查看您的 ADA 持仓表现、价格走势和投资收益分析
          </p>
        </motion.div>

        {/* Portfolio Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <PortfolioChart />
        </motion.div>

        {/* Additional Analysis Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Risk Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Activity className="h-6 w-6 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">风险分析</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">波动率 (30天)</span>
                <span className="font-medium text-orange-600">12.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">最大回撤</span>
                <span className="font-medium text-red-600">-8.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">夏普比率</span>
                <span className="font-medium text-green-600">1.24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">风险等级</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-medium">
                  中等
                </span>
              </div>
            </div>
          </motion.div>

          {/* Investment Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center space-x-3 mb-4">
              <PieChart className="h-6 w-6 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900">投资摘要</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">持仓时间</span>
                <span className="font-medium">45 天</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">买入次数</span>
                <span className="font-medium">2 次</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">平均持仓成本</span>
                <span className="font-medium">$0.50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">投资策略</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                  定投
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="h-6 w-6 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-900">表现指标</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">+18.5%</div>
              <div className="text-sm text-gray-500 mt-1">总收益率</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">+2.1%</div>
              <div className="text-sm text-gray-500 mt-1">日收益率</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1.24</div>
              <div className="text-sm text-gray-500 mt-1">夏普比率</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">0.85</div>
              <div className="text-sm text-gray-500 mt-1">贝塔系数</div>
            </div>
          </div>
        </motion.div>

        {/* Investment Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">投资时间线</h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium">首次买入</span>
                  <span className="text-green-600 font-medium">+₳10</span>
                </div>
                <div className="text-sm text-gray-500">2024年12月1日 · $0.45/ADA</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium">追加投资</span>
                  <span className="text-blue-600 font-medium">+₳10</span>
                </div>
                <div className="text-sm text-gray-500">2024年12月15日 · $0.55/ADA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 