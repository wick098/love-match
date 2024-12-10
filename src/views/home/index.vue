<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>心理测评系统</h1>
      <p class="subtitle">基于AI的专业心理分析</p>
      <el-button type="primary" size="large" @click="handleStart">
        开始测试
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleStart = () => {
  router.push('/analysis')
}
</script>

<style scoped lang="scss">
.home-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
}

.hero-section {
  text-align: center;
  padding: 40px;

  h1 {
    font-size: 48px;
    color: var(--el-text-color-primary);
    margin-bottom: 20px;
  }

  .subtitle {
    font-size: 20px;
    color: var(--el-text-color-regular);
    margin-bottom: 40px;
  }
}
</style>
