<template>
  <div class="container editorial">
    <div class="row">
      <div class="col-md-12">
        <h3 class="pestaña">La Pue'tta</h3>
      </div>
    </div>
    
    <div  v-for="(Chupo, index) in Chupo" :key="index">   
      <div class="row pestaña">
        <div class="col-md-12">
          <div>
            <img class="memes" :src="Chupo.link">            
          </div>

          <div class="tex">   
            <p style="display: none">❝{{imagen}}❞</p>  

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
        const res = await axios.get(`${process.env.VUE_APP_RUTA_API}/memes/list`);
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
            `${process.env.VUE_APP_RUTA_API}/memes/obtenerImagen?link=${element.imagen}`,
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