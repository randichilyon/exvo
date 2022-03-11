<template>
  <div class="profile-page">
    <div v-if="isMobile" class="header-mobile">
      <div class="arrow">
        <BliIconArrowLeft />
      </div>
      <div class="bundled">
        <div @click="toSearchPage">
          <BliIconSearch />
        </div>
        <BliIconBag />
        <BliIconMore />
      </div>
    </div>
    <div v-if="!isMobile" class="profile-page__left-side">
      <div>
        <img src="@/assets/png/infinite.png" />
      </div>
      <div class="membership">
        <div class="membership__name">
          Exvo
        </div>
        <div class="membership__level">
          Infinite member
        </div>
        <div class="membership__since">
          Member sejak Okt 2017
        </div>
      </div>
      <div class="menu">
        <div class="menu__item active">
          Profil
        </div>
        <div class="menu__item">
          Daftar Pesanan
        </div>
        <div class="menu__item">
          Pengembalian
        </div>
        <div class="menu__item">
          Blipay
        </div>
        <div class="menu__item">
          Chat
        </div>
        <div class="menu__item">
          Blibli Rewards (100,000)
        </div>
        <div class="menu__item">
          Wishlist
        </div>
        <div class="menu__item">
          Pembayaran rutin
        </div>
        <div class="menu__item">
          Voucher
        </div>
        <div class="menu__item">
          Ulasan
        </div>
        <div class="menu__item">
          Diskusi Produk
        </div>
        <div class="menu__item">
          Buku Alamat
        </div>
        <div class="menu__item">
          Pusat Resolusi
        </div>
        <div class="menu__item">
          Seller Favorit
        </div>
        <div class="menu__item">
          Langganan
        </div>
        <div class="menu__item">
          Keluar
        </div>
      </div>
    </div>
    <div
      class="profile-page__right-side"
    >
      <div class="title">Akun</div>
      <BliTab
        :selectedTabIndex="selectedTab"
        class="tab"
      >
        <BliTabItem v-for="(item, idx) in items" :key="idx" :name="item.name" :disabled="item.disabled">
          <div
            v-if="idx === 0"
            class="profile-field"
          >
            <BliField b-clearable>
              <BliInput v-model="name" />
              <label>Nama lengkap</label>
            </BliField>
            <BliField b-clearable>
              <BliInput v-model="email" disabled/>
              <label>Email akun</label>
            </BliField>
            <BliField
              class="profile-field__opacity-1"
              b-clearable
              has-action
              action-text="Ubah"
              @actionClick="() => {}"
            >
              <BliInput disabled/>
              <label>Kata sandi</label>
            </BliField>
            <BliField
              class="profile-field__opacity-1"
              b-clearable
              has-action
              action-text="Ubah"
              message="Nomor HP terverifikasi"
              @actionClick="() => {}"
            >
              <BliInput disabled :value="phoneNumber" />
              <label>Nomor HP</label>
            </BliField>
            <div class="notification">
              <div>Notifikasi</div>
              <BliRadio class="radio" v-model="notification" value="SMS">SMS</BliRadio>
              <BliRadio class="radio" v-model="notification" value="WA">WhatsApp</BliRadio>
            </div>
            <BliTicker type="info" closeable has-icon aria-close-label="Close notification">
              <div class="dev-ticker__content">
                Apabila notifikasi WhatsApp tidak terkirim/tertunda/terjadi kesalahan, notifikasi akan dikirim melalui SMS secara otomatis.</div>
            </BliTicker>
            <BliButton style="margin-top: 20px" color="secondary" :block="isMobile">
              Simpan
            </BliButton>
          </div>
          <div v-else>
            <div class="eco-box">
              <BliCard class="eco-box__card">
                <div>Halo, Exvo!</div>
                <div class="card-wrapper">
                  <BliCard class="rating-card">
                    <div class="rating-wrapper">
                      <div class="category-title">Eco points</div>
                      <div class="share">
                        Bagikan:
                        <img src="@/assets/png/ig.png" @click="openModal('Instagram')"/>
                        <img src="@/assets/png/fb.png" @click="openModal('Facebook')"/>
                        <img src="@/assets/png/twitter.png" @click="openModal('Twitter')"/>
                      </div>
                    </div>
                    <div class="rating-card__wrapper">
                      <img class="rating-card__image" src="@/assets/png/leaf.png" />
                      <img class="rating-card__image" src="@/assets/png/leaf.png" />
                      <img class="rating-card__image" src="@/assets/png/leaf.png" />
                      <img class="rating-card__image" src="@/assets/png/leaf.png" />
                      <img class="rating-card__image" style="filter: grayscale(35%)" src="@/assets/png/leaf.png" />
                    </div>
                    <div class="total">
                      4.65 | 319 pesanan
                    </div>
                    <div class="percent">
                      Exvo, <b>93%</b> pesanan kamu masuk  kategori ramah lingkungan loh...<br />
                      Terima kasih telah mendukung Blibli dalam <a>#AksiCintaBumi</a> :)
                    </div>
                  </BliCard>
                  <BliCard v-if="!isMobile" class="rating-card">
                    <div class="category-title">Top 5 Kategori</div>
                    <div class="category">
                      <div class="category__name">1. Bliblimart</div>
                      <div class="rating-card__wrapper">
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(25%)" src="@/assets/png/leaf.png" />
                      </div>
                      <div class="category__percentage">95%</div>
                    </div>
                    <div class="category">
                      <div class="category__name">2. Ibu & Anak</div>
                      <div class="rating-card__wrapper">
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(65%)" src="@/assets/png/leaf.png" />
                      </div>
                      <div class="category__percentage">87%</div>
                    </div>
                    <div class="category">
                      <div class="category__name">3. Jam Tangan</div>
                      <div class="rating-card__wrapper">
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(25%)" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(100%)" src="@/assets/png/leaf.png" />
                      </div>
                      <div class="category__percentage">75%</div>
                    </div>
                    <div class="category">
                      <div class="category__name">4. Kesehatan & Kecantikan</div>
                      <div class="rating-card__wrapper">
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(50%)" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(100%)" src="@/assets/png/leaf.png" />
                      </div>
                      <div class="category__percentage">70%</div>
                    </div>
                    <div class="category">
                      <div class="category__name">5. Peralatan Elektronik</div>
                      <div class="rating-card__wrapper">
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(50%)" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(100%)" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(100%)" src="@/assets/png/leaf.png" />
                      </div>
                      <div class="category__percentage">50%</div>
                    </div>
                  </BliCard>
                  <BliCard v-else class="rating-card">
                    <div class="category-title">Top 5 Category</div>
                    <div class="category-mobile">
                      <div class="category-mobile__name">1. Bliblimart (95%)</div>
                      <div class="rating-card__wrapper">
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(25%)" src="@/assets/png/leaf.png" />
                      </div>
                    </div>
                    <div class="category-mobile">
                      <div class="category-mobile__name">2. Ibu & Anak (87%)</div>
                      <div class="rating-card__wrapper">
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(65%)" src="@/assets/png/leaf.png" />
                      </div>
                    </div>
                    <div class="category-mobile">
                      <div class="category-mobile__name">3. Jam Tangan (75%)</div>
                      <div class="rating-card__wrapper">
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(25%)" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(100%)" src="@/assets/png/leaf.png" />
                      </div>
                    </div>
                    <div class="category-mobile">
                      <div class="category__name">4. Kesehatan & Kecantikan (70%)</div>
                      <div class="rating-card__wrapper">
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(50%)" src="@/assets/png/leaf.png" />
                        <img class="rating-card__image" style="filter: grayscale(100%)" src="@/assets/png/leaf.png" />
                      </div>
                    </div>
                    <div class="category-mobile">
                      <div class="category-mobile__name">5. Peralatan Elektronik (50%)</div>
                      <div>
                        <div class="rating-card__wrapper">
                          <img class="rating-card__image" src="@/assets/png/leaf.png" />
                          <img class="rating-card__image" src="@/assets/png/leaf.png" />
                          <img class="rating-card__image" style="filter: grayscale(50%)" src="@/assets/png/leaf.png" />
                          <img class="rating-card__image" style="filter: grayscale(100%)" src="@/assets/png/leaf.png" />
                          <img class="rating-card__image" style="filter: grayscale(100%)" src="@/assets/png/leaf.png" />
                        </div>
                      </div>
                    </div>
                  </BliCard>
                </div>
              </BliCard>
            </div>
          </div>
        </BliTabItem>
      </BliTab>
    </div>
    <BliModal type="page" :bli-active.sync="visibleModal" @maskClick="visibleModal = false"
              @close="visibleModal = false" :controls="controls">
      <BliModalHeader style="text-align: left; margin-bottom: 30px;">
        Bagikan eco profile-mu ke {{ social }}?
      </BliModalHeader>
      <BliModalBody>
        <BliCard class="rating-card-modal">
          <img style="max-width: 100px; margin: 0 auto 10px auto;" src="@/assets/svg/blibli-logo.svg" />
          <div class="white-bg">
            <div class="rating-card-modal__wrapper">
              <img class="rating-card-modal__image" src="@/assets/png/leaf.png" />
              <img class="rating-card-modal__image" src="@/assets/png/leaf.png" />
              <img class="rating-card-modal__image" src="@/assets/png/leaf.png" />
              <img class="rating-card-modal__image" src="@/assets/png/leaf.png" />
              <img class="rating-card-modal__image" style="filter: grayscale(35%)" src="@/assets/png/leaf.png" />
            </div>
            <div class="total">
              4.65 | 319 pesanan
            </div>
          </div>
          <div class="percent">
            Exvo, <b>93%</b> pesanan kamu masuk  kategori ramah lingkungan loh...<br />
            Terima kasih telah mendukung Aksi Blibli Cinta Bumi :)
          </div>
        </BliCard>
      </BliModalBody>
    </BliModal>
  </div>
</template>

<script src="./js/profile-page.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@blibli/dls/src/assets/scss/mixins/responsive";

.profile-page{
  display: flex;
  max-width: 1230px;
  margin: 16px auto;
  gap: 16px;
  .header-mobile {
    padding: 16px;
    background: #0095da;
    text-align: left;
    display: flex;
    justify-content: space-between;
    .bundled {
      gap: 10px;
      display: flex;
    }
    svg {
      color: white;
    }
  }
  &__left-side {
    display: flex;
    flex-direction: column;
    min-width: 225px;
    .membership {
      text-align: left;
      &__name {
        word-wrap: break-word;
        line-height: 36px;
        padding-top: 30px;
        font-weight: bold;
        font-size: 25px;
      }
      &__level {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
        text-transform: capitalize;
      }
      &__since {
        margin-top: -5px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.38);
      }
      margin-bottom: 20px;
    }
    .menu {
      display: flex;
      flex-direction: column;
      text-align: left;
      &__item {
        cursor: pointer;
        padding: 10px 15px 10px 20px;
        border-bottom: 1px solid #ddd;
        color: #282828;
        font-size: 13px;
      }
      .active {
        font-weight: bold;
        color: #0095DA;
        -webkit-box-shadow: inset 5px 0px 0px 0px #0078c7;
        box-shadow: inset 5px 0px 0px 0px #0078c7;
      }
    }
  }
  .full-width {
    width: 100%;
  }
  &__right-side {
    text-align: left;
    width: 100%;
    @include mobile {
      padding: 20px;
    }
    .title {
      font-weight: bold;
      font-size: 32px;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    .tab {
      /deep/ a {
        font-size: 13px;
      }
      .profile-field {
        max-width: 60%;
        @include mobile {
          max-width: 100%;
        }
        &__opacity-1 {
          opacity: 1;
          cursor: default;
        }
      }
      .notification {
        font-size: 16px;
        font-weight: bold;
        .radio {
          /deep/ label {
            font-size: 13px;
          }
        }
      }
    }
    .eco-box {
      display: flex;
      width: 100%;
      color: white;
      font-size: 2rem;
      @include mobile {
        flex-direction: column;
      }
      .card-wrapper {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        @include mobile {
          flex-direction: column;
        }
      }
      &__card {
        background-image: url('../../assets/png/eco-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        padding: 16px;
        .category-title {
          margin-bottom: 10px;
          color: #bdbdbd;
          font-size: 1.8rem;
          font-family: efframedium;
        }
        .category {
          display: flex;
          font-size: 1.5rem;
          &__name {
            min-width: 200px;
            font-family: efframedium;
          }
          img {
            width: 20px;
          }
          &__percentage {
            margin-left: 12px;
          }
        }
        .category-mobile {
          display: flex;
          font-size: 1.5rem;
          flex-direction: column;
          margin-bottom: 8px;
          text-align: center;
          &__name {
            min-width: 200px;
            font-family: efframedium;
          }
          img {
            width: 20px;
          }
          &__percentage {
            margin-left: 12px;
          }
        }
      }
    }
  }
  .rating-card-modal {
    margin: auto;
    background-image: url('../../assets/png/eco-bg.png');
    width: 80%;
    padding: 16px;
    color: rgba(0,0,0,.6);
    font-size: 1.5rem;
    @include mobile {
      width: 100%;
    }
    .white-bg {
      padding: 8px;
      background: white;
      border-radius: 8px;
    }
    .rating-wrapper {
      display: flex;
      justify-content: space-between;
      .share {
        display: flex;
        gap: 5px;
        color: rgba(0,0,0,.38);
        font-size: 1.2rem;
        img {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
    }
    .total {
      margin-top: 10px;
      color: rgba(0,0,0,.6);
      font-family: efframedium;
      @include mobile {
        text-align: center;
      }
    }
    .percent {
      margin-top: 20px;
      font-size: 1.4rem;
    }
    &__wrapper {
      display: flex;
      justify-content: center;
    }
    &__image {
      max-width: 30px;
    }
  }
  .rating-card {
    width: 48%;
    padding: 16px;
    margin-top: 8px;
    color: rgba(0,0,0,.6);
    font-size: 1.5rem;
    @include mobile {
      width: 100%;
    }
    .rating-wrapper {
      display: flex;
      justify-content: space-between;
      .share {
        display: flex;
        gap: 5px;
        color: rgba(0,0,0,.38);
        font-size: 1.2rem;
        img {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
    }
    .total {
      margin-top: 10px;
      color: rgba(0,0,0,.6);
      font-family: efframedium;
      @include mobile {
        text-align: center;
      }
    }
    .percent {
      margin-top: 20px;
      font-size: 1.4rem;
    }
    &__wrapper {
      display: flex;
      @include mobile {
        justify-content: center;
      }
    }
    &__image {
      max-width: 30px;
    }
  }
  @include mobile {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
}

</style>
