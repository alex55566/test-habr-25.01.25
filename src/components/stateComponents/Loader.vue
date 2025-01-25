<template>
  <div class="spinner"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: getRem(56);
  height: getRem(56);
  border-radius: 50%;
  border: getRem(9) solid;
  border-color: $colorSnuff;
  border-right-color: $colorElectricViolet;
  animation: spinner-d3wgkg 1s infinite linear;
}

@keyframes spinner-d3wgkg {
  to {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}
</style>
