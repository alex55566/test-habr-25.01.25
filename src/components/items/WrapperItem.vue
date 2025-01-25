<template>
  <li
    role="option"
    tabindex="0"
    @click="handleClick"
    @keydown.enter.prevent="handleClick"
    @keydown.space.prevent="handleClick"
    @keydown.arrow-down.prevent="focusNextItem"
    @keydown.arrow-up.prevent="focusPreviousItem"
    ref="itemRef"
    class="item"
  >
    <img
      role="img"
      class="item-img"
      :alt="getImgAlt"
      :src="getImg(item.avatar)"
    />
    <div class="item-info">
      <div class="item-name" role="heading" aria-level="3">
        {{ item.name ? item.name : getAliasName(item.alias) }}
      </div>
      <div class="item-type">
        {{
          item.type === EType.COMPANY ? "компания" : getAliasName(item.alias)
        }}
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { EType } from "@/enum";
import { getAliasName } from "@/helpers";
import type { IData } from "@/interfaces";
import { useCommonStore } from "@/store";
import { nanoid } from "nanoid";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

const itemRef = ref<HTMLElement | null>(null);
const { currenItems, dataItems, inputText } = storeToRefs(useCommonStore());

interface Props {
  item: IData;
}
const props = defineProps<Props>();

const defaultAvatar = new URL("@/assets/image/avatar.svg", import.meta.url)
  .href;

const getImg = (avatar: string | null) => {
  return avatar ? `https:${avatar}` : defaultAvatar;
};

const getImgAlt = computed(() =>
  props.item.name
    ? `Аватар пользователя ${props.item.name}`
    : "Аватар пользователя"
);

const handleClick = () => {
  props.item.id = nanoid();
  currenItems.value.push(props.item);
  dataItems.value = [];
  inputText.value = "";
};

const focusNextItem = () => {
  const currentItem = itemRef.value;
  if (currentItem) {
    const nextItem = currentItem.nextElementSibling as HTMLElement | null;
    nextItem?.focus();
  }
};

const focusPreviousItem = () => {
  const currentItem = itemRef.value;
  if (currentItem) {
    const previousItem =
      currentItem.previousElementSibling as HTMLElement | null;
    previousItem?.focus();
  }
};
</script>
<style lang="scss" scoped>
.item {
  @include FlexRowStartCenter;
  gap: getRem(5);
  font-size: getRem(14);
  &-info {
    @include FlexColumn;
    gap: getRem(5);
  }
  &-name {
    font-weight: 700;
  }
  &-img {
    min-width: getRem(25);
    height: getRem(25);
    border-radius: 50%;
  }
}
</style>
