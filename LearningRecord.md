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

# 最终章 - 总结 
新开一个分支  teacher-code

## 改变 Ajax 请求地址

[代码地址](config\index.js)

```
    // assetsPublicPath: '/project',
    assetsPublicPath: '/',
    proxyTable: {
      // 前后端 联调时，进行配置
      // '/api': {
      //   target: 'http://localhost:80'
      // }
      // 本地 数据接口
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },
```

这样就可以解决，原始代码请求后端数据异常，倒是界面不显示；

#### 10-1 其实讲解了很多，只是你不懂，你才觉得不重要。

上线的时候，哪一些是需要的，这些你都要知道。

## 真机调试出现的 BUG

城市列表页面，下拉时 会出现从顶部开始下拉，不是从 ‘当前城市’开始的 BUG  
[文件地址](src\pages\city\components\Alphabet.vue)

```diff
- @touchstart="handleTouchStart"
+ @touchstart.prevent="handleTouchStart"
```

prevent 会阻止浏览器默认事件。

## 白屏问题

有一些，低版本的浏览器才会出现，这里的问题，你可以考虑是不是，不支持 promise ， 造成的。  
此时可以考虑使用 babel-polyfill 插件，为浏览器增加一些 ES6 新特性。

```
npm i babel-polyfill --save

main.js
+ import 'babel-polyfill'
```

还有一种情况，出现白屏问题时 webpack-dev-server 打包造成的，真是打包时，会解决这样的问题。

## ip 地址打开，项目

webpack 默认不支持，ip 地址打开项目。 此时需要增加 --host 0.0.0.0 。

```diff
- "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
+ "dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",
```

### Vue 项目的联调测试上线 - 总结 ：

1、项目前后端联调  
2、真机测试  
3、打包上线  
4、异步组件实现按需加载  
5、课程总结与后续学习指南

1、讲解如何配置 前后端联调 地址 ;  
2、解决两个 BUG ;  
3、打包输入几种后端需要的文件和配置项，主要时配合运维部署项目 ;  
4、这一节主要是，利用 webpack 的特性，实现 异步加载，可以看看，有利于在大型项目中，分割代码，提高性能（我已经在项目中使用）;  
5、这个要点讲解一下，这个是非常重要的，相当于大佬在引导，或者说指路 ;

### 抽时间关注 ： 5、课程总结与后续学习指南

####
