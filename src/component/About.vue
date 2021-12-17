<template>
  <div>
    <h2>Informations des cléments !</h2>
    <p>Nous sommes fondateur de l'appelation : "cléments" avec un 's' à la fin<br/>
    Nous sommes issues du groupe de TP 41 de la faculté de Paul Sabatier à Toulouse en première année de Master mention Informatique </p>
    <label>Laissez nous un petit message :</label>
    <input type="text" id="txtSearch" placeholder="Message ici !" v-model="name" @keyup.enter="handleSubmit" size="25"/>

  </div>

</template>

<script>
export default {
  name: "About",
  data : function () {
      return {
        name : ""
    }
  },
  methods : {
    handleSubmit : function (e) {
      e.preventDefault();
      console.log(this.name);
      this.name = ""
    }
  }
}
</script>

<style scoped>
div {
  margin: 15px;
}
label{
  display: block;
}
</style>