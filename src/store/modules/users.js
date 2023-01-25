import axios from 'axios'

const users = {
    state: {
        users: [],
    },
    getters: {
  
        obtenerUsers(state){
          return state.users
        },
    },
    mutations: {
        enviarUsers(state, users){
        state.users = users
      }
    },
    actions: {
  
        getUsers(context){
            axios.get("api/users")
            .then((response) =>{
                const users = []
                for(let i = 0; i < response.data.results.length; i++){
                    users.push({
                        indice: (i+1),
                        id_user:                response.data.results[i].id_user,
                        name:                   response.data.results[i].name,
                        })
                }
                context.commit("enviarUsers", users)
                console.log(response.data);
            })
            .catch(() =>{})
        },


        createUser(context, user) {
            return new Promise((resolve, reject) => {
                axios.post("api/users", user)
                .then((response) => {
                    resolve(response.data)
                })
                .catch(() => {
                    reject()
                })
            })
        },


        getUser(context, user) {
            return new Promise((resolve, reject) => {
                axios.get("api/users/"+user)
                .then((response)  => {
                    resolve(response.data.results)
                })
                .catch(() => {
                    reject()
                })
            })
        },
        


        updateUser(context, user) {
            return new Promise((resolve, reject) => {
                axios.put("api/users/"+user.id_user, user)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },



        deleteUser(context, user) {
            return new Promise((resolve, reject) => {
                axios.delete("api/users/"+user)
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

export default users