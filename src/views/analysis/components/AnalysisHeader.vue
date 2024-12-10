<template>
  <div class="analysis-header">
    <div class="header-content">
      <h1 class="title">测试分析报告</h1>
      <div class="match-score">
        <div class="score-chart">
          <!-- 环形图 -->
          <div ref="chartRef" class="chart"></div>
          <div class="score-value">
            <CountUp
              :value="matchScore"
              :duration="2000"
              class="number"
            />
            <span class="unit">分</span>
          </div>
        </div>
        <div class="score-info">
          <div class="level" :class="{ 'fade-in': showLevel }">
            {{ matchLevel }}
          </div>
          <div class="desc">整体匹配度</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import CountUp from '@/components/CountUp.vue'

defineOptions({
  name: 'AnalysisHeader'
})

echarts.use([PieChart, CanvasRenderer])

const chartRef = ref<HTMLElement>()

// 定义 props
defineProps<{
  matchScore: number
  matchLevel: string
}>()

const showLevel = ref(false)

onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value)
    chart.setOption({
      series: [{
        type: 'pie',
        radius: ['65%', '80%'],
        label: { show: false },
        data: [{
          value: matchScore,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#946CE6'
            }, {
              offset: 1,
              color: '#FFB8B8'
            }])
          }
        }]
      }]
    })
  }

  // 延迟显示等级，产生动画效果
  setTimeout(() => {
    showLevel.value = true
  }, 1000)
})
</script>

<style scoped lang="scss">
.analysis-header {
  .header-content {
    text-align: center;

    .title {
      font-size: 28px;
      color: var(--color-text-primary);
      margin-bottom: 32px;
    }

    .match-score {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;

      .score-chart {
        position: relative;
        width: 160px;
        height: 160px;

        .chart {
          width: 100%;
          height: 100%;
        }

        .score-value {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;

          .number {
            font-size: 36px;
            font-weight: bold;
            color: var(--color-primary);
          }

          .unit {
            font-size: 16px;
            color: var(--color-text-secondary);
          }
        }
      }

      .score-info {
        text-align: left;

        .level {
          font-size: 24px;
          font-weight: bold;
          color: var(--color-primary);
          margin-bottom: 8px;
          opacity: 0;
          transform: translateY(10px);

          &.fade-in {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.5s ease;
          }
        }

        .desc {
          font-size: 16px;
          color: var(--color-text-secondary);
        }
      }
    }
  }
}
</style>