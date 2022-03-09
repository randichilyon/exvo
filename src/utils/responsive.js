const MOBILE_BREAKPOINT = 768
const MOBILE_LANDSCAPE = 1023
const LANDSCAPE_PRIMARY = 'landscape-primary'

export default {
  isMobile: () => {
    const mql = window.matchMedia('(orientation: portrait)')
    const orientation = mql.matches ? 'portrait-primary' : 'landscape-primary'
    const { clientWidth } = window.document.documentElement

    if (clientWidth <= MOBILE_LANDSCAPE && orientation === LANDSCAPE_PRIMARY) {
      return true
    }
    return clientWidth <= MOBILE_BREAKPOINT
  }
}
