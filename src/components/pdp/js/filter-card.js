import { mapActions } from 'vuex'

export default {
  name: 'FilterCard',
  components: {
  },
  data () {
    return {
      filterActive: false,
      checkbox: false
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'setFilterGreen'
    ]),
    triggerFilter () {
      this.setFilterGreen(!this.filterActive)
      this.filterActive = !this.filterActive
    }
  }
}
