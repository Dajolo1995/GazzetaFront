<template>
  <div class="container editorial">
    <div class="row">
      <div class="col-md-12">
        <h3 class="pestaña">Bolita E' Mundo</h3>
      </div>
    </div>
    
    <div  v-for="(Bolita, index) in Bolita" :key="index">   
      <div class="row pestaña">
        <div class="col-md-12">
          <div>
            <img class="memes" :src="Bolita.link">            
          </div>

          <div class="tex">   
            <p style="display: none">❝{{imagen}}❞</p>
            <p>{{Bolita.titulo}}</p>
            <p>{{Bolita.linkeo}}</p>

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
      Bolita: [],
      error: "",
      hola: "youtube.com",
      imagen: ""
    };
  },

  methods: {
    async getBolita() {
      try {
        const res = await axios.get(`${process.env.VUE_APP_RUTA_API}/bolita/list`);
        this.Bolita = res.data;
        this.obtImg();
      } catch (error) {
        console.error(error);
        //this.error = error.response.data;
      }
    },

    obtImg() {

  
      this.Bolita.forEach(element => {
        
        if(element.imagen){
          axios
          .get(
            `${process.env.VUE_APP_RUTA_API}/bolita/obtenerImagen?link=${element.imagen}`,
            { responseType: "arraybuffer" }
          )
          .then(res => {
            const url = window.URL.createObjectURL(
              new Blob([res.data], { type: "image/png" })
            );

            const index = this.Bolita.indexOf(element);

            this.Bolita[index].link = url;
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
    this.getBolita();
  }
};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&family=Noto+Sans:ital@1&family=Signika:wght@300&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap');

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

.memes{
  max-width: 300px;
  width:100%;
  vertical-align: top;
  border-radius: 0%;
}

.memesOne{
    padding: 10px;
    margin: 15px;
    margin-right:auto;
     justify-content: center;
}
    

</style>