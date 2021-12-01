import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/Component/HomePage";
import App from "@/App";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage, /* <--- Change it */
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
