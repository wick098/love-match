<template>
  <div class="result-view">
    <!-- 返回按钮 -->
    <el-button
      class="back-button"
      type="primary"
      @click="router.push('/')"
    >
      返回首页
    </el-button>

    <h1>测评结果分析</h1>

    <!-- 雷达图 -->
    <div class="chart-container">
      <h2>性格特征分布</h2>
      <RadarChart :data="visualData.radar" />
    </div>

    <!-- 柱状图 -->
    <div class="chart-container">
      <h2>维度得分详情</h2>
      <BarChart :data="visualData.bar" />
    </div>

    <!-- 关联分析图 -->
    <div class="chart-container">
      <h2>特征关联分析</h2>
      <CorrelationGraph :data="visualData.correlation" />
    </div>

    <!-- 分析报告 -->
    <div class="report-container">
      <h2>分析报告</h2>
      <div v-if="report" class="report-content">
        <section>
          <h3>总体评价</h3>
          <p>{{ report.overview.description }}</p>
        </section>

        <section>
          <h3>维度分析</h3>
          <div v-for="dim in report.dimensions" :key="dim.name" class="dimension">
            <h4>{{ dim.name }}（{{ dim.score }}分）</h4>
            <p>{{ dim.description }}</p>
            <ul v-if="dim.suggestions.length">
              <li v-for="(sug, i) in dim.suggestions" :key="i">{{ sug }}</li>
            </ul>
          </div>
        </section>

        <section>
          <h3>发展建议</h3>
          <p>{{ report.recommendations }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAssessmentStore } from '@/stores/assessment'
import { generateReport, generateVisualizationData } from '@/utils/report'
import RadarChart from '@/components/visualization/RadarChart.vue'
import BarChart from '@/components/visualization/BarChart.vue'
import CorrelationGraph from '@/components/visualization/CorrelationGraph.vue'
import type { AssessmentReport, VisualizationData } from '@/types'
import { useRouter } from 'vue-router'

const store = useAssessmentStore()
const report = ref<AssessmentReport>()
const visualData = ref<VisualizationData>({
  radar: { dimensions: [], series: [] },
  bar: { dimensions: [], series: [] },
  correlation: { nodes: [], links: [] }
})

const router = useRouter()

onMounted(async () => {
  if (!store.results.length) {
    await store.startAnalysis()
  }

  report.value = generateReport(store.results)
  visualData.value = generateVisualizationData(store.results)
})
</script>

<style scoped lang="scss">
.result-view {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  .back-button {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 100;
  }

  .chart-container {
    margin: 30px 0;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  }

  .report-container {
    margin: 30px 0;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);

    .dimension {
      margin: 20px 0;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  h1, h2, h3, h4 {
    color: #333;
    margin-bottom: 1em;
  }

  p {
    line-height: 1.6;
    color: #666;
  }

  ul {
    padding-left: 20px;

    li {
      color: #666;
      line-height: 1.6;
      margin: 8px 0;
    }
  }
}
</style>