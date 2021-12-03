<template>
  <div class="card" style="width: auto">
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
    <tr v-for="item in gameList">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.tenta }}</td>
      <td>{{ item.time }}</td>
      <td> {{ item.img }}</td>
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
      test : {id : 0, tenta : 34, time : "3:30", img: "valid"},
      tested : {id : 1, tenta : 1, time : "10:00", img: "cross"},
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