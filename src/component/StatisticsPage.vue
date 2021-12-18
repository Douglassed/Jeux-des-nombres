<template>
  <div class="card" style="width: 500px;margin: auto">
    <div class="card-body">

      <h2 class="card-title">Statistiques</h2>
      <hr/>
      <div class="card-text">
        <p>Parties jouées : {{ playGame }}</p>
        <p>Parties gagnées : {{ winGame }}</p>
        <p>Parties perdues : {{ loseGame }}</p>
        <p>Taux de victoire : {{ (winGame/playGame)*100 }} %</p>
        <p>Temps moyen de partie : {{ moyTime }}</p>
        <p>Nombre de tentatives moyen par partie : {{ nbTryGame }}</p>
      </div>
    </div>
  </div>
  <br/>
  <br/>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Numero</th>
      <th scope="col">Tentatives</th>
      <th scope="col">Temps</th>
      <th scope="col">Résultat</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in gameList" :key="item.id">
      <th scope="row">{{ item.numGame }}</th>
      <td>{{ item.nbOfTry }}</td>
      <td>{{ item.timeElapsed }}</td>
      <td>
        <svg v-if="item.victory" xmlns="http://www.w3.org/2000/svg" width="25" height="25 " fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
          <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>

      </td>
    </tr>
    </tbody>
  </table>
  <router-link to="/"><button class="btn btn-primary">Retour accueil</button></router-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "StatisticsPage",
  data : function () {
    return {
      playGame : this.getAllGamesCount(),
      winGame : this.getAllWiningGames(),
      loseGame : this.getAllLosingGames(),
      moyTime : 0,
      nbTryGame : this.getAllNbOfTry(),
      gameList : [],
    }
  },
  mounted() {
    this.fill()
  },
  methods : {
    ...mapGetters([
        'getAllGames',
        'getAllGamesCount',
        'getAllWiningGames',
        'getAllLosingGames',
        'getAllTime',
        'getAllNbOfTry'
    ]),
    fill : function () {
      console.log(this.getAllGames())
      console.log(this.getAllNbOfTry())
      this.gameList = this.getAllGames()
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>