<template>
  <div class="guide-step-images">
    <!-- 步骤1：基本信息 -->
    <div class="step-image" id="guide-step1">
      <div class="form-container">
        <h2>个人信息</h2>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" placeholder="请输入姓名" />
        </div>
        <div class="form-group">
          <label>年龄</label>
          <input type="number" placeholder="请输入年龄" />
        </div>
        <div class="form-group">
          <label>性别</label>
          <div class="radio-group">
            <label><input type="radio" name="gender" /> 男</label>
            <label><input type="radio" name="gender" /> 女</label>
            <label><input type="radio" name="gender" /> 其他</label>
          </div>
        </div>
        <button class="next-button">下一步</button>
      </div>
    </div>

    <!-- 步骤2：测评问题 -->
    <div class="step-image" id="guide-step2">
      <div class="question-container">
        <div class="progress-bar">
          <div class="progress-text">问题 3/20</div>
          <div class="progress-track">
            <div class="progress-fill" style="width: 55%"></div>
          </div>
        </div>

        <div class="question-content">
          <h2>在面对压力时，您通常会采取什么方式？</h2>

          <div class="options-list">
            <div class="option-item">
              <input type="radio" name="answer" id="option1" />
              <label for="option1">寻求他人帮助和建议</label>
            </div>
            <div class="option-item">
              <input type="radio" name="answer" id="option2" />
              <label for="option2">独自思考和解决问题</label>
            </div>
            <div class="option-item">
              <input type="radio" name="answer" id="option3" />
              <label for="option3">暂时回避，等待合适时机</label>
            </div>
            <div class="option-item">
              <input type="radio" name="answer" id="option4" />
              <label for="option4">积极面对，直接处理</label>
            </div>
          </div>
        </div>

        <div class="question-actions">
          <button class="prev-button">上一题</button>
          <button class="next-button">下一题</button>
        </div>
      </div>
    </div>

    <!-- 步骤3：AI分析 -->
    <div class="step-image" id="guide-step3">
      <div class="analysis-container">
        <h2>AI 正在分析您的心理特征...</h2>

        <div class="analysis-animation">
          <div class="ai-core">
            <div class="ai-icon">AI</div>
            <div class="data-flow"></div>
          </div>
        </div>

        <div class="progress-indicator">
          <div class="progress-track">
            <div class="progress-fill" style="width: 75%"></div>
          </div>
        </div>

        <div class="analysis-steps">
          <div class="step-item completed">
            <i class="el-icon-check"></i>
            <span>性格特征分析</span>
          </div>
          <div class="step-item completed">
            <i class="el-icon-check"></i>
            <span>行为模式识别</span>
          </div>
          <div class="step-item active">
            <i class="el-icon-loading"></i>
            <span>情感倾向评估</span>
          </div>
          <div class="step-item">
            <i class="el-icon-time"></i>
            <span>生成综合报告</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 步骤4：报告解读 -->
    <div class="step-image" id="guide-step4">
      <div class="report-container">
        <h2>心理特征分析报告</h2>

        <div class="report-content">
          <div class="radar-chart">
            <!-- 雷达图 -->
            <svg viewBox="0 0 200 200">
              <path class="radar-area"
                    d="M100,20 L180,80 L160,160 L40,160 L20,80 Z"
                    fill="rgba(148,108,230,0.2)"
                    stroke="#946CE6"
                    stroke-width="2"/>
              <circle cx="100" cy="20" r="4" fill="#946CE6"/>
              <circle cx="180" cy="80" r="4" fill="#946CE6"/>
              <circle cx="160" cy="160" r="4" fill="#946CE6"/>
              <circle cx="40" cy="160" r="4" fill="#946CE6"/>
              <circle cx="20" cy="80" r="4" fill="#946CE6"/>
            </svg>
          </div>

          <div class="trait-scores">
            <div class="trait-item">
              <span class="trait-label">开放性</span>
              <div class="trait-bar">
                <div class="bar-fill" style="width: 85%"></div>
              </div>
            </div>
            <div class="trait-item">
              <span class="trait-label">尽责性</span>
              <div class="trait-bar">
                <div class="bar-fill" style="width: 70%"></div>
              </div>
            </div>
            <!-- 更多特征... -->
          </div>
        </div>

        <button class="view-report-button">
          查看详细报告
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.guide-step-images {
  .step-image {
    width: 800px;
    height: 600px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 32px;
  }

  .form-container {
    max-width: 500px;
    margin: 0 auto;

    h2 {
      color: var(--color-text-primary);
      margin-bottom: 32px;
      text-align: center;
    }

    .form-group {
      margin-bottom: 24px;

      label {
        display: block;
        margin-bottom: 8px;
        color: var(--color-text-secondary);
      }

      input {
        width: 100%;
        height: 40px;
        border: 1px solid var(--color-border);
        border-radius: 8px;
        padding: 0 16px;

        &:focus {
          border-color: var(--color-primary);
          outline: none;
        }
      }
    }

    .radio-group {
      display: flex;
      gap: 24px;

      label {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    .next-button {
      width: 160px;
      height: 48px;
      background: var(--color-primary);
      color: #fff;
      border: none;
      border-radius: 24px;
      margin: 32px auto 0;
      display: block;
      cursor: pointer;

      &:hover {
        background: var(--color-primary-dark);
      }
    }
  }
}

.question-container {
  padding: 32px;

  .progress-bar {
    margin-bottom: 48px;

    .progress-text {
      margin-bottom: 8px;
      color: var(--color-text-secondary);
    }

    .progress-track {
      height: 8px;
      background: var(--color-bg-secondary);
      border-radius: 4px;

      .progress-fill {
        height: 100%;
        background: var(--color-primary);
        border-radius: 4px;
        transition: width 0.3s ease;
      }
    }
  }

  .question-content {
    margin-bottom: 48px;

    h2 {
      margin-bottom: 32px;
      text-align: center;
    }
  }

  .options-list {
    .option-item {
      margin-bottom: 16px;
      padding: 16px;
      border: 1px solid var(--color-border);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--color-primary);
        background: var(--color-bg-secondary);
      }

      label {
        margin-left: 12px;
        cursor: pointer;
      }
    }
  }

  .question-actions {
    display: flex;
    justify-content: center;
    gap: 24px;

    button {
      width: 120px;
      height: 40px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;

      &.prev-button {
        background: var(--color-bg-secondary);
        color: var(--color-text-secondary);
      }

      &.next-button {
        background: var(--color-primary);
        color: #fff;
      }

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
}

.analysis-container {
  text-align: center;
  padding: 48px;

  h2 {
    margin-bottom: 48px;
    color: var(--color-primary);
  }

  .analysis-animation {
    margin-bottom: 48px;
    height: 200px;
    position: relative;

    .ai-core {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      background: var(--color-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: bold;
      position: relative;
      animation: pulse 2s infinite;
    }

    .data-flow {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200px;
      height: 2px;
      background: linear-gradient(90deg,
        rgba(148,108,230,0) 0%,
        rgba(148,108,230,1) 50%,
        rgba(148,108,230,0) 100%);
      animation: flow 2s infinite;
    }
  }

  .analysis-steps {
    margin-top: 48px;

    .step-item {
      margin-bottom: 16px;
      color: var(--color-text-secondary);

      &.completed {
        color: var(--color-success);
      }

      &.active {
        color: var(--color-primary);
      }

      i {
        margin-right: 8px;
      }
    }
  }
}

.report-container {
  padding: 32px;

  h2 {
    text-align: center;
    margin-bottom: 48px;
  }

  .radar-chart {
    width: 300px;
    height: 300px;
    margin: 0 auto 48px;
  }

  .trait-scores {
    max-width: 500px;
    margin: 0 auto;

    .trait-item {
      margin-bottom: 16px;

      .trait-label {
        display: block;
        margin-bottom: 8px;
      }

      .trait-bar {
        height: 8px;
        background: var(--color-bg-secondary);
        border-radius: 4px;

        .bar-fill {
          height: 100%;
          background: var(--color-primary);
          border-radius: 4px;
          transition: width 0.3s ease;
        }
      }
    }
  }

  .view-report-button {
    display: block;
    width: 200px;
    height: 48px;
    margin: 48px auto 0;
    background: var(--color-primary);
    color: #fff;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(148,108,230,0.3);
    }
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes flow {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Question, AnalysisStep, PersonalityTrait } from '@/types/guide'

// 当前步骤
const currentStep = ref(1)

// 示例问题数据
const questions = ref<Question[]>([
  {
    id: 1,
    title: '在面对压力时，您通常会采取什么方式？',
    type: 'single',
    required: true,
    options: [
      { id: '1', text: '寻求他人帮助和建议', value: 1 },
      { id: '2', text: '独自思考和解决问题', value: 2 },
      { id: '3', text: '暂时回避，等待合适时机', value: 3 },
      { id: '4', text: '积极面对，直接处理', value: 4 }
    ]
  }
])

// 当前问题
const currentQuestion = ref(0)
const totalQuestions = 20

// 分析步骤
const analysisSteps = ref<AnalysisStep[]>([
  {
    id: 1,
    title: '性格特征分析',
    status: 'completed',
    duration: 5
  },
  {
    id: 2,
    title: '行为模式识别',
    status: 'completed',
    duration: 8
  },
  {
    id: 3,
    title: '情感倾向评估',
    status: 'active',
    duration: 6
  },
  {
    id: 4,
    title: '生成综合报告',
    status: 'waiting',
    duration: 3
  }
])

// 性格特征数据
const personalityTraits = ref<PersonalityTrait[]>([
  {
    name: '开放性',
    score: 85,
    description: '对新体验和创新想法持开放态度',
    suggestions: ['尝试新事物', '培养创造性思维']
  },
  {
    name: '尽责性',
    score: 70,
    description: '做事认真负责，有计划性',
    suggestions: ['制定清晰目标', '培养时间管理能力']
  }
])

// 计算进度
const progress = computed(() => {
  return Math.round((currentQuestion.value / totalQuestions) * 100)
})

// 处理下一步
const handleNext = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

// 处理上一步
const handlePrev = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

// 处理问题切换
const handleQuestionNext = () => {
  if (currentQuestion.value < totalQuestions - 1) {
    currentQuestion.value++
  }
}

const handleQuestionPrev = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--
  }
}

// 模拟分析过程
const startAnalysis = () => {
  let currentStepIndex = 0
  const interval = setInterval(() => {
    if (currentStepIndex < analysisSteps.value.length) {
      analysisSteps.value[currentStepIndex].status = 'completed'
      if (currentStepIndex + 1 < analysisSteps.value.length) {
        analysisSteps.value[currentStepIndex + 1].status = 'active'
      }
      currentStepIndex++
    } else {
      clearInterval(interval)
      handleNext()
    }
  }, 2000)
}
</script>