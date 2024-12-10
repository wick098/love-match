<template>
  <div class="radar-chart" ref="chartRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { VisualizationData } from '@/types'
import * as echarts from 'echarts'

const props = defineProps<{
  data: VisualizationData['radar']
}>()

const chartRef = ref<HTMLElement>()
let chart: echarts.ECharts | null = null

// 初始化图表
onMounted(() => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value)
    updateChart()
  }
})

// 监听数据变化
watch(() => props.data, updateChart, { deep: true })

// 更新图表
function updateChart() {
  if (!chart) return

  const option = {
    title: {
      text: '性格特征分析',
      textStyle: {
        color: '#333',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: props.data.series.map(s => s.name)
    },
    radar: {
      indicator: props.data.dimensions.map(dim => ({
        name: dim,
        max: 100
      })),
      splitNumber: 4,
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#fff', '#f8f9fa']
        }
      }
    },
    series: props.data.series.map(series => ({
      name: series.name,
      type: 'radar',
      data: [{
        value: series.data,
        name: series.name,
        symbolSize: 6,
        lineStyle: {
          width: 2
        },
        areaStyle: {
          opacity: 0.3
        }
      }]
    }))
  }

  chart.setOption(option)
}

// 监听窗口大小变化
window.addEventListener('resize', () => {
  chart?.resize()
})
</script>

<style scoped lang="scss">
.radar-chart {
  width: 100%;
  height: 400px;
}
</style>