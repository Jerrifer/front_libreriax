<template>
     <div class="row mt-3">
         <div class="col-md-6 offset-md-3"> 
             <div class="card">
                 <div class="card-header bg-dark text-white text-center">Registrar Tipo de material</div>
                 <div class="card-body">
                     <form v-on:submit="createTypeMaterial">
                         <div class="input-group mb-3">
                             <span class="input-group-text"><strong>Nombre</strong></span>
                             <input type="text" v-model="name" id="name" class="form-control" maxlength="50" placeholder="Nombre" required>
                         </div>
                         <div class="d-grid col-6 mx-auto">
                             <button class="btn btn-success"> <i class="fa-solid fa-floppy-disk"></i> Guardar</button>
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
            typematerial: null,
            name: ''
        }
    },
    methods:{
        createTypeMaterial() {
           event.preventDefault();
           const typematerial = {
               name_type: this.name.trim()
           }

           console.log(typematerial);

           
            this.$store.dispatch("createTypeMaterial", typematerial)
            .then((response) => {
                if (response.status == "success") {
                    show_alert('Tipo material guardado correctamente', );
                        window.setTimeout(function() {
                            window.location.href='/typematerials';
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

</script>