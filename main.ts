import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";

import App from "./App.vue";
import router from "./router";

import "@/assets/sass/styles.sass";

const app = createApp(App);
app.use(createBootstrap());

app.use(router);

app.mount("#app");
