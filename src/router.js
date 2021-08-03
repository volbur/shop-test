import { createRouter, createWebHistory } from "vue-router";

import BoxMonster from "./components/tabs/tab-content/box-monster/BoxMonster.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/box-monster" },
    { path: "/box-monster", component: BoxMonster }
  ],
  linkActiveClass: "active"
});

export default router;
