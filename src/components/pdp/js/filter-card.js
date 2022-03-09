import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FilterCard',
  components: {
  },
  data () {
    return {
      filterActive: false,
      checkbox: false,
      test: '',
      testFilter: '',
      items: [{
        value: 'a',
        label: 'Ramah lingkungan'
      },
        {
          value: 'b',
          label: 'Disediakan Blibli'
        },
        {
          value: 'c',
          label: 'Tipe seller'
        },
        {
          value: 'd',
          label: '4 ke atas'
        },
        {
          value: 'e',
          label: 'Promo'
        },
        {
          value: 'f',
          label: 'Pengiriman'
        }]
    }
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {
    ...mapActions([
      'setFilterGreen'
    ]),
    triggerFilter () {
      this.setFilterGreen(!this.filterActive)
      this.filterActive = !this.filterActive
    }
  },
  watch: {
    test (val) {
      if (val === 'a') {
        this.setFilterGreen(true)
        this.filterActive = true
      }
      else {
        this.setFilterGreen(false)
        this.filterActive = false
      }
    }
  }
}
