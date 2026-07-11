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
    { threshold: 0.15 }
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
    <h2>技术优势</h2>

    <div ref="featureListRef" class="feature-list">
      <div class="feature-item">
        <h3>突破限制</h3>
        <p>使用多种技术方法，突破官方限制，实现更多下载流量。</p>
      </div>

      <div class="feature-item">
        <h3>高效下载</h3>
        <p>自带多线程和下载链接复制等功能，可实现更快速的下载。</p>
      </div>

      <div class="feature-item">
        <h3>简单易用</h3>
        <p>外观简洁，使用方便。</p>
      </div>
    </div>
  </section>
</template>
