<template>
  <div class="search">
    <div class="header-input">
      <input type="text" placeholder="输入城市名或拼音">
    </div>
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.search {
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  overflow: hidden;

  .header-input {
    height: 0.64rem;
    line-height: 0.64rem;
    margin: 0.12rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;

    input {
      text-align: center;
      width: 100%;
      font-size: 0.28rem;
    }
  }
}
</style>
