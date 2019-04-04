<template>
  <div class="alphabet">
    <div class="item" v-for="(item,key) of cities" :key="key">{{key}}</div>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: { cities: Object }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.alphabet {
  display: flex;
  // background: red;
  position: absolute;
  top: 1.7rem;
  right: 0;
  bottom: 0;
  width: 0.5rem;
  flex-direction: column;
  justify-content: center;

  .item {
    line-height: 0.42rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
