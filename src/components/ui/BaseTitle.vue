<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style scoped>
h2 {
  display: none;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  color: #ffffff;
}

@media (min-width: 1366px) {
  h2 {
    display: block;
  }
}
</style>