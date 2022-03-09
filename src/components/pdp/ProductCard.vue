<template>
  <BliCard
    class="product-card"
    :class="highlight"
  >
    <img
      class="product-card__image"
      :src="product.image"
    />
    <img
      v-if="product.greenScore > 2" src="@/assets/gif/eco-gif.gif"
      class="product-card__eco"
    />
    <div class="product-card__info">
      <div class="name">
        {{ product.name }}
      </div>
      <div class="price">
        {{ product.price }}
      </div>
      <div class="location">
        <img v-if="product.official" src="@/assets/svg/official-store.svg" />
        <img :src="require(`@/assets/png/${product.badge}.png`)" />
        <div>{{ product.location }}</div>
      </div>
      <div v-if="product.review.rating" class="rating">
        <BliIconStar />
        <div class="value">{{ product.review.rating }} <span class="reviews">({{ product.review.count }})</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Terjual
          {{ product.sold }}</div>
      </div>
      <div class="images">
        <img v-if="product.isBlibliShipping" src="@/assets/svg/disediakan-blibli.svg" />
        <img v-if="product['2hd']" src="@/assets/svg/2-jam-sampai.svg" />
      </div>
    </div>
  </BliCard>
</template>

<script src="./js/product-card.js"></script>

<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/mixins/responsive";

.product-card:hover {
  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.12);
}
.highlight {
  border: 4px solid rgba(139, 198, 63, 0.87)
}
.product-card {
  cursor: pointer;
  width: 19%;
  position: relative;
  &__image {
    border-radius: 10px 10px 0 0;
    height: 182px;
    object-fit: cover;
    width: 100%;
  }
  &__eco {
    position: absolute;
    top: 0;
    max-width: 50px;
    right: 0;
    border-radius: 30px;
  }
  &__info {
    margin-top: 16px;
    text-align: left;
    padding: 0 8px 8px 8px;
    .name {
      font-size: 1.4rem;
      color: rgba(0, 0, 0, 0.87);
    }
    .price {
      color: #f37021;
      font-size: 1.6rem;
      font-family: efframedium;
    }
    .location {
      display: flex;
      gap: 2px;
      font-size: 1.2rem;
      line-height: 1.33;
      color: rgba(0, 0, 0, 0.38);
      img {
        width: 16px;
        height: 16px;
      }
    }
    .rating {
      display: flex;
      font-size: 1.2rem;
      gap: 4px;
      .value {
        margin-left: -6px;
        .reviews {
          color: rgba(0, 0, 0, 0.38);
        }
      }
      svg {
        transform: scale(.5);
        color: #fdb813;
        margin-left: -4px;
      }
    }
    .images {
      display: flex;
      gap: 8px;
      img {
        height: 24px;
      }
    }
  }
}
</style>
