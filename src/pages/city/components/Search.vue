<template>
<div>
  <div class="search">
    <div class="header-input">
      <input v-model="keyword" type="text" placeholder="输入城市名或拼音">
    </div>
  </div>
  <div class="search-content" v-show="keyword" ref="wrapper">
    <ul>
      <li class="search-item border-bottom"
      v-for="item in list" :key="item.id"
      @click="handleClickCityName(item.name)"
      >{{item.name}}</li>
      <li v-show="dataNo" class="search-item border-bottom">没有找到匹配的数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props:{
    cities: Object,
  },
  data () {
    return {
      keyword:'',
      list:[],
      timer:null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  computed:{
    dataNo(){
     return !this.list.length
    }
  },
  watch:{
    keyword(){
      let list = [];
      const cities = this.cities;
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = this.keyword&&setTimeout(() => {
        for (const key in cities) {
          if (cities.hasOwnProperty(key)) {
            const itemArr = cities[key];
            for (let i = 0; i < itemArr.length; i++) {
              const item = itemArr[i];
               if(item.spell.indexOf(this.keyword)>-1||item.name.indexOf(this.keyword)>-1 ){
                list.push(item)
              }
            }
            this.list= list
          }
        }
      }, 100);
    }
  },
  methods:{
    handleClickCityName(city){
       // this.$store.dispatch('ClickCityName',city)
      // 目前不涉及异步 可以直接 执行 commit ChangeCity
      this.$store.commit('ChangeCity',city);
      this.$router.push('/');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.search {
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  overflow: hidden;

  .header-input {
    height: 0.64rem;
    line-height: 0.64rem;
    margin: 0.12rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;

    input {
      text-align: center;
      width: 100%;
      font-size: 0.28rem;
    }
  }
}

.search-content{
  position absolute;
  // 增加后无滚动  需要 使用 better scroll
  overflow hidden;
  top 1.7rem;
  left 0;
  right 0;
  bottom 0;
  background #fff;
  z-index :100;

  .search-item{
    line-height: 0.74rem;
    padding-left : .1rem;
  }
}
</style>
