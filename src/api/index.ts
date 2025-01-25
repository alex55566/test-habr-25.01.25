import { useCommonStore } from "@/store";
import axios from "axios";
import debounce from "lodash.debounce";

const commonApi = {
  getData: debounce(async (text: string) => {
    const commonStore = useCommonStore();
    if (text.length >= commonStore.minLengthText) {
      try {
        commonStore.isLoader = true;
        const response = await axios.get(
          `https://habr.com/kek/v2/publication/suggest-mention?q=${text}`
        );
        commonStore.dataItems = response.data.data;
      } catch (error) {
        commonStore.dataItems = [];
        commonStore.isError = true;
      } finally {
        commonStore.isLoader = false;
      }
    } else {
      commonStore.dataItems = [];
    }
  }, 300),
};

export default commonApi;
