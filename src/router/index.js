
import HomeView from '../views/home/HomeView.vue'

import LoginView from '../views/auth/LoginView'

import UserList from '../views/users/UserListView'
import UserCreate from '../views/users/UserCreateView'
import UserEdit from '../views/users/UserEditView'

import EditorialList from '../views/editorials/EditorialListView'
import EditorialCreate from '../views/editorials/EditorialCreateView'
import EditorialEdit from '../views/editorials/EditorialEditView'
import EditorialGraphic from '../views/editorials/EditorialGraphicView'

import AuthorList from '../views/authors/AuthorListView'
import AuthorCreate from '../views/authors/AuthorCreateView'
import AuthorEdit from '../views/authors/AuthorEditView'

import EdlevelsList from '../views/education_levels/EdLevelsListView'
import EdlevelsCreate from '../views/education_levels/EdLevelsCreateView'
import EdlevelsEdit from '../views/education_levels/EdLevelsEditView'

import TypeMaList from '../views/type_materials/TypeMaListView'
import TypeMaCreate from '../views/type_materials/TypeMaCreateView'
import TypeMaEdit from '../views/type_materials/TypeMaEditView'

import MaterialsList from '../views/materials/MaterialsListView'
import MaterialsCreate from '../views/materials/MaterialsCreateView'
import MaterialsEdit from '../views/materials/MaterialsEditView'
import MaterialsDetail from '../views/materials/MaterialsDetailView'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  //Usuarios
  {
    path: '/users',
    name: 'users',
    component: UserList
  },
  {
    path: '/users/create',
    name: 'userscreate',
    component:  UserCreate
  },
  {
    path: '/users/edit/:id',
    name: 'usersedit',
    component:  UserEdit
  },

  //Materiales
  {
    path: '/materials',
    name: 'materials',
    component: MaterialsList
  },
  {
    path: '/materials/create',
    name: 'materialscreate',
    component:  MaterialsCreate
  },
  {
    path: '/materials/edit/:id',
    name: 'materialsedit',
    component:  MaterialsEdit
  },
  {
    path: '/materials/detail/:id',
    name: 'materialsdetail',
    component:  MaterialsDetail
  },

   //editoriales
   {
    path: '/editorials',
    name: 'editorials',
    component: EditorialList
  },
  {
    path: '/editorials/create',
    name: 'editorialcreate',
    component:  EditorialCreate
  },
  {
    path: '/editorials/edit/:id',
    name: 'editorialedit',
    component:  EditorialEdit
  },
  {
    path: '/editorials/graphic',
    name: 'editorialgraphic',
    component:  EditorialGraphic
  },

  //autores
  {
    path: '/authors',
    name: 'authors',
    component: AuthorList
  },
  {
    path: '/authors/create',
    name: 'authorcreate',
    component:  AuthorCreate
  },
  {
    path: '/authors/edit/:id',
    name: 'authoredit',
    component:  AuthorEdit
  },

  //Niveles educativos
  {
    path: '/edlevels',
    name: 'edlevels',
    component: EdlevelsList
  },
  {
    path: '/edlevels/create',
    name: 'edlevelcreate',
    component:  EdlevelsCreate
  },
  {
    path: '/edlevels/edit/:id',
    name: 'edleveledit',
    component:  EdlevelsEdit
  },

  //Niveles educativos
  {
    path: '/typematerials',
    name: 'typematerials',
    component: TypeMaList
  },
  {
    path: '/typematerials/create',
    name: 'typematerialcreate',
    component:  TypeMaCreate
  },
  {
    path: '/typematerials/edit/:id',
    name: 'typematerialedit',
    component:  TypeMaEdit
  },
]
