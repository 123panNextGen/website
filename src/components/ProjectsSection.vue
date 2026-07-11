<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cardsRef = ref<HTMLElement | null>(null)
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

  if (cardsRef.value) {
    cardsRef.value.querySelectorAll('.card').forEach((el) => {
      observer!.observe(el)
    })
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section id="projects" class="section">
    <div class="section-header reveal">
      <span class="section-label">Projects</span>
      <h2>核心项目</h2>
      <p class="section-subtitle">
        多语言、多平台，满足不同场景的网盘客户端需求
      </p>
    </div>

    <div ref="cardsRef" class="cards">
      <div class="card">
        <div class="card-icon python">🐍</div>
        <h3><a href="https://github.com/123panNextGen/123pan">123Pan</a></h3>
        <div class="card-tags">
          <span class="tag-pill">Python</span>
          <span class="tag-pill">PyQt</span>
          <span class="tag-pill">桌面客户端</span>
        </div>
        <p>
          第三方123云盘客户端，解决官方客户端若干问题。
          使用模拟移动端方式解除每日流量1G限制。
        </p>
        <div class="card-actions">
          <a href="https://github.com/123panNextGen/123pan/releases" class="btn btn-secondary">
            GitHub 下载
          </a>
          <a href="https://download.123panng.top/123pan" class="btn btn-ghost">
            镜像站 ↘
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card-icon flutter">🎯</div>
        <h3><a href="https://github.com/123panNextGen/pan123next">Pan123Next</a></h3>
        <div class="card-tags">
          <span class="tag-pill">Flutter</span>
          <span class="tag-pill">Dart</span>
          <span class="tag-pill">跨平台</span>
        </div>
        <p>
          下一代123云盘客户端，使用 Flutter 构建。
          界面更美观，功能更强大，效率更高。
        </p>
        <div class="card-actions">
          <a href="https://github.com/123panNextGen/pan123next/releases" class="btn btn-secondary">
            GitHub 下载
          </a>
          <a href="https://download.123panng.top/pan123next" class="btn btn-ghost">
            镜像站 ↘
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card-icon go">🔧</div>
        <h3><a href="https://github.com/123panNextGen/123pan-cli">123Pan-CLI</a></h3>
        <div class="card-tags">
          <span class="tag-pill">Go</span>
          <span class="tag-pill">CLI</span>
          <span class="tag-pill">轻量</span>
        </div>
        <p>
          CLI 交互式客户端，体积更小、效率更高。
          使用 Go 编写，单二进制文件，开箱即用。
        </p>
        <div class="card-actions">
          <a href="https://github.com/123panNextGen/123pan-cli/releases" class="btn btn-secondary">
            GitHub 下载
          </a>
          <a href="https://download.123panng.top/123pan-cli" class="btn btn-ghost">
            镜像站 ↘
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
