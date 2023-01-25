<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3"> 
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Actualizar autor</div>
                <div class="card-body">
                    <form v-on:submit="updateAuthor">
                        <div class="input-group mb-3">
                            <span class="input-group-text"> <strong>Nombre</strong> </span>
                            <input type="text" v-model="name" id="name" class="form-control" maxlength="50" placeholder="Nombre" required>
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

export default{
data(){
   return {
    name: '',


}
},
mounted(){
    //const route = useRoute();
    this.id_author = this.$route.params.id;
    console.log(this.id_author);
    this.$store.dispatch("getAuthor", this.id_author)
    .then((response) => {
        this.name = response.name_author
        console.log(response)
    })
},
methods:{


   updateAuthor() {
       event.preventDefault();
       const author = {
            id_author: this.id_author,
            name_author: this.name.trim()
       }

       console.log(author);

       swalWithBootstrapButtons.fire({
            title: '¿Seguro de actualizar los datos del autor?',
            text: 'Se actulizará la información del autor',
            icon: 'question',
            showCancelButton:true,
            confirmButtonText:'<i class="fa-solid fa-check"></i> Si, actualizar',
            cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
        }).then((ressult) => {

          //Confirma eliminación
          if (ressult.isConfirmed) {
            this.$store.dispatch("updateAuthor", author)
                .then((response) => {
                  console.log(response.status);
                  if (response.status == "success") {
                    show_alert('Actualizado exitosamente', 'success');
                    window.setTimeout(function() {
                        window.location.href='/authors';
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