<template>
  <div id="app">
    <TodoList msg="TodoList"/>
    <GetSetFun/>
    <ClassStyleUse/>
    <ItemOfListUse/>
    <SetArrayObjUse/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import GetSetFun from "./components/chapter_three/GetSetFun.vue";
import ClassStyleUse from "./components/chapter_three/ClassStyleUse.vue";
import ItemOfListUse from "./components/chapter_three/ItemOfListUse.vue";
import SetArrayObjUse from "./components/chapter_three/SetArrayObjUse.vue";

export default {
  name: "app",
  components: {
    TodoList,
    GetSetFun,
    ClassStyleUse,
    ItemOfListUse,
    SetArrayObjUse,
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
