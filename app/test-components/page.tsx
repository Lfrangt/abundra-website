"use client";

import { Brain, Sparkles, Play } from "lucide-react";

const TestComponents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* 简单标题测试 */}
        <section>
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <Sparkles size={16} />
              <span>组件测试</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-6 text-gray-900">
              基础组件 <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">测试页面</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              这是一个简化的测试页面，用于验证组件是否能正常显示
            </p>
          </div>
        </section>

        {/* 简单按钮测试 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">按钮测试</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
              主要按钮
            </button>
            <button className="bg-gray-100 text-gray-900 border border-gray-200 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300">
              次要按钮
            </button>
            <button className="border-2 border-gray-300 text-gray-700 bg-transparent px-6 py-3 rounded-2xl font-semibold hover:bg-emerald-600 hover:text-white hover:border-transparent transition-all duration-300">
              边框按钮
            </button>
          </div>
        </section>

        {/* 简单卡片测试 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">卡片测试</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Brain size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI 技术</h3>
              <p className="text-gray-600">先进的人工智能解决方案</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 mb-6">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">特性卡片</h3>
              <p className="text-gray-600 leading-relaxed">这是一个特性卡片的示例</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">当前价格</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">$43,250</div>
              <div className="text-sm font-medium text-green-600">+2.4%</div>
            </div>
          </div>
        </section>

        {/* 组合示例 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">组合示例</h2>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  开始您的 <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">数字化之旅</span>
                </h3>
                <p className="text-gray-600 mb-6">加入我们，探索人工智能、区块链和数字资本的无限可能</p>
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                    <Play size={20} />
                    <span>开始探索</span>
                  </button>
                  <button className="bg-white/50 backdrop-blur-sm text-gray-700 border border-gray-200/50 px-8 py-4 rounded-2xl font-semibold hover:bg-white/80 transition-all duration-300">
                    了解更多
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">AI 驱动创新</h4>
                  <p className="text-gray-600 text-sm">利用人工智能技术，创造智能化解决方案</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">数字资产管理</h4>
                  <p className="text-gray-600 text-sm">专业的数字货币投资与管理服务</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestComponents; 