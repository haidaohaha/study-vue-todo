<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/'+item.id"
      >
        <img :src="item.imgUrl" alt class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  },
  data() {
    return {
      old_recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://p1.meituan.net/200.0/deal/fb4b162a52cdca47e0f592459a292b4a71195.jpg",
          title: "沪小二炭火蛙锅",
          desc: "[杭州等]100元代金券1张，可叠加"
        },
        {
          id: "0002",
          imgUrl:
            "http://p1.meituan.net/200.0/deal/fb4b162a52cdca47e0f592459a292b4a71195.jpg",
          title: "沪小二炭火蛙锅",
          desc: "[杭州等]100元代金券1张，可叠加"
        },
        {
          id: "0003",
          imgUrl:
            "http://p1.meituan.net/200.0/deal/fb4b162a52cdca47e0f592459a292b4a71195.jpg",
          title: "沪小二炭火蛙锅",
          desc: "[杭州等]100元代金券1张，可叠加"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.recommend {
  .recommend-title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }

  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;

    .item-img {
      height: 1.7rem;
      padding: 0.1rem;
    }

    .item-info {
      flex: 1;
      padding: 0.1rem;
      min-width: 0;

      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
      }

      .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();
      }

      .item-button {
        line-height: 0.44rem;
        margin-top: 0.16rem;
        background: #ff9300;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        color: #fff;
      }
    }
  }
}
</style>
