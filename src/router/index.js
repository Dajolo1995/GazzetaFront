import Vue from 'vue'
import VueRouter from 'vue-router'
import Portada from '../views/Portada.vue'


import Login from '../views/ingreso/Login.vue'
import Perfil from '../views/ingreso/Perfil.vue'
import Prueba from '../views/ingreso/Prueba.vue'



import Plastilina from '../views/subPlastilina/niña-emily/Plastilina.vue'
// La niña emiy
import conPlastilina from '../views/subPlastilina/conPlastilina.vue'
import plastilinaUno from '../views/subPlastilina/niña-emily/plastilinaUno.vue'

// IKKAROS
import Ikkaros from '../views/subPlastilina/ikkaros/Ikkaros.vue'
import ikaros from '../views/subPlastilina/ikkaros/ikaros.vue'

//MENOR
import Menor from '../views/subPlastilina/hermanitoMenor/Menor.vue'
import menorHermano from '../views/subPlastilina/hermanitoMenor/menorHermano.vue'



import Elchupo from '../views/botandoelchupo/Elchupo.vue'
import chupo from '../views/botandoelchupo/chupo.vue'

/** LOS NADIE */

//EDITORIAL
import Editoriales from '../views/losNadie/Editorials/Editoriales.vue'
import editorial from '../views/losNadie/Editorials/editorial.vue'



import Bolita from '../views/losNadie/Bolita.vue'
import Emily from '../views/losNadie/Emily.vue'
import Podscat from '../views/losNadie/Podscat.vue'

//INVITADOS
import Invitados from '../views/losNadie/invitadoos/Invitados.vue'
import invita from '../views/losNadie/invitadoos/invita.vue'

import laPueta from '../views/SupPueta/laPueta.vue'
import Memes from '../views/SupPueta/Memes.vue'


import store from "../store"
import PaymentSuccess from '../views/payments/PaymentSuccess.vue'


import notFound from '../views/notFound.vue'

// import Lita from '../views/subPlastilina/Lita.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    // PORTADA
    {
      path: '/',
      name: 'portada',
      component: Portada
    },

    //INGRESO Y PERFIL
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil,
      // meta: {autenticado: true}
    },

    //EDITORIAL
    {
      path: '/editorial',
      name: 'editoriales',
      component: Editoriales
    },
    {
      path: '/editoriales/:id',
      name: 'editorial',
      component: editorial
    },

    //CON PLASTILINA
    {
      path: '/con-plastilina',
      name: 'plastilina',
      component: conPlastilina
    },

    //CON PLASTILINA LA NIÑA EMILY
    {
      path: '/emily',
      name: 'plastilinaUno',
      component: plastilinaUno
    },

    {
      path: '/La-Niña-Emily/:id',
      name: "niña-emily",
      component: Plastilina
    },

    //CON PLASTILINA IKKAROS 

    {
      path: '/ikkaros',
      name: 'ikkaros',
      component: Ikkaros
    },
    {
      path: '/ikkaros/:id',
      name: 'ikaros',
      component: ikaros
    },

    //CON PLASTILINA HERMANITO MENOR
    {
      path: '/hermanito-menor',
      name: 'menor',
      component: Menor
    },
    {
      path: '/menor/:id',
      name: 'menorH',
      component: menorHermano
    },


    //LA NIÑA EMILY
    {
      path: '/nina-emily',
      name: 'emily',
      component: Emily
    },

    //INVITADOS
    {
      path: '/invitado',
      name: 'invitado',
      component: Invitados
    },

    {
      path: '/invitados/:id',
      name: 'invi',
      component: invita
    },    

    //BOLITA E' MUNDO
    {
      path: '/bolitaemundo',
      name: 'bolita',
      component: Bolita
    },

    //LA PUETA 
    {
      path: '/lapueta',
      name: 'lapueta',
      component: laPueta
    },

    {
      path: '/memes',
      name: 'memes',
      component: Memes
    },

    //BOTANDO EL CHUPO
    {
      path: '/elchupo',
      name: 'elchupo',
      component: Elchupo
    },
    {
      path: '/botando-el-chupo/:id',
      name: "chupo",
      component: chupo
    },

    //PODSCAT
    {
    path: '/podscat',
    name: 'pods',
    component: Podscat
    },

    //PAGOS
    {
      path: '/paymentsuccess',
      name: "paymentsuccess",
      component: PaymentSuccess
    },

    //PRUEBA
    {
      path: '/Prueba',
      name: 'prueba',
      component: Prueba
    },

    //NOT FOUND
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
