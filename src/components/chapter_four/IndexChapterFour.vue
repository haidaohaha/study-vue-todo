<style scoped>
</style>
<template>
  <div class="index_chapter_four">
   <UseRef/>

   <UseFatherAndSon/>
  </div>
</template>
<script>
import UseRef from "./UseRef.vue";
import UseFatherAndSon from "./UseFatherAndSon.vue";
export default {
  name: "index_chapter_four",
  components:{
    UseRef,
    UseFatherAndSon,
  }
};
</script>
