<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { scrollToSection } from '../composables/useSmoothScroll'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="navbar" :class="{ scrolled }">
    <div class="logo">123Pan NextGen</div>
    <nav>
      <a href="#about" @click.prevent="scrollToSection('#about')">关于我们</a>
      <a href="#projects" @click.prevent="scrollToSection('#projects')">核心项目</a>
      <a href="#features" @click.prevent="scrollToSection('#features')">技术优势</a>
      <a href="#community" @click.prevent="scrollToSection('#community')">开源社区</a>
      <a href="https://github.com/123panNextGen" target="_blank">GitHub</a>
    </nav>
  </header>
</template>
