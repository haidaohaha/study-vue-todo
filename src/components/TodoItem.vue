<template>
  <li class="todo_item" @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
  name: "todo_item",
  props: {
    content: String,
    index: Number
  },
  methods: {
    handleDelete() {
      this.$emit("delete", this.index);
    }
  }
};
</script>

<style scoped>
</style>
