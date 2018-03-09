import Vue from 'vue'
import App from '../App'
import router from './router'
import store from './store'

//引入公共css
import '../../common/css/reset.css'
import '../../common/stylus/base.styl'


Vue.config.productionTip = false;

store.init();

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
