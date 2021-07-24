<template>
  <section class="nazer-coins">
    <BaseTitle>Монеты Незера</BaseTitle>
    <ul class="cards-list">
      <CardItem
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :quantity="card.quantity"
        :price="card.price"
        :url="card.url"
        :bonus="card.bonus"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x500",
          price: 10,
          url: {
            mobile: require("../../../../assets/img/coins-5000.png"),
            desktop: require("../../../../assets/img/coins-5000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x100",
          price: 2,
          url: {
            mobile: require("../../../../assets/img/coins-1000.png"),
            desktop: require("../../../../assets/img/coins-1000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1500",
          price: 5,
          url: {
            mobile: require("../../../../assets/img/coins-5000.png"),
            desktop: require("../../../../assets/img/coins-5000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1000",
          price: 4,
          url: {
            mobile: require("../../../../assets/img/coins-10000.png"),
            desktop: require("../../../../assets/img/coins-10000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1500",
          price: 2,
          url: {
            mobile: require("../../../../assets/img/coins-in-big-bag.png"),
            desktop: require("../../../../assets/img/coins-in-big-bag.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x100",
          price: 3,
          url: {
            mobile: require("../../../../assets/img/coins-in-chest.png"),
            desktop: require("../../../../assets/img/coins-in-chest.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1500",
          price: 7,
          url: {
            mobile: require("../../../../assets/img/coins-more-10000.png"),
            desktop: require("../../../../assets/img/coins-more-10000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1000",
          price: 5,
          url: {
            mobile: require("../../../../assets/img/coins-5000.png"),
            desktop: require("../../../../assets/img/coins-5000.png"),
          },
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x100",
          price: 10,
          url: {
            mobile: require("../../../../assets/img/coins-1000.png"),
            desktop: require("../../../../assets/img/coins-1000.png"),
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.nazer-coins {
  background-color: #181723;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.4);
  border-radius: 0 0 10px 10px;
  margin: 0 auto;
  width: 280px;
  padding: 18px 11px;
}
.cards-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

@media (min-width: 1366px) {
  .nazer-coins {
    width: 980px;
    padding: 24px 26px;
    border-radius: 0 0 10px 10px;
  }
  .cards-list {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 24px;
  }
}
</style>

