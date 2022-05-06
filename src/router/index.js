import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsShowView from '../views/PostsShowView'
import PostsCreateView from '../views/PostCreateView'
import UserIndexView from '../views/UserIndexView'
// import UserShowView from '..views/UserShowView'
import LogInView from '../views/LogInView'
import LogOutView from '../views/LogOutView'
import SignUpView from '../views/SignUpView'
import UserPostIndex from '../views/UserPostIndex'


const routes = [
  {
    path: '/posts',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogOutView
  },
  {
    path: '/users',
    name: 'users-index',
    component: UserIndexView
  },
  // {
  //   path: '/users/:id',
  //   name: 'users-show',
  //   component: UserShowView
  // },
  {
    path: '/posts/new',
    name: 'new-posts',
    component: PostsCreateView
  },
  {
    path: '/userposts/:id',
    name: 'user-posts-index',
    component: UserPostIndex
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
