<template>
  <div class="pdp-page">
<<<<<<< HEAD
    <div class="pdp-page-wrapper">
      <div class="pdp-page-header">
        <div class="pdp-page-header-left">
          <div class="icon">
            <BliIconArrowLeft/>
          </div>
        </div>
        <div class="pdp-page-header-right">
          <div>
            <div class="icon" ><BliIconSearch /></div>
            <div class="icon" ><BliIconBag/></div>
              <div class="icon" ><BliIconShare/></div>
          </div>
        </div>
      </div>
      <div class="pdp-page-product-info">
        <div class="image">
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-9626048/mgm_1pc-sedotan-stainless-6mm-korea-food-grade-stainless-lurus-bengkok-_full01.jpg"
            alt="default image"
            height="400px"
            width="400px">
        </div>
        <div class="product-name">
          <div class="name">
            <p>
              1pc Sedotan Stainless 6mm Korea Food Grade Stainless (Lurus / Bengkok)
            </p>
          </div>
          <div class="price">
            Rp4.198
          </div>
          <div class="rating-info">
            <div class="rating">
              <div class="star">
                <BliIconStar/>
              </div>
              <div class="wording">
                <div class="rate">5.0</div>
                <div class="rateCount">(2)</div>
                <div class="orderCount"> &nbsp; • &nbsp; Terjual 26</div>
                <!--              <p>5.0 (2) &nbsp; • &nbsp; Terjual 26</p>-->
              </div>
            </div>
            <div class="eco">
              <img src="@/assets/blibli-eco.png">
            </div>
          </div>
        </div>
      </div>
      <div class="pdp-page-description">
        <div class="title">Deskripsi produk</div>
        <div class="brand">Merk: <a>MGM</a></div>
        <div class="category">Kategori: <a>Perlengkapan Ruang Makan</a></div>
        <a>
          <div class="usp">
            <div class="return">
              <BliIconFreeReturn/>
            </div> &nbsp;&nbsp;Gratis retur 15 hari (bersyarat)
          </div>
        </a>
        <br>
        <br>
        <p>Dimensi:</p>
        Sedotan Bengkok Tinggi: 20.5CM
        <br>
        Panjang Sedotan : 21.5CM
        <br>
        Dimensi: 6mm
      </div>
      <div class="pdp-page-option">
        <div class="seller-chat">
          <BliButton outline color="secondary">
            <BliIconChat class="btn-chat"/>
          </BliButton>
        </div>
        <div class="bag">
          <BliButton class="btn-bag" color="secondary">
            <BliIconAddToBag/>
          </BliButton>
        </div>
        <div class="buy-now">
          <BliButton color="primary" class="btn-buy-now"> Beli Sekarang</BliButton>
        </div>
      </div>
    </div>
=======
    <div
      v-if="isMobile"
      class="header-mobile"
    >
      <BliIconArrowLeft />
      <div class="search">
        <BliIconSearch />
        <input :placeholder="keyword" :value="keyword" />
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
>>>>>>> master
  </div>
</template>

<script src="./js/pdp-page.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/mixins/responsive";

.pdp-page {
<<<<<<< HEAD
  background-color: lightgrey;
  height: 850px;
  display: flex;
  top: 0;
  justify-content: space-between;


  &-wrapper {
    width: 100%;
    position: relative;
  }

  &-header {
    overflow: auto;
    width: 100%;
    color: grey;
    position: fixed;
    margin-top: 5px;
    left: 0;
    z-index: 99;

    &-left {
      float: left;
      margin-left: 10px;
    }

    &-right {
      float: right;
      margin-right: 10px;
    }
  }

  &-product-info {
    float: left;
    display: block;
    background-color: white;
    height: 550px;
    border-radius: 0 0 16px 16px;

    .image {
      width: 100%;
      height: 400px;
      justify-content: center;
      display: flex;
      left: 0;
      position: relative;
    }

    .product-name {
      background-color: transparent;
      font-family: efframedium, Helvetica, Arial, sans-serif;
      height: 130px;
      justify-content: center;
      position: relative;
      padding: 15px;

      .name {
        font-size: 1.8rem;
      }

      .price {
        font-size: 2.4rem;
        color: #f37021;
        margin-top: -10px;
      }
    }
  }

  &-description {
    float: left;
    display: block;
    background-color: white;
    margin-top: 10px;
    padding: 15px;
    width: 100%;
    border-radius: 16px 16px 16px 16px;

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
      }
    }
  }

  &-option {
    border-radius: 16px 16px 0 0;
    position: fixed;
    bottom: 0;
    z-index: 99;
    width: 100%;
    padding: 10px;
    background-color: white;

    .seller-chat {
      width: 15%;
      float: left;
    }

    .bag {
      width: 23%;
      float: left;
    }

    .buy-now {
      width: 60%;
      float: left;
    }
    .btn-chat{
    }
    .btn-buy-now{
      width: 230px;
    }
    .btn-bag{
      width: 80px;
    }
  }
}

.icon {
  background-color: white;
  border-radius: 50%;
  place-items: center;
  height: 32px;
  width: 32px;
  display: inline-grid;
}

.rating-info {
  overflow: auto;
  height: 60px;
  padding-top: 20px;

  .eco {
    float: right;
    width: 73px;
    height: 28px;
    margin-top: -20px;
  }

  .rating {
    float: left;
    display: inline-flex;

    .star {
      color: #fdb813;
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
=======
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
>>>>>>> master
    }
  }
}

</style>
