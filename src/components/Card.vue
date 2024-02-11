<template>
  <div class="card__cards">
    <span v-if="item.new" class="card__new">New</span>
    <img class="card__image" :src="item.image" :alt="item.name">
    <span class="card__name">{{ item.name }}</span>
    <div class="card__price-wrapper">
      <span class="card__price">{{ item.price }}</span>
      <button class="card__button-price"><img src="../assets/icons/Buy.svg" alt="buy" /></button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.card {

  &__cards {
    display: flex;
    flex-direction: column;
    width: 332px;
    height: 462px;
    border: 1px solid $border-cards;
    border-radius: 10px;
    position: relative;

    &:hover {
      transition: 0.3s;
      cursor: pointer;
      box-shadow: 0 0 10px $box-shadow;

      .card__new {
        transition: 0.3s;
        box-shadow: 0 0 10px #00000080;
        background-color: rgba(93, 255, 174, 1);
      }
    }
  }

  &__image {
    padding: 35px 35px 0 35px;
  }

  &__new {
    padding: 6px 21px;
    position: absolute;
    border: none;
    border-radius: 4px;
    left: 35px;
    top: 35px;
    background-color: rgba(189, 247, 218, 1);
  }

  &__name {
    padding: 22px 35px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
  }

  &__price-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 30px 0 30px;
  }

  &__price {
    font-weight: 600;
    font-size: 24px;
    align-self: center;
  }

  &__button-price {
    width: 70px;
    height: 40px;
    background-color: $color-title;
    border-radius: 4px;
    border: none;

    &:hover {
      transition: 0.3s;
      box-shadow: 0 0 10px $box-shadow;
      cursor: pointer;
    }
  }
}
</style>