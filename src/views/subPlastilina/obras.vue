<template>
    <div>
       <h1>{{Plastilina.titulo}}</h1>
    </div>
</template>

<script>

import axios from 'axios'

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
        const res = await axios.get(`${process.env.VUE_APP_RUTA_API}/plastilina/list`);
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

  created() {
      let index = this.$route.params.index

      this.obra = this.obra.find(o =>o.index == index)
  },
}
</script>
