<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-left">
        <img class="logo" src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg" alt="Blibli - online mall" @click="toMemberPage"/>
        <div class="category">
          <BliIconViewGrid class="grid" />
          <div class="text">
            Kategori
          </div>
          <BliIconChevronDown class="chevron" />
        </div>
      </div>
      <div class="header-mid">
        <div class="category-dropdown">
          <div class="category-dropdown-text">
            Semua kategori
          </div>
          <BliIconChevronDown />
        </div>
        <input :placeholder="placeholder" size="small" @keyup.enter="search" :value="key"/>
        <BliButton style="height: 32px;border-radius: 8px;align-self: center" color="secondary" @click="search">
          <BliIconSearch style="transform: scale(.75); cursor: pointer" />
        </BliButton>
      </div>
      <div class="header-right">
        <div class="icon-wrapper">
          <div class="icon-section">
            <BliIconBag />
            <BliIconChat />
            <BliIconNotification />
          </div>
          <div class="icon-right">
            <div class="wallet">
              <BliIconWallet />
              <div class="wallet-text">
                Rp1.000.000
              </div>
              <BliIconChevronDown class="chevron" />
            </div>
            <div class="profile">
              <BliIconProfile />
              <div class="profile-text">
                Hi, Exvo
              </div>
              <BliIconChevronDown class="chevron" />
            </div>
          </div>
        </div>
        <div class="address">
          <BliIconLocation />
          <div class="text">
            Kirim ke: Rumah
          </div>
          <BliIconChevronDown />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    placeholder () {
      return this.$route.name === 'PdpPage' ? this.$route.params.key : 'Kamu lagi cari apa?'
    },
    key () {
      return this.$route.key
    }
  },
  methods: {
    search () {
      if (this.$route.params.key === 'sedotan') {
        this.$router.push('/cari/daging')
        return
      }
      this.$router.push('/cari/sedotan')
    },
    toMemberPage () {
      this.$router.push('/member/profile')
    }
  }
}
</script>

<style lang="scss">
@import '~@blibli/blue-tokens/dist/blue-tokens.scss';
@import '~@blibli/blue-supports/dist/blue-supports.scss';
.header {
  display: flex;
  background: #0095da;
  position: sticky;
  z-index: 99;
  top: 0;
  min-width: 1200px;
  justify-content: space-between;
  &-wrapper {
    display: flex;
    margin: 12px auto 0;
  }
  &-left {
    width: 130px;
    .logo {
      max-width: 120px;
      cursor: pointer;
    }
    .category {
      display: flex;
      color: white;
      font-size: 14px;
      padding: 7px;
      background: #0787C3;
      border-radius: 8px 8px 0 0;
      justify-content: space-between;
      .grid, .chevron {
        transform: scale(.75);
      }
      .grid, .text, .chevron {
        align-self: center;
      }
    }
  }
  &-mid {
    width: 635px;
    display: flex;
    background: white;
    padding: 4px;
    align-self: self-start;
    border-radius: 8px;
    min-height: 40px;
    input {
      margin-left: 8px;
      border: none;
      width: 100%;
      align-self: center;
    }
    textarea:focus, input:focus{
      outline: none;
    }
    .category-dropdown {
      cursor: pointer;
      width: fit-content;
      padding-left: 4px;
      display: flex;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      padding-right: 8px;
      border-right: 1px solid #BDBDBD;
      &-text {
        align-self: center;
        white-space: nowrap;
      }
      svg {
        color: rgb(0, 149, 218);
        align-self: center;
      }
    }
  }
  &-right {
    .icon-wrapper {
      display: flex;
      color: white;
      .icon-section {
        display: flex;
        gap: 16px;
        color: white;
        height: 40px;
        svg {
          align-self: center;
          cursor: pointer;
        }
        padding: 0 16px;
        border-right: 1px solid white;
      }
      .icon-right {
        margin-left: 16px;
        display: flex;
        .wallet, .profile {
          display: flex;
          align-self: center;
          svg {
            align-self: center;
          }
          .chevron {
            transform: scale(.75);
          }
          &-text {
            align-self: center;
            font-family: efframedium;
            font-size: 16px;
            margin-left: 4px;
          }
        }
      }
    }
    .address {
      width: fit-content;
      margin-left: auto;
      display: flex;
      color: white;
      font-size: 14px;
      padding: 7px;
      background: #0787C3;
      border-radius: 8px 8px 0 0;
      margin-top: 3px;
      svg {
        transform: scale(.75);
        align-self: flex-end;
      }
      .text {
        align-self: center;
      }
    }
  }
}
</style>
