<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Project {
  id: string
  icon: string
  iconClass: 'python' | 'flutter' | 'go'
  name: string
  url: string
  tags: string[]
  description: string
  downloadUrl: string
  mirrorUrl: string
}

const projects: Project[] = [
  {
    id: '123pan',
    icon: '🐍',
    iconClass: 'python',
    name: '123Pan',
    url: 'https://github.com/123panNextGen/123pan',
    tags: ['Python', 'PyQt', '桌面客户端'],
    description:
      '第三方123云盘客户端，解决官方客户端若干问题。使用模拟移动端方式解除每日流量1G限制。',
    downloadUrl: 'https://github.com/123panNextGen/123pan/releases',
    mirrorUrl: 'https://download.123panng.top/123pan',
  },
  {
    id: 'pan123next',
    icon: '🎯',
    iconClass: 'flutter',
    name: 'Pan123Next',
    url: 'https://github.com/123panNextGen/pan123next',
    tags: ['Flutter', 'Dart', '跨平台'],
    description:
      '下一代123云盘客户端，使用 Flutter 构建。界面更美观，功能更强大，效率更高。',
    downloadUrl: 'https://github.com/123panNextGen/pan123next/releases',
    mirrorUrl: 'https://download.123panng.top/pan123next',
  },
  {
    id: '123pan-cli',
    icon: '🔧',
    iconClass: 'go',
    name: '123Pan-CLI',
    url: 'https://github.com/123panNextGen/123pan-cli',
    tags: ['Go', 'CLI', '轻量'],
    description:
      'CLI 交互式客户端，体积更小、效率更高。使用 Go 编写，单二进制文件，开箱即用。',
    downloadUrl: 'https://github.com/123panNextGen/123pan-cli/releases',
    mirrorUrl: 'https://download.123panng.top/123pan-cli',
  },
]

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
      <article v-for="project in projects" :key="project.id" class="card">
        <div class="card-icon" :class="project.iconClass">{{ project.icon }}</div>
        <h3>
          <a :href="project.url" target="_blank">{{ project.name }}</a>
        </h3>
        <div class="card-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag-pill">{{ tag }}</span>
        </div>
        <p>{{ project.description }}</p>
        <div class="card-actions">
          <a :href="project.downloadUrl" target="_blank" class="btn btn-secondary">
            GitHub 下载
          </a>
          <a :href="project.mirrorUrl" target="_blank" class="btn btn-ghost">
            镜像站 ↘
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.card {
  padding: 36px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-2);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.card:hover::before {
  opacity: 1;
}

.card:hover {
  transform: translateY(-8px);
  border-color: var(--border-hover);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 20px;
}

.card-icon.python {
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
}

.card-icon.flutter {
  background: rgba(6, 182, 212, 0.15);
  color: #06b6d4;
}

.card-icon.go {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

.card h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
}

.card h3 a {
  transition: color var(--transition-fast);
}

.card h3 a:hover {
  color: var(--accent);
}

.card p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.card-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tag-pill {
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text-muted);
}

.card-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.card-actions .btn {
  padding: 10px 18px;
  font-size: 13px;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 24px;
  }
}
</style>
