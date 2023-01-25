<template>
     <div class="row mt-3">
         <div class="col-md-6 offset-md-3"> 
             <div class="card">
                 <div class="card-header bg-dark text-white text-center">Registrar autor</div>
                 <div class="card-body">
                     <form v-on:submit="createAuthor">
                         <div class="input-group mb-3">
                             <span class="input-group-text"> <strong>Nombre</strong> </span>
                             <input type="text" v-model="name" id="name" class="form-control" maxlength="50" placeholder="Nombre" required>
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
        authors: null,
        name: ''
    }
   },
   methods:{
        createAuthor() {
           event.preventDefault();
           const author = {
                name_author: this.name.trim()
           }

           console.log(author);

           
            this.$store.dispatch("createAuthor", author)
            .then((response) => {
                if (response.status == "success") {
                    show_alert('Autor guardado correctamente', 'success');
                        window.setTimeout(function() {
                            window.location.href='/authors';
                        }, 1000);
                } 
                else {
                    show_alert('')
                }

                setTimeout(() => {
                    this.alert = false;
                }, 3000);
                })
            .catch(() => {
                show_alert('Error en la solicitud', 'error');
            });
               
       }

   }
}

</script>