<template>
  <div class="gallery">
    <div class="wrapper">
      <swiper :options="swiperOption" @click="handleGallaryClick">
        <!-- <swiper-slide>
          <img
            class="gallary-img"
            src="http://img1.qunarzz.com/sight/p0/1708/dc/dcaa049ed53249a8a3.img.jpg_r_800x800_aac63fba.jpg"
            alt
          >
        </swiper-slide>-->
        <swiper-slide v-for="(item,key) of imgs" :key="key">
          <img class="gallary-img" :src="item" alt="pic">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallery",
  props: {
    imgs: Array
  },
  data() {
    return {
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        loop: true,
        observer: true,
        observeParents: true
      }
    };
  },
  methods:{
      handleGallaryClick(){
          this.$emit('close')
      }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.gallery >>> .swiper-container {
  overflow: initial;
}

.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: #000;
  color: #fff;

  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      bottom: -1rem;
    }
  }
}
</style>

