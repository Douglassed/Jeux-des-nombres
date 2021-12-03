<template>
  <div class="row align-items-center">
    <div class="col">
      <!-- PlaceHolder -->
    </div>
    <div class="col">
      <div >
        {{ countDownComputed }}
      </div>
      <br/>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Entrer un nombre" v-model="guessVar" aria-describedby="button-addon2">
        <button class="btn btn-secondary" type="button" id="button-addon2" @click="guess()">Deviner</button>
      </div>
    </div>
    <div class="col">
      <!-- PlaceHolder -->
    </div>
  </div>
  <hr/>
  <div class="alert alert-warning" role="alert" v-if="showHint" >
    {{ hint }}
  </div>
  <hr/>
  <div class="row align-items-center">
    <div class="col">
      <!-- PlaceHolder -->
    </div>
    <div class="col">
      <button class="btn btn-danger" type="button">Abandonner</button>
    </div>
    <div class="col">
      <!-- PlaceHolder -->
    </div>
  </div>

</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      FAKE_NUMBER_TO_GUESS: 100,
      guessVar: 0,
      minutes: 10,
      seconds: 0,
      finish: false,
      intervalId: 0,
      showHint: false,
      hint: "",
      initialMinute: 10 //Change this params to change the initial time
    }
  },
  mounted() {
    this.countDown();
  },
  unmounted() {
    clearInterval(this.intervalId)
  },
  methods: {
    decrease: function() {
      if (this.minutes === 0 && this.seconds === 0) {
        this.finish = true;
        this.minutes = this.initialMinute;
      }
      if (this.seconds === 0) {
        this.minutes--;
        this.seconds = 60;
      }
      this.seconds--;
    },
    countDown(){
      this.intervalId = setInterval(function (){
        if (!this.finish)
          this.decrease()
      }.bind(this),1000)
    },
    guess(){
      this.showHint = true
      if (this.guessVar == this.FAKE_NUMBER_TO_GUESS){
        this.hint = "Bien joué"
        return
      }
      if (this.guessVar > this.FAKE_NUMBER_TO_GUESS){
        this.hint = "C'est moins"
        return
      } else {
        this.hint = "C'est plus"
      }
    }
  },
  computed: {
    countDownComputed() {
      if (this.finish) {
        clearInterval(this.intervalId)
        return "TERMINÉ"
      }
      return this.minutes + ":" + this.seconds;
    }
  }
}
</script>

<style scoped>
</style>