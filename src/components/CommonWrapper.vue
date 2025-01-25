<template>
  <Transition name="fade">
    <ul v-if="dataItems.length > 0" class="items-wrapper">
      <WrapperItem
        v-for="(item, index) in dataItems"
        :key="index"
        :item="item"
      />
    </ul>
    <EmptyResult v-else-if="showEmptyResult" />
  </Transition>
</template>

<script setup lang="ts">
import WrapperItem from "@/components/items/WrapperItem.vue";
import EmptyResult from "@/components/stateComponents/EmptyResult.vue";
import { useCommonStore } from "@/store";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { dataItems, inputText, isLoader, minLengthText } = storeToRefs(
  useCommonStore()
);

const showEmptyResult = computed(() => {
  return (
    !dataItems.value.length &&
    inputText.value.length >= minLengthText.value &&
    !isLoader.value
  );
});
</script>

<style lang="scss">
.items-wrapper {
  width: getRem(450);
  max-height: getRem(144);
  overflow-y: auto;
  padding: getRem(5);
  border: getRem(1) solid $colorElectricViolet;
  border-radius: $borderRadius;
  background-color: rgba($colorElectricViolet, 0.1);
}
</style>
