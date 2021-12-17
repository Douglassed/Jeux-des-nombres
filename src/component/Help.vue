<template>
  <div>
    <h2>Explication des règle du jeu</h2>
    <p>
      Le but du jeu est de trouver le nombre aléatoire compris entre 0 et 1000,<br/>
      vous avez 10 minutes et autant d'essai que vous le souhaitez
    </p>
    <div>
      <router-link to="/game">
        <button class="btn btn-primary" >Jouer une partie</button>
      </router-link>
    </div>
    <div>
        <router-link to="/">
          <button class="btn btn-success">Retour</button>
        </router-link>

    </div>
  </div>

</template>

<script>
export default {
  name: "Help"
}
</script>

<style scoped>
div {
    margin: 35px;
}
</style>