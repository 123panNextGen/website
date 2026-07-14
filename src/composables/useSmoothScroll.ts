import { onUnmounted } from 'vue'

interface UseSmoothScrollReturn {
  scrollToSection: (hash: string) => void
  scrollToTop: () => void
}

export function useSmoothScroll(): UseSmoothScrollReturn {
  let isActive = true

  function scrollToSection(hash: string): void {
    if (!isActive) return
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  function scrollToTop(): void {
    if (!isActive) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onUnmounted(() => {
    isActive = false
  })

  return { scrollToSection, scrollToTop }
}
