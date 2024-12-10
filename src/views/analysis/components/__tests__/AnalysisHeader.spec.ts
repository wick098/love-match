import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { ElProgress } from 'element-plus'
import AnalysisHeader from '../AnalysisHeader.vue'

describe('AnalysisHeader', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders progress ring correctly', () => {
    const wrapper = mount(AnalysisHeader, {
      global: {
        components: { ElProgress }
      }
    })

    expect(wrapper.find('.score-ring').exists()).toBe(true)
    expect(wrapper.find('.el-progress').exists()).toBe(true)
  })

  it('displays correct score color based on value', async () => {
    const wrapper = mount(AnalysisHeader)
    const store = useAnalysisStore()

    // 测试不同分数区间的颜色
    store.matchScore = 95
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.score-value').attributes('style')).toContain('#67C23A')

    store.matchScore = 85
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.score-value').attributes('style')).toContain('#409EFF')
  })

  it('displays correct summary text', () => {
    const wrapper = mount(AnalysisHeader)
    const summaryText = wrapper.find('.summary-text')

    expect(summaryText.text()).toContain('基于您的测评结果')
    expect(summaryText.find('.highlight').exists()).toBe(true)
  })
})