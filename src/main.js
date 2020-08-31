import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import axios from 'axios'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.config.productionTip = false
axios.default.baseUrl=`${process.env.VUE_APP_RUTA_API}`

let token = localStorage.userToken;
if(token){
  store.dispatch('sesion/inicioSesion', token);
}else{
  store.dispatch('sesion/cerrarSesion');
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
