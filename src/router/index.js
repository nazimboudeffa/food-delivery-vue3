import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import ContactPage from '@/views/ContactPage.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage
  },
  {
    name: 'Products',
    path: '/products',
    component: ProductsPage
  },
  {
    name: 'Contact',
    path: '/contact',
    component: ContactPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;