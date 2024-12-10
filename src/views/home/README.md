# 首页开发文档

## 目录
- [设计考虑点](#设计考虑点)
  - [1. 产品功能维度](#1-产品功能维度)
    - [1.1 核心功能展示](#11-核心功能展示)
    - [1.2 用户引导](#12-用户引导)
    - [1.3 信任建设](#13-信任建设)
  - [2. 用户体验维度](#2-用户体验维度)
    - [2.1 视觉体验](#21-视觉体验)
    - [2.2 交互体验](#22-交互体验)dd
    - [2.3 情感体验](#23-情感体验)
  - [3. 技术实现维度](#3-技术实现维度)
    - [3.1 框架运用](#31-框架运用)
    - [3.2 代码组织](#32-代码组织)
    - [3.3 工程规范](#33-工程规范)
  - [4. 性能优化维度](#4-性能优化维度)
    - [4.1 加载优化](#41-加载优化)
    - [4.2 渲染优化](#42-渲染优化)
    - [4.3 体验优化](#43-体验优化)
  - [5. 视觉设计维度](#5-视觉设计维度)
    - [5.1 布局设计详细规范](#51-布局设计详细规范)
    - [5.2 色彩系统详细规范](#52-色彩系统详细规范)
    - [5.3 字体系统详细规范](#53-字体系统详细规范)
- [页面结构设计](#页面结构设计)
  - [1. 页面模块详细说明](#1-页面模块详细说明)
  - [2. 开发优先级与时间规划](#2-开发优先级与时间规划)
- [具体实现注意事项](#具体实现注意事项)
  - [1. 性能优化实践](#1-性能优化实践)
  - [2. 代码复用策略](#2-代码复用策略)
  - [3. 错误处理机制](#3-错误处理机制)
  - [4. 测试策略](#4-测试策略)
  - [5. 监控方案](#5-监控方案)

## 设计考虑点

### 1. 产品功能维度

#### 1.1 核心功能展示
- 简洁明了的产品介绍
  * 标题：简短有力的主标语（不超过20字）
  * 副标题：补充说明核心价值（不超过40字）
  * 关键词突出：AI、科学、准确等
  * 实现方式：使用大标题+动态打字效果
  * 技术方案：Vue3 Transition + CSS动画

- AI预测功能说明
  * 预测流程图解
  * 算法可信度说明
  * 数据分析能力展示
  * 实现方式：信息图表+动画展示
  * 技术方案：SVG动画 + CSS动效

- 科学性和专业性强调
  * 心理学理论背书
  * 数据分析能力说明
  * 专业机构认证展示
  * 实现方式：图标+简短文案说明
  * 技术方案：Element Plus图标组件

#### 1.2 用户引导
- 醒目的"开始测试"按钮
  * 位置：首屏核心区域
  * 大小：至少160px * 48px
  * 颜色：主题色 #946CE6
  * 悬浮效果：缩放+发光
  * 技术方案：Element Plus Button组件 + 自定义样式

- 简单的操作指引
  * 步骤说明：3-4个关键步骤
  * 图标说明：直观的图示
  * 预计用时：显示完成所需时间
  * 实现方式：步骤条+图标
  * 技术方案：Element Plus Steps组件

- 测试流程预览
  * 流程图：简化的测试步骤图
  * 时间轴：预计每步完成时间
  * 进度提示：清晰的进度标识
  * 实现方式：时间轴+动画
  * 技术方案：Element Plus Timeline组件

#### 1.3 信任建设
- 数据安全承诺
  * 加密说明：数据加密图标
  * 安全认证：安全认证标识
  * 隐私政策：链接到详细说明
  * 实现方式：图标+简短文案
  * 技术方案：自定义图标组件

- 隐私保护说明
  * 数据用途说明
  * 隐私保护措施
  * 用户权益保障
  * 实现方式：折叠面板
  * 技术方案：Element Plus Collapse组件

- 专业性背书
  * 合作机构logo
  * 专家团队介绍
  * 技术认证展示
  * 实现方式：Logo墙
  * 技术方案：Grid布局 + 图片懒加载

### 2. 用户体验维度

#### 2.1 视觉体验
- 简洁现代的设计风格
  * 布局：网格系统（12列）
  * 间距：8的倍数（8px, 16px, 24px, 32px）
  * 圆角：4px（小）、8px（中）、12px（大）
  * 阴影：
    ```css
    box-shadow:
      0 2px 4px rgba(0,0,0,0.1),
      0 4px 8px rgba(0,0,0,0.05);
    ```

- 温暖友好的色调
  * 主色：#946CE6（温暖紫）
  * 辅色：
    - #FFB8B8（温暖粉）- 用于强调和点缀
    - #B8E4FF（清新蓝）- 用于背景和装饰
  * 文字色：
    - #333333 - 主要文字
    - #666666 - 次要文字
    - #999999 - 辅助文字
  * 背景色：
    - #FFFFFF - 主背景
    - #F8F9FA - 次要背景
    - #F2F3F5 - 分割背景

- 合理的留白和层次
  * 内容区域最大宽度：1200px
  * 区块间距：48px（大）、32px（中）、24px（小）
  * 组件内间距：24px（大）、16px（中）、8px（小）
  * 文字行高：1.5
  * 段落间距：16px

#### 2.2 交互体验
- 流畅的动画效果
  * 按钮交互：
    ```css
    .button-hover {
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(148,108,230,0.3);
      }
    }
    ```
  * 页面切换：
    ```typescript
    const routeTransition = {
      enter: 'fade-transform-enter',
      'enter-active': 'fade-transform-enter-active',
      leave: 'fade-transform-leave',
      'leave-active': 'fade-transform-leave-active'
    }
    ```
  * 内容加载：
    - 骨架屏预加载
    - 渐显动画
    - 滚动加载效果

- 清��的视觉反馈
  * 按钮状态：
    - 默认状态
    - Hover效果
    - 点击效果
    - 加载状态
    - 禁用状态
  * 表单反馈：
    - 输入提示
    - 错误提示
    - 成功提示
    - 加载状态
  * 操作提示：
    - Toast提示
    - 弹窗确认
    - 进度反馈

- 直观的操作引导
  * 新手引导：
    ```typescript
    interface GuideStep {
      element: string;      // 目标元素
      popover: {
        title: string;      // 引导标题
        description: string;// 引导说明
        position: 'top' | 'right' | 'bottom' | 'left'
      }
    }
    ```
  * 提示说明：
    - 悬浮提示
    - 上下文帮助
    - 操作指引
  * 错误处理：
    - 友好的错误提示
    - 恢复建议
    - 替代方案

#### 2.3 情感体验
- 温暖的文案语气
  * 标题文案规范：
    - 主标题：简短有力，突出价值
    - 副标题：补充说明，增加信任
    - 按钮文案：行动导向，积极正面
  * 引导文案规范：
    - 使用第二人称
    - 积极正面的语气
    - 避免专业术语
    - 简单易懂
  * 提示文案规范：
    - 错误提示：温和不指责
    - 成功提示：积极鼓励
    - 操作提示：清晰明确

- 轻松愉悦的氛围
  * 视觉元素：
    - 插画风格：简��现代、温暖友好
    - 配色方案：轻松愉悦的色调
    - 图标设计：圆润可爱
  * 交互效果：
    - 平滑的动画
    - 愉悦的反馈
    - 适度的趣味性
  * 内容展示：
    - 适当的幽默元素
    - 生动的图例
    - 轻松的表达方式

- 建立情感共鸣
  * 内容策略：
    - 分享真实故事
    - 展示成功案例
    - 用户见证
  * 设计策略：
    - 使用情感化图片
    - 温暖的色彩
    - 人性化的细节
  * 交互策略：
    - 个性化的问候
    - 智能的回应
    - 及时的鼓励

### 3. 技术实现维度

#### 3.1 框架运用
- Vue 3 Composition API
  * 核心组件结构：
    ```typescript
    // HomeView.vue
    import { defineComponent, ref, onMounted } from 'vue'

    export default defineComponent({
      setup() {
        // 状态管理
        const loading = ref(false)
        const heroData = ref({
          title: '',
          subtitle: '',
          buttonText: ''
        })

        // 生命周期
        onMounted(() => {
          initPageData()
        })

        // 方法
        const initPageData = async () => {
          loading.value = true
          try {
            // 初始化数据
          } finally {
            loading.value = false
          }
        }

        return {
          loading,
          heroData
        }
      }
    })
    ```

- TypeScript 类型系统
  * 类型定义：
    ```typescript
    // types/home.ts
    export interface HeroSection {
      title: string
      subtitle: string
      buttonText: string
      background: string
    }

    export interface FeatureItem {
      icon: string
      title: string
      description: string
      link?: string
    }

    export interface GuideStep {
      title: string
      description: string
      icon: string
      order: number
    }
    ```

- Element Plus 组件库
  * 组件使用规范：
    ```typescript
    // 按需导入
    import {
      ElButton,
      ElCard,
      ElSteps,
      ElTimeline
    } from 'element-plus'

    // 全局样式覆盖
    :deep(.el-button) {
      // 自定义样式
    }
    ```

#### 3.2 代码组织
- 组件化开发
  * 组件结构：
    ```
    home/
    ├── components/
    │   ├── HomeHero.vue      # 主视觉组件
    │   ├── HomeFeatures.vue  # 特性展示组件
    │   ├── HomeGuide.vue     # 引导步骤组件
    │   └── HomeFooter.vue    # 页脚组件
    ├── hooks/
    │   ├── useScroll.ts      # 滚动相关逻辑
    │   └── useAnimate.ts     # 动画相关逻辑
    ├── styles/
    │   ├── variables.scss    # 样式变量
    │   └── mixins.scss       # 样式混入
    └── utils/
        └── animation.ts      # 动画工具函数
    ```

- 类型安全
  * 类型检查：
    ```typescript
    // 严格的类型检查
    {
      "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true
      }
    }
    ```
  * 类型断言：
    ```typescript
    // 必要时的类型断言
    const element = event.target as HTMLElement
    ```

- 代码复用
  * Hooks封装：
    ```typescript
    // hooks/useScroll.ts
    export function useScroll() {
      const scrollTop = ref(0)

      const onScroll = () => {
        scrollTop.value = window.pageYOffset
      }

      onMounted(() => {
        window.addEventListener('scroll', onScroll)
      })

      onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
      })

      return {
        scrollTop
      }
    }
    ```

#### 3.3 工程规范
- 代码规范
  * ESLint配置：
    ```json
    {
      "extends": [
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended"
      ],
      "rules": {
        "vue/multi-word-component-names": "error",
        "vue/component-definition-name-casing": ["error", "PascalCase"],
        "@typescript-eslint/explicit-module-boundary-types": "error"
      }
    }
    ```

- 命名规范
  * 文件命名：
    - 组件文件：PascalCase（如：HomeHero.vue）
    - 工具文件：camelCase（如：useScroll.ts）
    - 样式文件：kebab-case（如：home-hero.scss）
  * 变量命名：
    - 组件名：PascalCase
    - 变量名：camelCase
    - 常量名：UPPER_CASE
    - 类型名：PascalCase

- 注释规范
  * 文件注释：
    ```typescript
    /**
     * @file HomeHero.vue
     * @description 首页主视觉区域组件
     * @author [作者名]
     * @createDate [创建日期]
     */
    ```
  * 函数注释：
    ```typescript
    /**
     * 初始化页面数据
     * @param {string} type - 数据类型
     * @returns {Promise<void>}
     * @throws {Error} 数据获取失败时抛出错误
     */
    ```

### 4. 性能优化维度

#### 4.1 加载优化
- 首屏加载速度
  * 路由懒加载：
    ```typescript
    // router/index.ts
    const routes = [
      {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: {
          keepAlive: true
        }
      }
    ]
    ```
  * 组件异步加载：
    ```typescript
    // 异步组件
    const AsyncFeature = defineAsyncComponent(() =>
      import('./components/Feature.vue')
    )
    ```
  * 关键CSS提取：
    ```html
    <head>
      <style>
        /* 关键CSS内联 */
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
        }
      </style>
      <link rel="preload" href="/css/main.css" as="style">
    </head>
    ```

- 资源懒加载
  * 图片懒加载：
    ```typescript
    // directives/lazyload.ts
    const lazyload = {
      mounted(el: HTMLImageElement) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.src = el.dataset.src
              observer.unobserve(el)
            }
          })
        })
        observer.observe(el)
      }
    }
    ```
  * 组件懒加载：
    ```vue
    <template>
      <Suspense>
        <template #default>
          <AsyncComponent />
        </template>
        <template #fallback>
          <LoadingSkeleton />
        </template>
      </Suspense>
    </vue>
    ```

- 代码分割
  * Webpack配置：
    ```javascript
    module.exports = {
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 70000,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            common: {
              minChunks: 2,
              priority: -20
            }
          }
        }
      }
    }
    ```

#### 4.2 渲染优化
- 避免重复渲染
  * 计算属性缓存：
    ```typescript
    const computedData = computed(() => {
      return expensiveOperation(props.data)
    })
    ```
  * v-memo使用：
    ```vue
    <template>
      <div v-memo="[item.id, item.updated]">
        {{ item.name }}
      </div>
    </template>
    ```

- 合理的组件粒度
  * 组件拆分原则：
    ```typescript
    // 好的实践
    const FeatureCard = defineComponent({
      props: {
        feature: {
          type: Object as PropType<Feature>,
          required: true
        }
      },
      setup(props) {
        // 单一职责
        return () => (
          <div class="feature-card">
            <Icon name={props.feature.icon} />
            <h3>{props.feature.title}</h3>
            <p>{props.feature.description}</p>
          </div>
        )
      }
    })
    ```

- 优化大型列表
  * 虚拟列表实现：
    ```typescript
    // components/VirtualList.vue
    const VirtualList = defineComponent({
      props: {
        items: Array,
        itemHeight: Number
      },
      setup(props) {
        const visibleCount = ref(10)
        const startIndex = ref(0)
        const visibleItems = computed(() => {
          return props.items.slice(
            startIndex.value,
            startIndex.value + visibleCount.value
          )
        })

        return {
          visibleItems
        }
      }
    })
    ```

#### 4.3 体验优化
- 骨架屏加载
  * 骨架屏组件：
    ```vue
    <template>
      <div class="skeleton">
        <div class="skeleton-header" />
        <div class="skeleton-content">
          <div class="skeleton-title" />
          <div class="skeleton-text" />
        </div>
      </div>
    </template>

    <style lang="scss">
    .skeleton {
      @keyframes shimmer {
        0% { background-position: -200% 0 }
        100% { background-position: 200% 0 }
      }

      &-header,
      &-title,
      &-text {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }
    }
    </style>
    ```

- 预加载关键资源
  * 资源预加载：
    ```html
    <link rel="preload" href="/fonts/main.woff2" as="font" crossorigin>
    <link rel="prefetch" href="/images/hero-bg.webp">
    ```
  * 路由预加载：
    ```typescript
    router.beforeEach((to, from, next) => {
      const componentPath = to.matched[0].components.default
      if (typeof componentPath === 'function') {
        componentPath()
      }
      next()
    })
    ```

- 平滑的过渡动画
  * 页面切换动画：
    ```scss
    .fade-transform-enter-active,
    .fade-transform-leave-active {
      transition: all 0.5s;
    }

    .fade-transform-enter-from {
      opacity: 0;
      transform: translateX(-30px);
    }

    .fade-transform-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
    ```

### 5. 视觉设计维度

#### 5.1 布局设计详细规范
- 响应式布局
  * 断点设置：
    ```scss
    // styles/variables.scss
    $breakpoints: (
      'xs': 320px,
      'sm': 768px,
      'md': 1024px,
      'lg': 1280px,
      'xl': 1440px
    );

    @mixin respond-to($breakpoint) {
      @media (min-width: map-get($breakpoints, $breakpoint)) {
        @content;
      }
    }
    ```
  * 栅格系统：
    ```scss
    .container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 24px;

      @include respond-to('sm') {
        gap: 32px;
      }

      @include respond-to('lg') {
        max-width: 1200px;
        margin: 0 auto;
      }
    }
    ```

- 模块化设计
  * 组件封装：
    ```vue
    <!-- components/Card.vue -->
    <template>
      <div class="card" :class="[`card--${size}`, `card--${type}`]">
        <div class="card__header">
          <slot name="header" />
        </div>
        <div class="card__content">
          <slot />
        </div>
        <div class="card__footer">
          <slot name="footer" />
        </div>
      </div>
    </template>

    <style lang="scss">
    .card {
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);

      &--small { padding: 16px; }
      &--medium { padding: 24px; }
      &--large { padding: 32px; }
    }
    </style>
    ```

- 视觉层次
  * 间距系统：
    ```scss
    // styles/_spacing.scss
    :root {
      --space-xs: 4px;
      --space-sm: 8px;
      --space-md: 16px;
      --space-lg: 24px;
      --space-xl: 32px;
      --space-2xl: 48px;
    }

    .margin {
      &-xs { margin: var(--space-xs); }
      &-sm { margin: var(--space-sm); }
      &-md { margin: var(--space-md); }
      &-lg { margin: var(--space-lg); }
      &-xl { margin: var(--space-xl); }
    }
    ```

#### 5.2 色彩系统详细规范
```scss
// styles/_colors.scss
:root {
  // 主题色
  --color-primary: #946CE6;
  --color-primary-light: #B08EEB;
  --color-primary-dark: #7849E1;

  // 辅助色
  --color-secondary-pink: #FFB8B8;
  --color-secondary-blue: #B8E4FF;

  // 文字色
  --color-text-primary: #333333;
  --color-text-secondary: #666666;
  --color-text-tertiary: #999999;

  // 背景色
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8F9FA;
  --color-bg-tertiary: #F2F3F5;

  // 功能色
  --color-success: #67C23A;
  --color-warning: #E6A23C;
  --color-danger: #F56C6C;
  --color-info: #909399;
}

// 混合
@mixin theme-color($property, $color) {
  #{$property}: var(--color-#{$color});
}
```

#### 5.3 字体系统详细规范
```scss
// styles/_typography.scss
:root {
  // 字体家族
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  --font-family-heading: 'PingFang SC', 'Microsoft YaHei';

  // 字体大小
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 30px;

  // 字重
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 600;

  // 行高
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}

// 标题样式
.heading {
  font-family: var(--font-family-heading);

  &-1 {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
  }

  &-2 {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
  }
}

// 文本样式
.text {
  font-family: var(--font-family-base);

  &-base {
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
  }

  &-small {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
  }
}
```

## 页面结构设计

### 1. 页面模块详细说明

#### Header 模块
```typescript
// components/HomeHeader.vue
interface HeaderProps {
  logo: {
    src: string
    alt: string
    width: number
    height: number
  }
  menuItems: {
    id: number
    label: string
    link: string
    icon?: string
    children?: MenuItem[]
  }[]
  isFixed?: boolean
  transparent?: boolean
}

// 组件实现
const HomeHeader = defineComponent({
  props: {
    logo: {
      type: Object as PropType<HeaderProps['logo']>,
      required: true
    },
    menuItems: {
      type: Array as PropType<HeaderProps['menuItems']>,
      default: () => []
    },
    isFixed: Boolean,
    transparent: Boolean
  },
  setup(props) {
    const headerClass = computed(() => ({
      'header--fixed': props.isFixed,
      'header--transparent': props.transparent
    }))

    return { headerClass }
  }
})
```

#### Hero 模块
```typescript
// components/HomeHero.vue
interface HeroProps {
  title: string
  subtitle: string
  buttonText: string
  background: {
    type: 'image' | 'video' | 'gradient'
    source: string
  }
  features?: {
    icon: string
    text: string
  }[]
}

// 组件实现
const HomeHero = defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    buttonText: String,
    background: {
      type: Object as PropType<HeroProps['background']>,
      required: true
    },
    features: Array as PropType<HeroProps['features']>
  },
  setup(props, { emit }) {
    const handleStart = () => {
      emit('start')
    }

    return { handleStart }
  }
})
```

#### Features 模块
```typescript
// components/HomeFeatures.vue
interface FeatureProps {
  features: {
    id: number
    icon: string
    title: string
    description: string
    link?: string
    animation?: string
  }[]
  layout?: 'grid' | 'list'
  columns?: 2 | 3 | 4
}

// 组件实现
const HomeFeatures = defineComponent({
  props: {
    features: {
      type: Array as PropType<FeatureProps['features']>,
      required: true
    },
    layout: {
      type: String as PropType<FeatureProps['layout']>,
      default: 'grid'
    },
    columns: {
      type: Number as PropType<FeatureProps['columns']>,
      default: 3
    }
  }
})
```

#### Guide 模块
```typescript
// components/HomeGuide.vue
interface GuideProps {
  steps: {
    id: number
    title: string
    description: string
    icon: string
    image?: string
    duration?: string
  }[]
  current?: number
}

// 组件实现
const HomeGuide = defineComponent({
  props: {
    steps: {
      type: Array as PropType<GuideProps['steps']>,
      required: true
    },
    current: Number
  },
  setup(props) {
    const activeStep = ref(props.current || 0)

    const nextStep = () => {
      if (activeStep.value < props.steps.length - 1) {
        activeStep.value++
      }
    }

    return { activeStep, nextStep }
  }
})
```

### 2. 开发优先级与时间规划

#### 第一阶段（1-2周）
1. 基础框架搭建（2天）
   - 项目初始化
   - 路由配置
   - 基础组件搭建

2. 主视觉区域开发（3天）
   - Hero组件开发
   - 响应式适配
   - 动画效果

3. "开始测试"功能（2天）
   - 按钮组件开发
   - 交互效果
   - 路由跳转

4. 响应式布局适配（3天）
   - 断点设置
   - 布局调整
   - 测试优化

#### 第二阶段（1-2周）
1. 特色功能展示（3天）
   - Features组件开发
   - 动画效果
   - 内容管理

2. 使用指南开发（3天）
   - Guide组件开发
   - 步骤展示
   - 交互效果

3. 动画效果添加（2天）
   - 滚动动画
   - 过渡效果
   - 交互反馈

4. 性能优化（2天）
   - 代码分割
   - 资源优化
   - 加载优化

#### 第三阶段（1周）
1. 交互效果完善（2天）
   - 细节动画
   - 反馈优化
   - 用户体验提升

2. 视觉细节优化（2天）
   - 视觉效果优化
   - 主题调整
   - 样式精修

3. 加载优化（2天）
   - 首屏优化
   - 资源加载优化
   - 性能监控

4. 兼容性测试（1天）
   - 跨浏览器测试
   - 设备适配测试
   - 问题修复

## 具体实现注意事项

### 1. 性能优化实践
```typescript
// 图片优化
const optimizeImage = {
  mounted(el: HTMLImageElement, binding: DirectiveBinding) {
    // 使用webp格式
    const checkWebp = async () => {
      const webp = await supportsWebp()
      if (webp) {
        el.src = binding.value.webp
      } else {
        el.src = binding.value.fallback
      }
    }

    // 图片懒加载
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          checkWebp()
          observer.unobserve(el)
        }
      })
    })

    observer.observe(el)
  }
}
```

### 2. 代码复用策略
```typescript
// hooks/useResponsive.ts
export function useResponsive() {
  const breakpoints = {
    xs: 320,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1440
  }

  const current = ref('md')

  const update = () => {
    const width = window.innerWidth
    if (width < breakpoints.sm) current.value = 'xs'
    else if (width < breakpoints.md) current.value = 'sm'
    else if (width < breakpoints.lg) current.value = 'md'
    else if (width < breakpoints.xl) current.value = 'lg'
    else current.value = 'xl'
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  return { current, breakpoints }
}
```

### 3. 错误处理机制
```typescript
// utils/errorHandler.ts
interface ErrorConfig {
  type: 'api' | 'runtime' | 'resource'
  code?: string
  message: string
  stack?: string
}

export class AppError extends Error {
  constructor(config: ErrorConfig) {
    super(config.message)
    this.name = 'AppError'
    this.config = config
  }

  static handle(error: AppError) {
    console.error(`[${error.config.type}] ${error.message}`)
    // 错误上报逻辑
  }
}
```

### 4. 测试策略
```typescript
// tests/HomeView.spec.ts
import { mount } from '@vue/test-utils'
import HomeView from '../views/home/index.vue'

describe('HomeView', () => {
  test('renders hero section', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.find('.hero-section').exists()).toBe(true)
  })

  test('start button click', async () => {
    const wrapper = mount(HomeView)
    await wrapper.find('.start-button').trigger('click')
    // 验证路���跳转
  })
})
```

### 5. 监控方案
```typescript
// utils/monitor.ts
interface Performance {
  FCP: number  // First Contentful Paint
  LCP: number  // Largest Contentful Paint
  FID: number  // First Input Delay
  CLS: number  // Cumulative Layout Shift
}

export const performanceMonitor = {
  init() {
    // 性能指标采集
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        // 上报性能数据
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] })
  },

  report(data: Partial<Performance>) {
    // 数据上报逻辑
  }
}
```
