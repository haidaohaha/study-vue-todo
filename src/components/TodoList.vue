<template>
  <div class="todolist">
    <div class="green" :title="title">{{ msg }}</div>
    <input v-model="inputValue">
    <button @click="handleSubmit">提交</button>
    <ul>
      <li v-for="(item,index) in todoList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todolist",
  props: {
    msg: String
  },
  methods: {
    handleSubmit: function() {
      if (!this.inputValue) return;
      this.todoList.push(this.inputValue);
      this.inputValue = "";
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
