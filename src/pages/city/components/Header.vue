<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont cur-arr">&#xe624;</span>
      </div>
    </router-link>
    <div class="header-btn">
      <button :class="{'city-header-btn-active':btnActive}" @click="handleClick">境内</button>
      <button :class="{'city-header-btn-active':!btnActive}" @click="handleClick">境外</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  data() {
    return {
      btnActive: true
    };
  },
  methods: {
    handleClick() {
      this.btnActive = !this.btnActive;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header {
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .header-left {
    // 加上可使居中，不加感觉好一些。
    position: absolute;

    .cur-arr {
      margin: 0 0.2rem;
      color: #fff;
    }
  }

  .header-btn {
    margin: 0 auto;

    button {
      color: #fff;
      display: inline-block;
      width: 2rem;
      height: 0.56rem;
      line-height: 0.45rem;
      background: #00afc7;
      font-size: 0.32rem;
      border: 0.02rem solid #fff;
      border-radius: 0 0.06rem 0.06rem 0;
    }

    button:first-child {
      border-radius: 0.06rem 0 0 0.06rem;
    }

    .city-header-btn-active {
      background: #fff;
      color: #00afc7;
    }
  }
}
</style>
