<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <!-- <swiper-slide>
        <img class="swiper-img" src="../../../assets/images/home/c9667d74475c1eda.jpg" alt="pic">
      </swiper-slide> -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="pic">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
const pic = require("../../../assets/images/home/667f2f0b630f8b6f.jpg");

export default {
  name: "HomeSwiper",
  props:{
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      // 使用网络图片也可以使用本地图片 v-for
      old_swiperList: [
        {
          id: "b0a-8b6e-b451a48d",
          imgUrl:
            "https://haitao.nosdn2.127.net/70374e42-72c9-4b0a-8b6e-b451a48d6192T19032201013_960_480.jpg"
        },
        {
          id: "667f2f0b630f8b6f",
          imgUrl: pic
        },
        {
          id: "fddb6b047c02ba3d",
          imgUrl: require("../../../assets/images/home/fddb6b047c02ba3d.jpg")
        },
        {
          id: "8618e8fdb2af1532",
          imgUrl: require("../../../assets/images/home/8618e8fdb2af1532.jpg")
        }
      ]
    };
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="stylus" scoped>
// 穿透
.wrapper >>> .swiper-pagination-bullet-active {
  background: #ffffff;
}

// 经典写法,解决网络慢,图片加载前后,突然撑开抖动现象
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 48%; // 可以理解为 '高' 和宽的 比例,这个比例来自 图片的宽高比
  padding-bottom: 30%; // 请求数据
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
