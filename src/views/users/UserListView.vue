<template>
  <div class="row">
   <div class="col-lg-8 offset-lg-2">
       <div class="table-responsive">
            <router-link to="/users/create" class="btn btn-outline-dark float-end m-2">
                <i class="fa-solid fa-database"></i> Registrar
            </router-link>
           <table class="table table-hover table-dark">
               <thead>
                   <tr>
                       <th>Id</th>
                       <th>Nombre</th>
                       <th>Apellido</th>
                       <th>Correo</th>
                       <th>Contraseña</th>
                       <th>Telefono</th>
                       <th>Acciones</th> 
                   </tr> 
               </thead>

               <tbody class="table-group-divider" id="contenido">
                   <tr v-for="user in users" :key="user.id_user">
                       <td>{{ user.id_user }}</td>
                       <td>{{ user.name }}</td>
                       <td>{{ user.lastname }}</td>
                       <td>{{ user.email }}</td>
                       <td>**********</td>
                       <td>{{ user.phone_number }}</td>
                     
                       <td>
                           <router-link :to="{path:'/users/edit/'+user.id_user}" class="btn btn-outline-warning">
                               <i class="fa-solid fa-edit"></i>
                           </router-link> &nbsp;
                           <button class="btn btn-outline-danger" v-on:click="deleteUser(user.id_user, user.name)">
                               <i class="fa-solid fa-trash"></i>
                           </button>
                       </td>
                   </tr>
               </tbody>
          
           </table>
       </div>
   </div>
  </div>
</template>



<script>
import { show_alert, swalWithBootstrapButtons } from '../../plugins/alerts.js'

export default {

  created() {
    this.$store.dispatch("getUsers");

  },  
  computed: {

    users() {
      return this.$store.getters.obtenerUsers;
    },

  },

  methods: {

    deleteUser(id, name) {

        swalWithBootstrapButtons.fire({
            title: '¿Seguro de eliminar el usuario '+name+'?',
            text: 'Se perderá la información del usuario',
            icon: 'question',
            showCancelButton:true,
            confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
            cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
        }).then((ressult) => {

            //Confirma eliminación
            if (ressult.isConfirmed) {
            this.$store.dispatch("deleteUser", id)
                .then((response) => {
                    console.log(response.status);
                    if (response.status == "success") {
                        show_alert('Eliminado exitosamente', 'success');
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
    },
  }
}
</script>