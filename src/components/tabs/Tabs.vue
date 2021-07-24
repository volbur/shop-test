<template>
  <section>
    <TabsList />
    <BoxMonster />
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