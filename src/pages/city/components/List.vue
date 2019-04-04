<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="v of item" :key="v.id">
          <div class="item border-bottom">{{v.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object
  },
  mounted() {
    const scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.7rem;
  left: 0;
  right: 0;
  bottom: 0;
  // background: red;
  // 增加之后 就没有自带的滚动了
  overflow: hidden;

  .area {
    .title {
      line-height: 0.44rem;
      background-color: #eee;
      color: #666;
      padding-left: 0.2rem;
      font-size: 0.26rem;
    }

    .button-list {
      overflow: hidden;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;

      .button-wrapper {
        float: left;
        width: 33.33%;

        .button {
          margin: 0.1rem;
          padding: 0.1rem 0;
          text-align: center;
          border: 0.02rem solid #ccc;
          border-radius: 0.06rem;
        }
      }
    }

    .item-list {
      .item {
        line-height: 0.74rem;
        color: #666;
        padding-left: 0.2rem;
      }
    }
  }
}
</style>
