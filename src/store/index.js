import Vue from 'vue'
import Vuex from 'vuex'
import sesion from './sesion'
import plastilinaEmi from './plastilinaEmi'
import editoriales from './editoriales'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    sesion,
    plastilinaEmi,
    editoriales
  },
  getters: {

  }
})
