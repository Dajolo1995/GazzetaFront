<template>
  <div class="container editorial">  
    <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-3">
    <b-card class="ediEstilos"
       style="max-width: 22rem;" >
       <p class="cp">Editorial</p>
      <img class="invitados" src="@/assets/invitado.jpeg" alt="">
      <b-card-text>
      <br>
      <h5 class="cp">{{editorial.titulo}}</h5>
      <h6>Invitado: <p>Hugo Cubillos</p></h6>
      <b-btn variant="link" :to="{name:'editoriales'}" style="color:#000;" >[[Leer...]]</b-btn>
      <hr>       
      </b-card-text>
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
          `${process.env.VUE_APP_RUTA_API}/invitado/list`
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

.invitados{
    max-width: 200px;
    width: 100%;
    vertical-align: top;
    border-radius: 0%;
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
