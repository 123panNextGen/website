<script setup lang="ts">
import { scrollToSection } from '../composables/useSmoothScroll'
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
