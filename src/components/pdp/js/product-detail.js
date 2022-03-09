import { mapGetters } from 'vuex'

const FilterList = () => import(/* webpackChunkName: "c-filter-list" */ '@/components/pdp/FilterList')
const FilterCard = () => import(/* webpackChunkName: "c-filter-card" */ '@/components/pdp/FilterCard')
const ProductList = () => import(/* webpackChunkName: "c-product-list" */ '@/components/pdp/ProductList')

export default {
  name: 'PdpPage',
  components: {
    FilterList,
    FilterCard,
    ProductList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['isMobile']),
    keyword () {
      return this.$route.params.key
    }
  },
  methods: {
  }
}
