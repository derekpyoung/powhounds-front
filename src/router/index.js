import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsShowView from '../views/PostsShowView'
import PostsCreateView from '../views/PostCreateView'
import UserIndexView from '../views/UserIndexView'
import UserShowView from '../views/UserShowView.vue'
import LogInView from '../views/LogInView'
import LogOutView from '../views/LogOutView'
import SignUpView from '../views/SignUpView'
import UserPostIndex from '../views/UserPostIndex'
import HomePageView from '../views/HomePageView'


const routes = [
  {
    path: '/posts',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'homepage',
    component: HomePageView
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
  {
    path: '/users/:id',
    name: 'users-show',
    component: UserShowView
  },
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
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
