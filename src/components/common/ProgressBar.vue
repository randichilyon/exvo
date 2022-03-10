<template>
  <div class="progress">
    <div class="progress-bar">
      <div :style="progressStyle" />
    </div>
    <div>
      green score {{`${current} / ${max}`}}
    </div>
  </div>
</template>

<script src="./js/progress-bar.js"></script>

<style lang="scss" scoped>
.progress {
  .progress-bar {
    width: 100%;
    background-color: #BDBDBD;
    height: 16px;
    border-radius: 16px;
    div {
      background-color: #8BC63F;
      height: 16px;
      border-radius: 16px;
    }
  }
}
</style>