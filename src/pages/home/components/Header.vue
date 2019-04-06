<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont cur-arr">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont cur-input">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
      <!-- {{this.$store.state.city}} -->
      {{this.doubleCity}}
      <span class="iconfont cur-add">&#xe64a;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeHeader" //尽然和 class 不需要一样，一样如果你的样式中，使用这个 class 则会报错。
  ,
  computed:{
    // ...mapGetters({doubleCity}),
    ...mapGetters({
      doubleCity:'doubleCity'
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header {
  display: flex;
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .cur-arr {
      margin: 0 0.2rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;

    .cur-input {
      margin: 0 0.1rem;
    }
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    color: #fff;

    .cur-add {
      margin: 0 0.1rem;
    }
  }
}
</style>
