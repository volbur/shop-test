<template>
  <section class="tabs">
    <TabsList />
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import TabsList from "./tabs-btns/TabsListBtns.vue";

export default {
  components: {
    TabsList,
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
  overflow-y: auto;
  background-color: #181723;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    background-color: #4b4a52;
    &:hover {
      background: linear-gradient(to top, #682fbd 0%, #cb4cbc 100%);
    }
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    background-color: #f5f5f5;
  }
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

