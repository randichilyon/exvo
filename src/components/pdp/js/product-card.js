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
  }
}
