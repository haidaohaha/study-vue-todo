<template>
  <transition class="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "CommonFade"
};
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active {
  transition: opacity 1s;
}

.v-leave-active {
  transition: opacity 0.5s;
}
</style>
