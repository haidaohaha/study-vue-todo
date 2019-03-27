<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="swiper-img" src="../../../assets/images/home/8618e8fdb2af1532.jpg" alt="pic">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../assets/images/home/667f2f0b630f8b6f.jpg" alt="pic">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../assets/images/home/c9667d74475c1eda.jpg" alt="pic">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../assets/images/home/fddb6b047c02ba3d.jpg" alt="pic">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      // 网络链接 可以使用 v-for 可惜现在不允许使用
      swiperList: [
        {
          id: "8618e8fdb2af1532",
          imgUrl:
            "https://haitao.nosdn2.127.net/70374e42-72c9-4b0a-8b6e-b451a48d6192T19032201013_960_480.jpg"
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
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
