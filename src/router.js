import { createWebHistory, createRouter } from "vue-router";
import Game from "./component/Game";
import EndGame from "./component/EndGame";
import HomePage from "./component/HomePage";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage, /* <--- Change it */
    },
    {
        path: "/game",
        name: "Game",
        component: Game,
    },
    {
        path: "/endGame",
        name: "endgame",
        component: EndGame,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
