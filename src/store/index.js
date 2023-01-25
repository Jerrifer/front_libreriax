import Vue from 'vue'
import Vuex from 'vuex'
import editorials from './modules/editorials'
import authors from './modules/authors'
import edlevels from './modules/educationlevels'
import typematerials from './modules/typematerials'


Vue.use(Vuex)


export const store = new Vuex.Store({
  modules: {
    editorials,
    authors,
    edlevels,
    typematerials
  }
})
