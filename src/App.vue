<template>
  <div class="app"> 
    <b-navbar toggleable="lg" type="dark" style="background-color: #d2a065;">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name:'editoriales'}">Editorial</b-nav-item>
          <b-nav-item :to="{name:'plastilina'}">Con Plastilina</b-nav-item> 
          <b-nav-item :to="{name:'emily'}">La Niña Emily</b-nav-item>
          <b-nav-item :to="{name:'invitado'}" >Invitados</b-nav-item>
          <b-nav-item disabled :to="{name:'bolita'}">Bolita E' Mundo</b-nav-item>
          <b-nav-item-dropdown>
            <template v-slot:button-content>
              <em>La Pue'ta</em>
            </template>
            <b-dropdown-item :to="{name:'memes'}">Memes</b-dropdown-item>
            <b-dropdown-item :to="{name:'lapueta'}">Arte y cultura</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item :to="{name:'elchupo'}">Botando el Chupo</b-nav-item>
          <b-nav-item disabled :to="{name:'pods'}">27 O.fm</b-nav-item>
         <!-- <b-nav-item @click="handleEpayco">Apoyanos</b-nav-item> -->
      <!--    <b-nav-item :to="{name:'prueba'}">Apoyanos</b-nav-item>-->
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name:'login'}" right > Sign In</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="gazetta">
      <b-btn variant="default" :to="{path:'/'}">
        <img class="btnImage" src="@/assets/sin.png" alt="" width="200px">
      </b-btn>
    </div>
    <hr>

   <b-container>
      <router-view></router-view>
    </b-container> 


    <div class="redes">
      <div class="social">
        <a class="twitter" href="https://twitter.com/LosNadieGazetta"><img src="@/assets/gorjeo.png" width="100px"></a>
        <br/>
        <br/>
        <a class="instagram" href="https://www.instagram.com/losnadie27o/"><img src="@/assets/insta.png" width="100px"></a>

      </div>
    </div>


    <hr>
    <div class="footer">
        <div class="gzetta">
      <div class="row">
        <div class="col-sm-6 col-md-3 col-lg-12">
          <b-btn variant="default" :to="{path:'/'}">
            <h2 class="letraUno">G@zzeπa </h2>
          </b-btn>
        </div>     
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-3 col-lg-12">
          <b-btn variant="default" :to="{path:'/'}">
            <h2 class="ln">Los Nadie del 27 de Octubre</h2>
          </b-btn>
        </div>     
      </div>

      

      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-12 copy" >
          <p>© copyright-Colombia 2020</p>
          <p>losnadie@gazzettalosnadie27oct.com </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      titulo: " Los Nadie de la 27 de Octubre"
    };
  },

  methods: {
    seleccionar(nombre) {
      this.$router.push({ name: nombre });
    },

    handleEpayco() {
      const apiHost = process.env.VUE_APP_RUTA_API;

      /** Cargar librería ePayco */
      let aScript = document.createElement("script");
      aScript.type = "text/javascript";
      aScript.src = "https://checkout.epayco.co/checkout.js";
      document.head.appendChild(aScript);

      var handler = null;

      /**Inicializar configuración de ePayco */
      aScript.onload = function() {
        handler = window.ePayco.checkout.configure({
          key: "1293196018f1f518b741ed2326db9c79", //PUBLIC_KEY
          test: true //Determina si el pago es de prueba
        });
        var data = {
          //Parametros compra (obligatorio)
          name: `Hacer una donación`,
          description: `Gracias por su donación, por favor continue.`,
          currency: "cop",
          amount: "150000",
          tax_base: "0",
          tax: "0",
          country: "co",
          lang: "es",

          //Onpage="false" - Standard="true"
          external: "true",

          response: `${apiHost}/epayco/donaciones`, //API que recogerá la acción del pago
          //Atributos cliente
          name_billing: "",
          address_billing: "",
          type_doc_billing: "cc",
          mobilephone_billing: "",
          number_doc_billing: ""
        };
        handler.open(data); //Abrir pasarela
      };
    },
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Great+Vibes");
@import url('https://fonts.googleapis.com/css2?family=Frijole&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');




.gazetta {
  padding: 10px;
  margin: 5px;
  text-align: center;
}

.btnImage{
  border-radius: 1000%;
}

.redes{
  width: 95%;
  max-width: 900px;
  padding: 32px 64px;
  margin:auto;
}

.social{
  width: 50px;
  position: fixed;
  top: 300px;
  right: 20px;
}

.social:hover{
  -webkit-animation: tiembla 0.2s 4;
  -moz-animation: tiembla 0.2s 4;
  -o-animation: tiembla 0.2s 4;
 -ms-animation: tiembla 0.2s 4;
}

@-webkit-keyframes tiembla{
  0%  { -webkit-transform:rotateZ(-5deg); }
  50% { -webkit-transform:rotateZ( 0deg) scale(1.4); }
  100%{ -webkit-transform:rotateZ( 5deg); }
}

.app {
  background-position: 25% #f5f5f5; 
}
.gzetta {
  padding: 10px;
  margin: 5px;
  text-align: center;
  font-family: 'Kirang Haerang', cursive;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(158, 22, 22, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}

.footer {
background: rgba(243,226,199,1);
background: -moz-linear-gradient(left, rgba(243,226,199,1) 0%, rgba(210,160,101,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(243,226,199,1)), color-stop(100%, rgba(210,160,101,1)));
background: -webkit-linear-gradient(left, rgba(243,226,199,1) 0%, rgba(210,160,101,1) 100%);
background: -o-linear-gradient(left, rgba(243,226,199,1) 0%, rgba(210,160,101,1) 100%);
background: -ms-linear-gradient(left, rgba(243,226,199,1) 0%, rgba(210,160,101,1) 100%);
background: linear-gradient(to right, rgba(243,226,199,1) 0%, rgba(210,160,101,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3e2c7', endColorstr='#d2a065', GradientType=1 );
}

.ln{ 
  font-family: "Great Vibes", cursive !important;
  font-size: 32px;
}

.copy{
  font-size: 9px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.letraUno{
font-size: 26px;
}
</style>
