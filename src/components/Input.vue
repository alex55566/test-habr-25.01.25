<template>
  <div class="wrapper-outer">
    <span>{{ getText() }}</span>
    <div class="wrapper-inner">
      <input
        @input="handleInput"
        v-model="modelValue"
        min="1"
        :type="getType()"
        :placeholder="getPlaceholder()"
        class="input"
        :disabled="type === ETypeInput.TEXT && isAlredyChoosen"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import commonApi from "@/api";
import { ETypeInput } from "@/enum";
import { useCommonStore } from "@/store";
import { storeToRefs } from "pinia";
import { computed } from "vue";

interface Props {
  type: string;
}
const props = defineProps<Props>();

const { currenItems, inputText, inputNumber } = storeToRefs(useCommonStore());

const getText = () => {
  switch (props.type) {
    case ETypeInput.NUMBER:
      return "Выбор количества сущностей, выбираемых из списка (по умолчанию - 1)";
    case ETypeInput.TEXT:
      return "Пользователь или компания";
  }
};

const modelValue = computed({
  get() {
    return props.type === ETypeInput.NUMBER
      ? inputNumber.value
      : inputText.value;
  },
  set(value) {
    if (props.type === ETypeInput.NUMBER) {
      inputNumber.value = value as number;
    } else if (props.type === ETypeInput.TEXT) {
      inputText.value = value as string;
    }
  },
});

const getType = () => {
  return props.type === ETypeInput.NUMBER ? "number" : "text";
};

const getPlaceholder = () => {
  if (props.type === ETypeInput.NUMBER) {
    return "Введите количество (по умолчанию - 1)";
  } else if (props.type === ETypeInput.TEXT && isAlredyChoosen.value) {
    return "Сущности уже выбраны";
  } else {
    return "Введите название";
  }
};

const handleInput = () => {
  if (isAlredyChoosen.value || props.type === ETypeInput.NUMBER) return;
  commonApi.getData(inputText.value);
};

const isAlredyChoosen = computed(
  () => currenItems.value.length === inputNumber.value
);
</script>

<style lang="scss" scoped>
.wrapper-outer {
  @include FlexColumn;
  gap: getRem(15);
  font-size: getRem(12);
  font-weight: 700;
}
.wrapper-inner {
  position: relative;
}
.input {
  outline: 0;
  border: unset;
  width: getRem(450);
  padding: getRem(5);
  border-radius: $borderRadius;
  border: getRem(1) solid $colorElectricViolet;
  font-size: getRem(12);
  transition: all 0.5s ease;
  &::placeholder {
    color: $colorBlack;
    transition: all 0.5s ease;
  }
}

.no-active {
  &::placeholder {
    color: $colorWhite;
  }
}

.input {
  &:focus,
  &:hover {
    border: getRem(1) solid rgba($colorElectricViolet, 0.5);
  }
}
</style>
