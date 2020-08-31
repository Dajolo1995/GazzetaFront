<template>
  <div class="container portada">
    <div class="row">
      <div class="col-md-12">
        <br>
        <h3 class="pestaña">Los Nadie</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8">
        <b-card-group deck >
          <b-card style=" background: url('otra.png');"> 
            <plastilina/>
          </b-card>  
        </b-card-group>      
      </div>
    </div>

    <hr>
    <br>

    <div class="row">
      <div class="col-md-8">
        <b-card-group deck >
          <b-card style=" background: url('otra.png');"> 
              <ikkaros/>
          </b-card>  
          </b-card-group>      
        </div>
      </div>

     
      <hr>
      <br>

      <div class="row">
        <div class="col-md-8">
          <b-card-group deck >
            <b-card style=" background: url('otra.png');"> 
              <Editorial/> 
            </b-card>  
          </b-card-group>      
        </div>
      </div>

      
      <hr>  
      
                   
    <b-container>
      <router-view></router-view>
    </b-container>
            
    </div>

    
</template>
    
<script>
import Editorial from "@/components/Editorial.vue";
import plastilina from "@/components/plastilina.vue";
import ikkaros from "@/components/ikkaros.vue";

export default {
  components: { Editorial, plastilina, ikkaros },
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