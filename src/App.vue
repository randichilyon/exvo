<template>
  <div id="app" class="blu">
    <Header v-if="!isMobile && showHeader" />
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const Header = () => import(/* webpackChunkName: "c-header" */ '@/components/common/Header')
import responsiveUtil from '@/utils/responsive'

export default {
  name: 'App',
  components: {
    Header
  },
  created () {
    this.handleResize()
  },
  computed: {
    ...mapGetters(['isMobile', 'showHeader']),
  },
  methods: {
    ...mapActions([
      'setMobileDeviceStatus'
    ]),
    handleResize () {
      this.setMobileDeviceStatus(responsiveUtil.isMobile())
      window.addEventListener('resize', () => this.setMobileDeviceStatus(responsiveUtil.isMobile()))
    }
  }
}
</script>

<style lang="scss">
@import '~@blibli/blue-tokens/dist/blue-tokens.scss';
@import '~@blibli/blue-supports/dist/blue-supports.scss';
#app {
  font-family: $blu-font-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
