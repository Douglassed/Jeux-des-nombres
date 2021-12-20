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
      <button class="btn btn-danger" type="button" data-toggle="modal" data-target="#forfeitDialog" id="cp_btn_abandon">Abandonner</button>
    </div>
    <div class="col">
      <!-- PlaceHolder -->
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="forfeitDialog" tabindex="-1" aria-labelledby="forfeitLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="forfeitLabel">Abandonner ?</h5>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Etes vous sur de vouloir abandonner au bout de {{nbOfTry}} essais?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          <button type="button" class="btn btn-primary" @click="forfeit()" data-dismiss="modal" id="cp_btn_validAbandon">Abandonner</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "Game",
  data() {
    return {
      FAKE_NUMBER_TO_GUESS: 100,
      nbOfTry: 0,
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
    ...mapMutations(['ADD_GAME', 'increment']),
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
    forfeit() {
      this.endgame("", false)
    },
    endgame: function (time, victory) {
      this.increment()
      this.ADD_GAME({
        nbOfTry: this.nbOfTry, timeElapsed: time, victory: victory
      })
      this.$router.push({
        name: 'endgame',
        params: {
          nbOfTry: this.nbOfTry,
          time: time,
          victory: victory
        }
      })
    },
    guess(){
      this.showHint = true;
      this.nbOfTry++;
      if (this.guessVar == this.FAKE_NUMBER_TO_GUESS){
        this.endgame(this.minutes + ":" + this.seconds, true)
      }
      if (this.guessVar > this.FAKE_NUMBER_TO_GUESS){
        this.hint = "C'est moins"
      } else {
        this.hint = "C'est plus"
      }
    }
  },
  computed: {
    countDownComputed() {
      if (this.finish) {
        clearInterval(this.intervalId)
        this.forfeit()
      }
      return this.minutes + ":" + this.seconds;
    }
  }
}
</script>

<style scoped>
</style>