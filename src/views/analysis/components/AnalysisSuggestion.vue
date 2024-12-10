<template>
  <div class="analysis-suggestion">
    <h2>改善建议</h2>

    <div class="suggestions-list">
      <el-card
        v-for="(sug, index) in suggestions"
        :key="index"
        class="suggestion-card"
        shadow="hover"
      >
        <template #header>
          <div class="suggestion-header">
            <el-icon><Aim /></el-icon>
            <span>{{ sug.title }}</span>
          </div>
        </template>

        <div class="suggestion-content">
          <p>{{ sug.content }}</p>
          <ul v-if="sug.steps?.length">
            <li v-for="(step, idx) in sug.steps" :key="idx">
              {{ step }}
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Aim } from '@element-plus/icons-vue'
import type { Suggestion } from '@/stores/analysis'

defineProps<{
  suggestions: Suggestion[]
}>()
</script>

<style scoped lang="scss">
.analysis-suggestion {
  margin-bottom: 40px;

  h2 {
    font-size: 20px;
    color: var(--el-text-color-primary);
    margin-bottom: 24px;
  }

  .suggestions-list {
    display: grid;
    gap: 24px;
  }

  .suggestion-card {
    .suggestion-header {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--el-text-color-primary);

      .el-icon {
        font-size: 18px;
        color: var(--el-color-primary);
      }
    }

    .suggestion-content {
      p {
        color: var(--el-text-color-regular);
        line-height: 1.6;
        margin-bottom: 16px;
      }

      ul {
        padding-left: 20px;

        li {
          color: var(--el-text-color-secondary);
          margin-bottom: 8px;
          line-height: 1.4;
          position: relative;

          &::before {
            content: '•';
            position: absolute;
            left: -12px;
            color: var(--el-color-primary);
          }
        }
      }
    }
  }
}
</style>