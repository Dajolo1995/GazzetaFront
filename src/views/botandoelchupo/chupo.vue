<template>
    <div>
       <h4 class="tittle">{{Chupo.titulo}}</h4> 
    </div>
</template>

<script>

import axios from 'axios'

export default {
      data() {
    return {
      Chupo: [],
      error: ''
    }
  },

  methods: {
    async getChupo(){
      try {
        const res = await axios.get(`${process.env.VUE_APP_RUTA_API}/noticias/list`);
        this.Chupo = res.data;
      } catch (error) {
        console.error(error.response);
        this.error = error.response.data;
      }
    },
  },

  mounted() {
    this.getChupo();
  },

  created() {
      let index = this.$route.params.index

      this.chupo = this.obra.find(o =>o.index == index)
  },
}
</script>
