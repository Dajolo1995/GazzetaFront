<template>
    <div class="prueba">
        <div class="container">
            <div class="row">

                <div class=" Apoyanos col-sm-6 col-md-6 col-lg-3">                       
                    <b-card
                        style="max-width: 60em; background: url('otra.png');"
                        class="mb-2">
                        <img class="otra" src="@/assets/otra.png" alt="" width="200px">
                        <b-alert show variant="danger">
                            <h4 class="alert-heading">404: NOT_FOUND</h4>
                            <p>Code: NOT_FOUND</p>
                             <hr>
                            <p class="mb-0">ID: chs1::6rdzk-1590298029370-74743b85cce5</p>
                            <b-btn variant="info" :to="{path:'/'}">to return</b-btn>
                        </b-alert>
                    </b-card>



                     <!-- 
                    <b-card
                        style="max-width: 20em; background: url('otra.png');"
                        class="mb-2">
                        <img class="otra" src="@/assets/sin.png" alt="" width="200px">
                        <h2 class="fuentes-pruebas">{{paquetes.valor1}}</h2>         
                        <b-button variant="outline-warning" style="text-align:center">Join</b-button>
                        <b-card-text> La parla de la donacion</b-card-text>      
                    </b-card>
                    -->
                </div>
                <!--
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <b-card
                        style="max-width: 20em; background: url('otra.png');"
                        class="mb-2">
                        <img class="otra" src="@/assets/sin.png" alt="" width="200px">
                        <h2 class="fuentes-pruebas">{{paquetes.valor2}}</h2>         
                        <b-button variant="outline-warning" style="text-align:center">Join</b-button>
                        <b-card-text> La parla de la donacion</b-card-text>      
                    </b-card>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-3">
                    <b-card
                        style="max-width: 20em; background: url('otra.png');"
                        class="mb-2">
                        <img class="otra" src="@/assets/sin.png" alt="" width="200px">
                        <h2 class="fuentes-pruebas">{{paquetes.valor3}}</h2>         
                        <b-button variant="outline-warning" style="text-align:center">Join</b-button>
                        <b-card-text> La parla de la donacion</b-card-text>      
                    </b-card>
                </div>                

                <div class="col-sm-6 col-md-6 col-lg-3">
                    <b-card
                        style="max-width: 20em; background: url('otra.png');"
                        class="mb-2">
                        <img class="otra" src="@/assets/sin.png" alt="" width="200px">
                        <h2 class="fuentes-pruebas">{{paquetes.valor4}}</h2>         
                        <b-button variant="outline-warning" style="text-align:center">Join</b-button>
                        <b-card-text> La parla de la donacion</b-card-text>      
                    </b-card>
                </div>
                     -->

            </div>
        </div>
    </div>    
</template>
    
<script>
export default {
    data() {
        return {
            paquetes: {
                valor1: '$10.000',
                valor2: '$20.000',
                valor3: '$50.000',
                valor4: '$100.000'
            }
        }
    },
}
</script>




<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
.boton-pago{
    text-align: center
}
.fuentes-pruebas{
    font-family: 'Permanent Marker', cursive;
    color: #0a97b0;
}

.otra{
    padding: 10px;
    margin: 5px;
    text-align: center;
}

</style>
