import axios from 'axios'

const materials = {
    state: {
        materials: [],
        // editorial: ""
  
    },
    getters: {
        obtenerMaterials(state){
          return state.materials
        },
    },
    mutations: {
        enviarMaterials(state, materials){
        state.materials = materials
      }
    },
    actions: {
  
        getMaterials(context){
            axios.get("api/materials")
            .then((response) =>{
                const materials = []
                for(let i = 0; i < response.data.results.length; i++){
                    materials.push({
                        indice: (i),
                        id_material:                     response.data.results[i].id_material,
                        name_material:                   response.data.results[i].name_material,
                        editorial_id:                    response.data.results[i].editorial_id,
                        type_material_id:                response.data.results[i].type_material_id,
                        document:                        response.data.results[i].document,
                        name_editorial:                  response.data.results[i].name_editorial,
                        name_type:                       response.data.results[i].name_type,


                        })
                }
                context.commit("enviarMaterials", materials)
                console.log(response.data);
            })
            .catch(() =>{})
        },

        createMaterial(context, material) {
            console.log('Aquí create');
            console.log(material);
            return new Promise((resolve, reject) => {
                axios({method:'POST', url:"api/materials", data:material, headers : {'content-type': 'multipart/form-data'}})
                .then((response) => {
                    resolve(response.data)
                })
                .catch(() => {
                    reject()
                })
            })
        },


        getMaterial(context, material) {
            return new Promise((resolve, reject) => {
                axios.get("api/materials/"+material)
                .then((response)  => {
                    resolve(response.data.results[0])
                })
                .catch(() => {
                    reject()
                })
            })
        },
        


        updateMaterial(context, material) {
            return new Promise((resolve, reject) => {
                axios.put("api/materials/"+material.id_material, material)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },



        deleteMaterial(context, material) {
            return new Promise((resolve, reject) => {
                axios.delete("api/materials/"+material)
                .then((response) => {
                    resolve(response.data)
                })
                .catch(() => {
                    reject()
                })
            })
        },
  
      
  
    },
    modules: {
    }
}

export default materials