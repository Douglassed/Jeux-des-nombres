<template xmlns="http://www.w3.org/1999/html">
  <div class="row align-items-center">
    <div class="col">
      <!-- PlaceHolder -->
    </div>
    <div class="col">
      <div>
        {{ countDownComputed }}
      </div>
      <br/>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Entrer un nombre" v-model="guessVar"
               aria-describedby="button-addon2" @keypress.enter="guess()">
        <button class="btn btn-secondary" type="button" id="button-addon2" @click="guess()" :disabled="guessLoading" @keypress.enter="guess()">
          Deviner
        </button>
      </div>
    </div>
    <div class="col">
      <!-- PlaceHolder -->
    </div>
  </div>
  <hr/>
  <div class="alert alert-warning" role="alert" v-if="showHint">
    <div class="spinner-border" role="status" v-if="guessLoading">
      <span class="visually-hidden">Loading...</span>
    </div>
    {{ hint }}
    <br/>
    (Nombre d'essais: {{ nbOfTry }})
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
          Etes vous sur de vouloir abandonner au bout de {{ nbOfTry }} essais?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          <button type="button" class="btn btn-primary" @click="forfeit(this.minutes + ':' + this.seconds)" data-dismiss="modal">Abandonner</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import axios from "axios";

export default {
  name: "Game",
  data() {
    return {
      nbOfTry: 0,
      guessVar: 0,
      minutes: 10,
      seconds: 0,
      finish: false,
      intervalId: 0,
      showHint: false,
      guessLoading: false,
      hint: "",
      api_link: "",
      initialMinute: 10 //Change this params to change the initial time
    }
  },
  created() {
    this.api_link = "https://vuejs-rest-challenge.herokuapp.com"
  },
  mounted() {
    this.getTokenApi();
    this.countDown();
  },
  unmounted() {
    clearInterval(this.intervalId)
  },
  methods: {
    ...mapMutations(['ADD_GAME', 'increment', 'ADD_TOKEN']),
    ...mapGetters(['getToken']),
    decrease: function () {
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
    countDown() {
      this.intervalId = setInterval(function () {
        if (!this.finish)
          this.decrease()
      }.bind(this), 1000)
    },
    forfeit(time) {
      this.endgame(time, false)
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
    guess() {
      this.showHint = true;
      this.nbOfTry++;
      this.guessApi().then(value => {
        this.hintReveal(value.data.code)
        this.guessLoading = true
      })
          .catch(reason => console.log(reason))
          .finally(() => this.guessLoading = false)
    },
    hintReveal(hintIndex) {
      if (hintIndex === 0) {
        this.endgame(this.minutes + ":" + this.seconds, true)
      }
      if (hintIndex === -1) {
        this.hint = "C'est moins"
      } else {
        this.hint = "C'est plus"
      }
    },
    getTokenApi() {
      axios.get("https://vuejs-rest-challenge.herokuapp.com/token")
          .then(response => {
            this.ADD_TOKEN({token: response.data.token})
          })
          .catch(error => console.log(error))
    },
    async guessApi() {
      const body = {token: this.getToken(), guess: this.guessVar}
      return await axios.post(this.api_link + "/try", body);
    }
  },
  computed: {
    countDownComputed() {
      if (this.finish) {
        clearInterval(this.intervalId)
        this.forfeit("10:00")
      }
      return this.minutes + ":" + this.seconds;
    }
  }
}
</script>

<style scoped>
</style>