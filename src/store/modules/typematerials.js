import axios from 'axios'

const typematerials = {
    state: {
        typematerials: [],
        // TypeMaterial: ""
  
    },
    getters: {
  
        obtenerTypeMaterials(state){
          return state.typematerials
        },
    },
    mutations: {
        enviarTypeMaterials(state, typematerials){
        state.typematerials = typematerials
      }
    },
    actions: {
  
        getTypeMaterials(context){
            axios.get("api/typematerials")
            .then((response) =>{
                const typematerials = []
                for(let i = 0; i < response.data.results.length; i++){
                    typematerials.push({
                        indice: (i+1),
                        id_type_material:            response.data.results[i].id_type_material,
                        name_type:                   response.data.results[i].name_type,
                        })
                }
                context.commit("enviarTypeMaterials", typematerials)
                console.log(response.data);
            })
            .catch(() =>{})
        },

        createTypeMaterial(context, typematerial) {
            return new Promise((resolve, reject) => {
                axios.post("api/typematerials", typematerial)
                .then((response) => {
                    resolve(response.data)
                })
                .catch(() => {
                    reject()
                })
            })
        },


        getTypeMaterial(context, typematerial) {
            return new Promise((resolve, reject) => {
                axios.get("api/typematerials/"+typematerial)
                .then((response)  => {
                    resolve(response.data.results)
                })
                .catch(() => {
                    reject()
                })
            })
        },
        


        updateTypeMaterial(context, typematerial) {
            return new Promise((resolve, reject) => {
                axios.put("api/typematerials/"+typematerial.id_type_material, typematerial)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },



        deleteTypeMaterial(context, typematerial) {
            return new Promise((resolve, reject) => {
                axios.delete("api/typematerials/"+typematerial)
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

export default typematerials