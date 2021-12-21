<template>
  <div>
    <p :style="JSON.parse(this.victory) ? 'color:green' : 'color:red'">{{ message() }}</p>
  </div>
  <div>
    <router-link to="/">
      <button class="btn btn-primary">Retour à l'accueil</button>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "EndGame",
  props: {
    nbOfTry: "",
    time: String,
    victory: false
  },
  methods: {
    message() {
      if (JSON.parse(this.victory)){
        console.log("je suis rentré")
        return "Vous avez gagné avec " + this.nbOfTry + " tentatives en " + this.time
      } else {
        return "Vous avez perdu avec " + this.nbOfTry + " tentatives"
      }
    }
  }
}
</script>

<style scoped>
div + div {
  margin : 10px;
}
p {
  font-size: 150%;
}
</style>