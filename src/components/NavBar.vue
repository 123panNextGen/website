<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { scrollToSection } from '../composables/useSmoothScroll'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
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
    <div class="logo">
      <span class="logo-icon">⚡</span>
      123Pan NextGen
    </div>

    <button class="nav-toggle" @click="toggleMenu" aria-label="菜单">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav :class="{ open: menuOpen }">
      <a href="#about" @click.prevent="scrollToSection('#about'); closeMenu()">关于我们</a>
      <a href="#projects" @click.prevent="scrollToSection('#projects'); closeMenu()">核心项目</a>
      <a href="#features" @click.prevent="scrollToSection('#features'); closeMenu()">技术优势</a>
      <a href="#community" @click.prevent="scrollToSection('#community'); closeMenu()">开源社区</a>
      <a href="https://github.com/123panNextGen" target="_blank" class="nav-cta">GitHub ↗</a>
    </nav>
  </header>
</template>
