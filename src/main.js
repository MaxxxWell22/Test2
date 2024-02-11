import { createApp } from 'vue';
import App from './App.vue';
import 'swiper/css'; 
import { Swiper, SwiperSlide } from 'swiper/vue';
import './styles/main.scss';

createApp(App)
  .component('Swiper', Swiper)
  .component('SwiperSlide', SwiperSlide)
  .mount('#app');