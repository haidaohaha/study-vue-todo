<template>
  <div class="city">
    <Header/>
    <Search/>
    <List/>
    <Alphabet/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import List from "./components/List.vue";
import Alphabet from "./components/Alphabet.vue";

export default {
  name: "City",
  components: {
    Header,
    Search,
    List,
    Alphabet
  }
};
</script>

<style lang="stylus" scoped>
</style>
