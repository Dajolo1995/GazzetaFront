<template>
  <div class="container editorial">
    <div class="row">
      <div class="col-md-12">
        <h3 class="pestaña">Con Plastilina</h3>
      </div>
    </div>
    

    
    <div  v-for="(Plastilina, index) in Plastilinas" :key="index">   

      <div class="row">
        <div class="col-md-4 editor">
          <div class="foto">
            <img class="foto" :src="Plastilina.link"> 
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 editor">
          <div class="tex">
          <br>
            <p style="display: none">❝{{imagen}}❞</p> 
            <b-btn variant="link" :to="{name:'invi', params: {id: Plastilina._id}}" style="color:#000;"><h4 class="tittle">{{Plastilina.titulo}}</h4> </b-btn> 
            <br/>                   
            <p class="texto" style="font-family: 'Special Elite', cursive;">{{Plastilina.parrafo}} <b-btn variant="link" :to="{name:'invi', params: {id: Plastilina._id}}" style="color:#000;">[[Leer mas...]]</b-btn> </p>        
            <p>Escrito por: <strong class="nombre" style="color: #F65000;"> {{Plastilina.autor}}</strong></p>   
            <hr>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      Plastilinas: [],
      error: '',
      imagen: ""
    }
  },

  methods: {
    async getPlastilinas(){
      try {
        const res = await axios.get(`${process.env.VUE_APP_RUTA_API}/invitado/list`);
        this.Plastilinas = res.data;
        this.obtImg();
      console.clear();
        console.log(res.data);

      } catch (error) {
        console.error(error.response);
        // this.error = error.response.data;
      }
    },
      obtImg() {

  
      this.Plastilinas.forEach(element => {
        
        if(element.imagen){
          axios
          .get(
            `${process.env.VUE_APP_RUTA_API}/noticias/obtenerImagen?link=${element.imagen}`,
            { responseType: "arraybuffer" }
          )
          .then(res => {
            const url = window.URL.createObjectURL(
              new Blob([res.data], { type: "image/png" })
            );

            const index = this.Plastilinas.indexOf(element);

            this.Plastilinas[index].link = url;
            this.imagen = url;
          })
          .catch(err => {
            // this.reporteError = err.response.data;
            console.error(err);
          });
        }
      });
    }
  
    
  },

  mounted() {
    this.getPlastilinas();
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&family=Noto+Sans:ital@1&family=Signika:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Special+Elite&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gurajada&display=swap');


.editorial{
  padding: 20px;
}
.pestaña{
  text-align: center;
  font-family: 'Barrio', cursive;
  font-weight: 300;
  font-size: 32px;
  margin-bottom: 70px;
  text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
}
.editor{
  overflow: hidden;

}
.foto{
  max-width: 400px;
  width:100%;
  vertical-align: top;
  border-radius: 0%;
}

.tex{
  float: right;
  width: 100%;
}

.texto{
  font-size: 20px;
  margin-bottom: 15px;
}
.nombre{
  font-size: 20px;
  font-family: 'Sue Ellen Francisco', cursive;
  margin-bottom: 3px;
}
.fecha{
  color: #ccc;
  opacity:0.3 ;
}
.titulo{
  color: black;
  
}
</style>