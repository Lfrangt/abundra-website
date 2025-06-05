# 基础 UI 组件库

本文档介绍了项目中的基础 UI 组件，包括 `SectionTitle`、`Card` 和 `Button`。这些组件遵循统一的设计规范，支持多种配置选项，可以灵活组合使用。

## 组件概览

### SectionTitle 组件
用于页面各个部分的标题展示，支持徽章、主标题、高亮文字和副标题。

### Card 组件  
多功能卡片组件，支持特性卡片、指标卡片、模块卡片等多种变体。

### Button 组件
可配置的按钮组件，支持多种样式、尺寸和交互状态。

## SectionTitle 组件

### 基础用法

```tsx
import SectionTitle from './components/SectionTitle';
import { Sparkles } from 'lucide-react';

// 简单标题
<SectionTitle
  title="欢迎来到"
  highlightText="Abundra"
  subtitle="探索人工智能、区块链和数字资本的无限可能"
/>

// 带徽章的标题
<SectionTitle
  badge={{
    text: "新功能",
    icon: Sparkles,
    bgColor: "bg-blue-100",
    textColor: "text-blue-700"
  }}
  title="最新更新"
  highlightText="功能介绍"
  subtitle="了解我们最新推出的功能和改进"
  size="lg"
/>
```

### API 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `badge` | `BadgeProps` | - | 徽章配置 |
| `title` | `string` | - | 主标题文字 |
| `highlightText` | `string` | - | 高亮文字（渐变效果） |
| `subtitle` | `string` | - | 副标题文字 |
| `align` | `'left' \| 'center' \| 'right'` | `'center'` | 对齐方式 |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | 尺寸大小 |
| `delay` | `number` | `0` | 动画延迟时间 |
| `className` | `string` | `''` | 自定义样式类 |
| `gradientFrom` | `string` | `'from-emerald-600'` | 渐变起始颜色 |
| `gradientTo` | `string` | `'to-teal-600'` | 渐变结束颜色 |

### BadgeProps

| 参数 | 类型 | 说明 |
|------|------|------|
| `text` | `string` | 徽章文字 |
| `icon` | `LucideIcon` | 徽章图标 |
| `bgColor` | `string` | 背景颜色类 |
| `textColor` | `string` | 文字颜色类 |

## Card 组件

### 基础用法

```tsx
import Card from './components/Card';
import { Brain, Bitcoin } from 'lucide-react';

// 默认卡片
<Card
  icon={Brain}
  title="AI 技术"
  description="先进的人工智能解决方案"
/>

// 特性卡片
<Card
  variant="feature"
  icon={Brain}
  title="AI 实验室"
  description="先进的人工智能研究与开发平台"
  gradientFrom="from-blue-500"
  gradientTo="to-blue-600"
/>

// 指标卡片
<Card
  variant="metric"
  subtitle="当前价格"
  value="$43,250"
  change="+2.4%"
/>

// 模块卡片
<Card
  variant="module"
  icon={Bitcoin}
  iconBgColor="bg-gradient-to-r from-orange-500 to-orange-600"
  title="BTC 投资策略"
  subtitle="初始目标: 1+ BTC"
  description="通过系统性投资策略，逐步建立比特币储备"
  features={[
    "定期定额投资",
    "多平台分散持有",
    "专业级安全存储"
  ]}
/>
```

### API 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `variant` | `'default' \| 'feature' \| 'metric' \| 'module' \| 'glass'` | `'default'` | 卡片变体 |
| `icon` | `LucideIcon` | - | 图标组件 |
| `iconColor` | `string` | `'text-white'` | 图标颜色 |
| `iconBgColor` | `string` | - | 图标背景颜色 |
| `title` | `string` | - | 标题 |
| `subtitle` | `string` | - | 副标题 |
| `description` | `string` | - | 描述文字 |
| `value` | `string` | - | 数值（用于 metric 变体） |
| `change` | `string` | - | 变化值（用于 metric 变体） |
| `features` | `string[]` | `[]` | 特性列表 |
| `children` | `ReactNode` | - | 自定义内容 |
| `className` | `string` | `''` | 自定义样式类 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸大小 |
| `onClick` | `() => void` | - | 点击事件 |
| `href` | `string` | - | 链接地址 |
| `delay` | `number` | `0` | 动画延迟 |
| `hoverEffect` | `boolean` | `true` | 是否启用悬停效果 |

## Button 组件

### 基础用法

```tsx
import Button from './components/Button';
import { Play, ArrowRight } from 'lucide-react';

// 基础按钮
<Button>点击我</Button>

// 主要按钮
<Button variant="primary" size="lg">
  开始探索
</Button>

// 带图标的按钮
<Button icon={Play} iconPosition="left">
  播放演示
</Button>

// 仅图标按钮
<Button iconOnly icon={ArrowRight} />

// 链接按钮
<Button href="/about" target="_blank">
  了解更多
</Button>

// 加载状态
<Button loading>
  处理中...
</Button>

// 禁用状态
<Button disabled>
  暂不可用
</Button>
```

### API 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link'` | `'primary'` | 按钮变体 |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 尺寸大小 |
| `children` | `ReactNode` | - | 按钮内容 |
| `icon` | `LucideIcon` | - | 图标组件 |
| `iconPosition` | `'left' \| 'right'` | `'left'` | 图标位置 |
| `iconOnly` | `boolean` | `false` | 是否仅显示图标 |
| `onClick` | `() => void` | - | 点击事件 |
| `href` | `string` | - | 链接地址 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `loading` | `boolean` | `false` | 是否加载中 |
| `className` | `string` | `''` | 自定义样式类 |
| `fullWidth` | `boolean` | `false` | 是否全宽 |
| `gradientFrom` | `string` | `'from-emerald-600'` | 渐变起始颜色 |
| `gradientTo` | `string` | `'to-teal-600'` | 渐变结束颜色 |
| `hoverEffect` | `boolean` | `true` | 是否启用悬停效果 |
| `delay` | `number` | `0` | 动画延迟 |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | 按钮类型 |
| `target` | `string` | - | 链接目标 |

## 组合使用示例

### 完整页面区块

```tsx
import SectionTitle from './components/SectionTitle';
import Card from './components/Card';
import Button from './components/Button';
import { Sparkles, Brain, Play } from 'lucide-react';

const ExampleSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 标题区域 */}
        <SectionTitle
          badge={{
            text: "核心功能",
            icon: Sparkles,
            bgColor: "bg-blue-100",
            textColor: "text-blue-700"
          }}
          title="我们的"
          highlightText="技术优势"
          subtitle="通过先进技术和创新理念，为用户提供卓越的产品体验"
          size="lg"
        />
        
        {/* 卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card
            variant="feature"
            icon={Brain}
            title="AI 技术"
            description="领先的人工智能算法和模型"
            gradientFrom="from-blue-500"
            gradientTo="to-blue-600"
          />
          {/* 更多卡片... */}
        </div>
        
        {/* 行动按钮 */}
        <div className="flex justify-center space-x-4">
          <Button size="lg" icon={Play}>
            开始体验
          </Button>
          <Button variant="outline" size="lg">
            了解更多
          </Button>
        </div>
      </div>
    </section>
  );
};
```

## 设计原则

### 一致性
- 所有组件遵循统一的设计语言
- 使用相同的颜色系统和间距规范
- 保持动画效果的一致性

### 可配置性
- 支持多种变体和尺寸选择
- 提供丰富的自定义选项
- 支持渐变颜色配置

### 可访问性
- 支持键盘导航
- 提供适当的 ARIA 标签
- 确保颜色对比度符合标准

### 性能优化
- 使用 Framer Motion 进行高性能动画
- 支持懒加载和视口检测
- 优化重渲染性能

## 最佳实践

1. **保持设计一致性**：在同一页面中使用相同的颜色主题和尺寸规范
2. **合理使用动画**：避免过度使用动画效果，保持用户体验的流畅性
3. **响应式设计**：确保组件在不同屏幕尺寸下都能正常显示
4. **语义化使用**：根据内容类型选择合适的组件变体
5. **性能考虑**：避免在列表中使用过多的动画效果

## 扩展开发

如需添加新的变体或功能，请遵循以下步骤：

1. 在对应组件的 interface 中添加新的类型定义
2. 在组件内部添加相应的样式配置
3. 更新 README 文档
4. 在 ComponentExamples.tsx 中添加使用示例
5. 进行充分的测试确保兼容性 