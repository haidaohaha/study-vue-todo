<template>
  <div class="alphabet">
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet"
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
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
