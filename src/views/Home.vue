<template>
  <div class="home">
    <TodoList msg="TodoList"/>

    <!-- <GetSetFun/> -->
    <!-- <ClassStyleUse/> -->
    <!-- <ItemOfListUse/> -->
    <!-- <SetArrayObjUse/> -->

    <!-- <ChapterFour/> -->



  </div>
</template>

<script>
// primer 初始 VUE 
import TodoList from "../components/chapter_primer/TodoList.vue";

// 第三章
// import GetSetFun from "../components/chapter_three/GetSetFun.vue";
// import ClassStyleUse from "../components/chapter_three/ClassStyleUse.vue";
// import ItemOfListUse from "../components/chapter_three/ItemOfListUse.vue";
// import SetArrayObjUse from "../components/chapter_three/SetArrayObjUse.vue";

// 第四章
// import ChapterFour from "../components/chapter_four/IndexChapterFour.vue";


export default {
  name: "ViewsHome",
  components: {
    TodoList,
    // GetSetFun,
    // ClassStyleUse,
    // ItemOfListUse,
    // SetArrayObjUse,
    // ChapterFour,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

