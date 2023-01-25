<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3"> 
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Registrar editorial</div>
                <div class="card-body">
                    <form v-on:submit="createEditorial">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><strong>Nombre</strong></span>
                            <input type="text" v-model="name_editorial" id="name" class="form-control" maxlength="50" placeholder="Nombre" required>
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
        editorials: null,
        name_editorial: ''
    }
   },
   methods:{
       createEditorial() {
           event.preventDefault();
           const editorial = {
               name_editorial: this.name_editorial.trim()
           }

           console.log(editorial);

           
            this.$store.dispatch("createEditorial", editorial)
            .then((response) => {
                if (response.status == "success") {
                    show_alert('Editorial guardado correctamente', );
                        window.setTimeout(function() {
                            window.location.href='/editorials';
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