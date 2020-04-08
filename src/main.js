import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import VTitle from 'v-title'
import App from './App.vue'
import 'v-title/lib/element-ui';

Vue.use(VTitle);
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
