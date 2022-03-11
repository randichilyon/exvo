<template>
  <div class="wrapper">
    <div class="brand">Merk: <a>MGM</a></div>
    <div class="category">Kategori: <a>Perlengkapan Ruang Makan</a></div>
    <a>
      <div class="usp">
        <div class="return">
          <BliIconFreeReturn/>
          <div>Gratis retur 15 hari (bersyarat)</div>
        </div>
      </div>
    </a>
    <p>Dimensi:</p>
    Sedotan Bengkok Tinggi: 20.5CM
    <br>
    Panjang Sedotan : 21.5CM
    <br>
    Dimensi: 6mm
  </div>
</template>
<script>
export default {
  name: 'ProductDescription'
}
</script>

<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/mixins/responsive";
.wrapper{
  text-align: left;
  font-size: 1.4rem;
}
.title {
  font-size: 18px;
  font-family: efframedium, Helvetica, Arial, sans-serif;
}

.brand {
  padding-top: 10px;
}

.usp {
  font-size: 1.6rem;
  display: inline-flex;
  padding-top: 10px;

.return {
  display: flex;
  font-size: 1.4rem;
  div {
    align-self: center;
  }
  svg {
    align-self: center;
    transform: scale(.75);
  }
}
}
</style>
