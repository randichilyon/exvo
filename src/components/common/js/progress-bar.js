export default {
  props: {
    max: {
      default: 100,
      required: false
    },
    current: {
      default: 0,
      required: false
    }
  },
  computed: {
    progressStyle() {
      const percentage = (this.current / this.max) * 100
      return {
        width: `${percentage}%`
      }
    }
  }
}