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
    { threshold: 0.15 }
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
    <h2>核心项目</h2>

    <div ref="cardsRef" class="cards">
      <div class="card">
        <h3><a href="https://github.com/123panNextGen/123pan">123Pan</a></h3>
        <p>
          第三方123云盘客户端，解决了123云盘官方客户端的若干问题，
          并使用模拟移动端的方式解除每日流量1G限制，使用Python和PyQt制作。
        </p>
        <br>
        <a href="https://github.com/123panNextGen/123pan/releases" class="btn secondary">
          下载（Github）
        </a>
        <a href="https://download.123panng.top/123pan" class="btn secondary">
          下载（镜像站）
        </a>
      </div>

      <div class="card">
        <h3><a href="https://github.com/123panNextGen/pan123next">Pan123Next</a></h3>
        <p>
          来自第三方的下一代123云盘客户端，解决原版客户端的诸多问题，
          使用 Flutter和Dart，界面更美观，功能更强大，效率更高 
        </p>
        <br>
        <a href="https://github.com/123panNextGen/pan123next/releases" class="btn secondary">
          下载（Github）
        </a>
        <a href="https://download.123panng.top/pan123next" class="btn secondary">
          下载（镜像站）
        </a>
      </div>

      <div class="card">
        <h3><a href="https://github.com/123panNextGen/123pan-cli">123Pan-CLI</a></h3>
        <p>
          第三方123云盘客户端，CLI交互，体积更小，使用Go编写，效率更高 
        </p>
        <br>
        <a href="https://github.com/123panNextGen/123pan-cli/releases" class="btn secondary">
          下载（Github）
        </a>
        <a href="https://download.123panng.top/123pan-cli" class="btn secondary">
          下载（镜像站）
        </a>
      </div>
    </div>
  </section>
</template>
