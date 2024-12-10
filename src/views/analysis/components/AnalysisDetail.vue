<template>
  <div class="analysis-detail">
    <h2 class="detail-title">详细分析</h2>

    <TransitionList
      name="fade"
      class="dimensions-list"
      appear
    >
      <div
        v-for="dimension in dimensions"
        :key="dimension.name"
        class="dimension-item"
      >
        <div class="dimension-header">
          <h3 class="dimension-name">{{ dimension.name }}</h3>
          <div class="dimension-score">{{ dimension.value }}分</div>
        </div>

        <div class="dimension-progress">
          <div
            class="progress-bar"
            :style="{ width: `${dimension.value}%` }"
          ></div>
        </div>

        <p v-if="dimension.description" class="dimension-desc">
          {{ dimension.description }}
        </p>

        <ul v-if="dimension.points?.length" class="dimension-points">
          <li v-for="(point, index) in dimension.points" :key="index">
            {{ point }}
          </li>
        </ul>
      </div>
    </TransitionList>
  </div>
</template>

<script setup lang="ts">
import type { Dimension } from '@/types/analysis'
import TransitionList from '@/components/TransitionList.vue'

defineProps<{
  dimensions: Dimension[]
}>()

defineOptions({
  name: 'AnalysisDetail'
})
</script>

<style scoped lang="scss">
.analysis-detail {
  .detail-title {
    font-size: 20px;
    color: var(--color-text-primary);
    margin-bottom: 24px;
  }

  .dimensions-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .dimension-item {
    .dimension-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .dimension-name {
        font-size: 16px;
        color: var(--color-text-primary);
        font-weight: 500;
      }

      .dimension-score {
        font-size: 16px;
        color: var(--color-primary);
        font-weight: 500;
      }
    }

    .dimension-progress {
      height: 6px;
      background: var(--color-bg-secondary);
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 12px;

      .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
        border-radius: 3px;
        transition: width 0.3s ease;
      }
    }

    .dimension-desc {
      font-size: 14px;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 12px;
    }

    .dimension-points {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 14px;
        color: var(--color-text-regular);
        line-height: 1.6;
        padding-left: 16px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--color-primary);
        }
      }
    }
  }
}
</style>