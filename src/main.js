import { createApp } from "vue";
import App from "./App.vue";
import BaseTitle from "./components/ui/BaseTitle.vue";
import CardItem from "./components/ui/CardItem.vue";
import router from "./router.js";

const app = createApp(App);

app.use(router);

app.component("BaseTitle", BaseTitle);
app.component("CardItem", CardItem);

app.mount("#app");
