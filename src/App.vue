<template>
  <div id="app">
    <TodoList msg="TodoList"/>
    <ClassStyleUse/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import ClassStyleUse from "./components/ClassStyleUse.vue";

export default {
  name: "app",
  components: {
    TodoList,
    ClassStyleUse
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
