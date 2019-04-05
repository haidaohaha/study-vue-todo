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
      touchStatus: false, // 判断是否在指定的区域
      startY: 0
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
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
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
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 86;
          const index = Math.floor((touchY - this.startY) / 21);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
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
