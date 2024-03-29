import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'

Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})