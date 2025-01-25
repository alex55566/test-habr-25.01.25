<template>
  <div class="popup-wrapper">
    <div class="popup-layout"></div>
    <div class="popup-content">
      <div class="text">
        Что-то пошло не так... <br />
        Попробуйте еще раз
      </div>
      <img src="@/assets/image/sad-smile.svg" alt="error" />
      <button @click="handleClick" class="btn btn-confirm">Ок</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  window.location.reload();
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  @include FlexRowCenterCenter;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 10;
}
.popup-layout {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center;
}
.popup-content {
  position: absolute;
  top: 50%;
  left: 50%;
  @include FlexColumnNoneCenter;
  gap: getRem(10);
  padding: getRem(15);
  font-size: getRem(16);
  transform: translate(-50%, -50%);
  background-color: rgba($colorElectricViolet, 0.3);
  border-radius: $borderRadius;
  color: $colorWhite;
  .text {
    text-align: center;
  }
  img {
    width: getRem(80);
    height: auto;
  }
  .btn-confirm {
    padding: getRem(5) getRem(10);
    border-radius: $borderRadius;
    background-color: $colorDenim;
    color: $colorWhite;
  }
}
</style>
