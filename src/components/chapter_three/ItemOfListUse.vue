<style scoped>
</style>
<template>
  <div class="item_of_list_use">
    <hr>
    <h2>本节重点： template 和 遍历 of 的使用</h2>
    <div v-for="(item,index) of list" :key="index">{{item}}</div>
    <template v-for="item of listObj" :keyed="item.id">
      <p :key="item.id+item.name">姓名：{{item.name}}</p>
      <p :key="item.id+item.pet">昵称：{{item.pet}}</p>
    </template>
    <div v-for="(item,key,index) of obj" :key="item">
      {{item}} -- {{key}} -- {{index}}
    </div>
  </div>
</template>
<script>
export default {
  name: "item_of_list_use",
  computed: {},
  watch: {},
  methods: {},
  data() {
   return { 
     list:[1,2,3,4],
     listObj:[
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
