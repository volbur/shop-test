<template>
  <ul class="tabs-list">
    <TabItem
      v-for="tab in tabs"
      :key="tab.title"
      :title="tab.title"
      :to="tab.to"
    />
  </ul>
</template>

<script>
import TabItem from "./TabItemBtn.vue";
export default {
  components: {
    TabItem,
  },
  data() {
    return {
      tabs: [
        {
          title: "Монстр боксы",
          to: "/box-monster",
        },
        {
          title: "Банк",
          to: "/bank",
        },
        {
          title: "Наборы",
          to: "/sets",
        },
        {
          title: "Спец предложения",
          to: "/special-offers",
        },
        {
          title: "Промо код",
          to: "/promo-codes",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs-list {
  display: grid;
  grid-template-columns: repeat(5, auto);
  height: 48px;
  margin-bottom: 10px;
}

@media (min-width: 1366px) {
  .tabs-list {
    width: 980px;
    margin: 0 auto;
    padding-top: 10px;
    column-gap: 10px;
  }
}
</style>

