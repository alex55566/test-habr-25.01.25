import { IData } from "@/interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCommonStore = defineStore("common", () => {
  const dataItems = ref<IData[]>([]);
  const currenItems = ref<IData[]>([]);
  const isLoader = ref(false);
  const isError = ref(false);
  const inputText = ref("");
  const inputNumber = ref(1);
  const minLengthText = ref(3);

  return {
    dataItems,
    currenItems,
    isLoader,
    isError,
    inputText,
    minLengthText,
    inputNumber,
  };
});
