<template>
  <div class="pdp-page fade-in">
    <div
      v-if="isMobile"
      class="header-mobile"
    >
      <div @click="toMemberPage">
        <BliIconArrowLeft />
      </div>
      <div class="search">
        <BliIconSearch />
        <input :placeholder="keyword" :value="keyword" @keyup.enter="search"/>
      </div>
      <BliIconViewList />
      <BliIconBag />
      <BliIconHome />
    </div>
    <div
      v-if="isMobile"
      class="header-address"
    >
      <BliIconLocation />
      <div class="text">
        <a>Tambah alamat</a> biar belanja lebih asyik.
      </div>
    </div>
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
  @include mobile {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
}

.header-address {
  display: flex;
  font-family: efframedium;
  color: rgba(0, 0, 0, 0.38);
  font-size: 12px;
  .text {
    align-self: center;
  }
  svg {
    transform: scale(.5);
    align-self: center;
  }
  a {
    color: #0095DA;
  }
}

.header-mobile {
  z-index: 99;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  position: sticky;
  top: 0;
  svg {
    align-self: center;
    color: rgb(133, 133, 133);
  }
  .search {
    display: flex;
    height: 36px;
    padding: 9px 10px 9px 4px;
    border-radius: 8px;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    background-color: #f1f1f1;
    align-self: center;
    svg {
      color:  rgb(44, 62, 80);
      transform: scale(.75);
      align-self: center;
    }
    input {
      border: none;
      background-color: #f1f1f1;
    }
  }
}

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: .5s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
