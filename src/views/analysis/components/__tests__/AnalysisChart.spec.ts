import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { ElRadioGroup, ElRadioButton } from 'element-plus'
import AnalysisChart from '../AnalysisChart.vue'

describe('AnalysisChart', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with radar chart type', () => {
    const wrapper = mount(AnalysisChart)
    expect(wrapper.vm.chartType).toBe('radar')
  })

  it('switches chart type correctly', async () => {
    const wrapper = mount(AnalysisChart, {
      global: {
        components: {
          ElRadioGroup,
          ElRadioButton
        }
      }
    })

    await wrapper.find('input[value="bar"]').trigger('change')
    expect(wrapper.vm.chartType).toBe('bar')
  })

  it('updates chart when data changes', async () => {
    const wrapper = mount(AnalysisChart)
    const store = useAnalysisStore()

    store.dimensions = [
      { name: '测试维度', score: 80, description: '测试', points: [] }
    ]

    await wrapper.vm.$nextTick()
    expect(wrapper.find('.chart-container').exists()).toBe(true)
  })
})