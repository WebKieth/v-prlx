
export default {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install (Vue) {

    Vue.directive('prlx', {
      bind (el, options) {
        window.addEventListener('scroll', () => {
          if (!el) return false
          requestAnimationFrame(() => {
            el.style.transform = `translateY(${
              Math.floor((window.pageYOffset - el.parentNode.offsetTop) / (options.value.delimeter || 2))
            }px)`
          })
        })
      }
    })
  }
}