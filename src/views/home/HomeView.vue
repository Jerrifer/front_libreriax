
<template>
  <v-app id="inspire">
  

    <v-main>
      <v-container>
        <v-row>
          <v-col
           
            :key="n"
            cols="4"
          >
    
          
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDITJl8ieJ0UShyFVjRYvMtNeh1mdClsPy5g&usqp=CAU"
      height="200px"
    ></v-img>

    <v-card-title>
      Editoriales
    </v-card-title>

 

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        to="/editorials"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    
  </v-card>

          </v-col>

          <v-col
           
           :key="n"
           cols="4"
         >
       
 <v-card
   class="mx-auto"
   max-width="344"
 >
   <v-img
     src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     height="200px"
   ></v-img>

   <v-card-title>
    Materiales
   </v-card-title>



   <v-card-actions>
     <v-btn
       color="orange lighten-2"
       text
       to="/materials"
     >
       Explore
     </v-btn>

     <v-spacer></v-spacer>

     <v-btn
       icon
       @click="show = !show"
     >
       <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
     </v-btn>
   </v-card-actions>

   
 </v-card>

         </v-col>



         <v-col
           
           :key="n"
           cols="4"
         >
       
 <v-card
   class="mx-auto"
   max-width="344"
 >
   <v-img
     src="https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&w=1600"
     height="200px"
   ></v-img>

   <v-card-title>
    Autores
   </v-card-title>



   <v-card-actions>
     <v-btn
       color="orange lighten-2"
       text
       to="/authors"
     >
       Explore
     </v-btn>

     <v-spacer></v-spacer>

     <v-btn
       icon
       @click="show = !show"
     >
       <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
     </v-btn>
   </v-card-actions>

   
 </v-card>

         </v-col>



         <v-col
           
           :key="n"
           cols="4"
         >
       
 <v-card
   class="mx-auto"
   max-width="344"
 >
   <v-img
     src="https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=1600"
     height="200px"
   ></v-img>

   <v-card-title>
    Niveles educativos
   </v-card-title>



   <v-card-actions>
     <v-btn
       color="orange lighten-2"
       text
       to="/edlevels"
     >
       Explore
     </v-btn>

     <v-spacer></v-spacer>

     <v-btn
       icon
       @click="show = !show"
     >
       <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
     </v-btn>
   </v-card-actions>

   
 </v-card>

         </v-col>






         <v-col
           
           :key="n"
           cols="4"
         >
       
 <v-card
   class="mx-auto"
   max-width="344"
 >
   <v-img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1xqA8VXCLtfKH5ESmKO-4FT-DDeD-9MKlg&usqp=CAU"
     height="200px"
   ></v-img>

   <v-card-title>
    Tipos de material
   </v-card-title>



   <v-card-actions>
     <v-btn
       color="orange lighten-2"
       text
       to="/typematerials"
     >
       Explore
     </v-btn>

     <v-spacer></v-spacer>

     <v-btn
       icon
       @click="show = !show"
     >
       <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
     </v-btn>
   </v-card-actions>

   
 </v-card>

         </v-col>



         <v-col
           
           :key="n"
           cols="4"
         >
       
 <v-card
   class="mx-auto"
   max-width="344"
 >
   <v-img
     src="https://images.pexels.com/photos/4866043/pexels-photo-4866043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     height="200px"
   ></v-img>

   <v-card-title>
    Usuarios
   </v-card-title>



   <v-card-actions>
     <v-btn
       color="orange lighten-2"
       text
       to="/users"
     >
       Explore
     </v-btn>

     <v-spacer></v-spacer>

     <v-btn
       icon
       @click="show = !show"
     >
       <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
     </v-btn>
   </v-card-actions>

   
 </v-card>

         </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    //
  }
</script>





<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <template >
      <div class="container">
        
        <div class="row m-2">

            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Materiales</h5>
                    <router-link to="/materials" class="btn btn-primary">Go</router-link>
                </div>
            </div>

            <div class="card  mx-5" style="width: 18rem;">
                <img class="card-img-top" src="https://images.pexels.com/photos/4866043/pexels-photo-4866043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Usuarios</h5>
                    <router-link to="/users" class="btn btn-primary">Go</router-link>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Autores</h5>
                    <router-link to="/authors" class="btn btn-primary">Go</router-link>
                </div>
            </div>

        </div>

        <div class="row m-2">


            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Editoriales</h5>
                    <router-link to="/editorials" class="btn btn-primary">Go</router-link>
                </div>
            </div>

            <div class="card  mx-5" style="width: 18rem;">
                <img class="card-img-top" src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Niveles educativos</h5>
                    <router-link to="/edlevels" class="btn btn-primary">Go</router-link>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Tipos de material</h5>
                    <router-link to="/typematerials" class="btn btn-primary">Go</router-link>
                </div>
            </div>

        </div>
            

          
      </div>
    </template>
  </div>
</template>


<script>

export default {

  computed: {
    auth () {
      return this.$store.getters.auth
      
    }
  },

  mounted() {
    console.log(this.auth)
  }
}

</script> -->