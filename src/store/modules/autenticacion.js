import axios from 'axios'

const materials = {
    state: {
        auth: false,
        user: '',
  
    },
    getters: {
        user(state) {
            return state.user
        },

        auth(state){
          return state.auth
        },
    },
    mutations: {
        enviarUser(state, user){
        state.auth = user.auth,
        state.user = user.user
      }
    },
    
    actions: {
  
        login(context, user) {
            return new Promise((resolve, reject) => {
                axios.post("api/login", user)
                .then((response) => {
                    localStorage.setItem('usuario', JSON.stringify(response.data.results.user));
                    localStorage.setItem('access_token', JSON.stringify(response.data.results.access_token));
                    const user = {
                        user: response.data,
                        auth: true
                    }
                    context.commit("enviarUser", user)
                    resolve()
                })
                .catch(() => {
                    reject()
                }) 
                
            })
        
        },


        authenticate(context, usuario) {
            const user = {
                user: usuario,
                auth: true
            }
            context.commit("enviarUser", user)
        },


        logout(context) {
            return new Promise((resolve, reject) => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('usuario');
                axios.get("api/logout")
                .then(() => {
                    
                    const user = {
                        user: null,
                        auth: false
                    }
                    context.commit("enviarUser", user)
                    resolve()
                })
                .catch(() => {
                    reject()
                })
            }) 
        }
  
      
  
    },
    modules: {
    }
}

export default materials