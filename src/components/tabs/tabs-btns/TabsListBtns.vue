<template>
  <ul class="tabs-list">
    <TabItem v-for="tab in tabs" :key="tab.nameUrl" :tab="tab" />
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
          nameUrl: "BoxMonster",
        },
        {
          title: "Банк",
          nameUrl: "Bank",
        },
        {
          title: "Наборы",
          nameUrl: "Sets",
        },
        {
          title: "Спец предложения",
          nameUrl: "SpecialOffers",
        },
        {
          title: "Промо код",
          nameUrl: "PromoCodes",
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

