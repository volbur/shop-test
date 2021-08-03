<template>
  <section class="tabs">
    <TabsList />
    <div class="wrapper">
      <BoxMonster />
    </div>
  </section>
</template>

<script>
import TabsList from "./tabs-btns/TabsListBtns.vue";
import BoxMonster from "./tab-content/box-monster/BoxMonster.vue";

export default {
  components: {
    TabsList,
    BoxMonster,
  },
};
</script>

<style scoped lang="scss">
.tabs {
  padding-bottom: 24px;
}
.wrapper {
  margin: 0 auto;
  max-height: 507px;
  width: 280px;
  overflow: scroll;
  background-color: #181723;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

@media (min-width: 768px) {
  .wrapper {
    width: 700px;
  }
}

@media (min-width: 1366px) {
  .tabs {
    padding: 90px 0 24px;
  }
  .wrapper {
    width: 980px;
    max-height: unset;
    overflow: visible;
  }
}
</style>

