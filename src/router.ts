import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Personal from './views/Personal.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import General from './layout/General.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    // },
      {
      path: '/',
      name: 'general',
      component: General,
      children: [
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'about',
          component: About,
        },
        {
          path: 'personal',
          component: Personal,
          meta: { requiresAuth: true },
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      beforeEnter: (to, from, next) => {
        window.localStorage.removeItem("token");
        next({
          path: '/login',
          query: { redirect: "/"}
        });
      }
    },
  ],
});
