<template>
  <div id="app" class="blu">
<!--    <Header />-->
    <router-view/>
  </div>
</template>

<script>
const Header = () => import(/* webpackChunkName: "c-header" */ '@/components/common/Header')

export default {
  name: 'App',
  components: {
    Header
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
  //text-align: center;
  color: #2c3e50;
}
</style>
