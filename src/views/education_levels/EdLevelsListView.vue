<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <h1 class="float-center">Niveles educativos</h1>
                <router-link to="/edlevels/create" class="btn btn-outline-dark float-end m-2">
                    <i class="fa-solid fa-database"></i> Registrar
                </router-link>
                <table
                 class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nivel Educativo</th>
                            <th>Acciones</th>
                        </tr> 
                    </thead>

                    <tbody class="table-group-divider" id="contenido">
                        <tr v-for="edLevel in edLevels" :key="edLevel.id_education_level">
                            <td>{{ edLevel.id_education_level }}</td>
                            <td>{{ edLevel.level }}</td> 
                            
                            <td>
                                <router-link :to="{path:'edlevels/edit/'+edLevel.id_education_level}" class="btn btn-outline-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link> &nbsp;
                                <button class="btn btn-outline-danger" v-on:click="deleteEdlevel(edLevel.id_education_level, edLevel.level)">
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
    this.$store.dispatch("getEdlevels");

  },  
  computed: {

    edLevels() {
      return this.$store.getters.obtenerEdlevels;
    },

  },

  methods: {

    deleteEdlevel(id, name) {

        swalWithBootstrapButtons.fire({
                title: '¿Seguro de eliminar el nivel educativo '+name+'?',
                text: 'Se perderá la información del nivel educativo',
                icon: 'question',
                showCancelButton:true,
                confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
                cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
            }).then((ressult) => {

              //Confirma eliminación
              if (ressult.isConfirmed) {
                this.$store.dispatch("deleteEdlevel", id)
                    .then((response) => {
                      console.log(response.status);
                      if (response.status == "success") {
                        show_alert('Eliminado exitosamente', 'success');
                        window.setTimeout(function() {
                            window.location.href='/edlevels';
                        }, 1000);
                      } else {
                        show_alert(response.message, 'danger');

                      }
                    //   this.$store.dispatch("gestionarSedes");
                    //   setTimeout(3000);
                    })
                    .catch(function(error){
                      show_alert('Error en la solicitud', error);
                    })
                }else{
                     show_alert('operación cancelada', 'info');
                }

       });
    },
  }


}
</script>