import {createStore} from 'vuex'
import game from "./component/Game";

export const store = createStore({
    state() {
        let averageElapsedTime;
        let token;
        return {
            count: 0,
            games: [], // game(numGame, nbOfTry, timeElapsed, victory)
            averageElapsedTime,
            averageNbOfTry: Number,
            token
        }
    },
    getters: {
        getAllGames: state => {
            return state.games
        },
        getAllGamesCount: state => {
            return state.games.length
        },
        getAllWiningGames: state => {
            return state.games.filter(game => game.victory === true).length
        },
        getAllLosingGames: state => {
            return state.games.filter(game => game.victory === false).length
        },
        getAllTime: state => {
            return state.games.map(game => game.timeElapsed)
        },
        getAllNbOfTry: state => {
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            if (state.games.length === 0) return 0
            return state.games.map(game => game.nbOfTry).reduce(reducer)
        },
        getToken: state => {
            return state.token
        }
    },
    mutations: {
        ADD_GAME: (state, payload) => {
            state.games.push({numGame: state.count, nbOfTry: payload.nbOfTry, timeElapsed: payload.timeElapsed, victory: payload.victory })
        },
        increment (state){
            state.count++
        },
        ADD_TOKEN: (state, payload) => {
            state.token = payload.token
        }
    }
})
