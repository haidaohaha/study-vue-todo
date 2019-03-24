<style scoped>
</style>
<template>
  <div class="use_ref">
    <h2>ref 的使用，点击数字</h2>
      <Counter ref="one" @change="handleChange"/>
      <Counter ref="two" @change="handleChange"/>

      <div>和 ： {{total}}</div>
  </div>
</template>
<script>
import Counter from "./Counter.vue";

export default {
  name: "use_ref",
  components:{
    Counter,
  },
  computed: {},
  watch: {},
  methods: {
    handleChange(){
      this.total = this.$refs.one.num + this.$refs.two.num ;
    }
  },
  data() {
    return {
      total: 0
    }
  }
};
</script>
