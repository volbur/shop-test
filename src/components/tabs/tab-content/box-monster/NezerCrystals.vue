<template>
  <section class="nazer-crystals">
    <BaseTitle>Кристаллы Незера</BaseTitle>
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
            mobile: require("../../../../assets/img/crystals-and-bag.png"),
            desktop: require("../../../../assets/img/crystals-and-bag.png"),
          },
          bonus: "x500",
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x100",
          price: 2,
          url: {
            mobile: require("../../../../assets/img/crystals-and-big-bag.png"),
            desktop: require("../../../../assets/img/crystals-and-big-bag.png"),
          },
          bonus: "x700",
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1500",
          price: 5,
          url: {
            mobile: require("../../../../assets/img/crystals-and-big-bag-box-chest-bag.png"),
            desktop: require("../../../../assets/img/crystals-and-big-bag-box-chest-bag.png"),
          },
          bonus: "x500",
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1000",
          price: 4,
          url: {
            mobile: require("../../../../assets/img/crystals-and-box.png"),
            desktop: require("../../../../assets/img/crystals-and-box.png"),
          },
          bonus: "x300",
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1500",
          price: 2,
          url: {
            mobile: require("../../../../assets/img/crystals-and-chest.png"),
            desktop: require("../../../../assets/img/crystals-and-chest.png"),
          },
          bonus: "x500",
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x100",
          price: 3,
          url: {
            mobile: require("../../../../assets/img/crystals-and-bag.png"),
            desktop: require("../../../../assets/img/crystals-and-bag.png"),
          },
          bonus: "x800",
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1500",
          price: 7,
          url: {
            mobile: require("../../../../assets/img/crystals-and-big-bag.png"),
            desktop: require("../../../../assets/img/crystals-and-big-bag.png"),
          },
          bonus: "x600",
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x1000",
          price: 5,
          url: {
            mobile: require("../../../../assets/img/crystals-and-big-bag-box-chest-bag.png"),
            desktop: require("../../../../assets/img/crystals-and-big-bag-box-chest-bag.png"),
          },
          bonus: "x200",
        },
        {
          id: String(Date.now()),
          title: "Handful of Coins",
          quantity: "x100",
          price: 10,
          url: {
            mobile: require("../../../../assets/img/crystals-and-box.png"),
            desktop: require("../../../../assets/img/crystals-and-box.png"),
          },
          bonus: "x900",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.nazer-crystals {
  padding: 18px 11px;
}
.cards-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

@media (min-width: 768px) {
  .cards-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
}

@media (min-width: 1366px) {
  .nazer-crystals {
    padding: 24px 26px;
  }
  .cards-list {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 24px;
  }
}
</style>

/*FIXME: 
*медіа правило з 768px не виходить перестрщїти колонки для грідів. Інші властивості прописуються