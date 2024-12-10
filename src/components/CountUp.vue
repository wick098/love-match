<template>
  <span class="count-up">{{ displayValue }}</span>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps<{
  value: number
  duration?: number
  decimals?: number
}>()

const displayValue = ref(0)

const animate = (start: number, end: number, duration: number) => {
  const startTime = performance.now()
  const change = end - start

  const update = () => {
    const currentTime = performance.now()
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // 使用缓动函数使动画更自然
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const current = start + change * easeOutQuart

    displayValue.value = Number(current.toFixed(props.decimals || 0))

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

watch(() => props.value, (newValue, oldValue) => {
  animate(oldValue, newValue, props.duration || 1000)
}, { immediate: true })

onMounted(() => {
  animate(0, props.value, props.duration || 1000)
})

// 为了解决 TypeScript 的默认导出问题
defineOptions({
  name: 'CountUp'
})
</script>

<style scoped>
.count-up {
  display: inline-block;
  transition: color 0.3s ease;
}
</style>