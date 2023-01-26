<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <h1>{{ name }}</h1>

                <figure>
                    <embed :src="document" type="application/pdf" width="300" height="300" />
                </figure>

                <br>

                <button class="btn btn-secondary" v-on:click="preDownloand()">
                    <i class="fa-solid fa-file-arrow-down"></i>
                </button>

            </div>
        </div>
    </div>
</template>

<script>

//import { show_alerta, swalWithBootstrapButtons } from '@/alerts';



export default{

    data(){
        return {
            document: null,
            name: null,

        };
    },
    mounted(){
        this.id_material = this.$route.params.id;
        console.log(this.id_material);
        this.$store.dispatch("getMaterial", this.id_material)
        .then((response) => {
            this.name = response.name_material
            this.document = 'http://127.0.0.1:8000/storage/document_folder/'+response.document,

            console.log('hola')
            console.log(response.document)
        })
    },
    
    methods:{

        // preDownloand() {
        //     swalWithBootstrapButtons.fire({
        //         title: '¿Seguro que desea descargar el material '+this.name+'?',
        //         text: '',
        //         icon: 'question',
        //         showCancelButton:true,
        //         confirmButtonText:'<i class="fa-solid fa-check"></i> Si, descargar',
        //         cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
        //     }).then((ressult) => {
        //         if (ressult.isConfirmed) {

        //             axios(this.urlMaterial+'download/'+this.id_material)
        //             .then( async resp => {
        //             console.log("jj");
        //             console.log(resp);
        //             this.downloadFile(resp);
        //         })
        //         .catch( erro => console.log(erro));
        //         }else{
        //             show_alerta('operación cancelada', 'warning');
        //         }
        //     });

        //     //show_alerta('¿Seguro que desea descargar el material', 'info');



            
        // },

        // downloadFile(resp) {

            
        //     const url = window.URL.createObjectURL(new Blob([resp.data]));
        //     console.log("downloadFile");
        //     console.log(url);

        //     const filelink = document.createElement("a");
            
        //     console.log("filelink");
        //     console.log(filelink);

        //     filelink.href = url;

        //     filelink.setAttribute("download", `${this.name}.pdf`); //or any other extension
        //     document.body.appendChild(filelink);
        //     filelink.click();
        //}
        

       
    }

}
</script>