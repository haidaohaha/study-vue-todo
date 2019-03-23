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
  },
  // 生命周期
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style scoped>
</style>
