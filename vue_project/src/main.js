import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './common/stylus/style.css'

// 初始化文件
import '@/css/base.css'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
