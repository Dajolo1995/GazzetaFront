<template>
  <div class="container editorial">
    <div class="row">

    <!-- Columnistas uno-->
      <div class="col-sm-6 col-md-6 col-lg-3">
        <b-card
          style="max-width: 20rem; background-color: #836257;"
          class="mb-2 uno">
            <img class="plastilinaCon" src="@/assets/emily.png" alt="" width="200">            
            <h5 class="cp">{{editorial.titulo}}</h5>
            <hr>
            <b-btn variant="link" :to="{name:'plastilinaUno'}" style="color:#000;" >[[Leer...]]</b-btn>

            </b-card>
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
