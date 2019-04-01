<template>
  <div class="home">
    <Header/>
    <Swiper/>
    <Icons/>
    <Recommend/>
    <Picimport/>
    <Weekend/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Swiper from "./components/Swiper.vue";
import Icons from "./components/Icons.vue";
import Recommend from "./components/Recommend.vue";
import Weekend from "./components/Weekend.vue";
import Picimport from "./components/Picimport.vue";
export default {
  name: "home",
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,Weekend,Picimport
  }
};
</script>

<style scoped></style>
