<style scoped>
</style>
<template>
  <div class="use_father_and_son">
    <hr>
     <h2>父子组件是如何通信的</h2>
     <Son :number="number" @inc="handleInc"/>
     <Son :number="number" @inc="handleInc"/>
     <h2>{{total}}</h2>
  </div>
</template>
<script>
import Son from "./Son.vue";
export default {
  name: "use_father_and_son",
  components:{
    Son,
  },
  computed: {},
  watch: {},
  methods: {
    handleInc( step ){
      this.total +=step;
    }
  },
  data() {
    return { number:0 , total:0 }
  }
};
</script>
