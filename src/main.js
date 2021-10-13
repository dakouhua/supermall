import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)

//使用fastclick  解决移动端300ms延迟
Fastclick.attach()
//使用图片懒加载
Vue.use(VueLazyload,{
  loading: require('./assets/imgs/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
