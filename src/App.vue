<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <Tabs />
    </main>
    <div class="bg-img"></div>
    <div class="bg-black-color"></div>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto", sans-serif;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.wrapper {
  position: relative;
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("./assets/img/main-bg-mobile.jpg") center center/cover
    no-repeat;
  z-index: -1;
}

.bg-black-color {
  display: none;
}

@media (min-width: 1366px) {
  .bg-img {
    height: 880px;
    background-image: url("./assets/img/main-bg-desktop.jpg");
  }
  .bg-black-color {
    position: absolute;
    top: 880px;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    background-color: #16151f;
    z-index: -1;
  }
}
</style>




