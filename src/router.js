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
    { path: "/box-monster", component: BoxMonster },
    { path: "/bank", component: Bank },
    { path: "/promo-codes", component: PromoCodes },
    { path: "/sets", component: Sets },
    { path: "/special-offers", component: SpecialOffers }
  ],
  linkActiveClass: "active"
});

export default router;
