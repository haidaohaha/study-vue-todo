import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
// 解决 1px 物理像素 边框问题
import './assets/styles/border.css'

// 移动端 某些机型 click 事件存在 300 ms 延迟，音响体验
// 安装 fastclick
import fastclick from "fastclick";

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
