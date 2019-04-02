<style scoped>
</style>
<template>
  <div class="index_chapter_four">
    <UseRef/>

    <UseFatherAndSon/>
    <router-link to="https://www.baidu.com/">hahah</router-link>
  </div>
</template>
<script>
import UseRef from "./UseRef.vue";
import UseFatherAndSon from "./UseFatherAndSon.vue";
export default {
  name: "index_chapter_four",
  components: {
    UseRef,
    UseFatherAndSon
  }
};
</script>
