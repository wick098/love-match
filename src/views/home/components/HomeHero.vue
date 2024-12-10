<template>
  <section class="home-hero">
    <div class="hero-content">
      <!-- 核心功能展示区域 -->
      <div class="hero-main">
        <h1 class="hero-title">
          <TypeWriter :text="heroData.title" />
        </h1>
        <p class="hero-subtitle">{{ heroData.subtitle }}</p>
        <div class="hero-keywords">
          <el-tag
            v-for="keyword in heroData.keywords"
            :key="keyword"
            effect="plain"
            class="keyword-tag"
          >
            {{ keyword }}
          </el-tag>
        </div>
        <el-button
          type="primary"
          size="large"
          class="start-button"
          @click="handleStart"
        >
          开始测试
        </el-button>
      </div>

      <!-- AI预测功能说明 -->
      <div class="hero-features">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-item"
        >
          <el-icon class="feature-icon">
            <component :is="feature.icon" />
          </el-icon>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TypeWriter from '@/components/TypeWriter.vue'
import { Monitor, DataLine, Lock } from '@element-plus/icons-vue'

const router = useRouter()

const heroData = ref({
  title: '基于AI的心理测评系统',
  subtitle: '科学的心理分析，专业的发展建议',
  keywords: ['人工智能', '心理学', '大数据分析', '个性化建议']
})

const features = ref([
  {
    icon: Monitor,
    title: '专业测评',
    description: '基于心理学理论的科学测评体系'
  },
  {
    icon: DataLine,
    title: '智能分析',
    description: 'AI驱动的数据分析与个性化建议'
  },
  {
    icon: Lock,
    title: '隐私保护',
    description: '严格的数据加密和隐私保护机制'
  }
])

const handleStart = () => {
  router.push('/test')
}
</script>

<style scoped lang="scss">
.home-hero {
  padding: 60px 0;
  background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);

  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .hero-main {
    text-align: center;
    margin-bottom: 60px;

    .hero-title {
      font-size: 48px;
      color: var(--color-text-primary);
      margin-bottom: 20px;
      font-weight: bold;
    }

    .hero-subtitle {
      font-size: 24px;
      color: var(--color-text-secondary);
      margin-bottom: 30px;
    }

    .hero-keywords {
      margin-bottom: 40px;

      .keyword-tag {
        margin: 0 8px;
        font-size: 16px;
      }
    }

    .start-button {
      width: 180px;
      height: 50px;
      font-size: 18px;
      border-radius: 25px;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(148,108,230,0.3);
      }
    }
  }

  .hero-features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .feature-item {
      text-align: center;
      padding: 30px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      }
    }

    .feature-icon {
      font-size: 36px;
      color: var(--el-color-primary);
      margin-bottom: 16px;
    }

    .feature-title {
      font-size: 20px;
      font-weight: 500;
      color: var(--color-text-primary);
      margin-bottom: 12px;
    }

    .feature-desc {
      font-size: 14px;
      color: var(--color-text-secondary);
      line-height: 1.5;
    }
  }
}
</style>