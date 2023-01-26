<template>
    <div class="row mt-3">
         <div class="col-md-6 offset-md-3"> 
             <div class="card">
                 <div class="card-header bg-dark text-white text-center">Crear</div>
                 <div class="card-body">
                     <form v-on:submit="createUser">
                         <div class="input-group mb-3">
                             <span class="input-group-text"> <strong>Nombre</strong> </span>
                             <input type="text" v-model="name" id="name" class="form-control" maxlength="50" placeholder="Nombre" required>
                         </div>
                         <div class="input-group mb-3">
                             <span class="input-group-text"> <strong>Apellido</strong> </span>
                             <input type="text" v-model="lastname" id="lastname" class="form-control" maxlength="50" placeholder="Apellido" required>
                         </div>
                         <div class="input-group mb-3">
                             <span class="input-group-text"> <strong>Correo</strong> </span>
                             <input type="text" v-model="email" id="usernames" class="form-control" maxlength="50" placeholder="Correo" required>
                         </div>
                         <div class="input-group mb-3">
                             <span class="input-group-text"> <strong>Contraseña</strong> </span>
                             <input type="text" v-model="password" id="user_last_names" class="form-control" maxlength="50" placeholder="Contraseña" required>
                         </div>
                         <div class="input-group mb-3">
                             <span class="input-group-text"> <strong>Número cel</strong> </span>
                             <input type="text" v-model="phone_number" id="phone_number" class="form-control" maxlength="50" placeholder="Número cel" required>
                         </div>
                         <div class="d-grid col-6 mx-auto">
                             <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Guardar</button>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
    </div>
 </template>




<script>
import { show_alert } from '../../plugins/alerts';

export default{
    data(){
        return {
            user: null,
            name: '',
            lastname: '',
            email: '',
            phone_number: '',
            password: ''

        }
    },
    methods:{
        createUser() {
            event.preventDefault();
                if (this.name.trim() === '') {
                    show_alert('escribe el nombre','warning','nombre');
                }else if(this.password.trim() === '') {
                    show_alert('escribe la contraseña','warning','nombre');
                }else if(this.lastname.trim() === '') {
                    show_alert('escribe el apellido','warning','nombre');
                }else if(this.email.trim() === '') {
                    show_alert('escribe el correo','warning','nombre');
                }else if(this.phone_number.trim() === '') {
                    show_alert('escribe el número telefónico','warning','nombre');
                }else  {
                    const user = {  name:this.name.trim(),
                                    password:this.password.trim(),
                                    lastname:this.lastname.trim(),
                                    phone_number:this.phone_number.trim(),
                                    email:this.email.trim(),
                                }
                    console.log(user);
                this.$store.dispatch("createUser", user)
                .then((response) => {
                    if (response.status == "success") {
                        show_alert('Usuario registrado correctamente', );
                            window.setTimeout(function() {
                                window.location.href='/users';
                            }, 1000);
                    } 
                    else {
                        show_alert(response.message, 'danger')
                    }
                    setTimeout(() => {
                        this.alert = false;
                    }, 3000);
                    })
                .catch(() => {
                });
                    
                }
        }
    }
}

</script>
 
