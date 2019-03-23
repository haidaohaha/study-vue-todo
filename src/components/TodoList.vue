<template>
  <div class="todolist">
    <div class="green" :title="title">{{ msg }}</div>
    <input v-model="inputValue">
    <button @click="handleSubmit">提交</button>
    <TodoBottom :todoList="todoList" @delete="handleDelete"/>
    <GetSetFun/>
  </div>
</template>

<script>
import TodoBottom from "./TodoBottom.vue";
import GetSetFun from "./GetSetFun.vue";

export default {
  name: "todolist",
  props: {
    msg: String
  },
  components: {
    TodoBottom,
    GetSetFun
  },
  methods: {
    handleSubmit() {
      if (!this.inputValue) return;
      this.todoList.push(this.inputValue);
      this.inputValue = "";
    },
    handleDelete(index) {
      //  vue 帮我们去找 具体的实现如下
      //  this.$data.todoList  ===  this.todoList
      this.todoList.splice(index, 1);
    }
  },
  data() {
    return { title: "this is todolist", inputValue: "", todoList: [] };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.green {
  color: #42b983;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
}
</style>
