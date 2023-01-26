<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3"> 
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Actualizar material</div>
                <div class="card-body">
                    <form v-on:submit="updateMaterial">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><strong>Nombre</strong></span>
                            <input type="text" v-model="name" id="name" class="form-control" maxlength="50" placeholder="Nombre" required>
                        </div>
                        <div class="input-group mb-3">
                           <span class="input-group-text"><strong>Tipo material</strong></span>
                           <select v-model="selectedType" id="typematerials" class="form-control" maxlength="50" >
                               <option v-for="typematerial in typematerials" :key="typematerial.id_type_material" v-bind:value="typematerial.id_type_material"> {{ typematerial.name_type }} </option>
                           </select>
                        </div>


                        <div class="input-group mb-3">
                           <span class="input-group-text"><strong>Editorial</strong></span>
                           <select v-model="selectedEditorial" id="editorials" class="form-control" maxlength="50" >
                               <option v-for="editorial in editorials" :key="editorial.id_editorial" v-bind:value="editorial.id_editorial"> {{ editorial.name_editorial }} </option>
                           </select>
                        </div>


                        <div class="input-group mb-3">
                           <span class="input-group-text"><strong>Nivel educativo</strong></span>
                           <select v-model="selectedEdLevel" id="educationlevels" class="form-control" maxlength="50" >
                               <option v-for="edlevel in edlevels" :key="edlevel.id_education_level" v-bind:value="edlevel.id_education_level" > {{ edlevel.level }} </option>
                           </select>
                        </div>


                        <div class="input-group mb-3">
                           <span class="input-group-text"><strong>Autor</strong></span>
                           <select v-model="selectedAuthor" id="educationlevels" class="form-control" maxlength="50" >
                               <option v-for="author in authors" :key="author.id_author" v-bind:value="author.id_author" > {{ author.name_author }} </option>
                           </select>
                        </div>


                        <div class="input-group mb-3">
                           <span class="input-group-text"><strong>Documento</strong></span>
                           <input @change="getDocument" id="document" class="form-control" type="file" accept="application/pdf">
                        </div>


                        <div class="input-group mb-3">
                           <figure>
                                <embed :src="docMin" type="application/pdf" width="100%" height="300px" />
                           </figure>
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
    import { show_alert, swalWithBootstrapButtons } from '../../plugins/alerts';
    //import { useRoute } from 'vue-router';

export default{
   data(){
       return {
            name: '',

            docMin: '',
            document:null,


            selectedType: '',
            selectedEditorial: '',
            selectedEdLevel: '',
            selectedAuthor: '',


    }
   },
   created() {
        this.$store.dispatch("getTypeMaterials");
        this.$store.dispatch("getEditorials");
        this.$store.dispatch("getAuthors");
        this.$store.dispatch("getEdlevels");
    },
   
    computed: {
        editorials() {
            return this.$store.getters.obtenerEditorials;
        },
        typematerials() {
            return this.$store.getters.obtenerTypeMaterials;
        },
        authors() {
            return this.$store.getters.obtenerAuthors;
        },
        edlevels() {
            return this.$store.getters.obtenerEdlevels;
        },
    },
    mounted(){
        this.id_material = this.$route.params.id;
        console.log(this.id_material);
        this.$store.dispatch("getMaterial", this.id_material)
        .then((response) => {
            this.name = response.name_material
            this.docMin = 'http://127.0.0.1:8000/storage/document_folder/'+response.document,
            this.selectedEditorial = response.id_editorial,
            this.selectedType = response.id_type_material,
            console.log('hola')
            console.log(response.name_material)
        })
    },
    methods:{

        updateMaterial() {
            event.preventDefault();
            const material = {
                    id_material: this.id_material,
                    name_material: this.name.trim()
            }

            console.log(material);

            swalWithBootstrapButtons.fire({
                    title: '¿Seguro de actualizar el material?',
                    text: 'Se actulizará la información del material',
                    icon: 'question',
                    showCancelButton:true,
                    confirmButtonText:'<i class="fa-solid fa-check"></i> Si, actualizar',
                    cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
                }).then((ressult) => {

                //Confirma eliminación
                if (ressult.isConfirmed) {
                    this.$store.dispatch("updateMaterial", material)
                        .then((response) => {
                        console.log(response.status);
                        if (response.status == "success") {
                            show_alert('Actualizado exitosamente', 'success');
                            window.setTimeout(function() {
                                window.location.href='/materials';
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

        getDocument(event) {
            let file = event.target.files[0];
            console.log(file);
            this.document = file;
            this.showDocument(file);
        },


        showDocument(file) {
            let reader = new FileReader();


            reader.onload = (e) => {
                this.docMin = e.target.result;
            }


            reader.readAsDataURL(file);
        },

   }
}

</script> 


