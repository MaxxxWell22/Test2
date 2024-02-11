<template>
  <div class="wrapper">
    <Header></Header>

    <div class="line-content">
      <p v-for="category in topCategories" :key="category" class="line-content__item">{{ category }}</p>
    </div>

    <Swiper :slides-per-view="1" :options="swiperOptions" @swiper="onSwiper" :pagination="true">
      <SwiperSlide><img src="../assets/slides/slide1.png"></SwiperSlide>
      <SwiperSlide><img src="../assets/slides/slide2.png"></SwiperSlide>
      <SwiperSlide><img src="../assets/slides/slide3.png"></SwiperSlide>
      <SwiperSlide><img src="../assets/slides/slide4.png"></SwiperSlide>

      <button class="swiper__prev-slide" @click="swiper1.slidePrev()"><img src="../assets/icons/Left.svg"
          alt='left'></button>
      <button class="swiper__next-slide" @click="swiper1.slideNext()"><img src="../assets/icons/Right.svg"
          alt='left'></button>
    </Swiper>

    <h2 class="title">Категории</h2>

    <div class="filtered-top">
      <div class="filtered-top__items">
        <div v-for="category in categories" :key="category" class="filtered-top__item">{{ category }}</div>
      </div>
      <div class="filtered-top__wrapper">
        <span class="filtered-top__label">Сортировать</span>
        <div class="filtered-top__select">
          <select class="filtered-top__select_item">
            <option>по популярности</option>
          </select>
        </div>
      </div>
    </div>

    <div class="card">
      <Card v-for="item in data" :key="item.name" :item="item" />
    </div>

    <h2 class="title">Почему нас выбирают</h2>

    <div class="footer">
      <div class="footer__blocks">
        <div v-for="(block, index) in blocks" :key="index" class="footer__block">
          <img />
          <span>{{ block.text }}</span>
        </div>
      </div>

      <div class="footer__poster"></div>

      <div class="footer__text">
        <span class="footer__text-bold">{{ footerText.bold }}</span>
        <div class="footer__text-normal">{{ footerText.normal }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { data } from '../data/data.js';
import { categories, blocks, footerText, topCategories } from '../data/constants.js'

const swiper1 = ref(null);

const onSwiper = (swiper) => {
  swiper1.value = swiper
};

const swiperOptions = ref({
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.wrapper {
  width: 1400px;
  max-width: 1400px;
  padding-bottom: 100px;
}

.line-content {
  width: 100%;
  height: 50px;
  background-color: $background-header;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;

  &__item:nth-child(2) {
    color: $active-color;
  }

  &__item {
    color: #FFF;

    &:hover {
      transition: 0.3s;
      color: $active-color;
      cursor: pointer;
    }
  }
}

.swiper {

  &__prev-slide,
  &__next-slide {
    width: 61px;
    height: 61px;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 172px;
    z-index: 10;

    &:hover {
      cursor: pointer;
    }
  }

  &__prev-slide {
    left: 32px;
  }

  &__next-slide {
    right: 32px;
  }
}

.card {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
}

.title {
  color: $color-title;
  margin-top: 92px;
  font-size: 36px;
  line-height: 43px;
}

.filtered-top {
  display: flex;
  justify-content: space-between;

  &__items {
    display: flex;

    div:nth-child(1) {
      color: black;
      border: 1px solid $border-active;
      background-color: #FFF;
    }
  }

  &__item {
    background-color: $background-color;
    padding: 10px 28px;
    border: none;
    border-radius: 4px;
    margin-right: 24px;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid transparent;

    &:hover {
      transition: 0.4s;
      color: black;
      border: 1px solid $border-active;
      background-color: #FFF;
      cursor: pointer;
    }
  }

  &__wrapper {
    display: flex;
  }

  &__label {
    align-self: center;
    margin-right: 20px;
    size: 16px;
    line-height: 19px;
  }

  &__select {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: none;
    border-right: 16px solid transparent;
    padding-left: 20px;

    &_item {
      width: 331px;
      height: 39px;
      border: 1px solid $border-active;
      border-radius: 4px;
    }
  }
}

.footer {
  display: flex;
  justify-content: space-between;

  &__blocks {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 540px;
  }

  &__block {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 164px;
    width: 453px;
    border-radius: 10px;
    background-color: $background-color;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  }

  &__poster {
    width: 453px;
    height: 540px;
    background-image: url('../assets/bunner.png');
  }

  &__text {
    box-sizing: border-box;
    width: 453px;
    height: 540px;
    background-color: $background-color;
    border-radius: 10px;
    padding: 48px 48px;
  }

  &__text-bold {
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
  }

  &__text-normal {
    margin-top: 19px;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
  }
}
</style>
