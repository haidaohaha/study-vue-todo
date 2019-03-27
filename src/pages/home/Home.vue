<template>
  <div class="home">
    <Header/>
    <Swiper/>
    <Icons/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Swiper from "./components/Swiper.vue";
import Icons from "./components/Icons.vue";
export default {
  name: "home",
  components: {
    Header,
    Swiper,
    Icons
  }
};
</script>

<style scoped></style>
