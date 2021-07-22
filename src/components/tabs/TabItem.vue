<template>
  <li class="tab-item">
    <slot></slot>
  </li>
</template>

<style lang="scss">
.tab-item {
  position: relative;
  height: 100%;
  list-style: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
  color: #9794c6;
  cursor: pointer;
  background-color: #181723;
  border-bottom: 3px solid transparent;
  // &::after {
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   content: "";
  //   display: none;
  //   width: 100%;
  //   height: 3px;
  //   background: linear-gradient(90deg, #f52cbf 0%, #ff7c46 100%);
  // }
  &:hover {
    color: #fff;
    background-color: transparent;
    border-bottom: 3px solid #ff7c46;
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