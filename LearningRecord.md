# 注意 node 版本

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

### Cloud Studio  
使用 腾讯云开发者平台，要到 访问启动后的地址，此时的 8080 需要进行映射，直接访问会遇到 Invalid Host header   

原因是： vue-cli搭建的环境，用nginx做代理服务器，访问时显示：Invalid Host header

经查是因为新版的webpack-dev-server出于安全考虑，默认检查hostname，如果hostname不是配置内的就不能访问。这样有2中方法，一种是设置跳过host检查，一种是直接host设置成你的地址。  

具体可以看这里：  
[Invalid Host header 服务器域名访问出现的问题](https://blog.csdn.net/Cookysurongbin/article/details/86077241)
