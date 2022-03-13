import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import "element-plus/theme-chalk/display.css";

const i18n = createI18n({
  legacy: false,
  fallbackLocale: "en",
  locale: "en",
});

const app = createApp(App);
console.log(import.meta.env);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(ElementPlus);
app.mount("#app");
