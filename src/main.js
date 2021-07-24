import { createApp } from "vue";
import App from "./App.vue";
import BaseTitle from "./components/ui/BaseTitle.vue";
import CardItem from "./components/ui/CardItem.vue";

const app = createApp(App);

app.component("BaseTitle", BaseTitle);
app.component("CardItem", CardItem);

app.mount("#app");
