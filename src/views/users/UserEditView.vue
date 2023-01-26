<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3"> 
             <div class="card">
                 <div class="card-header bg-dark text-white text-center">Edit</div>
                 <div class="card-body">
                     <form v-on:submit="updateUser">
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
                             <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Actualizar</button>
                         </div>
                     </form>
                 </div>
             </div>
        </div> 
    </div>
 </template>



<script>
    import { show_alert, swalWithBootstrapButtons } from '../../plugins/alerts';

export default{
    data(){
        return {
            user: null,
            id_user: 0,
            name:'',
            lastname:'',
            email:'',
            password: '',
            phone_number: '',
        }
    },
    mounted(){
        this.id_user = this.$route.params.id;
        console.log(this.id_user);
        this.$store.dispatch("getUser", this.id_user)
        .then((response) => {
            this.name = response.name
            this.lastname = response.lastname
            this.email = response.email
            this.password = response.password
            this.phone_number = response.phone_number
        })
    },
    methods:{
        updateUser() {
            event.preventDefault();
            if (this.name.trim() === '') {
                show_alert('escribe el nombre','warning','nombre');
            }else if(this.lastname.trim() === '') {
                show_alert('escribe el apellido','warning','nombre');
            }else if(this.email.trim() === '') {
                show_alert('escribe el correo','warning','nombre');
            }else if(this.password.trim() === '') {
                show_alert('escribe la contraseña','warning','nombre');
            }else if(this.phone_number.trim() === '') {
                show_alert('escribe el número telefonico','warning','nombre');
            }else  {
                var user = { 
                    id_user:this.id_user,
                    name:this.name.trim(),
                    lastname:this.lastname.trim(),
                    email:this.email.trim(),
                    password:this.password.trim(),
                    phone_number:this.phone_number.trim(),
                        }
                console.log(user);
                swalWithBootstrapButtons.fire({
                title: '¿Seguro de actualizar los datos del usuario?',
                text: 'Se actulizará la información del usuario',
                icon: 'question',
                showCancelButton:true,
                confirmButtonText:'<i class="fa-solid fa-check"></i> Si, actualizar',
                cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
            }).then((ressult) => {

            //Confirma eliminación
            if (ressult.isConfirmed) {
                this.$store.dispatch("updateUser", user)
                    .then((response) => {
                    console.log(response.status);
                    if (response.status == "success") {
                        show_alert('Actualizado exitosamente', 'success');
                        window.setTimeout(function() {
                            window.location.href='/users';
                        }, 1000);
                    } else {
                        show_alert(response.message, 'danger');

                    }
                    //   this.$store.dispatch("gestionarSedes");
                    //   setTimeout(3000);
                    })
                    .catch(function(){
                    show_alert('Error en la solicitud', 'error');
                    })
                }else{
                    show_alert('operación cancelada', 'info');
                }
            });   
            }
        }
   }
}

</script> 

 