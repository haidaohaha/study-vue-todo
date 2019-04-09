<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-brack">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont cur-arr">&#xe624;</span>
        </div>
      </router-link>
      <div class="header-btn">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 50) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  // 我把 详情页 给 移出了， 这两个 勾子 不能使用了。
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy(){
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);

  .header-abs-brack {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  z-index: 1;
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  overflow: hidden;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;

  .header-left {
    position: absolute;

    .cur-arr {
      margin: 0 0.2rem;
      color: #fff;
    }
  }

  .header-btn {
    font-size: 0.32rem;
  }
}
</style>
