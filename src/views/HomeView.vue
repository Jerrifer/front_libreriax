<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <h1> {{ editorials }} </h1> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <ul>
      <li v-for="editorial in editorials" :key="editorial.index">
        {{ editorial.name }}
        <button class="btn btn-danger" @click="eliminarEditorial(editorial.id)">
          eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { show_alert, swalWithBootstrapButtons } from '../plugins/alerts.js'

export default {
  name: 'HomeView',
  // data() {

  // },

  created() {
    this.$store.dispatch("geteditorials");
  },  
  computed: {
    ...mapGetters({
      xtitle:'title'
    }),

    editorials() {
      return this.$store.getters.obtenerEditorials;
    },

  },

  methods: {
    alerta() {
      return show_alert('Se elimino', 'success');
    },


    eliminarEditorial(id) {

        swalWithBootstrapButtons.fire({
                title: 'Seguro de eliminar el editorial '+name,
                text: 'Se perderá la información del editorial',
                icon: 'question',
                showCancelButton:true,
                confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
                cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
            }).then((ressult) => {

              //Confirma eliminación
              if (ressult.isConfirmed) {
                this.$store.dispatch("eliminarEditorial", id)
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
                      this.$store.dispatch("gestionarSedes");
                      setTimeout(3000);
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
