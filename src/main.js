import App from './App.vue'

import Vue from 'vue';
import HippyVueHtml from './hippy-vue-html';
Vue.use(HippyVueHtml);

new Vue({
  el: '#app',
  render: h => h(App)
})
