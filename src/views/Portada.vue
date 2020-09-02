<template>
  <div class="container portada">
    <div class="row">
      <div class="col-md-12">
        <br>
        <h3 class="pestaña">El Cuento de Hoy</h3>
      </div>
    </div>

          
              <Editorial/> 
 
            <plastilina/>
  
              <ikkaros/>

              <menor/>  

                  
    <b-container>
      <router-view></router-view>
    </b-container>
            
    </div>

    
</template>
    
<script>
import Editorial from "@/components/Editorial.vue";
import plastilina from "@/components/plastilina.vue";
import ikkaros from "@/components/ikkaros.vue";
import menor from "@/components/menor.vue";


export default {
  components: { Editorial, plastilina, ikkaros, menor},
  name: "Home",
  data() {
    return {
      editorial: ""
    };
  },
  methods: {
    seleccionar(nombre) {
      this.$router.push({ name: nombre });
    }
  }
};
</script>


<style>
.tiPortada {
  padding: 20px;
  text-align: center;
  font-family: "Great Vibes", cursive;
}
</style>