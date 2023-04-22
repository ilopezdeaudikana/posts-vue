import { createRouter, createWebHashHistory } from 'vue-router'
import Posts from '../pages/posts/Posts.vue'
import Login from '../pages/login/Login.vue'

export const router = createRouter({
  routes: [
    { path: '/', component: Login },
    {
      path: '/posts',
      component: Posts
    },
  ],
  history: createWebHashHistory()
})
