<template>
  <li class="purse-item">
    <button class="purse-item__button">
      <picture class="purse-item__img">
        <source media="(min-width: 1366px" :srcset="url.desktop" />
        <img :src="url.mobile" :alt="alt" />
      </picture>
      <span class="purse-item__price">{{ total }}</span>
      <h3 class="purse-item__name">{{ title }}</h3>
      <div class="square"></div>
    </button>
  </li>
</template>

<script>
export default {
  props: ["total", "url", "alt", "title"],
  // props: {
  //   total: {
  //     type: String,
  //     required: false,
  //     default: false,
  //   },
  //   url: {
  //     type: Object,
  //     required: false,
  //     default: false,
  //   },
  //   alt: {
  //     type: String,
  //     required: false,
  //     default: false,
  //   },
  // },
};
</script>

<style lang="scss">
.purse-item {
  list-style: none;
  &__button {
    position: relative;
    display: block;
    text-align: center;
    width: 90px;
    height: 20px;
    border-radius: 100px 0 0 100px;
    background-color: #0d0b0f;
    font-size: 13px;
    line-height: 16px;
    color: #fff;
    text-decoration: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    .square {
      position: absolute;
      top: 0px;
      right: -20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border: 1px solid #21cc14;
      border-radius: 3px;
      background: linear-gradient(0deg, #30c325 9.09%, #2c812a 100%);
      &::after {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url("../../assets/img/icon-plus.png") center
          center/cover no-repeat;
      }
    }
  }
  &__img {
    position: absolute;
    top: -6px;
    left: -10px;
  }
  &__price {
    font-size: 13px;
    line-height: 20px;
  }
  &__name {
    display: none;
  }
}

@media (min-width: 1366px) {
  .purse-item {
    &__button {
      width: 180px;
      height: 44px;
      border-radius: 100px;
    }
    &__img {
      top: -16px;
      left: -30px;
    }
    &__price {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
    }
    &__name {
      display: block;
      font-size: 10px;
      line-height: 12px;
      color: #b9b7ea;
    }
    .square {
      width: 25px;
      height: 25px;
      top: 8px;
      right: 20px;
    }
  }
} ;
</style>

/*FIXME
*не виходить прописати динамічний шдях для картинки. Почну шукати відповідь тут: https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working?noredirect=1&lq=1
*зробити настройку для props. Чомусь пише помилки
*/