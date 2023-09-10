import { createRouter, createWebHistory } from "vue-router";

import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import NewRide from "../views/NewRide.vue";
import History from "../views/History.vue";

    const routeInfos = [
        {
            path : "/",
            name: "Home",
            component : Home
        },
        {
            path : "/register",
            name: "Register",
            component : Register
        },
        {
            path : "/login",
            name: "Login",
            component : Login
        },
        {
            path : "/newride",
            name: "NewRide",
            component : NewRide
        },
        {
            path : "/history",
            name: "History",
            component : History
        },
    ];
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    });
    
    export default router;