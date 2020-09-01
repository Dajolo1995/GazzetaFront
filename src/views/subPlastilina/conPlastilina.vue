<template>
  <div>
    <div class="container plastilina">
      <div class="row">
        <div class="col-md-12">
          <h3 class="pestaña">Con Plastilina</h3>
        </div>
      </div>
    </div>

     <!-- Columnistas -->

    <div class="container">
      <div class="row">

          <!-- Columnistas uno-->
        <div class="col-sm-6 col-md-6 col-lg-3">
          <b-card
            style="max-width: 20rem; background-color: #836257;"
            class="mb-2 uno">
            <img class="plastilinaCon" src="@/assets/emily.png" alt="" width="200">
            <h2 class="cp">La niña Emily</h2>
            <br>
              <b-button :to="{name:'plastilinaUno'}" variant="outline-dark">Columnas</b-button>
              <hr>
              <!-- <div>
               <b-button v-b-modal.modal-20 variant="outline-info" Disabled >Informacion</b-button> 
                <b-modal id="modal-20" title="Primer Columnista" >
                  <p class="my-4">Hola aqui va la informacion del primer columnista. Muchas Gracias</p>
                  <p class="my-4">Esto es la prueba de un parrafo</p>                
                </b-modal>
              </div> -->
            </b-card>
          </div>

          <!-- Columnistas dos-->
        <div class="col-sm-6 col-md-6 col-lg-3">
          <b-card
            style="max-width: 20rem; background-color: #e7e7e5;"
            class="mb-2 uno">
            <img class="plastilinaCon" src="@/assets/ika.png" alt="" width="200">
            <h2 class="cp">Ikkaros</h2>
            <br>
              <b-button :to="{name:'ikkaros'}" variant="outline-dark">Columnas</b-button>
              <hr>
              <div>
               <!--<b-button v-b-modal.modal-21 variant="outline-info">Informacion</b-button> --> 
                <b-modal id="modal-21" title="Primer Columnista" >
                  <p class="my-4">Hola aqui va la informacion de Ikkaros. Muchas Gracias</p>               
                </b-modal>
              </div>
            </b-card>
          </div>


          <!-- Columnistas tres-->
        <div class="col-sm-6 col-md-6 col-lg-3">
          <b-card
            style="max-width: 20rem; background-color: #b5c1d9;"
            class="mb-2 uno">
            <img class="plastilinaCon" src="@/assets/menor.jpg" alt="" width="200">
            <h2 class="cp">Hermanito Menor</h2>
            <br>
              <b-button :to="{name:'menor'}" variant="outline-dark">Columnas</b-button>
              <hr>
              <div>
               <!--<b-button v-b-modal.modal-22 variant="outline-info">Informacion</b-button> --> 
                <b-modal id="modal-22" title="Primer Columnista" >
                  <p class="my-4">Hola aqui va la informacion de Ikkaros. Muchas Gracias</p>               
                </b-modal>
              </div>
            </b-card>
          </div>
      </div>      
    </div>
  </div>
</template>



<style>

@import url('https://fonts.googleapis.com/css2?family=Barriecito&display=swap');

.plastilinaCon{
  padding: 10px;
  margin: 5px;
  text-align: center;
}
.cp{
  font-family: 'Barriecito', cursive;
  font-size: 20px;
  text-align: center;
}

</style>
