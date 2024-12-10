<template>
  <div class="theme-switch">
    <el-switch
      v-model="isDarkMode"
      @change="toggleTheme"
      active-text="暗色"
      inactive-text="亮色"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDarkMode = ref(false)

const toggleTheme = (value: boolean) => {
  document.documentElement.classList.toggle('dark-theme', value)
}
</script>

<style scoped>
.theme-switch {
  padding: 10px;
}
</style>
