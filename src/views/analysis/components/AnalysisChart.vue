<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background-color: var(--el-bg-color);
}
</style>

<script>
export default {
  name: 'AnalysisChart'
}
</script>
