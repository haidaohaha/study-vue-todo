<template>
  <div class="city">
    <Header/>
    <Search/>
    <List/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import List from "./components/List.vue";

export default {
  name: "City",
  components: {
    Header,
    Search,
    List
  }
};
</script>

<style lang="stylus" scoped>
</style>
