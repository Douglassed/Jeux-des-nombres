import { createWebHistory, createRouter } from "vue-router";
import Game from "./component/Game";
import EndGame from "./component/EndGame";
import HomePage from "@/Component/HomePage";
import StatisticsPage from "@/Component/StatisticsPage";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
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
    },
    {
        path: "/stats",
        name: "Statistics",
        component: StatisticsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
