<template>
  <BliCard class="filter-card">
    <BliCardContent class="filter-option">
      <div class="filter-option__address">
        <div class="text">Dekat alamatmu</div>
        <BliIconChevronDown />
      </div>
      <div class="filter-option__blibli">
        <BliCheckbox v-model="checkbox">Disediakan Blibli</BliCheckbox>
      </div>
      <div class="filter-option__seller">
        <div class="text">Tipe seller</div>
        <BliIconChevronDown />
      </div>
      <div class="filter-option__star">
        <BliCheckbox v-model="checkbox">
          <BliIconStar /> 4 ke atas
        </BliCheckbox>
      </div>
      <div class="filter-option__seller">
        <div class="text">Promo</div>
        <BliIconChevronDown />
      </div>
      <div class="filter-option__seller">
        <div class="text">Pengiriman</div>
        <BliIconChevronDown />
      </div>
      <div class="filter-option__price">
        <div class="text">
          Harga:
        </div>
        <input placeholder="Minimum" />
        <div class="separator">-</div>
        <input placeholder="Maksimum" />
      </div>
    </BliCardContent>
    <BliCardContent class="eco">
      <img
        :src="filterActive ? require('@/assets/png/eco-button-active.png') : require('@/assets/png/eco-button-inactive.png')"
        @click="triggerFilter"
      />
    </BliCardContent>
  </BliCard>
</template>

<script src="./js/filter-card.js"></script>

<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/mixins/responsive";

.filter-card {
  display: flex;
  .filter-option {
    display: flex;
    font-size: 14px;
    flex-wrap: wrap;
    gap: 16px;
    .eco {
      width: 50px;
    }
    &__address, &__seller {
      cursor: pointer;
      background-color: rgb(245, 245, 245);
      padding-left: 8px;
      border-radius: 8px;
      display: flex;
      color: rgba(0, 0, 0, 0.87);
      padding-top: 4px;
      padding-bottom: 4px;
      .text {
        align-self: center;
      }
      svg {
        color: #0095da;
        align-self: center;
      }
    }
    &__blibli, &__star {
      align-self: center;
    }
    &__star {
      svg {
        transform: scale(.75);
        color: #fdb813;
      }
      /deep/ label {
        padding-left: 24px !important;
      }
    }
    &__price {
      display: flex;
      .text {
        padding-right: 5px;
        align-self: center;
      }
      input {
        width: 120px;
        height: 32px;
        background-color: #F5F5F5;
        border: 0px;
        border-radius: 8px;
        padding: 10px;
        font-size: 1.2rem;
      }
      .separator {
        padding: 0 5px;
        align-self: center;
      }
    }
  }
  .eco {
    display: flex;
    flex-direction: column;
    img {
      cursor: pointer;
      width: 125px;
      align-self: center;
    }
  }
}
</style>

