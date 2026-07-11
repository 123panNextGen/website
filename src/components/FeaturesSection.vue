<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const featureListRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )

  if (featureListRef.value) {
    featureListRef.value.querySelectorAll('.feature-item').forEach((el) => {
      observer!.observe(el)
    })
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section id="features" class="section">
    <div class="section-header reveal">
      <span class="section-label">Features</span>
      <h2>技术优势</h2>
      <p class="section-subtitle">
        我们运用多种技术手段，为你带来极致的使用体验
      </p>
    </div>

    <div ref="featureListRef" class="feature-list">
      <div class="feature-item">
        <div class="feature-icon blue">🚀</div>
        <h3>突破限制</h3>
        <p>
          使用多种技术手段突破官方下载限制，
          模拟移动端请求解除每日流量1G上限，释放网盘真正实力。
        </p>
      </div>

      <div class="feature-item">
        <div class="feature-icon purple">⚡</div>
        <h3>高效下载</h3>
        <p>
          内置多线程下载引擎与下载链接复制功能，
          轻松实现更高速、更稳定的文件传输体验。
        </p>
      </div>

      <div class="feature-item">
        <div class="feature-icon cyan">✨</div>
        <h3>简单易用</h3>
        <p>
          精心打磨的界面设计，直观的操作流程，
          无需学习成本，开箱即用的流畅体验。
        </p>
      </div>
    </div>
  </section>
</template>
