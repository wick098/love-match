<template>
  <transition-group
    :name="name"
    :tag="tag"
    :appear="appear"
    v-bind="$attrs"
  >
    <slot></slot>
  </transition-group>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: 'fade'
  },
  tag: {
    type: String,
    default: 'div'
  },
  appear: {
    type: Boolean,
    default: true
  }
})

defineOptions({
  name: 'TransitionList'
})
</script>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-active {
  position: absolute;
}

.slide-move,
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-active {
  position: absolute;
}
</style>