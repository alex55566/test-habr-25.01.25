import "normalize.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import "./style.css";

const pinia = createPinia();
createApp(App).use(pinia).mount("#app");
