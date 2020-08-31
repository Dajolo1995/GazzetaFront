<template>
  <div class="container editorial">  
    <div class="row">
      <div class="col-md-6 editor">
        <div class="foto">
          <img class="fotos" src="@/assets/emily.png" >            
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 editor">
        <div class="tex">
          <br>
          <b-btn  variant="link" :to="{name:'plastilinaUno'}" style="color:#ccc;" ><h4 class="tittle">{{editorial.titulo}}</h4> </b-btn>
          <p class="fecha">{{editorial.fecha}}</p>   
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
          `${process.env.VUE_APP_RUTA_API}/plastilina/list`
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
.plastilinaa{
   padding: 70px;
}

.plasti{
    overflow: hidden;
    margin-bottom: 20px;
}

.fotoPlati{
    width: 20%;
    float: left;
    text-align: right; 
}

img{
    max-width: 200px;
    width: 100%;
    vertical-align: top;
    border-radius: 100%;
}

.fotoPlasti{
    float: right;
    text-align: left;
}

.textplast{
    float: right;
    text-align: left;
}
</style>
