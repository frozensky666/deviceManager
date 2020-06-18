import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/normalize.css'
import JSONView from 'vue-json-viewer'
import req from "./requests/tools"

Vue.prototype.$req = req;
Vue.use(JSONView);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
