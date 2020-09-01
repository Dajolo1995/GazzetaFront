<template>
    <div class="container">

      <div class="row">
        <div class="col-md-4 editor">
          <div class="foto">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm- 12 col-md-8 editor">
          <div class="tex">
             <p>Denuncia de: <strong class="nombre" style="color: #F65000;"> {{Plastilina.autor}}</strong></p>
             <h4 class="tittle">{{Plastilina.titulo}}</h4>
                <br>
              <p class="texto" style="font-family: 'Special Elite', cursive;">{{Plastilina.parrafoUno}}</p>
              <p class="texto" style="font-family: 'Special Elite', cursive;">{{Plastilina.parrafoDos}}</p>
              <p class="texto" style="font-family: 'Special Elite', cursive;">{{Plastilina.parrafoTres}}</p>
          </div>
        </div>
      </div>

               
    </div>
</template>

<script>

import axios from 'axios'

export default {
      data() {
    return {
      Plastilina : {},
      error: ''
    }
  },

  methods: {
    async getPlastilinas(){
      try {
        
        const id = this.$route.params.id;
        const res = await axios.get(`${process.env.VUE_APP_RUTA_API}/noticias/query?_id=${id}`);
        console.clear();
        console.log(res.data);
        this.Plastilina = res.data;
      } catch (error) {
        console.error(error.response);
        this.error = error.response.data;
      }
    },
  },

  mounted() {
    this.getPlastilinas();
  },

  created() {
      let index = this.$route.params.index

      this.obra = this.obra.find(o =>o.index == index)
  },
}
</script>

