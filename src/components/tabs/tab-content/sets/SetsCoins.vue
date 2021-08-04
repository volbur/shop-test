<template>
  <section class="nazer-coins">
    <BaseTitle>Наборы Монеты</BaseTitle>
    <CardsList>
      <CardItem
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :quantity="card.quantity"
        :price="card.price"
        :url="card.url"
        :bonus="card.bonus"
      />
    </CardsList>
  </section>
</template>

<script>
import CardsList from "../CardsList.vue";
export default {
  components: {
    CardsList,
  },
  data() {
    return {
      cards: [
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x500",
          price: 10,
          url: {
            mobile: require("@/assets/img/coins-5000.png"),
            desktop: require("@/assets/img/coins-5000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x100",
          price: 2,
          url: {
            mobile: require("@/assets/img/coins-1000.png"),
            desktop: require("@/assets/img/coins-1000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1500",
          price: 5,
          url: {
            mobile: require("@/assets/img/coins-5000.png"),
            desktop: require("@/assets/img/coins-5000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1000",
          price: 4,
          url: {
            mobile: require("@/assets/img/coins-10000.png"),
            desktop: require("@/assets/img/coins-10000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1500",
          price: 2,
          url: {
            mobile: require("@/assets/img/coins-in-big-bag.png"),
            desktop: require("@/assets/img/coins-in-big-bag.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x100",
          price: 3,
          url: {
            mobile: require("@/assets/img/coins-in-chest.png"),
            desktop: require("@/assets/img/coins-in-chest.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1500",
          price: 7,
          url: {
            mobile: require("@/assets/img/coins-more-10000.png"),
            desktop: require("@/assets/img/coins-more-10000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1000",
          price: 5,
          url: {
            mobile: require("@/assets/img/coins-5000.png"),
            desktop: require("@/assets/img/coins-5000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x100",
          price: 10,
          url: {
            mobile: require("@/assets/img/coins-1000.png"),
            desktop: require("@/assets/img/coins-1000.png"),
          },
        },
      ],
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

