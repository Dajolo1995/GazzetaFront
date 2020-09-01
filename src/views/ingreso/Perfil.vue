<template>
  <div class="perfil">
   <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand>G@zetta Los Nadie </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

         <!-- Botando el chupo -->
      <div class="crearEditoral">
        <b-nav-item  v-b-modal.modal-1 >Botando el chupo</b-nav-item>
        <b-modal id="modal-1" title="BootstrapVue">
        <template v-slot:modal-title>
          Crear <code>Chupo</code> 
        </template>
        <b-form-input id="input-small" size="sm" placeholder="Titulo"  v-model="chupo.titulo" ></b-form-input>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="chupo" rows="3" max-rows="8" v-model="chupo.parrafoUno"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="chupo" rows="3" max-rows="8" v-model="chupo.parrafoDos"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="chupo" rows="3" max-rows="8" v-model="chupo.parrafoTres"  ></b-form-textarea>
        <br>                
        <b-form-input id="input-small" size="sm" placeholder="Autor" v-model="chupo.autor"  ></b-form-input>
         
          <!-- Cargar Fotos  -->
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
         <!-- Plain mode -->
          <input type="file" @change="uploadImage" accept="image/*" ref="file" class="mt-3" >
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>


        <b-button variant="light" class="mt-3" @click="crearChupo" >Publicar</b-button>
        <b-button variant="light" class="mt-3"  @click="$bvModal.hide('bv-modal-example')" disabled>crear Editorial</b-button>
      </b-modal>
      </div>

      <!-- Con Plastilina -->
      <div>        
        <b-nav-item  v-b-modal.modal-2>Platilina_Emily</b-nav-item>
        <b-modal id="modal-2" title="BootstrapVue">
          <template v-slot:modal-title>
            Crea <code>La Niña Emily</code> 
          </template>
        <b-form-input id="input-small" size="sm" placeholder="Titulo"  v-model="plastilina.titulo" ></b-form-input>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 1" rows="3" max-rows="8" v-model="plastilina.parrafo"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 2" rows="3" max-rows="8" v-model="plastilina.parrafoDos"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 3" rows="3" max-rows="8" v-model="plastilina.parrafoTres"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 4" rows="3" max-rows="8" v-model="plastilina.parrafoCuatro"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 5" rows="3" max-rows="8" v-model="plastilina.parrafoCinco"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 6" rows="3" max-rows="8" v-model="plastilina.parrafoSeis"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 7" rows="3" max-rows="8" v-model="plastilina.parrafoSiete"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 8" rows="3" max-rows="8" v-model="plastilina.parrafoOcho"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 9" rows="3" max-rows="8" v-model="plastilina.parrafoNueve"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 10" rows="3" max-rows="8" v-model="plastilina.parrafoDies"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 11" rows="3" max-rows="8" v-model="plastilina.parrafoOnce"  ></b-form-textarea>
        <br>                                        
        <b-button variant="light" class="mt-3" @click="crearPlastilina" >Publicar</b-button>
        <b-button variant="light" class="mt-3"  @click="$bvModal.hide('bv-modal-example')" disabled>crear Editorial</b-button>          
        </b-modal>
      </div>

      <!-- Con Plastilina -->
      <div>        
        <b-nav-item  v-b-modal.modal-31>Platilina_menor</b-nav-item>
        <b-modal id="modal-31" title="BootstrapVue">
          <template v-slot:modal-title>
            Crea <code>El Hermano Menor</code> 
          </template>
        <b-form-input id="input-small" size="sm" placeholder="Titulo"  v-model="menor.titulo" ></b-form-input>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 1" rows="3" max-rows="8" v-model="menor.parrafo"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 2" rows="3" max-rows="8" v-model="menor.parrafoDos"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 3" rows="3" max-rows="8" v-model="menor.parrafoTres"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 4" rows="3" max-rows="8" v-model="menor.parrafoCuatro"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 5" rows="3" max-rows="8" v-model="menor.parrafoCinco "  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 6" rows="3" max-rows="8" v-model="menor.parrafoSeis"  ></b-form-textarea>
        <br>   
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 7" rows="3" max-rows="8" v-model="menor.parrafoSiete"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 8" rows="3" max-rows="8" v-model="menor.parrafoOcho"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 9" rows="3" max-rows="8" v-model="menor.parrafoNueve"  ></b-form-textarea>
        <br>   
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 10" rows="3" max-rows="8" v-model="menor.parrafoDiez"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 11" rows="3" max-rows="8" v-model="menor.parrafoOnce"  ></b-form-textarea>
        <br> 
        <br>        
        <b-form-input id="input-small" size="sm" placeholder="Autor" v-model="menor.autor"  ></b-form-input>
        <b-button variant="light" class="mt-3" @click="crearMenor" >Publicar</b-button>
        <b-button variant="light" class="mt-3"  @click="$bvModal.hide('bv-modal-example')" disabled>crear Editorial</b-button>          
        </b-modal>
      </div>

      <!-- Con Plastilina -->
      <div>        
        <b-nav-item  v-b-modal.modal-32>Platilina_ikkaros</b-nav-item>
        <b-modal id="modal-32" title="BootstrapVue">
          <template v-slot:modal-title>
            Crea <code>Ikkaros</code> 
          </template>
        <b-form-input id="input-small" size="sm" placeholder="Titulo"  v-model="ikkaros.titulo" ></b-form-input>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 1" rows="3" max-rows="8" v-model="ikkaros.parrafo"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 2" rows="3" max-rows="8" v-model="ikkaros.parrafoDos"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 3" rows="3" max-rows="8" v-model="ikkaros.parrafoTres"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 4" rows="3" max-rows="8" v-model="ikkaros.parrafoCuatro"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 5" rows="3" max-rows="8" v-model="ikkaros.parrafoCinco "  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 6" rows="3" max-rows="8" v-model="ikkaros.parrafoSeis"  ></b-form-textarea>
        <br>   
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 7" rows="3" max-rows="8" v-model="ikkaros.parrafoSiete"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 8" rows="3" max-rows="8" v-model="ikkaros.parrafoOcho"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 9" rows="3" max-rows="8" v-model="ikkaros.parrafoNueve"  ></b-form-textarea>
        <br>   
        <b-form-textarea id="textarea-auto-height" placeholder="parrafo 10" rows="3" max-rows="8" v-model="ikkaros.parrafoDiez"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 11" rows="3" max-rows="8" v-model="ikkaros.parrafoOnce"  ></b-form-textarea>
        <br>                                  
        <b-button variant="light" class="mt-3" @click="crearIkkaros" >Publicar</b-button>
        <b-button variant="light" class="mt-3"  @click="$bvModal.hide('bv-modal-example')" disabled>crear Editorial</b-button>          
        </b-modal>
      </div>

      <!-- Editorial -->
      <div>        
        <b-nav-item  v-b-modal.modal-3>Editorial</b-nav-item>
        <b-modal id="modal-3" title="BootstrapVue">
          <template v-slot:modal-title>
            Crear <code>Editorial</code> 
          </template>
        <b-form-input id="input-small" size="sm" placeholder="Titulo"  v-model="editorial.titulo" ></b-form-input>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafo"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoDos"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoTres"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoCuatro"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoCinco"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoSeis"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoSiete"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoOcho"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoNueve"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoDiez"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="editorial.parrafoOnce"  ></b-form-textarea>
        <br>                                  
        <b-form-input id="input-small" size="sm" placeholder="Autor" v-model="editorial.autor"  ></b-form-input>
        <b-button variant="light" class="mt-3" @click="crearEditorial" >Publicar</b-button>
        <b-button variant="light" class="mt-3"  @click="$bvModal.hide('bv-modal-example')" disabled>crear Editorial</b-button>          
        </b-modal>
      </div>



      <!-- Emily -->
      <div>        
        <b-nav-item  v-b-modal.modal-4>La niña Emily</b-nav-item>
        <b-modal id="modal-4" title="BootstrapVue">
          <template v-slot:modal-title>
            Crear <code>Emily</code> 
          </template>
        <b-form-input id="input-small" size="sm" placeholder="Titulo"  v-model="emily.titulo" ></b-form-input>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Editorial" rows="3" max-rows="8" v-model="emily.parrafo"  ></b-form-textarea>
        <br>
        <b-button variant="light" class="mt-3" @click="crearEmily" >Publicar</b-button>
        <b-button variant="light" class="mt-3"  @click="$bvModal.hide('bv-modal-example')" disabled>crear Emily</b-button>          
        </b-modal>
      </div>



      <!-- Invitados-->
      <div class="crearEditoral">
        <b-nav-item  v-b-modal.modal-41 >Los Invitados</b-nav-item>
        <b-modal id="modal-41" title="BootstrapVue">
        <template v-slot:modal-title>
          Crear <code>Invitado</code> 
        </template>
        <b-form-input id="input-small" size="sm" placeholder="Titulo"  v-model="invitado.titulo" ></b-form-input>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 1" rows="3" max-rows="8" v-model="invitado.parrafo"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 2" rows="3" max-rows="8" v-model="invitado.parrafoDos"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 3" rows="3" max-rows="8" v-model="invitado.parrafoTres"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 4" rows="3" max-rows="8" v-model="invitado.parrafoCuatro"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 5" rows="3" max-rows="8" v-model="invitado.parrafoCinco"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 6" rows="3" max-rows="8" v-model="invitado.parrafoSeis"  ></b-form-textarea>
        <br> 
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 7" rows="3" max-rows="8" v-model="invitado.parrafoSiete"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 8" rows="3" max-rows="8" v-model="invitado.parrafoOcho"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 9" rows="3" max-rows="8" v-model="invitado.parrafoNueve"  ></b-form-textarea>
        <br> 
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 10" rows="3" max-rows="8" v-model="invitado.parrafoDiez"  ></b-form-textarea>
        <br>
        <b-form-textarea id="textarea-auto-height" placeholder="Parrafo 11" rows="3" max-rows="8" v-model="invitado.parrafoOnce"  ></b-form-textarea>
        <br>                                
        <b-form-input id="input-small" size="sm" placeholder="Autor" v-model="invitado.autor"  ></b-form-input>
         
          <!-- Cargar Fotos  -->
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
         <!-- Plain mode -->
          <input type="file" @change="uploadImage" accept="image/*" ref="file" class="mt-3" >
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>


        <b-button variant="light" class="mt-3" @click="crearInvitado" >Publicar</b-button>
        <b-button variant="light" class="mt-3"  @click="$bvModal.hide('bv-modal-example')" disabled>crear Editorial</b-button>
      </b-modal>
      </div>


      <!-- La Pue'tta en memes -->
      <div class="crearEditoral">
        <b-nav-item  v-b-modal.modal-40 >Memes la Puetta</b-nav-item>
        <b-modal id="modal-40" title="BootstrapVue">
        <template v-slot:modal-title>
          Crear <code>Chupo</code> 
        </template>
        <b-form-input id="input-small" size="sm" placeholder="Titulo"  v-model="memes.titulo" ></b-form-input>         
          <!-- Cargar Fotos  -->
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
         <!-- Plain mode -->
          <input type="file" @change="uploadImage" accept="image/*" ref="file" class="mt-3" >
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>


        <b-button variant="light" class="mt-3" @click="crearMemes" >Publicar</b-button>
        <b-button variant="light" class="mt-3"  @click="$bvModal.hide('bv-modal-example')" disabled>crear Editorial</b-button>
      </b-modal>
      </div>   


          <!-- Bolita e mundo -->
      <div class="crearEditoral">
        <b-nav-item  v-b-modal.modal-30 >bolita e mundo</b-nav-item>
        <b-modal id="modal-30" title="BootstrapVue">
        <template v-slot:modal-title>
          Crear <code>Chupo</code> 
        </template>
        <b-form-input id="input-small" size="sm" placeholder="Titulo"  v-model="bolita.titulo" ></b-form-input>
        <br>
        <b-form-input id="input-small" size="sm" placeholder="Link"  v-model="bolita.linkeo" ></b-form-input>
         
          <!-- Cargar Fotos  -->
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
         <!-- Plain mode -->
          <input type="file" @change="uploadImage" accept="image/*" ref="file" class="mt-3" >
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>


        <b-button variant="light" class="mt-3" @click="crearBolita" >Publicar</b-button>
        <b-button variant="light" class="mt-3"  @click="$bvModal.hide('bv-modal-example')" disabled>crear Editorial</b-button>
      </b-modal>
    </div>        
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="perfil">
      <b-card style="max-width: 20rem; background: url('otra.png');"
        class="mb-2">
        <img class="perfilUno" src="@/assets/sin.png" alt="" width="250px">
        <br>
        <h2 class="n">{{usuario.rol}}</h2>
        <h2 class="n">{{usuario.nombre}}</h2>
        <h2 class="n">{{usuario.email}}</h2>
      </b-card>
    </div>
  </div>


  
 
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      chupo: {
        titulo: "",
        parrafoUno: "",
        parrafoDos: "",
        parrafoTres: "",
        autor: "",
        usuariosId: "",
      },

      plastilina: {
        titulo: "",
        parrafo:"",
        parrafoDos:"",
        parrafotres:"",
        parrafoCuatro:"",
        parrafocinco:"",
        parrafoSeis:"",
        parrafoSiete:"",
        parrafoOcho:"",
        parrafoNueve:"",
        parrafoDiez:"",
        parrafoOnce:"",
        autor: "",
        usuariosId: ""
      },
      menor: {
        titulo: "",
        parrafo:"",
        parrafoDos:"",
        parrafotres:"",
        parrafoCuatro:"",
        parrafocinco:"",
        parrafoSeis:"",
        parrafoSiete:"",
        parrafoOcho:"",
        parrafoNueve:"",
        parrafoDiez:"",
        parrafoOnce:"",
        autor: "",
        usuariosId: ""
      },
      ikkaros: {
        titulo: "",
        parrafo:"",
        parrafoDos:"",
        parrafotres:"",
        parrafoCuatro:"",
        parrafocinco:"",
        parrafoSeis:"",
        parrafoSiete:"",
        parrafoOcho:"",
        parrafoNueve:"",
        parrafoDiez:"",
        parrafoOnce:"",
        autor: "",
        usuariosId: ""
      },      

      lita: {
        titulo: "",
        parrafoUno: "",
        parrafoDos: "",
        parrafoTres: "",
        autor: "",
        usuariosId: ""
      },   

      editorial:{
        titulo: "",
        parrafo:"",
        parrafoDos:"",
        parrafotres:"",
        parrafoCuatro:"",
        parrafocinco:"",
        parrafoSeis:"",
        parrafoSiete:"",
        parrafoOcho:"",
        parrafoNueve:"",
        parrafoDiez:"",
        parrafoOnce:"",        
        autor: "",
        usuariosId: ""        
      },

       emily:{
        titulo: "",
        parrafo: "",
        usuariosId: ""        
      },


       bolita:{
        titulo: "",
        linkeo: "",
        usuariosId: ""        
      },


       memes:{
        titulo: "",
        link: "",
        usuariosId: ""        
      },

      invitado: {
        titulo: "",
        parrafo:"",
        parrafoDos:"",
        parrafotres:"",
        parrafoCuatro:"",
        parrafocinco:"",
        parrafoSeis:"",
        parrafoSiete:"",
        parrafoOcho:"",
        parrafoNueve:"",
        parrafoDiez:"",
        parrafoOnce:"", 
        autor: "",
        usuariosId: "",
      },


      response: "",
      error: "",
      file: ""
    };
  },

  computed: {
    ...mapState("sesion", ["usuario"])
  },

  methods: {


    async crearChupo() {
      try {
        let chupo = this.chupo;
        chupo.usuariosId = this.chupo.id;
        const formData = new FormData();
        
        formData.append("file", this.file);
        formData.append("chupo", JSON.stringify(chupo));
        await axios.post(
          `${process.env.VUE_APP_RUTA_API}/noticias/add`,
          formData,
        );
        this.$router.push({ name: "elchupo" });
      } catch (error) {
        this.error = error.response.data;
      }
    },


    async crearPlastilina() {
      try {
        let plastilina = this.plastilina;
        plastilina.usuariosId = this.usuario.id;
        await axios.post(
          `${process.env.VUE_APP_RUTA_API}/plastilina/add`,
          this.plastilina
        );
        this.$router.push({ name: "plastilina" });
      } catch (error) {
        this.error = error.response.data;
      }
    },


     async crearMenor() {
      try {
        let menor = this.menor;
        menor.usuariosId = this.usuario.id;
        await axios.post(
          `${process.env.VUE_APP_RUTA_API}/menor/add`,
          this.menor
        );
        this.$router.push({ name: "menor" });
      } catch (error) {
        this.error = error.response.data;
      }
    },
   

      async crearIkkaros() {
      try {
        let ikkaros = this.ikkaros;
        ikkaros.usuariosId = this.usuario.id;
        await axios.post(
          `${process.env.VUE_APP_RUTA_API}/ikkaros/add`,
          this.ikkaros
        );
        this.$router.push({ name: "ikkaros" });
      } catch (error) {
        this.error = error.response.data;
      }
    },  
   

      async crearLita() {
      try {
        let lita = this.lita;
        lita.usuariosId = this.usuario.id;
        await axios.post(
         `${process.env.VUE_APP_RUTA_API}/lita/add`,
          this.lita
        );
        this.$router.push({ name: "lita" });
      } catch (error) {
        this.error = error.response.data;
      }
    },  



  async crearEditorial() {
      try {
        let editorial = this.editorial;
        editorial.usuariosId = this.usuario.id;
        await axios.post(
          `${process.env.VUE_APP_RUTA_API}/editor/add`,
          this.editorial
        );
        this.$router.push({ name: "editorial" });
      } catch (error) {
        this.error = error.response.data;
      }



    },
        async crearEmily() {
      try {
        let emily = this.emily;
        emily.usuariosId = this.usuario.id;
        await axios.post(
          `${process.env.VUE_APP_RUTA_API}/emily/add`,
          this.emily
        );
        this.$router.push({ name: "emily" });
      } catch (error) {
        this.error = error.response.data;
      }
    },



     async crearBolita() {
      try {
        let bolita = this.bolita;
        bolita.usuariosId = this.bolita.id;
        const formData = new FormData();
        
        formData.append("file", this.file);
        formData.append("bolita", JSON.stringify(bolita));
        await axios.post(
          `${process.env.VUE_APP_RUTA_API}/bolita/add`,
          formData,
        );
        this.$router.push({ name: "bolitaemundo" });
      } catch (error) {
        this.error = error.response.data;
      }
    },
    

    async crearMemes() {
      try {
        let memes= this.memes;
        memes.usuariosId = this.memes.id;
        const formData = new FormData();
        
        formData.append("file", this.file);
        formData.append("memes", JSON.stringify(memes));
        await axios.post(
          `${process.env.VUE_APP_RUTA_API}/memes/add`,
          formData,
        );
        this.$router.push({ name: "memes" });
      } catch (error) {
        this.error = error.response.data;
      }
    }, 
    
    async crearInvitado() {
      try {
        let invitado = this.invitado;
        invitado.usuariosId = this.invitado.id;
        const formData = new FormData();
        
        formData.append("file", this.file);
        formData.append("invitado", JSON.stringify(invitado));
        await axios.post(
          `${process.env.VUE_APP_RUTA_API}/invitado/add`,
          formData,
        );
        this.$router.push({ name: "invitado" });
      } catch (error) {
        this.error = error.response.data;
      }
    },



    uploadImage() {
      const file = this.$refs.file.files[0];
      this.file = file
    }
  }
};
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap');


.perfil {
  overflow: hidden;
  margin: 10px;
}
.noti {
  margin: 10px;
}

.perfilUno{
  padding: 10px;
  margin: 5px;
}

.n{
  padding: 20px;
  margin: 5px;
  text-align: center;
  font-family: 'Kirang Haerang', cursive !important;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
</style>

