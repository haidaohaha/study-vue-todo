<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32044/5/8064/14697/5c9ba0e1E35c9a830/3c52d2abd56dc034.png"
          alt="京东"
        >
      </div>
      <p class="icon-desc">京东超市</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32044/5/8064/14697/5c9ba0e1E35c9a830/3c52d2abd56dc034.png"
          alt="京东"
        >
      </div>
      <p class="icon-desc">京东超市</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32044/5/8064/14697/5c9ba0e1E35c9a830/3c52d2abd56dc034.png"
          alt="京东"
        >
      </div>
      <p class="icon-desc">京东超市</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32044/5/8064/14697/5c9ba0e1E35c9a830/3c52d2abd56dc034.png"
          alt="京东"
        >
      </div>
      <p class="icon-desc">京东超市</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32044/5/8064/14697/5c9ba0e1E35c9a830/3c52d2abd56dc034.png"
          alt="京东"
        >
      </div>
      <p class="icon-desc">京东超市</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32044/5/8064/14697/5c9ba0e1E35c9a830/3c52d2abd56dc034.png"
          alt="京东"
        >
      </div>
      <p class="icon-desc">京东超市</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32044/5/8064/14697/5c9ba0e1E35c9a830/3c52d2abd56dc034.png"
          alt="京东"
        >
      </div>
      <p class="icon-desc">京东超市</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32044/5/8064/14697/5c9ba0e1E35c9a830/3c52d2abd56dc034.png"
          alt="京东"
        >
      </div>
      <p class="icon-desc">京东超市</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIcons"
};
</script>

<style lang="stylus" scoped>
.icons {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 50%;

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
    }
  }
}
</style>
