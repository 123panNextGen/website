<script setup lang="ts">
interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: '3', label: '核心项目' },
  { value: '3', label: '编程语言' },
  { value: '∞', label: '无限可能' },
]
</script>

<template>
  <section id="about" class="section">
    <div class="section-header reveal">
      <span class="section-label">About</span>
      <h2>关于组织</h2>
      <p class="section-subtitle">
        我们是一群热爱开源的技术爱好者，致力于打造更好的云盘客户端体验。
      </p>
    </div>

    <div class="about-content reveal reveal-delay-1">
      <p>
        我们致力于为用户提供更好的网盘客户端解决方案。
        从 Python 到 Go，从桌面到 CLI，我们不断探索技术的边界，
        追求极致的用户体验。至于我们是谁，这不重要——
        重要的是我们正在构建什么。
      </p>

      <div class="about-stats">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="stat-item reveal"
          :style="{ transitionDelay: `${0.2 + index * 0.1}s` }"
        >
          <span class="stat-number">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-content p {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.9;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 700px;
  margin: 48px auto 0;
}

.stat-item {
  text-align: center;
  padding: 24px;
  border-radius: var(--radius-md);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  transition: all var(--transition-base);
}

.stat-item:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.stat-number {
  font-size: 36px;
  font-weight: 800;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .about-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .about-stats {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
