import { mapGetters } from 'vuex'
import sedotan from '@/mocks/sedotan'

const ProductCard = () => import(/* webpackChunkName: "c-product-card" */ '@/components/pdp/ProductCard')

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data () {
    return {
      productList: sedotan,
      value: {
        value: 'Relevansi',
        text: 'Relevansi'
      },
      dropdownOptions: [
        {
          value: 'Ramah lingkungan',
          text: 'Ramah lingkungan'
        },
      {
        value: 'Relevansi',
        text: 'Relevansi'
      },
      {
        value: 'Produk terlaris',
        text: 'Produk terlaris'
      },
      {
        value: 'Harga termurah',
        text: 'Harga termurah'
      },
      {
        value: 'Harga termahal',
        text: 'Harga termahal'
      },
      {
        value: 'Produk terpopuler',
        text: 'Produk terpopuler'
      },
      {
        value: 'Produk terbaru',
        text: 'Produk terbaru'
      }]
    }
  },
  computed: {
    ...mapGetters(['filterGreen', 'isMobile']),
    shownProducts () {
      let result = sedotan
      if (this.filterGreen) {
        result = result.filter(data => {
          return data.greenScore > 2
        })
      }
      if (this.value.value === 'Ramah lingkungan') {
        result = result.sort((a, b) => {
          return b.greenScore - a.greenScore
        })
      }
      return result
    }
  },
  methods: {
  }
}
