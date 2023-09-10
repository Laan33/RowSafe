import { createRouter, createWebHistory } from "vue-router";

import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import NewRide from "../views/NewRide.vue";
import History from "../views/History.vue";

    const routeInfos = [
        { path : "/", redirect: "login" },
        { path : "/home", component : Home },
        { path : "/register", component : Register },
        { path : "/login", component : Login },
        { path : "/newride", component : NewRide },
        { path : "/history", component : History },

        // default redirect to home
        { path: "/:pathMatch(.*)*", redirect: "/" }
    ];
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    });
    
    export default router;