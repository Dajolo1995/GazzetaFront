<template>
  <div class="container Plastilina">
    <div class="row">
      <div class="col-md-12">
        <h3 class="pestaña">Con Plastilina</h3>
      </div>
    </div>
    
    <div  v-for="(Plastilina, index) in Plastilinas" :key="index">   
      <div class="row">
        <div class="col-md-12 cplastilina">
          <div class="foto">
            <img class="plastilina" src="@/assets/ika.png" alt="">
          </div>
          <div class="tex">
            <h4 class="plastilinaTittle">{{Plastilina.titulo}}</h4>
            <br/>                     
            <p class="plastilinaTexto">{{Plastilina.parrafoUno}}</p>
            <p class="plastilinaTexto">{{Plastilina.parrafoDos}}</p>
            <p class="plastilinaTexto">{{Plastilina.parrafoTres}}</p>
            <p class="plastlinaAutor">Doña Lita</p>  
            <b-btn variant="success" :to="{name:'obras', params: {index: Plastilina.titulo}}">leer</b-btn>
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
      error: ''
    }
  },

  methods: {
    async getPlastilinas(){
      try {
        const res = await axios.get(`${process.env.VUE_APP_RUTA_API}/lita/list`);
        this.Plastilinas = res.data;
      } catch (error) {
        console.error(error.response);
        this.error = error.response.data;
      }
    },
  },

  mounted() {
    this.getPlastilinas();
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&family=Noto+Sans:ital@1&family=Signika:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Special+Elite&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barrio&display=swap');


.editorial{
  padding: 70px;
}

.pestaña{
  text-align: center;
  font-family: 'Signika', sans-serif;
  font-weight: 300;
  font-size: 32px;
  margin-bottom: 70px;
}
.editor{
  overflow: hidden;
  margin-bottom: 20px;
}
.plastilina{
  max-width: 100px;
  width:100%;
  vertical-align: top;
  border-radius: 100%;
}
.tex{
  float: right;
  width: 80%;
}
.plastilinaTexto{
  font-size: 18px;
  margin-bottom: 10px;
  font-family: 'Special Elite', cursive;
  color: #000;
}

.plastlinaAutor{
  color: #ddb146;
  font-size: 14p;
  font-family: 'Parisienne', cursive;
}

.fecha{
  color: #ccc;
  opacity:0.3 ;
}

.plastilinaTittle{
  color: black;
  
}

</style>