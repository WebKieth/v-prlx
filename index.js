import ease from 'easy-ease'
export default {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install (Vue) {

    Vue.directive('prlx', {
      bind (el, options) {
        let canTransform = true
        window.addEventListener('scroll', () => {
          if (!el || !canTransform) return false
          const { transform } = window.getComputedStyle(el);
          let currentStep = 0
          if (transform && transform !== 'none') {
            const matrixValues = transform.match(/matrix.*\((.+)\)/)[1].split(', ')
            currentStep = matrixValues[5]
          }
          if (currentStep === 0) {
            el.style.transform = `translateY(0px)`
            return
          }
          const nextStep = Math.floor((window.pageYOffset - el.parentNode.offsetTop) / (options.value.delimeter || 2))
          ease({
            startValue: Number(currentStep),
            endValue: nextStep,
            durationMs: 10,
            onStep: (value) => {
              canTransform = false
              requestAnimationFrame(() => {
                el.style.transform = `translateY(${value}px)`
              })
            },
            onComplete: () => canTransform = true
          })
        })
      }
    })
  }
}