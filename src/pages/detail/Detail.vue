<template>
  <div class="detail">
    <Banner/>
    <Header/>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";

export default {
  name: "Detail",
  components: {
    Banner,
    Header
  },
  computed:{},
  data (){
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.detail{
  height: 50rem;
}
</style>
