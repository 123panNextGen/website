<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import CommunitySection from './components/CommunitySection.vue'
import FooterSection from './components/FooterSection.vue'

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
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    observer!.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <!-- 背景装饰 -->
  <div class="bg-grid"></div>
  <div class="bg-orb bg-orb--top"></div>
  <div class="bg-orb bg-orb--mid"></div>
  <div class="bg-orb bg-orb--bottom"></div>

  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <FeaturesSection />
    <CommunitySection />
  </main>
  <FooterSection />
</template>
