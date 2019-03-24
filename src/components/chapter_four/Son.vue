<style scoped>
.counter{
  margin-bottom: 20px;
}
</style>
<template>
  <div class="son" @click="handleClick">
    加数 ： {{num}}
  </div>
</template>
<script>
export default {
  name: "son",
  props:{
    number: Number
  },
  methods: { 
    handleClick(){
      this.num += 2 ;
      this.$emit( 'inc', 2 )
    },
   },
  data(){
    return { 
        num:this.number  
      }
  }
};
</script>
