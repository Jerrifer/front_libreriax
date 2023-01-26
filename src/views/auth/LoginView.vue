<template>
  <div class="row py-5">
    <div class="col-lg-5 offset-lg-3 my-5">
        <div class=" table-responsive block mx-auto my-12 p-8 w-1/3 shadow-lg bg-dark px-4"  style="border-radius: 15px;" >

            <h1 class="text-3xl text-center font-bold text-light">Login</h1>


                <form v-on:submit="login">
                    <div class="m-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="m-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-outline-light ">Iniciar sesión</button>
                    </div>
                    <br>
                </form>
            </div>
        
    </div>
  </div>
</template>

<script>

import { show_alert } from '@/plugins/alerts';
export default {

    data() {
        return{
                email: '',
                password:'',
             }
    },
    computed: {
        auth() {
            return this.$store.getters.auth
        },
    },
    methods:{

        login() {
            var user = {
                email: this.email.trim(),
                password: this.password.trim()
            }
            this.$store.dispatch("login", user)
            .then(() => {
                if (this.auth == true) {
                    show_alert('Usuario existe', 'success');
                    window.setTimeout(function() {
                        window.location.href='/';
                    }, 1000);
                }
            })
            .catch(() => {
                if (this.usuario == null) {
                    show_alert('Correo electrónico o contraseña incorrectos', 'danger');
                }
            })
            event.preventDefault();
        }

    }

}

</script>