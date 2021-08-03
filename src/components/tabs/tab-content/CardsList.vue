<template>
  <ul class="cards-list">
    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
.cards-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

@media (min-width: 768px) {
  .cards-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (min-width: 1366px) {
  .cards-list {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 24px;
  }
}
</style>