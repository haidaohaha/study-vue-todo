### Learning record

### 7-2 轮播图制作

[vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)

使用 vue-awesome-swiper 插件进行开发.

```
yarn add vue-awesome-swiper --save
```

老师使用外链,我比较懒,直接找几张静态图片.  
图片你可以找找  
[必要](http://m.biyao.com/)  
[京东](https://m.jd.com/)  
[考拉](https://m.kaola.com/)

####知识点:

经典写法,解决网络慢,图片加载前后,突然撑开抖动现象

```
.wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 48%; // 可以理解为 '高' 和宽的 比例,这个比例来自 图片的宽高比

只写也是可以的,部分浏览器可能不支持:
    height: 48vw;
}
```

#### styl 文件使用

之前的一直看，没留意，现在还不知道 如何 导出 webpack 配置项，/(ㄒ o ㄒ)/~~  
老师这么骚的操作：  
 @import '~styles/varibles.styl'

我只能先这么写：  
@import '../../../assets/styles/varibles.styl';  
@import '~@/assets/styles/varibles.styl';

#### 同样 CSS 不同的 img 实现不同的风格

CSS 太不简单了

#### vuex

直接使用 vue ui 添加的，基本符合我入门的要求，记一记使用规则就好。😅😅😅  
按照图  
![vuex](./vuex.png)  
一步步书写即可。

#### localStorage 还能这么使用，服气

```
localStorage.setItem('city','拉萨');

localStorage.city = '拉萨';
使用
localStorage.city
不需要
localStorage.getItem('city');
也可以混用

```

#### Vuex 的高级使用及 localStorage 比较重要 拆分 store 看懂大型项目

“熟悉配方” redux  
最后看到 getters 貌似可以用于很多高级的写法中，现在还不会伤心。

#### keep-alive

"keep-alive" 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。  
和 transition 相似，keep-alive 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。  
当组件在 keep-alive 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。  
多出两个生命周期勾子，之前看不懂的原因。

[keep-alive](https://cn.vuejs.org/v2/api/#keep-alive)

#### tap 的使用，如果你不记得了 赶紧找找

#### 递归组件

[递归组件文件地址](src\pages\detail\components\List.vue)

```
<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>
```

使用递归组件，你需要理解 这里的 name 有哪些作用  
 1、递归组件使用时，即使用该名称；  
 2、keep-alive 时，有些组件，我们不需要缓存，此时可写为

```
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
```

这里的 exclude = "name 对应的值"  
 3、后期会用到，vue 调试工具，你所看到的组件名称，也是这里定义的。  
 对应文件目录，定义后期我的规划是，  
 页面名称+组件文件名称 = 组件内部 name 名称， class 使用组件文件名称.

#### 本节优化

这两段独立的代码,分别的作用是什么?

```
1、
  <keep-alive exclude="Detail">
    <router-view/>
  </keep-alive>

2、
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
```

#### 修复上一节 使用 exclude="Detail" 造成 header 渐隐渐显 失效

####

####
