<template>
  <div class="wrapper-main">
    <TheHeader />
    <main class="main red-bg">
      <Tabs />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import Tabs from "./components/tabs/Tabs.vue";

export default {
  components: {
    TheHeader,
    Tabs,
  },
};
</script>

<style lang="scss">
@import url("./main.scss");
@import url("./assets/scss/_variables.scss");

.wrapper-main {
  position: relative;
  background: url("./assets/img/main-bg-mobile.jpg") center/cover no-repeat;
  // background-color: $bg-color;
}

@media (min-width: 768px) {
  .wrapper-main {
    background-image: url("./assets/img/main-bg-desktop.jpg");
  }
}

@media (min-width: 1366px) {
  .wrapper-main {
    background: url("./assets/img/main-bg-desktop.jpg") top center/contain
        no-repeat,
      #16151f;
  }
}
</style>





