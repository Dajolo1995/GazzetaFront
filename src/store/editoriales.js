'use strict'


export default {
    namespaced:true,
    state:{
        editoriales:[]
    },

    mutations: {
      setEditoriales (state, editoriales) {
        state.editoriales = editoriales;
      }
    },

}