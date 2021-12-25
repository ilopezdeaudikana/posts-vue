import { createRouter, createWebHashHistory } from 'vue-router';
import Posts from './pages/posts/Posts.vue';
import Mine from './pages/posts/mine/Mine.vue';
import Others from './pages/posts/others/Others.vue';
import Login from './pages/login/Login.vue';

export const router = createRouter({
  routes: [
    { path: '/', component: Login },
    {
      path: '/posts',
      component: Posts,
      children: [
        { path: '/posts/mine', component: Mine,  name: 'mine', },
        { path: '/posts/others', component: Others },
      ],
    },
  ],
  history: createWebHashHistory(),
});
