<template>
  <BliCard>
    <BliCardContent>
      <div class="filter-list">
        <div
          v-for="data in filterData"
          :key="data"
          class="filter-list__section"
        >
          <div class="text">
            {{ data }}
          </div>
          <BliIconChevronDown />
        </div>
      </div>
    </BliCardContent>
  </BliCard>
</template>

<script src="./js/filter-list.js"></script>

<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/mixins/responsive";

.filter-list {
  padding: 8px 0;
  &__section {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    font-family: efframedium;
    align-items: center;
    align-self: center;
    border-bottom: solid 1px #E0E0E0;
    svg {
      color: #0095da;
      align-self: center;
    }
    .text {
      align-self: center;
    }
  }
  &__section:not(:first-child) {
    padding: 12px 0;
  }
  &__section:last-child {
    border-bottom: none;
  }
  &__section:first-child {
    padding-bottom: 12px;
  }
}
</style>
