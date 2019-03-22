<template>
  <div class="todo_item">
    <ul>
      <li v-for="(item,index) in todoList" :key="index" @click="handleDelete(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo_item",
  props: {
    todoList: Array
  },
  methods: {
    handleDelete: function(index) {
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
