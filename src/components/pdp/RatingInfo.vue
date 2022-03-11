<template>
  <div class="rating-info">
    <div class="star">
      <BliIconStar/>
    </div>
    <div class="wording">
      <div class="rate">5.0</div>
      <div class="rateCount">(2)</div>
      <div class="orderCount"> &nbsp; • &nbsp; Terjual 26</div>
    </div>
  </div>
</template>

<script src="./js/rating-info.js"></script>
<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/mixins/responsive";

.rating-info {
  float: left;
  display: flex;

  .star {
    align-self: center;
    color: #fdb813;
    svg {
      transform: scale(.75);
    }
  }

  .wording {
    font-family: efframedium, Helvetica, Arial, sans-serif;
    color: rgba(0, 0, 0, .6);
    padding-left: 2px;
    font-size: 1.4rem;
    margin-top: 2px;
    display: inline-flex;

    .rateCount, .orderCount {
      margin-left: 3px;
      color: rgba(0, 0, 0, .38);
    }
  }
}

</style>
