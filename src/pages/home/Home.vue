<template>
  <div class="home">
    <Header/>
    <Swiper/>
    <Icons/>
    <Recommend/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Swiper from "./components/Swiper.vue";
import Icons from "./components/Icons.vue";
import Recommend from "./components/Recommend.vue";
export default {
  name: "home",
  components: {
    Header,
    Swiper,
    Icons,
    Recommend
  }
};
</script>

<style scoped></style>
