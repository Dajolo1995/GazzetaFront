import Vue from 'vue'
import VueRouter from 'vue-router'
import Portada from '../views/Portada.vue'
import notFound from '../views/notFound.vue'

import Login from '../views/ingreso/Login.vue'
import Perfil from '../views/ingreso/Perfil.vue'
import Prueba from '../views/ingreso/Prueba.vue'

import conPlastilina from '../views/subPlastilina/conPlastilina.vue'
import plastilinaUno from '../views/subPlastilina/plastilinaUno.vue'
import obras from '../views/subPlastilina/obras.vue'
import Menor from '../views/subPlastilina/Menor.vue'
import Ikkaros from '../views/subPlastilina/Ikkaros.vue'

import Elchupo from '../views/botandoelchupo/Elchupo.vue'
import chupo from '../views/botandoelchupo/chupo.vue'

import Editoriales from '../views/losNadie/Editoriales.vue'
import Bolita from '../views/losNadie/Bolita.vue'
import Emily from '../views/losNadie/Emily.vue'

import laPueta from '../views/SupPueta/laPueta.vue'
import Memes from '../views/SupPueta/Memes.vue'

import Podscat from '../views/losNadie/Podscat.vue'
import store from "../store"
import PaymentSuccess from '../views/payments/PaymentSuccess.vue'

import Invitados from '../views/losNadie/Invitados.vue'

// import Lita from '../views/subPlastilina/Lita.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'portada',
      component: Portada
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },    
    {
      path: '/Prueba',
      name: 'prueba',
      component: Prueba
    },
    {
      path: '/editoriales',
      name: 'editoriales',
      component: Editoriales
    },
    {
      path: '/invitado',
      name: 'invitado',
      component: Invitados
    },
    {
      path: '/con-plastilina',
      name: 'plastilina',
      component: conPlastilina
    },
    {
      path: '/emily',
      name: 'plastilinaUno',
      component: plastilinaUno
    },
    {
      path: '/bolitaemundo',
      name: 'bolita',
      component: Bolita
    },
    {
      path: '/podscat',
      name: 'pods',
      component: Podscat
    },
    {
      path: '/lapueta',
      name: 'lapueta',
      component: laPueta
    },
    {
      path: '/emily',
      name: 'emily',
      component: Emily
    },    
    {
      path: '/elchupo',
      name: 'elchupo',
      component: Elchupo
    },
    {
      path: '/elchupo/:index',
      name: "chupo",
      component: chupo
    },

    {
      path: '/hermanito-menor',
      name: 'menor',
      component: Menor
    },
    {
      path: '/ikkaros',
      name: 'ikkaros',
      component: Ikkaros
    },
    // {
    //   path: '/doña-lita',
    //   name: 'lita',
    //   component: Lita
    // },
    {
      path: '/memes',
      name: 'memes',
      component: Memes
    },

    {
      path: 'La-Niña-Emily/:index',
      name: "obras",
      component: obras
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil,
      // meta: {autenticado: true}
    },
    {
      path: '/paymentsuccess',
      name: "paymentsuccess",
      component: PaymentSuccess
    },

    {
      path: '/404',
      name: '404',
      component: notFound
    },
    {
      path: '/*',
      component: notFound
    },

  ]
})

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.autenticado)) {
    console.log('usuario: ', store.state.sesion.usuario)
    if (store.state.sesion.usuario) {
      console.log("s");
      next()
    }
    else {
      next({ name: 'login' })
    }
  }
  else {
    next()
  }
})

export default router
