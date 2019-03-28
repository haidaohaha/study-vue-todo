<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  computed: {
    pages() {
      // 拆数组
      let pages = [];

      this.inconList.forEach((item, index) => {
        const flg = Math.floor(index / 8);
        pages[flg] = [...(pages[flg] || []), item];
      });

      return pages;
    }
  },
  data() {
    return {
      inconList: [
        {
          id: "0001",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32044/5/8064/14697/5c9ba0e1E35c9a830/3c52d2abd56dc034.png",
          desc: "京东超市京东超市京东超市京东超市京东超市京东超市京东超市京东超市"
        },
        {
          id: "0002",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png",
          desc: "京东超市"
        },
        {
          id: "0003",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png",
          desc: "京东超市"
        },
        {
          id: "0004",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png",
          desc: "京东超市"
        },
        {
          id: "0005",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png",
          desc: "京东超市"
        },
        {
          id: "0006",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png",
          desc: "京东超市"
        },
        {
          id: "0007",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png",
          desc: "京东超市"
        },
        {
          id: "0008",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png",
          desc: "京东超市"
        },
        {
          id: "0009",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png",
          desc: "京东超市"
        },
        {
          id: "0010",
          imgUrl:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png",
          desc: "京东超市"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-slide-active {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
}

.icons {
  .icon {
    overflow: hidden;
    width: 25%;
    padding-bottom: 25%;
    float: left;
    position: relative;
    height: 0; // 解决整体高 超过 50%

    .icon-img {
      position: absolute;
      // 左右都是 0 实现居中
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        // 不能这样使用， 否则你实现不了想要的图片大小
        // width: 100%;
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      text-align: center;
      color: #333;
      // 实现 文字过多 ... 效果
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
