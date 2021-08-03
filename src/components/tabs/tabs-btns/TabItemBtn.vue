<template>
  <li class="tab-item">
    <router-link :to="{ name: tab.nameUrl }" tag="button" class="tab-item__btn">
      {{ tab.title }}
      <div class="tab-item__btn-border">
        <div></div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    tab: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-item {
  background-color: #181723;
  list-style: none;
  text-align: center;
  &__btn {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    font-weight: bold;
    font-size: 14px;
    line-height: 48px;
    color: #9794c6;
    text-decoration: none;
  }
  &:hover {
    color: #fff;
    background-color: transparent;
  }
  &__btn-border {
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
  }

  .tab-item__btn:hover,
  .tab-item__btn.active {
    color: #fff;
    background-color: transparent;
  }

  .tab-item__btn:hover .tab-item__btn-border,
  .tab-item__btn.active .tab-item__btn-border {
    padding: 0 15px;
    background: linear-gradient(
      90deg,
      rgba(245, 44, 191, 0.25) 0%,
      rgba(255, 124, 70, 0.25) 100%
    );
    div {
      height: 100%;
      background: linear-gradient(90deg, #f52cbf 0%, #ff7c46 100%);
    }
  }
}
@media (min-width: 1366px) {
  .tab-item {
    border-radius: 10px 10px 0px 0px;
    &:hover {
      background-color: #323145;
    }
  }
}
</style>

