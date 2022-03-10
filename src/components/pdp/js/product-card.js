export default {
  name: 'ProductCard',
  props: ['product'],
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    highlight () {
      return this.product.greenScore > 2 ? 'highlight' : ''
    }
  },
  methods: {
    redirect () {
      this.$router.push('/p/1pc-sedotan-stainless-6mm-korea-food-grade-stainless-lurus-bengkok/ps--MGO-60026-00429')
    }
  }
}
