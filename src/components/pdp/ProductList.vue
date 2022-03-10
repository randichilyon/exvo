<template>
  <BliCard class="product-list">
    <div class="product-list__top">
      <div class="left-side">
        <div>
          Ini hasil dari semua kategori.
        </div>
        <div>
          Tandai kategori untuk pencarian lebih spesifik.
        </div>
      </div>
      <div v-if="!isMobile" class="right-side">
        <BliIconViewGrid class="grid"/>
        <BliIconViewList class="list"/>
        <BliDropdown
          class="dropdown"
          v-model="value"
          selection
          autoclose
        >
          <label slot="label">Urut berdasarkan</label>
          <BliList scrollable mandatory>
            <BliListItem v-for="item in dropdownOptions" :key="item.value" :value="item.value">
              {{item.text}}
            </BliListItem>
          </BliList>
        </BliDropdown>
      </div>
    </div>
    <div class="product-list__bottom">
      <ProductCard
        v-for="(product, idx) in shownProducts"
        :key="idx"
        :product="product"
      />
    </div>
  </BliCard>
</template>

<script src="./js/product-list.js"></script>

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

.product-list {
  margin-top: 17px;
  position: relative;
  &__top {
    display: flex;
    justify-content: space-between;
    padding: 13px;
    .left-side {
      display: flex;
      flex-direction: column;
      font-size: 1.4rem;
      text-align: left;
      width: 100%;
      justify-content: flex-end;
    }
    .right-side {
      .grid {
        color: #0095da;
      }
      svg {
        align-self: center;
        cursor: pointer;
      }
      gap: 20px;
      display: flex;
      width: 100%;
      justify-content: flex-end;
      .dropdown {
        min-width: 228px;
        /deep/ .blu-dropdown__value {
          text-align: left;
        }
      }
    }
  }
  &__bottom {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px;
    justify-content: flex-start;
  }
}
</style>
