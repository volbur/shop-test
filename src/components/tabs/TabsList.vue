<template>
  <ul class="tabs-list">
    <TabItem v-for="tab in tabs" :key="tab">{{ tab }}</TabItem>
  </ul>
</template>

<script>
import TabItem from "./TabItem.vue";
export default {
  components: {
    TabItem,
  },
  data() {
    return {
      tabs: ["Монстр боксы", "Банк", "Наборы", "Спец предложения", "Промо код"],
    };
  },
};
</script>

<style lang="scss">
.tabs-list {
  display: grid;
  grid-template-columns: repeat(5, auto);
  height: 48px;
}

@media (min-width: 1366px) {
  .tabs-list {
    padding-top: 10px;
    column-gap: 10px;
  }
}
</style>

