<template>
  <ul class="purse-list">
    <PurseItem
      v-for="purseItem in purseItems"
      :key="purseItem.url.mobile"
      :url="purseItem.url"
      :alt="purseItem.alt"
      :total="purseItem.total"
      :title="purseItem.title"
    />
  </ul>
</template>

<script>
import PurseItem from "./PurseItem.vue";

export default {
  data() {
    return {
      purseItems: [
        {
          title: "Coins",
          url: {
            mobile: require("../../assets/img/icon-coins-mobile.png"),
            desktop: require("../../assets/img/icon-coins-desktop.png"),
          },
          alt: "icon coins",
          total: "100,5k",
        },
        {
          title: "Crystals",
          url: {
            mobile: require("../../assets/img/icon-crystals-mobile.png"),
            desktop: require("../../assets/img/icon-crystals-desktop.png"),
          },
          alt: "icon crystals",
          total: "1 253",
        },
      ],
    };
  },
  components: {
    PurseItem,
  },
};
</script>

<style lang="scss" scoped>
.purse-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
}
@media (min-width: 1366px) {
  .purse-list {
    width: 455px;
  }
}
</style>