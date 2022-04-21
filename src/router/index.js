import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsShowView from '../views/PostsShowView'
import PostsCreateView from '../views/PostCreateView'


const routes = [
  {
    path: '/posts',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/new',
    name: 'new-posts',
    component: PostsCreateView
  },
  {
    path: '/posts/:id',
    name: 'show',
    component: PostsShowView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
