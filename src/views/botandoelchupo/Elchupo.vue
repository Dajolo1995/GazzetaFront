<template>
  <div class="container editorial">
    <div class="row">
      <div class="col-md-12">
        <h3 class="pestaña">Botando el Chupo</h3>
      </div>
    </div>
    
    <div  v-for="(Chupo, index) in Chupo" :key="index">   
      <div class="row">
        <div class="col-md-12 editor">
          <div class="foto">
            <img :src="Chupo.link">            
          </div>

          <div class="tex">
            <h4 class="tittle">{{Chupo.titulo}}</h4>      
            <p style="display: none">❝{{imagen}}❞</p>               
            <p class="texto">❝{{Chupo.parrafoUno}}❞</p>
            <p class="texto">❝{{Chupo.parrafoDos}}❞</p>
            <p class="texto">❝{{Chupo.parrafoTres}}❞</p>
            <p class="nombre">{{Chupo.autor}}</p>
            <b-btn variant="success" :to="{name:'chupo', params: {index: Chupo.titulo}}">leer</b-btn>  
            <hr>    
         </div>
        </div>
       </div>
    </div>  
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      Chupo: [],
      error: "",
      hola: "youtube.com",
      imagen: ""
    };
  },

  methods: {
    async getChupo() {
      try {
        const res = await axios.get(`${process.env.VUE_APP_RUTA_API}/noticias/list`);
        this.Chupo = res.data;
        this.obtImg();
      } catch (error) {
        console.error(error);
        //this.error = error.response.data;
      }
    },

    obtImg() {

  
      this.Chupo.forEach(element => {
        
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

            const index = this.Chupo.indexOf(element);

            this.Chupo[index].link = url;
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
    this.getChupo();
  }
};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&family=Noto+Sans:ital@1&family=Signika:wght@300&display=swap");
.editorial {
  padding: 70px;
}

.pestaña {
  text-align: center;
  font-family: 'Kirang Haerang', cursive;
  font-weight: 300;
  font-size: 32px;
  margin-bottom: 70px;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
.editor {
  overflow: hidden;
  margin-bottom: 20px;
}
.imagen {
  max-width: 100px;
  width: 100%;
  vertical-align: top;
  border-radius: 100%;
}
.tex {
  float: right;
  width: 80%;
}
.texto {
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "Noto Sans", sans-serif;
}

.nombre {
  color: #ddb146;
  font-size: 14p;
}

.fecha {
  color: #ccc;
  opacity: 0.3;
}

.titulo {
  color: black;
}
</style>