<template>
  <div class="current-item">
    {{ getAliasName(item?.alias!) }}
    <button class="btn" @click="handleClick">
      <img src="@/assets/image/close.svg" alt="close" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { getAliasName } from "@/helpers";
import { IData } from "@/interfaces";
import { useCommonStore } from "@/store";
import { storeToRefs } from "pinia";

const { currenItems } = storeToRefs(useCommonStore());

interface Props {
  item: IData;
}
const props = defineProps<Props>();

const handleClick = () => {
  const currentItem = currenItems.value.find(
    (item) => item.id === props.item.id
  );
  currenItems.value = currenItems.value.filter(
    (item) => item.id !== currentItem?.id
  );
};
</script>

<style lang="scss" scoped>
.current-item {
  @include FlexRowStartCenter;
  gap: getRem(5);
  padding: getRem(5);
  font-size: getRem(10);
  background-color: rgba($colorElectricViolet, 0.1);
  border: getRem(1) solid $colorElectricViolet;
  border-radius: $borderRadius;
  button {
    width: getRem(15);
    height: getRem(15);
    background: unset;
    img {
      width: 100%;
      height: auto;
    }
  }
  &:hover {
    border: getRem(1) solid rgba($colorElectricViolet, 0.5);
  }
}
</style>
