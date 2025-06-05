/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Abundra 品牌主色系 - AI × Blockchain 融合科技
        abundra: {
          // 主品牌蓝 - 智能、现代、冷静
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#007AFF', // 主品牌色
            600: '#0066d9',
            700: '#0052b3',
            800: '#003d8c',
            900: '#002966',
          },
          // 科技紫 - 创新、未来感
          purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7c3aed',
            800: '#6b21a8',
            900: '#581c87',
          },
          // 区块链金 - 稳定、价值、信任
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          // 中性灰系 - 专业、平衡
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
          // 成功绿 - 增长、正向
          success: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          },
          // 警告橙 - 注意、活力
          warning: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          // 错误红 - 风险、警示
          error: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
        },
        // 保持向后兼容
        "abundra-blue": "#007AFF",
        "abundra-dark": "#1D1D1F",
        "abundra-gray": "#86868B",
        "abundra-light": "#F5F5F7",
      },
      fontFamily: {
        // Abundra 品牌字体系统
        "abundra": [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
        "abundra-mono": [
          "SF Mono",
          "Monaco",
          "Inconsolata",
          "Roboto Mono",
          "monospace",
        ],
        // 保持向后兼容
        "sf-pro": [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        // Abundra 字体尺寸系统
        'abundra-xs': ['0.75rem', { lineHeight: '1rem' }],
        'abundra-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'abundra-base': ['1rem', { lineHeight: '1.5rem' }],
        'abundra-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'abundra-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'abundra-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'abundra-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'abundra-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'abundra-5xl': ['3rem', { lineHeight: '1' }],
        'abundra-6xl': ['3.75rem', { lineHeight: '1' }],
        'abundra-7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        // Abundra 间距系统 (8px 基准)
        'abundra-xs': '0.25rem', // 4px
        'abundra-sm': '0.5rem',  // 8px
        'abundra-md': '1rem',    // 16px
        'abundra-lg': '1.5rem',  // 24px
        'abundra-xl': '2rem',    // 32px
        'abundra-2xl': '3rem',   // 48px
        'abundra-3xl': '4rem',   // 64px
        'abundra-4xl': '6rem',   // 96px
        'abundra-5xl': '8rem',   // 128px
      },
      borderRadius: {
        // Abundra 圆角系统
        'abundra-xs': '0.25rem',  // 4px
        'abundra-sm': '0.5rem',   // 8px
        'abundra-md': '0.75rem',  // 12px
        'abundra-lg': '1rem',     // 16px
        'abundra-xl': '1.5rem',   // 24px
        'abundra-2xl': '2rem',    // 32px
      },
      boxShadow: {
        // Abundra 阴影系统
        'abundra-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'abundra-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'abundra-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'abundra-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'abundra-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'abundra-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'abundra-glow': '0 0 20px rgba(0, 122, 255, 0.3)',
        'abundra-glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'abundra-glow-gold': '0 0 20px rgba(245, 158, 11, 0.3)',
      },
      animation: {
        // Abundra 动画系统
        "abundra-fade-in": "abundraFadeIn 0.6s ease-out",
        "abundra-slide-up": "abundraSlideUp 0.8s ease-out",
        "abundra-slide-down": "abundraSlideDown 0.8s ease-out",
        "abundra-scale-in": "abundraScaleIn 0.5s ease-out",
        "abundra-pulse": "abundraPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "abundra-float": "abundraFloat 6s ease-in-out infinite",
        "abundra-glow": "abundraGlow 2s ease-in-out infinite alternate",
        // 保持向后兼容
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        // Abundra 关键帧动画
        abundraFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        abundraSlideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        abundraSlideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        abundraScaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        abundraPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        abundraFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        abundraGlow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 122, 255, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(0, 122, 255, 0.6)" },
        },
        // 保持向后兼容
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        'abundra-xs': '2px',
        'abundra-sm': '4px',
        'abundra-md': '12px',
        'abundra-lg': '16px',
        'abundra-xl': '24px',
        'abundra-2xl': '40px',
      },
      gradientColorStops: {
        // Abundra 渐变色系统
        'abundra-primary': '#007AFF',
        'abundra-secondary': '#a855f7',
        'abundra-accent': '#f59e0b',
      }
    },
  },
  plugins: [],
};
