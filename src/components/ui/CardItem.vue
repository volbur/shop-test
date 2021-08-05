<template>
  <li class="card-item">
    <div class="card-item__img">
      <picture>
        <source media="(min-width: 768px" :srcset="card.url.desktop" />
        <img :src="card.url.mobile" alt="one crystal" />
      </picture>
    </div>
    <div class="card-item__quantity">{{ card.quantity }}</div>
    <h3 class="card-item__title">{{ card.title }}</h3>
    <button class="card-item__button button">
      <div class="button__wrapper">
        <div class="button__title">Купить</div>
        <div class="button__price-wrapper">
          <div class="button__icon">
            <picture>
              <source media="(min-width: 1366px" srcset="@/assets/img/$.svg" />
              <img
                src="@/assets/img/icon-crystals-mobile.png"
                alt="icon currency"
              />
            </picture>
          </div>
          <div class="button__price">{{ card.price }}</div>
        </div>
      </div>
    </button>
    <div class="ribbons" :class="{ hidden: !card.bonus }">
      <div class="ribbons__price">{{ card.bonus }}</div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
.card-item {
  position: relative;
  height: 170px;
  padding-top: 20px;
  border-radius: 23px;
  background: url("../../assets/img/bg-card.png") center center/cover no-repeat;
  list-style: none;
  overflow: hidden;
  text-align: center;
  &__img {
    margin: 0 auto;
    // width: 87px;
    // height: 48px;
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
}

.button {
  margin: 7px auto 0;
  width: 98px;
  height: 27px;
  border: none;
  outline: none;
  border-radius: 146px;
  cursor: pointer;
  background: linear-gradient(90deg, #682fbd 0%, #cb4cbc 100%);
  &__price-wrapper {
    display: flex;
    align-items: center;
  }
  &__icon {
    width: 17px;
    height: 17px;
  }
  &__price,
  &__title {
    font-weight: bold;
    font-size: 11px;
    color: #ffffff;
  }
}
.button__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
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
      background: url("../../assets/img/icon-one-coin-mobile.png") center
        center/cover no-repeat;
    }
  }
}

@media (min-width: 768px) {
  .card-item {
    height: 260px;
    &__quantity {
      font-size: 30px;
      line-height: 48px;
    }
    &__title {
      font-size: 14px;
      line-height: 22px;
    }
  }
}

@media (min-width: 1366px) {
  .card-item {
    height: 300px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    width: 154px;
    height: 47px;
    border: none;
    outline: none;
    border-radius: 146px;
    cursor: pointer;
    background: linear-gradient(90deg, #682fbd 0%, #cb4cbc 100%);
    &__price-wrapper {
      display: flex;
      align-items: center;
    }
    &__icon {
      width: 8px;
      height: 15px;
    }
    &__price,
    &__title {
      font-size: 14px;
    }
    &__price {
      margin-left: 4px;
    }
  }
  .button__wrapper {
    padding: 0 30px;
    width: 150px;
    height: 43px;
    background: linear-gradient(90deg, #242333 0%, #3c3b53 100%);
    border-radius: 146px;
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
        background-image: url("../../assets/img/icon-one-coin-desktop.png");
      }
    }
  }
}
</style>


