import { defineStore } from 'pinia'

export const useAnalysisStore = defineStore('analysis', {
  state: () => ({
    matchScore: 85,
    dimensions: [
      {
        name: '性格契合度',
        score: 85,
        description: '你们的性格特征展现出较高的互补性，这有助于在关系中取长补短。'
      },
      {
        name: '价值观契合度',
        score: 90,
        description: '在人生重要议题上，你们持有相似的看法，这为长期关系奠定了良好基础。'
      },
      {
        name: '生活方式契合度',
        score: 80,
        description: '双方的生活习惯和节奏基本一致，有利于建立稳定的日常生活模式。'
      }
    ]
  })
})