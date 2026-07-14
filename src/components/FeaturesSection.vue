<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Feature {
  icon: string
  iconClass: 'blue' | 'purple' | 'cyan'
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '🚀',
    iconClass: 'blue',
    title: '突破限制',
    description:
      '使用多种技术手段突破官方下载限制，模拟移动端请求解除每日流量1G上限，释放网盘真正实力。',
  },
  {
    icon: '⚡',
    iconClass: 'purple',
    title: '高效下载',
    description:
      '内置多线程下载引擎与下载链接复制功能，轻松实现更高速、更稳定的文件传输体验。',
  },
  {
    icon: '✨',
    iconClass: 'cyan',
    title: '简单易用',
    description:
      '精心打磨的界面设计，直观的操作流程，无需学习成本，开箱即用的流畅体验。',
  },
]

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
      <article v-for="feature in features" :key="feature.title" class="feature-item">
        <div class="feature-icon" :class="feature.iconClass">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-item {
  padding: 32px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  transition: all var(--transition-base);
}

.feature-item:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.feature-icon.blue { background: rgba(59, 130, 246, 0.12); }
.feature-icon.purple { background: rgba(139, 92, 246, 0.12); }
.feature-icon.cyan { background: rgba(6, 182, 212, 0.12); }

.feature-item h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.feature-item p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .feature-list {
    grid-template-columns: 1fr;
  }

  .feature-item {
    padding: 24px;
  }
}
</style>
