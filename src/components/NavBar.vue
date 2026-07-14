<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const { scrollToSection } = useSmoothScroll()

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
  window.addEventListener('scroll', onScroll, { passive: true })
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

<style scoped>
.navbar {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: min(92%, 1200px);
  padding: 14px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--border-subtle);
  transition: all var(--transition-base);
}

.navbar.scrolled {
  top: 0;
  width: 100%;
  border-radius: 0;
  background: rgba(10, 14, 26, 0.9);
  border-color: rgba(99, 138, 240, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--gradient-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  -webkit-text-fill-color: white;
  color: white;
}

.navbar nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.navbar nav a {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 10px;
  transition: all var(--transition-fast);
  position: relative;
}

.navbar nav a:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.navbar nav a.nav-cta {
  margin-left: 8px;
  padding: 8px 20px;
  background: var(--gradient-2);
  color: white;
  border-radius: 12px;
  font-weight: 600;
}

.navbar nav a.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
}

/* 移动端菜单按钮 */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

@media (max-width: 1024px) {
  .navbar {
    width: 96%;
    padding: 12px 20px;
  }

  .navbar nav {
    gap: 2px;
  }

  .navbar nav a {
    padding: 6px 12px;
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .navbar nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    flex-direction: column;
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(30px);
    padding: 100px 32px 40px;
    gap: 4px;
    transition: right var(--transition-base);
    border-left: 1px solid var(--border-subtle);
  }

  .navbar nav.open {
    right: 0;
  }

  .navbar nav a {
    width: 100%;
    padding: 12px 16px;
    font-size: 15px;
    border-radius: 12px;
  }

  .navbar nav a.nav-cta {
    margin-left: 0;
    margin-top: 12px;
    text-align: center;
  }

  .nav-toggle {
    display: flex;
  }
}

@media (max-width: 480px) {
  .navbar {
    width: 100%;
    top: 0;
    border-radius: 0;
    padding: 12px 16px;
  }
}
</style>
