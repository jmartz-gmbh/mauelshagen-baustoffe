import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Catalog from '../pages/catalog.vue';
import CatalogCategoryView from '../pages/catalog/category/view.vue';
import Impressum from '../pages/impressum.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/catalog/category/:id', component: CatalogCategoryView },
  { path: '/impressum', component: Impressum },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})