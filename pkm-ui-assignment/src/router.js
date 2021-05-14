import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/users",
      name: "users",
      component: () => import("./components/UserIndex")
    },
    {
      path: "/users/:id",
      name: "user-details",
      component: () => import("./components/UserShow")
    },
    // {
    //   path: "/add",
    //   name: "add",
    //   component: () => import("./components/UserAdd")
    // }
  ]
});