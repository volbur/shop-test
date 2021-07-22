import { createApp } from "vue";
import App from "./App.vue";
import BaseTitle from "./components/ui/BaseTitle.vue";

const app = createApp(App);

app.component("BaseTitle", BaseTitle);

app.mount("#app");
