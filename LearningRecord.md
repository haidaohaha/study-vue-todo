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
之前的一直看，没留意，现在还不知道 如何 导出 webpack 配置项，/(ㄒoㄒ)/~~  
老师这么骚的操作：  
 @import '~styles/varibles.styl'  
 
我只能先这么写：  
@import '../../../assets/styles/varibles.styl';  
@import '~@/assets/styles/varibles.styl';  

####
