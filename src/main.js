import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { createHead } from "@vueuse/head";

const pinia = createPinia();
const app = createApp(App);
const head = createHead();

app.use(router).use(pinia).use(head).mount("#app");
