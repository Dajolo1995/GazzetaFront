'use strict'

import jwtDecode from 'jwt-decode'

export default {
    namespaced: true,
    state: {
      usuario: null
    },
    mutations: {
      async actualizarUsuario(state, user){
        
        state.usuario = user;
      }
    },
    actions: {
      cerrarSesion({commit}) {
        commit('actualizarUsuario', null)
      },

      async inicioSesion({commit}, token){
        commit('actualizarUsuario', token)
        const user = await jwtDecode(token);
        commit('actualizarUsuario', user.user)
      }
    },
    getters: {
      saludo(state) {
        if (!state.usuario) {
          return ''
        }
  
        let vocal = state.usuario.sexo && state.usuario.sexo == 'F' ? 'a' : 'o'
        return `¡Bienvenid${vocal} ${state.usuario.nombres}!`
      },

      getUsuario(state){
        return state.usuario;
      }
    }
  }