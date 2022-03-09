<template>
  <div class="pdp-page">
    <div v-if="!isMobile" class="left-side">
      <FilterList />
    </div>
    <div class="right-side">
      <FilterCard />
      <ProductList />
    </div>
  </div>
</template>

<script src="./js/pdp-page.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/mixins/responsive";

.pdp-page {
  display: flex;
  max-width: 1230px;
  margin: 16px auto;
  gap: 16px;
  .left-side {
    min-width: 17.75%;
  }
  .right-side {
    width: 100%;
  }
}
</style>
