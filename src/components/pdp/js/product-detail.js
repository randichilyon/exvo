import {mapGetters} from 'vuex'
const RatingInfo = () => import(/* webpackChunkName: "c-filter-list" */ '@/components/pdp/RatingInfo')
const ProductDescription = () => import(/* webpackChunkName: "c-filter-list" */ '@/components/pdp/ProductDescription')

export default {
  name: 'ProductDetail',

  components: {
    RatingInfo,
    ProductDescription
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {}
}
