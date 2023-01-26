import axios from 'axios'

const authors = {

    state: {
        authors: [],
  
    },

    getters: {
  
        obtenerAuthors(state){
          return state.authors
        },
    },

    mutations: {
        enviarAuthors(state, authors){
        state.authors = authors
      }
    },

    actions: {
  
        getAuthors(context){
            axios.get("api/authors")
            .then((response) =>{
                const authors = []
                for(let i = 0; i < response.data.results.length; i++){
                    authors.push({
                        indice: (i+1),
                        id_author:                     response.data.results[i].id_author,
                        name_author:                   response.data.results[i].name_author,
                        })
                }
                context.commit("enviarAuthors", authors)
                console.log(response.data);
            })
            .catch(() =>{})
        },

        createAuthor(context, author) {
            return new Promise((resolve, reject) => {
                axios.post("api/authors", author)
                .then((response) => {
                    resolve(response.data)
                })
                .catch(() => {
                    reject()
                })
            })
        },


        getAuthor(context, author) {
            return new Promise((resolve, reject) => {
                axios.get("api/authors/"+author)
                .then((response)  => {
                    resolve(response.data.results)
                })
                .catch(() => {
                    reject()
                })
            })
        },
        


        updateAuthor(context, author) {
            return new Promise((resolve, reject) => {
                axios.put("api/authors/"+author.id_author, author)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },



        deleteAuthor(context, author) {
            return new Promise((resolve, reject) => {
                axios.delete("api/authors/"+author)
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

export default authors