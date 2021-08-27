import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home' 
import HelloWorld from '@/components/HelloWorld'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Optionally install the BootstrapVue icon components plugin


Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faBars)


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/JVNonsense', component: HelloWorld },
  { path: '/JVClips', component: HelloWorld },
  { path: '/channel3', component: HelloWorld },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
