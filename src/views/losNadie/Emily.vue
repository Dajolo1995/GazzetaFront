<template>
  <div class="container editorial">
    <div class="row">
      <div class="col-md-12">
        <h3 class="pestaña">La niña Emily</h3>
      </div>
    </div>

    <div  v-for="(Editoriale, index) in Editoriales" :key="index">   
      <div class="row">
    <div class="emily">
  <b-card no-body class="overflow-hidden" style="  max-width: 800px; background-color: #836257;">
    <b-row no-gutters>
      <b-col md="6">
        <img  src="@/assets/emily.png" alt="Image" class="plastilinaCon" width="200">
      </b-col>
      <b-col md="6">
            <h4 class="tittlee"></h4>                     
            <p class="textoe">❝Pronto estare con Ustedes ❞</p>
            <a class="buttone" ><b-button disabled variant="outline-success">Ver video</b-button></a>
      </b-col>
    </b-row>
  </b-card>
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
      Editoriales: [],
      error: '',
      hola:'youtube.com'
    }
  },

  methods: {
    async getEditoriales(){
      try {
        const res = await axios.get(`${process.env.VUE_APP_RUTA_API}/emily/list`);
        this.Editoriales = res.data;
      } catch (error) {
        console.error(error.response);
        this.error = error.response.data;
      }
    },
  },

  mounted() {
    this.getEditoriales();
  },
}
</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&family=Noto+Sans:ital@1&family=Signika:wght@300&display=swap');
.editorial{
  padding: 70px;
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
  margin-bottom: 20px;
}
.imagen{
  max-width: 100px;
  width:100%;
  vertical-align: top;
  border-radius: 100%;
}
.tex{
  float: right;
  width: 80%;
}
.texto{
  font-size: 18px;
  margin-bottom: 10px;
   font-family: 'Noto Sans', sans-serif;
}

.nombre{
  color: #ddb146;
  font-size: 14p;
}

.fecha{
  color: #ccc;
  opacity:0.3 ;
}

.titulo{
  color: black;
  
}
.emily{
    overflow: hidden;
    text-align: center;
    padding: 20px;
    margin: 10px;
}

.tittlee{
    padding: 10px;
    margin: 15px;
    color: #000;
}
.textoe{
    padding: 10px;
    margin: 15px;  
}

.buttone{
    overflow: hidden;
    padding: 50px;
    margin: 20px; 
}

</style>