<template>
  <div class="home">
    <Header/>
    <Swiper :swiperList="swiperList"/>
    <Icons :iconList="iconList"/>
    <Recommend :recommendList="recommendList"/>
    <Weekend :weekendList="weekendList"/>
    <Picimport/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Swiper from "./components/Swiper.vue";
import Icons from "./components/Icons.vue";
import Recommend from "./components/Recommend.vue";
import Weekend from "./components/Weekend.vue";
import Picimport from "./components/Picimport.vue";
import axios from 'axios';
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend,
    Picimport
  },
  computed:{
    ...mapState(['city'])
  },
  data (){
    return {
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
    }
  },
  methods: {
    getHomeInfo () {
      // dev-server 代理配置后面补
      axios.get('/static/mock/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated () {
    if(this.lastCity !== this.city){
      this.lastCity = this.city;
      this.getHomeInfo();
    }    
  },
}
</script>

<style scoped></style>
