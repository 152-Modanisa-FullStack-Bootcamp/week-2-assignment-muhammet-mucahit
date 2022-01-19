import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import WatchPage from "../pages/WatchPage";
import FavoritesPage from "../pages/FavoritesPage";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
      props: true,
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

export default router
