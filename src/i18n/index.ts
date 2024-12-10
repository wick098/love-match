import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'zh-CN': {
      analysis: {
        title: '分析报告',
        loading: '加载中...',
        error: '出错了'
      }
    },
    'en-US': {
      analysis: {
        title: 'Analysis Report',
        loading: 'Loading...',
        error: 'Error occurred'
      }
    }
  }
})