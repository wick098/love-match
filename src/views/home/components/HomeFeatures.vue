<template>
  <section class="home-features">
    <div class="section-header">
      <h2 class="section-title">科学的心理分析系统</h2>
      <p class="section-subtitle">基于专业的心理学理论与先进的数据分析技术</p>
    </div>

    <div class="features-grid">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="feature-card"
      >
        <div class="feature-icon">
          <el-icon>
            <component :is="feature.icon" />
          </el-icon>
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-desc">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Monitor, DataLine, Lock } from '@element-plus/icons-vue'

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
</script>

<style scoped lang="scss">
.home-features {
  padding: 60px 0;
  background: var(--color-bg-secondary);

  .section-header {
    text-align: center;
    margin-bottom: 48px;

    .section-title {
      font-size: 32px;
      color: var(--color-text-primary);
      margin-bottom: 16px;
    }

    .section-subtitle {
      font-size: 18px;
      color: var(--color-text-secondary);
    }
  }

  .features-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .feature-card {
      background: #fff;
      padding: 32px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      }

      .feature-icon {
        font-size: 48px;
        color: var(--color-primary);
        margin-bottom: 24px;
      }

      .feature-title {
        font-size: 20px;
        color: var(--color-text-primary);
        margin-bottom: 16px;
      }

      .feature-desc {
        font-size: 16px;
        color: var(--color-text-secondary);
        line-height: 1.5;
      }
    }
  }
}
</style>