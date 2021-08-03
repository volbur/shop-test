<template>
  <header class="main-header">
    <a class="link-left" href="#"
      ><img
        class="icon-row"
        src="../../assets/img/icon-row.png"
        alt="icon row"
      />
      <span>BACK</span>
    </a>
    <Purse />
    <a class="link-right" href="#"
      ><img
        class="icon-home"
        src="../../assets/img/icon-home.png"
        alt="icon home"
      />
      <span>HOME</span>
    </a>
  </header>
</template>

<script>
import Purse from "../purse/PurseList.vue";
export default {
  components: {
    Purse,
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 5px;
  width: 100%;
  height: 50px;
  background-color: rgb(36, 35, 50);
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    span {
      display: none;
    }
  }
}

@media (min-width: 1366px) {
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 40px;
    height: 90px;
    background: rgba(36, 35, 50, 0.7);
    z-index: 1000;
    a {
      padding: 13px 24px;
      span {
        display: block;
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
  }
  .link-left {
    background: url("../../assets/img/border-left.svg") center/contain no-repeat;
  }
  .link-right {
    background: url("../../assets/img/border-right.svg") center/contain
      no-repeat;
  }
}
</style>
