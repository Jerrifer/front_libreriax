<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <h1 class="float-center">Autores</h1>
                <router-link to="/authors/create" class="btn btn-outline-dark float-end m-2">
                    <i class="fa-solid fa-database"></i> Registrar
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
                        <tr v-for="author in authors" :key="author.id_author">
                            <td>{{ author.id_author }}</td>
                            <td>{{ author.name_author }}</td> 
                            
                            <td>
                                <router-link :to="{path:'authors/edit/'+author.id_author}" class="btn btn-outline-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link> &nbsp;
                                <button class="btn btn-outline-danger" v-on:click="deleteAuthor(author.id_author, author.name_author)">
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
    this.$store.dispatch("getAuthors");

  },  
  computed: {

    authors() {
      return this.$store.getters.obtenerAutores;
    },

  },

  methods: {



    deleteAuthor(id, name) {

        swalWithBootstrapButtons.fire({
                title: '¿Seguro de eliminar el autor '+name+'?',
                text: 'Se perderá la información del autor',
                icon: 'question',
                showCancelButton:true,
                confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
                cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
            }).then((ressult) => {

              //Confirma eliminación
              if (ressult.isConfirmed) {
                this.$store.dispatch("deleteAuthor", id)
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