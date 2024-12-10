<template>
  <div class="test-page">
    <div class="test-container">
      <!-- 进度条 -->
      <el-progress
        :percentage="progress"
        :format="format"
        class="progress-bar"
      />

      <!-- 问题内容 -->
      <div class="question-content">
        <h2>{{ currentQuestion.title }}</h2>
        <div class="options-list">
          <el-radio-group v-model="selectedAnswer">
            <el-radio
              v-for="option in currentQuestion.options"
              :key="option.id"
              :label="option.value"
              class="option-item"
            >
              {{ option.text }}
            </el-radio>
          </el-radio-group>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="action-buttons">
        <el-button @click="handlePrev" :disabled="currentIndex === 0">
          上一题
        </el-button>
        <el-button
          type="primary"
          @click="handleNext"
          :disabled="!selectedAnswer"
        >
          {{ isLastQuestion ? '完成测试' : '下一题' }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentIndex = ref(0)
const selectedAnswer = ref<number | null>(null)

// 示例问题数据
const questions = [
  {
    id: 1,
    title: '在面对压力时，您通常会采取什么方式？',
    options: [
      { id: '1', text: '寻求他人帮助和建议', value: 1 },
      { id: '2', text: '独自思考和解决问题', value: 2 },
      { id: '3', text: '暂时回避，等待合适时机', value: 3 },
      { id: '4', text: '积极面对，直接处理', value: 4 }
    ]
  }
  // ... 可以添加更多问题
]

const currentQuestion = computed(() => questions[currentIndex.value])
const progress = computed(() => (currentIndex.value / questions.length) * 100)
const isLastQuestion = computed(() => currentIndex.value === questions.length - 1)

const format = (percentage: number) => `${currentIndex.value + 1}/${questions.length}`

const handleNext = () => {
  if (isLastQuestion.value) {
    router.push('/result')
  } else {
    currentIndex.value++
    selectedAnswer.value = null
  }
}

const handlePrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    selectedAnswer.value = null
  }
}
</script>

<style scoped lang="scss">
.test-page {
  min-height: 100vh;
  background: var(--color-bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.test-container {
  max-width: 800px;
  width: 100%;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  .progress-bar {
    margin-bottom: 40px;
  }

  .question-content {
    margin-bottom: 40px;

    h2 {
      font-size: 24px;
      color: var(--color-text-primary);
      margin-bottom: 24px;
    }
  }

  .options-list {
    .option-item {
      display: block;
      margin-bottom: 16px;
      padding: 12px;
      border-radius: 8px;
      transition: all 0.3s;

      &:hover {
        background: var(--el-color-primary-light-9);
      }
    }
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>