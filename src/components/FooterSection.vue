<script setup lang="ts">
interface FooterLink {
  label: string
  url: string
}

const footerLinks: FooterLink[] = [
  { label: 'GitHub', url: 'https://github.com/123panNextGen' },
  { label: 'CC BY 4.0 协议', url: 'https://creativecommons.org/licenses/by/4.0/' },
  { label: '网站源码', url: 'https://github.com/123panNextGen/website' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="footer-logo-icon">⚡</span>
        <span class="footer-logo-text">123Pan NextGen</span>
      </div>

      <div class="footer-links">
        <a v-for="link in footerLinks" :key="link.label" :href="link.url" target="_blank">
          {{ link.label }}
        </a>
      </div>

      <span class="footer-copy">© {{ currentYear }} 123Pan NextGen</span>
    </div>

    <div class="footer-bottom">
      本站所有内容以 CC BY 4.0 许可发布 · 由开源社区用 ❤️ 构建
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 48px 8% 32px;
  border-top: 1px solid var(--border-subtle);
  position: relative;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-logo-icon {
  width: 32px;
  height: 32px;
  font-size: 14px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-2);
  color: white;
}

.footer-logo-text {
  font-weight: 700;
  font-size: 16px;
}

.footer-copy {
  color: var(--text-muted);
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: var(--text-muted);
  font-size: 14px;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--text-primary);
}

.footer-bottom {
  text-align: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 13px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
