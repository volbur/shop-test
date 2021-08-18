<template>
  <section class="nazer-coins">
    <BaseTitle>Банк Монеты</BaseTitle>
    <CardsList>
      <CardItem v-for="card in cards" :key="card.id" :card="card" />
    </CardsList>
  </section>
</template>

<script>
import CardsList from "../CardsList.vue";
import mock from "@/mock/bank/bankcoins.js";

export default {
  components: {
    CardsList,
  },
  data() {
    return {
      cards: mock,
    };
  },
};
</script>

<style lang="scss" scoped>
.nazer-coins {
  padding: 18px 11px;
  border-top: 1px solid #9794c6;
}

@media (min-width: 768px) {
  .nazer-coins {
    padding: 24px 26px;
  }
}
</style>

