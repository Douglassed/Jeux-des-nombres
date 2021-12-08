<template>
  <div>
    <p :style="JSON.parse(this.victory) ? 'color:green' : 'color:red'">{{ message() }}</p>
  </div>
</template>

<script>
export default {
  name: "EndGame",
  props: {
    nbOfTry: Number,
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

</style>