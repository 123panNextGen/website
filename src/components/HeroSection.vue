<script setup lang="ts">
import { useSmoothScroll } from '../composables/useSmoothScroll'

const { scrollToSection } = useSmoothScroll()
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="dot"></span>
        突破限制 · 高效下载 · 简单易用
      </div>

      <h1>
        重新定义<br>
        <span class="gradient-text">新一代云盘生态</span>
      </h1>

      <p class="desc">
        123Pan NextGen 致力于开发高性能、美观简洁、
        功能强大的新一代网盘客户端，一切为了用户。
      </p>

      <div class="hero-buttons">
        <a href="https://github.com/123panNextGen" target="_blank" class="btn btn-primary">
          <span>⭐</span> 查看 GitHub
        </a>
        <a href="#projects" class="btn btn-secondary" @click.prevent="scrollToSection('#projects')">
          <span>🔍</span> 浏览项目
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8%;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 100px;
  background: rgba(99, 138, 240, 0.1);
  border: 1px solid rgba(99, 138, 240, 0.2);
  color: var(--accent-light);
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 28px;
}

.hero-badge .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { opacity: 0.7; box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
}

.hero h1 {
  font-size: clamp(48px, 8vw, 80px);
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 24px;
}

.hero h1 .gradient-text {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero .desc {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    padding: 0 5%;
    text-align: center;
  }

  .hero h1 {
    font-size: 40px;
  }

  .hero .desc {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-buttons .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 0 4%;
  }

  .hero h1 {
    font-size: 32px;
  }
}
</style>
