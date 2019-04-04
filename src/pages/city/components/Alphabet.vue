<template>
  <div class="alphabet">
    <div
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: { cities: Object },
  data() {
    return {
      touchStatus: false // 判断是否在指定的区域
    };
  },
  computed: {
    letters() {
      let letters = [];
      for (const key in this.cities) {
        letters.push(key);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        const startY = this.$refs["A"][0].offsetTop;
        const touchY = e.touches[0].clientY - 86;
        const index = (touchY - startY) / 21;
        this.$emit("change", this.letters[index]);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
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
