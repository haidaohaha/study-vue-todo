<template>
  <div class="list">
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
        <div class="button-wrapper">
          <div class="button">上海</div>
        </div>
        <div class="button-wrapper">
          <div class="button">上海</div>
        </div>
        <div class="button-wrapper">
          <div class="button">上海</div>
        </div>
        <div class="button-wrapper">
          <div class="button">上海</div>
        </div>
        <div class="button-wrapper">
          <div class="button">上海</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
        <div class="item border-bottom">阿丽塔</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityList"
};
</script>

<style lang="stylus" scoped>
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
