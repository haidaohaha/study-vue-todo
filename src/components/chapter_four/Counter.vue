<style scoped>
.counter{
  margin-bottom: 20px;
}
</style>
<template>
  <div class="counter" @click="handleClick">
    加数 ： {{num}}
  </div>
</template>
<script>
export default {
  name: "counter",
  methods: { 
    handleClick(){
      this.num++;
      this.$emit('change')
    },
   },
  data(){
    return {num:0}
  }
};
</script>
