import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";
import { i18n } from "./utils/i18n";
import App from "./App.vue";
import router from "./router";

import "@/assets/sass/styles.sass";

const app = createApp(App);
app.use(createBootstrap()).use(i18n);

app.use(router);

app.mount("#app");
