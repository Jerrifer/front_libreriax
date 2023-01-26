<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <h1 class="float-center">Materiales</h1>
                <router-link to="/materials/create" class="btn btn-outline-dark float-end m-2">
                    <i class="fa-solid fa-database"></i> Registrar
                </router-link>
                <table
                 class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <!-- <th>Autor</th> -->
                            <th>Tipo material</th>
                            <th>Editorial</th>
                            <th>Documento</th>
                            <th>Acciones</th>
                            <!-- <th>Nivel educativo</th> -->

                        </tr> 
                    </thead>

                    <tbody class="table-group-divider" id="contenido">
                        <tr v-for="material in materials" :key="material.id_material">
                            <td>{{ material.id_material }}</td>
                            <td>{{ material.name_material }}</td>
                            <td>{{ material.name_type }}</td> 
                            <td>{{ material.name_editorial }}</td>
                            <td>

                                 <figure>
                                    <embed :src="'http://127.0.0.1:8000/storage/document_folder/'+material.document" type="application/pdf" width="200" height="200" />
                                </figure> 
                                
                                <!-- <figure>
                                    <img width="100" height="100" src="http://127.0.0.1:8000/storage/document_folder/1674050101_c2.jpeg" alt="">
                                </figure> -->
                                

                                <!-- <figure>
                                    <img width="100" height="100" :src="material.document" alt="">
                                </figure> -->
                            </td>

                            
                            <td>
                                <router-link :to="{path:'materials/edit/'+material.id_material}" class="btn btn-outline-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link> &nbsp;
                                <button class="btn btn-outline-danger" v-on:click="deleteMaterial(material.id_material, material.name_material)">
                                    <i class="fa-solid fa-trash"></i>
                                </button> &nbsp;
                                <router-link :to="{path:'materials/detail/'+material.id_material}" class="btn btn-outline-info">
                                    <i class="fa-solid fa-eye"></i>
                                </router-link> &nbsp;
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
    this.$store.dispatch("getMaterials");

  },  
  computed: {

    materials() {
      return this.$store.getters.obtenerMaterials;
    },

  },

  methods: {

    deleteMaterial(id, name) {

        swalWithBootstrapButtons.fire({
                title: '¿Seguro de eliminar el material '+name+'?',
                text: 'Se perderá la información del material',
                icon: 'question',
                showCancelButton:true,
                confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
                cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
            }).then((ressult) => {

              //Confirma eliminación
              if (ressult.isConfirmed) {
                this.$store.dispatch("deleteMaterial", id)
                    .then((response) => {
                      console.log(response.status);
                      if (response.status == "success") {
                        show_alert('Eliminado exitosamente', 'success');
                        window.setTimeout(function() {
                            window.location.href='/materials';
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


