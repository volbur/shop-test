<template>
  <TheHeader />
  <main class="main">
    <div class="container">
      <TabsList />
      <NezerCrystals />
      <NezerCoins />
    </div>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TabsList from "./components/tabs/TabsList.vue";
import NezerCrystals from "./components/NezerCrystals.vue";
import NezerCoins from "./components/NezerCoins.vue";

export default {
  components: {
    TheHeader,
    TabsList,
    NezerCrystals,
    NezerCoins,
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

.main {
  width: 100%;
  height: 100%;
  background: url("./assets/img/main-bg-mobile.jpg") center center/cover
    no-repeat;
}

@media (min-width: 1366px) {
  .main {
    padding-top: 90px;
    background-image: url("./assets/img/main-bg-desktop.jpg");
  }
  .container {
    margin: 0 auto;
    width: 980px;
  }
}
</style>

/*TODO:
*Перемістити зображення в папку img
*/
