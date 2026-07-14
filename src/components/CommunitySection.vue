<script setup lang="ts">
interface CommunityLink {
  label: string
  icon: string
  url: string
  primary?: boolean
}

const links: CommunityLink[] = [
  { label: '加入社区', icon: '💬', url: 'https://github.com/123panNextGen', primary: true },
  { label: 'Star 我们', icon: '⭐', url: 'https://github.com/123panNextGen' },
]
</script>

<template>
  <section id="community" class="section">
    <div class="section-header reveal">
      <span class="section-label">Community</span>
      <h2>开源社区</h2>
      <p class="section-subtitle">
        开放、协作、共享 —— 我们相信开源的力量
      </p>
    </div>

    <div class="community-content reveal reveal-delay-1">
      <p>
        开源不仅是代码共享，更是长期主义的协作方式。
        欢迎开发者参与贡献、提出 Issue、提交 PR，
        一起打造真正可持续的现代化云盘生态。
      </p>

      <div class="community-links">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          :class="['btn', link.primary ? 'btn-primary' : 'btn-secondary']"
        >
          <span>{{ link.icon }}</span> {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.community-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.community-content p {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 32px;
}

.community-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
