// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import { AjaxPlugin,ToastPlugin} from 'vux'
Vue.use(ToastPlugin)
Vue.use(AjaxPlugin)
Vue.use(MuseUI)
Vue.config.productionTip = false

Vue.prototype.HOST = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
