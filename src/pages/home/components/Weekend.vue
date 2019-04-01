<template>
  <div class="weekend">
      <div class="title">周末去哪儿</div>
      <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <img :src="item.imgUrl" alt class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    weekendList: Array
  },
  data() {
    return {
      old_weekendList: [
        {
          id: "0001",
          imgUrl:
            "https://gw.alicdn.com/tfs/TB1Rr_MOwHqK1RjSZFEXXcGMXXa-1125-352.jpg_790x10000Q75.jpg_.webp",
          title: "送你两百块优惠券",
          desc: "春游季周边新玩法go"
        },
        {
          id: "0002",
          imgUrl:
            "https://gw.alicdn.com/tfs/TB1DXKUOxTpK1RjSZFMXXbG_VXa-1125-352.jpg_790x10000Q75.jpg_.webp",
          title: "陪你去赏樱花",
          desc: "100元优惠券配送中"
        },
        {
          id: "0003",
          imgUrl:
            "https://gw.alicdn.com/tfs/TB1Jip.OXYqK1RjSZLeXXbXppXa-1125-352.jpg_790x10000Q75.jpg_.webp",
          title: "陪你去赏樱花",
          desc: "100元优惠券配送中"
        },
        {
          id: "0004",
          imgUrl:
            "https://gw.alicdn.com/tfs/TB1r0eMOwHqK1RjSZJnXXbNLpXa-1150-352.png_790x10000.jpg_.webp",
          title: "陪你去赏樱花",
          desc: "100元优惠券配送中"
        },
        {
          id: "0005",
          imgUrl:
            "https://gw.alicdn.com/imgextra/i2/192/O1CN01GCuE1g1DHyYTFXMYP_!!192-0-luban.jpg_790x10000Q75.jpg_.webp",
          title: "陪你去赏樱花",
          desc: "100元优惠券配送中"
        },
        {
          id: "0006",
          imgUrl:
            "https://gw.alicdn.com/tfs/TB1uq3fNMHqK1RjSZJnXXbNLpXa-1125-352.png_790x10000.jpg_.webp",
          title: "陪你去赏樱花",
          desc: "100元优惠券配送中"
        }
      ]
    };
  }
};
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.weekend {
  .title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }

    .item {
    // overflow: hidden;
    // display: flex;
    // height: 1.9rem;

    .item-img {
          height: 2rem;
    width: 100%;
    }

    .item-info {
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
