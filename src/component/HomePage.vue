<template>
  <div>
    <h4 style="text-align: left">Nom et premon : Clément REGIS et Clément ALLAVENA </h4>
    <hr/>
    <h2>Jeux des nombres</h2>
    <div>
      <router-link to="/game">
        <button class="btn btn-primary" >Jouer une partie</button>
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