<template>
  <span class="type-writer">{{ displayText }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  text: string
  speed?: number
}>()

const displayText = ref('')
let currentIndex = 0

const typeText = () => {
  if (currentIndex < props.text.length) {
    displayText.value = props.text.slice(0, currentIndex + 1)
    currentIndex++
    setTimeout(typeText, props.speed || 100)
  }
}

onMounted(() => {
  typeText()
})

watch(() => props.text, () => {
  currentIndex = 0
  displayText.value = ''
  typeText()
})
</script>

<style scoped>
.type-writer {
  border-right: 2px solid;
  animation: cursor-blink 0.7s infinite;
}

@keyframes cursor-blink {
  50% { border-color: transparent; }
}
</style>