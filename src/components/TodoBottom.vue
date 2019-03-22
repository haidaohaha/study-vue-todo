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
  }
};
</script>

<style scoped>
</style>
