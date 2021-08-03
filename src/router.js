import { createRouter, createWebHistory } from "vue-router";

import BoxMonster from "./components/tabs/tab-content/box-monster/BoxMonster.vue";
import Bank from "./components/tabs/tab-content/bank/Bank.vue";
import PromoCodes from "./components/tabs/tab-content/promo-codes/PromoCodes.vue";
import Sets from "./components/tabs/tab-content/sets/Sets.vue";
import SpecialOffers from "./components/tabs/tab-content/special-offers/SpecialOffers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/box-monster" },
    { name: "BoxMonster", path: "/box-monster", component: BoxMonster },
    { name: "Bank", path: "/bank", component: Bank },
    { name: "PromoCodes", path: "/promo-codes", component: PromoCodes },
    { name: "Sets", path: "/sets", component: Sets },
    { name: "SpecialOffers", path: "/special-offers", component: SpecialOffers }
  ],
  linkActiveClass: "active"
});

export default router;
