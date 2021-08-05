<template>
  <section class="tabs">
    <TabsList />
    <div class="wrapper">
      <div class="container">
        <router-view></router-view>
      </div>
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
  position: relative;
  margin: 0 auto;
  width: 280px;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: inline-block;
    width: 270px;
    height: 18px;
    background-color: #181723;
    border-radius: 10px 10px 0 0;
    z-index: 1;
  }
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    display: inline-block;
    width: 270px;
    height: 132px;
    background: linear-gradient(180deg, rgba(38, 36, 53, 0) 0%, #262435 100%);
    border-radius: 0 0 0 10px;
    z-index: 1;
  }
}

.container {
  height: calc(100vh - 122px);
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
    &::after {
      width: 690px;
    }
    &::before {
      width: 690px;
    }
  }
}

@media (min-width: 1366px) {
  .tabs {
    padding: 90px 0 24px;
  }
  .wrapper {
    width: 980px;
    &::after {
      display: none;
    }
    &::before {
      display: none;
    }
  }
  .container {
    height: 100%;
    overflow-y: visible;
  }
}
</style>

