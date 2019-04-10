<template>
  <div>
    <div class="banner">
      <div class="banner-img-wrap" @click="handleGallaryOpen">
        <img class="banner-img" :src="bannerImg" alt srcset>
      </div>
      <div class="banner-info">
        <div class="info-title">{{this.sightName}}</div>
        <div class="info-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <CommonFade>
      <CommonGallery :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"/>
    </CommonFade>
  </div>
</template>

<script>
import CommonGallery from "@/common/gallery/Gallery.vue";
import CommonFade from "@/common/fade/Fade.vue";

export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallery,
    CommonFade
  },
  computed: {},
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1604/d9/d97e6e314683db7690.img.jpg_r_800x800_47fae5eb.jpg",
        "http://img1.qunarzz.com/sight/p0/1604/1b/1b6778deafaf208f90.img.jpg_r_800x800_be6841bf.jpg",
        "http://img1.qunarzz.com/sight/p0/1604/85/85f4b4a6dc8cbad890.img.jpg_r_800x800_8156fad5.jpg",
        "http://img1.qunarzz.com/sight/p0/1604/d0/d0e9becdac71468590.img.jpg_r_800x800_4e3fd07c.jpg"
      ]
    };
  },
  methods: {
    handleGallaryOpen() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  activated() {
    this.showGallary = false;
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.banner {
  position: relative;
}

.banner-img-wrap {
  height: 0;
  padding-bottom: 55%;
  background-color: #eee;

  .banner-img {
    width: 100%;
  }
}

.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  color: #fff;
  // 想当年 我也是可以随便书写的 😅
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

  .info-title {
    flex: 1;
    font-size: 0.32rem;
    padding: 0 0.2rem;
  }

  .info-number {
    height: 0.32rem;
    line-height: 0.32rem;
    margin-top: 0.14rem;
    padding: 0 0.4rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.8);
    font-size: 0.24rem;

    .banner-icon {
      font-size: 0.24rem;
      margin-right: 0.1rem;
    }
  }
}
</style>
