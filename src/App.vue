<template>
  <h4 style="text-align: left">Production par Clément REGIS et Clément ALLAVENA</h4>
  <hr/>
  <div id="global">
    <ul>
      <li><router-link to="/" class="link">Home</router-link></li>
      <li><router-link to="/game" class="link">Jouer</router-link></li>
      <li><router-link to="/stats" class="link">Stats</router-link></li>
      <li style="float:right"><router-link to="/about" class="link">À propos</router-link></li>
      <li style="float:right"><router-link to="/help" class="link">Aide</router-link></li>
    </ul>

    <div style="text-align: center; width: auto">
      <router-view/>
    </div>
  </div>
  
</template>

<script>

import Game from "./component/Game";

export default {
  name: 'App',
  components: {Game},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  margin-bottom: 40px;
  padding: 0;
  overflow: hidden;
  background-color: lightgray;
  border-radius: 5px;
}

li {
  float: left;
}


li .link {
  display: block;
  text-align: center;
  padding: 14px 30px;
  text-decoration: none;
  font-size : 20px;
  font-weight: bold;
}

/* Change the link color to #111 (black) on hover */
li .link:hover {
  background-color: grey;
}

#global {
  margin: 0px 20%;
  display: auto;
}
</style>
