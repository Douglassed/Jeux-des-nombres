<template>
  <div >
    {{ countDownComputed }}
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      guess: 0,
      minutes: 10,
      seconds: 0,
      finish: false,
      intervalId: 0,
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
    }
  },
  computed: {
    countDownComputed() {
      if (this.finish) return "TERMINÉ"
      return this.minutes + ":" + this.seconds;
    }
  }
}
</script>

<style scoped>
</style>