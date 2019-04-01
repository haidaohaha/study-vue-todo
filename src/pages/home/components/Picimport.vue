<template>
  <div class="picimport">
      <div class="title">图片的重要性</div>
      <ul>
      <li class="item border-bottom" v-for="item of picimportList" :key="item.id">
        <img :src="item.imgUrl" alt class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.infoTitle}}</p>
          <p class="item-desc">{{item.infoDesc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePicimport",
  data() {
    return {
      picimportList: [
        {
          id: "0004",
          imgUrl:
            "https://gw.alicdn.com/tfs/TB1r0eMOwHqK1RjSZJnXXbNLpXa-1150-352.png_790x10000.jpg_.webp",
           infoTitle: "送你两百块优惠券",
          infoDesc: "春游季周边新玩法go"
        },
        {
          id: "0005",
          imgUrl:
            "https://gw.alicdn.com/imgextra/i2/192/O1CN01GCuE1g1DHyYTFXMYP_!!192-0-luban.jpg_790x10000Q75.jpg_.webp",
          infoTitle: "陪你去赏樱花",
          infoDesc: "100元优惠券配送中"
        },
        {
          id: "0006",
          imgUrl:
            "http://p1.meituan.net/200.0/deal/fb4b162a52cdca47e0f592459a292b4a71195.jpg",
          infoTitle: "陪你去赏樱花",
          infoDesc: "100元优惠券配送中"
        }
      ]
    };
  }
};
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.picimport {
  .title {
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
