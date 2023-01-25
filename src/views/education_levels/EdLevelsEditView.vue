<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3"> 
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Actualizar nivel educativo</div>
                <div class="card-body">
                    <form v-on:submit="updateEdlevel">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><strong>Nombre</strong></span>
                            <input type="text" v-model="name" id="name" class="form-control" maxlength="50" placeholder="Nivel educativo" required>
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
    //import { useRoute } from 'vue-router';

export default{
   data(){
       return {
        name: '',
    }
   },
   mounted(){
        //const route = useRoute();
        this.id_education_level = this.$route.params.id;
        console.log(this.id_education_level);
        this.$store.dispatch("getEdlevel", this.id_education_level)
        .then((response) => {
            this.name = response.level
            console.log(response)
        })
   },
   methods:{


       updateEdlevel() {
           event.preventDefault();
           const edlevel = {
                id_education_level: this.id_education_level,
                level: this.name.trim()
           }

           console.log(edlevel);

           swalWithBootstrapButtons.fire({
                title: '¿Seguro de actualizar el nivel educativo?',
                text: 'Se actulizará la información del nivel educativo',
                icon: 'question',
                showCancelButton:true,
                confirmButtonText:'<i class="fa-solid fa-check"></i> Si, actualizar',
                cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
            }).then((ressult) => {

              //Confirma eliminación
              if (ressult.isConfirmed) {
                this.$store.dispatch("updateEdlevel", edlevel)
                    .then((response) => {
                      console.log(response.status);
                      if (response.status == "success") {
                        show_alert('Actualizado exitosamente', 'success');
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
           
               
       }


   }
}

</script> 