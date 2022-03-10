import { mapGetters } from 'vuex'

export default {
  name: 'ProfilePage',
  components: {
  },
  data () {
    return {
      selectedTab: 0,
      items: [{
        icon: "BliIconEmail",
        name: "Profil",
        disabled: !1
      }, {
        icon: "BliIconProfile",
        name: "Green profile",
        disabled: !1
      }],
      name: 'Exvo',
      email: 'exvo@gdn-commerce.com',
      password: '',
      phoneNumber: '0883xxxxxxxx',
      notification: 'SMS',
      dob: '',
      gender: '',
      emailNotification: '',
      recoveryEmail: '',
      blipayPin: '',
      visibleModal: false,
      controls: [{
        label: "Batalkan",
        handler: this.closeModal,
        color: "secondary",
        outline: !0
      }, {
        label: "Ya, bagikan",
        handler: this.closeModal,
        color: "secondary"
      }],
      social: ''
    }
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {
    toSearchPage () {
      this.$router.push('/cari/daging')
    },
    openModal (val) {
      this.fillSocial(val)
      this.visibleModal = true
    },
    closeModal () {
      this.visibleModal = false
    },
    fillSocial (val) {
      this.social = val
    }
  }
}
