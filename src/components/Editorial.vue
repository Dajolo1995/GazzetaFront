<template>
  <div class="container editorial">  
    <div class="row">
      <div class="col-md-6 editor">
        <div class="foto">
            <img src="@/assets/otra.png" >            
          </div>
        </div>
    </div>

    <div class="row">
      <div class="col-md-12 editor">
        <div class="tex">
          <b-btn variant="link" :to="{name:'editoriales'}" ><h4 class="tittle">{{editorial.titulo}}</h4></b-btn>
            <br>                    
          </div>
        </div>
        </div>  
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      editorial: {}
    };
  },
  computed: {
    ...mapState("editoriales", ["editoriales"])
  },
  methods: {
    ...mapMutations('editoriales', ['setEditoriales']),
    async getEditoriales() {
      try {
        const res = await axios.get(
          `${process.env.VUE_APP_RUTA_API}/editor/list`
        );
        console.log(res.data);
        this.setEditoriales(res.data);
        let ultimaPos = 0
        this.editorial = res.data[ultimaPos];
      } catch (error) {
        console.error(error);
        // this.error = error.response.data;
      }
    }
  },
  async mounted() {
    this.getEditoriales();
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&family=Noto+Sans:ital@1&family=Signika:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Special+Elite&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap');



</style>
