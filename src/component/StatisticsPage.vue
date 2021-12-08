<template>
  <div class="card" style="width: 500px;margin: auto">
    <div class="card-body">

      <h2 class="card-title">Statitiques</h2>
      <hr/>
      <div class="card-text">
        <p>Parties jouées : {{ playGame }}</p>
        <p>Parties gagnées : {{ winGame }}</p>
        <p>Parties perdues : {{ loseGame }}</p>
        <p>Taux de victoire : {{ percentage }}</p>
        <p>Temps moyen de partie : {{ moyTime }}</p>
        <p>Nombre de tentatives moyen par partie : {{ nbGame }}</p>
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
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.tenta }}</td>
      <td>{{ item.time }}</td>
      <td>
        <svg v-if="item.win" xmlns="http://www.w3.org/2000/svg" width="25" height="25 " fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
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
export default {
  name: "StatisticsPage",
  data : function () {
    return {
      playGame : 0,
      winGame : 0,
      loseGame : 0,
      percentage : 0,
      moyTime : 0,
      nbGame : 0,
      test : {id : 0, tenta : 34, time : "3:30", win: false},
      tested : {id : 1, tenta : 1, time : "10:00", win: true},
      gameList : [],
    }
  },
  mounted() {
    this.fill()
  },
  methods : {
    fill : function () {
      this.gameList[0] = this.test
      this.gameList[1] = this.tested
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>