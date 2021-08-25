import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home' 
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/channel1', component: HelloWorld },
  { path: '/channel2', component: HelloWorld },
  { path: '/channel3', component: HelloWorld },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
