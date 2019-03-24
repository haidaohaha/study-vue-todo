## 现在才开始学 VUE 哈哈

#### 开个分支 dev

#### 刷视频制作 todolist

[vue2.5 入门](https://www.imooc.com/learn/980)  
DellLee 大佬，坐标阿里南京

## 问题

todolist 不分离，组件时如何实现删除功能？  
这样书写即可

```
handleDelete(index)
```

#### 知识点

this.\$data.todoList === this.todoList

这样能明白 this.todoList 直接书写拿到数据

#### GetSetFun

讲解 计算属性、watch、以及 Get Set 的使用  
重点是三种改变 fullName 的操作。

#### ClassStyleUse

讲解 样式使用的五种写法  

#### SetArrayObjUse

第一种方式：改变 数组的 7 种操作，是可以让 vue 侦听到而重新渲染；  
第二种方式：直接对数组对象，赋值 改变应用；  
第三种方式：set 方法，在构建工具中 调用 this.$set();   
注意：数组和对象，set 操作的不同。  
