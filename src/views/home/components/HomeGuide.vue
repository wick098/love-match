<template>
  <section class="home-guide">
    <div class="guide-content">
      <h2 class="guide-title">测评流程</h2>
      <div class="guide-steps">
        <div class="step-item" v-for="step in steps" :key="step.id">
          <div class="step-icon">
            <el-icon>
              <component :is="step.icon" />
            </el-icon>
          </div>
          <div class="step-info">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.description }}</p>
            <span class="step-time">预计用时：{{ step.duration }}</span>
          </div>
        </div>
      </div>
      <div class="guide-actions">
        <el-button type="primary" size="large" @click="$emit('start')">
          开始测试
        </el-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Edit, DataAnalysis, Document } from '@element-plus/icons-vue'

const steps = ref([
  {
    id: 1,
    icon: Edit,
    title: '填写基本信息',
    description: '完成简单的个人信息登记',
    duration: '2分钟'
  },
  {
    id: 2,
    icon: DataAnalysis,
    title: '完成测评问卷',
    description: '回答专业的心理测评问题',
    duration: '15分钟'
  },
  {
    id: 3,
    icon: Document,
    title: '获取分析报告',
    description: '查看详细的分析结果和建议',
    duration: '5分钟'
  }
])

defineEmits(['start'])
</script>

<style scoped lang="scss">
.home-guide {
  padding: 80px 0;
  background: var(--color-bg-primary);

  .guide-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .guide-title {
    text-align: center;
    font-size: 32px;
    color: var(--color-text-primary);
    margin-bottom: 48px;
  }

  .guide-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-bottom: 48px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .step-item {
    background: #fff;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    display: flex;
    align-items: flex-start;
    gap: 20px;

    .step-icon {
      font-size: 32px;
      color: var(--el-color-primary);
      padding: 16px;
      background: var(--el-color-primary-light-9);
      border-radius: 12px;
    }

    .step-info {
      flex: 1;

      .step-title {
        font-size: 20px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
      }

      .step-desc {
        font-size: 14px;
        color: var(--color-text-secondary);
        margin-bottom: 12px;
        line-height: 1.5;
      }

      .step-time {
        font-size: 12px;
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-9);
        padding: 4px 8px;
        border-radius: 4px;
      }
    }
  }

  .guide-actions {
    text-align: center;

    .el-button {
      min-width: 180px;
      height: 48px;
      font-size: 18px;
    }
  }
}
</style>