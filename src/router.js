import { createWebHistory, createRouter } from "vue-router";
import Game from "./component/Game";
import EndGame from "./component/EndGame";
import HomePage from "./component/HomePage";
import StatisticsPage from "./component/StatisticsPage";
import About from "./component/About";
import Help from "./component/Help";

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
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/help",
        name: "Help",
        component: Help
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
