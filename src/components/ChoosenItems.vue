<template>
  <div class="choosen-items">
    <CurrentItem
      v-for="(item, index) in currenItems"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import CurrentItem from "@/components/items/CurrentItem.vue";
import { useCommonStore } from "@/store";
import { storeToRefs } from "pinia";

const { currenItems } = storeToRefs(useCommonStore());
</script>

<style lang="scss" scoped>
.choosen-items {
  height: getRem(100);
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-content: start;
  gap: getRem(5);
}
</style>
