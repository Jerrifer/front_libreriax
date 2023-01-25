<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <h1 class="float-center">Tipos de materiales</h1>
                <router-link to="/typematerials/create" class="btn btn-outline-dark float-end m-2">
                    <i class="fa-solid fa-database"></i> Registrar
                </router-link>
                <table
                 class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tipo material</th>
                            <th>Acciones</th>
                        </tr> 
                    </thead>

                    <tbody class="table-group-divider" id="contenido">
                        <tr v-for="tmaterial in tmaterials" :key="tmaterial.id_type_material">
                            <td>{{ tmaterial.id_type_material }}</td>
                            <td>{{ tmaterial.name_type }}</td> 
                            
                            <td>
                                <router-link :to="{path:'typematerials/edit/'+tmaterial.id_type_material}" class="btn btn-outline-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link> &nbsp;
                                <button class="btn btn-outline-danger" v-on:click="deleteTypeMaterial(tmaterial.id_type_material, tmaterial.name_type)">
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
    this.$store.dispatch("getTypeMaterials");

  },  
  computed: {

    tmaterials() {
      return this.$store.getters.obtenerTypeMaterials;
    },

  },

  methods: {

    deleteTypeMaterial(id, name) {

        swalWithBootstrapButtons.fire({
            title: '¿Seguro de eliminar el tipo de material '+name+'?',
            text: 'Se perderá la información del tipo material',
            icon: 'question',
            showCancelButton:true,
            confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
            cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
        }).then((ressult) => {

            //Confirma eliminación
            if (ressult.isConfirmed) {
            this.$store.dispatch("deleteTypeMaterial", id)
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