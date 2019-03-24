<style scoped>
</style>
<template>
  <div class="get_set_fun">
    <hr>姓：
    <input type="text" v-model="firstName">
    <br>名：
    <input type="text" v-model="lastName">
    <br>
    全名(计算属性实现-特点有缓存):
    {{fullName}}
    <br>
    全名(方法实现-每次渲染都会执行，但比计算属性性能差):
    {{fullName2()}}
  </div>
</template>
<script>
export default {
  name: "get_set_fun",
  // 计算属性 ★★★★★
  // 特点内置缓存 没有使用到的 依赖 不会再次计算 属性
  // 🔺🔺🔺 方法一
  computed: {
    // fullName: function() {
    //   return this.firstName + " " + this.lastName;
    // }
    // fullName: {
    //   get: function() {
    //     return this.firstName + " " + this.lastName;
    //   },
    //   set: function(value) {
    //     //   这里 value 即此时的 fullName 值，
    //     //   此时改变 firstName 或者 lastName
    //     //   会再次调用 get 方法 ， 改变 fullName
    //     //   以前有印象，但不知道如何使用
    //     console.log("SET", value);
    //     // const arr = value.split("");
    //     this.firstName = "set改变firstName";
    //     this.lastName = "set改变lastName";
    //   }
    // }
  },
  // 🔺🔺🔺 方法二
  watch: {
    firstName() {
      return this.firstName + " " + this.lastName;
    },
    lastName() {
      return this.firstName + " " + this.lastName;
    }
  },
  // 🔺🔺🔺 方法三
  methods: {
    fullName2() {
      return this.firstName + " " + this.lastName;
    }
  },
  data() {
    return {
      firstName: "",
      fullName: "",
      lastName: ""
    };
  }
};
</script>
