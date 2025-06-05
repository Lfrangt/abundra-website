"use client";

import { Brain, Sparkles, Play, ArrowRight, Bitcoin, Shield, TrendingUp } from "lucide-react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import Button from "../Button";

const ComponentExamples = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* SectionTitle 示例 */}
        <section>
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <Sparkles size={16} />
              <span>组件展示</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900">
              模块化组件 <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">使用示例</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              展示如何使用 SectionTitle、Card 和 Button 组件来构建一致的用户界面
            </p>
          </div>
        </section>

        {/* Button 示例 */}
        <section>
          <div className="text-left mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
              Button 组件 <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">多种样式</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              支持不同变体、尺寸和图标配置的按钮组件
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 主要按钮 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">主要按钮</h3>
              <div className="space-y-3">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-2xl font-semibold text-sm hover:shadow-lg transition-all duration-300">
                  小尺寸按钮
                </button>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                  <Play size={20} />
                  <span>播放演示</span>
                </button>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                  <span>探索更多</span>
                  <ArrowRight size={24} />
                </button>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:shadow-lg transition-all duration-300 w-full">
                  全宽按钮
                </button>
              </div>
            </div>

            {/* 次要按钮 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">次要按钮</h3>
              <div className="space-y-3">
                <Button variant="secondary" size="md">
                  次要按钮
                </Button>
                <Button variant="outline" icon={Shield}>
                  边框按钮
                </Button>
                <Button variant="ghost" icon={Brain}>
                  透明按钮
                </Button>
                <Button variant="link">
                  链接按钮
                </Button>
              </div>
            </div>

            {/* 特殊状态 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">特殊状态</h3>
              <div className="space-y-3">
                <Button loading>加载中...</Button>
                <Button disabled>禁用状态</Button>
                <Button iconOnly icon={Bitcoin} />
                <Button 
                  href="#" 
                  target="_blank"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  外部链接
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Card 示例 */}
        <section>
          <SectionTitle
            title="Card 组件"
            highlightText="多种变体"
            subtitle="支持不同用途的卡片组件，包括特性卡片、指标卡片、模块卡片等"
            size="lg"
            align="left"
          />
          
          <div className="space-y-12">
            {/* 特性卡片 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">特性卡片</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                  variant="feature"
                  icon={Brain}
                  title="AI 实验室"
                  description="先进的人工智能研究与开发平台，推动技术创新边界"
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-600"
                  bgGradientFrom="from-blue-50"
                  bgGradientTo="to-blue-100"
                />
                <Card
                  variant="feature"
                  icon={Shield}
                  title="区块链技术"
                  description="安全可靠的分布式账本技术，构建信任基础设施"
                  gradientFrom="from-purple-500"
                  gradientTo="to-purple-600"
                  bgGradientFrom="from-purple-50"
                  bgGradientTo="to-purple-100"
                />
                <Card
                  variant="feature"
                  icon={TrendingUp}
                  title="数字资本"
                  description="智能投资策略与风险管理，实现财富增值目标"
                  gradientFrom="from-orange-500"
                  gradientTo="to-orange-600"
                  bgGradientFrom="from-orange-50"
                  bgGradientTo="to-orange-100"
                />
              </div>
            </div>

            {/* 指标卡片 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">指标卡片</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <Card
                  variant="metric"
                  subtitle="当前价格"
                  value="$43,250"
                  change="+2.4%"
                />
                <Card
                  variant="metric"
                  subtitle="市值"
                  value="$847B"
                  change="+1.8%"
                />
                <Card
                  variant="metric"
                  subtitle="24h 交易量"
                  value="$18.2B"
                  change="+12.3%"
                />
                <Card
                  variant="metric"
                  subtitle="持有目标"
                  value="1+ BTC"
                  change="目标"
                />
              </div>
            </div>

            {/* 模块卡片 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">模块卡片</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card
                  variant="module"
                  icon={Bitcoin}
                  iconBgColor="bg-gradient-to-r from-orange-500 to-orange-600"
                  title="BTC 投资策略"
                  subtitle="初始目标: 1+ BTC"
                  description="通过系统性投资策略，逐步建立比特币储备资产组合"
                  features={[
                    "定期定额投资",
                    "多平台分散持有",
                    "专业级安全存储",
                    "透明化财务记录"
                  ]}
                  gradientFrom="from-orange-500"
                  gradientTo="to-orange-600"
                />
                <Card
                  variant="module"
                  icon={Brain}
                  iconBgColor="bg-gradient-to-r from-blue-500 to-blue-600"
                  title="AI 技术研发"
                  subtitle="前沿技术探索"
                  description="专注于人工智能领域的技术研究与产品开发"
                  features={[
                    "机器学习算法",
                    "自然语言处理",
                    "计算机视觉",
                    "智能决策系统"
                  ]}
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-600"
                />
              </div>
            </div>

            {/* 玻璃效果卡片 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">玻璃效果卡片</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                  variant="glass"
                  icon={Sparkles}
                  title="创新技术"
                  description="探索前沿科技，推动行业发展"
                />
                <Card
                  variant="glass"
                  icon={Shield}
                  title="安全保障"
                  description="多层安全防护，保障资产安全"
                />
                <Card
                  variant="glass"
                  icon={TrendingUp}
                  title="持续增长"
                  description="稳健投资策略，实现长期增值"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 组合使用示例 */}
        <section>
          <SectionTitle
            badge={{
              text: "综合应用",
              icon: Sparkles,
              bgColor: "bg-emerald-100",
              textColor: "text-emerald-700"
            }}
            title="组件组合"
            highlightText="实际应用"
            subtitle="展示如何将多个组件组合使用，构建完整的页面区块"
            size="lg"
          />
          
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <SectionTitle
                  title="开始您的"
                  highlightText="数字化之旅"
                  subtitle="加入我们，探索人工智能、区块链和数字资本的无限可能"
                  size="md"
                  align="left"
                  className="mb-8"
                />
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    size="lg" 
                    icon={Play}
                    onClick={() => console.log('开始探索')}
                  >
                    开始探索
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    了解更多
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <Card
                  variant="glass"
                  icon={Brain}
                  title="AI 驱动创新"
                  description="利用人工智能技术，创造智能化解决方案"
                  size="sm"
                />
                <Card
                  variant="glass"
                  icon={Bitcoin}
                  title="数字资产管理"
                  description="专业的数字货币投资与管理服务"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentExamples; 