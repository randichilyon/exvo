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
  created () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {
    toPlp () {
      this.$router.push('/cari/sedotan')
    }
  }
}
