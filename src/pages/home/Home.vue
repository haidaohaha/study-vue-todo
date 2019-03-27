<template>
  <div class="home">
    <Header/>
    <Swiper/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Swiper from "./components/Swiper.vue";
export default {
  name: "home",
  components: {
    Header,
    Swiper
  }
};
</script>

<style scoped></style>
