<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3"> 
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Registrar nivel educativo</div>
                <div class="card-body">
                    <form v-on:submit="createEdlevel">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><strong>Nombre</strong></span>
                            <input type="text" v-model="level" id="level" class="form-control" maxlength="50" placeholder="Nombre" required>
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
        edlevels: null,
        level: ''
    }
   },
   methods:{
       createEdlevel() {
           event.preventDefault();
           const edlevel = {
               level: this.level.trim()
           }

           console.log(edlevel);

           
            this.$store.dispatch("createEdlevel", edlevel)
            .then((response) => {
                if (response.status == "success") {
                    show_alert('Nivel educativo guardado correctamente', );
                        window.setTimeout(function() {
                            window.location.href='/edlevels';
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