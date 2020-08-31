<template>
    <div class="row justify-content-center animated fadeIn fast">
      <div class="col col-md-5 p-3 card login">
        <h3>LOGIN</h3>
        <form>
          <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>
        </form>
        <div class="card-body text-center">
          <b-button variant="primary" @click="ingresar">Ingresar</b-button>
        </div>
        <span style="color: red">{{error}}</span>
        <span style="color: green">{{response}}</span>
      </div>
    </div>
</template>


<script>

import axios from 'axios';
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            response: '',
            error: '',
        }
    },

    methods: {
        ...mapActions('sesion', ['inicioSesion']),

        async ingresar(){
            try {
                const res = await axios.post(`${process.env.VUE_APP_RUTA_API}/usuario/login`, this.form);
                localStorage.setItem('userToken', res.data.token);
                this.inicioSesion(res.data.token);
                this.$router.push({ name: 'perfil' })
            } catch (error) {
              this.error = error.response.data.message;
              console.log(error.response.data.message);
            }
        }
    },
}
</script>

<style>



.login{
  padding: 60px;
  margin: 39px;
}
  
  /* Animaciones */
  .animated{
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  .fast{
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  @keyframes  fadeIn {
    from{
      opacity: 0;                           
    }
    to{
      opacity: 1;
    }
  }
  
  .fadeIn{
    animation-name: fadeIn;
  } 

</style>