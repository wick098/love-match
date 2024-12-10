<template>
  <div class="analysis-page">
    <AnalysisHeader />
    <div class="analysis-content">
      <div class="dimensions">
        <div v-for="dim in dimensions" :key="dim.name" class="dimension-card">
          <h3>{{ dim.name }}</h3>
          <div class="score">{{ dim.score }}分</div>
          <p>{{ dim.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAnalysisStore } from '@/stores/analysis'
import AnalysisHeader from './components/AnalysisHeader.vue'

const store = useAnalysisStore()
const { dimensions } = storeToRefs(store)
</script>

<style scoped lang="scss">
.analysis-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.analysis-content {
  margin-top: 40px;
}

.dimensions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.dimension-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--el-color-primary);
    margin: 0 0 16px;
  }

  .score {
    font-size: 24px;
    font-weight: bold;
    margin: 12px 0;
  }

  p {
    color: var(--el-text-color-secondary);
    line-height: 1.6;
  }
}
</style>
