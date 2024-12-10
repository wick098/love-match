<template>
  <div class="correlation-graph" ref="chartRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { VisualizationData } from '@/types'
import * as echarts from 'echarts'

const props = defineProps<{
  data: VisualizationData['correlation']
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
      text: '特征关联分析',
      textStyle: {
        color: '#333',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['特征', '职业倾向', '学习倾向', '关系倾向']
    },
    series: [{
      type: 'graph',
      layout: 'force',
      data: props.data.nodes.map(node => ({
        ...node,
        symbolSize: node.value / 8,
        category: node.category
      })),
      links: props.data.links,
      categories: [
        { name: '特征' },
        { name: '职业倾向' },
        { name: '学习倾向' },
        { name: '关系倾向' }
      ],
      roam: true,
      label: {
        show: true,
        position: 'right'
      },
      force: {
        repulsion: 100,
        edgeLength: 100
      },
      emphasis: {
        focus: 'adjacency'
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3
      }
    }]
  }

  chart.setOption(option)
}

// 监听窗口大小变化
window.addEventListener('resize', () => {
  chart?.resize()
})
</script>

<style scoped lang="scss">
.correlation-graph {
  width: 100%;
  height: 600px;
}
</style>