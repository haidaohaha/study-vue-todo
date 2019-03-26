<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">上海</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',  //尽然和 class 不需要一样，一样如果你的样式中，使用这个 class 则会报错。 
}
</script>

<style lang="stylus" scoped>
// 关于 手机适配，微信小程序的一位老师说的很好
  .header
    display: flex
    height: .86rem
    line-height :.86rem
    background: #00bcd4
    color: #fff
    .header-left
      width : .64rem
      float: left

    .header-input 
      flex :1
      height :.64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc

     .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
</style>
