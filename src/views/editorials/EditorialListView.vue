<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <h1 class="float-center">Editoriales</h1>
                <router-link to="/editorials/create" class="btn btn-outline-dark float-end m-2">
                    <i class="fa-solid fa-database"></i> Registrar
                </router-link>
                <router-link to="/editorials/graphic" class="btn btn-outline-warning float-end m-2">
                  <i class="fa-solid fa-chart-pie"></i> Gráfica
                </router-link>
                <table
                 class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr> 
                    </thead>

                    <tbody class="table-group-divider" id="contenido">
                        <tr v-for="editorial in editorials" :key="editorial.id_editorial">
                            <td>{{ editorial.id_editorial }}</td>
                            <td>{{ editorial.name_editorial }}</td> 
                            
                            <td>
                                <router-link :to="{path:'editorials/edit/'+editorial.id_editorial}" class="btn btn-outline-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link> &nbsp;
                                <button class="btn btn-outline-danger" v-on:click="deleteEditorial(editorial.id_editorial, editorial.name_editorial)">
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
    this.$store.dispatch("getEditorials");

  },  
  computed: {

    editorials() {
      return this.$store.getters.obtenerEditorials;
    },

  },

  methods: {

    deleteEditorial(id, name) {

        swalWithBootstrapButtons.fire({
                title: '¿Seguro de eliminar el editorial '+name+'?',
                text: 'Se perderá la información del editorial',
                icon: 'question',
                showCancelButton:true,
                confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
                cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
            }).then((ressult) => {

              //Confirma eliminación
              if (ressult.isConfirmed) {
                this.$store.dispatch("deleteEditorial", id)
                    .then((response) => {
                      console.log(response.status);
                      if (response.status == "success") {
                        show_alert('Eliminado exitosamente', 'success');
                        window.setTimeout(function() {
                            window.location.href='/editorials';
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