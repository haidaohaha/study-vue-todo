<style scoped>
</style>
<template>
  <div class="set_array_obj_use">
    <hr>
    <h1>set 改变 数组 和 对象</h1>
    <button @click="handleClickArray">数组：</button>
    <ul>
      <li v-for="item of arrayList" :key="item.id">{{item.name}}</li>
    </ul>
    <button @click="handleClickObject">对象：</button>
    <ul>
      <li v-for="item of obj" :key="item">{{item}}</li>
    </ul>

  </div>
</template>
<script>
export default {
  name: "set_array_obj_use",
  computed: {
  },
  watch: {},
  methods: {
    handleClickArray(){
      this.$set(this.arrayList,3,{'name':'set 加',id:'setid'})
      console.log("handleClickArray");
    },
    handleClickObject(){
      this.$set(this.obj,'type','set 加')
      console.log("handleClickObject");
    },
  },
  data() {
    return {
      arrayList:[
       { name:'小明',age:28,id:'user01',pet:'阿凡达' },
       { name:'小夏',age:20,id:'user02',pet:'阿凡提' },
       { name:'小鱼',age:18,id:'user03',pet:'阿丽塔' },
     ],
     obj:{
       name:'天地战',age:28,id:'df01',pet:'刑天'
     }
    }
  }
};
</script>
