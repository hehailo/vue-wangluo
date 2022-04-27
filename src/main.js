import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式
import '@/styles/index.less'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 移动端适配
import 'amfe-flexible'

// vat 懒加载
import { Lazyload } from 'vant';

// 引入mock
import "@/mock"

Vue.use(Vant);
Vue.use(Lazyload);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
