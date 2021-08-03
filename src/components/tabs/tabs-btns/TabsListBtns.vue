<template>
  <ul class="tabs-list">
    <TabItem
      v-for="tab in tabs"
      :key="tab"
      :title="tab"
      @click-tab="clickTab"
      :active="activeTab"
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
      activeTab: "Монстр боксы",
      tabs: ["Монстр боксы", "Банк", "Наборы", "Спец предложения", "Промо код"],
    };
  },
  methods: {
    clickTab(title) {
      this.activeTab = title;
    },
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

