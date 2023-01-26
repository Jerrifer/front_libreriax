import Vue from 'vue'
import Vuex from 'vuex'
import editorials from './modules/editorials'
import authors from './modules/authors'
import edlevels from './modules/educationlevels'
import typematerials from './modules/typematerials'
import materials from './modules/materials'
import users from './modules/users'
import autenticacion from './modules/autenticacion'

Vue.use(Vuex)


export const store = new Vuex.Store({
  modules: {
    editorials,
    authors,
    edlevels,
    typematerials,
    materials,
    users,
    autenticacion
  }
})
