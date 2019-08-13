import Vue from "vue";
import Router from "vue-router";
import store from "./store";

// importing views
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

// navigation links
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
      beforeEnter(to, from, next) {
        if (!store.state.idToken) {
          next();
        } else {
          next("/dashboard");
        }
      }
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
      beforeEnter(to, from, next) {
        if (!store.state.idToken) {
          // going to the dashboard right after sign up/sign in is complete
          next();
        } else {
          next("/dashboard");
        }
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next();
        } else {
          next("/signin");
        }
      }
    }
  ]
});
