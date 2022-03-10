<template>
  <div class="product-detail">
    <div class="product-detail-wrapper-web" v-if="!isMobile">
      <div class="breadcrumb">
        <a>Home & Living</a> > <a>Perlengkapan Ruang Makan</a> > <a>Peralatan Minum</a> > Gelas & Perangkat Minum
      </div>
      <div class="web-content">
        <div class="web-content-left">
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-9626048/mgm_1pc-sedotan-stainless-6mm-korea-food-grade-stainless-lurus-bengkok-_full01.jpg"
            alt="default image"
            height="400px"
            width="400px"
            style="border-radius:12px">
        </div>
        <div class="web-content-mid">
          <div class="eco">
            <img src="@/assets/blibli-eco.png" style="width: 48px;height: 33px;">
          </div>
          <div class="product-name">
            <p>
              1pc Sedotan Stainless 6mm Korea Food Grade Stainless (Lurus / Bengkok)
            </p>
          </div>
          <div class="web-content-mid-rating-info">
            <RatingInfo/>
          </div>
          <div class="price">
            Rp4.198
          </div>
          <div>
            <ProductDescription/>
          </div>
        </div>
        <div class="web-content-right">
          <div class="merchant-info">
            <div class="merchant-info-header">
              <div class="image">
                <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/MGO-60026.jpg"
                     style="width: 40px;height: 40px">
              </div>
              <div class="detail">
                <a>MGM Online</a><br>
                Kota Jakarta Barat<br>
                Buka Kamis 08.00 - 17.00 WIB
              </div>
            </div>
            <div class="merchant-info-mid">
              <div class="review-pos">
                <h4>97%</h4>
                Ulasan Positif
              </div>
              <div class="on-time">
                <h4>97%</h4>
                Proses tepat waktu
              </div>
              <div class="response-time">
                <h4>93%</h4>
                Kecepatan Respon
              </div>
            </div>
            <div class="merchant-info-bottom">
              <div class="follow">
                <BliButton color="secondary" class="follow-btn"> ikuti</BliButton>
              </div>
              <div class="seller-chat">
                <BliButton outline color="secondary" class="seller-chat-btn">
                  <BliIconChat class="btn-chat"/>
                  Chat
                </BliButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="web-option">
        <div class="thumbnail">
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-9626048/mgm_1pc-sedotan-stainless-6mm-korea-food-grade-stainless-lurus-bengkok-_full01.jpg"
            alt="default image"
            height="48px"
            width="48px"
            style="border-radius:12px">
        </div>
        <div class="name"> 1pc Sedotan Stainless 6mm Korea Food Grade Stainless (Lurus / Bengkok)</div>
        <div class="minus">
          <BliButton outline color="secondary"> -</BliButton>
        </div>
        <div class="count"> 1</div>
        <div class="plus">
          <BliButton outline color="secondary"> +</BliButton>
        </div>
        <div class="totalPrice">
          Total Harga<br>
          <p class="price">Rp4.198</p>
        </div>
        <div class="bag">
          <BliButton class="btn-bag" color="secondary">
            <BliIconAddToBag/>
          </BliButton>
        </div>
        <div class="buy-now">
          <BliButton color="primary" class="btn-buy-now"> Beli Sekarang</BliButton>
        </div>
        <div class="wishlist">
          <BliIconWishlist/>
        </div>
      </div>
    </div>
    <div class="web-option" v-if="!isMobile">
      <div class="thumbnail">
        <img
          src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-9626048/mgm_1pc-sedotan-stainless-6mm-korea-food-grade-stainless-lurus-bengkok-_full01.jpg"
          alt="default image"
          height="48px"
          width="48px"
          style="border-radius:12px">
      </div>
      <div class="name"> 1pc Sedotan Stainless 6mm Korea Food Grade Stainless (Lurus / Bengkok)</div>
      <div class="space"></div>
      <div class="minus">
        <BliButton outline color="secondary"  class="minus-btn"> -</BliButton>
      </div>
      <div class="count"> 3</div>
      <div class="plus">
        <BliButton outline color="secondary" class="plus-btn"> +</BliButton>
      </div>
      <div class="totalPrice">
        Total Harga<br>
        <p class="price">Rp4.198</p>
      </div>
      <div class="bag">
        <BliButton class="bag-btn" color="secondary">
          Tambah ke Bag
        </BliButton>
      </div>
      <div class="buy-now">
        <BliButton color="primary" class="buy-now-btn"> Beli Sekarang</BliButton>
      </div>
      <div class="wishlist">
        <BliIconWishlist/>
      </div>
    </div>

    <div class="product-detail-wrapper" v-if="isMobile">
      <div class="product-detail-header">
        <div class="product-detail-header-left">
          <div class="icon">
            <BliIconArrowLeft/>
          </div>
        </div>
        <div class="product-detail-header-right">
          <div>
            <div class="icon">
              <BliIconSearch/>
            </div>
            <div class="icon">
              <BliIconBag/>
            </div>
            <div class="icon">
              <BliIconShare/>
            </div>
          </div>
        </div>
      </div>
      <div class="product-detail-product-info">
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
              <RatingInfo/>
            </div>
            <div class="eco">
              <img src="@/assets/blibli-eco.png">
            </div>
          </div>
        </div>
      </div>
      <div class="product-detail-description">
        <div class="title">Deskripsi produk</div>
        <ProductDescription/>

      </div>
      <div class="product-detail-option">
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
  </div>
</template>

<script src="./js/product-detail.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/mixins/responsive";

.product-detail {
  height: 850px;
  display: flex;
  top: 0;
  justify-content: space-between;

  &-wrapper {
    width: 100%;
    position: relative;
    background-color: lightgrey;
  }

  &-wrapper-web {
    display: block;
    position: relative;
    background-color: white;
    margin: 12px auto 0;
  }

  .web-option {
    border-radius: 16px 16px 0 0;
    position: fixed;
    bottom: 0;
    z-index: 99;
    width: 100%;
    padding: 20px 10px 10px 30px;
    background-color: white;

    .thumbnail {
      float: left;
      width: 4%;
    }

    .name {
      text-align: left;
      font-size: 14px;
      float: left;
      width: 31%;
      padding-left: 5px;
    }

    .plus {
      float: left;
      width: 5%;
      margin-top: 5px;
      &-btn{
        height: 40px;
      }
    }

    .count {
      margin-top: 10px;
      float: left;
      width: 2%;
    }

    .minus {
      float: left;
      width: 5%;
      margin-left: 90px;
      margin-top: 5px;
      &-btn{
        height: 40px;
      }
    }

    .totalPrice {
      font-size: 12px;
      text-align: left;
      float: left;
      width: 10%;
      color: rgba(0,0,0,.6);
    }

    .price {
      color: #f37021;
      text-align: left;
      font-size: 1.6rem;
    }

    .bag {
      float: left;
      width: 10%;
    margin-left: 15px;
      &-btn{
        width: 160px;
      }
    }

    .buy-now {
      float: left;
      width: 10%;
      margin-left: 50px;
      &-btn{
        width: 160px;
      }
    }

    .wishlist {
      float: left;
      width: 5%;
      margin-left: 50px;
      margin-top: 10px;
      color: #858585;
    }

  }

  .breadcrumb {
    font-size: 1.4rem;
    padding-top: 10px;
    text-align: left;
    font-family: "effra", Helvetica, Arial, sans-serif;
  }

  .web-content {

    margin: 0 auto 0;
    padding-top: 30px;
    position: relative;
    display: block;
    height: 400px;

    &-left {
      width: 400px;
      float: left;
    }

    &-mid {
      float: left;
      width: 530px;
      padding-left: 20px;

      .product-name {
        text-align: left;
      }

      .eco {
        width: 100%;
        display: block;
        float: left;
      }

      .price {
        width: 100%;
        float: left;
        font-size: 2.4rem;
        color: #f37021;
        text-align: left;
        font-family: efframedium, Helvetica, Arial, sans-serif;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #d6d6d6;
      }

      &-rating-info {
        width: 100%;
        position: relative;
        margin-top: -13px;

        .rate {
          display: block;
          float: left;
        }
      }
    }

    &-right {
      float: left;
      width: 250px;
      margin-left: 20px;
      box-shadow: 0 1px 6px 0 lightgrey;
      border-radius: 16px;

      .merchant-info {
        padding: 10px;
        float: left;

        &-header {
          height: 100px;

          .image {
            width: 30%;
            float: left;
          }

          .detail {
            width: 70%;
            float: left;
            text-align: left;
          }
        }

        &-mid {
          height: 75px;
          text-align: center;

          .review-pos {
            font-size: 1.2rem;
            float: left;
            width: 33%;
            height: 75px;
            padding-right: 5px;
            border-right: lightgrey 1px solid;
          }

          .on-time {
            font-size: 1.2rem;
            float: left;
            width: 33%;
            height: 75px;
            border-right: lightgrey 1px solid;
          }

          .response-time {
            font-size: 1.2rem;
            float: left;
            width: 34%;
            height: 75px;
          }
        }

        &-bottom {
          padding-top: 20px;

          .follow {
            float: left;
            width: 50%;

            &-btn {
              width: 100px;
              height: 32px;
            }
          }

          .seller-chat {
            float: left;
            width: 50%;

            &-btn {
              height: 32px;
              width: 100px;
            }
          }
        }

      }
    }

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
      text-align: left;
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

      .rating-info {
        overflow: auto;
        padding-top: 10px;

        .rating {
          float: left;
          display: inline-flex;
        }

      }
    }

    .eco {
      float: right;
      width: 73px;
      height: 28px;
      margin-top: -20px;
    }
  }

  &-description {
    text-align: left;
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

    .btn-chat {
    }

    .btn-buy-now {
      width: 230px;
    }

    .btn-bag {
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

</style>
