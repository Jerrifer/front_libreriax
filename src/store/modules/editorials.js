import axios from 'axios'

const editorials = {
    state: {
        editorials: [],
        // editorial: ""
  
    },
    getters: {
  
        obtenerEditorials(state){
          return state.editorials
        },
    },
    mutations: {
        enviarEditorials(state, editorials){
        state.editorials = editorials
      }
    },
    actions: {
  
        getEditorials(context){
            axios.get("api/editorials")
            .then((response) =>{
                const editorials = []
                for(let i = 0; i < response.data.results.length; i++){
                    editorials.push({
                        indice: (i+1),
                        id_editorial:                     response.data.results[i].id_editorial,
                        name_editorial:                   response.data.results[i].name_editorial,
                        })
                }
                context.commit("enviarEditorials", editorials)
                console.log(response.data);
            })
            .catch(() =>{})
        },

        createEditorial(context, editorial) {
            return new Promise((resolve, reject) => {
                axios.post("api/editorials", editorial)
                .then((response) => {
                    resolve(response.data)
                })
                .catch(() => {
                    reject()
                })
            })
        },


        getEditorial(context, editorial) {
            return new Promise((resolve, reject) => {
                axios.get("api/editorials/"+editorial)
                .then((response)  => {
                    resolve(response.data.results)
                })
                .catch(() => {
                    reject()
                })
            })
        },
        


        updateEditorial(context, editorial) {
            return new Promise((resolve, reject) => {
                axios.put("api/editorials/"+editorial.id_editorial, editorial)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },



        deleteEditorial(context, editorial) {
            return new Promise((resolve, reject) => {
                axios.delete("api/editorials/"+editorial)
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

export default editorials