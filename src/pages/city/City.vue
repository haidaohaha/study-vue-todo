<template>
  <div class="city">
    <Header/>
    <Search/>
    <List :cities="cities" :hot="hot" :letter="letter"/>
    <Alphabet :cities="cities" @change="handleLetterChange"/>
  </div>
</template>

<script>
import axios from "axios";
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
  },
  data() {
    return {
      cities: {},
      hot: [],
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/static/mock/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hot = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
