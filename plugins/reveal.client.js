export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      el.classList.add('reveal-item')
      // Direction from argument (up, down, left, right, scale)
      if (binding.arg) {
        el.classList.add(`reveal-${binding.arg}`)
      } else {
        el.classList.add('reveal-up') // default
      }
      // Delay from binding value
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('revealed')
            observer.unobserve(el) // Only animate once
          }
        })
      }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })
      
      observer.observe(el)
    }
  })
})
