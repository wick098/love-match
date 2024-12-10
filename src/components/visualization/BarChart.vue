<template>
  <div class="bar-chart" ref="chartRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { VisualizationData } from '@/types'
import * as echarts from 'echarts'

const props = defineProps<{
  data: VisualizationData['bar']
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
      text: '维度得分分布',
      textStyle: {
        color: '#333',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: props.data.dimensions,
      axisLabel: {
        interval: 0,
        rotate: 30
      }
    },
    yAxis: {
      type: 'value',
      max: 100,
      splitNumber: 5
    },
    series: props.data.series.map(series => ({
      name: series.name,
      type: 'bar',
      data: series.data,
      barWidth: '40%',
      itemStyle: {
        borderRadius: [4, 4, 0, 0]
      },
      label: {
        show: true,
        position: 'top'
      }
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
.bar-chart {
  width: 100%;
  height: 400px;
}
</style>