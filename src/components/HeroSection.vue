<script setup lang="ts">
import { scrollToSection } from '../composables/useSmoothScroll'
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <p class="tag">突破限制 · 高效下载 · 简单易用</p>
      <h1>重新定义<br>新一代云盘生态</h1>
      <p class="desc">
        123Pan NextGen 致力于开发高性能、美观简洁、
        功能强大的的新一代网盘客户端，一切为了用户。
      </p>

      <div class="hero-buttons">
        <a href="https://github.com/123panNextGen" target="_blank" class="btn primary">
          查看 GitHub
        </a>
        <a href="#projects" class="btn secondary" @click.prevent="scrollToSection('#projects')">
          浏览项目
        </a>
      </div>
    </div>

    <div class="hero-glow"></div>
  </section>
</template>
