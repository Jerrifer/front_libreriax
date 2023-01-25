import axios from 'axios'

const edlevels = {
    state: {
        edlevels: [],
        // edlevel: ""
  
    },
    getters: {
  
        obtenerEdlevels(state){
          return state.edlevels
        },
    },
    mutations: {
        enviarEdlevels(state, edlevels){
        state.edlevels = edlevels
      }
    },
    actions: {
  
        getEdlevels(context){
            axios.get("api/educationlevels")
            .then((response) =>{
                const edlevels = []
                for(let i = 0; i < response.data.results.length; i++){
                    edlevels.push({
                        indice: (i+1),
                        id_education_level:                 response.data.results[i].id_education_level,
                        level:                              response.data.results[i].level,
                        })
                }
                context.commit("enviarEdlevels", edlevels)
                console.log(response.data.results);
            })
            .catch(() =>{})
        },

        createEdlevel(context, edlevel) {
            return new Promise((resolve, reject) => {
                axios.post("api/educationlevels", edlevel)
                .then((response) => {
                    resolve(response.data)
                })
                .catch(() => {
                    reject()
                })
            })
        },


        getEdlevel(context, edlevel) {
            return new Promise((resolve, reject) => {
                axios.get("api/educationlevels/"+edlevel)
                .then((response)  => {
                    resolve(response.data.results)
                })
                .catch(() => {
                    reject()
                })
            })
        },
        


        updateEdlevel(context, edlevel) {
            return new Promise((resolve, reject) => {
                axios.put("api/educationlevels/"+edlevel.id_education_level, edlevel)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },



        deleteEdlevel(context, edlevel) {
            return new Promise((resolve, reject) => {
                axios.delete("api/educationlevels/"+edlevel)
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

export default edlevels