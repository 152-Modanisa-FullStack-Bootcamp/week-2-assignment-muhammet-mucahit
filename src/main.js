import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";
import FavoritesPage from "./pages/FavoritesPage";

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
      props: true
    },
    {
      path: "/watch",
      name: "WatchPage",
      component: WatchPage,
      props: true
    },
    {
      path: "/favorites/:userid",
      name: "FavoritesPage",
      component: FavoritesPage,
      props: true
    }
  ]
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
