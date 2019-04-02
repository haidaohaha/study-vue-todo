<template>
  <div class="city">
    <Header/>
    <Search/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";

export default {
  name: "City",
  components: {
    Header,
    Search
  }
};
</script>

<style lang="stylus" scoped>
</style>
