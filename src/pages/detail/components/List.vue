<template>
  <div class="list">
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title">
        <div class="item-title-icon"></div>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
          <!-- 递归组件 -->
        <DetailList :list="item.children"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;

  .item-title-icon {
    position: relative;
    left: 0.06rem;
    top: 0.06rem;
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
  }
}

// 使用递归的样式，的放在当前组件样式全局
.item-children {
  padding: 0 0.2rem;
}
</style>
