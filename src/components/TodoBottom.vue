<template>
  <div class="todo_bottom">
    <ul>
      <TodoItem
        v-for="(item,index) in todoList"
        :key="index"
        @delete="handleDelete(index)"
        :content="item"
        :index="index"
      ></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "todo_bottom",
  props: {
    todoList: Array
  },
  components: {
    TodoItem
  },
  methods: {
    handleDelete(index) {
      this.$emit("delete", index);
    }
  },
  data() {
    return {};
  },
  // 生命周期
  // beforeCreate() {
  //   console.log(this.$el);
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log(this.$el);
  //   console.log("created");
  // },
  // beforeMount() {
  //   console.log(this.$el);
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log(this.$el);
  //   console.log("mounted");
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated(){
  //   console.log("updated");
  // },
  // // 销毁 参见 TodoItem
  // beforeDestroy(){
  //   console.log("beforeDestroy");
  // },
  // destroyed(){
  //   console.log("destroyed");
  // }
};
</script>

<style scoped>
</style>
