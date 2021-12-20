<template>
  <div>
    <h2>Jeux des nombres</h2>
    <div>
      <router-link to="/game">
        <button class="btn btn-primary" id="cp_btn_startGame">Jouer une partie</button>
      </router-link>
    </div>
    <div>
      <router-link to="/help">
        <button class="btn btn-danger">Règles du jeu</button>
      </router-link>
    </div>
    <div>
        <router-link to="/stats">
          <button class="btn btn-success">Consulter les anciennes parties</button>
        </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
div {
  margin: 15px;
}
</style>