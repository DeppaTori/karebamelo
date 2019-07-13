import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

Vue.config.productionTip = false;

Vue.use(Vuetify);

router.beforeEach((to, from, next) => {
  if (to.matched.some( record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!window.localStorage.getItem('token')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
    // next({
    //   path: '/login',
    //   query: { redirect: to.fullPath },
    // });
  } else {
    next(); // make sure to always call next()!
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
