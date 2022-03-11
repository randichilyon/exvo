import formData from './form-data'
import ProgressBar from '../../common/ProgressBar'
import { VueEditor } from "vue2-editor";
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      forms: formData,
      values: {
        productName: 'Daging Ayam Potong 5 500gr',
        productDescription: `Partingan Ayam / Potongan ayam campur terdiri dari paha, sayap, dada, random, tidak bisa pilih. - Berat: 500 gr`,
        category: {
          text: 'Makanan dan Minuman',
          value: 'f&b'
        }
      },
      libs: {
        BliHeader: null
      },
      leftMenu: ["back"],
      rightMenu: ["wishlist", "more"],
      blueImage: "https://blue.blibli.com/static/img/dls-logo.013007a.svg",
      selectMapping: {},
      visibleModal: false,
      test: null,
      prevScore: 0
    }
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  components: {
    VueEditor,
    ProgressBar
  },
  created () {
    this.$store.commit('setShowHeader', false)
  },
  methods: {
    handleSwitch(key, value) {
      this.selectMapping = {}
      this.values.ecoPoint = 0
      this.values = {
        ...this.values,
        [key]: value
      }
    },
    handleDropdown(key, event) {
      this.values[key] = event.value
    },
    handleItemSelect(key, fields, event) {
      const field = fields.find(f => f.key === event.value)
      const current = this.values[key] || 0
      if(this.selectMapping[field.key]) {
        this.selectMapping[field.key] = false
        this.values = {
          ...this.values,
          [key]: current - field.score
        }
      } else {
        this.selectMapping[field.key] = true
        this.values = {
          ...this.values,
          [key]: current + field.score
        }
      }
    },
    closeModal() {
      this.visibleModal = false
      this.values = {}
      this.selectMapping = {}
    },
    handleRadio(score) {
      this.values.ecoPoint = this.values.ecoPoint + score - this.prevScore
      this.prevScore = score
    }
  }
}