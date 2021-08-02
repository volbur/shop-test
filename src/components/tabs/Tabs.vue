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
  position: relative;
  margin: 0 auto;
  max-height: 507px;
  width: 280px;
  overflow: scroll;
  background-color: #181723;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  &::after {
    position: fixed;
    bottom: 24px;
    width: 280px;
    max-width: inherit;
    content: "";
    display: inline-block;
    height: 132px;
    background: linear-gradient(0deg, #262435 0%, rgba(38, 36, 53, 0) 100%);
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
    &::after {
      display: none;
    }
  }
}

/* @media screen and (orientation: landscape) {
  .wrapper {
    overflow: scroll;
  }
} */
</style>

/*FIXME:
*потрібно реалізувати що при ширені яка в планшеті перевернули екран(orientation: landscape) блок wrapper був - overflow: scroll; в мене не виходить задати таке правило.
*блок wrapper в мене має висоту, можливо потрібно змінити, щоб підстроювався під висоту пристрою
*в блокові wrapper створив псевдо елемент ::after i не виходить задати йому ширину 100% - вилазить за родітєля.
*/