<template>
  <li class="card-item">
    <picture>
      <source media="(min-width: 1366px" :srcset="url.desktop" />
      <img class="card-item__img" :src="url.mobile" alt="one crystal" />
    </picture>
    <div class="card-item__quantity">{{ quantity }}</div>
    <h3 class="card-item__title">{{ title }}</h3>
    <button class="card-item__button button">
      <div class="button__title">Купить</div>
      <div class="button__price-wrapper">
        <div class="button__icon"></div>
        <div class="button__price">{{ price }}</div>
      </div>
    </button>
    <div class="ribbons">
      <div class="ribbons__price">x500</div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["title", "quantity", "price", "url"],
};
</script>

<style lang="scss">
.card-item {
  position: relative;
  padding-top: 20px;
  border-radius: 11px;
  // background: url("../../assets/img/bg/bg-card.png") center center/cover
  //   no-repeat;
  background-color: rgb(90, 88, 88);
  list-style: none;
  overflow: hidden;
  &__img {
    display: block;
    margin: 0 auto;
  }
  &__quantity {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    color: #fff;
  }
  &__title {
    text-align: center;
    font-size: 11px;
    line-height: 18px;
    color: #fff;
  }

  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 7px auto 0;
    padding: 0 10px;
    width: 98px;
    height: 27px;
    border: none;
    border-radius: 146px;
    font-weight: bold;
    font-size: 11px;
    color: #ffffff;
    background: linear-gradient(90deg, #682fbd 0%, #cb4cbc 100%);
    cursor: pointer;
    &__price-wrapper {
      display: flex;
      align-items: center;
    }
    &__icon {
      width: 17px;
      height: 17px;
      background: url("../../assets/img/icons/icon-crystals-mobile.png") center
        center/cover no-repeat;
    }
  }

  .ribbons {
    position: absolute;
    top: 10px;
    left: -30px;
    transform: rotate(-45deg);
    width: 100px;
    height: 24px;
    background: linear-gradient(53.76deg, #ff4910 10.28%, #ff4910 87.14%);
    &__price {
      position: relative;
      padding-left: 14px;
      font-weight: bold;
      font-size: 11px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
      &::before {
        position: absolute;
        top: 4px;
        left: 30px;
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url("../../assets/img/icons/icon-one-coin-mobile.png")
          center center/cover no-repeat;
      }
    }
  }

  @media (min-width: 1366px) {
    .card-item {
      &__quantity {
        font-size: 30px;
        line-height: 48px;
      }
      &__title {
        font-size: 14px;
        line-height: 22px;
      }
    }
    .button {
      margin: 24px auto 0;
      padding: 0 30px;
      width: 154px;
      height: 48px;
      font-size: 14px;
      line-height: 16px;
      //   position: relative;
      //   &::after {
      //     position: absolute;
      //     top: 0;
      //     left: 0;
      //     content: "";
      //     display: inline-block;
      //     width: 100%;
      //     height: 100%;
      //     padding: 3px;
      //     background: linear-gradient(90deg, #242333 0%, #3c3b53 100%);
      //     border-radius: 146px;
      //   }
      &__icon {
        margin-right: 4px;
        width: 8px;
        height: 14px;
        background-image: url("../../assets/img/icons/$.png");
      }
    }
    .ribbons {
      width: 120px;
      height: 30px;
      &__price {
        font-size: 13px;
        line-height: 30px;
        &::before {
          top: 7px;
          left: 34px;
          width: 17px;
          height: 17px;
          background-image: url("../../assets/img/icons/icon-one-coin-desktop.png");
        }
      }
    }
  }
}
</style>

/*FIXME:
*Карточки на грідах мають бути однієї висоти
*/

/*TODO:
*Кнопка купити на десктопі має гадієнтний бордер
*/