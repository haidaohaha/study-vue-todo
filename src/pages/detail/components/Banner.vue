<template>
  <div class="banner">
    <div class="banner-img-wrap">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg" alt="" srcset="">
    </div>
    <div class="banner-info">
      <div class="info-title">八达岭长城(AAAAA景区)</div>
      <div class="info-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailBanner",
  components: {},
  computed:{},
  data (){
    return {}
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.banner{
  position relative;
}

.banner-img-wrap{
  height: 0;
  padding-bottom: 55%;
  background-color: #eee;

  .banner-img{
    width: 100%;
  }
}

.banner-info{
  display: flex
  position: absolute
  left: 0
  right: 0
  bottom: 0
  line-height: .6rem
  color: #fff;
  // 想当年 我也是可以随便书写的 😅
  background-image: linear-gradient(to bottom ,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) ;

  .info-title{
    flex : 1;
    font-size: .32rem
    padding: 0 .2rem
  }
  .info-number{
    height: .32rem
    line-height: .32rem
    margin-top: .14rem
    padding: 0 .4rem
    border-radius: .2rem
    background: rgba(0, 0, 0, .8)
    font-size: .24rem

    .banner-icon{
      font-size: .24rem
      margin-right  :.1rem
    }
  }
}

</style>
