<template>
  <ChoosenItems />
  <FindBlock />
  <Transition name="fade">
    <Loader v-if="isLoader" />
  </Transition>
  <Transition name="fade">
    <ErrorStub v-if="isError" />
  </Transition>
</template>

<script setup lang="ts">
import ChoosenItems from "@/components/ChoosenItems.vue";
import FindBlock from "@/components/FindBlock.vue";
import ErrorStub from "@/components/stateComponents/ErrorStub.vue";
import Loader from "@/components/stateComponents/Loader.vue";
import { useCommonStore } from "@/store";
import { storeToRefs } from "pinia";

const { isLoader, isError } = storeToRefs(useCommonStore());
</script>

<style lang="scss">
#app {
  padding: getRem(10);
  @include FlexColumnNoneCenter;
  gap: getRem(10);
}

body {
  max-width: getRem(800);
  @include FlexColumnNoneCenter;
  margin: 0 auto;
}

/* Ширина скроллбара */
::-webkit-scrollbar {
  width: getRem(12); /* ширина вертикального скроллбара */
  height: getRem(12); /* высота горизонтального скроллбара */
}

/* Цвет фона скроллбара */
::-webkit-scrollbar-track {
  background: $colorSeashell;
  border-radius: getRem(10); /* скругление */
}

/* Цвет ползунка скроллбара */
::-webkit-scrollbar-thumb {
  background-color: $colorElectricViolet; /* цвет ползунка */
  border-radius: getRem(10); /* скругление ползунка */
  border: getRem(3) solid $colorSeashell; /* добавляет отступ */
}

::-webkit-scrollbar-thumb:hover {
  background-color: $colorElectricViolet;
}
</style>
