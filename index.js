
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
          const coords = el.getBoundingClientRect()
          const dh = window.innerHeight + coords.height
          // on bottom from window
          if (coords.y < dh && (coords.y + coords.height) > 0) {
            el.style.transform = `translateY(${
              Math.abs(Math.floor(coords.y - dh) / (options.delimeter || 2))
            }px)`
          }
        })
      }
    })
  }
}